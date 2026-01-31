import React, { useState } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaAward } from 'react-icons/fa'

const Education = () => {
  const [logoError, setLogoError] = useState(false)

  return (
    <section id="education" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">Education</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl shadow-2xl border border-slate-700/50 relative overflow-hidden group hover:border-primary-500/50 transition-all duration-500">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 p-10 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-10 border-b border-slate-700">
                <div className="flex items-center gap-6">
                  {/* University Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                    <div className="relative bg-white w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-500/30 transform group-hover:scale-110 transition-all duration-500 overflow-hidden p-3">
                      {!logoError ? (
                        <img 
                          src="/university_logo.png" 
                          alt="University of Pécs Logo" 
                          className="w-full h-full object-contain"
                          onError={() => setLogoError(true)}
                        />
                      ) : (
                        <FaGraduationCap className="text-primary-600" size={48} />
                      )}
                    </div>
                  </div>
                  
                  {/* University Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        University of Pécs
                      </h3>
                      <div className="bg-primary-600/20 p-2 rounded-lg border border-primary-500/30">
                        <FaAward className="text-primary-300" size={24} />
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-200 font-bold">
                      B.Sc. Computer Science Engineering
                    </p>
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="flex items-center gap-3 text-primary-300 font-semibold text-lg bg-primary-600/10 px-6 py-3 rounded-xl border border-primary-500/20 backdrop-blur-sm">
                  <FaCalendarAlt className="text-primary-300" />
                  <span>Graduated: January 2026</span>
                </div>
              </div>
              
              {/* CGPA Highlight Section */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl p-6 shadow-xl relative overflow-hidden group/cgpa hover:shadow-primary-500/30 transition-all duration-500">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/cgpa:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="bg-slate-900/70 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/10">
                    <FaTrophy className="text-primary-300" size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-primary-200/80 font-medium mb-1 uppercase tracking-wider">CGPA</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-white">4.80</span>
                      <span className="text-primary-200/70 font-semibold text-lg">/ 5.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
