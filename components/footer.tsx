export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">OpenClaw Journey</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Documenting the journey of learning OpenClaw, Claude Code, and building with AI assistants.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>© {currentYear} OpenClaw Journey. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and lots of AI assistance.</p>
        </div>
      </div>
    </footer>
  )
}
