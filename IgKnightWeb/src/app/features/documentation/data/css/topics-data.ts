import { Topic, TopicContent } from "../../../../models/topic.model";

export const CssTopics: Topic[] = [
  { id: 'css-introduction', title: 'Introduction to CSS', slug: 'css-introduction' },
  { id: 'css-selectors-properties', title: 'Selectors & Properties', slug: 'css-selectors-properties' },
  { id: 'css-colors-fonts', title: 'Colors & Fonts', slug: 'css-colors-fonts' },
  { id: 'css-box-model', title: 'The Box Model', slug: 'css-box-model' },
  { id: 'css-display-position', title: 'Display & Positioning', slug: 'css-display-position' },
  { id: 'css-flexbox', title: 'Flexbox Layout', slug: 'css-flexbox' },
  { id: 'css-grid', title: 'CSS Grid', slug: 'css-grid' },
  { id: 'css-position-display', title: 'CSS Position & Display Explained Simply', slug: 'css-position-display' },
  { id: 'css-spacing-sizing', title: 'Margin, Padding & Sizing', slug: 'css-spacing-sizing' },
  { id: 'css-background-border', title: 'Backgrounds & Borders', slug: 'css-background-border' },
  { id: 'css-pseudo-classes', title: 'Pseudo-classes & Pseudo-elements', slug: 'css-pseudo-classes' },
  { id: 'css-transitions-animations', title: 'Transitions & Animations', slug: 'css-transitions-animations' },
  { id: 'css-responsive', title: 'Responsive Design & Media Queries', slug: 'css-responsive' },
  { id: 'css-variables', title: 'CSS Variables', slug: 'css-variables' },
  { id: 'css-best-practices', title: 'Best Practices & Real Projects', slug: 'css-best-practices' },
];


export function CssTopicContent(slug: string): TopicContent | undefined {
  switch (slug) {
    case 'css-introduction':
      return {
        slug: 'css-introduction',
        title: 'What is CSS?',
        content: `
          <p>CSS (Cascading Style Sheets) is what makes your website look <strong>awesome</strong>. Without it, everything would be plain, black-and-white text.</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎨 Real-World Analogy</h3>
          <p>Think of HTML as your body — the bones and structure. CSS is like your clothes, hairstyle, and the way you present yourself. You still function without them... but you wouldn't look as cool.</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📌 What Can CSS Do?</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li>Change colors, fonts, and text size</li>
            <li>Control spacing and layout</li>
            <li>Make things move with animations</li>
            <li>Make your website responsive (look great on all devices)</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Why "Cascading"?</h3>
          <p>CSS rules "cascade" from top to bottom. If two styles target the same element, the one that's more specific or appears later usually wins. It's like stacking outfits — the last shirt you wear covers the earlier one.</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ How Do You Use It?</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Inline:</strong> Directly on the element (not recommended)</li>
            <li><strong>Internal:</strong> Inside a <code>&lt;style&gt;</code> tag in the HTML</li>
            <li><strong>External:</strong> Linked via a separate <code>.css</code> file — the best and cleanest way</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔍 Where You'll See CSS</h3>
          <p>Every modern website uses CSS — whether it's a blog, an e-commerce site, or even platforms like YouTube and Netflix. It's what turns boring markup into beautiful interfaces.</p>
        `,
        proTip: "Start small. Style one element at a time and use browser dev tools (Inspect Element) to play around and see what happens!",
        codeSamples: [
          {
                      language: 'html',
                      code: `
          <!-- HTML + Internal CSS Example -->
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              h1 {
                color: orange;
                text-align: center;
              }
              p {
                font-size: 16px;
                color: #555;
              }
            </style>
          </head>
          <body>
            <h1>Welcome to IgKnight!</h1>
            <p>This page looks better with CSS 😉</p>
          </body>
          </html>`
          },
          {
            language: 'css',
            code: `
          /* External CSS Example */
          body {
            background-color: #f4f4f4;
            font-family: sans-serif;
          }

          h1 {
            color: #ef4444;
          }

          p {
            color: #334155;
            line-height: 1.5;
          }`
          }
        ]
      };

      case 'css-syntax-selectors':
      return {
        slug: 'css-syntax-selectors',
        title: 'CSS Syntax & Selectors',
        content: `
          <p>CSS works by <strong>selecting elements</strong> on the page and applying styles to them. It’s like saying, “Hey, all the <code>&lt;h1&gt;</code> tags — wear orange!”</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧩 Basic CSS Rule Syntax</h3>
          <p>A CSS rule has 2 parts:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Selector:</strong> What you want to style (like <code>h1</code> or <code>.btn</code>)</li>
            <li><strong>Declaration Block:</strong> The styles inside <code>{ }</code></li>
          </ul>
          <pre class="bg-slate-800 text-green-400 p-4 rounded-md overflow-auto"><code>
selector {
  property: value;
}
</code></pre>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Types of Selectors (The Essentials)</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><code>element</code> — targets all elements (e.g., <code>p</code>, <code>h1</code>)</li>
            <li><code>.class</code> — targets elements with a specific class (e.g., <code>.card</code>)</li>
            <li><code>#id</code> — targets an element with a specific ID (e.g., <code>#header</code>)</li>
            <li><code>div p</code> — targets <code>p</code> inside <code>div</code> (called descendant selector)</li>
            <li><code>div > p</code> — targets direct children only</li>
            <li><code>div + p</code> — targets the very next <code>p</code> after a <code>div</code></li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🤖 Real-World Analogy</h3>
          <p>Imagine you walk into a room and shout instructions:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li>“Everyone wearing a <strong>blue shirt</strong> — sit down!” (like a <code>.blue</code> class)</li>
            <li>“You, <strong>John!</strong>” (that’s a unique <code>#id</code>)</li>
            <li>“All the <strong>chairs</strong> — move left” (targeting all elements)</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💬 Tip:</h3>
          <p>Use <code>.class</code> for groups of elements, and <code>#id</code> only once per page. Keep your selectors clean and clear.</p>
        `,
        proTip: "Inspect your elements in the browser and play with styles in real-time — it’s the best way to learn selectors!",
        codeSamples: [
          {
            language: 'css',
                code: `
        /* Element Selector */
        h1 {
          color: #f97316;
        }

        /* Class Selector */
        .card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
        }

        /* ID Selector */
        #main-title {
          font-size: 2rem;
          text-align: center;
        }`
              },
              {
              language: 'html',
              code: `
              <!-- HTML Elements with classes and IDs -->
              <h1 id="main-title">Welcome!</h1>
              <div class="card">
                <p>This is a card.</p>
              </div>`
          }
        ]
      };

      case 'css-colors-fonts':
      return {
        slug: 'css-colors-fonts',
        title: 'Colors & Fonts in CSS',
        content: `
          <p>Let’s add some life to your page! 🌈 With just a few lines of CSS, you can make text colorful, fun, serious, or fancy — it’s all up to the vibe you want to create.</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎨 Setting Text Colors</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><code>color</code> is for the text color.</li>
            <li>You can use color names (<code>red</code>), hex codes (<code>#f97316</code>), RGB, or HSL.</li>
          </ul>
          <pre class="bg-slate-800 text-green-400 p-4 rounded-md overflow-auto"><code>
p {
  color: #10b981; /* emerald green */
}
</code></pre>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🖌️ Background Colors</h3>
          <p>Use <code>background-color</code> to paint the element’s background.</p>
          <pre class="bg-slate-800 text-green-400 p-4 rounded-md overflow-auto"><code>
.card {
  background-color: #1f2937; /* dark gray */
  color: white;
}
</code></pre>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✍️ Font Styling</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><code>font-family</code>: Set the typeface (e.g., Arial, 'Poppins')</li>
            <li><code>font-size</code>: Controls size of the text</li>
            <li><code>font-weight</code>: Makes text bold or thin</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
          <p>Think of your web page like a poster:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Color</strong> grabs attention or sets the mood (like party vs. funeral 🎉⚰️)</li>
            <li><strong>Font</strong> shows personality — serious, casual, or fun</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💬 Tip:</h3>
          <p>Stick to 2–3 font families max. Combine a bold heading font with a clean body font.</p>
        `,
        proTip: "Google Fonts is your best friend for stylish web typography. Just include the link and set it using font-family!",
        codeSamples: [
          {
            language: 'css',
            code: `
        body {
          font-family: 'Segoe UI', sans-serif;
          color: #1f2937;
          background-color: #f4f4f4;
        }

        h1 {
          color: #ef4444;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .card {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
        }`
                  },
                  {
                    language: 'html',
                    code: `
        <h1>My Stylish Page</h1>
        <div class="card">
          <p>This card has a background color and uses a modern font.</p>
        </div>`
          }
        ]
      };

      case 'css-box-model':
      return {
        slug: 'css-box-model',
        title: 'Understanding the Box Model',
        content: `
          <p>Every HTML element is like a box — whether it’s text, an image, a button, or a div. CSS lets you control how much space each box takes up and how it behaves with others around it.</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 What’s Inside a CSS Box?</h3>
          <p>Imagine a cardboard box. It has:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Content</strong> — The actual stuff (text, image, etc.)</li>
            <li><strong>Padding</strong> — Space between the content and the border (like bubble wrap)</li>
            <li><strong>Border</strong> — The actual box edge</li>
            <li><strong>Margin</strong> — Space between this box and the next (like space on the shelf)</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-Life Analogy</h3>
          <p>Think of a gift box:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Gift item = Content</strong></li>
            <li><strong>Bubble wrap = Padding</strong></li>
            <li><strong>Box wall = Border</strong></li>
            <li><strong>Space in the gift bag = Margin</strong></li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📐 Visual Representation</h3>
          <p>This is what it looks like:</p>
          <pre class="bg-slate-800 text-green-400 p-4 rounded-md overflow-auto"><code>
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |     Border           | |
|  |  +---------------+  | |
|  |  |   Padding     |  | |
|  |  | +-----------+ |  | |
|  |  | |  Content  | |  | |
|  |  | +-----------+ |  | |
|  |  +---------------+  | |
|  +---------------------+  |
+---------------------------+
</code></pre>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💬 Common CSS Properties</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><code>padding: 10px;</code> — Adds space inside the box</li>
            <li><code>margin: 20px;</code> — Adds space outside the box</li>
            <li><code>border: 2px solid #ccc;</code> — Adds a border around the element</li>
            <li><code>box-sizing: border-box;</code> — Includes padding & border in the element’s width</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Tip:</h3>
          <p>Always use <code>box-sizing: border-box</code> to avoid layout headaches. It makes sizing predictable!</p>
        `,
        proTip: "Try inspecting any element in your browser (Right-click → Inspect). You’ll see the full box model live!",
        codeSamples: [
          {
            language: 'css',
                  code: `
      * {
        box-sizing: border-box;
      }

      .card {
        width: 300px;
        padding: 20px;
        margin: 30px auto;
        border: 2px solid #10b981;
        background-color: #f0fdfa;
      }`
                },
                {
                  language: 'html',
                  code: `
      <div class="card">
        <p>This card has padding, margin, and a border — it's all part of the box model!</p>
      </div>`
          }
        ]
      };

      case 'css-display-position':
      return {
        slug: 'css-display-position',
        title: 'Display & Position Explained',
        content: `
          <p>CSS controls not just how elements look, but also how they <strong>sit and behave</strong> on the page. Think of it like arranging furniture in a room — some items go side by side, some stack, and some float in corners!</p>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧱 Display Types</h3>
          <p>By default, elements behave in certain ways:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Block:</strong> Takes up full width (like a sofa). E.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code></li>
            <li><strong>Inline:</strong> Sits beside other items (like books on a shelf). E.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code></li>
            <li><strong>Inline-block:</strong> Like inline, but you can size it. Best of both worlds!</li>
            <li><strong>None:</strong> Makes it vanish from the page layout.</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📍 CSS Positioning</h3>
          <p>Positioning lets you decide <strong>where something lives</strong> on the screen — fixed, free, or relative to something else.</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Static (default):</strong> Normal flow of the document</li>
            <li><strong>Relative:</strong> Moves from its normal spot (without affecting others)</li>
            <li><strong>Absolute:</strong> Floats freely — placed exactly where you say</li>
            <li><strong>Fixed:</strong> Sticks to the screen (e.g., sticky headers)</li>
            <li><strong>Sticky:</strong> Acts like relative but becomes fixed when scrolling</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🪑 Real-Life Analogy</h3>
          <p>Think of a webpage as a room:</p>
          <ul class="list-disc list-inside text-gray-300">
            <li><strong>Static:</strong> Furniture arranged normally</li>
            <li><strong>Relative:</strong> You move the table slightly, but everything else stays put</li>
            <li><strong>Absolute:</strong> You place a hanging shelf on the wall wherever you want</li>
            <li><strong>Fixed:</strong> A sticky note stuck to your monitor — always in sight!</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💬 Common Properties</h3>
          <ul class="list-disc list-inside text-gray-300">
            <li><code>display: block | inline | none;</code></li>
            <li><code>position: relative | absolute | fixed;</code></li>
            <li><code>top, left, right, bottom</code> — Only work with positioned elements</li>
            <li><code>z-index</code> — Controls which item is "on top"</li>
          </ul>
        `,
        proTip: 'Use position: sticky for headers or sidebars that scroll with you but stay visible when needed!',
        codeSamples: [
          {
            language: 'css',
                code: `
    .box {
      width: 150px;
      height: 150px;
      background-color: #f59e0b;
      position: absolute;
      top: 50px;
      left: 100px;
    }`
              },
              {
                language: 'html',
                code: `
    <div style="position: relative;">
      <div class="box">I’m absolutely positioned</div>
    </div>`
          }
        ]
      };

      case 'css-flexbox':
  return {
    slug: 'css-flexbox',
    title: 'Flexible Layouts with Flexbox',
    content: `
      <p>Flexbox (short for <strong>Flexible Box</strong>) is a powerful CSS layout module designed to distribute space along a single column or row — especially helpful when creating responsive designs.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real Life Analogy</h3>
      <p>Think of Flexbox like a row of food containers in a lunchbox. You can decide how big or small each one is, how they align with each other, and whether they wrap or stay in a line — all easily!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Basic Flexbox Setup</h3>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400"><code>
.container {
  display: flex;
}
      </code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚙️ Common Flex Properties</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>flex-direction</code>: row | column</li>
        <li><code>justify-content</code>: start | center | space-between | space-around</li>
        <li><code>align-items</code>: stretch | center | flex-start | flex-end</li>
        <li><code>gap</code>: Adds spacing between items</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔄 Wrapping with Flexbox</h3>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400"><code>
.container {
  flex-wrap: wrap;
}
      </code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Use the browser dev tools to experiment with Flexbox live — it's the fastest way to understand how your layout changes in real-time!</p>
    `,
    proTip: 'Flexbox is ideal for one-dimensional layouts — use Grid when you need full rows *and* columns.',
    codeSamples: [
      {
        language: 'html',
        code: `
      <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
      </div>
              `
            },
            {
              language: 'css',
              code: `
      .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
      }

      .box {
        background-color: #4f46e5;
        color: white;
        padding: 20px;
        border-radius: 8px;
      }
              `
      }
    ]
  };

  case 'css-grid':
  return {
    slug: 'css-grid',
    title: 'Mastering CSS Grid',
    content: `
      <p>CSS Grid is a layout system built for two-dimensional layouts — rows and columns. It's like building a spreadsheet-style structure for your webpage!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real Life Analogy</h3>
      <p>Imagine a chessboard. Each square is a "grid cell". You can place elements in those squares, make them span multiple squares, or stack them neatly in rows and columns. That's Grid!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧱 Basic Grid Setup</h3>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400"><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
      </code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 Grid Terms Made Simple</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>grid-template-columns</code>: Defines the number and size of columns</li>
        <li><code>grid-template-rows</code>: Defines the number and size of rows</li>
        <li><code>gap</code>: Space between rows and columns</li>
        <li><code>grid-column / grid-row</code>: Control item placement and span</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Placing Items</h3>
      <p>You can tell items where to go like:</p>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400"><code>
.item1 {
  grid-column: 1 / span 2;
}
.item2 {
  grid-row: 2;
}
      </code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Grid is best when your layout involves both rows and columns. For one-directional layouts, Flexbox is still simpler.</p>
    `,
    proTip: 'Use tools like <a class="underline text-blue-400" href="https://cssgrid-generator.netlify.app/" target="_blank">CSS Grid Generator</a> to visualize your layout!',
    codeSamples: [
      {
        language: 'html',
        code: `
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</div>
        `
      },
      {
        language: 'css',
        code: `
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .box {
      background-color: #f97316;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }
            `
      }
    ]
  };

  case 'css-position-display':
  return {
    slug: 'css-position-display',
    title: 'CSS Position & Display Explained Simply',
    content: `
      <p>Positioning and display are two of the most misunderstood yet powerful tools in CSS. They control how your elements behave, flow, and sit on the screen.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>Think of HTML elements like stickers on a whiteboard. <strong>Display</strong> decides how the stickers are arranged (block vs inline), and <strong>Position</strong> decides if you want to stick them at a fixed spot, move them freely, or stack them over others.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧾 Common Display Values</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>block</code> – Takes full width, starts on new line (<code>&lt;div&gt;</code>)</li>
        <li><code>inline</code> – Takes only as much width as content (<code>&lt;span&gt;</code>)</li>
        <li><code>inline-block</code> – Like inline but supports width, height</li>
        <li><code>none</code> – Completely hides the element</li>
        <li><code>flex</code>, <code>grid</code> – Special layouts</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📍 Position Types (With Examples)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>static</code> – Default (just flows normally)</li>
        <li><code>relative</code> – Can shift around, but original space is preserved</li>
        <li><code>absolute</code> – Breaks out of flow, positions inside nearest relative parent</li>
        <li><code>fixed</code> – Sticks to viewport (like a navbar or floating button)</li>
        <li><code>sticky</code> – Acts like relative until it sticks while scrolling</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚙️ Basic Use Case</h3>
      <p>Want a box to float at the top-right?</p>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400"><code>
.floating-box {
  position: fixed;
  top: 20px;
  right: 20px;
  background: orange;
  padding: 10px;
  color: white;
}
      </code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Quick Tips</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use <code>relative</code> on a parent if child uses <code>absolute</code></li>
        <li><code>z-index</code> controls which layer shows on top</li>
        <li>Use <code>display: none</code> to hide, or <code>visibility: hidden</code> to hide but keep space</li>
      </ul>
    `,
    proTip: 'Use Chrome DevTools to right-click → "Inspect" and experiment with different display and position styles live!',
    codeSamples: [
      {
        language: 'html',
        code: `
<div class="banner">
  <p>Hello! I'm sticky.</p>
</div>
        `
      },
      {
        language: 'css',
        code: `
    .banner {
      position: sticky;
      top: 0;
      background-color: #f97316;
      padding: 10px;
      color: white;
      font-weight: bold;
    }
            `
      }
    ]
  };

  case 'css-spacing-sizing':
  return {
    slug: 'css-spacing-sizing',
    title: 'Margin, Padding & Sizing',
    content: `
      <p>Spacing in CSS is all about how elements breathe. Think of your UI like furniture in a room — you don’t want everything crammed into a corner! Margin, padding, and sizing help create a clean, readable layout.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📏 Margin vs Padding (Room Analogy)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Padding:</strong> The cushion inside a box — space between the content and the border.</li>
        <li><strong>Margin:</strong> The space outside the box — how far it stays from the next box.</li>
        <li><strong>Border:</strong> Think of this as the actual box wall — padding is inside, margin is outside.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 How to Use Them</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>margin</code> and <code>padding</code> can accept 1 to 4 values (top, right, bottom, left).</li>
        <li>Use <code>margin: 20px;</code> for all sides, or <code>padding: 10px 20px;</code> for top/bottom & left/right.</li>
        <li>You can target specific sides: <code>margin-top</code>, <code>padding-left</code>, etc.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📐 Sizing Content</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>width</code> & <code>height</code> control the size of the box.</li>
        <li><code>max-width</code> is a life-saver for responsive design — it prevents things from growing too wide.</li>
        <li>Use <code>min-height</code> to ensure something doesn’t collapse.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧪 Pro Tip</h3>
      <p>Use <code>* { box-sizing: border-box }</code> globally to include padding and border in the width/height — much easier to manage layouts!</p>
    `,
    proTip: 'Use DevTools (right-click → Inspect) to visually test margins and paddings live!',
    codeSamples: [
      {
        language: 'css',
        code: `
.box {
  padding: 20px;
  margin: 30px;
  border: 2px solid #ccc;
  width: 300px;
  height: 150px;
}`
      },
      {
        language: 'css',
        code: `
* {
  box-sizing: border-box;
}`  
      }
    ]
  };

  case 'css-background-border':
  return {
    slug: 'css-background-border',
    title: 'Backgrounds & Borders',
    content: `
      <p>CSS lets you dress up your elements like you’re decorating a gift box — background is the wrapping paper, and borders are the ribbon around it.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎨 Background Basics</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>background-color</code>: Fills the element with color.</li>
        <li><code>background-image</code>: Adds an image as the background.</li>
        <li><code>background-repeat</code>, <code>background-size</code>, <code>background-position</code>: Control how the image behaves.</li>
        <li>Tip: Use <code>background-size: cover;</code> to fill the box with the image nicely.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🖌️ Border Basics</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>border</code>: Controls the line around your element. You can style it with color, thickness, and shape.</li>
        <li>Shorthand: <code>border: 2px solid orange;</code></li>
        <li>Fancy styles: <code>dashed</code>, <code>dotted</code>, <code>double</code>, etc.</li>
        <li><code>border-radius</code>: Rounds the corners like softening a sharp box — <code>border-radius: 8px;</code></li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Vibes</h3>
      <p>If a <code>&lt;div&gt;</code> is a gift box:  
        <br/>🎁 Background is the wrapping paper  
        <br/>🎀 Border is the ribbon wrapped around it  
        <br/>✨ Border-radius makes it a soft pillow instead of a hard box!
      </p>
    `,
    proTip: 'You can combine multiple background layers by comma-separating them — like adding patterns over gradients!',
    codeSamples: [
      {
        language: 'css',
        code: `
.card {
  background-color: #f97316;
  border: 3px solid #1f2937;
  color: white;
  padding: 20px;
  border-radius: 12px;
}`
      },
      {
        language: 'css',
        code: `
.hero-banner {
  background-image: url('banner.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
}`
      }
    ]
  };

  case 'css-pseudo-classes':
  return {
    slug: 'css-pseudo-classes',
    title: 'Pseudo-classes & Pseudo-elements',
    content: `
      <p>Pseudo-classes and pseudo-elements in CSS are like magical helpers. They let you style elements based on their state or even add parts that don’t exist in your HTML.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🕹️ Pseudo-Classes (State-Based Styling)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use pseudo-classes to style elements *when something happens* — like hovering or focusing.</li>
        <li><code>:hover</code> — When you hover over something.</li>
        <li><code>:focus</code> — When an input gets focused.</li>
        <li><code>:nth-child()</code> — Style specific items in a list or grid.</li>
        <li><code>:checked</code> — Target selected radio buttons or checkboxes.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎭 Pseudo-Elements (Add Content)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>::before</code> and <code>::after</code> — Add decorative content before or after real content.</li>
        <li><code>::first-letter</code> — Style the first letter of a paragraph, like a storybook drop cap.</li>
        <li><code>::placeholder</code> — Style the gray text inside an input box.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🪄 Real-World Example</h3>
      <p>Think of <strong>:hover</strong> like changing a button’s color when someone touches it.  
         And <strong>::after</strong> is like placing a sticker on top of a box — it’s not inside the box but still shows up visually!</p>
    `,
    proTip: 'Use pseudo-elements to add icons, highlights, or effects without touching your HTML — super handy for clean code!',
    codeSamples: [
      {
        language: 'css',
        code: `
.button:hover {
  background-color: #f97316;
  color: white;
}`
      },
      {
        language: 'css',
        code: `
.card::after {
  content: '🔥';
  display: inline-block;
  margin-left: 8px;
}`
      },
      {
        language: 'css',
        code: `
input::placeholder {
  color: #999;
  font-style: italic;
}`
      }
    ]
  };

  case 'css-transitions-animations':
  return {
    slug: 'css-transitions-animations',
    title: 'Transitions & Animations',
    content: `
      <p>CSS can make your website feel alive! Transitions and animations let you add smooth movements and fun effects — like buttons fading, cards sliding in, or icons bouncing.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧊 CSS Transitions (Smooth Changes)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>transition</code> is used when an element changes its state — like color on hover.</li>
        <li>You define what to animate, how long it takes, and the timing style.</li>
        <li>Example: <code>transition: background-color 0.3s ease;</code></li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎞️ CSS Animations (Looped or Keyframed)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use <code>@keyframes</code> to describe step-by-step animations.</li>
        <li><code>animation-name</code>, <code>duration</code>, <code>iteration-count</code>, etc., control how it behaves.</li>
        <li>You can create loaders, sliders, pop-ins, and much more!</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎢 Real-World Analogy</h3>
      <p>🎯 <strong>Transition</strong> is like a light switch dimming instead of flipping suddenly.  
         🎬 <strong>Animation</strong> is like a full movie scene — you plan the motion frame by frame!</p>
    `,
    proTip: 'Always add <code>transition</code> to the element’s default state — not inside <code>:hover</code>!',
    codeSamples: [
      {
        language: 'css',
        code: `
.card {
  background-color: #1f2937;
  transition: background-color 0.3s ease;
}

.card:hover {
  background-color: #f97316;
}`
      },
      {
        language: 'css',
        code: `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.icon {
  animation: bounce 1s infinite;
}`
      }
    ]
  };

  case 'css-responsive':
  return {
    slug: 'css-responsive',
    title: 'Responsive Design & Media Queries',
    content: `
      <p>Responsive design makes your website look great on all screen sizes — from tiny mobile phones to giant desktop monitors.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📱 Why Responsiveness Matters</h3>
      <p>Imagine opening a website on your phone and everything looks broken — text too small, buttons off-screen. That's what happens when a site isn't responsive.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 How It Works</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use flexible units like <code>%</code>, <code>em</code>, or <code>vw/vh</code> instead of fixed <code>px</code>.</li>
        <li>Use <strong>media queries</strong> to change styles at different screen sizes.</li>
        <li>Hide/show elements or rearrange layout using CSS based on screen width.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📐 Real-World Analogy</h3>
      <p>Think of responsive design like water in a bottle — no matter the shape or size of the bottle (device), water adjusts and fits perfectly inside.</p>
    `,
    proTip: 'Start designing for small screens first (mobile-first), then scale up using media queries!',
    codeSamples: [
      {
        language: 'css',
        code: `
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 700px;
    margin: auto;
  }
}`
      },
      {
        language: 'css',
        code: `
h1 {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}`
      }
    ]
  };

  case 'css-variables':
  return {
    slug: 'css-variables',
    title: 'CSS Variables',
    content: `
      <p>CSS Variables (also called custom properties) let you store reusable values — like colors, spacing, or font sizes — in one place and use them throughout your styles.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 Why Use Them?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Change one variable — update your whole theme instantly.</li>
        <li>Makes your CSS more readable and maintainable.</li>
        <li>Works great for dark/light mode or custom themes.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔧 How to Use</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Define variables inside <code>:root</code> (global) or a selector (scoped).</li>
        <li>Access them using <code>var(--your-variable)</code>.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <p>Think of a CSS variable like a nickname: Instead of repeating “#f97316” everywhere, you call it <code>--primary-color</code>. If the color ever changes — just update the nickname in one place!</p>
    `,
    proTip: 'Define theme variables in <code>:root</code> so they’re accessible everywhere. Keep names readable like <code>--text-color</code>, <code>--btn-radius</code>, etc.',
    codeSamples: [
      {
        language: 'css',
        code: `
:root {
  --primary-color: #f97316;
  --border-radius: 8px;
}

button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
}`
      },
      {
        language: 'css',
        code: `
.dark-mode {
  --bg-color: #1f2937;
  --text-color: #f9fafb;
}

.light-mode {
  --bg-color: #ffffff;
  --text-color: #1f2937;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}`
      }
    ]
  };

  case 'css-best-practices':
  return {
    slug: 'css-best-practices',
    title: 'Best Practices & Real Projects',
    content: `
      <p>Now that you’ve learned the CSS fundamentals, let’s talk about how to actually apply them when building real websites and apps.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏗️ Start With a Plan</h3>
      <p>Don’t jump straight into writing CSS. Sketch your layout, choose a color palette, pick fonts. This saves time and avoids messy styles later.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Keep It Modular</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Break your CSS into reusable chunks — like <code>.btn</code>, <code>.card</code>, <code>.navbar</code>.</li>
        <li>Use utility-first or component-based styles for better reusability.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧼 Clean Code Tips</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Use consistent naming conventions (e.g., <code>kebab-case</code>).</li>
        <li>Group related styles together.</li>
        <li>Use variables for colors, spacing, and sizes.</li>
        <li>Remove unused styles — keep it lean!</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Real Projects to Build</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Build a portfolio homepage (with responsive navbar).</li>
        <li>Create a product landing page (cards + CTA buttons).</li>
        <li>Clone a section from a famous website (Netflix, Apple, etc.).</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔍 Debug Like a Pro</h3>
      <p>Use browser dev tools (right-click → Inspect) to test and tweak styles live. You’ll save a ton of time.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <p>Think of your CSS like a well-organized wardrobe: Each item (class) is in its place, named clearly, and easy to reuse. No clutter!</p>
    `,
    proTip: 'Before you add a new class or style, ask: “Can I reuse something I already made?” — That’s the CSS ninja mindset.',
    codeSamples: [
      {
        language: 'css',
        code: `
/* Consistent and reusable button styles */
.btn {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 6px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ea580c;
}`
      },
      {
        language: 'css',
        code: `
/* Clean layout with utility classes */
.container {
  max-width: 960px;
  margin: auto;
  padding: 1rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
}`
      }
    ]
  };


      default:
      return undefined;
  }
}



