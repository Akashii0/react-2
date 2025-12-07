import { useState, useMemo, useEffect } from "react";
import arrowLeft from "../assets/circle-arrow-left.png";
import arrowRight from "../assets/circle-arrow.png";
import Watch from "../components/watch";

import filterBtn from "../assets/filter-btn.png";
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
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  // Update itemsPerPage on window resize
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 4);
      setPage(0);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // FILTER WATCHES
  const filteredWatches = useMemo(() => {
    if (category === "All") return allWatches;
    return allWatches.filter((w) => w.brand === category);
  }, [category]);

  const totalPages = Math.ceil(filteredWatches.length / itemsPerPage);

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  const changeCategory = (c) => {
    setCategory(c);
    setPage(0);
    setShowMobileDropdown(false); // close mobile dropdown on selection
  };

  return (
    <div className="pb-12 px-6 md:px-24 flex flex-col items-center justify-center gap-10 bg-black font-interLight">
      {/* Header */}
      <div className="w-full flex items-end justify-between">
        <p className="text-white text-2xl md:text-4xl">
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
      <div className="relative w-full flex md:items-center justify-between">
        {/* Desktop Filters */}
        <div className="hidden md:flex flex-col font-interLight text-white space-y-1">
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

        {/* Mobile Filter Button */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            className="flex items-center"
          >
            <img src={filterBtn} alt="filter" className="h-10" />
          </button>
          {showMobileDropdown && (
            <div className="absolute overflow-hidden top-10 mt-2 left-0 w-48 bg-white text-black rounded-lg shadow-lg z-50 flex flex-col">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => changeCategory(c)}
                  className={`text-left px-4 py-2 hover:bg-red-700 ${
                    category === c ? "bg-red-700" : ""
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Slider */}
        <div className="overflow-hidden max-w-[272px] md:max-w-[1072px] w-full">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                page * (itemsPerPage === 1 ? 272 : 1072)
              }px)`,
            }}
          >
            {filteredWatches.map((w, i) => (
              <div key={i} className="w-64 shrink-0">
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
