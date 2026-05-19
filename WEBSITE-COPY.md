# [PRODUCT_NAME] — Website Copy (Draft)

**Prepared:** May 2026
**Status:** Draft, pre-launch. Product name is placeholder; swap `[PRODUCT_NAME]` throughout when finalised.
**Positioning:** Per `POSITIONING.md`, the public-facing surface leads with the oracle wedge for DeFi protocols. The "verifiable execution language for AI agents" platform framing appears in the deeper "category" section, the investor outbound (separate document), and thought-leadership content — but not in the buyer-facing hero.

---

## Site structure

1. Hero
2. The trust problem with existing oracles
3. How [PRODUCT_NAME] is different
4. What we're building first
5. Who this is for
6. How it works (technical depth)
7. Honest constraints
8. The broader category (platform framing, secondary)
9. Design partner program
10. FAQ
11. Footer

---

## 1. HERO

# [PRODUCT_NAME]

### Governable execution for AI-generated systems.

### Starting with high-assurance oracles for DeFi.

Smart contracts can encode exactly which sources, which logic, and which policy they will accept. [PRODUCT_NAME] generates a deterministic program from a parametric template, runs it against approved data sources, and produces a cryptographic proof that this specific committed program ran on this specific data — verifiable on-chain. No trusted operator. No multi-sig committee. No optimistic disputes.

**[Become a design partner]** **[Get development updates]**

---

## 2. THE TRUST PROBLEM

## Every oracle requires trusting someone.

Existing oracle approaches each rely on a trust assumption that protocols handling real value should not have to make:

- **Centralised oracle networks** (Chainlink, others) require trusting that an operator network's economic and reputational security holds up under adversarial pressure. The network can be bribed, coerced, or compromised. If a bad price settles a liquidation, the slash happens after the fact.
- **TEE-based oracles** (Pyth) require trusting that Intel or AMD manufactured the enclave correctly and that the firmware was not compromised. Attestation proves code ran in a TEE; it does not prove the TEE is trustworthy.
- **Optimistic oracles** (UMA) assume correct results unless challenged within a dispute window. Fast, but requires honest disputers to be online and introduces settlement delay.
- **Custom multi-sigs** rely on the honesty of N-of-M signers — pure economic and reputational security with no cryptographic backstop.

For DeFi protocols handling real settlement value, custom aggregation logic, or treasury operations, these trust models have known failure modes. None of them allows a smart contract to specify *exactly* which sources and which aggregation logic it will accept.

---

## 3. HOW [PRODUCT_NAME] IS DIFFERENT

## Cryptographic proof of governable computation.

[PRODUCT_NAME] turns oracle logic into a cryptographic commitment. A protocol specifies the aggregation logic it wants — average these N price feeds if they agree within X basis points, return the median of these gas metrics, compute a bounded score from these fields. From a parametric policy template, [PRODUCT_NAME] generates a deterministic Lua program. The program is committed as an immutable artifact, hash-pinned, and reviewable by anyone. Every subsequent execution produces a zero-knowledge proof that:

- This specific committed program ran (committed via `policy_hash`)
- On data from the specific approved sources (committed via the input commitment)
- Under the specific policy (committed via `policy_hash`)
- And produced this specific output

A consumer contract pins itself to a `policy_hash` it controls. It will only accept proofs that match. No party in the system — not the executor, not [PRODUCT_NAME], not a compromised API key holder — can produce a valid proof that passes the check without actually satisfying every condition.

This is a qualitatively different trust model from anything else in the oracle market.

### Four primitives

- **Deterministic VM** — identical execution across machines; bit-identical results
- **Policy hash** — cryptographic commitment to allowed logic, sources, and constraints
- **TLS attestation** — provenance binding data to the server that served it, where supported
- **On-chain proof verification** — Solidity verifier; testnet-deployed

### Why "governable" matters

Existing oracles let you read a value. [PRODUCT_NAME] lets your contract specify, in advance and cryptographically, *exactly which computation it will accept*. The program is reviewable before any production execution. The policy is enforced by mathematics, not by reputation. Governance becomes a property of the proof, not a property of the operator.

---

## 4. WHAT WE'RE BUILDING FIRST

## `template_price_feed_v1`

We are starting narrow on purpose. The first shippable profile is a constrained programmable oracle for HTTPS-backed price aggregation:

- Fetch JSON from 2–5 approved HTTPS endpoints
- Extract approved numeric fields with versioned schemas
- Normalize to fixed-point integers
- Compute average, median, or bounded deviation checks
- Return a fixed output schema that smart contracts can consume directly

The profile is narrow enough to govern cryptographically — every constraint is enforced by the policy checker, not by prose — and broad enough to matter for real protocol decisions: settlement pricing, periodic rebalancing, threshold checks, reference prices for slower-moving collateral.

### The build-time vs runtime separation

Generation of the resolution program happens at build-time, from a parametric policy template. A protocol can hand-review the program (typically 50–150 lines of readable Lua) before committing it. The committed program is immutable; its hash is pinned by the consumer contract. From that point forward, every execution runs the same hand-audited program. No AI is in the runtime trust path. The architecture is auditable in the same way a smart contract is auditable.

---

## 5. WHO THIS IS FOR

## DeFi protocols that need custom aggregation with cryptographic trust.

The clearest initial fit is protocols whose decisions depend on multi-source price aggregation and whose existing oracle options force them into either fixed feeds (no custom logic) or unverified custom oracles (no cryptographic guarantee).

Specifically:

- **Lending protocols** needing guarded asset prices with deviation checks before liquidation
- **Stablecoin protocols** needing collateral pricing confirmed across multiple sources
- **Perpetuals and derivatives protocols** needing settlement inputs with explicit aggregation logic
- **Bridges and cross-chain routers** needing gas metrics from approved network sources
- **Treasury and rebalancing systems** needing verifiable reference prices

Best fit: use cases that can tolerate minutes-scale proving latency in exchange for cryptographic trust. Not a fit: real-time liquidation pricing requiring sub-minute freshness. We are explicit about this — see the constraints section below.

---

## 6. HOW IT WORKS

## Technical overview

```
Policy specification (parametric template + protocol parameters)
        │
        ▼
   Resolution program generated and committed as immutable artifact
   (build-time; reviewable; hash-pinned by consumer contract)
        │
        ▼
   Deterministic VM execution against the committed program
   - HTTPS fetches from approved domains only
   - TLS attestation captured where supported
   - Every input/output recorded on the oracle tape
        │
        ▼
   OpenVM ZK proof generation
   - Replays execution against the oracle tape
   - Produces public inputs: policy hash, program hash,
     input commitment, output commitment, TLS attestation
        │
        ▼
   On-chain Solidity verifier
   - Consumer contract enforces policy_hash == expected
   - Rejects any proof that does not match
```

### What the proof commits to

- **`policy_hash`** — the canonical hash of the policy document (allowed opcodes, permitted tool calls, domain allowlist, output schema, attestation tier per source)
- **`program_hash`** — the hash of the specific Lua bytecode that ran
- **`input_hash`** — commitment to the caller-supplied inputs (including freshness nonces)
- **`tls_attestation_hash`** — provenance commitment for HTTPS responses where the server's TLS configuration is supported by our verifier; zero for sources where attestation is not possible and the policy explicitly permits unattested responses
- **`output_hash`** — commitment to the structured output returned to the consumer

The on-chain verifier accepts proofs only when `policy_hash` matches the value the consumer contract has pinned. This is what makes the trust model cryptographic rather than reputational.

---

## 7. HONEST CONSTRAINTS

## What [PRODUCT_NAME] does not do.

We are explicit about these because under-specifying makes protocols mistrust the product and over-specifying loses credibility. Both are worse than naming the boundary.

- **Sub-minute freshness.** ZK proving over general VM execution takes minutes. [PRODUCT_NAME] is the wrong tool for real-time liquidation pricing or anything requiring sub-minute freshness guarantees. It is the right tool for settlement, periodic rebalancing, and tolerance-window pricing.
- **Universal TLS coverage.** TLS attestation requires the data source to use a supported TLS configuration (currently P-256 ECDSA with Mozilla root CAs). Sources that fall outside this envelope cannot be attested. The policy model handles this explicitly: each source is classified as `required_attested`, `preferred_attested`, or `unattested_permitted`. There is no silent fallback to zero-attestation.
- **Sub-second response replay protection.** A caller-supplied nonce committed to the input hash prevents stale responses from satisfying new proof requests, with consumer contracts enforcing recency windows. This proves the request was made after a known point; it does not prove the response was received within seconds. Tight sub-minute freshness bounds are not currently achievable.
- **Executor liveness guarantees.** At MVP, [PRODUCT_NAME] depends on at least one honest executor being willing to process requests. Because execution is deterministic, any executor running the same program on the same inputs under the same policy produces an identical proof — but cryptography cannot substitute for liveness. Decentralised executor networks with staking and slashing are post-MVP work.

These are real constraints. We name them so protocols can self-select.

---

## 8. THE BROADER CATEGORY

## Why we built it this way.

The oracle is the wedge. The underlying architecture is broader.

The codemode pattern — AI systems writing programs that orchestrate tool calls, rather than making sequential tool calls — is being validated by serious teams: Pydantic Monty, Cloudflare Code Mode, Anthropic Programmatic Tool Calling, HuggingFace Smol Agents. As LLMs increasingly produce the code that runs decisions, those programs need an execution substrate that's deterministic, bounded, and cryptographically verifiable. That substrate is what [PRODUCT_NAME] provides.

We're starting with high-assurance oracles for DeFi because the pain is acute, the buyer is sophisticated, and the proving ground is sharpest. But the same architecture applies wherever AI-generated decisions need to be auditable, governable, and verifiable by parties that don't trust the executor.

This roadmap is public. Phase 1–6 focus on the oracle wedge. Phase 7+ extends to adjacent verifiable-execution categories — insurance claims verification, DAO governance proposal evaluation, RWA compliance gating, AI agent decision verification — when oracle traction has proven the architecture.

---

## 9. DESIGN PARTNER PROGRAM

## Become a design partner.

We are working with a small set of DeFi protocols on the first integrations. Design partners get:

- Direct input on the `template_price_feed_v1` profile and the policy model
- Engineering support on testnet integration
- Co-authored case studies and joint announcements
- Priority access when mainnet support arrives
- Founding-partner pricing on the eventual commercial product

We are most useful to teams that:

- Currently rely on custom oracle solutions because Chainlink's aggregation does not fit their needs
- Have had oracle-related incidents and are looking for stronger trust guarantees
- Are designing new protocols with verifiability as a first-class requirement

**[Form: name, protocol, role, current oracle setup, specific aggregation need, target chain, timeline]**

---

## 10. FAQ

### How is this different from Chainlink?

Chainlink is a centralised oracle network whose security model is economic and reputational — protocols trust the network of operators and the staking mechanism behind them. Chainlink Price Feeds are fast and reliable, but the trust model is "we trust the operator network." If you want a smart contract to enforce *exactly* which aggregation logic it will accept, Chainlink does not give you that primitive. [PRODUCT_NAME] does: the consumer contract pins `policy_hash` and rejects any proof that does not match.

### How is this different from Pyth?

Pyth uses first-party data sources and TEE-based attestation. The trust model relies on hardware: protocols trust that Intel/AMD enclaves were manufactured correctly and that the firmware was not compromised. [PRODUCT_NAME] does not require hardware trust. Our attestation is cryptographic — a ZK proof verifiable on-chain by any party.

### How is this different from UMA?

UMA is an optimistic oracle: results are assumed correct unless challenged within a dispute window, with disputes resolved by tokenholder voting. It is well-suited to slow-resolving event-based claims with disputable outcomes. [PRODUCT_NAME] is different in two ways: (1) the resolution logic is committed to *before* execution, not voted on after; (2) there is no dispute window — the proof either verifies or it does not. The two products are complementary in many cases.

### Is the LLM in the trust path?

No. Resolution programs are generated at build-time from parametric policy templates, hand-reviewable as 50–150 lines of Lua, and committed as immutable artifacts. Consumer contracts pin a program hash. Every production execution runs the same audited program. The LLM is a build-time tool, not a runtime component. This is the same trust pattern as a smart contract that's audited by Trail of Bits and then deployed immutably.

### What is the proving latency, realistically?

Single-digit minutes for the `template_price_feed_v1` profile on current OpenVM. We are explicit that this places [PRODUCT_NAME] in a different category from real-time price feeds. The right comparison is to settlement oracles, dispute resolution layers, and slow-moving reference-price systems — not to real-time liquidation infrastructure.

### What is the on-chain verification cost?

We are measuring this as a hard MVP gate in Phase 3 of our roadmap. Solidity verification of zkVM proofs is meaningful but bounded. We will not promote the product publicly to mainnet protocols until verification gas falls inside what protocols can absorb in a settlement transaction. Specific numbers will be published when testnet measurements are complete.

### What happens if a data source does not support TLS attestation?

The policy document classifies each source as `required_attested`, `preferred_attested`, or `unattested_permitted`. If a source is `required_attested` and the executor cannot complete attestation, the execution fails — it does not silently succeed with a zero attestation. Protocols can choose strict policies (all sources required attested) or permissive policies (some sources unattested). The choice is explicit and committed via `policy_hash`.

### Can a stale response be replayed?

A caller-supplied nonce committed to the input hash makes replay detectable: replaying an old response commits to a stale `input_hash` that the consumer contract rejects. This works for use cases tolerating minutes-scale freshness. Tighter sub-minute freshness bounds are an open problem.

### What if your executor goes offline?

Because execution is deterministic, any honest executor running the same program on the same inputs under the same policy produces an identical proof. The consumer contract does not care which executor produced the proof — only that the proof verifies and `policy_hash` matches. At MVP, protocols depend on at least one honest executor being available. Decentralised executor networks with economic incentives are post-MVP.

### Is this open source?

Core runtime components are planned to be open. The VM, policy checker, and verifier libraries will be open source. Hosted execution infrastructure and operational tooling will be commercial.

### When is mainnet?

We are not setting a public date until testnet has run with design partners and the on-chain verification cost has been measured against real protocol workloads. The roadmap (Phases 1–6) is public and we will publish progress against each phase.

### Is there a token?

Not at MVP. A decentralised executor network with staking and slashing — which would naturally tokenize — is post-MVP work. We will not launch a token before the network effects justify it.

### What's the long-term vision beyond oracles?

The architecture — deterministic execution + cryptographic policy enforcement + ZK proof generation — applies to any system where AI-generated decisions need to be verifiable by parties that don't trust the executor. After oracle traction validates the wedge, we plan to extend into insurance claims verification, DAO governance proposal evaluation, RWA compliance gating, and AI agent decision verification. The roadmap will be published as the wedge validates.

### How do I integrate?

Today: apply to the design partner program. When testnet ships: integration documentation and a Solidity verifier library will be public, with SDK support for submission, polling, and result consumption.

---

## 11. FOOTER

[PRODUCT_NAME] is a product of **Inertia Labs**.

- inertialabs.xyz
- hello@inertialabs.xyz
- [GitHub: link when public repo is ready]
- [Twitter: link when handle is registered]
- [Blog / development log: link when published]

© 2026 Inertia Labs.

---

# Notes for the next steps

Things to resolve before publishing:

1. **Product name.** Replace `[PRODUCT_NAME]` throughout. Once chosen, also register: domain, Twitter handle, GitHub org, USPTO trademark search in financial-services class.
2. **Testnet contract addresses.** When Phase 3 (on-chain viability) completes, add the testnet verifier contract address and example consumer contract to the "How it works" section.
3. **First design-partner logo or testimonial.** When the first design partner signs, add their logo (with permission) to the design-partner section.
4. **Benchmark numbers.** When Phase 5 (hardening) produces baseline proof generation times and verification gas costs, replace "single-digit minutes" and "bounded" with specific numbers.
5. **Comparison table.** Consider adding a Chainlink/Pyth/UMA/custom-multisig vs [PRODUCT_NAME] table to the "How we differ" section. Defer this until you have measured comparison data.
6. **Threat model and trust-boundary doc.** Phase 5 of the roadmap requires this. Once published, link to it from the FAQ section.
7. **Open-source repos.** Once core VM and policy checker are publicly readable, link them prominently.

Positioning principles to maintain:

- **Buyer-facing surface stays oracle-focused.** Hero, body, design partner program all describe the oracle product.
- **Platform framing appears once, in Section 8 ("The broader category").** It is visible but not leading. Investors and platform-curious readers see it; DeFi engineers don't get blocked by it.
- **The build-time vs runtime separation is named explicitly in Section 4 and the FAQ.** This is the architectural feature that disarms the "LLM in the trust path" concern.
- **Honest constraints stay prominent.** Section 7 is non-negotiable; the credibility of the technical claims depends on the visibility of the limits.
