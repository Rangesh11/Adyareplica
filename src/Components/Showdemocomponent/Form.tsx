import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from '../../redux/formSlice';
import type { AppDispatch } from "../../redux/store";

const revenueOptions = [
  "Less than $10M",
  "$10M - $500M",
  "$500M+"
];

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormDataState] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    revenue: '',
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormDataState(JSON.parse(storedData));
    }
  }, []);

  const handleExit = () => navigate("/");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataState(prev => ({ ...prev, [name]: value }));
  };

  const handleRevenueClick = (value: string) => {
    setFormDataState(prev => ({ ...prev, revenue: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFormData(formData));
    localStorage.setItem('formData', JSON.stringify(formData)); // Save to localStorage
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-white">
      {/* Exit icon at top right */}
      <button
        type="button"
        onClick={handleExit}
        className="absolute top-4 right-4 z-20"
        aria-label="Exit"
      >
        <X className="w-8 h-8 text-[#353535]" />
      </button>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 px-0 py-0 relative bg-transparent shadow-none rounded-none"
      >
        <h1 className="font-manrope font-semibold md:font-medium text-[28px] md:text-[35px] xl:text-[42px] leading-snug md:leading-tight text-[#000000] md:text-[#353535] tracking-tight text-center">
          Register below for a Demo
        </h1>
        <p className="text-center text-gray-500 mb-6 text-base">
          Fill out the form and our team will reach out to schedule your personalized demo.
        </p>

        {/* Full Name */}
        <div>
          <label className="block text-[#353535] opacity-60 text-xs sm:text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-2 sm:py-1.5 text-sm sm:text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] sm:h-[40px] md:h-[44px] font-inter font-medium"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-[#353535] opacity-60 text-xs sm:text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Work Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-2 sm:py-1.5 text-sm sm:text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] sm:h-[40px] md:h-[44px] font-inter font-medium"
            placeholder="Enter your work email"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-[#353535] opacity-60 text-xs sm:text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-2 sm:py-1.5 text-sm sm:text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] sm:h-[40px] md:h-[44px] font-inter font-medium"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-[#353535] opacity-60 text-xs sm:text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-[#9A9A9A99] text-[#353535] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] xl:rounded-[14px] px-2 py-2 sm:py-1.5 text-sm sm:text-base shadow-[0px_1.16px_2.31px_0px_#0000000D] focus:outline-[#9A9A9A] h-[36px] sm:h-[40px] md:h-[44px] font-inter font-medium"
            placeholder="Enter your company name"
            required
          />
        </div>

        {/* Annual Revenue */}
        <div>
          <label className="block text-[#353535] opacity-60 text-xs sm:text-sm md:text-base xl:text-lg font-semibold font-nunito mb-1">
            Annual Revenue
          </label>
          <div className="flex flex-wrap gap-3">
            {revenueOptions.map(rev => (
              <button
                key={rev}
                type="button"
                onClick={() => handleRevenueClick(rev)}
                className={`font-semibold text-[11px] sm:text-[13px] rounded-[12px] sm:rounded-[15px] py-2 sm:py-3 px-4 sm:px-5 font-inter whitespace-nowrap duration-300 border
                  ${formData.revenue === rev
                    ? 'bg-[#a0ff9c] text-[#367822] border-[#7be86e]'
                    : 'bg-[#f3f4f6] text-[#353535] border-[#e5e7eb] hover:bg-[#e0fbe0]'}
                `}
              >
                {rev}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#428CFC] hover:bg-[#427fc4] duration-300 rounded-[16px] sm:rounded-[20px] text-white py-3 sm:py-4 font-bold font-nunito text-base sm:text-lg max-sm:mx-[10px]"
        >
          Schedule my demo
        </button>

        {/* Success Message */}
        {success && (
          <div className="absolute top-4 left-4 bg-green-100 text-green-700 p-3 rounded shadow z-20 text-sm font-medium">
            ✅ Form submitted successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
