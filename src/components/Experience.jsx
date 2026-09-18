import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      role: 'Co-Founder & Software Engineer',
      company: 'Tasko',
      companyUrl: 'https://tasko.ng',
      location: 'Abuja, Nigeria (Remote)',
      period: 'March 2024 – Present',
      highlights: [
        'Built and launched a two-sided marketplace for home services and rides, live in Abuja and Katsina on iOS and the web (Android release pending); the API, client app, pro app, operations console and marketing site all ship from one TypeScript monorepo with shared UI, types and API packages.',
        'Designed the NestJS + Prisma/PostgreSQL backend with role-scoped HttpOnly sessions, phone/email OTP, Firebase sign-in, Redis-backed rate limiting, Zod-validated inputs and audit logging on every money and KYC mutation.',
        'Shipped escrow payments on Flutterwave with a double-entry ledger, payouts, refunds and an operations dispute console, so clients pay into hold and pros are released on completion.',
        'Implemented pro verification: NIN encrypted at rest with AES-256-GCM, live face match through AWS Rekognition, paid verification checkout, and signed S3 media URLs so no upload is ever publicly readable.',
        'Built live ride tracking end-to-end: app-wide driver GPS publisher, server-side Google Directions routing with ETA that counts down along the road, Redis pub/sub fan-out to SSE streams, and a smoothed, heading-aware vehicle marker across iOS, Android and web.',
        'Added in-app voice and video calls on Agora RTC with a call state machine shared by web and native, masked phone numbers, and an automated end-to-end call test suite.',
        'Run production on a Docker Compose stack behind Caddy TLS on a Linux VPS; GitHub Actions CI (typecheck, lint, tests) on every push, push-to-production deploy with health checks, scripted database backups and a one-click server recovery workflow.'
      ],
      liveLinks: [
        { label: 'tasko.ng', url: 'https://tasko.ng' },
        { label: 'app.tasko.ng', url: 'https://app.tasko.ng' },
        { label: 'pro.tasko.ng', url: 'https://pro.tasko.ng' },
        { label: 'admin.tasko.ng', url: 'https://admin.tasko.ng' }
      ],
      technologies: [
        'TypeScript',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Next.js',
        'Capacitor',
        'Redis',
        'Flutterwave',
        'AWS Rekognition',
        'Agora RTC',
        'Docker',
        'GitHub Actions'
      ]
    },
    {
      role: 'Software Engineer — Cloud & DevOps (Contract)',
      company: 'Aurora Oriental',
      companyUrl: 'https://auroraoriental.io',
      location: 'Remote',
      period: 'February 2024 – Present',
      highlights: [
        'Cut deployment time from 35 to 8 minutes with GitHub Actions pipelines that test, build and release 4 containerized Spring Boot services to AWS ECS/Fargate with secrets injected at deploy time.',
        'Moved frontend assets to a CDN and the Java APIs to ECS in a split deployment; integrated Stripe, Firebase, Billingo and GLS/FoxPost webhooks in isolated backend services with zero frontend credential exposure.',
        'Own Route 53 DNS for 3 production domains, including verification and TXT records for third-party services.'
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

                <div className="relative z-10 p-6 sm:p-10 md:p-12">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-700">
                    <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <FaBriefcase className="text-white" size={24} />
                        </div>
                      </div>

                      {/* Role + Company */}
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-primary-300 transition-colors leading-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-primary-600/10 border border-primary-500/30 backdrop-blur-sm hover:bg-primary-600/20 hover:border-primary-500/50 transition-all group/link"
                            >
                              <FaBuilding className="text-primary-300 text-sm" />
                              <span className="text-sm font-bold text-primary-300">{exp.company}</span>
                              <FaExternalLinkAlt className="text-primary-300/70 text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-primary-600/10 border border-primary-500/30 backdrop-blur-sm">
                              <FaBuilding className="text-primary-300 text-sm" />
                              <span className="text-sm font-bold text-primary-300">{exp.company}</span>
                            </div>
                          )}
                          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-slate-900/70 border border-slate-700/70 backdrop-blur-sm">
                            <FaMapMarkerAlt className="text-primary-400 text-sm" />
                            <span className="text-sm font-semibold text-gray-200">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 sm:gap-3 text-primary-300 font-semibold text-sm sm:text-base bg-primary-600/10 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-primary-500/20 backdrop-blur-sm flex-shrink-0 self-start">
                      <FaCalendarAlt className="text-primary-300" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {exp.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start gap-3 sm:gap-4 text-sm sm:text-base leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Live links */}
                  {exp.liveLinks && (
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {exp.liveLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/70 text-primary-300 rounded-lg text-xs sm:text-sm font-semibold border border-primary-500/30 hover:bg-primary-600/20 hover:border-primary-500/50 transition-all"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-600/10 text-primary-300 rounded-lg text-xs sm:text-sm font-semibold border border-primary-500/30 backdrop-blur-sm group-hover:bg-primary-600/20 group-hover:border-primary-500/50 transition-all"
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
