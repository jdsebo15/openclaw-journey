import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Link from 'next/link'
import { posts } from '@/lib/posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post || !post.content) {
    notFound()
  }

  // Find related posts (same tags)
  const relatedPosts = posts
    .filter(p => p.slug !== slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3)

  return (
    <article className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{post.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center text-gray-600">
          <time className="mr-4">{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          <span>•</span>
          <span className="ml-4">{post.readTime}</span>
        </div>
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 pt-10 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Posts</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map(rp => (
              <Link 
                key={rp.id}
                href={`/blog/${rp.slug}`}
                className="group block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="flex flex-wrap gap-1 mb-2">
                  {rp.tags.slice(0, 2).map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors text-sm leading-snug">
                  {rp.title}
                </h4>
                <time className="text-xs text-gray-500 mt-1 block">
                  {format(new Date(rp.date), 'MMM d, yyyy')}
                </time>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="border-t border-gray-200 pt-8 mt-10">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}
