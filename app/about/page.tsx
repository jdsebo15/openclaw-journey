import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Blog</h1>

      <div className="prose prose-lg">
        <p>
          I'm a developer documenting my journey learning AI-assisted development. This blog is my 
          lab notebook — a place to record what works, what doesn't, and what I'm figuring out 
          about building software with AI assistants.
        </p>

        <h2>What This Blog Covers</h2>

        <ul>
          <li>
            <strong>OpenClaw</strong> — Setting it up, building custom skills, automation workflows, 
            and integrating with other services
          </li>
          <li>
            <strong>Claude Code</strong> — Using it for code generation, debugging, and as a 
            pair programming partner
          </li>
          <li>
            <strong>Building apps</strong> — Real projects built with AI assistance, including 
            PrepPlate (React Native meal planner) and various web apps
          </li>
          <li>
            <strong>Smart home automation</strong> — Connecting OpenClaw to Home Assistant for 
            AI-powered home control
          </li>
          <li>
            <strong>The business side</strong> — Can AI-assisted development become a sustainable 
            side business? I'm trying to find out.
          </li>
        </ul>

        <h2>My Setup</h2>

        <p>Here's what I'm currently working with:</p>

        <ul>
          <li><strong>OS:</strong> Windows 11 (native)</li>
          <li><strong>AI Platform:</strong> OpenClaw Gateway (various models)</li>
          <li><strong>Coding Assistant:</strong> Claude Code / Claude Desktop</li>
          <li><strong>Editor:</strong> VS Code</li>
          <li><strong>Smart Home:</strong> Home Assistant</li>
          <li><strong>Preferred Stack:</strong> React Native, Next.js, TypeScript, Tailwind CSS</li>
        </ul>

        <h2>My Background</h2>

        <p>
          I've been a developer for years, working across the stack. AI coding assistants 
          caught my attention not as a replacement for my skills, but as an amplifier. I'm 
          approaching this as a learner — testing these tools in real projects and sharing 
          what I discover.
        </p>

        <p>
          I believe we're in the early days of a shift in how software gets built. This blog 
          is my attempt to understand that shift by being an active participant in it.
        </p>

        <h2>Get in Touch</h2>

        <p>
          Have questions, suggestions, or just want to say hi? I'd love to hear from you.
          The best way to reach me is through the links in the footer.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 not-prose mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog" 
              className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
            >
              Read the Blog
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
