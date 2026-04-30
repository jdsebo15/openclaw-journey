import Link from 'next/link'
import { format } from 'date-fns'
import { posts } from '@/lib/posts'

export default function BlogPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Articles, tutorials, and insights from my journey with OpenClaw and Claude Code.
        </p>
        <p className="text-gray-500 dark:text-gray-500">
          {posts.length} post and counting
        </p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-700 transition-all"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center space-x-4">
                <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
