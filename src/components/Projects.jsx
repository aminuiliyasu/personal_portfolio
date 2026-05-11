import React from 'react'
import { FaLink, FaDollarSign, FaHeartbeat, FaNetworkWired } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Cloud Cost Optimization Engine',
      description: [
        'Built a FinOps platform with Python, FastAPI, and SQLAlchemy to monitor AWS and GCP cloud usage in real time and identify cost inefficiencies across compute, Kubernetes, and storage resources.',
        'Developed an automated optimization engine for rightsizing, scheduled shutdowns, and migration recommendations, including what-if simulations to estimate savings and evaluate policy impact.',
        'Integrated AWS and GCP APIs for billing and infrastructure data ingestion, with audit logging and a custom dashboard for reporting and operational visibility.',
        'Provisioned infrastructure with Terraform and Docker Compose, and ensured reliability through automated unit and integration testing with Pytest.',
        'Reduced manual cloud cost monitoring effort by ~80% through automated analysis and actionable optimization workflows.'
      ],
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'AWS', 'GCP', 'Terraform', 'Docker', 'Pytest'],
      icon: <FaDollarSign className="text-primary-600" size={32} />,
      link: 'https://github.com/aminuiliyasu/Real-Time-Cloud-Cost-Optimization-Engine',
      focus: 'FinOps, Automation, and Multi-Cloud Visibility'
    },
    {
      title: 'Self-Healing Infrastructure with AI-Driven Incident Response',
      description: [
        'Built an autonomous infrastructure monitoring platform using Prometheus and Python to detect anomalies and trigger automated remediation workflows in real time.',
        'Developed a rule-based incident analysis engine that identified potential root causes from telemetry data and executed corrective actions through Kubernetes and Bash automation.',
        'Automated Kubernetes scaling and recovery operations with safety controls to prevent unstable remediation behavior in production-like environments.',
        'Containerized services with Docker and deployed them on Kubernetes clusters, with Grafana dashboards for observability and Terraform-based infrastructure provisioning.',
        'Improved operational efficiency and reduced incident response time through automated detection and self-healing workflows.'
      ],
      technologies: ['Python', 'Kubernetes', 'Prometheus', 'Grafana', 'Terraform', 'Docker', 'Bash'],
      icon: <FaHeartbeat className="text-primary-600" size={32} />,
      link: 'https://github.com/aminuiliyasu/Self-Healing-Infrastructure-with-AI-Driven-Incident-Response',
      focus: 'Reliability, Observability, and Autonomous Remediation'
    },
    {
      title: 'AWS High-Availability VPC Architecture & Web Application Deployment',
      description: [
        'Designed and deployed a production-style AWS VPC architecture with public/private subnets across multiple availability zones, including Internet Gateway, NAT Gateway, route tables, and security groups.',
        'Implemented secure infrastructure access through a Bastion Host and deployed web application servers in private subnets behind an Application Load Balancer.',
        'Configured load balancing, health checks, and network routing to improve application availability, fault tolerance, and traffic distribution.',
        'Automated infrastructure provisioning with Terraform using modular Infrastructure-as-Code practices for repeatable and maintainable deployments.',
        'Applied AWS networking and security best practices, including controlled outbound internet access and isolated internal resources.'
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'Linux', 'Apache', 'EC2', 'VPC', 'ALB'],
      icon: <FaNetworkWired className="text-primary-600" size={32} />,
      link: 'https://github.com/aminuiliyasu/aws-vpc-high-availability-design',
      focus: 'Networking, Security, and High Availability'
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
