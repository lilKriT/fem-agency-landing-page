const Gallery = () => {
  return (
    <section className="grid grid-cols-4 grid-rows-[37.5rem]">
      <div className="bg-[url('/desktop/image-gallery-milkbottles.jpg')] bg-cover bg-no-repeat bg-bottom"></div>
      <div className="bg-[url('/desktop/image-gallery-orange.jpg')] bg-cover bg-no-repeat bg-top"></div>
      <div className="bg-[url('/desktop/image-gallery-cone.jpg')] bg-cover bg-no-repeat bg-bottom"></div>
      <div className="bg-[url('/desktop/image-gallery-sugarcubes.jpg')] bg-cover bg-no-repeat bg-center"></div>
    </section>
  );
};

export default Gallery;
