import React from 'react'
import { FaCloud, FaCode, FaServer, FaTools, FaUsers, FaNetworkWired, FaMicrochip, FaSignal, FaCog, FaDatabase, FaJava, FaPython, FaProjectDiagram } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Engineering',
      icon: <FaMicrochip className="text-primary-600" size={24} />,
      skills: ['Operating Systems', 'Computer Architecture', 'Computer Networks', 'Signal & Systems', 'Control Systems'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-primary-600" size={24} />,
      skills: ['Java', 'Python', 'Bash Scripting'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Software Engineering',
      icon: <FaCode className="text-primary-600" size={24} />,
      skills: ['Software Engineering Principles', 'System Design', 'Version Control (Git)'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-primary-600" size={24} />,
      skills: ['SQL', 'Database Design', 'Data Management'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud Platforms',
      icon: <FaCloud className="text-primary-600" size={24} />,
      skills: ['AWS', 'GCP', 'Azure'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Configuration Management',
      icon: <FaTools className="text-primary-600" size={24} />,
      skills: ['Ansible', 'Helm Chart'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Infrastructure as Code',
      icon: <FaCode className="text-primary-600" size={24} />,
      skills: ['Terraform'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Containerization',
      icon: <FaServer className="text-primary-600" size={24} />,
      skills: ['Docker'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Container Orchestration',
      icon: <FaCloud className="text-primary-600" size={24} />,
      skills: ['Kubernetes'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'CI/CD Tools',
      icon: <FaTools className="text-primary-600" size={24} />,
      skills: ['Jenkins', 'GitHub Actions'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Monitoring & Observability',
      icon: <FaServer className="text-primary-600" size={24} />,
      skills: ['Prometheus', 'Grafana'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Project Management',
      icon: <FaProjectDiagram className="text-primary-600" size={24} />,
      skills: ['Project Planning', 'Team Coordination', 'Agile Methodologies'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers className="text-primary-600" size={24} />,
      skills: [
        'Team player',
        'Project management',
        'Stamina and consistency',
        'Good communicator',
        'Proactive attitude'
      ],
      color: 'from-gray-500 to-gray-600'
    }
  ]

  const accentColors = [
    { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', icon: 'from-blue-500 to-cyan-500', dot: 'bg-blue-500' },
    { bg: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30', icon: 'from-emerald-500 to-teal-500', dot: 'bg-emerald-500' },
    { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', icon: 'from-purple-500 to-pink-500', dot: 'bg-purple-500' },
    { bg: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-500/30', icon: 'from-orange-500 to-amber-500', dot: 'bg-orange-500' },
    { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', icon: 'from-cyan-500 to-blue-500', dot: 'bg-cyan-500' },
    { bg: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/30', icon: 'from-indigo-500 to-purple-500', dot: 'bg-indigo-500' },
    { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', icon: 'from-pink-500 to-rose-500', dot: 'bg-pink-500' },
    { bg: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30', icon: 'from-blue-500 to-indigo-500', dot: 'bg-blue-500' },
    { bg: 'from-cyan-500/20 to-teal-500/20', border: 'border-cyan-500/30', icon: 'from-cyan-500 to-teal-500', dot: 'bg-cyan-500' },
    { bg: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', icon: 'from-red-500 to-orange-500', dot: 'bg-red-500' },
    { bg: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/30', icon: 'from-yellow-500 to-amber-500', dot: 'bg-yellow-500' },
    { bg: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/30', icon: 'from-teal-500 to-cyan-500', dot: 'bg-teal-500' },
    { bg: 'from-slate-500/20 to-gray-500/20', border: 'border-slate-500/30', icon: 'from-slate-500 to-gray-500', dot: 'bg-slate-500' }
  ]

  // Organize skills into logical groups
  const skillGroups = [
    {
      title: 'Fundamentals',
      categories: [
        { title: 'Core Engineering', icon: <FaMicrochip />, skills: ['Operating Systems', 'Computer Architecture', 'Computer Networks', 'Signal & Systems', 'Control Systems'], color: 'from-blue-500 to-cyan-500' },
        { title: 'Programming Languages', icon: <FaCode />, skills: ['Java', 'Python', 'Bash Scripting'], color: 'from-emerald-500 to-teal-500' },
        { title: 'Software Engineering', icon: <FaCode />, skills: ['Software Engineering Principles', 'System Design', 'Version Control (Git)'], color: 'from-purple-500 to-pink-500' },
        { title: 'Databases', icon: <FaDatabase />, skills: ['SQL', 'Database Design', 'Data Management'], color: 'from-orange-500 to-amber-500' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      categories: [
        { title: 'Cloud Platforms', icon: <FaCloud />, skills: ['AWS', 'GCP', 'Azure'], color: 'from-cyan-500 to-blue-500' },
        { title: 'Infrastructure as Code', icon: <FaCode />, skills: ['Terraform'], color: 'from-indigo-500 to-purple-500' },
        { title: 'Configuration Management', icon: <FaTools />, skills: ['Ansible', 'Helm Chart'], color: 'from-pink-500 to-rose-500' }
      ]
    },
    {
      title: 'DevOps & Automation',
      categories: [
        { title: 'Containerization', icon: <FaServer />, skills: ['Docker'], color: 'from-blue-500 to-indigo-500' },
        { title: 'Container Orchestration', icon: <FaCloud />, skills: ['Kubernetes'], color: 'from-cyan-500 to-teal-500' },
        { title: 'CI/CD Tools', icon: <FaTools />, skills: ['Jenkins', 'GitHub Actions'], color: 'from-red-500 to-orange-500' },
        { title: 'Monitoring & Observability', icon: <FaServer />, skills: ['Prometheus', 'Grafana'], color: 'from-yellow-500 to-amber-500' }
      ]
    },
    {
      title: 'Professional Skills',
      categories: [
        { title: 'Project Management', icon: <FaProjectDiagram />, skills: ['Project Planning', 'Team Coordination', 'Agile Methodologies'], color: 'from-teal-500 to-cyan-500' },
        { title: 'Soft Skills', icon: <FaUsers />, skills: ['Team player', 'Project management', 'Stamina and consistency', 'Good communicator', 'Proactive attitude'], color: 'from-slate-500 to-gray-500' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">Skills & Expertise</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>
        
        <div className="max-w-7xl mx-auto space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-8">
              {/* Group Title */}
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {group.title}
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full mx-auto"></div>
              </div>
              
              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.categories.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <div className="text-white">
                          {React.cloneElement(category.icon, { className: "text-white", size: 24 })}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white">{category.title}</h4>
                    </div>
                    
                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`group/skill flex items-center gap-2 text-gray-300 hover:text-white transition-colors`}
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${category.color} rounded-full group-hover/skill:scale-150 transition-transform`}></div>
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
