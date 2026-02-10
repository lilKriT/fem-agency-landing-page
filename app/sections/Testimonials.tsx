import Image from "next/image";

type Testimonial = {
  image: string;
  testimonial: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    image: "/image-emily.jpg",
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    title: "Marketing Director",
  },
  {
    image: "/image-thomas.jpg",
    testimonial:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    title: "Chief Operating Officer",
  },
  {
    image: "/image-jennie.jpg",
    testimonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: " Jennie F.",
    title: " Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-6xl flex flex-col justify-center items-center gap-16 my-16">
        <h2 className="text-2xl md:text-3xl font-black tracking-widest text-gray-400 text-center">
          Client testimonials
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-center text-center gap-8 lg:gap-16 text-balance"
            >
              <Image
                src={t.image}
                alt={"Picture of " + t.name}
                width={144}
                height={144}
                className="rounded-full w-20"
              />

              <p className="text-gray-600 leading-relaxed">{t.testimonial}</p>
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="font-serif font-black text-xl">{t.name}</p>
                <p className="text-[1rem] text-gray-400">{t.title}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
