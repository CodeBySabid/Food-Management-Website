import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularMeals from "@/components/PopularMeals";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularMeals />
      <Testimonials />
      <CTA />
    </>
  );
}