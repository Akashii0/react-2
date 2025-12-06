import watch1 from "../assets/hublot.png";
import watch2 from "../assets/patek.png";
import watch3 from "../assets/rolex.png";
import watch4 from "../assets/audemars.png";
import watch5 from "../assets/omega.png";

function brands() {
  return (
    <div className="h-[25vh] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <p className="text-brand-gray font-inter text-2xl">SUPPORTED BRAND</p>
        <div className="flex gap-20">
          <img src={watch1} alt="watch1" className="h-12" />
          <img src={watch2} alt="watch2" className="h-12" />
          <img src={watch3} alt="watch3" className="h-12" />
          <img src={watch4} alt="watch4" className="h-12" />
          <img src={watch5} alt="watch5" className="h-12" />
        </div>
      </div>
    </div>
  );
}

export default brands;
