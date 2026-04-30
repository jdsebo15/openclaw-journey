import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About This Blog</h1>

      <div className="prose prose-lg">
        <p className="text-gray-700 dark:text-gray-300">
          I'm someone documenting my journey learning AI-assisted development. This blog is my
          lab notebook — a place to record what works, what doesn't, and what I'm figuring out
          about building software with AI assistants.
        </p>

        <h2 className="text-gray-900 dark:text-white">What This Blog Covers</h2>
        <ul>
          <li className="text-gray-700 dark:text-gray-300">
            <strong>OpenClaw</strong> — Setting it up, building custom skills, automation workflows,
            and integrating with other services
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <strong>Claude Code</strong> — Using it for code generation, debugging, and as a
            pair programming partner
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <strong>Building apps</strong> — Real projects built with AI assistance
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <strong>The business side</strong> — Can AI-assisted development become a sustainable
            side business? I'm trying to find out.
          </li>
        </ul>

        <h2 className="text-gray-900 dark:text-white">My Background</h2>

        <p className="text-gray-700 dark:text-gray-300">
          I've been working with software for a while. AI coding assistants
          caught my attention not as a replacement for skills, but as an amplifier. I'm
          approaching this as a learner — testing these tools in real projects and sharing
          what I discover.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          I believe we're in the early days of a shift in how software gets built. This blog
          is my attempt to understand that shift by being an active participant in it.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 not-prose mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
