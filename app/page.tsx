import Link from 'next/link'
import { format } from 'date-fns'
import { posts } from '@/lib/posts'

export default function Home() {
  const latestPosts = posts.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          Documenting the AI coding journey
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          OpenClaw Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Practical, hands-on documentation of learning OpenClaw, Claude Code, 
          and building real applications with AI assistants.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
            AI Assistants
          </span>
          <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
            OpenClaw
          </span>
          <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
            Claude Code
          </span>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{posts.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Blog Posts</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Topics Covered</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">Ongoing</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Journey</div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About This Blog</h2>
        <div className="prose">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This blog documents my hands-on experience with AI coding assistants — specifically 
            <strong> OpenClaw</strong> and <strong>Claude Code</strong>. I'm learning how to leverage these tools 
            to build real applications, automate my workflow, and explore what's possible when 
            AI becomes a genuine coding partner.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            You'll find practical tutorials, setup guides, honest comparisons, and insights from actually
            using these tools daily. No hype, just real results and lessons learned from building
            real applications with AI assistance.
          </p>
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
          <Link 
            href="/blog" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors"
          >
            View all posts →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {latestPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-700 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500 dark:text-gray-500">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium text-sm"
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
