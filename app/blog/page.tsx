import Link from 'next/link'
import { format } from 'date-fns'

const posts = [
  {
    id: 1,
    title: 'Welcome to My OpenClaw Journey',
    excerpt: 'Why I\'m documenting my experience learning OpenClaw, Claude Code, and building apps with AI assistants.',
    date: '2026-04-22',
    slug: 'welcome',
    tags: ['introduction', 'openclaw', 'journey'],
    readTime: '3 min read'
  },
  {
    id: 2,
    title: 'OpenClaw vs Claude Code: My Setup',
    excerpt: 'Comparing the two AI coding assistants and how I use them together in my workflow.',
    date: '2026-04-23',
    slug: 'openclaw-vs-claude-code',
    tags: ['openclaw', 'claude-code', 'setup', 'comparison'],
    readTime: '5 min read'
  },
  {
    id: 3,
    title: 'Building My First App with AI Assistants',
    excerpt: 'How I used OpenClaw and Claude Code together to build a React Native app from scratch.',
    date: '2026-04-25',
    slug: 'first-app-with-ai',
    tags: ['tutorial', 'react-native', 'openclaw', 'claude-code'],
    readTime: '8 min read'
  },
  {
    id: 4,
    title: 'The Business Side of AI Development',
    excerpt: 'Turning AI-assisted development into a sustainable side business.',
    date: '2026-04-28',
    slug: 'ai-development-business',
    tags: ['business', 'monetization', 'side-projects'],
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Articles, tutorials, and insights from my journey with OpenClaw and Claude Code.
        </p>
      </div>

      <div className="grid gap-8">
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
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              <Link 
                href={`/blog/${post.slug}`}
                className="hover:text-primary-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Want more content?</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to get notified when new posts are published.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}