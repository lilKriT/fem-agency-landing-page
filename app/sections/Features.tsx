import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min lg:auto-rows-[42rem]">
        {/* Egg */}
        <div className="bg-[url('/mobile/image-transform.jpg')] lg:bg-[url('/desktop/image-transform.jpg')] bg-cover bg-center lg:order-2 aspect-square lg:aspect-auto"></div>

        {/* Transform */}
        <div className="flex justify-center lg:justify-end items-center py-12 lg:py-36 lg:pr-24 lg:order-1">
          <div className="max-w-prose flex flex-col justify-center items-center lg:items-start gap-8 mx-4 lg:ml-16 text-center lg:text-left">
            <h2 className="text-5xl font-black">Transform your brand</h2>

            <p className="text-gray-400">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <Link
              href={"/"}
              className="text-2xl font-serif px-2 after:h-2 after:w-[calc(100%+1rem)] after:bg-yellow-500 after:block after:relative after:-left-2 after:right-8 after:-top-3 after:-z-10 after:opacity-30 after:rounded-full hover:after:bg-yellow-800 motion-safe:after:duration-300 ease-in-out"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Cup */}
        <div className="bg-[url('/mobile/image-stand-out.jpg')] lg:bg-[url('/desktop/image-stand-out.jpg')] bg-cover bg-center lg:order-3 aspect-square lg:aspect-auto"></div>

        {/* Stand out */}
        <div className="flex justify-start items-center py-12 lg:py-36 lg:pl-24 lg:order-4">
          <div className="max-w-prose flex flex-col justify-center items-center lg:items-start gap-8 mx-4 lg:mr-16 text-center lg:text-left">
            <h2 className="text-5xl font-black">
              Stand out to the right audience
            </h2>

            <p className="text-gray-400">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>

            <Link
              href={"/"}
              className="text-2xl font-serif px-2 after:h-2 after:w-[calc(100%+1rem)] after:bg-red-400 after:block after:relative after:-left-2 after:right-8 after:-top-3 after:-z-10 after:opacity-30 after:rounded-full hover:after:bg-red-800 motion-safe:after:duration-300 ease-in-out"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Cherries / Graphic design */}
        <div className="bg-[url('/mobile/image-graphic-design.jpg')] lg:bg-[url('/desktop/image-graphic-design.jpg')] bg-cover bg-top lg:order-5 flex flex-col justify-end items-center gap-8 p-16 text-center ">
          <h2 className="text-4xl font-black text-green-800 mt-68 lg:mt-0">
            Graphic design
          </h2>
          <p className="text-green-800 max-w-[50ch] text-balance">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>

        {/* Orange / Photography */}
        <div className="bg-[url('/mobile/image-photography.jpg')] lg:bg-[url('/desktop/image-photography.jpg')] bg-cover bg-top lg:order-6 flex flex-col justify-end items-center gap-8 p-16">
          <h2 className="text-4xl font-black text-blue-800 mt-68 lg:mt-0">
            Photography
          </h2>
          <p className="text-blue-800 text-center max-w-[50ch] text-balance">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
