import React from 'react';
 // replace with your ToyTopia logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 text-gray-200 px-8 py-12 mt-10">
      <div className="grid md:grid-cols-5 gap-8">
        
        {/* About Section */}
        <div>
          <div className="flex items-center gap-1 ">
            {/* <img className="h-[30px] w-[30px]" src={logo} alt="ToyTopia Logo" /> */}
            <img  className="w-[50px] h-[50px]" src="https://i.ibb.co.com/1JfzHMBf/toy-removebg-preview.png" alt="" />
            <h3 className="text-white font-bold text-lg">ToyTopia</h3>
          </div>
          <p className="text-[13px]  text-gray-300 leading-relaxed">
            ToyTopia is your local wonderland for kids’ toys — offering playful, 
            safe, and educational products. Bring joy and imagination to every child’s world!
          </p>
        </div>

        {/* Shop Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Shop</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">All Toys</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Ideas</a></li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Customer Support</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-4 h-4" />
              <span>@ToyTopiaToys</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-4 h-4" />
              <span>@ToyTopiaStore</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4" />
              <span>@ToyTopia_Fun</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-4 h-4" />
              <span>support@toytopia.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-left md:text-center text-white text-sm border-t border-[#1096B5] pt-4 mt-10">
        © 2025 ToyTopia. <br className="block md:hidden" /> Bringing Smiles, One Toy at a Time!
      </div>
    </footer>
  );
};

export default Footer;
