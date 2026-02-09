import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Features />
      <p>About Services Projects Contact</p>

      <p>Client testimonials</p>

      <p>
        We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit. Emily R. Marketing Director
      </p>

      <p>
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
        success made it a satisfying and enjoyable experience. Thomas S. Chief
        Operating Officer
      </p>

      <p>
        Incredible end result! Our sales increased over 400% when we worked with
        Sunnyside. Highly recommended! Jennie F. Business Owner
      </p>

      <p>About Services Projects Contact</p>
    </div>
  );
}
