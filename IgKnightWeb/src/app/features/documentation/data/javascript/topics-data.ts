import { Topic, TopicContent } from "../../../../models/topic.model";

export const JavaScriptTopics: Topic[] = [
  { id: 'js-introduction', title: 'Introduction to JavaScript', slug: 'js-introduction' },
  { id: 'js-variables-datatypes', title: 'Variables & Data Types', slug: 'js-variables-datatypes' },
  { id: 'js-operators', title: 'JavaScript Operators', slug: 'js-operators' },
  { id: 'js-conditions', title: 'Conditional Statements (if, else, switch)', slug: 'js-conditions' },
  { id: 'js-loops', title: 'Loops Made Simple', slug: 'js-loops' },
  { id: 'js-functions', title: 'Functions Explained Like Pizza Orders', slug: 'js-functions' },
  { id: 'js-arrays', title: 'Arrays & Everyday Lists', slug: 'js-arrays' },
  { id: 'js-objects', title: 'Objects — Your Data’s Backpack', slug: 'js-objects' },
  { id: 'js-dom-basics', title: 'DOM Manipulation Basics', slug: 'js-dom-basics' },
  { id: 'js-events', title: 'Handling Events (Clicks, Keys, etc.)', slug: 'js-events' },
  { id: 'js-es6', title: 'Modern JavaScript (ES6+)', slug: 'js-es6' },
  { id: 'js-array-methods', title: 'Smart Array Methods (map, filter, reduce)', slug: 'js-array-methods' },
  { id: 'js-async', title: 'Async JS: Callbacks, Promises & async/await', slug: 'js-async' },
  { id: 'js-fetch-api', title: 'Fetching Data with Fetch API', slug: 'js-fetch-api' },
  { id: 'js-browser-storage', title: 'Browser Storage (localStorage, sessionStorage)', slug: 'js-browser-storage' },
  { id: 'js-projects', title: 'Mini Projects to Practice', slug: 'js-projects' }
];

export function JavaScriptTopicContent(slug: string): TopicContent | undefined {
  switch (slug) {

    case 'js-introduction':
  return {
    slug: 'js-introduction',
    title: 'Introduction to JavaScript',
    content: `
      <p>JavaScript is what makes websites feel alive. While <strong>HTML</strong> builds the structure (like bones 🦴) and <strong>CSS</strong> styles it (like skin 💅), <strong>JavaScript</strong> is the <span class="font-semibold text-green-400">brain and muscles</span> 🧠💪 — it lets websites move, react, and respond.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-Life Analogy</h3>
      <p>Imagine a vending machine:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>HTML:</strong> The physical machine — buttons, slots, and lights</li>
        <li><strong>CSS:</strong> The design — colors, branding, labels</li>
        <li><strong>JavaScript:</strong> The brain that listens to button presses, dispenses snacks, and shows the price</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚡ Why Learn JavaScript?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>To make your websites interactive — think sliders, popups, animations, and games</li>
        <li>To build full apps — from simple calculators to full-stack sites</li>
        <li>To work with real-time data, user input, and browser storage</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔍 What Can You Build with It?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Todo Apps, Weather Apps, Games</li>
        <li>Interactive forms and validations</li>
        <li>Single Page Applications (like this platform!)</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 The Mindset Shift</h3>
      <p>You’re not just writing code — you’re teaching the browser <em>how to think</em> and <em>what to do</em> when something happens.</p>
    `,
    proTip: 'JS is everywhere — from browsers to servers to mobile apps. Learn once, use anywhere!',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- HTML + JavaScript in action -->
<button onclick="alert('Hello from JavaScript!')">Click Me</button>`
      },
      {
        language: 'js',
        code: `
// Same using JavaScript directly
document.querySelector('button').addEventListener('click', () => {
  alert('Hello from JS again!');
});`
      }
    ]
  };

  case 'js-variables-datatypes':
  return {
    slug: 'js-variables-datatypes',
    title: 'Variables & Data Types',
    content: `
      <p>In JavaScript, <strong>variables</strong> are like containers 🧺 — they hold stuff. That “stuff” could be text, numbers, lists, or even entire functions!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🥤 Real-Life Analogy</h3>
      <p>Think of variables as labeled jars in your kitchen. One might hold sugar, another rice, and another cookies. You give them names so you know what's inside.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Declaring Variables</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>let</code> — you can change the value later</li>
        <li><code>const</code> — value stays constant (can’t reassign)</li>
        <li><code>var</code> — old-school, mostly avoided now</li>
      </ul>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto">
<code>let name = "IgKnight";
const pi = 3.14;
var oldWay = true;</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📊 Types of Data</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>String:</strong> Text like <code>"hello"</code></li>
        <li><strong>Number:</strong> 5, 3.14, -20</li>
        <li><strong>Boolean:</strong> <code>true</code> or <code>false</code></li>
        <li><strong>Array:</strong> A list: <code>[1, 2, 3]</code></li>
        <li><strong>Object:</strong> A group of key-value pairs: <code>{ name: "IgKnight", age: 2 }</code></li>
        <li><strong>Null:</strong> An intentional “nothing”</li>
        <li><strong>Undefined:</strong> Something hasn’t been given a value yet</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Why It Matters</h3>
      <p>You’ll store user inputs, API data, scores, settings — <em>everything</em> — in variables. Understanding how to create and use them is the foundation of all JS magic.</p>
    `,
    proTip: 'Use <code>console.log()</code> to print your variables and check what they hold — it’s your best friend while debugging!',
    codeSamples: [
      {
        language: 'js',
        code: `let username = "Abhinash";
const isLoggedIn = true;
let scores = [85, 90, 78];
let user = { name: "Abhinash", role: "Learner" };`
      }
    ]
  };

  case 'js-operators':
  return {
    slug: 'js-operators',
    title: 'JavaScript Operators',
    content: `
      <p>Operators in JavaScript are like tools in your toolkit 🔧 — you use them to do things like math, comparisons, or combining values.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 Arithmetic Operators</h3>
      <p>These are the math guys. You’ve seen them before:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>+</code> : Add</li>
        <li><code>-</code> : Subtract</li>
        <li><code>*</code> : Multiply</li>
        <li><code>/</code> : Divide</li>
        <li><code>%</code> : Remainder</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📏 Comparison Operators</h3>
      <p>Used to compare values and return <code>true</code> or <code>false</code>:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>==</code> : Equal (loose)</li>
        <li><code>===</code> : Equal (strict, checks type too)</li>
        <li><code>!=</code> : Not equal</li>
        <li><code>&gt;</code> , <code>&lt;</code> : Greater than / Less than</li>
        <li><code>&gt;=</code> , <code>&lt;=</code> : Greater or equal / Less or equal</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚡ Logical Operators</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>&&</code> : AND — both must be true</li>
        <li><code>||</code> : OR — at least one must be true</li>
        <li><code>!</code> : NOT — reverses a value</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">➕ String Concatenation</h3>
      <p>Combine strings using <code>+</code>:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let greeting = "Hello" + " " + "IgKnight!";</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Tip</h3>
      <p>If you're checking if a user is logged in AND has access, you'd write something like: <code>if (isLoggedIn && hasPermission)</code></p>
    `,
    proTip: 'Always prefer <code>===</code> over <code>==</code> for cleaner, safer comparisons!',
    codeSamples: [
      {
        language: 'js',
        code: `let age = 18;
let isAdult = age >= 18;

let a = 10;
let b = 5;
let sum = a + b;

let isLoggedIn = true;
let hasAccess = false;

console.log(isLoggedIn && hasAccess); // false`
      }
    ]
  };

  case 'js-conditions':
  return {
    slug: 'js-conditions',
    title: 'Conditional Statements (if, else, switch)',
    content: `
      <p>Imagine you're making choices in life — "If it's raining, take an umbrella. Else, go without it." JavaScript lets you make similar decisions in code. 🌧️☂️</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔀 The <code>if</code> Statement</h3>
      <p>This checks a condition, and if it's true, runs some code:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let age = 18;

if (age >= 18) {
  console.log("You're an adult!");
}</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚪 <code>if...else</code> — One Way or the Other</h3>
      <p>What if the condition is false? Use <code>else</code> to handle that:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧩 <code>else if</code> — Multiple Conditions</h3>
      <p>You can check more than one condition with <code>else if</code>:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let score = 75;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");
} else {
  console.log("Keep trying!");
}</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <p>It's like a flowchart — check the first condition, then the next, and so on. Once a match is found, the rest are skipped.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔄 <code>switch</code> Statement — When You Have Many Options</h3>
      <p>Instead of using many <code>else if</code> statements, you can use a <code>switch</code>:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Ugh, it's Monday again.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day...");
}</code></pre>
    `,
    proTip: 'Always use <code>break</code> in a <code>switch</code> case to stop execution after a match!',
    codeSamples: [
      {
        language: 'js',
        code: `let userRole = "admin";

if (userRole === "admin") {
  console.log("You can manage everything.");
} else if (userRole === "editor") {
  console.log("You can edit content.");
} else {
  console.log("You can view content.");
}`
      }
    ]
  };

  case 'js-loops':
  return {
    slug: 'js-loops',
    title: 'Loops (for, while, do-while)',
    content: `
      <p>Loops are like repeating chores — "Do this 5 times" or "Keep doing this until the work is done." In JavaScript, loops help you repeat tasks efficiently. 🔁</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 The <code>for</code> Loop</h3>
      <p>Use this when you know how many times to repeat:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}</code></pre>
      <p>This prints numbers from 1 to 5. Think of it like: Start at 1 → check if it's ≤ 5 → run → increment → repeat.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 The <code>while</code> Loop</h3>
      <p>Use this when you don't know how many times it should run:</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let x = 1;

while (x <= 3) {
  console.log("x is", x);
  x++;
}</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚠️ The <code>do...while</code> Loop</h3>
      <p>This runs the code once before checking the condition (useful for menus, prompts):</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let y = 5;

do {
  console.log("Value:", y);
  y++;
} while (y < 5);</code></pre>
      <p>Even though the condition is false from the start, it runs at least once!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠 Real-World Analogy</h3>
      <p>For loop is like a checklist: you know you have 5 tasks. While loop is like checking your inbox: keep going until it's empty.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Loop Gotchas</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Make sure your loop condition eventually becomes false, or it’ll loop forever! 🔄♾️</li>
        <li>Use <code>break</code> to stop a loop early, and <code>continue</code> to skip to the next iteration.</li>
      </ul>
    `,
    proTip: 'Avoid infinite loops! Make sure your counter or condition will eventually stop.',
    codeSamples: [
      {
        language: 'js',
        code: `const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}`
      }
    ]
  };

  case 'js-functions':
  return {
    slug: 'js-functions',
    title: 'Functions in JavaScript',
    content: `
      <p>Think of functions like recipes 📜 — they let you define a set of instructions once and use them anywhere, anytime, without repeating yourself!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🍳 What is a Function?</h3>
      <p>A function is a reusable block of code that does something. You define it once, and call it wherever you need it.</p>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("IgKnight");</code></pre>

      <p>This will print: <code>Hello, IgKnight!</code></p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Why Use Functions?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Avoid repeating code (DRY: Don’t Repeat Yourself)</li>
        <li>Keep code organized and easier to read</li>
        <li>Break down big tasks into smaller steps</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚡ Function Parameters & Return Values</h3>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result = 8</code></pre>

      <p><code>return</code> sends the result back to where the function was called.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Function vs Console.log</h3>
      <p><code>console.log()</code> is like saying it out loud. <code>return</code> is like handing back the result silently for future use.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ Arrow Functions (Modern & Short)</h3>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
const square = (n) => n * n;

console.log(square(4)); // 16</code></pre>

      <p>Arrow functions are shorter and great for simple logic.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>A function is like a coffee machine ☕. You give it an input (beans), and it gives you a result (coffee). You don't care how it works inside — you just press the button!</p>
    `,
    proTip: 'Name your functions clearly. It should describe what it does — like `calculateTotal()` or `formatDate()`.',
    codeSamples: [
      {
        language: 'js',
        code: `function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true`
      }
    ]
  };

  case 'js-arrays':
  return {
    slug: 'js-arrays',
    title: 'Arrays in JavaScript',
    content: `
      <p>Imagine a box 📦 that can hold multiple items — that’s an array. It's used to store a list of values in a single variable.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 What is an Array?</h3>
      <p>An array is a special variable that holds a collection of items — like numbers, strings, or even other arrays!</p>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"</code></pre>

      <p>You access array items using their index — starting from 0.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📋 Common Array Methods</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>push()</code> — Add item to the end</li>
        <li><code>pop()</code> — Remove last item</li>
        <li><code>shift()</code> — Remove first item</li>
        <li><code>unshift()</code> — Add item to the beginning</li>
        <li><code>length</code> — Get total number of items</li>
        <li><code>includes()</code> — Check if it contains an item</li>
      </ul>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let tasks = ["code", "eat"];
tasks.push("sleep");
console.log(tasks); // ["code", "eat", "sleep"]</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔄 Loops + Arrays = Superpower</h3>
      <p>You can loop through arrays using <code>for</code> or <code>forEach</code> to perform actions on each item:</p>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
let scores = [80, 90, 100];
scores.forEach(score => {
  console.log("Score:", score);
});</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>An array is like a row of mailboxes 📬. Each has a number (index), and you can store or retrieve items from each one.</p>
    `,
    proTip: 'Use plural names for arrays, like `tasks`, `users`, or `scores`. It keeps your code readable and meaningful.',
    codeSamples: [
      {
        language: 'js',
        code: `const colors = ["red", "green", "blue"];
console.log(colors.length);  // 3
colors.push("yellow");
console.log(colors);         // ["red", "green", "blue", "yellow"]`
      }
    ]
  };

  case 'js-objects':
  return {
    slug: 'js-objects',
    title: 'Understanding Objects in JavaScript',
    content: `
      <p>Think of an object like a **real-world item** — a car, a person, or even a student. Each one has characteristics (properties) and things it can do (methods). That's what JavaScript objects are all about!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚗 A Car as an Object</h3>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
const car = {
  brand: "Tesla",
  model: "Model 3",
  color: "red",
  start: function() {
    console.log("Engine started");
  }
};
</code></pre>
      <p>Here, <code>brand</code>, <code>model</code>, and <code>color</code> are **properties**, and <code>start()</code> is a **method** (function inside an object).</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Why Use Objects?</h3>
      <p>Objects group related data and functionality together. It's super useful when you're dealing with complex things like users, posts, or settings.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔑 Accessing Object Data</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>object.property</code> — Dot notation</li>
        <li><code>object["property"]</code> — Bracket notation</li>
      </ul>

      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
console.log(car.brand);      // "Tesla"
console.log(car["color"]);   // "red"
car.start();                 // "Engine started"
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <p>Imagine a student ID card 🪪. It holds info like name, age, and roll number — just like an object holding key-value pairs.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ Bonus: Dynamic Properties</h3>
      <p>You can even add or update object properties on the fly!</p>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto"><code>
car.year = 2024;
car.color = "blue";
</code></pre>
    `,
    proTip: 'Always think in terms of “key: value” when working with objects. If you can describe something in real life, you can model it with an object.',
    codeSamples: [
      {
        language: 'js',
        code: `const user = {
  name: "Alex",
  email: "alex@example.com",
  login: function() {
    console.log("Logged in!");
  }
};

user.login();  // "Logged in!"
console.log(user.name);`
      }
    ]
  };

  case 'js-dom-basics':
  return {
    slug: 'js-dom-basics',
    title: 'DOM Manipulation Basics',
    content: `
      <p>The DOM (Document Object Model) is like the "live tree" of your webpage. It’s how JavaScript sees and interacts with your HTML elements. Think of it as a LEGO structure — HTML builds the blocks, and JavaScript moves them around or changes them on the fly.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏠 DOM = Digital House</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>HTML Elements:</strong> These are the rooms and furniture (like <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;button&gt;</code>).</li>
        <li><strong>JavaScript:</strong> This is the housekeeper — it can change the color of a wall (style), move a chair (element), or add/remove decorations (nodes).</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📌 Common DOM Operations</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>document.getElementById()</code> — grab one element by ID</li>
        <li><code>document.querySelector()</code> — grab the first match of a CSS selector</li>
        <li><code>element.textContent</code> — change or read the text inside</li>
        <li><code>element.style</code> — directly change CSS styles</li>
        <li><code>element.classList.add()</code> — add a class to apply styles</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🤹 Real-Life Example</h3>
      <p>Imagine you have a light switch (button). When you click it, the light (a div) changes color. That’s DOM in action!</p>
    `,
    proTip: 'Use browser DevTools to inspect the DOM and experiment live by editing HTML and CSS!',
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- HTML -->
<p id="message">Hello, IgKnight!</p>
<button onclick="changeText()">Click Me</button>`
      },
      {
        language: 'javascript',
        code: `
// JavaScript
function changeText() {
  const msg = document.getElementById('message');
  msg.textContent = "You just clicked the button!";
}`
      }
    ]
  };
  case 'js-events':
  return {
    slug: 'js-events',
    title: 'Handling Events (Clicks, Keys, etc.)',
    content: `
      <p>Events in JavaScript are like reactions — they’re how your webpage *responds* when a user interacts with it. Think of your website as a smart machine that listens and reacts. When you click a button, move your mouse, type something, or even scroll — JavaScript can "hear" it and respond!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>🛎️ <strong>Clicking a button</strong> is like ringing a bell — it triggers an action.</li>
        <li>🎹 <strong>Typing</strong> is like playing a piano — each keypress can trigger a note (event).</li>
        <li>🧽 <strong>Mouse movement</strong> is like your cursor cleaning the window — JS watches where it goes.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚙️ How Events Work</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>addEventListener()</code> is how JavaScript listens for a specific event.</li>
        <li>You specify the event type (like <code>'click'</code>, <code>'keydown'</code>, <code>'mouseover'</code>).</li>
        <li>Then you give it a function — what to do when that event happens.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ Common Events</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>click</code> — when you click an element</li>
        <li><code>input</code> — when user types in a form field</li>
        <li><code>mouseover</code> — when the mouse enters an element</li>
        <li><code>keydown</code> — when a key is pressed</li>
        <li><code>submit</code> — when a form is submitted</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Event Handler = Reaction Function</h3>
      <p>You create a function to handle the event, and JavaScript runs it when that event occurs.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 Event Delegation (Advanced Idea)</h3>
      <p>Instead of attaching events to many items, attach it to a common parent and let the event bubble up. It's like listening at the hallway instead of putting a microphone in every room.</p>
    `,
    proTip: "Use DevTools → Console → inspect element → Events tab to see what events are bound to any HTML element!",
    codeSamples: [
      {
        language: 'html',
        code: `
<!-- HTML -->
<button id="alertBtn">Click Me</button>
<input type="text" id="nameInput" placeholder="Type your name" />`
      },
      {
        language: 'javascript',
        code: `
// JavaScript
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Button clicked!");
});

document.getElementById("nameInput").addEventListener("input", function (e) {
  console.log("Typed:", e.target.value);
});`
      }
    ]
  };
  case 'js-es6':
  return {
    slug: 'js-es6',
    title: 'Modern JavaScript (ES6+)',
    content: `
      <p>JavaScript got a major glow-up with ES6 (also called ECMAScript 2015) and newer versions. Think of it like upgrading from a basic scooter to a Tesla — smoother, faster, and packed with cool features.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Why Learn ES6+?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Cleaner syntax = less code, more power</li>
        <li>Helps you write code like a pro (modern companies use it!)</li>
        <li>Makes complex things easier — like functions, objects, and loops</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ Key ES6+ Features (Explained Simply)</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong><code>let</code> & <code>const</code></strong> — Like giving variables clear rules: <code>const</code> = locked, <code>let</code> = flexible</li>
        <li><strong>Arrow Functions</strong> — Short and sweet way to write functions: <code>(a, b) =&gt; a + b</code></li>
        <li><strong>Template Literals</strong> — Write strings with variables easily using backticks: <code>\`Hello, \${name}!\`</code></li>
        <li><strong>Destructuring</strong> — Unpack values from arrays or objects like unboxing a gift</li>
        <li><strong>Spread Operator</strong> — Combine or copy arrays/objects like magic: <code>...arr</code></li>
        <li><strong>Default Parameters</strong> — Set default values in functions</li>
        <li><strong>Modules</strong> — Use <code>import</code> and <code>export</code> to split your code into clean files</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">👀 Example: Traditional vs ES6</h3>
      <p>Old style:</p>
      <pre class="bg-black text-white p-2 rounded">function greet(name) {
  return "Hello, " + name;
}</pre>
      <p>Modern ES6 style:</p>
      <pre class="bg-black text-white p-2 rounded">const greet = (name) => \`Hello, \${name}\`;</pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Bonus: Imports & Exports</h3>
      <p>Now you can split your code into modules:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>export const name = 'IgKnight'</code></li>
        <li><code>import { name } from './file.js'</code></li>
      </ul>
    `,
    proTip: 'Most modern browsers and tools support ES6+, but use Babel if you want to support older ones.',
    codeSamples: [
      {
        language: 'javascript',
        code: `// Arrow function + template string
const greet = (name) => \`Hello, \${name}!\`;

console.log(greet("Abhinash")); // Hello, Abhinash!

// Destructuring
const user = { username: "IgKnight", age: 25 };
const { username } = user;

console.log(username); // IgKnight`
      }
    ]
  };
  case 'js-array-methods':
  return {
    slug: 'js-array-methods',
    title: 'Smart Array Methods (map, filter, reduce)',
    content: `
      <p>Let’s level up your array skills! Arrays aren’t just boring lists — they become powerful when you use methods like <code>map</code>, <code>filter</code>, and <code>reduce</code>. These are your toolbox for transforming and working with data easily.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>map:</strong> Like a chef preparing each item in a list of ingredients — gives back a new list.</li>
        <li><strong>filter:</strong> Like sorting your laundry — keeps only what matches (e.g. only whites).</li>
        <li><strong>reduce:</strong> Like collecting coins — adds up or combines values into one result.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ .map()</h3>
      <p>Used to change every item in an array and return a new one.</p>
      <pre class="bg-black text-white p-2 rounded">
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧹 .filter()</h3>
      <p>Used to keep only the items that match a condition.</p>
      <pre class="bg-black text-white p-2 rounded">
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">➕ .reduce()</h3>
      <p>Used to combine all values into a single result (sum, max, average... anything!)</p>
      <pre class="bg-black text-white p-2 rounded">
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 When to Use Them?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>map:</strong> When you want to change values</li>
        <li><strong>filter:</strong> When you want to pick only some</li>
        <li><strong>reduce:</strong> When you want one result out of many</li>
      </ul>
    `,
    proTip: 'These methods do not change the original array — they return a brand-new one. Chain them together for powerful combos!',
    codeSamples: [
      {
        language: 'javascript',
        code: `const students = [
  { name: "Ravi", marks: 85 },
  { name: "Anu", marks: 92 },
  { name: "Jay", marks: 67 }
];

// Get names only
const names = students.map(s => s.name);
console.log(names); // ["Ravi", "Anu", "Jay"]

// Filter passed students
const passed = students.filter(s => s.marks > 70);
console.log(passed); // [{ name: "Ravi", ...}, { name: "Anu", ...}]

// Average marks
const total = students.reduce((sum, s) => sum + s.marks, 0);
const average = total / students.length;
console.log(average); // 81.33
`
      }
    ]
  };
  case 'js-async':
  return {
    slug: 'js-async',
    title: 'Async JS: Callbacks, Promises & async/await',
    content: `
      <p>JavaScript is single-threaded — it does one thing at a time. But what if you need to wait for something (like fetching data)? That's where <strong>asynchronous</strong> JavaScript comes in — it lets you wait without freezing everything else.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⏳ Real-World Analogy</h3>
      <p>Imagine you order food at a restaurant. You don’t just stand there until it's ready — you continue chatting or scrolling your phone. Then when food is ready, the waiter brings it to you. That’s async!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧩 1. Callbacks</h3>
      <p>A function passed to another function — gets called when something finishes.</p>
      <pre class="bg-black text-white p-2 rounded">
function getData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 2000);
}

getData((data) => {
  console.log(data); // after 2 seconds: "Data loaded!"
});
      </pre>
      <p class="mt-2 text-yellow-300">⚠️ But callbacks can get messy — callback hell!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🤝 2. Promises</h3>
      <p>A Promise says: "I promise I’ll give you data... later."</p>
      <pre class="bg-black text-white p-2 rounded">
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here is your data!");
    }, 2000);
  });
};

fetchData().then(data => console.log(data));
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ 3. async / await</h3>
      <p>Modern, cleaner way to write async code. Like saying: "Hey JS, pause here until I get the result."</p>
      <pre class="bg-black text-white p-2 rounded">
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 2000);
  });
};

async function getInfo() {
  const result = await fetchData();
  console.log(result); // Done!
}

getInfo();
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📚 Use Cases</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Fetching API data (e.g. weather, news, etc.)</li>
        <li>Reading files, timers, animations</li>
        <li>Anything that takes time!</li>
      </ul>
    `,
    proTip: 'Use try/catch with async/await to handle errors — just like try/catch in real life when things go wrong.',
    codeSamples: [
      {
        language: 'javascript',
        code: `const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data loaded"), 1500);
  });
};

async function load() {
  try {
    const data = await fakeFetch();
    console.log(data); // ✅ Data loaded
  } catch (err) {
    console.error("❌ Failed!", err);
  }
}

load();`
      }
    ]
  };

case 'js-fetch-api':
  return {
    slug: 'js-fetch-api',
    title: 'Fetching Data with Fetch API',
    content: `
      <p>So now you know how async works... but what’s the most common thing we wait for? 🔥<strong>Fetching data from the internet</strong> — like weather info, jokes, news, etc.</p>

      <p>The <code>fetch()</code> function helps us make HTTP requests (like GET or POST) to any API and receive data — usually in <code>JSON</code> format.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🌍 Real-World Analogy</h3>
      <p>Imagine fetch like placing an online order — you send the request, wait a bit, and the delivery (data) arrives! 📦</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔄 Basic Usage</h3>
      <pre class="bg-black text-white p-2 rounded">
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ With async/await</h3>
      <pre class="bg-black text-white p-2 rounded">
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
getData();
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📬 What Can You Do With It?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Get random jokes or quotes</li>
        <li>Show live weather</li>
        <li>Build search bars using public APIs</li>
        <li>Connect frontend with your backend server</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧪 Free Practice APIs</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" class="text-blue-400">JSONPlaceholder</a> – Fake data</li>
        <li><a href="https://api.github.com/users" target="_blank" class="text-blue-400">GitHub API</a> – Public user data</li>
        <li><a href="https://icanhazdadjoke.com/api" target="_blank" class="text-blue-400">Joke API</a> – For fun 😂</li>
      </ul>
    `,
    proTip: 'Always check if the response is OK using <code>response.ok</code> before calling <code>.json()</code>. And don’t forget error handling!',
    codeSamples: [
      {
        language: 'javascript',
        code: `async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' }
  });

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  console.log(data.joke);
}

getJoke();`
      }
    ]
  };
  case 'js-browser-storage':
  return {
    slug: 'js-browser-storage',
    title: 'Browser Storage (localStorage, sessionStorage)',
    content: `
      <p>Ever visited a site and it remembered your theme, login info, or even your last score? That’s possible because of <strong>browser storage</strong>.</p>

      <p>JavaScript gives us 2 awesome tools to store small pieces of data on the user’s browser:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>localStorage</code> — stays even after closing the browser</li>
        <li><code>sessionStorage</code> — disappears when tab/browser is closed</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-World Analogy</h3>
      <p>Think of <code>localStorage</code> like saving something to a sticky note and pinning it on your monitor. It's there tomorrow too. <code>sessionStorage</code> is like writing on a whiteboard — it's gone when the meeting (session) ends.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 localStorage Basics</h3>
      <pre class="bg-black text-white p-2 rounded">
// Store
localStorage.setItem('name', 'Abhinash');

// Retrieve
const user = localStorage.getItem('name');
console.log(user); // Abhinash

// Remove
localStorage.removeItem('name');

// Clear everything
localStorage.clear();
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧪 sessionStorage Works the Same</h3>
      <p>Just replace <code>localStorage</code> with <code>sessionStorage</code> and you're good!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📌 Important Tips</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>Storage only saves strings — use <code>JSON.stringify()</code> for objects</li>
        <li>Don’t store passwords or sensitive info!</li>
        <li>Great for saving dark mode, quiz answers, or user preferences</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Store Objects</h3>
      <pre class="bg-black text-white p-2 rounded">
const user = { name: 'Abhinash', score: 95 };

localStorage.setItem('user', JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem('user'));
console.log(saved.name); // Abhinash
      </pre>
    `,
    proTip: 'Use localStorage for things like themes, settings, or last visited tab. Use sessionStorage for temporary data like quiz progress!',
    codeSamples: [
      {
        language: 'javascript',
        code: `// Save user's preferred theme
localStorage.setItem("theme", "dark");

// Later when the site loads
const theme = localStorage.getItem("theme");
document.body.classList.add(theme);`
      }
    ]
  };
  case 'js-projects':
  return {
    slug: 'js-projects',
    title: 'Mini Projects to Practice',
    content: `
      <p>Alright! You’ve learned the syntax, logic, and tricks… now it’s time to build something cool! 🧠💻</p>
      <p>Practicing by building real mini-projects is the best way to make JavaScript feel natural and FUN.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠 What Can You Build?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>To-Do List</strong> — Add, mark as done, delete tasks</li>
        <li><strong>Quiz App</strong> — Ask questions and show scores</li>
        <li><strong>Weather App</strong> — Fetch weather using APIs</li>
        <li><strong>Random Joke Generator</strong> — Fetch jokes from a joke API</li>
        <li><strong>Typing Speed Test</strong> — Measure how fast you can type</li>
        <li><strong>Image Slider</strong> — Simple photo slideshow with arrows</li>
        <li><strong>Digital Clock</strong> — Real-time clock using <code>Date</code></li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Real-World Tip</h3>
      <p>Pick a small project. Don’t aim for perfection. Get it working first, then make it pretty. The goal is to get your hands dirty!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Starter Template</h3>
      <pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My JS Project&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;script&gt;
    // Start here!
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
      </pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Let’s Build Something</h3>
      <p>You don't have to know everything. Start building, Google stuff along the way, and just keep improving.</p>
    `,
    proTip: 'Keep a “Projects” folder on your system. Each project you build adds real experience and can go into your portfolio. Start small, finish fast.',
    codeSamples: [
      {
        language: 'javascript',
        code: `// Simple digital clock example
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  document.body.innerHTML = "<h1>" + time + "</h1>";
}, 1000);`
      }
    ]
  };

    default:
      return undefined;
  }
}