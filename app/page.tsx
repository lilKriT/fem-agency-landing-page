import Image from "next/image";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Features />
      <p>About Services Projects Contact</p>

      <p>Transform your brand</p>

      <p>
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>

      <p>Learn more</p>

      <p>Stand out to the right audience</p>

      <p>
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we’ll build and extend your brand in
        digital places.{" "}
      </p>

      <p>Learn more</p>

      <p>
        Graphic design Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention.
      </p>

      <p>
        Photography Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image.
      </p>

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
