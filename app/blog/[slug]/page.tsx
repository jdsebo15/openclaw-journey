import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Welcome to My OpenClaw Journey',
    date: '2026-04-22',
    slug: 'welcome',
    tags: ['introduction', 'openclaw', 'journey'],
    readTime: '3 min read',
    content: `
      <p>Welcome to my new blog! I'm starting this journey to document my experience learning and working with AI coding assistants, specifically <strong>OpenClaw</strong> and <strong>Claude Code</strong>.</p>
      
      <h2>Why This Blog Exists</h2>
      
      <p>Over the past few months, I've been diving deep into the world of AI-assisted development. What started as curiosity has turned into a serious exploration of how these tools can transform the way we build software.</p>
      
      <p>I've found that while there's plenty of hype around AI coding assistants, there's surprisingly little practical, hands-on documentation from people actually using these tools to build real things. That's where this blog comes in.</p>
      
      <h2>What to Expect</h2>
      
      <p>Here's what you'll find on this blog:</p>
      
      <ul>
        <li><strong>Practical tutorials</strong> - Step-by-step guides for setting up and using OpenClaw and Claude Code</li>
        <li><strong>Real project documentation</strong> - Following along as I build actual applications</li>
        <li><strong>Tool comparisons</strong> - Honest assessments of what each tool does well (and what it doesn't)</li>
        <li><strong>Workflow optimizations</strong> - How to integrate AI assistants into your existing development process</li>
        <li><strong>Business insights</strong> - Exploring how AI-assisted development can become a sustainable side business</li>
      </ul>
      
      <h2>My Background</h2>
      
      <p>I'm a developer with experience across the stack, but I'm approaching these AI tools as a learner. I don't have all the answers, but I'm committed to figuring things out through hands-on experimentation.</p>
      
      <p>My goal isn't to become an "AI expert" in the abstract sense, but to become proficient at using these tools to build better software, faster.</p>
      
      <h2>Join Me on This Journey</h2>
      
      <p>Whether you're curious about AI coding assistants, already using them, or skeptical about their value, I hope you'll find something useful here.</p>
      
      <p>This is a learning journey, and I'll be sharing both successes and failures. The plan is to post regularly as I work through different projects and challenges.</p>
      
      <p>Thanks for reading, and stay tuned for more!</p>
    `
  },
  {
    id: 2,
    title: 'OpenClaw vs Claude Code: My Setup',
    date: '2026-04-23',
    slug: 'openclaw-vs-claude-code',
    tags: ['openclaw', 'claude-code', 'setup', 'comparison'],
    readTime: '5 min read',
    content: `
      <p>When I started exploring AI coding assistants, two tools stood out: <strong>OpenClaw</strong> and <strong>Claude Code</strong>. Both promise to help developers write better code faster, but they approach the problem from different angles.</p>
      
      <h2>OpenClaw: The Swiss Army Knife</h2>
      
      <p>OpenClaw is an open-source framework that connects AI models to your development environment and other tools. It's not just a coding assistant—it's a platform that can:</p>
      
      <ul>
        <li>Read and write files in your workspace</li>
        <li>Execute commands and scripts</li>
        <li>Connect to APIs and services</li>
        <li>Manage your calendar, email, and other productivity tools</li>
        <li>Run in the background with scheduled tasks</li>
      </ul>
      
      <p><strong>My OpenClaw setup:</strong></p>
      
      <pre><code># Running locally on Windows
OpenClaw Gateway: 127.0.0.1:18789
Model: deepseek/deepseek-chat
Workspace: C:\\Users\\jarre\\.openclaw\\workspace</code></pre>
      
      <h2>Claude Code: The Focused Pair Programmer</h2>
      
      <p>Claude Code (part of the Claude desktop app) is more focused on the coding experience. It excels at:</p>
      
      <ul>
        <li>Understanding and explaining code</li>
        <li>Writing and refactoring functions</li>
        <li>Debugging and fixing issues</li>
        <li>Answering technical questions</li>
        <li>Working within your IDE via extensions</li>
      </ul>
      
      <p><strong>My Claude Code setup:</strong></p>
      
      <pre><code>Claude Desktop App
VS Code with Claude extension
Primary model: Claude 3.5 Sonnet
Focus: React Native/Expo development</code></pre>
      
      <h2>How I Use Them Together</h2>
      
      <p>Rather than choosing one over the other, I've found they complement each other well:</p>
      
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>OpenClaw</th>
            <th>Claude Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>File operations</td>
            <td>✅ Excellent</td>
            <td>❌ Limited</td>
          </tr>
          <tr>
            <td>Code explanation</td>
            <td>✅ Good</td>
            <td>✅ Excellent</td>
          </tr>
          <tr>
            <td>Running scripts</td>
            <td>✅ Excellent</td>
            <td>❌ Not possible</td>
          </tr>
          <tr>
            <td>Debugging complex issues</td>
            <td>✅ Good</td>
            <td>✅ Excellent</td>
          </tr>
          <tr>
            <td>Background automation</td>
            <td>✅ Excellent</td>
            <td>❌ Not possible</td>
          </tr>
        </tbody>
      </table>
      
      <h2>My Current Workflow</h2>
      
      <p>Here's how I typically work with both tools:</p>
      
      <ol>
        <li><strong>Project setup and file operations</strong> → OpenClaw</li>
        <li><strong>Initial code structure</strong> → Claude Code</li>
        <li><strong>Automating repetitive tasks</strong> → OpenClaw</li>
        <li><strong>Debugging tricky issues</strong> → Claude Code</li>
        <li><strong>Integration and deployment</strong> → OpenClaw</li>
      </ol>
      
      <h2>Key Takeaways</h2>
      
      <ul>
        <li><strong>OpenClaw</strong> is better for automation, file operations, and connecting to external services</li>
        <li><strong>Claude Code</strong> excels at understanding code, writing functions, and debugging</li>
        <li>Using both together gives me the best of both worlds</li>
        <li>The learning curve for OpenClaw is steeper, but the automation potential is huge</li>
      </ul>
      
      <p>In future posts, I'll dive deeper into specific use cases and share more detailed tutorials for each tool.</p>
    `
  }
]

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
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
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <time className="mr-4">{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          <span>•</span>
          <span className="ml-4">{post.readTime}</span>
        </div>
      </div>

      <div 
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog"
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            ← Back to all posts
          </Link>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Share on Twitter
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Share on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}