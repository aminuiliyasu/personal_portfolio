import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-3xl font-extrabold mb-5 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Aminu Iliyasu
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Computer Engineer with DevOps expertise, passionate about automating infrastructure and building scalable cloud solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-4 hover:text-primary-400 transition-colors group">
                <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-500/30 group-hover:bg-primary-600/30 transition-colors">
                  <FaEnvelope className="text-primary-400" />
                </div>
                <a href="mailto:iliyasuaminu50@gmail.com" className="hover:text-white transition-colors font-medium">
                  iliyasuaminu50@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 hover:text-primary-400 transition-colors group">
                <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-500/30 group-hover:bg-primary-600/30 transition-colors">
                  <FaPhone className="text-primary-400" />
                </div>
                <a href="tel:+36301241895" className="hover:text-white transition-colors font-medium">
                  +36 30 124 1895
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-600/20 p-3 rounded-lg border border-primary-500/30">
                  <FaMapMarkerAlt className="text-primary-400" />
                </div>
                <span className="font-medium">Budapest, Hungary</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/aminu-iliyasu-005109253/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 p-4 rounded-xl transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/aminuiliyasu"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 p-4 rounded-xl transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl border border-slate-600"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex justify-between items-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Aminu Iliyasu. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white p-4 rounded-full transition-all transform hover:scale-110 shadow-lg hover:shadow-primary-500/50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
