import React from 'react'
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud, FaPlug, FaShieldAlt } from 'react-icons/fa'

const Skills = () => {
  const skillGroups = [
    {
      title: 'Languages & Backend',
      categories: [
        {
          title: 'Languages',
          icon: <FaCode />,
          skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Bash'],
          color: 'from-emerald-500 to-teal-500'
        },
        {
          title: 'Backend',
          icon: <FaServer />,
          skills: [
            'Node.js',
            'NestJS',
            'Express',
            'Spring Boot',
            'FastAPI',
            'REST API design',
            'Server-Sent Events',
            'WebRTC (Agora)',
            'JWT/OAuth',
            'Zod validation'
          ],
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      title: 'Frontend, Mobile & Data',
      categories: [
        {
          title: 'Frontend & Mobile',
          icon: <FaMobileAlt />,
          skills: [
            'React',
            'Next.js 15 (App Router, SSR)',
            'Capacitor (iOS & Android)',
            'Responsive CSS',
            'Accessibility',
            'Google Maps Platform'
          ],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Data',
          icon: <FaDatabase />,
          skills: [
            'PostgreSQL',
            'Prisma',
            'Redis',
            'MySQL',
            'MongoDB',
            'RabbitMQ',
            'Schema migrations',
            'Double-entry ledgers'
          ],
          color: 'from-orange-500 to-amber-500'
        }
      ]
    },
    {
      title: 'Cloud, Integrations & Practices',
      categories: [
        {
          title: 'Cloud & DevOps',
          icon: <FaCloud />,
          skills: [
            'AWS (ECS/Fargate, ECR, S3, SES, Rekognition, Route 53, IAM, RDS, CloudWatch)',
            'Docker',
            'Docker Compose',
            'Terraform',
            'GitHub Actions',
            'Caddy',
            'Linux servers'
          ],
          color: 'from-cyan-500 to-blue-500'
        },
        {
          title: 'Integrations',
          icon: <FaPlug />,
          skills: [
            'Flutterwave',
            'Stripe',
            'Firebase Auth & Cloud Messaging',
            'Agora RTC',
            'Google Places & Directions',
            'Nodemailer/SES'
          ],
          color: 'from-indigo-500 to-purple-500'
        },
        {
          title: 'Practices',
          icon: <FaShieldAlt />,
          skills: [
            'Monorepos (pnpm, Turborepo)',
            'Security by default (encryption at rest, rate limiting, CSP, input validation)',
            'E2E and unit testing',
            'Code review',
            'Incident recovery'
          ],
          color: 'from-red-500 to-orange-500'
        }
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
        
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6 sm:space-y-8">
              {/* Group Title */}
              <div className="text-center mb-6 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {group.title}
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full mx-auto"></div>
              </div>
              
              {/* Categories Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${group.categories.length > 2 ? 'lg:grid-cols-3' : ''} gap-6`}>
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
                          className="group/skill flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-br ${category.color} rounded-full group-hover/skill:scale-150 transition-transform flex-shrink-0 mt-1.5`}></div>
                          <span className="text-sm font-medium break-words">{skill}</span>
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
