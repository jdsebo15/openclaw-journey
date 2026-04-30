import Link from 'next/link'
import { format } from 'date-fns'
import { posts } from '@/lib/posts'

export default function BlogPage() {
  const tagCounts = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-6">
          Articles, tutorials, and insights from my journey with OpenClaw and Claude Code.
        </p>
        <p className="text-gray-500">
          {posts.length} posts and counting
        </p>
      </div>

      {/* Topic Tags */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Browse by Topic</h2>
        <div className="flex flex-wrap gap-2">
          {sortedTags.map(([tag, count]) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
            >
              {tag} ({count})
            </span>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="grid gap-8">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-200 transition-all"
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
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              <Link 
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get notified when new posts are published. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm flex-shrink-0">
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
