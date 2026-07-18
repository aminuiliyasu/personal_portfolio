import React from 'react'
import { FaCode, FaCloud, FaServer, FaCog } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">About Me</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 transform hover:shadow-primary-500/20 transition-all duration-500 border border-slate-700/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  <strong className="text-primary-400 text-xl sm:text-2xl font-bold">B.Sc. Computer Science Engineering</strong> graduate (GPA 4.8/5.0) with 
                  hands-on production AWS experience shipping containerized Spring Boot services, CI/CD pipelines, and 
                  Terraform infrastructure-as-code.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  Designed and publicly deployed a full-stack e-commerce platform (modular Java backend, customer/admin 
                  web apps, Docker) with a cost-controlled live AWS runtime and an EKS-oriented Terraform target architecture 
                  (VPC, RDS, ElastiCache, ALB, CloudFront).
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  Seeking <strong className="text-primary-400 font-bold">Cloud Engineer, DevOps Engineer, and SRE</strong> roles.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700">
                <div className="text-center group cursor-pointer">
                  <div className="relative mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-5">
                    <div className="absolute inset-0 bg-primary-600/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3 sm:p-5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/50 h-full">
                      <FaCode className="text-white" size={28} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-primary-400 transition-colors leading-snug">Software Engineering</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-5">
                    <div className="absolute inset-0 bg-primary-600/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3 sm:p-5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/50 h-full">
                      <FaCloud className="text-white" size={28} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-primary-400 transition-colors leading-snug">Cloud Infrastructure</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-5">
                    <div className="absolute inset-0 bg-primary-600/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3 sm:p-5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/50 h-full">
                      <FaServer className="text-white" size={28} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-primary-400 transition-colors leading-snug">System Architecture</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-5">
                    <div className="absolute inset-0 bg-primary-600/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3 sm:p-5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/50 h-full">
                      <FaCog className="text-white" size={28} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-primary-400 transition-colors leading-snug">DevOps Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
