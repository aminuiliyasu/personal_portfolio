import React from 'react'
import { FaLink, FaExternalLinkAlt, FaCloud, FaShoppingCart } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Atlas — AWS Infrastructure Visualizer',
      description: [
        'Designed and shipped a production AWS infrastructure intelligence platform that discovers account resources via AWS APIs, correlates Terraform state for managed vs unmanaged drift, attributes Cost Explorer spend, and surfaces delete-impact and public-exposure risk in one operational view.',
        'Containerized the full stack with a multi-stage Docker build and deployed on Amazon ECS (Fargate) from Amazon ECR behind an Application Load Balancer with ACM-managed TLS certificates and a custom HTTPS domain (Hostinger DNS to ALB).',
        'Implemented session-scoped credential handling so customer AWS keys remain in memory only (never persisted to disk or a database), aligned with least-privilege read-only IAM usage for safe cross-account scanning.'
      ],
      technologies: ['Python', 'FastAPI', 'Docker', 'AWS ECS Fargate', 'ECR', 'ALB', 'ACM', 'IAM'],
      icon: <FaCloud className="text-primary-600" size={32} />,
      link: 'https://github.com/aminuiliyasu/cloud-atlas',
      liveUrl: 'https://awsvisualizer.aminuiliyasu.com',
      focus: 'AWS Infrastructure Intelligence & Production Deployment'
    },
    {
      title: 'E-Commerce Platform for DevOps Practice',
      description: [
        'Built an end-to-end e-commerce platform as a Spring Boot modular monolith (user, catalog, cart, order, payment, notification, admin) with customer and admin web apps, JWT authentication, and polyglot persistence (MySQL, MongoDB, Redis, RabbitMQ).',
        'Authored reusable Terraform modules and dev/staging/prod environments for a production-shaped AWS design (VPC, security groups, EKS, RDS, ElastiCache, Amazon MQ, ALB, S3, IAM, ACM, CloudFront, WAF), separating practice runtime cost from target architecture.',
        'Deployed the full stack to AWS EC2 with Docker Compose and Caddy (TLS), configured custom-domain DNS for HTTPS, and published a live customer site at ecommerce.aminuiliyasu.com with open user registration and an isolated admin surface.'
      ],
      technologies: ['Java', 'Spring Boot', 'Docker', 'Terraform', 'AWS EC2', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ'],
      icon: <FaShoppingCart className="text-primary-600" size={32} />,
      link: 'https://github.com/aminuiliyasu/e-commerce-devops-practice',
      liveUrl: 'https://ecommerce.aminuiliyasu.com',
      focus: 'Full-Stack E-Commerce, Terraform & Live AWS Deployment'
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
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-3 text-primary-400 hover:text-primary-300 font-bold transition-all bg-primary-600/10 px-6 py-3 rounded-xl border border-primary-500/30 hover:bg-primary-600/20 hover:border-primary-500/50"
                    >
                      <FaLink />
                      <span>GitHub</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 text-primary-400 hover:text-primary-300 font-bold transition-all bg-primary-600/10 px-6 py-3 rounded-xl border border-primary-500/30 hover:bg-primary-600/20 hover:border-primary-500/50"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Site</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
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
