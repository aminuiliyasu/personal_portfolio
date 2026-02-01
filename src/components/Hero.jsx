import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="section-container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="w-52 h-52 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center text-white shadow-2xl ring-4 ring-primary-400/50 ring-offset-4 ring-offset-slate-900 transform hover:scale-110 transition-all duration-500 relative group overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/50 to-primary-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Photo - Add your photo to /public/profile-photo.jpg */}
                {!imageError ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                    alt="Aminu Iliyasu" 
                    className="w-full h-full object-cover relative z-10 rounded-full"
                    style={{ objectPosition: 'center 30%' }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center text-6xl font-bold relative z-10 rounded-full">
                    AI
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up tracking-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              Aminu Iliyasu
            </span>
          </h1>
          
          <div className="mb-10 animate-fade-in-up animation-delay-200">
            <div className="inline-block px-6 py-2 rounded-full bg-primary-600/20 border border-primary-500/30 mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400">
                Computer Engineer
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mt-4">
              Specialized in DevOps & Cloud Infrastructure
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Computer Engineer with strong DevOps expertise. Automating infrastructure, optimizing deployments, 
            and managing cloud-based solutions to deliver reliable and scalable systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:iliyasuaminu50@gmail.com"
              className="group flex items-center gap-3 text-gray-200 hover:text-white transition-all bg-slate-800/80 backdrop-blur-md px-6 py-3.5 rounded-xl hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/50 shadow-lg hover:shadow-primary-500/20 transform hover:scale-105"
            >
              <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                <FaEnvelope className="text-primary-400" />
              </div>
              <span className="font-medium">iliyasuaminu50@gmail.com</span>
            </a>
            <a
              href="tel:+36301241895"
              className="group flex items-center gap-3 text-gray-200 hover:text-white transition-all bg-slate-800/80 backdrop-blur-md px-6 py-3.5 rounded-xl hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/50 shadow-lg hover:shadow-primary-500/20 transform hover:scale-105"
            >
              <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                <FaPhone className="text-primary-400" />
              </div>
              <span className="font-medium">+36 30 124 1895</span>
            </a>
            <div className="flex items-center gap-3 text-gray-200 bg-slate-800/80 backdrop-blur-md px-6 py-3.5 rounded-xl border border-slate-700 shadow-lg">
              <div className="bg-primary-600/20 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-primary-400" />
              </div>
              <span className="font-medium">Budapest, Hungary</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-5 animate-fade-in-up animation-delay-800">
            <a
              href="https://www.linkedin.com/in/aminu-iliyasu-005109253/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-10 py-4 rounded-xl transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-1 font-bold text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaLinkedin className="relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a
              href="https://github.com/aminuiliyasu"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-10 py-4 rounded-xl transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 font-bold text-lg relative overflow-hidden border border-slate-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaGithub className="relative z-10" />
              <span className="relative z-10">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
