import watch1 from "../assets/hublot.png";
import watch2 from "../assets/patek.png";
import watch3 from "../assets/rolex.png";
import watch4 from "../assets/audemars.png";
import watch5 from "../assets/omega.png";

function brands() {
  return (
    <div className="py-24 md:h-[25vh] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <p className="mb-8 text-brand-gray font-inter text-2xl">
          SUPPORTED BRAND
        </p>
        <div className="grid place-items-center grid-cols-6 grid-rows-2 gap-y-10 gap-x-4 md:flex md:gap-20">
          <img
            src={watch1}
            alt="watch1"
            className="h-12 col-span-2 col-start-1 row-start-1"
          />
          <img
            src={watch2}
            alt="watch2"
            className="h-12 col-span-2 col-start-3 row-start-1"
          />
          <img
            src={watch3}
            alt="watch3"
            className="h-12 col-span-2 col-start-5 row-start-1"
          />
          <img
            src={watch4}
            alt="watch4"
            className="h-12 col-span-2 col-start-2 row-start-2"
          />
          <img
            src={watch5}
            alt="watch5"
            className="h-12 col-span-2 col-start-4 row-start-2"
          />
        </div>
      </div>
    </div>
  );
}

export default brands;
