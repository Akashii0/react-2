import { useState, useMemo } from "react";
import arrowLeft from "../assets/circle-arrow-left.png";
import arrowRight from "../assets/circle-arrow.png";
import Watch from "../components/watch";

import audemars from "../assets/audemars-watch.png";
import rolex from "../assets/rolex-watch.png";
import omega from "../assets/omega-watch.png";
import tag from "../assets/tag-watch.png";
import patek from "../assets/patek-watch.png";
import hublot from "../assets/hublot-watch.png";
import vacheron from "../assets/vacheron-watch.png";

function Collections() {
  const allWatches = [
    { name: "Audemars Piguet", img: audemars, brand: "Audemars Piguet" },
    { name: "Rolex", img: rolex, brand: "Rolex" },
    { name: "Omega", img: omega, brand: "Omega" },
    { name: "Patek Phillipe", img: patek, brand: "Patek Phillipe" },
    { name: "Hublot", img: hublot, brand: "Hublot" },
    { name: "Tag Heuer", img: tag, brand: "Tag Heuer" },
    {
      name: "Vacheron Constantin",
      img: vacheron,
      brand: "Vacheron Constantin",
    },
  ];

  const categories = [
    "All",
    "Rolex",
    "Patek Phillipe",
    "Audemars Piguet",
    "Hublot",
    "Tag Heuer",
    "Omega",
    "Vacheron Constantin",
  ];

  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(0);

  // FILTER WATCHES
  const filteredWatches = useMemo(() => {
    if (category === "All") return allWatches;
    return allWatches.filter((w) => w.brand === category);
  }, [category]);

  const items_per_page = 4;
  const totalPages = Math.ceil(filteredWatches.length / items_per_page);

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  // reset page when category changes
  const changeCategory = (c) => {
    setCategory(c);
    setPage(0);
  };

  return (
    <div className="pb-12 flex flex-col items-center justify-center gap-10 bg-black px-24 font-interLight">
      {/* Header */}
      <div className="w-full flex items-end justify-between">
        <p className="text-white text-4xl">
          New <br /> Collection
        </p>

        <div className="flex">
          <button onClick={prev} disabled={page === 0}>
            <img
              src={arrowLeft}
              alt="arrow-left"
              className={`h-10 transition ${
                page === 0 ? "opacity-40" : "opacity-100"
              }`}
            />
          </button>

          <button onClick={next} disabled={page === totalPages - 1}>
            <img
              src={arrowRight}
              alt="arrow-right"
              className={`h-10 transition ${
                page === totalPages - 1 ? "opacity-40" : "opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Filters + Slider */}
      <div className="w-full flex items-center justify-between">
        {/* Filters */}
        <div className="font-interLight text-white space-y-1">
          {categories.map((c) => (
            <p
              key={c}
              className={`cursor-pointer transition ${
                category === c ? "text-red-700" : "text-white"
              }`}
              onClick={() => changeCategory(c)}
            >
              {c}
            </p>
          ))}
        </div>

        {/* Slider */}
        <div className="overflow-hidden w-[1248px]">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${page * 1248}px)`,
            }}
          >
            {filteredWatches.map((w, i) => (
              <div key={i} className="w-72 shrink-0">
                <Watch name={w.name} watchImage={w.img} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === page ? "bg-red-700" : "bg-brand-gray"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Collections;
