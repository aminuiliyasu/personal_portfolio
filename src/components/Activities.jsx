import React from 'react'
import { FaUniversity, FaUsers, FaHandshake, FaCode } from 'react-icons/fa'

const Activities = () => {
  const activities = [
    {
      organization: 'University of Pécs',
      role: 'International Student Ambassador',
      period: 'October 2024 - October 2025',
      icon: <FaUniversity className="text-white" size={24} />,
      gradient: 'from-primary-500 to-primary-600',
      bg: 'from-primary-500/20 to-primary-600/20'
    },
    {
      organization: 'Erasmus Student Network (ESN Pécs)',
      role: 'Social Committee Member',
      period: 'September 2024 - June 2025',
      icon: <FaUsers className="text-white" size={24} />,
      gradient: 'from-primary-600 to-primary-700',
      bg: 'from-primary-600/20 to-primary-700/20'
    },
    {
      organization: 'National Union of Students in Hungary (HÖOK)',
      role: 'International Student Mentor',
      period: 'August 2024 - August 2025',
      icon: <FaHandshake className="text-white" size={24} />,
      gradient: 'from-primary-500 via-primary-600 to-primary-700',
      bg: 'from-primary-500/20 via-primary-600/20 to-primary-700/20'
    },
    {
      organization: 'Google Developer Student Club (GDSC)',
      role: 'Logistics Team Lead',
      period: '2023 - 2024',
      icon: <FaCode className="text-white" size={24} />,
      gradient: 'from-primary-600 to-primary-800',
      bg: 'from-primary-600/20 to-primary-800/20'
    }
  ]

  return (
    <section id="activities" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">Activities & Leadership</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline line */}
                {index < activities.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/30 via-primary-600/30 to-transparent"></div>
                )}
                
                <div className="relative flex gap-8">
                  {/* Icon with timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`relative bg-gradient-to-br ${activity.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className={`absolute -inset-1 bg-gradient-to-br ${activity.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <div className="relative z-10">
                        {React.cloneElement(activity.icon, { size: 28 })}
                      </div>
                    </div>
                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br ${activity.gradient} rounded-full border-4 border-slate-900 shadow-lg`}></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-grow bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl shadow-xl border border-slate-700/50 relative overflow-hidden group-hover:border-primary-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    {/* Accent border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-primary-300 transition-colors">
                            {activity.organization}
                          </h3>
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/10 border border-primary-500/30 backdrop-blur-sm`}>
                            <div className={`w-2 h-2 bg-gradient-to-r ${activity.gradient} rounded-full`}></div>
                            <span className="text-sm font-bold text-primary-300">
                              {activity.role}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/70 border border-slate-700/70 backdrop-blur-sm">
                          <div className={`w-2 h-2 bg-primary-400 rounded-full animate-pulse`}></div>
                          <span className="text-sm font-semibold text-gray-200">{activity.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
