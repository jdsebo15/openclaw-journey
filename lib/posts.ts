export interface Post {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  slug: string
  tags: string[]
  readTime: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Welcome to My OpenClaw Journey',
    excerpt: 'Why I\'m documenting my experience learning OpenClaw, Claude Code, and building apps with AI assistants.',
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
  }
]
