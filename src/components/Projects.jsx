import React from 'react'
import { FaLink, FaCloud, FaCode, FaDocker, FaServer } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Region AWS Deployment with Terraform and Automation',
      description: [
        'Designed and deployed Ubuntu instances on AWS across two regions (eu-west-1 and eu-central-1), utilizing at least two Availability Zones per region.',
        'Modularized Terraform scripts to enhance reusability and flexibility for different environments, such as development and production.',
        'Configured a Virtual Private Cloud (VPC) to isolate environments, assigning development to one region and production to another.',
        'Automated the creation of an Ansible and Docker container for streamlined infrastructure management.'
      ],
      technologies: ['AWS', 'Terraform', 'Ansible', 'Docker', 'VPC'],
      icon: <FaCloud className="text-primary-600" size={32} />,
      link: '#'
    },
    {
      title: 'Cloud-Native Microservices Deployment',
      description: [
        'Deployed the "Online Boutique" application using Kubernetes with Helm for efficient management of microservices and dependencies.',
        'Streamlined maintenance using Helmfile for organized project structure and environment-specific configurations.',
        'Configured Kubernetes for scalability, including stateful services like Redis and service discovery with load balancing.',
        'Ensured modularity and reusability in deployments through Helm.'
      ],
      technologies: ['Kubernetes', 'Helm', 'Helmfile', 'Redis', 'Microservices'],
      icon: <FaServer className="text-primary-600" size={32} />,
      link: '#'
    }
  ]

  return (
    <section id="projects" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">Featured Projects</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl shadow-2xl border border-slate-700/50 relative overflow-hidden group hover:shadow-primary-500/20 hover:border-primary-500/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Accent border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-10">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-6 mb-8 pb-8 border-b border-slate-700">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-5 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <div className="text-white">
                          {React.cloneElement(project.icon, { className: "text-white", size: 40 })}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-primary-300 transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <ul className="space-y-4 mb-8">
                    {project.description.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-gray-300 flex items-start gap-4 text-base leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary-600/10 text-primary-300 rounded-lg text-sm font-semibold border border-primary-500/30 backdrop-blur-sm group-hover:bg-primary-600/20 group-hover:border-primary-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3 text-primary-400 hover:text-primary-300 font-bold transition-all bg-primary-600/10 px-6 py-3 rounded-xl border border-primary-500/30 hover:bg-primary-600/20 hover:border-primary-500/50"
                  >
                    <FaLink />
                    <span>View Project</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
