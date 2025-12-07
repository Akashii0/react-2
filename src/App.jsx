// import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import watchBg from "./assets/watch2-bg.png";
import Collections from "./components/collections";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Collections />
      <div
        className="relative bg-[url(./assets/watch2-bg-mobile.png)] md:bg-[url(./assets/watch2-bg.png)] bg-cover bg-center h-[80vh] font-inter text-white"
        // style={{ backgroundImage: `url(${watchBg})` }}
      >
        <p className="absolute right-0 pt-6 md:pt-20 pr-6 md:pr-24 max-w-[70%] md:max-w-[30%]">
          Own a piece of history with our limited-edition watches, crafted in
          small quantities and featuring rare materials.
        </p>

        <div className="absolute flex flex-col bottom-0 pl-6 md:pl-24 pb-6 md:pb-30">
          <p className="text-5xl">Limited Editions</p>
          <p className="max-w-[70%]">
            Discover the charm of vintage watches or invest in pre-owned
            timepieces that stand the test of time.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
