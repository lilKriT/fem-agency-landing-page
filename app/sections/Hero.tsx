import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[40rem] lg:min-h-dvh flex justify-center items-center bg-[url('/desktop/image-header.jpg')] bg-cover bg-bottom">
      <div className="grid grid-rows-3 gap-16 justify-items-center items-center">
        <h1 className="text-5xl md:text-7xl xl:text-[7rem] text-white text-center uppercase">
          We are creatives
        </h1>
        <Image
          src={"/icon-arrow-down.svg"}
          alt="Look down"
          width={36}
          height={114}
        />
      </div>
    </section>
  );
};

export default Hero;
