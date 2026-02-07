import {Hero} from "@/sections/Hero";
import {StatsSection} from "@/sections/StatsSection";
import {ServicesShowcase} from "@/sections/ServicesShowcase";
import {HowWeWork} from "@/sections/HowWeWork";
import {WhyChooseUsSection} from "@/sections/WhyChooseUsSection";
import {CaseStudies} from "@/sections/CaseStudies";
import {Cta} from "@/sections/CTA";

export default function Home() {
  return (
      <div className="pt-6">
        <Hero/>
        <StatsSection/>
        <ServicesShowcase/>
        <HowWeWork/>
        <WhyChooseUsSection/>
        <CaseStudies/>
        <Cta/>
      </div>
  );
}
