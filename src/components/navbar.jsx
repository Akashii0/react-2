import { useState } from "react";
import logo from "../assets/Ayria_2.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";

function navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full py-6 px-10 md:px-24 bg-brand flex items-center justify-between">
      <img src={logo} alt="logo" className="h-10 z-50" />
      <div className="hidden sm:flex gap-16 font-inter text-[18px] text-white">
        <p className="hover:text-red-700 cursor-pointer">Home</p>
        <p className="hover:text-red-700 cursor-pointer">Shop</p>
        <p className="hover:text-red-700 cursor-pointer">About</p>
        <p className="hover:text-red-700 cursor-pointer">Blog</p>
        <p className="hover:text-red-700 cursor-pointer">Contact</p>
      </div>
      <div className="hidden sm:flex gap-6">
        <img src={search} alt="search" className="h-6" />
        <img src={user} alt="user" className="h-6" />
        <img src={cart} alt="cart" className="h-6" />
      </div>

      {/* Hamburger (mobile only) */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden text-3xl text-white"
      >
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/50 z-40 font-inter flex flex-col items-center justify-center text-white text-2xl gap-6">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-10 text-4xl"
          >
            ✕
          </button>

          <p onClick={() => setOpen(false)}>Home</p>
          <p onClick={() => setOpen(false)}>Shop</p>
          <p onClick={() => setOpen(false)}>About</p>
          <p onClick={() => setOpen(false)}>Blog</p>
          <p onClick={() => setOpen(false)}>Contact</p>
          <div className="mt-10 flex gap-10">
            <button onClick={() => setOpen(false)}>
              <img src={search} alt="search" className="h-6" />
            </button>
            <button onClick={() => setOpen(false)}>
              <img src={user} alt="user" className="h-6" />
            </button>
            <button onClick={() => setOpen(false)}>
              <img src={cart} alt="cart" className="h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default navbar;
