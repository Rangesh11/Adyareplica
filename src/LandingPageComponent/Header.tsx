import React, { useState } from 'react'
import Adyalogo from 'C:/Users/Rangesh/Desktop/Adya/Adyaweb/src/assets/adya_logo.png'
import Showdemo from './Showdemo'

const navItems = [
  { title: 'Platform', items: ['Overview', 'Security', 'Integrations', 'AI Tools', 'API Access'] },
  { title: 'Products', items: ['Product A', 'Product B', 'Product C', 'Product D'] },
  { title: 'Industry', items: ['Healthcare', 'Finance', 'Education', 'Retail'] },
  { title: 'Company', items: ['About Us', 'Careers', 'Blog', 'Contact'] },
]

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = (title: any) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header className="bg-[#0a0a0a] bg-opacity-50 border-b border-b-gray-800 py-4 fixed top-0 left-0 w-full z-[60]">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div>
          <img src={Adyalogo} alt="Adya Logo" className="h-10" />
        </div>
        {/* Mobile: Showdemo button left of hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Showdemo />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-14 text-white relative">
              {navItems.map((nav) => (
                <li key={nav.title} className="relative">
                  <div
                    onClick={() => toggleDropdown(nav.title)}
                    className="cursor-pointer hover:text-blue-400 flex items-center space-x-1 group"
                  >
                    <span className="group-hover:text-blue-400">{nav.title}</span>
                    <span className="text-sm group-hover:text-blue-400">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* Dropdown Box */}
                  {activeDropdown === nav.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 py-2">
                      {nav.items.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Showdemo />
        </div>
      </div>
      {/* Mobile Nav Slide Down */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] bg-opacity-95 z-50 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col pt-12 px-8">
          {/* Adya Logo at the top left of mobile nav */}
          <div className="flex items-center mb-6">
            <img src={Adyalogo} alt="Adya Logo" className="h-12 mr-4" />
          </div>
          <button
            className="self-end text-white mb-6 -mt-12"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col gap-6 text-white text-lg">
              {navItems.map((nav) => (
                <li key={nav.title}>
                  <div
                    onClick={() => toggleDropdown(nav.title)}
                    className="cursor-pointer hover:text-blue-400 flex items-center justify-between"
                  >
                    <span>{nav.title}</span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {/* Dropdown Box */}
                  {activeDropdown === nav.title && (
                    <div className="mt-2 w-full bg-white text-black rounded shadow-lg z-50 py-2">
                      {nav.items.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <Showdemo />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
