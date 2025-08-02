import"./chunk-EJUJSVO6.js";var t=[{id:"python-introduction",title:"Introduction to Python",slug:"python-introduction"},{id:"python-variables",title:"Variables & Data Types",slug:"python-syntax-variables"},{id:"python-conditions",title:"Conditional Statements",slug:"python-conditions"},{id:"python-loops",title:"Loops in Python",slug:"python-loops"},{id:"python-functions",title:"Functions & Parameters",slug:"python-functions"},{id:"python-lists-tuples",title:"Lists & Tuples",slug:"python-lists-tuples"},{id:"python-dictionaries",title:"Dictionaries in Python",slug:"python-dictionaries"},{id:"python-strings",title:"Working with Strings",slug:"python-strings"},{id:"python-modules",title:"Modules & Packages",slug:"python-modules"},{id:"python-files",title:"File Handling",slug:"python-files"},{id:"python-exceptions",title:"Exception Handling",slug:"python-exceptions"},{id:"python-oop",title:"Object-Oriented Python",slug:"python-oop"},{id:"python-advanced",title:"Advanced Python Tips",slug:"python-advanced"},{id:"python-best-practices",title:"Best Practices",slug:"python-best-practices"}];function o(e){switch(e){case"python-introduction":return{slug:"python-introduction",title:"Introduction to Python",content:`
<p>Python is one of the most popular programming languages today. It's loved for its simplicity, readability, and versatility. Whether you're building websites, automating tasks, crunching data, or training AI models \u2014 Python has got your back.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F525} Why Python?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Beginner-friendly:</strong> Its syntax is like writing English.</li>
  <li><strong>Flexible:</strong> From web development to machine learning to scripting \u2014 Python does it all.</li>
  <li><strong>Massive community:</strong> Tons of libraries, tutorials, and help available online.</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9E0} Real-Life Analogy</h3>
<p>Think of Python as the \u201CSwiss Army Knife\u201D of programming \u2014 it's not always the fastest tool, but it's insanely useful and easy to handle.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F680} Where is Python Used?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Web Development:</strong> With frameworks like Django and Flask</li>
  <li><strong>Data Science:</strong> NumPy, Pandas, Matplotlib, and Jupyter</li>
  <li><strong>AI/ML:</strong> TensorFlow, PyTorch</li>
  <li><strong>Automation & Scripting:</strong> For repetitive tasks, file handling, web scraping</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F50D} Fun Fact</h3>
<p>Python was named after the British comedy group \u201CMonty Python\u201D \u2014 not the snake \u{1F40D}.</p>
        `,proTip:"Try using Python in an online playground like Replit or Jupyter Notebook before installing anything locally.",codeSamples:[{language:"python",code:`
# Your first Python code
print("Hello, IgKnight!")
            `},{language:"python",code:`
# Simple math
a = 10
b = 5
print("Sum is:", a + b)
            `}]};case"python-syntax-variables":return{slug:"python-syntax-variables",title:"Python Syntax & Variables",content:`
<p>Python's syntax is clean and beginner-friendly. You don't need curly braces <code>{ }</code> or semicolons <code>;</code> \u2014 indentation and simplicity rule here.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u270D\uFE0F Writing Python</h3>
<p>Each line of code does something meaningful. Indentation (spaces/tabs at the beginning) is how Python defines code blocks (like inside loops or functions).</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F524} Declaring Variables</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Python is dynamically typed \u2014 you don\u2019t need to declare the data type.</li>
  <li>Just assign a value using <code>=</code> and Python figures it out.</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4E6} Variable Naming Rules</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Can include letters, numbers, and underscores (e.g., <code>user_name</code>)</li>
  <li>Cannot start with a number</li>
  <li>Case-sensitive (<code>age</code> and <code>Age</code> are different)</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4CA} Common Data Types</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>int</code>: Whole numbers</li>
  <li><code>float</code>: Decimal numbers</li>
  <li><code>str</code>: Text (strings)</li>
  <li><code>bool</code>: True or False</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F3AF} Example</h3>
<p>Here's how you'd declare some variables in Python:</p>
        `,proTip:"Use descriptive variable names \u2014 avoid single-letter variables unless you are writing a quick loop.",codeSamples:[{language:"python",code:`
# Variable examples
name = "Alice"
age = 25
height = 5.6
is_student = True

print(name, age, height, is_student)
            `},{language:"python",code:`
# Bad vs Good
a = "John"         # \u274C Avoid (not clear)
user_name = "John" # \u2705 Better
            `}]};case"python-loops":return{slug:"python-loops",title:"Loops in Python",content:`
<p>Loops let you execute a block of code multiple times. They are one of the most important tools in programming \u2014 especially useful when working with lists, user input, files, or repetitive tasks.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F300} Why Use Loops?</h3>
<p>Imagine printing "Hello" 100 times \u2014 doing it manually would be a nightmare. With a loop, you can do it in just 2\u20133 lines. Loops save time and make your code much cleaner.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F501} Types of Loops in Python</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong><code>for</code> loop</strong> \u2014 When you know what you're looping through (like a list, string, or range).</li>
  <li><strong><code>while</code> loop</strong> \u2014 When you want to keep looping until something changes (like waiting for a user to guess the right number).</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4A1} Real-Life Analogy</h3>
<p><code>for</code> loop is like a to-do list: you check off each item in order.<br>
<code>while</code> loop is like watching Netflix: you keep watching episodes <i>while</i> you're not sleepy.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9ED} The <code>for</code> Loop</h3>
<p><code>for</code> loops are used to iterate over sequences like lists, tuples, dictionaries, strings, or even ranges of numbers.</p>
<p><strong>Syntax:</strong> <code>for item in sequence:</code></p>
<ul class="list-disc list-inside text-gray-300">
  <li>Automatically stops after the last item</li>
  <li>No need to manually increment a counter</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9EA} The <code>while</code> Loop</h3>
<p><code>while</code> loops keep running <strong>as long as</strong> the condition is true.</p>
<p><strong>Syntax:</strong> <code>while condition:</code></p>
<ul class="list-disc list-inside text-gray-300">
  <li>Make sure the condition eventually becomes false, or it\u2019ll loop forever!</li>
  <li>Usually used with counters, user input, or unknown lengths</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F6E0} Useful Keywords Inside Loops</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>break</code> \u2014 Stop the loop immediately</li>
  <li><code>continue</code> \u2014 Skip the current iteration and go to the next one</li>
  <li><code>else</code> \u2014 Optional block that runs after the loop finishes (only if loop wasn\u2019t broken)</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9E0} Common Mistakes to Avoid</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Forgetting to update variables in <code>while</code> loops (causes infinite loop)</li>
  <li>Using <code>break</code> carelessly \u2014 can skip important steps</li>
  <li>Modifying a list while looping through it \u2014 use <code>list.copy()</code> or <code>range(len(list))</code> instead</li>
</ul>
        `,proTip:"Use `for` loops when dealing with a sequence, and `while` loops when waiting on a condition \u2014 and always double-check for infinite loops!",codeSamples:[{language:"python",code:`
# FOR loop - print each item in a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)
            `},{language:"python",code:`
# FOR loop using range()
for i in range(1, 6):
    print("Number:", i)
            `},{language:"python",code:`
# WHILE loop - keep looping while condition is true
count = 1

while count <= 3:
    print("Counting:", count)
    count += 1
            `},{language:"python",code:`
# Using break and continue
for i in range(5):
    if i == 3:
        break  # Exit early when i == 3
    if i == 1:
        continue  # Skip when i == 1
    print(i)
            `},{language:"python",code:`
# WHILE loop with user input
password = ""

while password != "secret123":
    password = input("Enter password: ")

print("Access granted!")
            `}]};case"python-conditions":return{slug:"python-conditions",title:"Conditional Statements",content:`
<p>Conditional statements help you make decisions in code. Python supports <code>if</code>, <code>elif</code>, and <code>else</code> to handle different conditions \u2014 just like everyday decision-making.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F50D} Basic Syntax</h3>
<p>Use <code>if</code> to check a condition. If it\u2019s true, the block runs. Otherwise, try <code>elif</code> (else if), and finally <code>else</code> if nothing else matches.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9E0} Operators You\u2019ll Use</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>==</code>: Equals</li>
  <li><code>!=</code>: Not equal</li>
  <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>: Comparison</li>
  <li><code>and</code>, <code>or</code>, <code>not</code>: Logical operators</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F3AF} Real Example</h3>
<p>Let\u2019s say you\u2019re checking someone's age to see if they can vote:</p>
        `,proTip:"Keep your indentation consistent! Python relies on it \u2014 4 spaces is the standard.",codeSamples:[{language:"python",code:`
age = 20

if age >= 18:
    print("You can vote!")
elif age > 0:
    print("You are too young to vote.")
else:
    print("Invalid age.")
            `},{language:"python",code:`
# Using multiple conditions
user = "admin"
logged_in = True

if user == "admin" and logged_in:
    print("Welcome, admin!")
else:
    print("Access denied.")
            `}]};case"python-functions":return{slug:"python-functions",title:"Functions in Python",content:`
<p>Functions are reusable blocks of code that let you group related logic together and give it a name. Instead of repeating code again and again, you define it once as a function and then "call" it whenever you need it.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9F1} Why Use Functions?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Organize your code</li>
  <li>Avoid repetition (DRY: Don\u2019t Repeat Yourself)</li>
  <li>Make your program easier to understand and maintain</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F527} Defining a Function</h3>
<p>You define a function using the <code>def</code> keyword, followed by a name and parentheses:</p>
<pre class="bg-gray-800 p-2 rounded text-sm text-white"><code>def greet():
    print("Hello there!")</code></pre>

<p>This defines the function. To actually run it, you need to <strong>call</strong> it:</p>
<pre class="bg-gray-800 p-2 rounded text-sm text-white"><code>greet()</code></pre>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4E6} Parameters and Arguments</h3>
<p>Functions can accept inputs (called <strong>parameters</strong>) so they can do more dynamic tasks:</p>
<pre class="bg-gray-800 p-2 rounded text-sm text-white"><code>def greet(name):
    print("Hello", name)</code></pre>
<p>Here, <code>name</code> is a parameter. When calling the function, you pass an <strong>argument</strong>:</p>
<pre class="bg-gray-800 p-2 rounded text-sm text-white"><code>greet("Alice")</code></pre>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F504} Returning Values</h3>
<p>Functions can give back a value using the <code>return</code> keyword:</p>
<pre class="bg-gray-800 p-2 rounded text-sm text-white"><code>def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # 7</code></pre>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F510} Scope: Local vs Global Variables</h3>
<p>Variables created inside a function only exist there (they\u2019re <strong>local</strong>). You can\u2019t use them outside the function.</p>
<p>Variables outside a function are <strong>global</strong> and can be accessed from anywhere \u2014 but be careful not to overwrite them unintentionally!</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F31F} Real-Life Analogy</h3>
<p>Think of a function like a blender \u2014 you define what it does (blend ingredients), then call it when needed (make a smoothie) and optionally get something back (smoothie \u{1F353}).</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F6E0} Advanced (But Useful!) Concepts</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Default values:</strong> Parameters can have default values</li>
  <li><strong>*args and **kwargs:</strong> Accept flexible numbers of arguments</li>
  <li><strong>Lambda:</strong> One-line anonymous functions for quick tasks</li>
</ul>
        `,proTip:'Always give your functions meaningful names! Instead of "doStuff()", use "calculate_discount()" or "fetch_user_data()" \u2014 makes your code much clearer.',codeSamples:[{language:"python",code:`
# Basic function
def greet():
    print("Hi there!")

greet()
            `},{language:"python",code:`
# Function with parameters
def greet(name):
    print("Welcome,", name)

greet("Nina")
            `},{language:"python",code:`
# Function with default parameters
def welcome(user="Guest"):
    print("Hello,", user)

welcome()
welcome("Alex")
            `},{language:"python",code:`
# Lambda (anonymous function)
square = lambda x: x * x
print(square(6))  # 36
            `}]};case"python-lists-tuples":return{slug:"python-lists-tuples",title:"Lists & Tuples",content:`
<p>In Python, <strong>lists</strong> and <strong>tuples</strong> are used to store collections of items. They\u2019re like containers that can hold multiple values \u2014 great when you want to group things together.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9FA} What is a List?</h3>
<p>A <strong>list</strong> is a flexible, changeable (mutable) collection. Think of it as a to-do list: you can add, remove, or update items anytime.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u2705 Common List Operations</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Create: <code>fruits = ['apple', 'banana', 'cherry']</code></li>
  <li>Access: <code>fruits[0]</code> \u2192 'apple'</li>
  <li>Update: <code>fruits[1] = 'mango'</code></li>
  <li>Add: <code>fruits.append('orange')</code></li>
  <li>Remove: <code>fruits.remove('banana')</code></li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4E6} What is a Tuple?</h3>
<p>A <strong>tuple</strong> is like a list, but <strong>immutable</strong> \u2014 once created, it can\u2019t be changed. Use it when the data shouldn\u2019t be edited (like coordinates).</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F510} Tuple Basics</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Create: <code>point = (3, 4)</code></li>
  <li>Access: <code>point[0]</code> \u2192 3</li>
  <li>Can\u2019t modify: <code>point[0] = 10</code> \u274C (throws error)</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F50D} When to Use What?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 Use <strong>lists</strong> when data will change (shopping carts, scores)</li>
  <li>\u2705 Use <strong>tuples</strong> when data must stay constant (coordinates, fixed configs)</li>
</ul>
    `,proTip:"If you ever need to convert between them, use list() and tuple(). Like: tuple(my_list) or list(my_tuple)",codeSamples:[{language:"python",code:`
# List example
groceries = ['milk', 'eggs', 'bread']
groceries.append('butter')
print(groceries)
        `},{language:"python",code:`
# Tuple example
location = (52.52, 13.40)
print("Latitude:", location[0])
        `}]};case"python-dictionaries":return{slug:"python-dictionaries",title:"Dictionaries",content:`
<p>In Python, a <strong>dictionary</strong> is like a mini-database that stores data in <strong>key-value</strong> pairs. Instead of using positions like in lists, you use <em>names</em> (keys) to access values.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F511} What is a Dictionary?</h3>
<p>Think of it like a real dictionary: you look up a word (key) to get its meaning (value).</p>
<p>Example: <code>{ "name": "Alice", "age": 25 }</code></p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4A1} Why Use Dictionaries?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>They\u2019re perfect for labeled data \u2014 like a user profile or config.</li>
  <li>They\u2019re fast for lookups, updates, and deletions using keys.</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F6E0}\uFE0F Common Dictionary Operations</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Create: <code>person = {"name": "Alice", "age": 25}</code></li>
  <li>Access: <code>person["name"]</code> \u2192 'Alice'</li>
  <li>Update: <code>person["age"] = 26</code></li>
  <li>Add: <code>person["city"] = "New York"</code></li>
  <li>Delete: <code>del person["age"]</code></li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F504} Looping Through a Dictionary</h3>
<p>You can loop over keys and values easily:</p>
<pre class="bg-gray-800 text-white p-2 rounded text-sm">for key, value in person.items():
  print(key, "\u2192", value)</pre>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F6AB} Safe Access with get()</h3>
<p>Use <code>dict.get("key")</code> to avoid errors if the key doesn\u2019t exist. It returns <code>None</code> or a default value.</p>
<p>Example: <code>person.get("email", "Not provided")</code></p>
    `,proTip:"Dictionaries are unordered in versions below Python 3.7. From Python 3.7+, they preserve insertion order!",codeSamples:[{language:"python",code:`
# Creating a dictionary
user = {
  "username": "coolcoder",
  "followers": 120,
  "verified": True
}

# Updating a key
user["followers"] += 30

# Safe access
email = user.get("email", "Not provided")
print(email)
        `}]};case"python-strings":return{slug:"python-strings",title:"Strings in Python",content:`
<p>In Python, a <strong>string</strong> is just a sequence of characters \u2014 like words, sentences, or even emojis! They're one of the most used data types in any program.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9F5} What is a String?</h3>
<p>A string is text wrapped in quotes: <code>"Hello"</code>, <code>'World'</code>, or even <code>"""Multi-line string"""</code>.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F3AF} Real-World Use</h3>
<p>Think about user names, messages, tweets, or emails \u2014 they\u2019re all stored and handled as strings in code.</p>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F6E0}\uFE0F Common String Operations</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Concatenation: <code>"Hello" + " World"</code></li>
  <li>Length: <code>len("Hello")</code> \u2192 5</li>
  <li>Access: <code>msg[0]</code> \u2192 first character</li>
  <li>Slicing: <code>msg[1:4]</code> \u2192 characters from index 1 to 3</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F9FC} String Methods</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>.lower()</code> \u2013 Convert to lowercase</li>
  <li><code>.upper()</code> \u2013 Convert to uppercase</li>
  <li><code>.strip()</code> \u2013 Remove surrounding spaces</li>
  <li><code>.replace("a", "b")</code> \u2013 Replace characters</li>
  <li><code>.split()</code> \u2013 Break string into a list</li>
</ul>

<h3 class="text-lg font-semibold mt-4 mb-2 text-white">\u{1F4E6} f-Strings: Easy Formatting</h3>
<p>f-Strings let you insert variables into strings easily:</p>
<pre class="bg-gray-800 text-white p-2 rounded text-sm">
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old.")
</pre>
    `,proTip:"Strings are immutable \u2014 you can\u2019t change a character inside a string, but you can build a new string using slicing or .replace().",codeSamples:[{language:"python",code:`
# Basic string examples
message = "  Welcome to IgKnight!  "
print(message.strip().upper())

# f-String formatting
user = "John"
score = 99
print(f"Hey {user}, your score is {score}!")
        `}]};case"python-modules":return{slug:"python-modules",title:"Modules & Packages",content:`
      <p>As your Python code grows bigger, you don't want to keep everything in one massive file. That's where <strong>modules</strong> and <strong>packages</strong> come in \u2014 they're how Python helps you organize your code like a pro.</p>

      <h3>\u{1F539} What's a Module?</h3>
      <p>A <strong>module</strong> is just a single Python file (.py) that contains variables, functions, or classes you want to reuse elsewhere.</p>
      <p>For example, imagine a file called <code>math_utils.py</code> with this content:</p>

      <pre><code>def square(x):
    return x * x

pi = 3.14</code></pre>

      <p>You can use this in another file by importing it:</p>
      <pre><code>import math_utils

print(math_utils.square(4))   # \u27A4 16
print(math_utils.pi)          # \u27A4 3.14</code></pre>

      <h3>\u{1F539} What\u2019s a Package?</h3>
      <p>A <strong>package</strong> is a folder that contains multiple related modules \u2014 kind of like a folder of utilities.</p>
      <p>To make a folder a package, you just add a special file called <code>__init__.py</code> inside it. Even if it\u2019s empty, Python recognizes it as a package.</p>

      <p>Example structure:</p>
      <pre><code>utilities/
\u251C\u2500\u2500 __init__.py
\u251C\u2500\u2500 math_utils.py
\u2514\u2500\u2500 string_utils.py</code></pre>

      <p>And you can import like this:</p>
      <pre><code>from utilities import math_utils
print(math_utils.square(5))</code></pre>

      <h3>\u{1F9E0} Why Use Them?</h3>
      <ul class="list-disc pl-6">
        <li>Keep your code clean and organized</li>
        <li>Reuse logic across files and projects</li>
        <li>Split features into meaningful chunks (like auth, db, UI, etc.)</li>
      </ul>

      <h3>\u{1F310} Built-in & External Modules</h3>
      <p>Python comes with tons of built-in modules (like <code>math</code>, <code>random</code>, <code>datetime</code>) and you can install external ones using <code>pip</code>.</p>

      <pre><code>import random
print(random.randint(1, 10))</code></pre>

      <p>Want to use an external module?</p>
      <pre><code>pip install requests</code></pre>
      <pre><code>import requests
response = requests.get('https://api.example.com')</code></pre>

      <h3>\u{1F4E6} Pro Tip: Use Aliases</h3>
      <pre><code>import math_utils as m
print(m.square(3))</code></pre>
      <p>Aliases make your imports shorter and cleaner.</p>
    `,proTip:"Use modules and packages early \u2014 even for small projects. It makes scaling and maintaining your code 10x easier.",codeSamples:[{language:"python",code:`# math_utils.py
def add(a, b):
    return a + b`},{language:"python",code:`# main.py
import math_utils

print(math_utils.add(10, 5))  # Output: 15`}]};case"python-files":return{slug:"python-files",title:"File Handling",content:`
      <p>In real-world apps, you often need to read from or write to files \u2014 whether it\u2019s a config file, user data, or logs. Python makes this super easy with built-in file handling tools.</p>

      <h3>\u{1F4C2} Opening a File</h3>
      <p>Use the <code>open()</code> function:</p>
      <pre><code>file = open('notes.txt', 'r')</code></pre>
      <ul class="list-disc pl-6">
        <li><code>'r'</code> \u2013 Read (default)</li>
        <li><code>'w'</code> \u2013 Write (overwrites if exists)</li>
        <li><code>'a'</code> \u2013 Append (adds to end)</li>
        <li><code>'x'</code> \u2013 Create (fails if exists)</li>
        <li><code>'b'</code> \u2013 Binary mode (add to above)</li>
      </ul>

      <h3>\u{1F4D6} Reading from Files</h3>
      <pre><code>file = open('notes.txt', 'r')
content = file.read()
print(content)
file.close()</code></pre>

      <p>Better way? Use <strong><code>with</code></strong> \u2014 it auto-closes:</p>
      <pre><code>with open('notes.txt', 'r') as file:
    print(file.read())</code></pre>

      <h3>\u270D Writing to Files</h3>
      <pre><code>with open('notes.txt', 'w') as file:
    file.write('Hello IgKnight!')</code></pre>

      <p>To add instead of overwrite:</p>
      <pre><code>with open('notes.txt', 'a') as file:
    file.write('\\nMore lines...')</code></pre>

      <h3>\u{1F9EA} Useful Read Methods</h3>
      <ul class="list-disc pl-6">
        <li><code>read()</code> \u2013 Entire content</li>
        <li><code>readline()</code> \u2013 One line</li>
        <li><code>readlines()</code> \u2013 List of lines</li>
      </ul>

      <h3>\u{1F510} Working with Files Safely</h3>
      <p>Always use <code>with open(...) as file</code> to avoid issues like memory leaks or locked files.</p>

      <h3>\u{1F4E6} Where Files Are Stored?</h3>
      <p>If you use just a filename like <code>'data.txt'</code>, it\u2019ll read/write in the current working directory. Use full paths if needed.</p>
    `,proTip:"Always use the <code>with</code> block when working with files. It saves you from forgetting to close files and prevents resource leaks.",codeSamples:[{language:"python",code:`# Writing to a file
with open('example.txt', 'w') as f:
    f.write('Hello, IgKnight!')`},{language:"python",code:`# Reading from a file
with open('example.txt', 'r') as f:
    print(f.read())`}]};case"python-exceptions":return{slug:"python-exceptions",title:"Exception Handling",content:`
      <p>When your code runs into unexpected problems \u2014 like dividing by zero, missing files, or wrong user input \u2014 Python raises <strong>exceptions</strong>. Instead of crashing, you can handle these errors gracefully using <code>try</code> and <code>except</code>.</p>

      <h3>\u26A0\uFE0F What Is an Exception?</h3>
      <p>An exception is a runtime error that stops your program unless you handle it. Example:</p>
      <pre><code>num = int("abc")  # This raises a ValueError</code></pre>

      <h3>\u2705 Using try-except</h3>
      <p>Wrap risky code in a <code>try</code> block, and handle errors in <code>except</code>:</p>
      <pre><code>try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero!")</code></pre>

      <h3>\u{1F3AF} Catching Specific Errors</h3>
      <p>You can catch different exceptions separately:</p>
      <pre><code>try:
    x = int("abc")
except ValueError:
    print("Not a valid number!")</code></pre>

      <h3>\u{1F4E6} Catch-All (Not Recommended)</h3>
      <p>You can catch anything \u2014 but don\u2019t overuse it:</p>
      <pre><code>try:
    risky_code()
except Exception as e:
    print("Something went wrong:", e)</code></pre>

      <h3>\u{1F9FC} Finally Block</h3>
      <p><code>finally</code> runs no matter what \u2014 great for cleanup:</p>
      <pre><code>try:
    f = open("data.txt")
    # do stuff
except FileNotFoundError:
    print("File not found.")
finally:
    print("Done trying.")</code></pre>

      <h3>\u{1F680} Raising Your Own Exceptions</h3>
      <p>You can raise errors manually when something\u2019s wrong:</p>
      <pre><code>age = -5
if age &lt; 0:
    raise ValueError("Age can't be negative!")</code></pre>

      <h3>\u{1F50D} Common Exceptions</h3>
      <ul class="list-disc pl-6">
        <li><code>ZeroDivisionError</code> \u2013 dividing by zero</li>
        <li><code>ValueError</code> \u2013 wrong type (e.g. converting "abc" to int)</li>
        <li><code>TypeError</code> \u2013 operation on wrong data types</li>
        <li><code>FileNotFoundError</code> \u2013 file doesn\u2019t exist</li>
        <li><code>IndexError</code> \u2013 accessing out-of-range index</li>
      </ul>
    `,proTip:"Don\u2019t hide all errors with a generic <code>except</code>. Be specific and only catch what you expect \u2014 that\u2019s real defensive programming.",codeSamples:[{language:"python",code:`try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Can't divide by zero.")`}]};case"python-oop":return{slug:"python-oop",title:"Object-Oriented Python",content:`
      <p>Python isn\u2019t just about writing simple scripts \u2014 it also supports <strong>Object-Oriented Programming (OOP)</strong>. This lets you model real-world things using <em>classes</em> and <em>objects</em>. Think of it like building with LEGO \u2014 each piece (object) has its own shape and job, and together they form a complete system.</p>

      <h3>\u{1F9F1} Class & Object \u2013 The Basics</h3>
      <p>A <strong>class</strong> is like a blueprint, and an <strong>object</strong> is a real thing built from that blueprint.</p>
      <pre><code>class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(self.brand + " is driving.")

# Create an object
my_car = Car("Tesla")
my_car.drive()  # Output: Tesla is driving.
</code></pre>

      <h3>\u2699\uFE0F The <code>__init__</code> Method</h3>
      <p>This is the constructor. It runs automatically when you create an object and is used to set initial values.</p>

      <h3>\u{1F64B}\u200D\u2642\uFE0F The <code>self</code> Parameter</h3>
      <p><code>self</code> refers to the current object. Every instance method must have it as the first parameter.</p>

      <h3>\u{1F510} Encapsulation \u2013 Protecting Data</h3>
      <p>We use naming conventions to signal how variables should be used:</p>
      <ul class="list-disc pl-6">
        <li><code>self.name</code>: Public \u2013 can be accessed from outside</li>
        <li><code>self._name</code>: Protected \u2013 meant for internal use</li>
        <li><code>self.__name</code>: Private \u2013 not directly accessible</li>
      </ul>

      <h3>\u{1F9EC} Inheritance \u2013 Reusing Code</h3>
      <p>One class can inherit features from another class. Think of it like a child inheriting traits from a parent.</p>
      <pre><code>class ElectricCar(Car):
    def charge(self):
        print(self.brand + " is charging.")

ev = ElectricCar("Nissan Leaf")
ev.drive()
ev.charge()</code></pre>

      <h3>\u{1F3AD} Method Overriding</h3>
      <p>A subclass can modify methods from the parent class to behave differently.</p>
      <pre><code>class ElectricCar(Car):
    def drive(self):
        print(self.brand + " drives silently.")</code></pre>

      <h3>\u{1F4CC} Check Object Type</h3>
      <p>You can check what class an object belongs to using <code>type()</code> or <code>isinstance()</code>.</p>
      <pre><code>print(isinstance(my_car, Car))  # True</code></pre>
    `,proTip:"Use OOP when your program involves reusable pieces or real-world objects. It helps you write cleaner, more modular code that\u2019s easier to manage.",codeSamples:[{language:"python",code:`class Animal:
    def speak(self):
        print("Animal speaks.")

class Dog(Animal):
    def speak(self):
        print("Dog barks.")

pet = Dog()
pet.speak()  # Dog barks.`}]};case"python-advanced":return{slug:"python-advanced",title:"Advanced Python Tips",content:`
      <p>Now that you\u2019ve got a strong grip on the basics, let\u2019s level up your Python skills with some neat tricks and pro-level features you\u2019ll actually use in real projects.</p>

      <h3>\u{1F9E0} List Comprehensions</h3>
      <p>Write cleaner and faster loops in one line.</p>
      <pre><code>squares = [x*x for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]</code></pre>

      <h3>\u{1F9F0} Lambda Functions</h3>
      <p>Quick anonymous functions, great for simple one-liners.</p>
      <pre><code>double = lambda x: x * 2
print(double(4))  # 8</code></pre>

      <h3>\u2699\uFE0F *args and **kwargs</h3>
      <p>Pass flexible numbers of arguments to functions.</p>
      <pre><code>def greet(*names):
    for name in names:
        print("Hi", name)

greet("Alice", "Bob")</code></pre>

      <pre><code>def info(**data):
    for key, value in data.items():
        print(key, ":", value)

info(name="Python", version=3.11)</code></pre>

      <h3>\u{1F680} Unpacking with *</h3>
      <p>You can use <code>*</code> and <code>**</code> to unpack lists/dicts into function arguments.</p>
      <pre><code>nums = [1, 2, 3]
print(*nums)  # prints: 1 2 3</code></pre>

      <h3>\u{1F4A1} Ternary Operators</h3>
      <p>Short if-else logic:</p>
      <pre><code>age = 18
status = "Adult" if age >= 18 else "Minor"</code></pre>

      <h3>\u{1F9F1} Chaining Comparisons</h3>
      <p>Python lets you write clean range checks:</p>
      <pre><code>x = 15
if 10 &lt; x &lt; 20:
    print("In range")</code></pre>

      <h3>\u{1F504} Enumerate & Zip</h3>
      <p>Loop with index using <code>enumerate()</code>, or pair items using <code>zip()</code>:</p>
      <pre><code>colors = ['red', 'green']
for i, color in enumerate(colors):
    print(i, color)

names = ['Alice', 'Bob']
scores = [85, 90]
for name, score in zip(names, scores):
    print(name, score)</code></pre>
    `,proTip:"Start using list comprehensions, lambda, and unpacking in small scripts to build confidence \u2014 they make your code look elegant and powerful.",codeSamples:[{language:"python",code:`nums = [1, 2, 3, 4]
squared = [n*n for n in nums if n % 2 == 0]
print(squared)  # [4, 16]`}]};case"python-best-practices":return{slug:"python-best-practices",title:"Best Practices",content:`
      <p>Writing Python isn\u2019t just about making things work \u2014 it\u2019s about writing clean, efficient, and readable code. Here are some golden rules that\u2019ll make you a Python pro in the real world.</p>

      <h3>\u{1F9FC} Use Meaningful Variable Names</h3>
      <p>Names like <code>user_age</code> are way better than <code>x</code> or <code>data1</code>. It helps your future self and teammates understand your code faster.</p>

      <h3>\u{1F4CF} Stick to PEP8</h3>
      <p>PEP8 is Python's official style guide. Use 4 spaces for indentation, limit lines to 79 characters, and add spaces around operators. Use tools like <code>black</code> or <code>flake8</code> to format your code automatically.</p>

      <h3>\u{1F6AB} Avoid Using Magic Numbers</h3>
      <p>Hardcoded values make code confusing. Use constants or variables:</p>
      <pre><code>MAX_SCORE = 100
if score &gt; MAX_SCORE:
    print("Invalid")</code></pre>

      <h3>\u{1F4E6} Keep Your Code Modular</h3>
      <p>Break code into small functions. Each function should do one clear task.</p>

      <h3>\u{1F9EA} Write Tests</h3>
      <p>Even small scripts benefit from basic tests. Python has a built-in <code>unittest</code> module, and you can also try <code>pytest</code> for more power.</p>

      <h3>\u{1F40D} Use Pythonic Idioms</h3>
      <p>Prefer clean, native constructs over verbose code:</p>
      <pre><code># Instead of this
if x == True:
    ...

# Do this
if x:
    ...</code></pre>

      <h3>\u{1F4C1} Keep File Structure Clean</h3>
      <p>For bigger projects, split your code into modules, packages, and keep config, data, and main logic separate.</p>

      <h3>\u{1F4C4} Document Your Code</h3>
      <p>Use comments only when necessary, but always write docstrings for functions and classes. Describe what it does, what it expects, and what it returns.</p>
      <pre><code>def get_total(price, tax):
    """Calculate total price after tax."""
    return price + (price * tax)</code></pre>
    `,proTip:"Think about the next person reading your code \u2014 make it so clear they don\u2019t need to ask questions. That\u2019s true professionalism.",codeSamples:[{language:"python",code:`# Bad
def d(x):
    return x*1.1

# Good
def apply_tax(price):
    """Apply 10% tax to the price."""
    return price * 1.1`}]};default:return}}export{o as PythonTopicContent,t as PythonTopics};
