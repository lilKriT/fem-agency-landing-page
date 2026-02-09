import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Testimonials />
      <Gallery />
    </div>
  );
}
