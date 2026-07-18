import React, { useState } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaAward, FaBook } from 'react-icons/fa'

const Education = () => {
  const [logoError, setLogoError] = useState(false)

  const coursework = [
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Architecture & OOP',
    'Operating Systems',
    'Computer Networks (TCP/IP)',
    'Computer Architecture',
    'Web Services',
    'Agile Methodologies',
    'Information Systems & Control'
  ]

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
            
            <div className="relative z-10 p-6 sm:p-10 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-700">
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                  {/* University Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary-500/30 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                    <div className="relative bg-white w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-500/30 transform group-hover:scale-110 transition-all duration-500 overflow-hidden p-2 sm:p-3">
                      {!logoError ? (
                        <img 
                          src={`${import.meta.env.BASE_URL}university_logo.png`}
                          alt="University of Pécs Logo" 
                          className="w-full h-full object-contain"
                          onError={() => setLogoError(true)}
                        />
                      ) : (
                        <FaGraduationCap className="text-primary-600" size={36} />
                      )}
                    </div>
                  </div>
                  
                  {/* University Info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        University of Pécs
                      </h3>
                      <div className="bg-primary-600/20 p-1.5 sm:p-2 rounded-lg border border-primary-500/30 flex-shrink-0 hidden sm:block">
                        <FaAward className="text-primary-300" size={20} />
                      </div>
                    </div>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-200 font-bold leading-snug">
                      B.Sc. Computer Science Engineering
                    </p>
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="flex items-center gap-2 sm:gap-3 text-primary-300 font-semibold text-sm sm:text-lg bg-primary-600/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-primary-500/20 backdrop-blur-sm self-start">
                  <FaCalendarAlt className="text-primary-300 flex-shrink-0" />
                  <span>Aug 2022 – Jan 2026</span>
                </div>
              </div>
              
              {/* CGPA Highlight Section */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl p-4 sm:p-6 shadow-xl relative overflow-hidden group/cgpa hover:shadow-primary-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/cgpa:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                  <div className="bg-slate-900/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-white/10 flex-shrink-0">
                    <FaTrophy className="text-primary-300" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-primary-200/80 font-medium mb-1 uppercase tracking-wider">CGPA</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">4.80</span>
                      <span className="text-primary-200/70 font-semibold text-base sm:text-lg">/ 5.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Coursework Section */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="bg-primary-600/20 p-2 sm:p-2.5 rounded-lg border border-primary-500/30 flex-shrink-0">
                    <FaBook className="text-primary-300" size={18} />
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">Related Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-600/10 text-primary-300 rounded-lg text-xs sm:text-sm font-semibold border border-primary-500/30 backdrop-blur-sm hover:bg-primary-600/20 hover:border-primary-500/50 hover:text-primary-200 transition-all"
                    >
                      {course}
                    </span>
                  ))}
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
