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
  },
  {
    id: 2,
    title: 'OpenClaw vs Claude Code: My Setup',
    excerpt: 'Comparing the two AI coding assistants and how I use them together in my workflow.',
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
  },
  {
    id: 3,
    title: 'Building My First App with AI Assistants',
    excerpt: 'How I used OpenClaw and Claude Code together to build a React Native app from scratch — from idea to working prototype in days.',
    date: '2026-04-25',
    slug: 'first-app-with-ai',
    tags: ['tutorial', 'react-native', 'openclaw', 'claude-code'],
    readTime: '8 min read',
    content: `
      <p>After getting comfortable with both OpenClaw and Claude Code, I decided to put them to the test: build a real, functional app from scratch. No hand-holding, just me and my AI assistants.</p>

      <p>The app? A React Native meal planning app called <strong>PrepPlate</strong> — something I'd had in my head for a while but never had the time to build.</p>

      <h2>Starting from Zero</h2>

      <p>I started with literally nothing but an Expo project template. Here's how the first session went:</p>

      <p><strong>Claude Code</strong> handled the initial scaffold — the navigation structure, screen components, and the core data model for meals and recipes. In about 30 minutes, I had a working app skeleton with three screens and a basic navigation flow.</p>

      <p><strong>OpenClaw</strong> came in for the tedious parts — creating the component files, setting up the folder structure, and writing the initial TypeScript types. Instead of manually creating 15 files, I just described what I needed and OpenClaw built them.</p>

      <blockquote>
        The biggest time saver wasn't the code writing. It was not having to context-switch between the design docs, the API reference, and the editor. Both tools kept everything in one conversation.
      </blockquote>

      <h2>Where Each Tool Shone</h2>

      <h3>OpenClaw's Strengths</h3>
      <ul>
        <li><strong>Batch file operations</strong> — Generated multiple components at once</li>
        <li><strong>Git integration</strong> — Staged, committed, and pushed changes without leaving the conversation</li>
        <li><strong>Package management</strong> — Installed dependencies on the fly when I hit missing imports</li>
        <li><strong>Environment checks</strong> — Verified Expo CLI, simulators, and build tools were in order</li>
      </ul>

      <h3>Claude Code's Strengths</h3>
      <ul>
        <li><strong>Screen logic</strong> — The search/filter UI for recipes came together in one shot</li>
        <li><strong>State management</strong> — Wired up React Context for the meal plan state smoothly</li>
        <li><strong>Error handling</strong> — Caught edge cases I hadn't thought about</li>
        <li><strong>UI polish</strong> — Suggested layout improvements and responsive design tweaks</li>
      </ul>

      <h2>What I Learned</h2>

      <p>The most surprising lesson: the AI tools didn't replace thinking — they <em>amplified</em> it. I spent less time typing boilerplate and more time making architectural decisions. The ratio of "thinking time" to "typing time" shifted dramatically.</p>

      <p>Would I have built PrepPlate without AI? Maybe eventually, but it would have taken weeks instead of days. The AI assistants didn't just speed me up — they kept me in flow state longer because I never had to stop and look up syntax or debug simple typos.</p>

      <h2>Results</h2>

      <p>After two focused sessions (about 6 hours total), I had:</p>
      <ul>
        <li>A working React Native (Expo) app with 6 screens</li>
        <li>Navigation with React Navigation</li>
        <li>State management with React Context</li>
        <li>Data persistence with AsyncStorage</li>
        <li>A recipe search feature with filtering</li>
        <li>A 7-day meal plan view with drag-to-reorder</li>
      </ul>

      <p>Next up: adding a backend API and user authentication. Stay tuned for Part 2!</p>
    `
  },
  {
    id: 4,
    title: 'The Business Side of AI Development',
    excerpt: 'Turning AI-assisted development into a sustainable side business — lessons learned from my first experiments.',
    date: '2026-04-28',
    slug: 'ai-development-business',
    tags: ['business', 'monetization', 'side-projects'],
    readTime: '6 min read',
    content: `
      <p>After building a few apps with AI assistance, I started wondering: can this be more than just a productivity hack? Can AI-assisted development actually become a viable side business?</p>

      <p>Here's what I've learned so far.</p>

      <h2>The Opportunity</h2>

      <p>AI coding assistants lower the barrier to shipping software. What used to take a team of three can now be done by one person in half the time. That changes the economics of small-scale software development significantly.</p>

      <p>For a side business, this means:</p>
      <ul>
        <li><strong>Lower MVP costs</strong> — You can validate ideas faster without hiring</li>
        <li><strong>Faster iteration</strong> — Ship features in days, not weeks</li>
        <li><strong>Broader skillset coverage</strong> — AI fills gaps in your knowledge (design, deployment, etc.)</li>
        <li><strong>More experimentation</strong> — Try ideas that wouldn't be worth the investment otherwise</li>
      </ul>

      <h2>My Approach</h2>

      <p>I'm focusing on a few different angles:</p>

      <ol>
        <li><strong>Building my own products</strong> — Apps like PrepPlate that solve real problems</li>
        <li><strong>Freelance development</strong> — Using AI speed to compete on smaller projects</li>
        <li><strong>Content creation</strong> — This blog, tutorials, and sharing what I learn</li>
      </ol>

      <h2>The Math</h2>

      <p>Let's be honest about the numbers. I tracked my time building PrepPlate:</p>

      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Hours (with AI)</th>
            <th>Estimated (without AI)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setup & scaffolding</td>
            <td>1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Core features</td>
            <td>4</td>
            <td>16</td>
          </tr>
          <tr>
            <td>UI/UX polish</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Testing & debugging</td>
            <td>2</td>
            <td>8</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>10</strong></td>
            <td><strong>36</strong></td>
          </tr>
        </tbody>
      </table>

      <p>That's roughly a 3.6x speedup. Even accounting for the AI subscription costs ($20/month for Claude + whatever I'm paying for the API model), the ROI is obvious.</p>

      <h2>What I'm Still Figuring Out</h2>

      <p>It's not all rosy. There are real challenges:</p>
      <ul>
        <li><strong>Quality control</strong> — AI code isn't always production-ready. You still need to review everything.</li>
        <li><strong>Maintenance</strong> — Will AI-assisted code be harder to maintain long-term? Too early to tell.</li>
        <li><strong>Client perception</strong> — Some clients are skeptical of "AI-built" software.</li>
        <li><strong>Platform risk</strong> — Building your business on top of tools that could change or disappear.</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>AI-assisted development has already paid for itself many times over in my case. The speed boost is real. The quality is good enough for MVPs and small tools. Whether it scales to enterprise-grade products remains to be seen, but for a side business starting out? It's a no-brainer.</p>

      <p>I'll continue documenting the numbers as I go. If you're thinking about starting a side project with AI, my advice: just start. The tools are good enough right now.</p>
    `
  },
  {
    id: 5,
    title: 'Creating Custom OpenClaw Skills: A Practical Guide',
    excerpt: 'Step-by-step walkthrough of building your own OpenClaw skills — from SKILL.md structure to deployment.',
    date: '2026-05-01',
    slug: 'custom-openclaw-skills',
    tags: ['openclaw', 'tutorial', 'skills', 'automation'],
    readTime: '7 min read',
    content: `
      <p>One of OpenClaw's most powerful features is its skill system — a way to package tools and instructions that your AI assistant can use. After building a few skills for my own workflow, I want to share what I've learned.</p>

      <h2>What is an OpenClaw Skill?</h2>

      <p>An OpenClaw skill is essentially a directory with a <code>SKILL.md</code> file that teaches the AI how to do something. Skills can include:</p>
      <ul>
        <li>Instructions on how to perform a task</li>
        <li>Scripts or tools the AI can invoke</li>
        <li>Configuration files and reference materials</li>
        <li>API endpoints and authentication patterns</li>
      </ul>

      <p>Think of skills as mini-applications that your AI assistant can run. The AI reads the SKILL.md when a task matches the skill's description, then follows the instructions to complete the work.</p>

      <h2>Anatomy of a SKILL.md</h2>

      <p>Every skill starts with a <code>SKILL.md</code> file. Here's the basic structure:</p>

      <pre><code># Skill Name

Brief one-line description of what this skill does.

## Steps

1. **Step one** — What to do first
2. **Step two** — What to do next
3. **Step three** — What to do last

## Configuration

- **Option 1:** Description
- **Option 2:** Description

## Dependencies

List of scripts, tools, or data files this skill relies on.</code></pre>

      <h2>Building a Real Skill: Weather Checker</h2>

      <p>Let me walk through a simple but practical skill I built — a weather checker that hits a free API.</p>

      <h3>1. Create the skill directory</h3>
      <p>OpenClaw looks for skills in its configured skills directory. On my setup, that's in my workspace.</p>

      <pre><code>mkdir skills/weather-checker
cd skills/weather-checker
touch SKILL.md</code></pre>

      <h3>2. Write the SKILL.md</h3>
      <p>The key is the <code>available_skills</code> section that OpenClaw reads to know when to use this skill. The description field is critical — it's what the AI uses to match tasks to skills.</p>

      <pre><code>&lt;available_skills&gt;
  &lt;skill&gt;
    &lt;name&gt;weather-checker&lt;/name&gt;
    &lt;description&gt;Fetch current weather and forecast for any city using wttr.in.&lt;/description&gt;
    &lt;location&gt;skills/weather-checker/SKILL.md&lt;/location&gt;
  &lt;/skill&gt;
&lt;/available_skills&gt;</code></pre>

      <h3>3. Write the instructions</h3>
      <p>Be specific. The AI follows your instructions literally. I include the exact curl command, expected output format, and how to handle errors.</p>

      <pre><code>## Steps

1. Get the city name from the user
2. Run: curl "https://wttr.in/{city}?format=%C+%t+%w"
3. Parse the output and present it to the user in a human-readable format
4. If the city is not found, try common variations or ask for clarification</code></pre>

      <h2>What I Learned Making Skills</h2>

      <ul>
        <li><strong>Be explicit</strong> — The AI is literal. If you say "use curl," it will. If a step is ambiguous, it will guess.</li>
        <li><strong>Include examples</strong> — Showing what success looks like helps the AI know when it's done.</li>
        <li><strong>Handle errors</strong> — Tell the AI what to do when things go wrong. It won't improvise well without guidance.</li>
        <li><strong>Keep skills focused</strong> — One skill = one job. Don't try to make a Swiss Army knife skill.</li>
        <li><strong>Test with real prompts</strong> — Say "check the weather in Chicago" and see if your skill triggers correctly.</li>
      </ul>

      <h2>Skill Sources</h2>

      <p>OpenClaw ships with several built-in skills (calendar, Discord, weather, etc.), and you can install community skills or write your own. The skill ecosystem is one of the reasons I chose OpenClaw over more rigid alternatives.</p>

      <p>I'm working on a few more skills — email automation, blog posting, and server health checks. I'll share those as I polish them.</p>
    `
  },
  {
    id: 6,
    title: 'From Idea to Prototype in One Weekend',
    excerpt: 'How I used OpenClaw and Claude Code to build a weekend project from concept to working prototype — including the mistakes I made along the way.',
    date: '2026-05-05',
    slug: 'idea-to-prototype-weekend',
    tags: ['project', 'workflow', 'openclaw', 'claude-code'],
    readTime: '7 min read',
    content: `
      <p>I had an idea: a tool that tracks your daily "streaks" across multiple habits — exercise, reading, coding, water intake — and shows them in one beautiful dashboard. Simple concept, but I wanted to see just how fast I could go from idea to working prototype using AI assistants.</p>

      <p>The challenge? Build it in one weekend.</p>

      <h2>Friday Night: Ideation & Planning</h2>

      <p>I started Friday evening with nothing but a rough concept. Here's my actual process:</p>

      <ol>
        <li><strong>Describe the idea to Claude Code</strong> — I just talked through what I wanted. It asked clarifying questions and helped me scope it down to something achievable.</li>
        <li><strong>Tech stack decisions</strong> — I asked Claude for the quickest path to a working prototype. It recommended Next.js + Prisma + SQLite (no backend server needed for an MVP).</li>
        <li><strong>Data model</strong> — We sketched out the database schema together. Users, habits, daily entries.</li>
      </ol>

      <p>By 10 PM, I had a plan and a data model. No code written yet, but the hard part (deciding what to build) was done.</p>

      <blockquote>
        The biggest planning mistake people make with AI coding is skipping this step. AI can write code fast — but it can't decide what to build for you. That's still your job.
      </blockquote>

      <h2>Saturday: Core Build</h2>

      <p>I woke up Saturday and got to work. Here's how the day broke down:</p>

      <h3>Morning (8 AM - 12 PM): Foundation</h3>
      <p><strong>OpenClaw</strong> scaffolded the Next.js project, installed Prisma, and set up the SQLite database. Twenty minutes in, I had a running app with a database. The rest of the morning was building out the API routes and the basic authentication flow.</p>

      <h3>Afternoon (1 PM - 5 PM): Features</h3>
      <p>This is where <strong>Claude Code</strong> really pulled its weight. I described features one at a time — "add a form to create a new habit," "show today's check-in status," "highlight the current streak count." Each feature took 15-30 minutes instead of the hour+ it would have taken manually.</p>

      <h3>Evening (7 PM - 10 PM): Polish</h3>
      <p>This is where things got messy. I made the classic mistake of trying to make it look beautiful before it was fully functional. The AI happily obliged, generating CSS and layout changes, but I ended up breaking the check-in flow and spent an hour debugging.</p>

      <p><strong>Lesson learned:</strong> Get the functionality solid before you touch the UI. AI code debt compounds just like regular code debt.</p>

      <h2>Sunday: The Struggle</h2>

      <p>Sunday was not as smooth. I hit a real wall with the streak calculation logic. The algorithm seemed simple — count consecutive days with a check-in — but the edge cases (time zones, skipping days, resetting streaks) were tricky.</p>

      <p>Both Claude Code and OpenClaw gave me reasonable solutions, but none handled all the edge cases correctly. I ended up writing the streak logic manually, using the AI suggestions as a starting point.</p>

      <p>This was eye-opening: <strong>AI is terrible at complex business logic with edge cases.</strong> It's great at CRUD, UI components, and boilerplate. But the kind of careful, state-aware logic that humans think through step by step? That's still our territory.</p>

      <h2>Sunday Night: Done (Enough)</h2>

      <p>By Sunday at 6 PM, I had:</p>
      <ul>
        <li>A working streak tracker with 7 habit types</li>
        <li>Daily check-in flow (tap a button to log today's progress)</li>
        <li>A dashboard showing current streaks across all habits</li>
        <li>SQLite database (no signup needed, demo mode)</li>
        <li>Basic responsive design that works on mobile</li>
      </ul>

      <p>Total time: about 18 hours of focused work. Estimated without AI: probably 40-50 hours. The speed boost was real — around 2.5x — even with the streak logic struggle.</p>

      <h2>Key Takeaways</h2>

      <ul>
        <li><strong>Plan first, AI second.</strong> AI can implement any plan, but a bad plan implemented fast is still a bad product.</li>
        <li><strong>AI handles 80% of CRUD perfectly.</strong> The remaining 20% (edge cases, complex logic) still needs human care.</li>
        <li><strong>Debugging AI-generated code is different.</strong> You need to understand the code to fix it. AI doesn't "remember" why it made choices in an earlier session.</li>
        <li><strong>One weekend is realistic</strong> for a simple prototype. Two weekends for something polished.</li>
      </ul>

      <p>The prototype is live (in demo mode) and I'm sharing it with friends for feedback. The next step? Either a proper backend or shipping it as-is. Stay tuned.</p>
    `
  },
  {
    id: 7,
    title: 'OpenClaw and Home Assistant: Smart Home Automation',
    excerpt: 'Integrating OpenClaw with Home Assistant for voice-controlled smart home automations and custom dashboards.',
    date: '2026-05-10',
    slug: 'openclaw-home-assistant',
    tags: ['openclaw', 'home-assistant', 'smart-home', 'iot'],
    readTime: '6 min read',
    content: `
      <p>One of the coolest things I've done with OpenClaw is connecting it to my Home Assistant instance. My home has over 500 devices across two subnets — lights, switches, sensors, media players, the works. Having an AI that can control all of that opens up some interesting possibilities.</p>

      <h2>The Setup</h2>

      <p>Home Assistant runs on a local machine with a substantial dashboard of 28+ cards. OpenClaw connects to it via its REST API. The key pieces:</p>

      <ul>
        <li><strong>Home Assistant</strong> — Central hub for lights, switches, climate, media, and sensors</li>
        <li><strong>OpenClaw</strong> — The AI layer that interprets natural language commands and triggers Home Assistant actions</li>
        <li><strong>Browser automation</strong> — For when the REST API isn't enough (e.g., interacting with complex dashboard UIs)</li>
      </ul>

      <p>The connection is straightforward: OpenClaw's Home Assistant skill records the URL and authentication token, then exposes commands like <code>light.turn_on</code>, <code>switch.toggle</code>, and <code>media_player.play</code> as tools the AI can call.</p>

      <h2>What I Can Do Now</h2>

      <h3>Voice-Controlled Lighting</h3>
      <p>I can say "turn on the living room lights at 50%" and OpenClaw sends the right API call. It handles brightness, color temperature, and grouping multiple lights in a room.</p>

      <h3>Scene Activation</h3>
      <p>"Set the house to movie mode" triggers a scene that dims the lights, closes the curtains (via smart blinds), and sets the media player to the right input. This was always possible with Home Assistant automations, but being able to trigger it with natural language makes it feel effortless.</p>

      <h3>Environmental Monitoring</h3>
      <p>I can ask "what's the temperature in the office?" and get the sensor reading. Or "has the front door been opened today?" for security checks.</p>

      <h3>Scheduled Automations</h3>
      <p>OpenClaw's cron feature lets me set up automations that run on a schedule — dim the outdoor lights at sunset, check that the garage door is closed at 10 PM, adjust the thermostat before I wake up.</p>

      <h2>Browser Automation for Complex Tasks</h2>

      <p>For tasks that the Home Assistant REST API doesn't expose well, I use browser automation. OpenClaw can launch a headless Chromium browser, log into the Home Assistant dashboard, and interact with the UI directly.</p>

      <pre><code>const { chromium } = require('playwright');
const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();
await page.goto('http://your-homeassistant:8123');
await page.fill('input[type="text"]', 'username');
await page.fill('input[type="password"]', 'password');
await page.keyboard.press('Enter');
// Now navigate and interact with the dashboard</code></pre>

      <p>This is slower than API calls but works for anything the web UI can do that the API can't.</p>

      <h2>Impressions After a Month</h2>

      <p>AI-controlled home automation is still in the "cool demo" phase for me. The latency of going through the AI model (even with fast models) makes it less snappy than a physical switch or a well-configured automation. But for complex, multi-step commands — "turn off the kitchen lights, set the living room to 30%, and start a podcast on the bedroom speaker" — it beats tapping through 3 different apps.</p>

      <p>The real value, I think, isn't in replacing existing controls but in handling the <em>composite</em> commands that would normally require a complex automation script or a separate app.</p>
    `
  }
]
