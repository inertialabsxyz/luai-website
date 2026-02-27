import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Audience } from "@/components/Audience";
import { WhyNow } from "@/components/WhyNow";
import { DesignPartnerCTA } from "@/components/DesignPartnerCTA";
import { FAQ } from "@/components/FAQ";
import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <WhyNow />
        <DesignPartnerCTA />
        <FAQ />
        <section className="py-20 px-6">
          <EmailSignup />
        </section>
      </main>
      <Footer />
    </>
  );
}
