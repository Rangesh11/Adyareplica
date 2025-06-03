import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, User, LayoutGrid, Wand2, Cloud, ShoppingBag, Menu, X } from 'lucide-react'
import adyaLogo from '../../assets/adya_logo.png'
import Showdemo from './Showdemo'

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const platformItems = [
    { icon: User, title: "Agent Studio", description: "Turn enterprise workflows into AI-powered agents and copilots." },
    { icon: LayoutGrid, title: "App Studio", description: "Ideas to Applications in Minutes. Deploy Anywhere. No Code Needed." },
    { icon: Wand2, title: "Model Studio", description: "Build, fine-tune, and scale LLMs - elegantly tailored to your business." },
    { icon: Cloud, title: "Cloud Studio", description: "Flexible AI deployment - optimized to scale on any cloud or on-premises." },
    { icon: ShoppingBag, title: "AI Marketplace", description: "Your AI destination for enterprise-ready solutions, deployed in minutes." },
  ]

  const productsItems = [
    { icon: User, title: "AI Sales Rep", description: "Turn Conversations into Conversions with an AI Sales Rep That Never Sleeps." },
    { icon: LayoutGrid, title: "AI Marketer", description: "AI-Powered Marketer That Drives Engagement, Leads, and Growth — Automatically." },
    { icon: Wand2, title: "AI Data Analyst", description: "Automated Analysis. Actionable Insights. No Delay. No Guesswork." },
    { icon: Cloud, title: "AI Support Agent", description: "AI-Powered Customer Service That Delivers at Every Touchpoint." },
    { icon: ShoppingBag, title: "AI Recruiter", description: "Screen, Shortlist, and Schedule—Your AI Recruiter Handles It All." },
  ]

  const industriesItems = [
    { icon: User, title: "Healthcare", description: "AI agents that support patients, streamline operations, and assist clinicians—24/7, with precision." },
    { icon: LayoutGrid, title: "Banking & Finance", description: "Automate onboarding, research, and personalize financial services with intelligent AI agents." },
    { icon: Wand2, title: "Retail & Ecommerce", description: "Deliver personalized shopping experiences, automate support, and optimize operations with AI agents." },
    { icon: Cloud, title: "Education & Edtech", description: "Empower learners and educators with AI tutors, enrollment assistants, and content generators." },
    { icon: ShoppingBag, title: "Hiring & Recruitment", description: "Streamline hiring, onboarding, and internal support with intelligent AI recruiters and HR agents." },
  ]

  const navMenus = [
    { title: "Platform", items: platformItems },
    { title: "Products", items: productsItems },
    { title: "Industries", items: industriesItems },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] bg-opacity-90 backdrop-blur border-b border-gray-800 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={adyaLogo} alt="Adya Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 ml-auto mr-10 text-white">
          {navMenus.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => setHoveredMenu(menu.title)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center space-x-1 hover:text-blue-400">
                <span>{menu.title}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {hoveredMenu === menu.title && (
                <div className="absolute top-full left-0 mt-2 w-[26rem] bg-black/95 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl z-50">
                  <div className="p-4 space-y-1">
                    {menu.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-4 p-3 rounded-md hover:bg-gray-800 cursor-pointer transition-all"
                      >
                        <item.icon className="text-white w-5 h-5 mt-1" />
                        <div>
                          <h3 className="text-white font-medium text-sm">{item.title}</h3>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="hover:text-blue-400 transition-colors">Company</button>
        </nav>

        {/* Showdemo button for desktop */}
        <div className="hidden md:flex items-center">
          <Showdemo />
        </div>

        {/* Mobile: Showdemo button left of menu icon */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <Showdemo />
          <button
            className="text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-95 z-50 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <img src={adyaLogo} alt="Adya Logo" className="h-10" />
            <button
              className="text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-8 text-white text-lg">
            {/* Only show main topics in mobile nav */}
            {navMenus.map((menu) => (
              <div key={menu.title} className="flex items-center gap-2 mb-2">
                <span>{menu.title}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            ))}
            <Link to="/company" className="hover:text-blue-400 transition-colors">Company</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
