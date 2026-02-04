import React from 'react'
import { FaLink, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise GitOps & Zero-Trust Platform',
      description: [
        'Architected a production-grade Kubernetes platform using Terraform for Infrastructure as Code (IaC) and ArgoCD for GitOps-based continuous delivery, ensuring 100% environment consistency.',
        'Implemented a Zero-Trust security model by integrating HashiCorp Vault for dynamic secret injection, eliminating hardcoded credentials in deployment manifests.',
        'Engineered automated scaling policies using Karpenter and Horizontal Pod Autoscalers (HPA), optimizing resource utilization and reducing cloud spend by 30%.',
        'Developed custom GitHub Actions workflows to perform automated linting, security scanning (Trivy), and dry-run validations before merging infrastructure changes.'
      ],
      technologies: ['Terraform', 'ArgoCD', 'Kubernetes', 'HashiCorp Vault', 'Karpenter', 'HPA', 'GitHub Actions', 'Trivy'],
      icon: <FaShieldAlt className="text-primary-600" size={32} />,
      link: '#',
      focus: 'Security, Automation, and Scalability'
    },
    {
      title: 'High-Availability SRE Lab & Chaos Engineering',
      description: [
        'Deployed a multi-tier microservices architecture on a managed Kubernetes cluster, utilizing an Istio Service Mesh for advanced traffic management and mTLS encryption.',
        'Established a comprehensive observability stack using Prometheus, Grafana, and Loki, defining and monitoring SLIs/SLOs to maintain a 99.9% availability target.',
        'Executed Chaos Engineering experiments using Chaos Mesh to simulate pod failures and network latency, validating the system\'s self-healing capabilities.',
        'Automated progressive delivery through Canary Deployments, allowing for safe, incremental traffic shifting and automated rollbacks based on real-time health metrics.'
      ],
      technologies: ['Kubernetes', 'Istio', 'Prometheus', 'Grafana', 'Loki', 'Chaos Mesh', 'Canary Deployments'],
      icon: <FaChartLine className="text-primary-600" size={32} />,
      link: '#',
      focus: 'Reliability, Observability, and Performance'
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
                      {project.focus && (
                        <p className="text-sm text-primary-400 font-semibold mt-1">
                          Focus: {project.focus}
                        </p>
                      )}
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
