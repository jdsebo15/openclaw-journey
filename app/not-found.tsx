import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="text-7xl font-bold text-primary-600 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Looks like this page wandered off. Maybe it's being rewritten with AI assistance.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/"
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Go Home
        </Link>
        <Link 
          href="/blog"
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Browse Blog
        </Link>
      </div>
    </div>
  )
}
