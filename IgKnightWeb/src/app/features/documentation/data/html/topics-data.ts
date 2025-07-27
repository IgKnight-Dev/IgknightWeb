import { Topic, TopicContent } from "../../../../models/topic.model";

export const HtmlTopics: Topic[] = [
  { id: 'html-introduction', title: 'Introduction to HTML', slug: 'html-introduction' },
  { id: 'html-basic-syntax', title: 'HTML Syntax Basics', slug: 'html-basic-syntax' },
  { id: 'html-document-structure', title: 'HTML Document Structure', slug: 'html-document-structure' },
  { id: 'html-headings-paragraphs', title: 'Headings & Paragraphs', slug: 'html-headings-paragraphs' },
  { id: 'html-links-anchors', title: 'Links & Anchors', slug: 'html-links-anchors' },
  { id: 'html-lists', title: 'Lists in HTML', slug: 'html-lists' },
  { id: 'html-tables', title: 'HTML Tables', slug: 'html-tables' },
  { id: 'html-multimedia', title: 'Multimedia (Images, Audio, Video)', slug: 'html-multimedia' },
  { id: 'html-forms', title: 'Forms & Inputs', slug: 'html-forms' },
  { id: 'html-embed', title: 'Embed (SVG, Canvas, iframe)', slug: 'html-embed' },
  { id: 'html-semantic', title: 'Semantic HTML', slug: 'html-semantic' },
  { id: 'html-meta-seo', title: 'Meta Tags & SEO', slug: 'html-meta-seo' },
  { id: 'html-formatting', title: 'Formatting & Text Tags', slug: 'html-formatting' },
  { id: 'html-accessibility', title: 'Accessibility & ARIA', slug: 'html-accessibility' },
  { id: 'html-best-practices', title: 'Best Practices', slug: 'html-best-practices' },
];


export function HtmlTopicContent(slug: string): TopicContent | undefined {
  switch (slug) {
  case 'html-introduction':
  return {
    slug: 'html-introduction',
    title: 'Introduction to HTML',
    content: `
      <p>HTML (HyperText Markup Language) is the foundation of every website you see online. It's what tells the browser what content to show and how that content is structured — from paragraphs and headings to images and links.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-World Uses of HTML</h3>
      <p>You’ll find HTML behind the scenes of almost every digital interface — websites, web apps, emails, landing pages, and documentation. It’s everywhere!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 The Human Body Analogy</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>HTML = Skeleton:</strong> Provides the structure and layout of the content.</li>
        <li><strong>CSS = Skin & Style:</strong> Controls how things look — colors, fonts, layout, etc.</li>
        <li><strong>JavaScript = Brain & Muscles:</strong> Adds logic, interactions, and dynamic behavior.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔍 What is HTML Made Of?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Tags:</strong> Keywords inside angle brackets (e.g., <code>&lt;p&gt;</code>) that define elements.</li>
        <li><strong>Elements:</strong> A tag pair and the content it wraps (e.g., <code>&lt;p&gt;Hello&lt;/p&gt;</code>).</li>
        <li><strong>Attributes:</strong> Extra info added to tags (e.g., <code>&lt;img src="logo.png" alt="Logo"&gt;</code>).</li>
        <li><strong>Nesting:</strong> Placing elements inside others to build layout hierarchies.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📚 Common HTML Tags You’ll Use Often</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> — Headings</li>
        <li><code>&lt;p&gt;</code> — Paragraphs</li>
        <li><code>&lt;a&gt;</code> — Links</li>
        <li><code>&lt;img&gt;</code> — Images</li>
        <li><code>&lt;div&gt;</code> — Containers</li>
        <li><code>&lt;span&gt;</code> — Inline containers</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧱 Basic HTML Document Structure</h3>
      <p>Every HTML document starts with <code>&lt;!DOCTYPE html&gt;</code> and follows a basic layout:</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Try writing your own HTML using a simple text editor and opening the file in a browser. Or use tools like CodePen, JSFiddle, or Visual Studio Code to get started quickly.</p>
    `,
    proTip: 'Use browser developer tools (right-click → Inspect) to explore the HTML behind any webpage!',
    codeSamples: [
      {
        language: 'html',
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to IgKnight Platform</h1>
  <p>This is your first step into web development!</p>
</body>
</html>`
      },
      {
        language: 'html',
        code: `
<!-- Adding Images and Links -->
<img src="logo.png" alt="IgKnight Logo">
<a href="https://www.ignight.com">Visit IgKnight</a>`
      }
    ]
  };

    // 2️⃣ HTML Document Structure
    case 'html-document-structure':
      return {
        slug: 'html-document-structure',
        title: 'HTML Document Structure',
        content: `
          <p>Every HTML file follows a fixed structure that browsers understand:</p>

          <ul class="list-disc list-inside text-gray-300">
            <li><strong>DOCTYPE:</strong> Declares HTML version.</li>
            <li><strong>html tag:</strong> Root container.</li>
            <li><strong>head:</strong> Metadata like title, charset, SEO info, linked files.</li>
            <li><strong>body:</strong> Visible content rendered to user.</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-World Example:</h3>
          <p>Think of it like a resume. The head contains your personal details, and body contains your full experience & skills.</p>
        `,
        proTip: 'Always include meta viewport tag for mobile-friendly responsive pages.',
        codeSamples: [
          {
            language: 'html',
            code: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`
          }
        ]
      };

    // 3️⃣ HTML Syntax Basics
    case 'html-basic-syntax':
      return {
        slug: 'html-basic-syntax',
        title: 'HTML Syntax Basics',
        content: `
          <p>HTML syntax is simple but strict:</p>

          <ul class="list-disc list-inside text-gray-300">
            <li>Tags open with &lt;tag&gt; and close with &lt;/tag&gt;.</li>
            <li>Some tags are self-closing (like &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;).</li>
            <li>Proper nesting matters (tags inside tags must close correctly).</li>
          </ul>

          <p>Browsers are forgiving, but clean syntax avoids bugs.</p>
        `,
        proTip: 'Use code editors like VS Code with HTML formatter to auto-correct syntax.',
        codeSamples: [
          {
            language: 'html',
            code: `
<h1>Heading</h1>
<p>This is a paragraph.</p>
<img src="logo.png" alt="Logo" />`
          }
        ]
      };

    // 4️⃣ Headings & Paragraphs
    case 'html-headings-paragraphs':
      return {
        slug: 'html-headings-paragraphs',
        title: 'Headings & Paragraphs',
        content: `
          <p>Headings organize content into sections while paragraphs hold blocks of text:</p>

          <ul class="list-disc list-inside text-gray-300">
            <li>&lt;h1&gt; — Main page title (only one per page ideally).</li>
            <li>&lt;h2&gt; to &lt;h6&gt; — Sub-sections in hierarchy.</li>
            <li>&lt;p&gt; — Paragraph text.</li>
          </ul>

          <p>Good heading structure improves accessibility and SEO.</p>
        `,
        proTip: 'Never skip heading levels (e.g., don’t go from h1 directly to h4).',
        codeSamples: [
          {
            language: 'html',
            code: `
<h1>Page Title</h1>
<h2>Section 1</h2>
<p>This is a paragraph inside Section 1.</p>`
          }
        ]
      };
      case 'html-links-anchors':
  return {
    slug: 'html-links-anchors',
    title: 'Links & Anchors',
    content: `
      <p>Links connect different pages or resources. Without links, web navigation wouldn't exist!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔗 Types of Links:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Internal Links:</strong> Navigate inside your website.</li>
        <li><strong>External Links:</strong> Navigate to another website.</li>
        <li><strong>Email Links:</strong> Open user's email app.</li>
        <li><strong>Anchor Links:</strong> Jump to sections in the same page.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Analogy:</h3>
      <p>Think of links like street signs on a road guiding you where to go next.</p>
    `,
    proTip: 'Always use meaningful link text for accessibility (avoid "click here").',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- Internal link -->
<a href="/about.html">About Us</a>

<!-- External link -->
<a href="https://www.google.com" target="_blank">Google</a>

<!-- Email link -->
<a href="mailto:info@example.com">Contact Us</a>

<!-- Anchor link -->
<a href="#section2">Jump to Section 2</a>`
      }
    ]
  };
  case 'html-lists':
  return {
    slug: 'html-lists',
    title: 'Lists in HTML',
    content: `
      <p>Lists help organize related items together.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 Types of Lists:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Ordered List (ol):</strong> Numbered list.</li>
        <li><strong>Unordered List (ul):</strong> Bullet points.</li>
        <li><strong>Definition List (dl):</strong> Term & description pairs.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Use Case:</h3>
      <p>Use ordered lists for step-by-step instructions; unordered for general grouping.</p>
    `,
    proTip: 'Use CSS to customize bullet styles or list markers.',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- Unordered List -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>

<!-- Definition List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`
      }
    ]
  };
  case 'html-multimedia':
  return {
    slug: 'html-multimedia',
    title: 'Multimedia (Images, Audio, Video)',
    content: `
      <p>Modern websites are rich with multimedia like images, audio, and video.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🖼 Multimedia Elements:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Images:</strong> &lt;img&gt; tag.</li>
        <li><strong>Audio:</strong> &lt;audio&gt; tag.</li>
        <li><strong>Video:</strong> &lt;video&gt; tag.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Example:</h3>
      <p>Think of these like photos, songs, and movies inside your digital gallery!</p>
    `,
    proTip: 'Always add alt text to images for accessibility.',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- Image -->
<img src="photo.jpg" alt="Beautiful scenery" />

<!-- Audio -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>

<!-- Video -->
<video controls width="400">
  <source src="movie.mp4" type="video/mp4">
</video>`
      }
    ]
  };
  case 'html-tables':
  return {
    slug: 'html-tables',
    title: 'HTML Tables',
    content: `
      <p>Tables are used to display data in a structured format with rows and columns.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 Table Anatomy:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>&lt;table&gt;:</strong> Starts the table.</li>
        <li><strong>&lt;thead&gt;:</strong> Header section.</li>
        <li><strong>&lt;tbody&gt;:</strong> Body rows.</li>
        <li><strong>&lt;tr&gt;:</strong> Table row.</li>
        <li><strong>&lt;th&gt;:</strong> Header cell.</li>
        <li><strong>&lt;td&gt;:</strong> Data cell.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Analogy:</h3>
      <p>Imagine tables as spreadsheets inside your webpage!</p>
    `,
    proTip: 'Always add table headers for accessibility and screen readers.',
    codeSamples: [
      {
        language: 'html',
        code: `
<table border="1">
  <thead>
    <tr>
      <th>Name</th><th>Age</th><th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td><td>25</td><td>New York</td>
    </tr>
    <tr>
      <td>Jane</td><td>28</td><td>London</td>
    </tr>
  </tbody>
</table>`
      }
    ]
  };
  case 'html-forms':
  return {
    slug: 'html-forms',
    title: 'Forms & Inputs',
    content: `
      <p>Forms allow users to send data to the server — registration, login, search, etc.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📝 Basic Form Elements:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>&lt;form&gt;:</strong> The form container.</li>
        <li><strong>&lt;input&gt;:</strong> Text fields, checkboxes, radio buttons, etc.</li>
        <li><strong>&lt;textarea&gt;:</strong> Multi-line text field.</li>
        <li><strong>&lt;select&gt;:</strong> Dropdown list.</li>
        <li><strong>&lt;button&gt;:</strong> Submit button.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Example:</h3>
      <p>Forms are like filling applications, feedback forms or login credentials in real life.</p>
    `,
    proTip: 'Always label your form fields properly for accessibility.',
    codeSamples: [
      {
        language: 'html',
        code: `
<form>
  <label>Name: <input type="text" name="name"></label><br>
  <label>Email: <input type="email" name="email"></label><br>
  <label>Password: <input type="password" name="password"></label><br>
  <button type="submit">Submit</button>
</form>`
      }
    ]
  };
  case 'html-semantic':
  return {
    slug: 'html-semantic',
    title: 'Semantic HTML',
    content: `
      <p>Semantic HTML means using tags that clearly describe the meaning of the content inside them.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Why Semantic HTML Matters?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Improves accessibility for screen readers.</li>
        <li>Search engines understand your content better (SEO).</li>
        <li>Makes your code more readable and maintainable.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📚 Examples of Semantic Tags:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>&lt;header&gt;</code> — Top section (logo, navigation)</li>
        <li><code>&lt;nav&gt;</code> — Navigation menus</li>
        <li><code>&lt;main&gt;</code> — Main content area</li>
        <li><code>&lt;article&gt;</code> — Independent articles</li>
        <li><code>&lt;section&gt;</code> — Logical content sections</li>
        <li><code>&lt;aside&gt;</code> — Sidebars or extra content</li>
        <li><code>&lt;footer&gt;</code> — Bottom section of page</li>
      </ul>
    `,
    proTip: 'Write HTML like you’re writing a story — structure matters!',
    codeSamples: [
      {
        language: 'html',
        code: `
<header>
  <h1>My Blog</h1>
  <nav>...</nav>
</header>

<main>
  <article>
    <h2>Post Title</h2>
    <p>Post content goes here...</p>
  </article>
</main>

<footer>Copyright © 2025</footer>`
      }
    ]
  };
  case 'html-meta-seo':
  return {
    slug: 'html-meta-seo',
    title: 'Meta Tags & SEO',
    content: `
      <p>Meta tags provide metadata about the webpage: information not visible to users but important for browsers, search engines, and social platforms.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Key Meta Tags:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>&lt;title&gt;</code> — Title shown in browser tab and search engines</li>
        <li><code>&lt;meta charset="UTF-8"&gt;</code> — Character encoding</li>
        <li><code>&lt;meta name="description"&gt;</code> — Page summary for SEO</li>
        <li><code>&lt;meta name="viewport"&gt;</code> — Mobile responsiveness</li>
        <li><code>&lt;meta name="robots"&gt;</code> — Search engine indexing control</li>
        <li><code>&lt;meta property="og:title"&gt;</code> — Social media sharing</li>
      </ul>
    `,
    proTip: 'Write unique & descriptive meta descriptions for better SEO rankings.',
    codeSamples: [
      {
        language: 'html',
        code: `
<head>
  <title>IgKnight Learning Platform</title>
  <meta charset="UTF-8">
  <meta name="description" content="Master web development easily with IgKnight.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
      }
    ]
  };
  case 'html-formatting':
  return {
    slug: 'html-formatting',
    title: 'Formatting & Text Tags',
    content: `
      <p>HTML provides various tags to format text, highlight important parts, and improve content clarity.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🖋 Common Formatting Tags:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>&lt;b&gt;</code> — Bold (visual only)</li>
        <li><code>&lt;strong&gt;</code> — Important text (semantic)</li>
        <li><code>&lt;i&gt;</code> — Italic</li>
        <li><code>&lt;em&gt;</code> — Emphasized text</li>
        <li><code>&lt;mark&gt;</code> — Highlight</li>
        <li><code>&lt;sup&gt;</code> / <code>&lt;sub&gt;</code> — Superscript/Subscript</li>
        <li><code>&lt;del&gt;</code> — Deleted text</li>
        <li><code>&lt;ins&gt;</code> — Inserted text</li>
      </ul>
    `,
    proTip: 'Use semantic formatting tags (like &lt;strong&gt;) when possible for accessibility.',
    codeSamples: [
      {
        language: 'html',
        code: `
<p>This is <strong>important</strong> and <em>emphasized</em> text.</p>
<p>Math: H<sub>2</sub>O</p>
<p>Old price: <del>$99</del> New price: <ins>$49</ins></p>`
      }
    ]
  };
  case 'html-embed':
  return {
    slug: 'html-embed',
    title: 'Embed (SVG, Canvas, iframe)',
    content: `
      <p>Embedding allows you to insert external or interactive content inside your webpage.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Embedding Options:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>SVG:</strong> Scalable Vector Graphics (shapes, icons, charts)</li>
        <li><strong>Canvas:</strong> Dynamic 2D graphics (games, charts, animations)</li>
        <li><strong>iframe:</strong> Embed external pages, videos, maps, etc.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy:</h3>
      <p>Embedding is like placing a mini webpage or drawing directly inside your main page.</p>
    `,
    proTip: 'Use iframe carefully — avoid overusing external sources that affect performance.',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- Embedding YouTube video -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  frameborder="0" allowfullscreen></iframe>

<!-- Simple SVG -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="yellow" />
</svg>`
      }
    ]
  };
  case 'html-accessibility':
  return {
    slug: 'html-accessibility',
    title: 'Accessibility & ARIA',
    content: `
      <p>Accessibility ensures your website is usable by everyone, including people with disabilities.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">♿ Key Accessibility Principles:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use proper semantic HTML elements.</li>
        <li>Always provide <code>alt</code> text for images.</li>
        <li>Label form fields clearly.</li>
        <li>Ensure keyboard navigation works.</li>
        <li>Maintain sufficient color contrast.</li>
        <li>Use ARIA (Accessible Rich Internet Applications) roles where needed.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Example:</h3>
      <p>Accessibility is like adding ramps & signage for everyone to enter your building easily.</p>
    `,
    proTip: 'Test your website with screen readers and keyboard-only navigation.',
    codeSamples: [
      {
        language: 'html',
        code: `
<img src="profile.jpg" alt="Profile photo of John Doe">

<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</form>

<button aria-label="Close">X</button>`
      }
    ]
  };
  case 'html-best-practices':
  return {
    slug: 'html-best-practices',
    title: 'Best Practices',
    content: `
      <p>Follow these best practices to write clean, maintainable, and professional HTML code:</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📌 Best Practices Checklist:</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use semantic tags wherever possible.</li>
        <li>Keep your code properly indented and readable.</li>
        <li>Always close tags (especially self-closing tags).</li>
        <li>Write meaningful <code>alt</code> attributes for images.</li>
        <li>Use lowercase for tag names and attributes.</li>
        <li>Keep IDs unique on a page.</li>
        <li>Validate your HTML using W3C Validator.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Real Impact:</h3>
      <p>Following best practices helps with collaboration, debugging, SEO, and accessibility — and simply makes you a better developer!</p>
    `,
    proTip: 'Regularly review your code and validate to ensure standards compliance.',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- Clean, semantic, accessible code -->
<article>
  <h2>Learning HTML Best Practices</h2>
  <p>Start writing clean code from day one.</p>
</article>`
      }
    ]
  };
    default:
      return undefined;
  }
}
