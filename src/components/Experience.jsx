import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer — Cloud & DevOps (Contract)',
      company: 'Aurora Oriental',
      companyUrl: 'https://auroraoriental.io',
      location: 'Remote',
      period: 'February 2026 – Present',
      highlights: [
        'Shipped a production split-deployment architecture by hosting frontend assets on a CDN and running containerized Spring Boot backends on AWS ECS, with secrets injected through CI/CD.',
        'Cut deployment cycle time from 35 to 8 minutes by building GitHub Actions CI/CD pipelines that automated Java API testing, builds, and frontend lint/production releases.',
        'Standardized releases across 4 microservices by engineering multi-stage Docker images and publishing to AWS ECR/ECS with consistent runtime configuration.',
        'Processed monthly payment and shipping events with zero frontend credential exposure by integrating Stripe, Firebase, Billingo, and GLS/FoxPost webhooks in isolated backend services.',
        'Managed AWS Route 53 DNS for 3 production domains, including domain verification and TXT records for external service integrations.'
      ],
      technologies: ['GitHub Actions', 'Docker', 'Spring Boot', 'AWS ECS', 'AWS ECR', 'AWS Route 53', 'CDN', 'Stripe', 'Firebase', 'Billingo']
    }
  ]

  return (
    <section id="experience" className="section-container bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
        <h2 className="section-title text-center">
          <span className="relative inline-block">
            <span className="text-white">Experience</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"></span>
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl shadow-2xl border border-slate-700/50 relative overflow-hidden group hover:shadow-primary-500/20 hover:border-primary-500/50 transition-all duration-500"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Accent border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-10 md:p-12">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-slate-700">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-5 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <FaBriefcase className="text-white" size={32} />
                        </div>
                      </div>

                      {/* Role + Company */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-primary-300 transition-colors leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/10 border border-primary-500/30 backdrop-blur-sm hover:bg-primary-600/20 hover:border-primary-500/50 transition-all group/link"
                            >
                              <FaBuilding className="text-primary-300 text-sm" />
                              <span className="text-sm font-bold text-primary-300">{exp.company}</span>
                              <FaExternalLinkAlt className="text-primary-300/70 text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/10 border border-primary-500/30 backdrop-blur-sm">
                              <FaBuilding className="text-primary-300 text-sm" />
                              <span className="text-sm font-bold text-primary-300">{exp.company}</span>
                            </div>
                          )}
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/70 border border-slate-700/70 backdrop-blur-sm">
                            <FaMapMarkerAlt className="text-primary-400 text-sm" />
                            <span className="text-sm font-semibold text-gray-200">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="flex items-center gap-3 text-primary-300 font-semibold text-base bg-primary-600/10 px-5 py-3 rounded-xl border border-primary-500/20 backdrop-blur-sm flex-shrink-0">
                      <FaCalendarAlt className="text-primary-300" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-4 mb-8">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start gap-4 text-base leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary-600/10 text-primary-300 rounded-lg text-sm font-semibold border border-primary-500/30 backdrop-blur-sm group-hover:bg-primary-600/20 group-hover:border-primary-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience
