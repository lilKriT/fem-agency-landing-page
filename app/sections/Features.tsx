import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        {/* Egg */}
        <div className="bg-[url('/desktop/image-transform.jpg')] bg-cover bg-center order-2"></div>

        {/* Transform */}
        <div className="flex justify-end items-center order-1 py-36 pr-24">
          <div className="max-w-prose flex flex-col justify-center items-start gap-8 ml-16">
            <h2 className="text-5xl font-black">Transform your brand</h2>

            <p className="text-gray-400">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <Link
              href={"/"}
              className="text-xl font-serif px-2 after:h-2 after:w-[calc(100%+1rem)] after:bg-yellow-500 after:block after:relative after:-left-2 after:right-8 after:-top-3 after:-z-10 after:opacity-30 after:rounded-full"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Cup */}
        <div className="bg-[url('/desktop/image-stand-out.jpg')] bg-cover bg-center order-3">
          Cup
        </div>

        {/* Stand out */}
        <div className="order-4">
          <p>Stand out to the right audience</p>

          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>

          <p>Learn more</p>
        </div>

        {/* Cherries / Graphic design */}
        <div className="bg-[url('/desktop/image-graphic-design.jpg')] bg-cover bg-center order-5">
          <p>
            Graphic design Great design makes you memorable. We deliver artwork
            that underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>

        {/* Orange / Photography */}
        <div className="bg-[url('/desktop/image-photography.jpg')] bg-cover bg-center order-6">
          <p>
            Photography Increase your credibility by getting the most stunning,
            high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
