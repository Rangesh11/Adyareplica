import adyalogo from "../../assets/adya_logo.png";
import footer1 from "../../assets/footerimage1.svg";
import footer2 from "../../assets/footerimage2.svg";

const Footer = () => {
  return (
    <footer className="bg-black p-8 w-full text-gray-300 mt-[200px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left section: Logo and description */}
        <div className="flex flex-col gap-4 md:w-1/3 md:pl-6">
          <img
            src={adyalogo}
            alt="Adya Logo"
            className="w-full max-w-xs h-auto object-contain"
          />
          <p className="text-gray-400 text-sm">
            Custom AI for Your Business – Tailored workflows that fit seamlessly
            into your enterprise systems.
          </p>
        </div>
        
        {/* Right section: Two nav columns */}
        <div className="flex gap-16 md:justify-end flex-1 max-w-md">
          <nav className="flex-1">
            <ul className="flex flex-col space-y-2 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
          <nav className="flex-1">
            <ul className="flex flex-col space-y-2 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 items-center">
        {/* Investors Section */}
        <div className="flex flex-col gap-4 md:w-1/3 items-start">
          <p className="bg-clip-text text-transparent font-manrope font-semibold text-xl bg-gradient-to-r from-white to-[#428CFC] w-fit mb-2 pl-5">
            Our Investors
          </p>
          <div className="flex flex-row gap-4 pl-5">
            <div className="bg-white w-52 h-16 rounded-lg p-2 flex items-center justify-center">
              <img src={footer1} alt="Investor 1" className="w-20 h-20 object-contain" />
            </div>
            <div className="bg-white w-52 h-16 rounded-lg p-2 flex items-center justify-center">
              <img src={footer2} alt="Investor 2" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4 pl-5 font-manrope tracking-wide">
            © 2025 Adya. All rights reserved.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Connect With Us */}
        <div className="flex flex-col gap-4 md:w-1/3 items-end">
          <p className="bg-clip-text text-transparent font-manrope font-semibold text-xl bg-gradient-to-r from-white to-[#428CFC] w-fit mb-2 pr-5">
            Connect with Us
          </p>
          <div className="flex flex-row gap-4 pr-5">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.85v-6.96h-3v-2.9h3v-2.2c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.24 2.68.24v2.95h-1.5c-1.48 0-1.94.92-1.94 1.87v2.1h3.3l-.53 2.9h-2.77v6.96A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c.553 0 1 .447 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2zm-5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 382 382">
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 
                C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844
                c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403
                c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z 
                M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 
                s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z 
                M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
                c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426
                c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912
                c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
