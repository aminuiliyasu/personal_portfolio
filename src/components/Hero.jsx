import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 sm:pt-16 pb-10 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-primary-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-primary-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="section-container text-center relative z-10 !py-8 sm:!py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center text-white shadow-2xl ring-4 ring-primary-400/50 ring-offset-2 sm:ring-offset-4 ring-offset-slate-900 transform hover:scale-105 transition-all duration-500 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/50 to-primary-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {!imageError ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                    alt="Aminu Iliyasu" 
                    className="w-full h-full object-cover relative z-10 rounded-full"
                    style={{ objectPosition: 'center 30%' }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center text-4xl sm:text-6xl font-bold relative z-10 rounded-full">
                    AI
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up tracking-tight px-1">
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              Aminu Iliyasu
            </span>
          </h1>
          
          <div className="mb-8 sm:mb-10 animate-fade-in-up animation-delay-200 px-1">
            <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-primary-600/20 border border-primary-500/30 mb-3 sm:mb-4 max-w-full">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 leading-snug">
                Cloud & DevOps Engineer
              </h2>
            </div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-medium mt-3 sm:mt-4 px-2">
              Computer Science Engineering · AWS · Kubernetes · SRE
            </p>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed px-1">
            B.Sc. Computer Science Engineering graduate (GPA 4.8/5.0) with production AWS experience shipping 
            containerized Spring Boot services, CI/CD pipelines, and Terraform infrastructure-as-code. Seeking Cloud, DevOps, and SRE roles.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up animation-delay-600 w-full max-w-lg sm:max-w-none mx-auto">
            <a
              href="mailto:iliyasuaminu50@gmail.com"
              className="group flex items-center justify-center gap-3 text-gray-200 hover:text-white transition-all bg-slate-800/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/50 shadow-lg hover:shadow-primary-500/20 active:scale-[0.98] sm:hover:scale-105 min-w-0"
            >
              <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors flex-shrink-0">
                <FaEnvelope className="text-primary-400" />
              </div>
              <span className="font-medium text-sm sm:text-base truncate">iliyasuaminu50@gmail.com</span>
            </a>
            <a
              href="tel:+36301241895"
              className="group flex items-center justify-center gap-3 text-gray-200 hover:text-white transition-all bg-slate-800/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/50 shadow-lg hover:shadow-primary-500/20 active:scale-[0.98] sm:hover:scale-105"
            >
              <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors flex-shrink-0">
                <FaPhone className="text-primary-400" />
              </div>
              <span className="font-medium text-sm sm:text-base">+36 30 124 1895</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-gray-200 bg-slate-800/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-slate-700 shadow-lg">
              <div className="bg-primary-600/20 p-2 rounded-lg flex-shrink-0">
                <FaMapMarkerAlt className="text-primary-400" />
              </div>
              <span className="font-medium text-sm sm:text-base">Pécs, Hungary</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 animate-fade-in-up animation-delay-800 w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="https://www.linkedin.com/in/aminu-iliyasu-005109253/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-primary-500/50 active:scale-[0.98] sm:hover:scale-105 sm:hover:-translate-y-1 font-bold text-base sm:text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaLinkedin className="relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a
              href="https://github.com/aminuiliyasu"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-[0.98] sm:hover:scale-105 sm:hover:-translate-y-1 font-bold text-base sm:text-lg relative overflow-hidden border border-slate-700"
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
