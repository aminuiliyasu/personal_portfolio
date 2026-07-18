import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 min-w-0 pr-3">
            <a href="#home" className="group relative block text-base sm:text-lg md:text-xl font-extrabold text-primary-400 hover:text-primary-300 transition-colors truncate">
              <span className="relative z-10 hidden sm:inline">Computer Science Engineering</span>
              <span className="relative z-10 sm:hidden">Aminu Iliyasu</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-baseline space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white px-3 xl:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-primary-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile / tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary-400 focus:outline-none p-2.5 rounded-lg transition-colors bg-slate-800/50 hover:bg-slate-700/50"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={22} />
              ) : (
                <FaBars size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-gray-300 active:text-white hover:text-white block px-4 py-3.5 rounded-xl text-base font-semibold transition-all overflow-hidden"
              >
                <span className="absolute inset-0 bg-primary-600/10 rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
