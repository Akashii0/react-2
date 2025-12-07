import logo from "../assets/Ayria_2.png";

function footer() {
  return (
    <div>
      <footer className="px-6 md:px-24 flex flex-col font-interLight bg-black text-white pt-20 pb-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand */}
          <div>
            <p className="font-inter text-6xl">Hōra</p>
            <p className="text-brand-gray max-w-[80%] md:max-w-[60%] mt-4">
              Crafting timeless elegance through precision and refined design.
              Discover watches that elevate your style every second of the day.
            </p>

            <div className="flex gap-4 mt-6 opacity-70 hover:opacity-100 transition">
              {/* social icons */}
            </div>
          </div>
          <div className="md:max-w-7xl flex gap-4 md:gap-12">
            {/* Shop */}
            <div>
              <h3 className="font-inter mb-4">SHOP</h3>
              <ul className="font-interLight space-y-2 text-white/70">
                <li className="cursor-pointer hover:text-red-700">
                  Men’s Watches
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Women’s Watches
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  New Arrivals
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Limited Editions
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Accessories
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Best Sellers
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-inter mb-4">SUPPORT</h3>
              <ul className="font-interLight space-y-2 text-white/70">
                <li className="cursor-pointer hover:text-red-700">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Track Your Order
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Shipping & Delivery
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Returns & Refunds
                </li>
                <li className="cursor-pointer hover:text-red-700">
                  Warranty Policy
                </li>
                <li className="cursor-pointer hover:text-red-700">FAQs</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-inter mb-4">COMPANY</h3>
              <ul className="font-interLight space-y-2 text-white/70">
                <li className="hover:text-red-700">About Us</li>
                <li className="hover:text-red-700">Our Craftsmanship</li>
                <li className="hover:text-red-700">Sustainability</li>
                <li className="hover:text-red-700">Careers</li>
                <li className="hover:text-red-700">Terms & Conditions</li>
                <li className="hover:text-red-700">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-16">
          <p className="text-white/70 mb-4">
            Stay updated with exclusive releases, offers, and timeless classics.
          </p>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white px-4 py-3 rounded-l-full outline-none"
            />
            <button className="bg-white hover:bg-red-700 hover:text-white text-black px-6 py-3 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-white/40 mt-16 text-sm">
          © 2025 Hōra. All rights reserved. A product of Ayria Technologies.
        </div>
      </footer>
    </div>
  );
}

export default footer;
