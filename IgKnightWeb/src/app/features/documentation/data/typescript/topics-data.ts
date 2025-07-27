import { Topic, TopicContent } from "../../../../models/topic.model";

export const TypeScriptTopics: Topic[] = [
  { id: 'ts-introduction', title: 'What is TypeScript & Why Use It?', slug: 'ts-introduction' },
  { id: 'ts-types', title: 'Types Made Simple', slug: 'ts-types' },
  { id: 'ts-interfaces', title: 'Interfaces — Rules for Your Objects', slug: 'ts-interfaces' },
  { id: 'ts-interfaces-types', title: 'Interfaces vs Types (Like Blueprint vs Label)', slug: 'ts-interfaces-types' },
  { id: 'ts-functions', title: 'Typed Functions & Parameters', slug: 'ts-functions' },
  { id: 'ts-unions-generics', title: 'Unions & Generics — Flexible but Safe', slug: 'ts-unions-generics' },
  { id: 'ts-classes', title: 'Classes & Inheritance (OOP)', slug: 'ts-classes' },
  { id: 'ts-modules', title: 'Modules & Imports/Exports', slug: 'ts-modules' },
  { id: 'ts-narrowing-guards', title: 'Type Narrowing & Type Guards', slug: 'ts-narrowing-guards' },
  { id: 'ts-enums', title: 'Enums Explained Simply', slug: 'ts-enums' },
  { id: 'ts-utility-types', title: 'Built-in Utility Types (Partial, Pick, etc.)', slug: 'ts-utility-types' },
  { id: 'ts-errors', title: 'Handling Errors in TypeScript', slug: 'ts-errors' },
  { id: 'ts-config', title: 'tsconfig.json Demystified', slug: 'ts-config' },
  { id: 'ts-best-practices', title: 'Best Practices & Real Project Tips', slug: 'ts-best-practices' }
];

export function TypeScriptTopicContent(slug: string): TopicContent | undefined {
  switch (slug) {
    case 'ts-introduction':
  return {
    slug: 'ts-introduction',
    title: 'What is TypeScript & Why Use It?',
    content: `
      <p>Imagine JavaScript is like a freehand sketch — flexible, quick, but sometimes a bit messy. TypeScript is like sketching with blueprints — you still draw, but now you have guides that prevent silly mistakes.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 So, What is TypeScript?</h3>
      <p>TypeScript is a **superset of JavaScript**. That means all valid JavaScript is also valid TypeScript — but TypeScript adds **static typing** and other powerful features on top.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚨 Why JavaScript Alone Can Be Tricky</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li>JS won't warn you if you accidentally pass a string when a number is expected.</li>
        <li>Typos in function names or object properties often go unnoticed… until runtime errors strike.</li>
        <li>Big codebases can get messy without clear structure or types.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ Why TypeScript is a Game-Changer</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Type Safety:</strong> Catches errors *before* the code even runs.</li>
        <li><strong>Autocomplete:</strong> Your editor becomes smarter with better suggestions.</li>
        <li><strong>Better Refactoring:</strong> Rename things with confidence — TypeScript has your back.</li>
        <li><strong>Docs While You Code:</strong> Hovering over code gives type info and helps you understand it faster.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>Think of JavaScript like writing instructions on a sticky note — quick and easy but easy to mess up. TypeScript is like typing a formal document with spell check, grammar check, and structure — a bit more setup, but much more reliable.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ Do I Need to Learn TS Right Now?</h3>
      <p>If you're just starting out with JS, focus on mastering the basics. But once you start building real projects or working with frameworks like Angular, React, or Node.js — TypeScript becomes super helpful (and often essential).</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Don’t be scared by the word “type” — you don’t need to master it all at once. TypeScript grows with you. Start small!</p>
    `,
    proTip: 'You don’t need to replace JavaScript with TypeScript. You enhance it — and make your future self say thanks!',
    codeSamples: [
      {
        language: 'typescript',
        code: `// JavaScript version
function greet(name) {
  return "Hello, " + name;
}

// TypeScript version
function greet(name: string): string {
  return "Hello, " + name;
}`
      }
    ]
  };

  case 'ts-types':
  return {
    slug: 'ts-types',
    title: 'Types Made Simple',
    content: `
      <p>Types might sound scary if you're coming from JavaScript, but honestly — they’re just labels that help us not mess things up.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔠 What are Types?</h3>
      <p>Types describe what kind of value a variable can hold. Like:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>string</code> — for text like names, messages, etc.</li>
        <li><code>number</code> — for prices, ages, scores</li>
        <li><code>boolean</code> — just <code>true</code> or <code>false</code></li>
        <li><code>any</code> — (use carefully!) means it can be anything</li>
        <li><code>unknown</code> — like <code>any</code>, but with extra safety checks</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Why Use Them?</h3>
      <p>Imagine telling your friend to “bring a number” to your game night — but they bring a banana 🍌. That’s what happens in JavaScript sometimes. Types prevent these mix-ups.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💬 Defining Types in Code</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Variable:</strong> <code>let age: number = 25;</code></li>
        <li><strong>Function argument:</strong> <code>function greet(name: string) { ... }</code></li>
        <li><strong>Return type:</strong> <code>function add(a: number, b: number): number { return a + b; }</code></li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Extra Handy Types</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>Array</code>: <code>string[]</code>, <code>number[]</code></li>
        <li><code>Tuple</code>: Fixed-size array with known types → <code>[string, number]</code></li>
        <li><code>Union</code>: <code>string | number</code> — can be either</li>
        <li><code>Literal</code>: exact values → <code>"start" | "stop"</code></li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>Think of types like labels on food containers. If one says “sugar” and it actually has salt — big problem! Types ensure the right stuff is inside.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Start by typing your function parameters and return values. The rest can grow later as your code grows!</p>
    `,
    proTip: 'Using types isn’t about writing more code — it’s about making fewer bugs!',
    codeSamples: [
      {
        language: 'typescript',
        code: `let username: string = "Abhinash";
let score: number = 99;
let isLoggedIn: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

let mixed: string | number = "IgKnight";`
      }
    ]
  };
  case 'ts-interfaces-types':
  return {
    slug: 'ts-interfaces-types',
    title: 'Interfaces vs Types (Like Blueprint vs Label)',
    content: `
      <p>Both <code>interface</code> and <code>type</code> help you define shapes of objects. They’re like telling your code, “Hey, this thing should look like *this*.”</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Real-World Analogy</h3>
      <p>Imagine you’re designing a character for a game:</p>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>interface</code> is like the **blueprint** — what properties your character must have.</li>
        <li><code>type</code> is like a **label** — it can describe objects, combinations, unions, etc.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧰 Interface in Action</h3>
      <p>Great for defining the structure of objects or classes:</p>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400">
<code>interface Player {
  name: string;
  score: number;
  isOnline: boolean;
}</code></pre>

      <p>You can use it like:</p>
      <code>const player1: Player = { name: "Abhi", score: 100, isOnline: true };</code>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏷️ Type Aliases</h3>
      <p><code>type</code> can also do the same, and more:</p>
      <pre class="bg-[#1F2937] p-4 rounded-lg overflow-auto text-green-400">
<code>type GameStatus = "started" | "paused" | "over";

type Player = {
  name: string;
  score: number;
};</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🤔 So When to Use What?</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>Use <code>interface</code></strong> when you're defining the shape of objects or working with classes.</li>
        <li><strong>Use <code>type</code></strong> when you need to combine things or use unions/intersections.</li>
        <li><strong>Mix them:</strong> You can even extend one from the other!</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">👀 Good to Know</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><code>interface</code> is better for object shapes and is more extendable in large codebases.</li>
        <li><code>type</code> can handle more complex combinations of values and structures.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>When starting out — don’t worry too much about the difference. Just pick one and go. They’re like twins with slightly different personalities!</p>
    `,
    proTip: 'Use interfaces for structure, and types when combining or tweaking types!',
    codeSamples: [
      {
        language: 'typescript',
        code: `interface Car {
  brand: string;
  speed: number;
}

type Truck = {
  brand: string;
  loadCapacity: number;
};

const swift: Car = { brand: "Maruti", speed: 120 };`
      },
      {
        language: 'typescript',
        code: `type Status = "loading" | "success" | "error";

function updateStatus(status: Status) {
  console.log("Current status:", status);
}`
      }
    ]
  };

  case 'ts-interfaces':
  return {
    slug: 'ts-interfaces',
    title: 'Interfaces — Rules for Your Objects',
    content: `
      <p>Imagine you're building a LEGO set. The instruction manual tells you what blocks you need and how they should fit. In TypeScript, <strong>interfaces</strong> are like that manual — they define the structure an object should follow.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Why Use Interfaces?</h3>
      <p>They help you define "what something should look like". This makes your code more predictable and less error-prone. If someone messes up the shape of an object, TypeScript will catch it before you even run the code!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 A Real-World Example</h3>
      <p>Let’s say you’re building a profile card:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
interface UserProfile {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: UserProfile = {
  name: "Riya",
  age: 25,
  isActive: true,
};</code></pre>

      <p>If you forget to add <code>isActive</code> or give <code>age</code> as a string, TypeScript will throw an error. That’s the beauty — it’s guarding your code like a bodyguard. 💪</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Key Rules to Know</h3>
      <ul class="list-disc list-inside text-gray-300">
        <li><strong>All properties must match</strong> unless marked optional.</li>
        <li><strong>Use <code>?</code> for optional properties</strong> like: <code>email?: string;</code></li>
        <li>Interfaces only exist in TypeScript — they don’t become real JavaScript code.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✨ Optional Properties Example</h3>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
interface BlogPost {
  title: string;
  author?: string; // Optional
}

const post: BlogPost = {
  title: "Learning TS Interfaces"
};</code></pre>

      <p>Notice that <code>author</code> is optional, so it's okay if we don’t include it.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Pro Tip</h3>
      <p>Use interfaces to define reusable shapes across your app — from API responses to form data. It keeps your project super clean and consistent.</p>
    `,
    proTip: "Interfaces don't compile to JavaScript — they're purely for your development sanity. Clean, readable, and error-saving.",
    codeSamples: [
      {
        language: 'ts',
        code: `interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable?: boolean; // optional
}

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 75000,
};`
      }
    ]
  };

  case 'ts-functions':
  return {
    slug: 'ts-functions',
    title: 'Typed Functions & Parameters',
    content: `
      <p>Ever ordered food online? You pick a restaurant, select your items, and the app expects your order in a certain format. Functions in TypeScript are similar — they expect inputs (called <strong>parameters</strong>) and return outputs (called <strong>return types</strong>), and with TypeScript, you can make these expectations crystal clear.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🍱 Real-World Analogy</h3>
      <p>Think of a function like a kitchen — you give it raw materials (ingredients or parameters), and it gives you a final dish (the return value).</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 Basic Typed Function</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function add(a: number, b: number): number {
  return a + b;
}
</code></pre>
      <p>Here, <code>a</code> and <code>b</code> must be numbers, and the result returned will also be a number. If someone tries to pass a string — boom 💥 — TypeScript will complain before you even run the code.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Optional & Default Parameters</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function greet(name: string = "friend") {
  console.log("Hey " + name);
}

greet(); // "Hey friend"
greet("Riya"); // "Hey Riya"
</code></pre>
      <p>You can set default values or make parameters optional using <code>?</code>.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 Return Types</h3>
      <p>You can explicitly tell TypeScript what a function should return:</p>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function isEven(n: number): boolean {
  return n % 2 === 0;
}
</code></pre>
      <p>This helps catch silly mistakes like returning a string by accident.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">💡 Function Type Aliases</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (a, b) => a * b;
</code></pre>
      <p>Now you can reuse this function type anywhere without repeating yourself. Neat, right?</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚀 Why It Matters</h3>
      <p>Typed functions make your code:
        <ul class="list-disc list-inside text-gray-300 mt-2">
          <li>More readable</li>
          <li>Less prone to runtime bugs</li>
          <li>IntelliSense/autocomplete friendly</li>
        </ul>
      </p>
    `,
    proTip: "Don't just type the return — type the parameters too! That’s where most bugs sneak in.",
    codeSamples: [
      {
        language: 'ts',
        code: `function getFullName(first: string, last: string): string {
  return \`\${first} \${last}\`;
}

console.log(getFullName("Riya", "Patel"));`
      }
    ]
  };
  case 'ts-unions-generics':
  return {
    slug: 'ts-unions-generics',
    title: 'Unions & Generics — Flexible but Safe',
    content: `
      <p>Let’s talk about flexibility. Sometimes you want your code to be like a Swiss Army knife — able to handle multiple types of input. TypeScript gives you two superpowers for this: <strong>Unions</strong> and <strong>Generics</strong>.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔗 Union Types — Accepting Multiple Types</h3>
      <p>Union types are like saying: “Hey, I’ll accept this or that.”</p>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);        // Okay
printId("AB-123");   // Also okay
</code></pre>
      <p>You’re telling TypeScript: this variable can be either a number or a string — and it’ll check that you only use it in ways that both types allow.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Type Narrowing</h3>
      <p>When using unions, you often want to figure out what type it actually is before using it:</p>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function formatInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎒 Generics — Like Reusable Bags</h3>
      <p>Generics are like saying “I don’t care what type it is now, just make sure it stays consistent.” Great for writing flexible, reusable functions.</p>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function identity<T>(value: T): T {
  return value;
}

const str = identity("hello"); // string
const num = identity(42);      // number
</code></pre>

      <p>Here, <code>&lt;T&gt;</code> is a placeholder for the type that will be determined when the function is used. TypeScript keeps track of it.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧺 Generic with Arrays</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const first = getFirstItem([100, 200, 300]); // number
const name = getFirstItem(["Alice", "Bob"]); // string
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🤝 Unions vs Generics</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li>Use <strong>unions</strong> when you want to accept multiple known types.</li>
        <li>Use <strong>generics</strong> when you want to write reusable code that adapts to the type passed in.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚙️ Real-Life Example</h3>
      <p>Imagine a shopping cart function that works for clothes, groceries, or electronics — generics help you build one flexible function that handles all those types without losing track of what type each item is.</p>
    `,
    proTip: "Use union types for variety, and generics for reusability with safety. They're TypeScript’s dynamic duo!",
    codeSamples: [
      {
        language: 'ts',
        code: `function wrapInArray<T>(value: T): T[] {
  return [value];
}

const wrapped = wrapInArray("gift"); // ["gift"]`
      }
    ]
  };
  case 'ts-classes':
  return {
    slug: 'ts-classes',
    title: 'Classes & Inheritance (OOP)',
    content: `
      <p>If you're coming from Java, C#, or even playing around with OOP concepts, <strong>classes</strong> in TypeScript will feel like your comfy hoodie. But even if you're new — don’t worry, it’s easier than it sounds!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏠 What is a Class?</h3>
      <p>A class is like a blueprint for an object. Imagine you're building a bunch of houses — all the same layout but with different names, colors, and owners. That blueprint is your class.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, I'm \${this.name} and I'm \${this.age} years old.\`);
  }
}

const abhi = new Person("Abhi", 22);
abhi.greet(); // Hello, I'm Abhi and I'm 22 years old.
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 What's Going On Here?</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li><strong>name</strong> and <strong>age</strong> are properties.</li>
        <li><strong>constructor</strong> is a special method called when a new object is created.</li>
        <li><strong>greet()</strong> is a method attached to every object from this class.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧬 Inheritance — Like Family Traits</h3>
      <p>Just like you may inherit your smile from your mom or coding skills from your dad, classes can inherit from other classes!</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
class Developer extends Person {
  language: string;

  constructor(name: string, age: number, language: string) {
    super(name, age); // call parent constructor
    this.language = language;
  }

  code() {
    console.log(\`\${this.name} writes code in \${this.language}.\`);
  }
}

const dev = new Developer("Riya", 25, "TypeScript");
dev.greet(); // Hello, I'm Riya and I'm 25 years old.
dev.code();  // Riya writes code in TypeScript.
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🛠️ Access Modifiers</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li><code>public</code> – accessible anywhere (default)</li>
        <li><code>private</code> – only inside the class</li>
        <li><code>protected</code> – inside the class and subclasses</li>
      </ul>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
class SecretAgent {
  public name: string;
  private codeName: string;

  constructor(name: string, codeName: string) {
    this.name = name;
    this.codeName = codeName;
  }

  reveal() {
    return \`I am \${this.name}, aka \${this.codeName}\`;
  }
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🪄 Real-Life Analogy</h3>
      <p>Think of a class as a recipe, and an object as the actual dish made from it. Inheritance is like modifying a basic pizza recipe into a cheesy pizza 🍕. You still use the base but add more features.</p>
    `,
    proTip: "Use classes when building components, services, or models with behaviors. Keep things clean with modifiers and constructors!",
    codeSamples: [
      {
        language: 'ts',
        code: `
class Car {
  constructor(public brand: string, public speed: number) {}

  drive() {
    console.log(\`\${this.brand} is driving at \${this.speed} km/h\`);
  }
}

const car = new Car("Toyota", 80);
car.drive();
        `
      }
    ]
  };
  case 'ts-modules':
  return {
    slug: 'ts-modules',
    title: 'Modules & Imports/Exports',
    content: `
      <p>Ever tried to manage a huge project in one single file? 🥵 It’s chaos. That's where <strong>modules</strong> come in — like drawers in a well-organized cabinet. Each drawer (file/module) holds its own stuff, but you can still access things when needed.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 What is a Module?</h3>
      <p>In TypeScript (and JavaScript), every file is a module. Anything you <code>export</code> from one file can be <code>imported</code> into another file.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 Exporting — Sharing Your Stuff</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
// file: user.ts
export const name = "Abhi";
export function greet() {
  console.log(\`Hello, \${name}!\`);
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📥 Importing — Getting Stuff</h3>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
// file: app.ts
import { name, greet } from './user';

console.log(name); // Abhi
greet();           // Hello, Abhi!
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧪 Default Exports (One Main Thing)</h3>
      <p>If a module has one primary export, you can use <code>export default</code>.</p>
      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
// file: math.ts
export default function add(a: number, b: number) {
  return a + b;
}

// file: app.ts
import add from './math';
console.log(add(2, 3)); // 5
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧱 Why Use Modules?</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li>Helps you break code into logical pieces.</li>
        <li>Makes code reusable and easier to maintain.</li>
        <li>Avoids variable name conflicts.</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏗️ Real-Life Analogy</h3>
      <p>Imagine building a house with every tool thrown into one box 🧰. It’s messy! Now imagine tools are sorted into drawers — saws, hammers, screwdrivers — that’s modules. You take what you need, when you need it.</p>
    `,
    proTip: "Use named exports for multiple utilities and default export for single main functionality in a module.",
    codeSamples: [
      {
        language: 'ts',
        code: `
// user.ts
export const isLoggedIn = true;
export function logout() {
  console.log("Logged out!");
}

// app.ts
import { isLoggedIn, logout } from './user';
if (isLoggedIn) logout();
        `
      }
    ]
  };
  case 'ts-narrowing-guards':
  return {
    slug: 'ts-narrowing-guards',
    title: 'Type Narrowing & Type Guards',
    content: `
      <p>Sometimes your variable is like a mystery box — you're not exactly sure what's inside until you check. That's where <strong>type narrowing</strong> and <strong>type guards</strong> help — they let you safely open the box 🎁.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 What is Type Narrowing?</h3>
      <p>Type narrowing means figuring out the exact type of a variable when it's of multiple possible types (like <code>string | number</code>) — kind of like checking whether a package has books or clothes before opening it.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // string-specific
  } else {
    console.log(val.toFixed(2));    // number-specific
  }
}
</code></pre>

      <p><code>typeof</code> helped us "narrow" the type to either <code>string</code> or <code>number</code>.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔒 Type Guards: Custom Narrowing</h3>
      <p>Let’s say you’ve got objects with different shapes — you need to know which is which. You can write custom checks called <strong>type guards</strong>.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function makeSound(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}
</code></pre>

      <p><code>isDog()</code> is a custom type guard that checks if the object has <code>bark()</code>.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧰 Other Ways to Narrow Types</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li><code>typeof</code> — for primitives like string, number, boolean</li>
        <li><code>instanceof</code> — for classes</li>
        <li><code>in</code> operator — for checking if a property exists</li>
      </ul>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
function showLength(x: string | string[]) {
  if (Array.isArray(x)) {
    console.log(x.length); // array
  } else {
    console.log(x.length); // string
  }
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏗️ Real-Life Analogy</h3>
      <p>Imagine getting a parcel labeled “fragile or not fragile.” Before opening, you check if it’s glass or books. That check is a <strong>type guard</strong>, and once you know, you treat it accordingly. Simple, right?</p>
    `,
    proTip: "Use type guards to write cleaner, safer logic when dealing with union types or multiple possible object shapes.",
    codeSamples: [
      {
        language: 'ts',
        code: `
// Narrowing with 'in'
type Admin = { role: "admin", level: number };
type User = { username: string };

function checkUser(u: Admin | User) {
  if ("role" in u) {
    console.log(\`Admin level: \${u.level}\`);
  } else {
    console.log(\`User: \${u.username}\`);
  }
}
        `
      }
    ]
  };
  case 'ts-enums':
  return {
    slug: 'ts-enums',
    title: 'Enums Explained Simply',
    content: `
      <p>Ever labeled things with a name instead of a number? Like calling Monday "MON" instead of 0? That’s exactly what <strong>Enums</strong> do in TypeScript — they give names to values so your code makes way more sense 👇</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📋 Why Enums?</h3>
      <p>Let’s say you're building a task tracker and want to store task status. You could use numbers, but what does <code>1</code> or <code>2</code> even mean?</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
enum Status {
  Todo,        // 0
  InProgress,  // 1
  Done         // 2
}

const taskStatus = Status.InProgress;
</code></pre>

      <p>This makes your code readable and meaningful. Instead of <code>1</code>, you see <code>Status.InProgress</code> — much better!</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔢 Behind the Scenes</h3>
      <p>By default, enums assign numbers starting from 0, unless you manually give values:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
enum Priority {
  Low = 1,
  Medium = 2,
  High = 3
}

const bug = Priority.High;
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📝 String Enums</h3>
      <p>Prefer labels over numbers? Go for string enums — super helpful for APIs and debugging.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

const userRole = Role.Editor;
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔁 Reverse Mapping</h3>
      <p>In number enums, you can even get the name from the number:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
enum Direction {
  North, South, East, West
}

console.log(Direction[0]); // "North"
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏗️ Real-Life Analogy</h3>
      <p>Think of enums like assigning a label to speed dials 📞 on your phone. Instead of remembering “2 is Mom”, you just press “Mom”. Enums let code do the same — label things clearly!</p>
    `,
    proTip: "Use string enums for clearer debugging and safer API integrations. Use numeric enums for performance-sensitive operations.",
    codeSamples: [
      {
        language: 'ts',
        code: `
// Status enum example
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED"
}

function handleStatus(s: Status) {
  if (s === Status.Success) {
    console.log("✅ All good!");
  } else {
    console.log("⚠️ Something went wrong.");
  }
}
        `
      }
    ]
  };
  case 'ts-utility-types':
  return {
    slug: 'ts-utility-types',
    title: 'Built-in Utility Types (Partial, Pick, etc.)',
    content: `
      <p>Imagine you're building with Lego blocks — sometimes you want the full set, sometimes just a few pieces. TypeScript’s <strong>utility types</strong> help you do exactly that with your types — reuse, reshape, or reduce them in powerful ways 🧱.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧩 Partial&lt;T&gt;</h3>
      <p>Makes all properties of a type optional. Great when you're updating just part of an object.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Profile = {
  name: string;
  age: number;
};

const updateProfile = (data: Partial<Profile>) => {
  // Now you can send just name or just age
};
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🎯 Pick&lt;T, K&gt;</h3>
      <p>Pick only specific properties from a type — like ordering à la carte 🍽️</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type User = {
  id: string;
  name: string;
  email: string;
};

type PublicUser = Pick<User, "name" | "email">;
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🚫 Omit&lt;T, K&gt;</h3>
      <p>Opposite of Pick — removes certain properties.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type PrivateUser = Omit<User, "email">; // no email here
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📌 Readonly&lt;T&gt;</h3>
      <p>Makes all properties immutable (like freezing an object 🧊).</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Config = {
  version: string;
};

const config: Readonly<Config> = {
  version: "1.0"
};

config.version = "2.0"; // ❌ Error: Cannot assign
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📚 Record&lt;K, T&gt;</h3>
      <p>Create an object type with keys of type <code>K</code> and values of type <code>T</code>.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Role = "admin" | "user";

const permissions: Record<Role, boolean> = {
  admin: true,
  user: false
};
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🏗️ Real-Life Analogy</h3>
      <p>Think of utility types like smart tools in your garage 🧰. Instead of creating new stuff from scratch, you tweak or adjust existing types to save time and avoid bugs. Efficient and clean!</p>
    `,
    proTip: "When building APIs or forms, use utility types like Partial and Pick to make your types flexible and safe at the same time.",
    codeSamples: [
      {
        language: 'ts',
        code: `
// Making a reusable form type
type User = {
  id: string;
  name: string;
  email: string;
};

// Just what's needed for the signup form
type SignupForm = Pick<User, "name" | "email">;

// For updates, make everything optional
type UpdateUser = Partial<User>;
        `
      }
    ]
  };
  case 'ts-errors':
  return {
    slug: 'ts-errors',
    title: 'Handling Errors in TypeScript',
    content: `
      <p>Errors are like unexpected potholes while driving 🚗 — you either avoid them or handle them smoothly. TypeScript helps you catch those early and handle them smartly when they show up at runtime.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🪤 Try / Catch — The Classic Net</h3>
      <p>Use try/catch when you're unsure if something might break at runtime — especially when working with APIs or parsing data:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
try {
  const data = JSON.parse('{"name":"IgKnight"}');
  console.log(data.name);
} catch (error) {
  console.error("Something went wrong:", error);
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📏 Strongly Typed Errors (optional but helpful)</h3>
      <p>In TS, <code>catch</code> doesn't know the exact shape of the error, so if you're accessing specific properties, you should tell TS what the error is:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
try {
  throw new Error("Uh oh!");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">❗ Custom Error Classes</h3>
      <p>Need better control? Create your own error classes for specific use-cases.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

throw new AuthError("Invalid credentials");
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔄 Function Return Types: Error or Value?</h3>
      <p>Another smart pattern: return either a value or an error manually using <code>Result</code> style types:</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Result = { data: string } | { error: string };

function getData(): Result {
  const success = true;
  return success ? { data: "Done" } : { error: "Failed to load" };
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-Life Analogy</h3>
      <p>Think of <code>try/catch</code> like wearing a helmet while skating — you hope not to fall, but if you do, you're safe 😅. Same idea in TS: protect the risky parts of your code!</p>
    `,
    proTip: "Don’t overuse try/catch — use TypeScript types to prevent errors in the first place. Reserve try/catch for truly unpredictable operations like user input or network calls.",
    codeSamples: [
      {
        language: 'ts',
        code: `
// Safer parsing with try/catch
function safeJsonParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

const result = safeJsonParse("{ invalid json }"); // null
        `
      }
    ]
  };
  case 'ts-config':
  return {
    slug: 'ts-config',
    title: 'tsconfig.json Demystified',
    content: `
      <p>If TypeScript was a spaceship 🚀, <code>tsconfig.json</code> would be its control panel — it tells the compiler how to behave, what to include, and how strict to be.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">📦 What is tsconfig.json?</h3>
      <p>It's a simple JSON file that lives in your project root and tells TypeScript how to compile your code. It controls what files are used, what output you get, and how safe you want your code to be.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">⚙️ Common Settings You’ll See</h3>

      <ul class="list-disc pl-6 text-white">
        <li><code>"compilerOptions"</code>: Where all your rules live</li>
        <li><code>"include"</code>: What files/folders TypeScript should care about</li>
        <li><code>"exclude"</code>: What to ignore (e.g., <code>node_modules</code>)</li>
      </ul>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>{
  "compilerOptions": {
    "target": "ES6", // Convert TS to this version of JS
    "module": "commonjs",
    "strict": true, // Enables all strict type checks
    "outDir": "./dist", // Where to put compiled JS
    "esModuleInterop": true // Helps with importing CommonJS modules
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🔍 Some Handy Compiler Options</h3>
      <ul class="list-disc pl-6 text-white">
        <li><code>"strict": true</code> — Forces you to write safer code (like no undefined returns, no sloppy nulls)</li>
        <li><code>"noImplicitAny": true</code> — Stops TS from guessing types as <code>any</code></li>
        <li><code>"baseUrl"</code> and <code>"paths"</code> — Helps with cleaner imports like <code>@/utils</code></li>
        <li><code>"skipLibCheck"</code> — Skips checking third-party libs, saves build time</li>
      </ul>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-Life Analogy</h3>
      <p><code>tsconfig.json</code> is like customizing your burger order 🍔. You can say: “No onions, extra cheese, gluten-free bun” — and TypeScript listens and builds your code exactly how you want.</p>
    `,
    proTip: "Start with a basic tsconfig, then slowly tighten rules (like turning on strict mode) as you get comfy with TypeScript.",
    codeSamples: [
      {
        language: 'json',
        code: `
// Minimal starter tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true
  },
  "include": ["src"]
}
        `
      }
    ]
  };
  case 'ts-best-practices':
  return {
    slug: 'ts-best-practices',
    title: 'Best Practices & Real Project Tips',
    content: `
      <p>Learning TypeScript is like learning to drive — knowing the rules keeps you safe 🚦. Here are some simple but powerful habits that'll make your code cleaner, safer, and easier to work with in real projects.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 1. Always Define Types Explicitly</h3>
      <p>Don't let TS guess. Be clear with your types — it's like labeling your food containers 🍱 so you don’t microwave salad by mistake.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
const user: { name: string; age: number } = {
  name: "Nash",
  age: 22,
};
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 2. Prefer Interfaces for Objects</h3>
      <p>Interfaces make it easier to structure and reuse object shapes. Use them like a shared blueprint 🏗️.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
interface Product {
  name: string;
  price: number;
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 3. Avoid 'any' Like It's a Black Hole 🕳️</h3>
      <p><code>any</code> removes all type safety — it’s like saying “I trust everything blindly”. Use <code>unknown</code> or narrow it down properly.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 4. Use Union & Literal Types for Options</h3>
      <p>Great for dropdowns, themes, or modes — it forces only valid values 🎯</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
type Theme = "light" | "dark";

function setTheme(mode: Theme) {
  console.log("Theme set to", mode);
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 5. Organize Types in a Separate File</h3>
      <p>For real-world apps, keep all shared types in one folder like <code>types/</code> or <code>models/</code>. Keeps everything clean and easy to maintain.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 6. Enable Strict Mode in tsconfig</h3>
      <p>This turns on a bunch of safety features — it’s like putting seatbelts on your code 💺.</p>

      <pre class="bg-[#1F2937] p-4 rounded text-green-400 overflow-auto text-sm"><code>
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
</code></pre>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">✅ 7. Start Simple, Grow with Confidence</h3>
      <p>Don’t try to type every single line from day one. Use basic types at first, and grow them as your app grows 💡.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2 text-white">🧠 Real-Life Analogy</h3>
      <p>Think of TypeScript as a co-pilot who points out issues before you crash. Follow best practices and it'll help you avoid a ton of late-night bugs 🐞.</p>
    `,
    proTip: "Your TypeScript journey doesn’t need to be perfect — write code, break stuff, and Google a lot. That’s how real devs level up!",
    codeSamples: [
      {
        language: 'ts',
        code: `
// Example: Reusable interface
interface User {
  id: number;
  email: string;
  isAdmin?: boolean;
}

// Using it
const currentUser: User = {
  id: 1,
  email: "user@example.com",
};
        `
      }
    ]
  };


    default:
      return undefined;
  }
}