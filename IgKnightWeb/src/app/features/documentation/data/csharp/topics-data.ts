import { Topic, TopicContent } from "../../../../models/topic.model";

export const CSharpTopics: Topic[] = [
  { id: 'csharp-introduction', title: 'Introduction to C#', slug: 'csharp-introduction' },
  { id: 'csharp-variables', title: 'Variables & Data Types', slug: 'csharp-variables' },
  { id: 'csharp-conditions', title: 'Conditional Statements', slug: 'csharp-conditions' },
  { id: 'csharp-loops', title: 'Loops in C#', slug: 'csharp-loops' },
  { id: 'csharp-methods', title: 'Methods & Parameters', slug: 'csharp-methods' },
  { id: 'csharp-arrays-lists', title: 'Arrays & Lists', slug: 'csharp-arrays-lists' },
  { id: 'csharp-strings', title: 'Working with Strings', slug: 'csharp-strings' },
  { id: 'csharp-classes-objects', title: 'Classes & Objects', slug: 'csharp-classes-objects' },
  { id: 'csharp-inheritance', title: 'Inheritance & Polymorphism', slug: 'csharp-inheritance' },
  { id: 'csharp-interfaces', title: 'Interfaces & Abstraction', slug: 'csharp-interfaces' },
  { id: 'csharp-collections', title: 'Collections & Dictionaries', slug: 'csharp-collections' },
  { id: 'csharp-exceptions', title: 'Exception Handling', slug: 'csharp-exceptions' },
  { id: 'csharp-linq', title: 'LINQ Basics', slug: 'csharp-linq' },
  { id: 'csharp-files', title: 'File Handling', slug: 'csharp-files' },
  { id: 'csharp-async', title: 'Asynchronous Programming', slug: 'csharp-async' },
  { id: 'csharp-advanced', title: 'Advanced C# Tips', slug: 'csharp-advanced' },
  { id: 'csharp-best-practices', title: 'Best Practices', slug: 'csharp-best-practices' }
];

export function CSharpTopicsContent(slug: string): TopicContent | undefined {
  switch (slug) 
    {
    case 'csharp-introduction':
  return {
    slug: 'csharp-introduction',
    title: 'Introduction to C#',
    content: `
      <p class="mb-4">Let’s say you’ve built cool stuff in HTML or JavaScript, and now you're wondering: <strong>“What’s C# and why should I care?”</strong><br/>
      Think of C# as your all-in-one power tool 🔧. You can build web apps, desktop tools, games (yep, even Unity ones), or automate stuff — all with one solid language.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🎯 So What <em>Is</em> C#?</h3>
      <p class="mb-4">C# (pronounced “C-sharp”) is a modern, powerful programming language developed by Microsoft. It’s part of the .NET ecosystem and is used for almost everything — from building full-stack web apps to developing games and automating daily tasks.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">📦 Real-Life Use Cases</h3>
      <ul class="list-disc list-inside mb-4">
        <li>🎮 Want to build a game? Unity uses C#.</li>
        <li>🖥️ Need a Windows desktop app? C# + WPF or WinForms.</li>
        <li>🌐 Web apps? ASP.NET Core is built on C#.</li>
        <li>🤖 Automate daily tasks? C# scripts make it clean and efficient.</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">👋 Your First C# Program</h3>
      <p class="mb-4">Let’s write the classic “Hello World” in C#:</p>

      <pre><code class="language-csharp">// Your first C# program
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, IgKnight! 👋");
    }
}</code></pre>

      <p class="mb-4">Here’s what each line means, explained like a buddy:</p>
      <ul class="list-disc list-inside mb-4">
        <li><code>using System;</code> — gives you access to built-in features like <code>Console</code>.</li>
        <li><code>class Program</code> — you’re defining a class (like a blueprint or container).</li>
        <li><code>Main()</code> — this is where your code starts running.</li>
        <li><code>Console.WriteLine()</code> — prints text to the screen.</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">🚀 Why Developers Love C#</h3>
      <ul class="list-disc list-inside mb-4">
        <li>✅ Clean and readable syntax</li>
        <li>⚡ Fast with modern .NET Core</li>
        <li>🧰 Massive libraries and tools</li>
        <li>🛡️ Strong typing helps avoid bugs</li>
      </ul>

      <p class="mb-4">Whether you're building the next Instagram or automating reports at work, C# can be your best dev buddy.</p>
    `,
    proTip: 'C# is a one-language powerhouse: Build APIs, automate stuff, or even make games — all in one ecosystem!',
    codeSamples: [
      {
        language: 'csharp',
        code: `// Your first friendly C# program
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Welcome to the C# universe 🚀");
    }
}`
      }
    ]
  };
  case 'csharp-variables':
  return {
    slug: 'csharp-variables',
    title: 'Variables & Data Types in C#',
    content: `
      <p class="mb-4">Let’s say you're building a game or a web app, and you need to store things like a player’s score, username, or whether dark mode is on. That’s where <strong>variables</strong> come in!</p>

      <p class="mb-4">In C#, variables are like labeled boxes 🧃— you put data inside, give it a type, and reuse it when needed. The language is <strong>statically typed</strong>, which means every variable must have a type (like <code>int</code> or <code>string</code>).</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">📦 Declaring a Variable</h3>
      <p class="mb-4">Here’s the basic format:</p>
      <pre><code class="language-csharp">type variableName = value;</code></pre>
      <p class="mb-4">Example:</p>
      <pre><code class="language-csharp">int age = 21;
string name = "Alex";
bool isDarkMode = true;</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔢 Common Data Types</h3>
      <ul class="list-disc list-inside mb-4">
        <li><code>int</code> – Whole numbers like <code>25</code>, <code>1000</code></li>
        <li><code>double</code> – Decimal numbers like <code>3.14</code>, <code>99.99</code></li>
        <li><code>string</code> – Text, like <code>"Hello"</code> or <code>"IgKnight"</code></li>
        <li><code>bool</code> – True or false (like a light switch)</li>
        <li><code>char</code> – A single character, like <code>'A'</code></li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">🧠 Real-Life Analogy</h3>
      <p class="mb-4">Imagine making a profile page. You might store:</p>
      <pre><code class="language-csharp">string username = "lightningDev";
int followers = 542;
bool isVerified = true;</code></pre>

      <p class="mb-4">You’ve got a label for each piece of data. This keeps your code readable, organized, and easy to change later.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🧪 var Keyword</h3>
      <p class="mb-4">Too lazy to write the type? C# lets you use <code>var</code> and figures it out automatically:</p>
      <pre><code class="language-csharp">var score = 99;        // C# knows this is an int
var nickname = "Neo";  // This becomes a string</code></pre>

      <p class="mb-4"><strong>Pro tip:</strong> Use <code>var</code> when the type is obvious. Otherwise, write the type clearly for readability.</p>
    `,
    proTip: 'Think of variables as containers with labels. Always choose clear names that describe what’s inside!',
    codeSamples: [
      {
        language: 'csharp',
        code: `int level = 5;
string playerName = "KnightMaster";
bool isOnline = true;

Console.WriteLine(playerName + " is on level " + level);`
      }
    ]
  };
    case 'csharp-conditions':
  return {
    slug: 'csharp-conditions',
    title: 'Conditional Statements in C#',
    content: `
      <p class="mb-4">Let’s say you're making a login screen, and you want to show “Welcome back!” only if the user enters the correct password. That’s where <strong>conditions</strong> come in — they help you make decisions in your code based on certain rules.</p>

      <p class="mb-4">In C#, conditional statements use logic like <code>if</code>, <code>else</code>, and <code>else if</code> to decide which code to run. Think of them like crossroads: your program chooses one path depending on what’s true.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">✅ Basic if Statement</h3>
      <pre><code class="language-csharp">int score = 90;

if (score &gt;= 80)
{
  Console.WriteLine("You passed!");
}</code></pre>
      <p class="mb-4">If the condition inside the parentheses is true, the code block runs.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🧭 if–else</h3>
      <pre><code class="language-csharp">bool isLoggedIn = false;

if (isLoggedIn)
{
  Console.WriteLine("Welcome back!");
}
else
{
  Console.WriteLine("Please log in.");
}</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🪜 else if</h3>
      <p class="mb-4">Need multiple paths? Use <code>else if</code> for more control:</p>
      <pre><code class="language-csharp">int temperature = 25;

if (temperature &gt; 30)
{
  Console.WriteLine("It’s hot!");
}
else if (temperature &gt;= 20)
{
  Console.WriteLine("Nice weather.");
}
else
{
  Console.WriteLine("Grab a jacket!");
}</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">⚖️ Comparison Operators</h3>
      <ul class="list-disc list-inside mb-4">
        <li><code>==</code> – is equal to</li>
        <li><code>!=</code> – is not equal to</li>
        <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> – greater/less than</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔗 Logical Operators</h3>
      <ul class="list-disc list-inside mb-4">
        <li><code>&&</code> – AND (both must be true)</li>
        <li><code>||</code> – OR (either one can be true)</li>
        <li><code>!</code> – NOT (flips true/false)</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">🧠 Real-Life Example</h3>
      <p class="mb-4">Say you're checking if someone can access premium features:</p>
      <pre><code class="language-csharp">bool isSubscriber = true;
bool hasTrial = false;

if (isSubscriber || hasTrial)
{
  Console.WriteLine("Access granted ✅");
}
else
{
  Console.WriteLine("Upgrade to access this feature 🚫");
}</code></pre>
    `,
    proTip: "Use clear, simple conditions. When logic gets complex, break it into smaller checks using helper variables or comments.",
    codeSamples: [
      {
        language: 'csharp',
        code: `int age = 16;

if (age &gt;= 18)
{
  Console.WriteLine("You're eligible to vote.");
}
else
{
  Console.WriteLine("You must be 18 or older to vote.");
}`
      }
    ]
  };
  case 'csharp-loops':
  return {
    slug: 'csharp-loops',
    title: 'Loops in C#',
    content: `
      <p class="mb-4">Ever wanted to do something multiple times—like showing 10 questions in a quiz or checking every item in a shopping cart? That’s what loops are for! They let you repeat code without copy-pasting it a hundred times.</p>

      <p class="mb-4">In C#, you’ve got a few types of loops—each with a vibe of its own depending on the situation. Let’s walk through them.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔁 for Loop</h3>
      <p class="mb-4">Use this when you know how many times you want to repeat something.</p>
      <pre><code class="language-csharp">for (int i = 1; i &lt;= 5; i++)
{
  Console.WriteLine("Question " + i);
}</code></pre>
      <p class="mb-4">This loop prints “Question 1” to “Question 5”. Think of it like a countdown timer—you set where to start, where to stop, and how fast to count.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔁 while Loop</h3>
      <p class="mb-4">Use this when you don’t know how many times—just go until a condition becomes false.</p>
      <pre><code class="language-csharp">int score = 0;

while (score &lt; 3)
{
  Console.WriteLine("Keep practicing!");
  score++;
}</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔁 do–while Loop</h3>
      <p class="mb-4">This one runs <em>at least once</em>, even if the condition is false right away.</p>
      <pre><code class="language-csharp">int attempts = 1;

do
{
  Console.WriteLine("Attempt " + attempts);
  attempts++;
} while (attempts &lt;= 3);</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔁 foreach Loop</h3>
      <p class="mb-4">This one is a chill way to loop through all items in a collection (like a list of names).</p>
      <pre><code class="language-csharp">string[] languages = { "C#", "Python", "JavaScript" };

foreach (string lang in languages)
{
  Console.WriteLine("Learning " + lang);
}</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">💡 Real-Life Example</h3>
      <p class="mb-4">Imagine a leaderboard with 3 players. You can loop through and print them all:</p>
      <pre><code class="language-csharp">string[] players = { "Alex", "Rhea", "Zed" };

for (int i = 0; i &lt; players.Length; i++)
{
  Console.WriteLine((i + 1) + ". " + players[i]);
}</code></pre>

      <p class="mb-4">Or even better, with <code>foreach</code>:</p>
      <pre><code class="language-csharp">foreach (string player in players)
{
  Console.WriteLine(player);
}</code></pre>
    `,
    proTip: 'Start with a for loop if you need index control, and foreach if you just want to visit every item. Avoid infinite loops by always updating your condition!',
    codeSamples: [
      {
        language: 'csharp',
        code: `for (int i = 1; i &lt;= 3; i++)
{
  Console.WriteLine("Level " + i);
}

string[] tasks = { "Eat", "Code", "Sleep" };
foreach (string task in tasks)
{
  Console.WriteLine(task);
}`
      }
    ]
  };
  case 'csharp-methods':
  return {
    slug: 'csharp-methods',
    title: 'Methods & Parameters in C#',
    content: `
      <p class="mb-4">In C#, we use the word <strong>method</strong> instead of "function". A method is a block of code that lives inside a class — it performs a task, like calculating something, showing a message, or processing input.</p>

      <p class="mb-4">Think of a method like a skill your app can perform. If you're building a workout app, you might have methods like <code>StartWorkout()</code> or <code>CalculateCalories()</code>.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">🛠 Basic Method Example</h3>
      <pre><code class="language-csharp">class Gym
{
  public void Welcome()
  {
    Console.WriteLine("Welcome to IgKnight Fitness!");
  }
}</code></pre>

      <p class="mb-4">You call this method using an object:</p>
      <pre><code class="language-csharp">Gym g = new Gym();
g.Welcome();</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">📨 Method with Parameters</h3>
      <p class="mb-4">You can pass values into methods using parameters:</p>
      <pre><code class="language-csharp">public void ShowProgress(string name, int days)
{
  Console.WriteLine(name + " has worked out for " + days + " days!");
}</code></pre>

      <p class="mb-4">Call it like this:</p>
      <pre><code class="language-csharp">g.ShowProgress("Aarav", 30);</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🎯 Method That Returns a Value</h3>
      <pre><code class="language-csharp">public int Add(int a, int b)
{
  return a + b;
}</code></pre>
      <pre><code class="language-csharp">int result = g.Add(5, 10);</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🌟 Real-World Example</h3>
      <p class="mb-4">Imagine a BMI calculator method:</p>
      <pre><code class="language-csharp">public double CalculateBMI(double weight, double height)
{
  return weight / (height * height);
}</code></pre>

      <pre><code class="language-csharp">double bmi = g.CalculateBMI(72, 1.78);
Console.WriteLine("Your BMI is: " + bmi);</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">📌 Static vs Instance Methods</h3>
      <p class="mb-4"><code>static</code> methods belong to the class itself and don’t need an object:</p>
      <pre><code class="language-csharp">public static void SayHello()
{
  Console.WriteLine("Hello from IgKnight!");
}

// Call like this:
Gym.SayHello();</code></pre>
    `,
    proTip: "If you're writing a method that doesn’t need to access instance variables, consider making it static. It's easier to call and test!",
    codeSamples: [
      {
        language: 'csharp',
        code: `public class Calculator
{
  public int Multiply(int a, int b)
  {
    return a * b;
  }

  public void ShowResult(int result)
  {
    Console.WriteLine("Result: " + result);
  }
}

// Usage:
Calculator calc = new Calculator();
int result = calc.Multiply(4, 5);
calc.ShowResult(result);`
      }
    ]
  };
  case 'csharp-arrays-lists':
  return {
    slug: 'csharp-arrays-lists',
    title: 'Arrays & Lists in C#',
    content: `
      <p class="mb-4">In C#, <strong>arrays</strong> and <strong>lists</strong> are used to store collections of data — like names, scores, or even workout sets. Arrays are fixed in size. Lists are flexible and can grow or shrink. Think of arrays like a tray with 5 fixed compartments, and lists like a bag where you can toss more items in anytime.</p>

      <h3 class="text-lg font-semibold mb-2 mt-6">📦 Arrays – Fixed-Size Containers</h3>
      <p class="mb-4">Use arrays when you know exactly how many items you need to store.</p>
      <pre><code class="language-csharp">// Array of exercises
string[] exercises = { "Push-ups", "Squats", "Plank" };

Console.WriteLine(exercises[1]); // Squats
</code></pre>

      <p class="mb-4">Looping through an array:</p>
      <pre><code class="language-csharp">foreach (string exercise in exercises)
{
  Console.WriteLine(exercise);
}</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">📋 Lists – Flexible & Dynamic</h3>
      <p class="mb-4">Lists are part of <code>System.Collections.Generic</code>. They’re like superpowered arrays that can grow as needed.</p>

      <pre><code class="language-csharp">using System.Collections.Generic;

List&lt;string&gt; workoutPlan = new List&lt;string&gt;();
workoutPlan.Add("Jumping Jacks");
workoutPlan.Add("Lunges");
workoutPlan.Add("Burpees");</code></pre>

      <p class="mb-4">Lists can be modified anytime:</p>
      <pre><code class="language-csharp">workoutPlan.Remove("Lunges");
Console.WriteLine(workoutPlan.Count); // 2</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🔍 Accessing List Items</h3>
      <pre><code class="language-csharp">Console.WriteLine(workoutPlan[0]); // Jumping Jacks</code></pre>

      <h3 class="text-lg font-semibold mb-2 mt-6">🛠 When to Use What?</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>✅ Use <strong>arrays</strong> when size is fixed (like days of the week).</li>
        <li>✅ Use <strong>lists</strong> when you need to add/remove items frequently (like tasks or user input).</li>
      </ul>

      <h3 class="text-lg font-semibold mb-2 mt-6">🌟 Real-Life Example</h3>
      <p class="mb-4">You're tracking your meals throughout the day:</p>
      <pre><code class="language-csharp">List&lt;string&gt; meals = new List&lt;string&gt; { "Breakfast", "Lunch" };
meals.Add("Dinner");

foreach (string meal in meals)
{
  Console.WriteLine("Meal: " + meal);
}</code></pre>
    `,
    proTip: "Use List<T> when working with APIs, databases, or any situation where the number of items isn't fixed.",
    codeSamples: [
      {
        language: 'csharp',
        code: `// Using arrays
int[] scores = { 85, 90, 78 };
Console.WriteLine(scores[0]); // 85

// Using lists
List<string> students = new List<string>();
students.Add("Raj");
students.Add("Simran");
students.Remove("Raj");

foreach (var student in students)
{
  Console.WriteLine(student);
}`
      }
    ]
  };
  case 'csharp-strings':
  return {
    slug: 'csharp-strings',
    title: 'Working with Strings',
    content: `
<p>Strings in C# are like the sentences we write in daily life — they hold text, from names and messages to entire paragraphs. In C#, a string is a sequence of characters enclosed in double quotes. For example:</p>

<pre><code class="language-csharp">string name = "IgKnight";</code></pre>

<p>Strings are everywhere — printing messages, reading input, formatting outputs. Let’s understand them in a fun, practical way.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Declaring Strings</h2>
<p>Declaring a string is super simple:</p>
<pre><code class="language-csharp">string message = "Hello, world!";</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. String Concatenation</h2>
<p>You can join strings using the <code>+</code> operator:</p>
<pre><code class="language-csharp">string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;</code></pre>
<p><strong>Output:</strong> <code>John Doe</code></p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. String Interpolation (More Modern & Clean)</h2>
<p>This is like smart string building — way cleaner than concatenation:</p>
<pre><code class="language-csharp">string name = "Alice";
int age = 25;
string intro = $"My name is {name} and I am {age} years old.";</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Useful String Methods</h2>
<p>C# provides powerful methods to work with strings:</p>
<ul class="list-disc pl-6">
  <li><code>.Length</code> – Gets the number of characters</li>
  <li><code>.ToUpper()</code> / <code>.ToLower()</code> – Changes casing</li>
  <li><code>.Contains()</code> – Checks if a word is inside the string</li>
  <li><code>.Replace()</code> – Replaces part of a string</li>
  <li><code>.Substring()</code> – Extracts a part of a string</li>
  <li><code>.Trim()</code> – Removes spaces at the start and end</li>
</ul>

<pre><code class="language-csharp">string info = "  Welcome to IgKnight!  ";
Console.WriteLine(info.Trim()); // "Welcome to IgKnight!"</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Escaping Characters</h2>
<p>If you want to include special characters like quotes or new lines:</p>
<pre><code class="language-csharp">string quote = "She said, \\\"Learn C# with IgKnight!\\\"";</code></pre>

<p>Or use <strong>verbati**m strings</strong> with <code>@</code> for multi-line or file paths:</p>
<pre><code class="language-csharp">string path = @"C:\\Users\\John\\Documents";
string multiLine = @"Line 1
Line 2
Line 3";</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">6. Comparing Strings</h2>
<pre><code class="language-csharp">string a = "hello";
string b = "HELLO";
bool isSame = a.Equals(b, StringComparison.OrdinalIgnoreCase);</code></pre>

<p>That compares strings without caring about letter casing!</p>
`,
    proTip: "Use string interpolation (the $ symbol) over concatenation — it makes your code cleaner and easier to read.",
    codeSamples: [
      {
        language: 'csharp',
        code: `string name = "IgKnight";
string greeting = $"Welcome to {name}!";
Console.WriteLine(greeting);`
      }
    ]
  };
  case 'csharp-classes-objects':
  return {
    slug: 'csharp-classes-objects',
    title: 'Classes & Objects',
    content: `
<p>Classes and objects are the heart of C#. Think of a <strong>class</strong> as a blueprint, like the plan for a house. And an <strong>object</strong> is an actual house built using that plan.</p>

<p>In real life, we don’t describe every car separately — we have a generic car design (class), and each car we see on the road is an object of that class. Same with code!</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Defining a Class</h2>
<p>Let’s create a simple class called <code>Car</code>:</p>
<pre><code class="language-csharp">public class Car {
  public string Brand;
  public int Year;

  public void Honk() {
    Console.WriteLine("Beep beep!");
  }
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Creating Objects</h2>
<p>Now let’s create a <code>Car</code> object using the class:</p>
<pre><code class="language-csharp">Car myCar = new Car();
myCar.Brand = "Tesla";
myCar.Year = 2024;
myCar.Honk();</code></pre>

<p><strong>Output:</strong> <code>Beep beep!</code></p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Constructors (Auto setup)</h2>
<p>A constructor helps set up the object with initial values when it's created:</p>
<pre><code class="language-csharp">public class Car {
  public string Brand;
  public int Year;

  // Constructor
  public Car(string brand, int year) {
    Brand = brand;
    Year = year;
  }

  public void Honk() {
    Console.WriteLine("Beep from " + Brand);
  }
}</code></pre>

<pre><code class="language-csharp">Car car1 = new Car("BMW", 2023);
car1.Honk();</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Access Modifiers</h2>
<ul class="list-disc pl-6">
  <li><code>public</code> – accessible from anywhere</li>
  <li><code>private</code> – only inside the class</li>
  <li><code>protected</code> – inside the class and subclasses</li>
</ul>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Analogy</h2>
<p>Imagine a <strong>Phone</strong> class. Every phone object might have a brand, model, and call() method. The class is the definition, and your actual iPhone or Samsung device is an object of that class.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">6. Why Use Classes?</h2>
<p>They help you:</p>
<ul class="list-disc pl-6">
  <li>Organize code logically</li>
  <li>Reuse structures (like models)</li>
  <li>Group data and behavior</li>
</ul>
<p>Without classes, code becomes messy and hard to manage.</p>
`,
    proTip: "Give each class one responsibility. Don’t make one class handle everything — split things into clean, simple blueprints.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public class Student {
  public string Name;
  public int Age;

  public Student(string name, int age) {
    Name = name;
    Age = age;
  }

  public void Greet() {
    Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
  }
}`
      }
    ]
  };
  case 'csharp-inheritance':
  return {
    slug: 'csharp-inheritance',
    title: 'Inheritance & Polymorphism',
    content: `
<p>Inheritance in C# lets one class "inherit" or reuse features (variables and methods) from another. It’s like getting a free set of tools from your parent class. 🔧</p>

<p>Let’s say you have a general <code>Animal</code> class. A <code>Dog</code> or <code>Cat</code> class can inherit everything from <code>Animal</code> — like its ability to breathe or sleep — and add their own behavior, like bark or meow. 🐶🐱</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Basic Inheritance</h2>
<p>We use <code>:</code> to inherit in C#:</p>

<pre><code class="language-csharp">public class Animal {
  public void Eat() {
    Console.WriteLine("Eating...");
  }
}

public class Dog : Animal {
  public void Bark() {
    Console.WriteLine("Woof!");
  }
}</code></pre>

<pre><code class="language-csharp">Dog myDog = new Dog();
myDog.Eat(); // Inherited from Animal
myDog.Bark();</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. The <code>base</code> Keyword</h2>
<p>You can call the parent class's constructor or methods using <code>base</code>:</p>

<pre><code class="language-csharp">public class Animal {
  public Animal() {
    Console.WriteLine("Animal created");
  }
}

public class Cat : Animal {
  public Cat() : base() {
    Console.WriteLine("Cat created");
  }
}</code></pre>

<p><strong>Output:</strong><br>Animal created<br>Cat created</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Method Overriding</h2>
<p>Let’s say the base class has a method, but the child class wants to do it differently. Use <code>virtual</code> and <code>override</code>:</p>

<pre><code class="language-csharp">public class Animal {
  public virtual void Speak() {
    Console.WriteLine("Animal sound");
  }
}

public class Dog : Animal {
  public override void Speak() {
    Console.WriteLine("Dog barks");
  }
}</code></pre>

<pre><code class="language-csharp">Dog d = new Dog();
d.Speak(); // Dog barks</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Polymorphism</h2>
<p>Polymorphism = Many forms. A single method call can do different things depending on the object.</p>

<pre><code class="language-csharp">Animal pet = new Dog();
pet.Speak(); // Dog barks because override happens</code></pre>

<p>Even though <code>pet</code> is typed as <code>Animal</code>, it behaves like a <code>Dog</code>. That’s the magic!</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Example</h2>
<p>Imagine a base class <code>Employee</code> with a method <code>Work()</code>. A <code>Manager</code> class inherits from <code>Employee</code> but overrides <code>Work()</code> to “attend meetings” while a <code>Developer</code> might override it to “write code”.</p>
`,
    proTip: "Use inheritance to avoid repeating code, but don’t overuse it — prefer composition when classes start becoming too dependent.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public class Animal {
  public virtual void Speak() {
    Console.WriteLine("Animal sound");
  }
}

public class Dog : Animal {
  public override void Speak() {
    Console.WriteLine("Bark!");
  }
}

Animal a = new Dog();
a.Speak(); // Bark!
`
      }
    ]
  };
  case 'csharp-interfaces':
  return {
    slug: 'csharp-interfaces',
    title: 'Interfaces & Abstraction',
    content: `
<p>Interfaces in C# are like contracts 📜. They say: "If you implement me, you *must* provide these methods." But they don’t care *how* you implement them. This is great for making flexible and scalable code.</p>

<p>Think of an interface like a remote control — it has buttons (methods), but the device (class) decides what happens when you press one. 📺</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Declaring an Interface</h2>
<pre><code class="language-csharp">public interface IAnimal {
  void Speak();
  void Move();
}</code></pre>

<p>Notice: no method bodies — just declarations.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Implementing an Interface</h2>
<pre><code class="language-csharp">public class Dog : IAnimal {
  public void Speak() {
    Console.WriteLine("Bark!");
  }

  public void Move() {
    Console.WriteLine("Dog runs");
  }
}</code></pre>

<p>Now <code>Dog</code> is *guaranteed* to have <code>Speak()</code> and <code>Move()</code>.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Interface as a Type</h2>
<p>You can use the interface itself as a variable type:</p>

<pre><code class="language-csharp">IAnimal pet = new Dog();
pet.Speak(); // Bark!</code></pre>

<p>This is super useful for abstraction — you can swap out implementations without changing much code.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Multiple Interfaces</h2>
<p>C# doesn't support multiple inheritance with classes — but interfaces? Totally fine! 🎉</p>

<pre><code class="language-csharp">public interface IFlyable {
  void Fly();
}

public class Bird : IAnimal, IFlyable {
  public void Speak() {
    Console.WriteLine("Chirp");
  }

  public void Move() {
    Console.WriteLine("Hop");
  }

  public void Fly() {
    Console.WriteLine("Bird is flying");
  }
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Example</h2>
<p>Imagine you're building a payment system. You could create a <code>IPaymentProcessor</code> interface and implement it differently for CreditCard, PayPal, UPI, etc. Your main code doesn’t care *how* it works — it just trusts that each method exists and works correctly.</p>
`,
    proTip: "Interface names usually start with ‘I’ by convention (e.g., IAnimal, ILogger). It makes your code more readable and consistent.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public interface IShape {
  double Area();
}

public class Circle : IShape {
  public double Radius { get; set; }
  public double Area() => Math.PI * Radius * Radius;
}

IShape shape = new Circle { Radius = 5 };
Console.WriteLine(shape.Area());`
      }
    ]
  };
  case 'csharp-collections':
  return {
    slug: 'csharp-collections',
    title: 'Collections & Dictionaries',
    content: `
<p>Collections in C# are like special containers 📦 — they let you store and organize multiple values in a more powerful way than plain arrays. Need a growing list of names? Or a phonebook-style key-value store? Collections have your back.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. List&lt;T&gt; – A Resizable Array</h2>
<p>A <code>List&lt;T&gt;</code> is like a dynamic array. You can add, remove, sort — it’s your go-to for most use cases.</p>

<pre><code class="language-csharp">List&lt;string&gt; fruits = new List&lt;string&gt;();
fruits.Add("Apple");
fruits.Add("Mango");
fruits.Remove("Apple");

foreach (var fruit in fruits)
  Console.WriteLine(fruit);</code></pre>

<p>You don’t have to worry about the size like in arrays — Lists grow as needed. 📈</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Dictionary&lt;K,V&gt; – Key-Value Pairs</h2>
<p>Think of it like a mini-database where you look up values by a unique key, like a real-life dictionary. 🧠</p>

<pre><code class="language-csharp">Dictionary&lt;string, string&gt; capitals = new Dictionary&lt;string, string&gt;();
capitals["India"] = "New Delhi";
capitals["Japan"] = "Tokyo";

Console.WriteLine(capitals["India"]); // New Delhi</code></pre>

<p>Perfect for things like storing user IDs, configs, or mapping data.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. HashSet&lt;T&gt; – Unique Values Only</h2>
<p>Need a collection with no duplicates? Use <code>HashSet&lt;T&gt;</code>:</p>

<pre><code class="language-csharp">HashSet&lt;int&gt; uniqueIds = new HashSet&lt;int&gt;();
uniqueIds.Add(1);
uniqueIds.Add(1); // Won’t be added again</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Queue &amp; Stack</h2>
<p><strong>Queue</strong> works like a line at the coffee shop ☕ (First-In-First-Out).</p>
<pre><code class="language-csharp">Queue&lt;string&gt; orders = new Queue&lt;string&gt;();
orders.Enqueue("Order1");
orders.Enqueue("Order2");

Console.WriteLine(orders.Dequeue()); // Order1</code></pre>

<p><strong>Stack</strong> is like a stack of plates 🍽️ (Last-In-First-Out).</p>
<pre><code class="language-csharp">Stack&lt;string&gt; pages = new Stack&lt;string&gt;();
pages.Push("Page1");
pages.Push("Page2");

Console.WriteLine(pages.Pop()); // Page2</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Tip</h2>
<p>Use:</p>
<ul class="list-disc ml-6">
  <li><code>List&lt;T&gt;</code> when order matters and items can repeat.</li>
  <li><code>Dictionary&lt;K,V&gt;</code> when you need fast lookups with keys.</li>
  <li><code>HashSet&lt;T&gt;</code> when duplicates are a problem.</li>
  <li><code>Queue</code> for tasks in order, and <code>Stack</code> for undo/history features.</li>
</ul>
`,
    proTip: "All collection types are found in System.Collections.Generic. Always prefer the generic versions (like List<T>) over the old non-generic ones.",
    codeSamples: [
      {
        language: 'csharp',
        code: `Dictionary<string, int> scores = new Dictionary<string, int>();
scores["Alice"] = 85;
scores["Bob"] = 92;

foreach (var kv in scores)
  Console.WriteLine($"{kv.Key}: {kv.Value}");`
      }
    ]
  };
  case 'csharp-exceptions':
  return {
    slug: 'csharp-exceptions',
    title: 'Exception Handling',
    content: `
<p>Exceptions are C#'s way of saying, "Uh oh, something went wrong!" 💥 They help you deal with unexpected situations — like dividing by zero or trying to read a file that doesn't exist — without crashing your program.</p>

<p>Think of them as fire alarms 🚨. When triggered, they stop normal flow and let you handle the problem gracefully.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. try-catch Block</h2>
<p>Here’s the basic structure:</p>

<pre><code class="language-csharp">try {
  int x = 10;
  int y = 0;
  int result = x / y;
} catch (DivideByZeroException ex) {
  Console.WriteLine("You can't divide by zero!");
}</code></pre>

<p><code>try</code> is where the risky code goes. <code>catch</code> is where you recover when things go wrong.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Multiple Catch Blocks</h2>
<p>You can handle different types of exceptions separately:</p>

<pre><code class="language-csharp">try {
  // risky stuff
} catch (FormatException) {
  Console.WriteLine("Invalid format");
} catch (NullReferenceException) {
  Console.WriteLine("Something was null");
}</code></pre>

<p>This is like having different solutions for different problems.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. finally Block</h2>
<p><code>finally</code> runs no matter what — even if there’s no error.</p>

<pre><code class="language-csharp">try {
  // do something
} catch {
  // handle error
} finally {
  Console.WriteLine("This always runs");
}</code></pre>

<p>Use it for cleanup: closing files, releasing resources, etc.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Throwing Your Own Exception</h2>
<p>You can raise (throw) exceptions too:</p>

<pre><code class="language-csharp">if (age &lt; 0) {
  throw new ArgumentException("Age can't be negative");
}</code></pre>

<p>This is useful when you're writing your own rules.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Example</h2>
<p>Imagine you're building a login system. If a user enters an incorrect password or the database connection fails, exceptions help you show friendly error messages without showing the scary crash stack trace. 😊</p>
`,
    proTip: "Don’t overuse exceptions for normal logic (like checking if a file exists). Use them for truly exceptional cases — not everyday decisions.",
    codeSamples: [
      {
        language: 'csharp',
        code: `try {
  string input = Console.ReadLine();
  int number = int.Parse(input);
  Console.WriteLine($"You entered {number}");
} catch (FormatException) {
  Console.WriteLine("That wasn't a number!");
}`
      }
    ]
  };
  case 'csharp-linq':
  return {
    slug: 'csharp-linq',
    title: 'LINQ Basics',
    content: `
<p><strong>LINQ</strong> (Language Integrated Query) lets you filter, sort, and transform data in C# like you're asking questions in plain English. 🧠 Think of it as SQL + C# had a baby. You can use LINQ on arrays, lists, dictionaries — anything that’s enumerable.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Why LINQ?</h2>
<p>Say goodbye to loops and conditionals when you just want to find or shape data. LINQ gives you a clean, powerful way to work with collections.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Basic LINQ Query</h2>
<p>Here’s a basic example of using LINQ to find even numbers:</p>

<pre><code class="language-csharp">List&lt;int&gt; numbers = new List&lt;int&gt; { 1, 2, 3, 4, 5, 6 };

var evens = numbers.Where(n =&gt; n % 2 == 0);

foreach (var n in evens)
  Console.WriteLine(n);</code></pre>

<p><code>.Where()</code> filters the list, just like asking “Give me only even numbers”.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Other Useful LINQ Methods</h2>
<ul class="list-disc ml-6">
  <li><code>Select()</code> – Projects each item into a new form.</li>
  <li><code>OrderBy()</code> / <code>OrderByDescending()</code> – Sort items.</li>
  <li><code>FirstOrDefault()</code> – Get first match or default value.</li>
  <li><code>Count()</code>, <code>Sum()</code>, <code>Average()</code> – Aggregate data.</li>
</ul>

<pre><code class="language-csharp">var names = new List&lt;string&gt; { "Alice", "Bob", "Charlie" };

var nameLengths = names.Select(name =&gt; name.Length);
var sorted = names.OrderBy(name =&gt; name);

Console.WriteLine(nameLengths.Sum());</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. LINQ Query Syntax</h2>
<p>You can also write LINQ like SQL:</p>

<pre><code class="language-csharp">var longNames = from name in names
                where name.Length &gt; 3
                select name;</code></pre>

<p>This is called <strong>query syntax</strong>. You can use whichever style you prefer!</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Example</h2>
<p>Imagine you're building a course dashboard. You could use LINQ to:</p>
<ul class="list-disc ml-6">
  <li>Find all completed courses</li>
  <li>Sort them by score</li>
  <li>Get the top 3</li>
</ul>

<pre><code class="language-csharp">var topCourses = courses
  .Where(c =&gt; c.IsCompleted)
  .OrderByDescending(c =&gt; c.Score)
  .Take(3);</code></pre>

<p>That’s clean, powerful, and readable — all thanks to LINQ! ✨</p>
`,
    proTip: "You need <code>using System.Linq;</code> to use LINQ methods. Always prefer LINQ over manual loops when working with data—it’s more expressive and less error-prone.",
    codeSamples: [
      {
        language: 'csharp',
        code: `List<string> fruits = new List<string> { "Apple", "Mango", "Banana", "Orange" };

var filtered = fruits
  .Where(f => f.Length > 5)
  .OrderBy(f => f);

foreach (var fruit in filtered)
  Console.WriteLine(fruit);`
      }
    ]
  };
  case 'csharp-files':
  return {
    slug: 'csharp-files',
    title: 'File Handling',
    content: `
<p>File handling in C# is like teaching your app to read and write journals 📓. Whether you want to save user notes, log errors, or store game scores — you’ll often need to deal with files.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Writing to a File</h2>
<p><code>File.WriteAllText()</code> is the easiest way to write text to a file:</p>

<pre><code class="language-csharp">string path = "log.txt";
File.WriteAllText(path, "IgKnight launch successful! 🚀");</code></pre>

<p>This will create the file if it doesn’t exist or overwrite it if it does.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Appending to a File</h2>
<p>Want to add more info without deleting the old stuff?</p>

<pre><code class="language-csharp">File.AppendAllText(path, "\\nMore logs coming in...");</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Reading from a File</h2>
<p>To read the whole file content at once:</p>

<pre><code class="language-csharp">string content = File.ReadAllText(path);
Console.WriteLine(content);</code></pre>

<p>This is perfect for small to medium files.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Reading Line by Line</h2>
<p>For large files, line-by-line reading is safer:</p>

<pre><code class="language-csharp">foreach (string line in File.ReadLines(path)) {
  Console.WriteLine(line);
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. File Exists Check</h2>
<p>Before reading or writing, it’s good to check if the file exists:</p>

<pre><code class="language-csharp">if (File.Exists(path)) {
  Console.WriteLine("File is there!");
} else {
  Console.WriteLine("No file yet!");
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">6. Real-Life Example</h2>
<p>Imagine you're building a note-taking app. You could:</p>
<ul class="list-disc ml-6">
  <li>Save each note in a separate .txt file</li>
  <li>Read them back when the user reopens the app</li>
  <li>Append new ideas without overwriting</li>
</ul>

<p>File handling lets your app remember things between sessions — kind of like a memory card for your logic. 💾</p>
`,
    proTip: "Always handle exceptions like <code>FileNotFoundException</code> or <code>IOException</code> when working with files — things can go wrong (e.g. missing file, permission issues).",
    codeSamples: [
      {
        language: 'csharp',
        code: `string path = "notes.txt";

if (!File.Exists(path)) {
  File.WriteAllText(path, "First note!");
} else {
  File.AppendAllText(path, "\\nAnother thought...");
}

string content = File.ReadAllText(path);
Console.WriteLine("Current notes: " + content);`
      }
    ]
  };
  case 'csharp-async':
  return {
    slug: 'csharp-async',
    title: 'Asynchronous Programming',
    content: `
<p>Async programming in C# lets your app do more than one thing at a time — like a multitasker with superpowers 🦸. It’s how you keep your app smooth and responsive even while doing heavy work like downloading files or accessing APIs.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Why Async?</h2>
<p>Imagine you tap a “Download” button in an app, and everything freezes until it's done 😩. That’s what happens without async. With async, the download happens in the background and your app stays usable.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. The Magic Words: <code>async</code> & <code>await</code></h2>
<p>Just add <code>async</code> to your method and use <code>await</code> on any long-running task:</p>

<pre><code class="language-csharp">public async Task FetchDataAsync() {
  Console.WriteLine("Fetching data...");
  string data = await File.ReadAllTextAsync("data.txt");
  Console.WriteLine("Data: " + data);
}</code></pre>

<p><code>await</code> tells C# to “pause here and come back when ready” – but without blocking the whole app!</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Common Async Methods</h2>
<ul class="list-disc ml-6">
  <li><code>HttpClient.GetStringAsync()</code> – for web requests</li>
  <li><code>File.ReadAllTextAsync()</code> – for reading files</li>
  <li><code>Task.Delay()</code> – to simulate waiting</li>
</ul>

<pre><code class="language-csharp">await Task.Delay(2000); // Waits 2 seconds without freezing the app</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Calling Async Methods</h2>
<p>You can only use <code>await</code> inside an <code>async</code> method. If you're in <code>Main()</code>, use:</p>

<pre><code class="language-csharp">await FetchDataAsync(); // if inside another async method</code></pre>

<p>For console apps using <code>Main</code> as async (C# 7.1+):</p>

<pre><code class="language-csharp">static async Task Main(string[] args) {
  await FetchDataAsync();
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Real-Life Example</h2>
<p>Imagine you're building a learning app like IgKnight. When loading a user's progress or fetching quiz questions from an API, you’d use async to keep the UI buttery smooth 🍰.</p>

<pre><code class="language-csharp">HttpClient client = new HttpClient();
string response = await client.GetStringAsync("https://api.ignight.io/quiz");
Console.WriteLine("Quiz data: " + response);</code></pre>

<p>No lag. No freezing. Just fast, modern UX 💡.</p>
`,
    proTip: "Avoid <code>.Result</code> or <code>.Wait()</code> on async methods — they block the thread and can cause deadlocks. Always <code>await</code> properly inside an <code>async</code> method.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public async Task LoadDashboardAsync() {
  Console.WriteLine("Loading...");
  await Task.Delay(1500); // Simulate loading
  Console.WriteLine("Dashboard Ready ✅");
}`
      }
    ]
  };
  case 'csharp-advanced':
  return {
    slug: 'csharp-advanced',
    title: 'Advanced C# Tips',
    content: `
<p>By now, you know your way around classes, loops, and methods. Let’s step it up 🔥. These advanced C# features make your code cleaner, faster, and smarter — like hidden power-ups in a game 🎮.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Lambda Expressions</h2>
<p>Lambdas are super short, inline functions. Great for filtering, mapping, and callbacks:</p>

<pre><code class="language-csharp">List&lt;int&gt; nums = new List&lt;int&gt; { 1, 2, 3, 4 };
var evens = nums.Where(n => n % 2 == 0);</code></pre>

<p><code>n => n % 2 == 0</code> is a lambda. Think of it as a mini one-line method.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Null-Coalescing Operator (??)</h2>
<p>This returns a fallback if the value is <code>null</code>:</p>

<pre><code class="language-csharp">string name = userName ?? "Guest";</code></pre>

<p>If <code>userName</code> is null, <code>name</code> becomes "Guest". Handy for defaults!</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Ternary Operator</h2>
<p>Quick <code>if-else</code> for assignments:</p>

<pre><code class="language-csharp">string role = isAdmin ? "Admin" : "User";</code></pre>

<p>Reads like: “If <code>isAdmin</code>, set role to Admin, otherwise User.”</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Tuples</h2>
<p>Need to return multiple values from a method? Use a tuple!</p>

<pre><code class="language-csharp">(string name, int score) GetPlayer() {
  return ("Jay", 95);
}</code></pre>

<p>You can access them like <code>player.name</code> and <code>player.score</code>. It's like a quick custom class.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Expression-bodied Members</h2>
<p>For short methods or properties, skip the braces:</p>

<pre><code class="language-csharp">public int Square(int x) => x * x;</code></pre>

<p>Clean and sharp. Perfect for one-liners.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">6. Pattern Matching</h2>
<p>Like switch statements on steroids 💪:</p>

<pre><code class="language-csharp">object data = 42;
if (data is int number) {
  Console.WriteLine($"It's a number: {number}");
}</code></pre>

<p>This checks and assigns in one go.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">7. Records (C# 9+)</h2>
<p>Need a quick data class with built-in equality and immutability?</p>

<pre><code class="language-csharp">public record User(string Name, int Age);</code></pre>

<p>No need to write constructors, getters, or equality logic. Great for clean models in APIs.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">Real-Life Use</h2>
<p>In a learning platform like IgKnight, advanced features help with:</p>
<ul class="list-disc ml-6">
  <li>Filtering course lists with lambdas</li>
  <li>Sending multiple return values using tuples</li>
  <li>Creating clean, testable models with records</li>
</ul>
`,
    proTip: "Don’t overuse every fancy feature. Use what improves clarity. Simpler is often better — write code your future self will thank you for.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public record Course(string Title, int Duration);

var courses = new List<Course> {
  new("C#", 5),
  new("JavaScript", 4)
};

var shortCourses = courses.Where(c => c.Duration < 5);
shortCourses.ToList().ForEach(c => Console.WriteLine(c.Title));`
      }
    ]
  };
  case 'csharp-best-practices':
  return {
    slug: 'csharp-best-practices',
    title: 'Best Practices',
    content: `
<p>You've learned the tools — now it's time to code like a pro 💼. These C# best practices help you write cleaner, safer, and more maintainable code, whether you're building an app, API, or part of a big team.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">1. Use Meaningful Names</h2>
<p>Always name your variables, methods, and classes clearly. Avoid vague names like <code>temp</code> or <code>data</code>:</p>

<pre><code class="language-csharp">// ❌ Bad
int d = 100;

// ✅ Good
int downloadLimitInMB = 100;</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">2. Keep Methods Short</h2>
<p>Each method should do one thing — and do it well. If it's getting long, split it into helper methods.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">3. Use Access Modifiers</h2>
<p>Mark things <code>private</code>, <code>protected</code>, or <code>public</code> explicitly. This avoids accidental usage and improves security.</p>

<pre><code class="language-csharp">private int score;
public void UpdateScore(int newScore) { ... }</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">4. Prefer <code>var</code> When the Type is Obvious</h2>
<p><code>var</code> makes code less noisy, but don’t overuse it for unclear types.</p>

<pre><code class="language-csharp">var user = new User();       // ✅ Clear
var x = DoSomethingWeird(); // ❌ What is x?</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">5. Avoid Hardcoding Values</h2>
<p>Don’t sprinkle magic numbers or strings everywhere. Use constants or config files.</p>

<pre><code class="language-csharp">// ❌ Bad
if (score > 90) { ... }

// ✅ Good
const int HighScoreThreshold = 90;
if (score > HighScoreThreshold) { ... }</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">6. Catch Specific Exceptions</h2>
<p>Avoid generic <code>catch (Exception)</code> unless you're logging or rethrowing:</p>

<pre><code class="language-csharp">try {
  File.ReadAllText("data.txt");
} catch (FileNotFoundException ex) {
  Console.WriteLine("File missing!");
}</code></pre>

<h2 class="text-xl mt-6 mb-2 font-semibold">7. Use Async for I/O Operations</h2>
<p>Reading files, hitting APIs, or accessing databases? Use <code>async/await</code> to keep your app smooth.</p>

<h2 class="text-xl mt-6 mb-2 font-semibold">8. Follow SOLID Principles (Advanced)</h2>
<p>As you grow, learn SOLID — five design principles that lead to great OOP architecture.</p>
<ul class="list-disc ml-6">
  <li><strong>S</strong>: Single Responsibility</li>
  <li><strong>O</strong>: Open/Closed</li>
  <li><strong>L</strong>: Liskov Substitution</li>
  <li><strong>I</strong>: Interface Segregation</li>
  <li><strong>D</strong>: Dependency Inversion</li>
</ul>

<h2 class="text-xl mt-6 mb-2 font-semibold">Real-Life Tip</h2>
<p>In a platform like IgKnight, writing clean, consistent code means fewer bugs and faster teamwork. Best practices aren’t just for interviews — they’re for scalable apps.</p>
`,
    proTip: "Always write code like someone else will read it — because future you is that someone.",
    codeSamples: [
      {
        language: 'csharp',
        code: `public class QuizService {
  private const int MaxRetries = 3;

  public async Task<string> GetQuizAsync() {
    try {
      return await File.ReadAllTextAsync("quiz.json");
    } catch (FileNotFoundException) {
      return "No quiz available.";
    }
  }
}`
      }
    ]
  };
        
        default:
      return undefined;
    }
}