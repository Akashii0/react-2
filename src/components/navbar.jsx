import logo from "../assets/Ayria_2.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";

function navbar() {
  return (
    <div className="fixed top-0 z-50 w-full py-6 px-24 bg-brand flex items-center justify-between">
      <img src={logo} alt="logo" className="h-10" />
      <div className="flex gap-16 font-inter text-[18px] text-white">
        <p className="hover:text-red-700 cursor-pointer">Home</p>
        <p className="hover:text-red-700 cursor-pointer">Shop</p>
        <p className="hover:text-red-700 cursor-pointer">About</p>
        <p className="hover:text-red-700 cursor-pointer">Blog</p>
        <p className="hover:text-red-700 cursor-pointer">Contact</p>
      </div>
      <div className="flex gap-6">
        <img src={search} alt="search" className="h-6" />
        <img src={user} alt="user" className="h-6" />
        <img src={cart} alt="cart" className="h-6" />
      </div>
    </div>
  );
}

export default navbar;
