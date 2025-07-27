import { Topic, TopicContent } from "../../../../models/topic.model";

export const FullstackTopics: Topic[] = [
  { id: 'fullstack-introduction', title: 'What is Fullstack Development?', slug: 'fullstack-introduction' },
  { id: 'frontend-basics', title: 'How Frontend Works', slug: 'frontend-basics' },
  { id: 'backend-basics', title: 'How Backend Works', slug: 'backend-basics' },
  { id: 'api-concepts', title: 'APIs & Communication', slug: 'api-concepts' },
  { id: 'database-intro', title: 'Intro to Databases', slug: 'database-intro' },
  { id: 'authentication', title: 'User Authentication Flow', slug: 'authentication' },
  { id: 'deployment', title: 'Hosting & Deployment', slug: 'deployment' },
  { id: 'real-world-flow', title: 'Real-World Project Flow', slug: 'real-world-flow' },
  { id: 'dev-best-practices', title: 'Best Practices in Fullstack', slug: 'dev-best-practices' }
];

export function FullStackTopicContent(slug: string): TopicContent | undefined {
  switch (slug) {
    case 'fullstack-introduction':
  return {
    slug: 'fullstack-introduction',
    title: 'What is Fullstack Development?',
    content: `
      <p>
        Imagine you and your friend decide to open a burger shop 🍔. You want to design a menu, serve customers, manage orders, and keep track of everything. Building a web app is kinda the same.
      </p>

      <p>
        In web development, there are two big parts:
      </p>

      <ul class="list-disc list-inside mt-2">
        <li><strong>Frontend (Client-side):</strong> This is what users see and interact with — buttons, textboxes, animations, pages, etc.</li>
        <li><strong>Backend (Server-side):</strong> This is where all the magic happens behind the scenes — data, logic, storage, authentication, payments, etc.</li>
      </ul>

      <p class="mt-3">
        Now, a <strong>Fullstack Developer</strong> is someone who does BOTH — they design the UI (frontend) and also make it work using logic and data (backend). It’s like being both the chef 👨‍🍳 and the cashier 💰 at the burger shop.
      </p>

      <hr class="my-6 border-gray-700"/>

      <h2 class="text-xl font-semibold text-orange-400 mt-4">🔁 The Real Software Development Flow</h2>

      <p class="mt-2">
        Let’s walk through how real-world apps like Instagram or Swiggy are built — not in theory, but how teams actually do it.
      </p>

      <ol class="list-decimal list-inside mt-3 space-y-3">
        <li>
          <strong>💡 1. The Idea Stage:</strong> It starts with a problem or a vision. <br/>
          “Let’s build an app where users can track their daily expenses” or “What if we made food ordering simpler?” — that’s the starting spark.
        </li>

        <li>
          <strong>📐 2. UI/UX Design:</strong> Designers use tools like Figma or Adobe XD to create mockups.<br/>
          These are like blueprints of how the app will look — login screen, dashboard, buttons, etc.
        </li>

        <li>
          <strong>🎨 3. Frontend Development:</strong> Frontend devs take the design and build real web pages using HTML, CSS, and JavaScript.<br/>
          Frameworks like Angular, React, or Vue are often used. The goal is to make the app responsive and interactive.
        </li>

        <li>
          <strong>⚙️ 4. Backend Development:</strong> Backend devs set up the logic and data handling.<br/>
          They use frameworks like .NET, Node.js, Django, or Spring to:
          <ul class="list-disc list-inside mt-2 ml-4">
            <li>Store data in databases (e.g., PostgreSQL, MongoDB)</li>
            <li>Authenticate users (login/register)</li>
            <li>Process payments, send OTPs, emails, etc.</li>
            <li>Expose APIs that frontend can call</li>
          </ul>
        </li>

        <li>
          <strong>🔗 5. Frontend ↔️ Backend Connection:</strong> Now comes the bridge. Frontend sends requests like:
          <code>POST /login</code> or <code>GET /orders</code>. <br/>
          The backend replies with the right data. This is done using APIs, often in JSON format.
        </li>

        <li>
          <strong>🧪 6. Testing:</strong> QA engineers and devs test if everything works smoothly:
          <ul class="list-disc list-inside ml-4 mt-1">
            <li>Do forms work properly?</li>
            <li>What happens on slow internet?</li>
            <li>Are errors shown correctly?</li>
          </ul>
        </li>

        <li>
          <strong>🚀 7. Deployment:</strong> Once everything’s ready, the app is deployed to real servers (like AWS, Azure, Vercel, Netlify).<br/>
          It’s live — users can now access it from their phones or browsers!
        </li>

        <li>
          <strong>🔄 8. Maintenance & Updates:</strong> Bugs get fixed, new features get added, security patches are applied.<br/>
          This cycle continues as the app grows.
        </li>
      </ol>

      <hr class="my-6 border-gray-700"/>

      <h2 class="text-xl font-semibold text-orange-400 mt-4">📌 Real-Life Example</h2>
      <p class="mt-2">
        Let’s say we’re building a blogging site:
      </p>

      <ul class="list-disc list-inside mt-2 ml-2">
        <li><strong>Frontend:</strong> Login page, post editor, homepage with recent blogs — built with HTML, CSS, Angular</li>
        <li><strong>Backend:</strong> User accounts, blog database, file uploads — handled in .NET Core</li>
        <li><strong>Database:</strong> SQL Server stores all blog posts, users, and comments</li>
        <li><strong>Deployment:</strong> Hosted on Azure with CDN and SSL</li>
      </ul>

      <p class="mt-3">
        The fullstack dev here would handle BOTH sides, connecting every piece like a puzzle 🧩.
      </p>
    `,
    proTip: `Start small. Build a login form → connect it to a simple Node.js backend → store data in MongoDB. That’s your first fullstack win! 🏁`,
    codeSamples: []
  };
  case 'frontend-basics':
  return {
    slug: 'frontend-basics',
    title: 'How Frontend Works',
    content: `
<p>Imagine opening your favorite app — Netflix, Instagram, or IgKnight itself 👀. The moment you see buttons, animations, images, text, menus — you’re experiencing the <strong>Frontend</strong>.</p>

<p><strong>Frontend</strong> is everything the user sees and interacts with on their screen. It's also called the <em>Client Side</em>. It’s built using a combination of:</p>

<ul class="list-disc list-inside space-y-1">
  <li><strong>HTML</strong> 🧱 – The skeleton of the web page (defines structure)</li>
  <li><strong>CSS</strong> 🎨 – The styling layer (colors, fonts, layout)</li>
  <li><strong>JavaScript</strong> ⚙️ – The behavior (clicks, animations, popups, etc.)</li>
</ul>

<p>Let’s compare it to building a car:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>HTML</strong> is the car's frame – doors, wheels, steering.</li>
  <li><strong>CSS</strong> is the paint, leather seats, and design.</li>
  <li><strong>JavaScript</strong> makes the car drive, blink indicators, and play music.</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🧠 What does a Frontend Developer do?</h2>
<p>Frontend developers are the artists and engineers behind the screen! They turn design ideas (usually from Figma, XD, etc.) into real, clickable websites using HTML/CSS/JS. But that’s not all — modern apps use frameworks like:</p>

<ul class="list-disc list-inside space-y-1">
  <li><strong>React</strong> ⚛️ – by Meta</li>
  <li><strong>Angular</strong> 🅰️ – by Google</li>
  <li><strong>Vue</strong> – simple and clean</li>
</ul>

<p>These help manage large apps better, break UIs into components, and handle complex logic easily.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🌐 From Design to Reality</h2>
<p>In a real company setup, here’s what happens:</p>
<ol class="list-decimal list-inside space-y-1">
  <li>UI/UX Designers create mockups of how the app should look</li>
  <li>Frontend devs convert those into working pages using HTML/CSS/JS</li>
  <li>They connect with Backend devs to fetch real data using APIs</li>
  <li>They ensure the site looks good on all devices (Responsive Design)</li>
</ol>

<h2 class="text-xl font-semibold mt-6 mb-2">🚀 Tools of the Trade</h2>
<p>Frontend developers often use:</p>
<ul class="list-disc list-inside space-y-1">
  <li>Code editors like <strong>VS Code</strong></li>
  <li>DevTools in browsers to debug and inspect</li>
  <li>Git for version control</li>
  <li>Tailwind, Bootstrap for faster styling</li>
</ul>

<p class="mt-4">In short, frontend is where logic meets beauty. It’s what brings your app to life and makes users fall in love with the experience ❤️.</p>
    `,
    proTip: `Always keep UX in mind. A slow or clunky frontend will ruin the experience, no matter how powerful your backend is.`,
    codeSamples: [
      {
        language: 'html',
        code: `<!-- Simple frontend HTML structure -->
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome to IgKnight!</h1>
    <button onclick="alert('Start Learning!')">Click Me</button>
    <script src="app.js"></script>
  </body>
</html>`
      }
    ]
  };
  case 'backend-basics':
  return {
    slug: 'backend-basics',
    title: 'How Backend Works',
    content: `
<p>Okay, so you clicked a button on the frontend — maybe “Login” or “View Profile”. Now what? 🤔</p>

<p>That’s where the <strong>Backend</strong> jumps into action. Backend is like the hidden superhero 🦸‍♂️ working behind the scenes — it does all the heavy lifting, data processing, and decision-making.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">💻 What is Backend?</h2>
<p>The <strong>Backend</strong> (also called the <em>Server Side</em>) is the part of the web app that:</p>

<ul class="list-disc list-inside space-y-1">
  <li>Stores and retrieves data from the <strong>database</strong></li>
  <li>Handles user login, signup, payments, uploads, etc.</li>
  <li>Contains the app’s real <strong>business logic</strong></li>
  <li>Processes requests sent from the frontend and sends responses back</li>
</ul>

<p>It's not visible to users, but it's absolutely essential.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">⚙️ What’s it made of?</h2>
<p>Backend usually includes:</p>

<ul class="list-disc list-inside space-y-1">
  <li>A <strong>Server</strong>: runs your code (Node.js, .NET, Django, etc.)</li>
  <li>A <strong>Database</strong>: stores your app’s data (like MySQL, MongoDB, PostgreSQL)</li>
  <li><strong>APIs</strong>: allow frontend and backend to talk to each other</li>
</ul>

<p>For example, when you log in:</p>
<ol class="list-decimal list-inside space-y-1">
  <li>Frontend sends your email/password to backend</li>
  <li>Backend checks if your data is correct using the database</li>
  <li>It sends a success or failure response back</li>
</ol>

<h2 class="text-xl font-semibold mt-6 mb-2">🧠 Real-Life Analogy</h2>
<p>Imagine you're at a restaurant 🍝:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>You (User)</strong> = Customer</li>
  <li><strong>Frontend</strong> = Menu & Waiter (what you see and interact with)</li>
  <li><strong>Backend</strong> = Kitchen (cooks and prepares the actual food)</li>
  <li><strong>Database</strong> = Ingredients storage 🧂</li>
</ul>
<p>You don’t see the kitchen (backend), but without it, nothing works!</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🛠️ Common Backend Frameworks</h2>
<p>Developers use frameworks to build backends quickly and securely:</p>

<ul class="list-disc list-inside space-y-1">
  <li><strong>Node.js</strong> + Express (JavaScript)</li>
  <li><strong>.NET</strong> (C#)</li>
  <li><strong>Django</strong> (Python)</li>
  <li><strong>Spring Boot</strong> (Java)</li>
</ul>

<p>These handle things like routing, APIs, security, sessions, and much more.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🌐 Backend + Frontend = Teamwork</h2>
<p>The backend exposes <strong>APIs</strong> (like URLs) that the frontend calls using <code>fetch()</code> or <code>axios</code>.</p>

<p>For example:</p>
<pre><code>GET https://api.ignight.com/users/123</code></pre>
<p>This might return data like:</p>
<pre><code>{
  "id": 123,
  "name": "Zoya",
  "courses": ["HTML", "C#"]
}</code></pre>

<p>The frontend shows this data beautifully to the user. 💫</p>
    `,
    proTip: `Backend is all about logic, security, and data. Keep it clean, fast, and safe — and document your APIs clearly.`,
    codeSamples: [
      {
        language: 'js',
        code: `// Simple Node.js Express backend
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));`
      }
    ]
  };
  case 'api-concepts':
  return {
    slug: 'api-concepts',
    title: 'APIs & Communication',
    content: `
<p>When your frontend wants to talk to the backend — to log in, fetch courses, submit answers, or save progress — it uses something called an <strong>API</strong> 🔗.</p>

<p><strong>API</strong> stands for <em>Application Programming Interface</em>. It's a set of rules that allows two parts of a system to communicate.</p>

<p>In Fullstack, it's how the <strong>frontend</strong> (browser) and <strong>backend</strong> (server) exchange data, usually using <code>HTTP</code>.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔁 Real-Life Analogy: Ordering Food</h2>
<p>Imagine you’re at a restaurant 🍔:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>You</strong> = Frontend</li>
  <li><strong>Waiter</strong> = API (middleman)</li>
  <li><strong>Kitchen</strong> = Backend</li>
</ul>
<p>You (frontend) tell the waiter (API) your order. The waiter goes to the kitchen (backend), gets the food (data), and brings it back. You never directly talk to the kitchen.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📡 HTTP Methods (The Verbs)</h2>
<p>APIs mostly use HTTP and follow REST (Representational State Transfer) style. Common methods:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>GET</strong>: Fetch data (e.g., get all users)</li>
  <li><strong>POST</strong>: Send data (e.g., create a new account)</li>
  <li><strong>PUT</strong>: Update existing data</li>
  <li><strong>DELETE</strong>: Remove data</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">📦 Example: Frontend calls an API</h2>
<p>Let’s say we want to fetch a list of courses:</p>
<pre><code>GET https://api.igknight.com/courses</code></pre>
<p>The backend might respond with:</p>
<pre><code>[
  { "id": 1, "title": "HTML Basics" },
  { "id": 2, "title": "TypeScript 101" }
]</code></pre>

<p>The frontend uses JavaScript (like <code>fetch</code> or <code>axios</code>) to make the call and then shows that data on screen.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔐 Securing APIs</h2>
<p>Some APIs require <strong>authentication</strong>. After a user logs in, they get a <strong>token</strong> (like a badge). Every future request includes this token to prove who they are:</p>

<pre><code>Authorization: Bearer your-token-here</code></pre>

<h2 class="text-xl font-semibold mt-6 mb-2">🌍 Types of APIs</h2>
<ul class="list-disc list-inside space-y-1">
  <li><strong>REST APIs</strong>: The most common (based on URLs and HTTP methods)</li>
  <li><strong>GraphQL</strong>: Flexible querying (ask only for what you need)</li>
  <li><strong>WebSockets</strong>: Real-time communication (like chat apps, live quizzes)</li>
</ul>

<p>In real projects, the frontend sends requests to APIs for everything: login, signup, quizzes, profile data, etc. APIs are the glue of Fullstack apps 🔗.</p>
    `,
    proTip: `Use tools like Postman or Thunder Client to test your APIs during development — it saves tons of debugging time.`,
    codeSamples: [
      {
        language: 'js',
        code: `// Simple API call from frontend using fetch
fetch('https://api.igknight.com/courses')
  .then(response => response.json())
  .then(data => console.log(data));`
      }
    ]
  };
  case 'database-intro':
  return {
    slug: 'database-intro',
    title: 'Intro to Databases',
    content: `
<p>Imagine building a learning platform like IgKnight — users sign up, save their progress, take quizzes, etc. Where does all that data live? In a <strong>Database</strong> 🗃️.</p>

<p>A <strong>database</strong> is like your app’s long-term memory. It stores everything from user accounts and passwords to courses, lessons, scores, and more.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📦 What is a Database?</h2>
<p>A database is a structured place to <strong>store, retrieve, update, and delete</strong> data.</p>
<p>Backend code connects to the database and performs operations like:</p>
<ul class="list-disc list-inside space-y-1">
  <li>“Get user info by ID”</li>
  <li>“Save this quiz score”</li>
  <li>“Delete this comment”</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🧠 Real-Life Analogy</h2>
<p>Think of a database like a digital filing cabinet 🗄️:</p>
<ul class="list-disc list-inside space-y-1">
  <li>Each folder = a table (e.g., <code>Users</code>, <code>Courses</code>)</li>
  <li>Each sheet = a row of data (e.g., one user)</li>
  <li>Each column = a field (e.g., <code>name</code>, <code>email</code>, <code>score</code>)</li>
</ul>

<p>You can search, update, or delete any entry using special queries.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🧮 Types of Databases</h2>
<p>There are 2 main types:</p>

<h3 class="text-lg font-semibold mt-4">1. Relational (SQL-based)</h3>
<ul class="list-disc list-inside space-y-1">
  <li>Data is stored in tables</li>
  <li>Uses SQL (Structured Query Language)</li>
  <li><strong>Examples:</strong> MySQL, PostgreSQL, SQLite, SQL Server</li>
</ul>

<h3 class="text-lg font-semibold mt-4">2. Non-Relational (NoSQL)</h3>
<ul class="list-disc list-inside space-y-1">
  <li>Stores data as JSON-like objects</li>
  <li>No fixed schema (good for flexible or nested data)</li>
  <li><strong>Examples:</strong> MongoDB, Firebase, DynamoDB</li>
</ul>

<p>Pick based on your project. For user-data apps like IgKnight, both SQL and NoSQL can work!</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🛠️ How Backend Talks to DB</h2>
<p>The backend (Node.js, .NET, etc.) connects to the database using a library (like Prisma, Mongoose, Dapper, etc.). It sends queries like:</p>
<pre><code>SELECT * FROM Users WHERE email = 'zoya@ignight.com';</code></pre>

<p>The database runs the query and returns data — the backend then sends it to the frontend.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔐 Security Tips</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Never expose your database directly to the frontend</li>
  <li>Use hashed passwords (e.g., bcrypt, PBKDF2)</li>
  <li>Sanitize inputs to prevent SQL injection</li>
</ul>

<p>Without a database, your app has no memory — everything resets when the page refreshes. So use it wisely and securely! 🔐</p>
    `,
    proTip: `Use a visual database client (like TablePlus, DBeaver, or Mongo Compass) to browse and debug your data — it helps you truly understand the structure.`,
    codeSamples: [
      {
        language: 'sql',
        code: `-- Get all users
SELECT * FROM Users;

-- Add a new user
INSERT INTO Users (name, email) VALUES ('Zoya', 'zoya@ignight.com');`
      }
    ]
  };
  case 'authentication':
  return {
    slug: 'authentication',
    title: 'User Authentication Flow',
    content: `
<p>Ever logged into Netflix or IgKnight? 🧑‍💻 That entire process of verifying “Is this really *you*?” is called <strong>Authentication</strong>.</p>

<p>In a fullstack app, authentication is the backbone of anything user-specific — like your saved progress, profile, quizzes, etc. Let’s understand how it works step-by-step 🔐</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔑 What is Authentication?</h2>
<p><strong>Authentication</strong> is the process of confirming a user’s identity. It usually happens through:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Email + Password</strong> 📨</li>
  <li><strong>Google or GitHub Login</strong> (OAuth) 🪪</li>
  <li><strong>OTP (One-Time Password)</strong> 🔢</li>
</ul>

<p>Once the user proves who they are, the app lets them access their private data.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔁 Login Flow (Real Example)</h2>
<p>Let’s say Zoya logs into IgKnight:</p>
<ol class="list-decimal list-inside space-y-2 mt-2">
  <li>She enters her email & password on the login screen</li>
  <li>The frontend sends this to the backend via an API</li>
  <li>The backend checks if the email exists in the <code>Users</code> table</li>
  <li>If it does, it compares the password hashes (we never store plain passwords!)</li>
  <li>If it matches, backend creates a token (like a JWT) and sends it back</li>
  <li>The frontend saves this token (usually in localStorage or a cookie)</li>
  <li>Now, every future request includes this token as “proof”</li>
</ol>

<p>This is called a <strong>token-based authentication system</strong> 🔐</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔒 Password Storage</h2>
<p>Never store passwords in plain text — use hashing algorithms like:</p>
<ul class="list-disc list-inside space-y-1">
  <li><code>bcrypt</code></li>
  <li><code>PBKDF2</code></li>
</ul>
<p>They scramble the password so even if your DB leaks, no one can read the real ones.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🚀 OAuth Login (Google, GitHub)</h2>
<p>Instead of remembering passwords, users can log in with their Google/GitHub accounts using OAuth.</p>
<p>This flow involves:</p>
<ul class="list-disc list-inside space-y-1">
  <li>User clicks "Login with Google"</li>
  <li>Google authenticates them and returns a profile + token to your backend</li>
  <li>You use that to create or fetch the user in your DB</li>
</ul>
<p>It's secure, fast, and avoids password headaches 😎</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📦 Real Stack Example (IgKnight style)</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Frontend: Angular form with validations</li>
  <li>Backend: .NET microservice that checks the user and returns JWT</li>
  <li>Password: Stored securely with PBKDF2-SHA512</li>
  <li>Optional: Google OAuth + OTP + CAPTCHA for extra security</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">✅ Final Thought</h2>
<p>Authentication is more than just login screens — it’s the gatekeeper of your app’s private world. Design it right, and your users feel secure 🧠💻</p>
`,
    proTip: `Use JWTs for stateless auth and always hash passwords — never trust user input without validation.`,
    codeSamples: [
      {
        language: 'json',
        code: `// Example of a JWT payload
{
  "userId": "12345",
  "email": "zoya@ignight.com",
  "exp": 1718793293
}`
      }
    ]
  };
  case 'deployment':
  return {
    slug: 'deployment',
    title: 'Hosting & Deployment',
    content: `
<p>You’ve built your app, it works perfectly on your local machine — but how do you make it live so real users can access it? That’s where <strong>deployment</strong> comes in 🚀</p>

<p>Deployment is the process of <strong>publishing your frontend, backend, and database to the internet</strong>, so users can access your app 24/7.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📦 What Does a Fullstack App Include?</h2>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Frontend</strong> (e.g., Angular, React) — what users see</li>
  <li><strong>Backend API</strong> (e.g., Node.js, .NET) — handles logic and data</li>
  <li><strong>Database</strong> (e.g., PostgreSQL, MongoDB) — stores user data</li>
</ul>

<p>All three parts need to be deployed to a server or cloud platform so they’re always available.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🏠 Frontend Hosting</h2>
<p>Modern frontend apps are static builds — HTML, JS, CSS.</p>
<p>You can deploy them using:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Vercel</strong> – Great for frontend frameworks</li>
  <li><strong>Netlify</strong> – Fast, simple, supports CI/CD</li>
  <li><strong>GitHub Pages</strong> – For static sites</li>
  <li><strong>S3 + CloudFront</strong> – AWS static site hosting</li>
</ul>

<p>Just build your app (e.g., <code>ng build</code>) and push it to the platform.</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🧠 Backend Hosting</h2>
<p>The backend is a server app — it needs to run continuously and respond to API requests.</p>
<p>Popular hosting options:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Render</strong> – Simple, free tier, supports Node, .NET, etc.</li>
  <li><strong>Railway</strong> – Great for fullstack workflows</li>
  <li><strong>DigitalOcean / Linode</strong> – VPS-style control</li>
  <li><strong>AWS EC2 / Azure App Service</strong> – Cloud power, more control</li>
</ul>

<p>You deploy by connecting your Git repo or uploading your build (DLLs, binaries, etc.).</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🗃️ Database Hosting</h2>
<p>Your database needs to live online too. You can use:</p>
<ul class="list-disc list-inside space-y-1">
  <li><strong>PlanetScale</strong> – Managed MySQL (great for fullstack)</li>
  <li><strong>Supabase</strong> – PostgreSQL with auth, APIs</li>
  <li><strong>MongoDB Atlas</strong> – Cloud MongoDB</li>
  <li><strong>Neon</strong>, <strong>ElephantSQL</strong>, or <strong>Firebase</strong> (NoSQL)</li>
</ul>

<p>You’ll get a connection string like:</p>
<pre><code>postgresql://user:pass@dbhost.ignight.cloud:5432/mydb</code></pre>

<p>This connects your backend to the live database 🎯</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🔐 Don’t Forget Security!</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Use <code>.env</code> files for secrets and DB URLs</li>
  <li>Enable HTTPS (most platforms do it for you)</li>
  <li>Keep tokens & API keys private</li>
  <li>Use firewalls and rate limiting on backend</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🛠️ Real-World IgKnight Setup Example</h2>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Frontend:</strong> Angular → Hosted on Vercel</li>
  <li><strong>Backend:</strong> .NET Core API → Deployed on Railway</li>
  <li><strong>Database:</strong> PostgreSQL on Supabase</li>
  <li><strong>Domain:</strong> Custom domain via Vercel or Cloudflare</li>
</ul>

<p>And boom — your fullstack app is live to the world! 🌐</p>
    `,
    proTip: `Use CI/CD tools like GitHub Actions or Vercel/Netlify’s automatic deployments — push code and let it go live automatically.`,
    codeSamples: [
      {
        language: 'bash',
        code: `# Angular deployment to Vercel
npm install -g vercel
vercel`

      }
    ]
  };
  case 'real-world-flow':
  return {
    slug: 'real-world-flow',
    title: 'Real-World Fullstack Flow',
    content: `
<p>You've learned about the frontend, backend, database, and deployment. Now let's put it all together in a real-world fullstack journey — like how IgKnight works behind the scenes 💡</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🚀 The Big Picture</h2>
<p>Every modern app — whether it’s Instagram, IgKnight, or a banking portal — follows a similar fullstack flow:</p>
<ol class="list-decimal list-inside space-y-2">
  <li>User visits the site (e.g., <code>https://learn.ignight.io</code>)</li>
  <li>Frontend (Angular) is served from Vercel</li>
  <li>User logs in → frontend sends login request to backend API</li>
  <li>Backend (e.g., .NET) receives request and validates credentials</li>
  <li>If valid, backend sends back a JWT token</li>
  <li>Frontend stores the token and uses it to access protected routes</li>
  <li>Data is fetched from PostgreSQL (hosted on Supabase)</li>
  <li>User sees their dashboard, course progress, etc.</li>
</ol>

<h2 class="text-xl font-semibold mt-6 mb-2">🔄 Request/Response Flow</h2>
<p>Let’s walk through a flow when the user wants to fetch their course list:</p>

<ul class="list-disc list-inside space-y-1">
  <li>Frontend sends <code>GET /api/courses</code> with Authorization header</li>
  <li>Backend verifies the token and user’s identity</li>
  <li>Backend queries the <code>Courses</code> table in the database</li>
  <li>Returns JSON response with course data</li>
  <li>Frontend shows cards like “Intro to HTML”, “Mastering CSS”, etc.</li>
</ul>

<p>Every interaction is a dance between frontend 🕺, backend 💃, and database 🎻</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📦 Tech Stack Recap (Example)</h2>
<ul class="list-disc list-inside space-y-1">
  <li><strong>Frontend:</strong> Angular + Tailwind (Vercel)</li>
  <li><strong>Backend:</strong> .NET Core API (Railway)</li>
  <li><strong>Database:</strong> PostgreSQL (Supabase)</li>
  <li><strong>Auth:</strong> JWT + Google OAuth</li>
  <li><strong>Extras:</strong> CAPTCHA, OTP via Gmail, Rate Limiting</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">✅ Final Thought</h2>
<p>Fullstack development isn’t just about learning tech — it’s about <strong>how data flows</strong> across layers. Once you understand the flow, the rest is just building blocks 🧱</p>

<p>With IgKnight, you're not just learning frontend/backend — you're learning how they work <strong>together in the real world</strong>.</p>
`,
    proTip: `Build small fullstack projects like “Todo App with Login” or “Blog with Admin Panel” to truly understand how the flow works from end to end.`,
    codeSamples: [
      {
        language: 'http',
        code: `GET /api/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5...
`
      }
    ]
  };
  case 'dev-best-practices':
  return {
    slug: 'dev-best-practices',
    title: 'Best Practices in Fullstack Development',
    content: `
<p>Alright champ — you’ve now seen how frontend, backend, and databases work together. But to become a <strong>great developer</strong>, you need habits and practices that make your code clean, safe, and scalable 💪</p>

<h2 class="text-xl font-semibold mt-6 mb-2">📁 1. Keep Your Code Organized</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Follow feature-based folder structures</li>
  <li>Keep components, services, models in separate files</li>
  <li>Name things clearly — <code>UserService</code> is better than <code>abc.js</code></li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🧪 2. Test As You Build</h2>
<p>Don’t wait until the end! Try testing each part as you go:</p>
<ul class="list-disc list-inside space-y-1">
  <li>Use Postman or Thunder Client to hit your API endpoints</li>
  <li>Log responses in the frontend to see what's coming back</li>
  <li>Write unit tests if possible (Jest for JS, xUnit for .NET, etc.)</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🧠 3. Understand Before You Use</h2>
<p>Don’t just copy-paste from StackOverflow. Take a breath, break it down, and ask:</p>
<ul class="list-disc list-inside space-y-1">
  <li>What is this function doing?</li>
  <li>What will happen if the input is wrong?</li>
  <li>Can I explain this to a friend in simple terms?</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🔐 4. Prioritize Security Early</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Hash passwords — never store them in plain text</li>
  <li>Use HTTPS, enable CORS properly</li>
  <li>Always validate and sanitize user input</li>
  <li>Use environment variables for secrets</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🚀 5. Don’t Overcomplicate Too Soon</h2>
<p>Use simple approaches first, then scale:</p>
<ul class="list-disc list-inside space-y-1">
  <li>Use local state before diving into NgRx/Redux</li>
  <li>Use a flat file DB or local JSON before diving into SQL</li>
  <li>Write normal functions before learning RxJS operators</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">👥 6. Collaborate Like a Pro</h2>
<ul class="list-disc list-inside space-y-1">
  <li>Use Git for version control — commit often with clear messages</li>
  <li>Follow branching strategy — like <code>main</code>, <code>dev</code>, <code>feature/xyz</code></li>
  <li>Document your code — future you (and teammates) will thank you!</li>
</ul>

<h2 class="text-xl font-semibold mt-6 mb-2">🔥 Bonus: Fullstack Mindset</h2>
<p>Always think in fullstack terms:</p>
<ul class="list-disc list-inside space-y-1">
  <li>How does the frontend trigger this?</li>
  <li>What API is being called?</li>
  <li>What happens in the database?</li>
</ul>
<p>This habit makes you not just a coder — but an architect 🧠🏗️</p>

<h2 class="text-xl font-semibold mt-6 mb-2">🎯 Summary</h2>
<p>Becoming a confident fullstack dev isn’t about knowing every library — it's about <strong>thinking smart, building clean, and improving daily</strong>. You’ve got this 💥</p>
`,
    proTip: `Don't chase fancy tools — master the basics, then grow with real-world projects and feedback.`,
    codeSamples: [
      {
        language: 'git',
        code: `git commit -m "feat(auth): add JWT validation to login endpoint"`
      }
    ]
  };

    default:
      return undefined;
  }
}
