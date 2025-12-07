function hero() {
  return (
    <div
      className="relative flex bg-[url(./assets/watch-bg-mobile2.jpeg)] md:bg-[url(./assets/watch3-bg.jpeg)] items-center justify-center bg-cover h-screen md:h-dvh"
      // style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* background dimming */}
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="flex flex-col items-center gap-8 z-20 pb-32 sm:pb-0">
        <p className="font-interLight text-3xl md:text-6xl text-center text-white">
          Discover Timeless <br /> Elegance with Hōra
        </p>
        <p className="px-2 font-inter text-center text-white md:max-w-[35%]">
          we believe that every second counts. Our carefully curated collection
          of luxury and everyday timepieces offers more than just a way to keep
          time—they reflect your style, precision, and craftsmanship.
        </p>
        <div className="flex gap-4 font-inter">
          <button className="cursor-pointer py-3 px-10 bg-white rounded-2xl hover:bg-red-900 hover:text-white">
            Shop now
          </button>
          <button className="cursor-pointer py-3 px-4 border-white border rounded-2xl text-white hover:border-red-700 hover:text-red-700">
            New Collections
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-30 bg-linear-to-t from-black to-transparent"></div>
    </div>
  );
}

export default hero;
