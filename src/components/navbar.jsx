import logo from "../assets/Ayria_2.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";

function navbar() {
  return (
    <div className="fixed top-0 z-50 w-full py-6 px-24 bg-brand flex items-center justify-between">
      <img src={logo} alt="logo" className="h-10" />
      <div className="flex gap-16 font-inter text-[18px] text-white">
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
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
