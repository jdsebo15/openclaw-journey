import Link from 'next/link'
import { format } from 'date-fns'

const posts = [
  {
    id: 1,
    title: 'Welcome to My OpenClaw Journey',
    excerpt: 'Why I\'m documenting my experience learning OpenClaw, Claude Code, and building apps with AI assistants.',
    date: '2026-04-22',
    slug: 'welcome',
    tags: ['introduction', 'openclaw', 'journey']
  },
  {
    id: 2,
    title: 'OpenClaw vs Claude Code: My Setup',
    excerpt: 'Comparing the two AI coding assistants and how I use them together in my workflow.',
    date: '2026-04-23',
    slug: 'openclaw-vs-claude-code',
    tags: ['openclaw', 'claude-code', 'setup', 'comparison']
  }
]

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          OpenClaw Journey
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Documenting my journey learning OpenClaw, Claude Code, and building apps with AI assistants.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            AI Assistants
          </span>
          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            OpenClaw
          </span>
          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            Claude Code
          </span>
          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            App Development
          </span>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About This Blog</h2>
        <div className="prose">
          <p>
            This blog documents my hands-on experience with AI coding assistants — specifically 
            <strong> OpenClaw</strong> and <strong>Claude Code</strong>. I'm learning how to leverage these tools 
            to build real applications and potentially create a side business.
          </p>
          <p>
            You'll find practical tutorials, setup guides, comparisons, and insights from actually 
            using these tools daily. No hype, just real results and lessons learned.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Latest Posts</h2>
          <Link 
            href="/blog" 
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}