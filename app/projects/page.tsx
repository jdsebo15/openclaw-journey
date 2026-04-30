import Link from 'next/link'

const projects = [
  {
    name: 'PrepPlate',
    description: 'A React Native meal planning app built with Expo — recipe management, weekly meal plans, and grocery list generation.',
    tech: ['React Native', 'Expo', 'React Navigation', 'AsyncStorage'],
    status: 'In Development',
    statusColor: 'bg-amber-100 text-amber-800',
    highlights: [
      '6 screens with navigation',
      'Recipe search with filtering',
      '7-day meal plan view',
      'Drag-to-reorder meals',
      'Built in 2 sessions (~10 hrs) with AI assistance'
    ],
    slug: 'prepplate'
  },
  {
    name: 'OpenClaw Skills',
    description: 'Custom OpenClaw skills for weather checking, email automation, blog posting, and server health monitoring.',
    tech: ['OpenClaw', 'SKILL.md', 'Playwright', 'REST APIs'],
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    highlights: [
      'Weather checker skill (wttr.in)',
      'Email automation via IMAP',
      'Home Assistant integration',
      'CalDAV calendar sync'
    ],
    slug: 'openclaw-skills'
  },
  {
    name: 'Smart Home Hub',
    description: 'AI-powered smart home automation with Home Assistant, 500+ devices, and natural language control via OpenClaw.',
    tech: ['Home Assistant', 'OpenClaw', 'Playwright', 'IoT'],
    status: 'Active',
    statusColor: 'bg-green-100 text-green-800',
    highlights: [
      '500+ devices across 2 subnets',
      '28+ dashboard cards',
      'Voice-controlled lighting & scenes',
      'Scheduled automations via cron',
      'Browser automation for complex UIs'
    ],
    slug: 'smart-home'
  }
]

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-xl text-gray-600">
          Real projects I've built with AI assistance. Each one taught me something new.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article 
            key={project.name}
            className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to Collaborate?</h3>
        <p className="text-gray-600 mb-6">
          I'm always open to interesting projects. If you have an idea that AI-assisted 
          development could bring to life, let's talk.
        </p>
        <Link 
          href="/about" 
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
