import"./chunk-EJUJSVO6.js";var t=[{id:"dotnet-introduction",title:"What is .NET? (And Why It Matters)",slug:"dotnet-introduction"},{id:"dotnet-runtime-sdk",title:".NET Runtime vs SDK Explained Simply",slug:"dotnet-runtime-sdk"},{id:"dotnet-cli",title:"Using the .NET CLI Like a Pro",slug:"dotnet-cli"},{id:"dotnet-first-app",title:"Building Your First .NET App",slug:"dotnet-first-app"},{id:"dotnet-project-structure",title:"Understanding .NET Project Structure",slug:"dotnet-project-structure"},{id:"dotnet-dependencies",title:"Managing NuGet Packages (Dependencies)",slug:"dotnet-dependencies"},{id:"dotnet-csproj",title:"What\u2019s Inside a .csproj File?",slug:"dotnet-csproj"},{id:"dotnet-architecture",title:".NET Application Architectures (Web, APIs, Console)",slug:"dotnet-architecture"},{id:"dotnet-data-access",title:"Data Access in .NET (Dapper & EF Core)",slug:"dotnet-data-access"},{id:"dotnet-aspnet-core",title:"ASP.NET Core \u2014 Web & APIs Made Easy",slug:"dotnet-aspnet-core"},{id:"dotnet-dependency-injection",title:"Dependency Injection (Just Like Coffee Machines)",slug:"dotnet-dependency-injection"},{id:"dotnet-configuration",title:"AppSettings & Configuration in .NET",slug:"dotnet-configuration"},{id:"dotnet-logging",title:"Logging in .NET (What, Why & How)",slug:"dotnet-logging"},{id:"dotnet-testing",title:"Unit Testing in .NET (Arrange, Act, Assert)",slug:"dotnet-testing"},{id:"dotnet-error-handling",title:"Error Handling in .NET (Try-Catch Made Easy)",slug:"dotnet-error-handling"},{id:"dotnet-auth",title:"Authentication & Authorization in .NET",slug:"dotnet-auth"},{id:"dotnet-async-await",title:"Understanding async/await in .NET",slug:"dotnet-async-await"},{id:"dotnet-deployment",title:"Deploying .NET Apps to Cloud & IIS",slug:"dotnet-deployment"},{id:"dotnet-clean-architecture",title:"Clean Architecture in .NET (Layered Like Pizza)",slug:"dotnet-clean-architecture"},{id:"dotnet-best-practices",title:"Best Practices Every .NET Dev Should Know",slug:"dotnet-best-practices"}];function o(e){switch(e){case"dotnet-introduction":return{slug:"dotnet-introduction",title:"What is .NET? (And Why It Matters)",content:`
<p class="text-base leading-relaxed flex items-center gap-2">
  <span class="text-green-300">\u{1F9E9} Ever tried assembling furniture or building something from scratch?</span>
  <span>You need the right tools, a clear manual, and solid materials to get the job done.</span>
</p>

<p class="mt-4 text-gray-300 text-base leading-relaxed">
  \u{1F6E0}\uFE0F <strong class="text-orange-400">That\u2019s exactly what .NET gives you as a developer \u2014</strong>
  a powerful toolbox, useful blueprints, and ready-made parts to help you build anything: 
  <span class="text-white font-medium">websites, mobile apps, desktop tools, backend APIs, and even games</span>.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} So... What Exactly Is .NET?</h3>
<p>.NET is a <strong>free, open-source development platform from Microsoft</strong>. You can use it to build all kinds of apps using languages like C#, F#, and VB.NET.</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F680} Why Is .NET So Popular?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Cross-platform:</strong> Build apps for Windows, Linux, macOS, and more.</li>
  <li><strong>One framework, many uses:</strong> Web apps, APIs, microservices, desktop, mobile \u2014 all from one stack.</li>
  <li><strong>Blazing-fast performance:</strong> Especially with .NET Core and ASP.NET Core.</li>
  <li><strong>Strong typing and tooling:</strong> Catch errors early, build faster.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>Think of .NET as a restaurant kitchen. You have:</p>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>C#</strong> \u2014 the chef (the language writing your recipe).</li>
  <li><strong>.NET</strong> \u2014 the kitchen (platform and tools).</li>
  <li><strong>Libraries/Frameworks</strong> \u2014 the ingredients (ready-to-use functionality).</li>
  <li><strong>Visual Studio</strong> \u2014 the fancy kitchen UI to manage it all smoothly.</li>
</ul>
<p class="mt-3">
  Just like a chef uses ingredients in a well-equipped kitchen to prepare amazing dishes, a developer uses C#, .NET, and its libraries inside Visual Studio to build powerful, modern applications.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} What Can You Build with .NET?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F310} Web apps & APIs (with ASP.NET Core)</li>
  <li>\u{1F4F1} Mobile apps (with .NET MAUI / Xamarin)</li>
  <li>\u{1F5A5}\uFE0F Desktop apps (WPF, WinForms)</li>
  <li>\u{1F3AE} Games (using Unity with C#)</li>
  <li>\u{1F916} Microservices and cloud apps (with Docker & Azure)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<p>.NET isn\u2019t just a language or a framework \u2014 it\u2019s a whole environment for modern software development. Whether you're building your first app or scaling to millions of users, .NET has your back.</p>
<p class="mt-3">
  In short: <strong>If you know .NET, you're set to build almost anything.</strong>
</p>
        `,proTip:"You can run .NET code directly in the terminal with the `dotnet` command. Try `dotnet --version` once you install it!",codeSamples:[{language:"csharp",code:`// A simple C# program using .NET
using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello from .NET!");
  }
}`}]};case"dotnet-runtime-sdk":return{slug:"dotnet-runtime-sdk",title:".NET Runtime vs SDK Explained Simply",content:`
<p class="text-base leading-relaxed">
  \u{1F697} Think of building and driving a car. If you just want to <strong>drive</strong> the car, you need the <strong>engine</strong>. But if you want to <strong>build or repair</strong> the car, you\u2019ll need tools like a wrench and screwdriver too.
</p>

<p class="mt-4">
  That\u2019s exactly how <strong>.NET Runtime</strong> and <strong>.NET SDK</strong> work:
</p>

<ul class="list-disc list-inside text-gray-300 mt-3">
  <li><strong>.NET Runtime:</strong> This is the engine. It\u2019s what runs your app once it\u2019s built. If someone gives you a finished .NET app, the runtime is all you need to run it.</li>
  <li><strong>.NET SDK:</strong> This is the toolbox. It includes the compiler, CLI tools, and everything else needed to create, build, and publish .NET applications.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} What\u2019s Inside the SDK?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F4C1} The .NET CLI (<code>dotnet</code> command)</li>
  <li>\u{1F6E0}\uFE0F C# compiler</li>
  <li>\u{1F9EA} Build/test/debug tools</li>
  <li>\u{1F4E6} Libraries and templates</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real Use Case</h3>
<p>
  If you're deploying your app to a server, you only need the <strong>runtime</strong> there. But on your development machine, you need the <strong>SDK</strong> to write and build code.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Quick Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Runtime = Run apps</strong> (like a user)</li>
  <li><strong>SDK = Build apps</strong> (like a developer)</li>
</ul>
        `,proTip:"You can install both Runtime and SDK from the official .NET website. Just installing the Runtime won\u2019t let you run the dotnet CLI!",codeSamples:[{language:"bash",code:`# Check if you have SDK or just the runtime
dotnet --info`}]};case"dotnet-cli":return{slug:"dotnet-cli",title:"Using the .NET CLI Like a Pro",content:`
<p class="text-base leading-relaxed">
  \u{1F9D1}\u200D\u{1F4BB} Imagine you're a chef who can shout commands in the kitchen and things get done \u2014 <strong>that's what the .NET CLI (Command-Line Interface)</strong> lets you do in development.
</p>

<p class="mt-4">
  Instead of clicking buttons in Visual Studio, you can use the <code>dotnet</code> command in your terminal to create, build, run, test, and publish apps \u2014 all with just a few keystrokes.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} Why Use the CLI?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u26A1 Fast and scriptable \u2014 great for automation.</li>
  <li>\u{1F310} Works anywhere (Windows, macOS, Linux).</li>
  <li>\u{1F501} Integrated into build pipelines (CI/CD).</li>
  <li>\u{1F4E6} Helps scaffold new projects quickly with templates.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4CB} Common .NET CLI Commands</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code class ="text-green-400">dotnet new console</code> \u2014 Creates a new console app.</li>
  <li><code class ="text-green-400">dotnet build</code> \u2014 Compiles the project.</li>
  <li><code class ="text-green-400">dotnet run</code> \u2014 Runs the app.</li>
  <li><code class ="text-green-400">dotnet test</code> \u2014 Runs tests.</li>
  <li><code class ="text-green-400">dotnet publish</code> \u2014 Packages the app for deployment.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F680} Real-World Analogy</h3>
<p>
  Think of it like driving a car manually versus using cruise control \u2014 the CLI gives you <strong>full control</strong>, especially when you want to go fast or do repetitive tasks.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Developer Tip</h3>
<p>
  You can even create your own project templates and share them with your team using <code>dotnet new -i</code> and custom NuGet templates.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  Whether you\u2019re scripting deployments or just hate using the mouse, the .NET CLI is a must-have tool for every serious .NET developer.
</p>
    `,proTip:"Start every new .NET app with `dotnet new`. Run `dotnet new --list` to see all available templates!",codeSamples:[{language:"bash",code:`# Create a new .NET console app
dotnet new console -n HelloWorldApp

# Navigate into the project
cd HelloWorldApp

# Run the app
dotnet run`}]};case"dotnet-first-app":return{slug:"dotnet-first-app",title:"Building Your First .NET App",content:`
<p class="text-base leading-relaxed">
  \u{1F680} Ready to get your hands dirty? Let\u2019s build your very first .NET application \u2014 a simple console app that says hello to the world (and to you!).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} Step-by-Step Guide</h3>
<ol class="list-decimal list-inside text-gray-300 space-y-2">
  <li><strong>Open your terminal</strong> (Command Prompt, PowerShell, Terminal, etc.).</li>
  <li>Navigate to a folder where you want to create your project.</li>
  <li>Run: <code>dotnet new console -n HelloIgKnight</code> \u2014 this creates a new app folder.</li>
  <li>Move into the folder: <code>cd HelloIgKnight</code></li>
  <li>Run the app: <code>dotnet run</code></li>
</ol>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F389} What Just Happened?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>You created a folder with a ready-to-use C# project.</li>
  <li>You got a file called <code>Program.cs</code> \u2014 it\u2019s the main entry point of your app.</li>
  <li>You ran the app, and it printed a friendly greeting in your terminal!</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4A1} The Code Breakdown</h3>
<p>Let\u2019s peek into what\u2019s inside <code>Program.cs</code> by default:</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>using System;

class Program {
  static void Main(string[] args) {
    Console.WriteLine("Hello, IgKnight!");
  }
}
</code>
</pre>

<p class="mt-4 text-base leading-relaxed">
  \u{1F50D} <strong>Console.WriteLine</strong> is how we show text in the terminal. It\u2019s like <code>print()</code> in Python or <code>console.log()</code> in JavaScript.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>
  Think of this like setting up your first project workspace. You\u2019ve got your desk, laptop, and a sticky note that says \u201CHello IgKnight!\u201D to keep you motivated. That\u2019s your first app.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  Congrats! You just built and ran your first .NET app. From here, the journey gets more exciting \u2014 inputs, logic, web APIs, and beyond. But this simple app? It\u2019s your first step into the .NET universe.
</p>
    `,proTip:"Always name your project folders clearly \u2014 it helps keep things organized when you build many apps later!",codeSamples:[{language:"bash",code:`# Create and run your first .NET console app
dotnet new console -n HelloIgKnight
cd HelloIgKnight
dotnet run`},{language:"csharp",code:`// Program.cs
using System;

class Program {
  static void Main(string[] args) {
    Console.WriteLine("Hello, IgKnight!");
  }
}`}]};case"dotnet-project-structure":return{slug:"dotnet-project-structure",title:"Understanding .NET Project Structure",content:`
<p class="text-base leading-relaxed">
  \u{1F9F1} When you create a .NET app, it gives you a bunch of files and folders automatically. It might feel overwhelming at first \u2014 but don\u2019t worry, it\u2019s like a well-organized toolbox once you get the hang of it!
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9F0} The Core Files You\u2019ll See</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>Program.cs</code> \u2014 This is where your app starts running. It\u2019s the entry point (like <code>main()</code>).</li>
  <li><code>*.csproj</code> \u2014 This is the project file. It holds your app's metadata, dependencies, SDK version, and more.</li>
  <li><code>obj/</code> & <code>bin/</code> folders \u2014 These are generated during build and store compiled code and outputs. You usually ignore these.</li>
  <li><code>appsettings.json</code> (in ASP.NET apps) \u2014 Configuration values like database strings or API keys.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} Real-World Analogy</h3>
<p>
  Imagine your project is a mini kitchen:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li><code>Program.cs</code> is your stove \u2014 that\u2019s where the cooking starts.</li>
  <li><code>.csproj</code> is your kitchen layout \u2014 it tells what equipment and tools are allowed in.</li>
  <li><code>bin/</code> and <code>obj/</code> are like the trash bins \u2014 they\u2019re used during prep but not part of the final meal.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} A Sample Console Project</h3>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>HelloWorld/
\u251C\u2500\u2500 HelloWorld.csproj
\u251C\u2500\u2500 Program.cs
\u251C\u2500\u2500 bin/
\u2514\u2500\u2500 obj/
</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F310} For ASP.NET Core Apps</h3>
<p>When you create a web app, you\u2019ll also see:</p>
<ul class="list-disc list-inside text-gray-300">
  <li><code>Startup.cs</code> (or <code>Program.cs</code> handles startup in newer versions)</li>
  <li><code>Controllers/</code> \u2014 Where your API logic lives.</li>
  <li><code>Views/</code> \u2014 For Razor UI pages.</li>
  <li><code>wwwroot/</code> \u2014 Static files like CSS, JS, images.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  The .NET project structure may look scary at first, but each part has a clear purpose. Once you build a few apps, you\u2019ll instantly recognize what each file is for \u2014 just like recognizing tools in a toolbox.
</p>
<p class="mt-3">
  As your app grows, organizing things like services, models, and configurations will make your project feel clean and scalable.
</p>
    `,proTip:"Use the command `dotnet new console -n MyApp` to generate a clean project structure anytime!",codeSamples:[{language:"bash",code:`# Generate a new console app
dotnet new console -n HelloWorld
cd HelloWorld`},{language:"plaintext",code:`// Basic .NET console app structure
HelloWorld/
\u251C\u2500\u2500 HelloWorld.csproj
\u251C\u2500\u2500 Program.cs
\u251C\u2500\u2500 bin/
\u2514\u2500\u2500 obj/`}]};case"dotnet-dependencies":return{slug:"dotnet-dependencies",title:"Managing NuGet Packages (Dependencies)",content:`
<p class="text-base leading-relaxed">
  \u{1F4E6} Imagine building a game or an app. Would you rather build every feature from scratch... or plug in some pre-made tools like a <strong>login system</strong>, <strong>date formatter</strong>, or <strong>PDF generator</strong>?
</p>

<p class="mt-4">
  That\u2019s where <strong>NuGet packages</strong> come in. They're like pre-built LEGO blocks for .NET \u2014 made by Microsoft or the community \u2014 that you can just plug into your project!
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} What is NuGet?</h3>
<p>
  <strong>NuGet</strong> is the official package manager for .NET. It hosts thousands of libraries you can install in seconds \u2014 just like downloading apps from an app store.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F6E0}\uFE0F Real-World Analogy</h3>
<p>
  Think of your project as a recipe. You could grow your own vegetables (write all code yourself) or go to a store and buy pre-cut ingredients (NuGet packages).
</p>

<ul class="list-disc list-inside text-gray-300 mt-3">
  <li><strong>Want to use a database?</strong> Add <code>Dapper</code> or <code>Entity Framework Core</code></li>
  <li><strong>Need logging?</strong> Add <code>Serilog</code></li>
  <li><strong>Need JWT auth?</strong> Add <code>Microsoft.AspNetCore.Authentication.JwtBearer</code></li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} How to Add Packages</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>CLI:</strong> Use <code>dotnet add package</code></li>
  <li><strong>Visual Studio:</strong> Right-click project \u2192 Manage NuGet Packages</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} What Happens Behind the Scenes?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>The package name & version is saved inside your <code>.csproj</code> file</li>
  <li>The actual code/libraries are downloaded to a hidden <code>packages</code> folder</li>
  <li>You can now use that functionality in your project with a <code>using</code> statement</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Tip:</h3>
<p>
  Every time you build or restore your project, .NET checks and installs missing packages automatically.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  NuGet packages let you reuse battle-tested libraries instead of reinventing the wheel. It\u2019s what makes modern development fast and efficient. Just like grabbing tools from a shelf instead of building them from wood!
</p>
    `,proTip:"You can search for thousands of packages at https://www.nuget.org or use Visual Studio\u2019s package browser.",codeSamples:[{language:"bash",code:`# Add Serilog logging library
dotnet add package Serilog`},{language:"xml",code:`<!-- Example snippet inside .csproj after adding a NuGet package -->
<ItemGroup>
  <PackageReference Include="Serilog" Version="2.12.0" />
</ItemGroup>`}]};case"dotnet-csproj":return{slug:"dotnet-csproj",title:"What\u2019s Inside a .csproj File?",content:`
<p class="text-base leading-relaxed">
  \u{1F4C1} When you build a .NET project, there\u2019s a special file with the extension <code>.csproj</code> (short for C# project). It\u2019s like your project\u2019s **blueprint or manifest** \u2014 it tells .NET how to build, run, and package your app.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>
  Imagine building a robot. The <code>.csproj</code> file is like your robot\u2019s instruction manual \u2014 listing what tools, parts, batteries (packages), and configurations are needed before it can run.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E9} Key Things Stored in .csproj</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Target framework</strong> (like .NET 6, .NET 8)</li>
  <li><strong>NuGet packages</strong> (dependencies your app uses)</li>
  <li><strong>Build settings</strong> (debug/release mode, output type)</li>
  <li><strong>References</strong> to other projects/libraries</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} Sample .csproj File</h3>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>&lt;Project Sdk="Microsoft.NET.Sdk"&gt;

  &lt;PropertyGroup&gt;
    &lt;OutputType&gt;Exe&lt;/OutputType&gt;
    &lt;TargetFramework&gt;net8.0&lt;/TargetFramework&gt;
  &lt;/PropertyGroup&gt;

  &lt;ItemGroup&gt;
    &lt;PackageReference Include="Dapper" Version="2.0.123" /&gt;
  &lt;/ItemGroup&gt;

&lt;/Project&gt;
</code>
</pre>

<p class="mt-4">
  Let\u2019s break that down:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li><code>&lt;Project Sdk="..."&gt;</code> \u2014 Defines the type of project (.NET Console, Web, etc.)</li>
  <li><code>TargetFramework</code> \u2014 Tells which version of .NET this app runs on</li>
  <li><code>OutputType</code> \u2014 Can be <code>Exe</code> for console or <code>Library</code> for reusable libraries</li>
  <li><code>PackageReference</code> \u2014 Pulls in NuGet packages like Dapper, Serilog, etc.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} When Do You Edit It?</h3>
<p>
  Usually, you don\u2019t need to touch this file manually \u2014 tools like Visual Studio or the CLI handle it. But knowing what\u2019s inside helps when:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 Debugging version conflicts</li>
  <li>\u2705 Adding or removing dependencies manually</li>
  <li>\u2705 Setting custom build options</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  The <code>.csproj</code> file is your project\u2019s DNA. It controls how your app is built, which tools it needs, and where it should run. Even though it looks technical, it\u2019s just a structured list of project rules \u2014 and it\u2019s super powerful when understood well.
</p>
    `,proTip:"You can open your `.csproj` file in any text editor to inspect or tweak its settings \u2014 just be careful not to break the XML structure!",codeSamples:[{language:"xml",code:`<!-- Example of a .csproj file -->
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Dapper" Version="2.0.123" />
  </ItemGroup>

</Project>`}]};case"dotnet-architecture":return{slug:"dotnet-architecture",title:".NET Application Architectures (Web, APIs, Console)",content:`
<p class="text-base leading-relaxed">
  \u{1F3D7}\uFE0F Imagine building a mall, a cafe, or a personal home. All are buildings, but their <strong>architecture</strong> is different based on what they\u2019re meant to do.
</p>

<p class="mt-4">
  Similarly, .NET supports different <strong>application architectures</strong> depending on what kind of software you\u2019re building \u2014 websites, APIs, desktop tools, cloud services, or mobile apps.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9F1} Common Types of .NET Apps</h3>

<ul class="list-disc list-inside text-gray-300">
  <li><strong>Console Apps:</strong> Simple command-line programs. Great for utilities, learning, and background tasks.</li>
  <li><strong>Web Apps:</strong> Websites with UI using <code>ASP.NET Core MVC</code> or <code>Razor Pages</code>.</li>
  <li><strong>Web APIs:</strong> Backend-only services using <code>ASP.NET Core Web API</code>. No UI \u2014 just data.</li>
  <li><strong>Desktop Apps:</strong> UI apps for Windows using <code>WPF</code> or <code>WinForms</code>.</li>
  <li><strong>Mobile Apps:</strong> Built with <code>.NET MAUI</code> (cross-platform) or <code>Xamarin</code>.</li>
  <li><strong>Microservices:</strong> Small independent services, often containerized with Docker.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F3DB}\uFE0F Web vs API vs Console</h3>
<p>
  Think of it like this:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F5A5}\uFE0F <strong>Console App:</strong> A technician\u2019s tool \u2013 simple, fast, no frills.</li>
  <li>\u{1F310} <strong>Web App:</strong> A restaurant with waiters, menus, and customers.</li>
  <li>\u{1F4E1} <strong>API:</strong> A hidden kitchen where orders are processed \u2014 no customer sees it directly.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} When to Use What?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 Use <strong>Console Apps</strong> for small utilities, scripts, or automation tools</li>
  <li>\u2705 Use <strong>ASP.NET Web Apps</strong> when building websites with UI</li>
  <li>\u2705 Use <strong>ASP.NET Web APIs</strong> to serve data to frontend frameworks like Angular, React, or mobile apps</li>
  <li>\u2705 Use <strong>WPF / MAUI</strong> for building Windows or cross-platform desktop/mobile tools</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} Real Projects & Use Cases</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F510} Authentication backend \u2192 Web API</li>
  <li>\u{1F4CA} Admin dashboard \u2192 ASP.NET Core MVC</li>
  <li>\u{1F6E0}\uFE0F Deployment utility \u2192 Console app</li>
  <li>\u{1F4F1} Business app for Android/iOS \u2192 .NET MAUI</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  .NET is super flexible \u2014 from small CLI tools to massive enterprise systems. Once you understand these architecture types, you can mix and match based on your project\u2019s needs.
</p>
<p class="mt-2">
  <strong>Learn one stack well (like ASP.NET Core Web API), and you can expand into others easily.</strong>
</p>
    `,proTip:"Start with a Web API or Console App \u2014 they\u2019re beginner-friendly and help you grasp the core of how .NET works under the hood.",codeSamples:[{language:"bash",code:`# Create different project types
dotnet new console       # Console App
dotnet new webapi        # ASP.NET Core Web API
dotnet new mvc           # ASP.NET Core MVC Web App
dotnet new maui          # Mobile/Desktop App (if installed)`}]};case"dotnet-data-access":return{slug:"dotnet-data-access",title:"Data Access in .NET (Dapper & EF Core)",content:`
<p class="text-base leading-relaxed">
  \u{1F4E6} Imagine your app is a waiter in a busy restaurant, and your database is the kitchen. When a customer (user) places an order, the waiter needs to communicate that to the kitchen and bring back the dish (data). That \u201Ccommunication\u201D is what data access is all about.
</p>

<p class="mt-4">
  In .NET, there are two main tools developers use to connect and talk to databases like SQL Server:
</p>

<ul class="list-disc list-inside text-gray-300 mt-2">
  <li><strong>Dapper</strong> \u2013 lightweight and fast, like sending raw instructions to the warehouse</li>
  <li><strong>Entity Framework Core (EF Core)</strong> \u2013 more automated, like giving the warehouse a list and letting it handle everything</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9EA} What is Dapper?</h3>
<p>
  Dapper is a small library developed by the team at Stack Overflow. It uses plain SQL queries and maps results to your C# classes quickly. You write SQL yourself, so you have full control and better performance.
</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>// Using Dapper
using var connection = new SqlConnection(connectionString);
var users = await connection.QueryAsync&lt;User&gt;("SELECT * FROM Users");</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} What is EF Core?</h3>
<p>
  Entity Framework Core is a full ORM (Object Relational Mapper). It lets you interact with the database using C# classes instead of SQL. Think of it as a smart translator between your app and the database.
</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>// Using EF Core
var users = await dbContext.Users.ToListAsync();</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F19A} Dapper vs EF Core</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Dapper:</strong> You write raw SQL, great for speed and custom queries</li>
  <li><strong>EF Core:</strong> Easier for beginners, powerful for large projects, supports migrations, LINQ, etc.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Dapper:</strong> You speak directly to the warehouse workers \u2014 \u201CGet me 5 blue shirts!\u201D</li>
  <li><strong>EF Core:</strong> You fill a smart form \u2014 it knows where to go, fetches what you need, and returns it automatically.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4CC} Which Should You Use?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <strong>Dapper</strong> for performance-critical or simple read-heavy apps</li>
  <li>Use <strong>EF Core</strong> for complex apps, multiple entities, and if you like LINQ-style querying</li>
  <li>Some companies even use <strong>both</strong> in the same project (EF for most, Dapper for high-performance areas)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  Whether you use Dapper or EF Core, .NET makes it super easy to talk to your database. Once you get this communication flowing, your app can start storing, retrieving, and managing real data \u2014 which is where the real magic begins!
</p>
    `,proTip:"Dapper is just a NuGet package \u2014 install it with `dotnet add package Dapper` and start writing SQL inside your app right away!",codeSamples:[{language:"bash",code:`# Install both with CLI
dotnet add package Dapper
dotnet add package Microsoft.EntityFrameworkCore.SqlServer`}]};case"dotnet-aspnet-core":return{slug:"dotnet-aspnet-core",title:"ASP.NET Core \u2014 Web & APIs Made Easy",content:`
<p class="text-base leading-relaxed">
  \u{1F310} Want to build a website or an API that talks to frontend apps, mobile devices, or other systems? 
  <strong class="text-orange-400">ASP.NET Core is your superhero cape for that!</strong>
</p>

<p class="mt-4">
  It's fast, lightweight, cross-platform, and used by developers all over the world to build everything from landing pages to large-scale enterprise systems.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} What is ASP.NET Core?</h3>
<p>
  ASP.NET Core is a web framework built on top of .NET. It helps you:
</p>
<ul class="list-disc list-inside text-gray-300 mt-2">
  <li>Serve web pages (HTML/CSS/JS)</li>
  <li>Create REST APIs (for frontend/mobile apps)</li>
  <li>Build Razor Pages, Blazor apps, or full MVC websites</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9F1} Real-World Analogy</h3>
<p>
  Think of ASP.NET Core as a restaurant waiter. A customer (browser or app) sends a request (\u201CI want the menu\u201D), and ASP.NET Core brings back a response (\u201CHere\u2019s the menu!\u201D).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F680} Why Developers Love It</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u26A1 Super fast and optimized for performance</li>
  <li>\u{1F9F0} Supports dependency injection, middleware, routing, and logging out of the box</li>
  <li>\u{1F4E6} Easy integration with databases, identity/auth, Swagger, and more</li>
  <li>\u{1F30D} Cross-platform \u2014 run on Windows, Linux, or macOS</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9EA} A Simple API Example</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>// Minimal API in ASP.NET Core
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/hello", () => "Hello from IgKnight API!");

app.Run();</code>
</pre>

<p class="mt-4">
  \u{1F525} That's it! That one file can run an entire API. Just visit <code>/hello</code> and you'll get a response.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F510} Want Auth, DB, or Swagger?</h3>
<p>
  ASP.NET Core makes it super simple to add:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Authentication:</strong> Use Identity or JWT tokens</li>
  <li><strong>Databases:</strong> Plug in EF Core or Dapper easily</li>
  <li><strong>Swagger:</strong> Auto-document your API with a single line</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  ASP.NET Core is the heart of modern web and backend development in the .NET world. Whether you're building a simple blog or a large-scale distributed system \u2014 it gives you speed, control, and simplicity.
</p>
<p class="mt-2">
  <strong class="text-green-300">If you want to build web apps or APIs, ASP.NET Core is your best friend in .NET.</strong>
</p>
    `,proTip:"Try creating a simple API with `dotnet new webapi` and explore the auto-generated WeatherForecast controller!",codeSamples:[{language:"bash",code:`# Create a new ASP.NET Core Web API
dotnet new webapi -n MyFirstApi
cd MyFirstApi
dotnet run`}]};case"dotnet-dependency-injection":return{slug:"dotnet-dependency-injection",title:"Dependency Injection (Just Like Coffee Machines)",content:`
<p class="text-base leading-relaxed">
  \u2615 Imagine walking into a caf\xE9. You don\u2019t need to know how the coffee machine works \u2014 you just want a great cup of coffee. Behind the scenes, the barista uses a machine with the right filters, beans, and settings.
</p>

<p class="mt-3">
  <strong class="text-orange-400">That\u2019s what Dependency Injection (DI) does in .NET:</strong> It gives your app the tools it needs, without hardcoding everything manually.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} What Is Dependency Injection?</h3>
<p>
  Instead of creating dependencies inside your class (like making your own coffee), you ask .NET to provide them (like getting it made for you).
</p>
<p>
  For example, instead of this:
</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>// Not recommended \u2014 tightly coupled
var emailService = new EmailService();
var userService = new UserService(emailService);</code>
</pre>

<p class="mt-3">You do this:</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>// Let .NET inject it for you
public class UserService
{
  private readonly IEmailService _emailService;

  public UserService(IEmailService emailService)
  {
    _emailService = emailService;
  }
}</code>
</pre>

<p class="mt-3">
  Then register the service in your app startup file:
</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>builder.Services.AddScoped&lt;IEmailService, EmailService&gt;();</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9F1} Why Use DI?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Loose coupling:</strong> Your classes don't depend on concrete implementations.</li>
  <li><strong>Easy to test:</strong> You can swap real services with mocks/fakes.</li>
  <li><strong>Cleaner code:</strong> Services are injected, not created all over the place.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F680} Real-World Analogy</h3>
<p>
  Think of your class as the caf\xE9 manager. You don\u2019t build the espresso machine (EmailService), but you expect it to be ready. The DI system acts like your supplier \u2014 it wires everything up for you behind the scenes.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Fun Fact</h3>
<p>
  ASP.NET Core has a built-in, lightweight DI container \u2014 no need for third-party tools in most cases (like Autofac or Ninject).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<p>
  Dependency Injection keeps your code clean, testable, and flexible. Instead of baking all dependencies into your app manually, you let .NET handle the wiring \u2014 just like a smart coffee setup.
</p>
<p class="mt-2">
  <strong class="text-green-300">Learn DI once, and you\u2019ll write services that scale without breaking a sweat.</strong>
</p>
    `,proTip:"Use `AddScoped`, `AddSingleton`, and `AddTransient` to control the lifecycle of your services \u2014 each serves a different purpose!",codeSamples:[{language:"bash",code:`# Add a scoped service in Program.cs
builder.Services.AddScoped<IMailService, MailService>();`}]};case"dotnet-configuration":return{slug:"dotnet-configuration",title:"AppSettings & Configuration in .NET",content:`
<p class="text-base leading-relaxed">
  \u{1F6E0}\uFE0F Imagine building a machine where you want to tweak some parts without opening the entire system every time. You\u2019d want knobs, buttons, or a remote, right?
</p>
<p class="mt-3">
  That\u2019s exactly what <strong class="text-orange-400">appsettings.json</strong> is for in .NET \u2014 a flexible remote control for your app\u2019s behavior.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} What Is appsettings.json?</h3>
<p>
  It's a JSON file used to store settings like database connections, email config, API keys, logging levels, and feature toggles. It helps keep configuration separate from your code.
</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>{
  "AppSettings": {
    "AppName": "IgKnight Learning",
    "EnableDebug": true
  },
  "ConnectionStrings": {
    "Default": "Server=.;Database=IgKnightDb;Trusted_Connection=True;"
  }
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2699\uFE0F Reading Settings in Code</h3>
<p>Use <code>IConfiguration</code> to read values easily:</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>public class HomeController : Controller
{
  private readonly string _appName;

  public HomeController(IConfiguration config)
  {
    _appName = config["AppSettings:AppName"];
  }
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Binding to Strongly Typed Classes</h3>
<p>
  You can bind sections of your settings file to a custom class using <code>services.Configure&lt;T&gt;()</code>:
</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>// AppSettings.cs
public class AppSettings
{
  public string AppName { get; set; }
  public bool EnableDebug { get; set; }
}

// Program.cs
builder.Services.Configure&lt;AppSettings&gt;(
  builder.Configuration.GetSection("AppSettings")
);</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F510} Handling Secrets Securely</h3>
<ul class="list-disc list-inside text-gray-300 mt-2">
  <li><strong>Never hardcode secrets!</strong> Use Secret Manager or environment variables for local development.</li>
  <li>Use <code>dotnet user-secrets</code> for development secrets that shouldn't be checked into source control.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4C1} Different Settings per Environment</h3>
<p>.NET supports:</p>
<ul class="list-disc list-inside text-gray-300">
  <li><code>appsettings.Development.json</code></li>
  <li><code>appsettings.Production.json</code></li>
</ul>
<p>These automatically override the main settings file based on the environment.</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Analogy</h3>
<p>
  Think of your app like a game. You wouldn\u2019t change the source code every time you switch from "easy" to "hard" mode \u2014 you\u2019d just tweak the settings. That\u2019s exactly how config files work.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <strong>appsettings.json</strong> for non-sensitive configs.</li>
  <li>Use <strong>user-secrets</strong> or environment variables for private data.</li>
  <li>Use <strong>IOptions&lt;T&gt;</strong> or <strong>IConfiguration</strong> to access config data in a clean, testable way.</li>
</ul>
    `,proTip:"Want to switch configs without rebuilding your app? Enable config reloads with `reloadOnChange: true` in Program.cs!",codeSamples:[{language:"bash",code:`# Add secret value using Secret Manager
dotnet user-secrets set "AppSettings:ApiKey" "super-secret-key"`}]};case"dotnet-logging":return{slug:"dotnet-logging",title:"Logging in .NET (What, Why & How)",content:`
<p class="text-base leading-relaxed">
  \u{1F4E2} Imagine running a restaurant kitchen without any tickets or orders being tracked. Chaos, right? That's what coding without logging feels like.
</p>
<p class="mt-3">
  <strong class="text-orange-400">Logging in .NET helps you keep track of what your app is doing</strong> \u2014 what went well, what went wrong, and everything in between.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9ED} Why Logging Matters</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 Debugging \u2014 Trace issues without guesswork</li>
  <li>\u{1F4C8} Monitoring \u2014 See app usage or performance trends</li>
  <li>\u{1F510} Auditing \u2014 Track user actions for security</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} Built-in Logging in .NET</h3>
<p>
  .NET provides a built-in logging system via <code>ILogger</code> interface. No extra setup needed to log to the console or files!
</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>public class HomeController : Controller
{
  private readonly ILogger&lt;HomeController&gt; _logger;

  public HomeController(ILogger&lt;HomeController&gt; logger)
  {
    _logger = logger;
  }

  public IActionResult Index()
  {
    _logger.LogInformation("Home page loaded");
    return View();
  }
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1FAB5} Log Levels</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>Trace</code> \u2014 Super detailed (for devs)</li>
  <li><code>Debug</code> \u2014 Info for debugging</li>
  <li><code>Information</code> \u2014 General app flow</li>
  <li><code>Warning</code> \u2014 Something unexpected, but not broken</li>
  <li><code>Error</code> \u2014 Something failed</li>
  <li><code>Critical</code> \u2014 Major failure</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9EA} Custom Logging Example</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>_logger.LogWarning("Low disk space warning");
_logger.LogError("Could not connect to database");</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4C1} Where Do Logs Go?</h3>
<p>
  By default, they go to the console. But you can plug in other providers:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F4C4} File (via Serilog or NLog)</li>
  <li>\u2601\uFE0F Cloud (Azure, AWS CloudWatch)</li>
  <li>\u{1F4CA} Log aggregators (like Seq, ELK Stack, etc.)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2699\uFE0F Configuration in Program.cs</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();
// You can add Serilog, etc. too</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} Analogy Time</h3>
<p>
  Logging is like your app\u2019s diary \u2014 it records everything important. Without it, debugging is like finding your keys in the dark.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <code>ILogger</code> to log info at any level</li>
  <li>Console + Debug logging is built-in</li>
  <li>Add external providers for production logs</li>
</ul>
    `,proTip:"Start with console logging for dev. For production, consider structured logging with Serilog or file providers.",codeSamples:[{language:"bash",code:`# Install Serilog via NuGet
dotnet add package Serilog.AspNetCore`}]};case"dotnet-testing":return{slug:"dotnet-testing",title:"Unit Testing in .NET (Arrange, Act, Assert)",content:`
<p class="text-base leading-relaxed">
  \u{1F9EA} Ever baked a cake and wanted to taste just a small piece to check if it\u2019s good? That\u2019s what unit testing does for your code \u2014 it checks small parts (units) to make sure they work perfectly before serving the whole app.
</p>

<p class="mt-3">
  In .NET, unit testing helps you <strong class="text-orange-400">test your methods, services, or logic</strong> in isolation. It ensures your code behaves exactly as expected, and it catches bugs before they escape to production.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} Popular Testing Frameworks</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>xUnit</strong> \u2014 Modern and highly used with .NET Core</li>
  <li><strong>NUnit</strong> \u2014 Similar to JUnit (Java-style)</li>
  <li><strong>MSTest</strong> \u2014 Microsoft\u2019s built-in framework</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} The AAA Pattern (Arrange, Act, Assert)</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Arrange:</strong> Set up the data or dependencies</li>
  <li><strong>Act:</strong> Call the method you\u2019re testing</li>
  <li><strong>Assert:</strong> Check if the result matches expectation</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Example Test Case using xUnit</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>public class Calculator
{
  public int Add(int a, int b) => a + b;
}

public class CalculatorTests
{
  [Fact]
  public void Add_ReturnsCorrectSum()
  {
    // Arrange
    var calc = new Calculator();

    // Act
    var result = calc.Add(2, 3);

    // Assert
    Assert.Equal(5, result);
  }
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9EA} Running Tests</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>// Run tests via CLI
dotnet test
</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F3AF} Real-World Use</h3>
<p>
  Unit tests help prevent regressions \u2014 so when you change one part of code, you instantly know if you accidentally broke something else.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F501} Bonus Tip</h3>
<p>
  You can use <strong>Mocking</strong> libraries like <code>Moq</code> to simulate services like databases, APIs, or external dependencies.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Write unit tests for individual methods</li>
  <li>Use the Arrange \u2192 Act \u2192 Assert flow</li>
  <li>Run tests easily with <code>dotnet test</code></li>
</ul>
    `,proTip:"Start small \u2014 write tests only for your core business logic. Use test projects with the same naming convention as your main project (e.g., `MyApp.Tests`).",codeSamples:[{language:"bash",code:`# Install xUnit
dotnet new xunit -n MyApp.Tests`}]};case"dotnet-error-handling":return{slug:"dotnet-error-handling",title:"Error Handling in .NET (Try-Catch Made Easy)",content:`
<p class="text-base leading-relaxed">
  \u{1F9EF} Ever seen a firefighter prepare for emergencies even if there\u2019s no fire? That\u2019s what error handling does in your app \u2014 it prepares for problems before they happen.
</p>

<p class="mt-4">
  In .NET, you handle errors using <strong class="text-orange-400">try-catch</strong> blocks. This allows you to write code that handles unexpected situations gracefully \u2014 like a missing file, a failed API call, or a divide-by-zero error.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} How It Works</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>try:</strong> Place your risky logic here (like database or API calls).</li>
  <li><strong>catch:</strong> What to do if something goes wrong (log it, notify, retry, etc.).</li>
  <li><strong>finally (optional):</strong> Code that always runs, whether error happens or not (e.g., cleanups).</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4A5} Basic Example</h3>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>try
{
  int x = 5;
  int y = 0;
  int result = x / y;
}
catch (DivideByZeroException ex)
{
  Console.WriteLine("Oops! You can\u2019t divide by zero.");
}
finally
{
  Console.WriteLine("Cleanup code always runs.");
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F50D} Catching Specific Exceptions</h3>
<p>
  Always catch specific exceptions first. It\u2019s cleaner and more predictable than catching every error blindly.
</p>
<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm">
<code>try
{
  var content = File.ReadAllText("myfile.txt");
}
catch (FileNotFoundException)
{
  Console.WriteLine("The file was not found.");
}
catch (Exception ex)
{
  Console.WriteLine("Something went wrong: " + ex.Message);
}</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F6A8} Logging the Error</h3>
<p>
  Don\u2019t just swallow the exception \u2014 log it using <code>ILogger</code>, <code>Serilog</code>, or other logging libraries so you can fix the root issue later.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use try-catch blocks to prevent app crashes.</li>
  <li>Catching specific exceptions is best practice.</li>
  <li>Always log important errors for later review.</li>
  <li><code>finally</code> is great for cleanup code like closing DB connections.</li>
</ul>
    `,proTip:"Avoid catching general `Exception` unless you rethrow or log it. Always handle specific exceptions for better control and debugging.",codeSamples:[{language:"bash",code:`// Example run
dotnet run`}]};case"dotnet-auth":return{slug:"dotnet-auth",title:"Authentication & Authorization in .NET",content:`
<p class="text-base leading-relaxed">
  \u{1F6C2} Picture a nightclub: <strong>authentication</strong> is showing your ID at the door, and <strong>authorization</strong> is the bouncer checking if you can enter the VIP area.
</p>

<p class="mt-4">
  In .NET, these two concepts help secure your apps by verifying who you are (authentication) and what you\u2019re allowed to do (authorization).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F511} Authentication \u2014 Who Are You?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 **ASP.NET Identity**: Full-featured user system with login, registration, roles, and claims out of the box.</li>
  <li>\u2705 **JWT Bearer Tokens**: Issue JSON Web Tokens after login; clients send tokens in headers.</li>
  <li>\u2705 **External Providers**: Google, Facebook, Microsoft sign-in via OAuth.</li>
</ul>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>// Example: Adding JWT Authentication
builder.Services.AddAuthentication("Bearer")
  .AddJwtBearer("Bearer", options =>
  {
    options.Authority = "https://demo.identityserver.io";
    options.TokenValidationParameters = new() { ValidateAudience = false };
  });
</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F513} Authorization \u2014 What Can You Do?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u2705 **Policies**: Define rules (e.g., \u201CMust be over 18\u201D).</li>
  <li>\u2705 **Roles**: Group users (e.g., Admin, Manager, User).</li>
  <li>\u2705 **Claims**: Fine-grained permissions (e.g., \u201CCanEditPosts,\u201D \u201CCanViewReports\u201D).</li>
</ul>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>// Example: Adding a Policy
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("AdminOnly", policy =>
    policy.RequireRole("Admin"));
});</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>
  Think of your API routes as rooms in a building. Authentication is the front door check; authorization is the keycard that opens specific rooms.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <strong>AddAuthentication</strong> to verify users.</li>
  <li>Use <strong>AddAuthorization</strong> to control access.</li>
  <li>Combine Identity, JWT, roles, and policies for robust security.</li>
</ul>
    `,proTip:"Remember to call <code>app.UseAuthentication()</code> before <code>app.UseAuthorization()</code> in your request pipeline.",codeSamples:[{language:"bash",code:`# Add Identity UI (example)
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

# Scaffold Identity pages
dotnet aspnet-codegenerator identity -dc ApplicationDbContext`}]};case"dotnet-async-await":return{slug:"dotnet-async-await",title:"Understanding async/await in .NET",content:`
<p class="text-base leading-relaxed">
  \u{1F9F5} Imagine ordering food at a restaurant. You place the order and go back to chatting with friends. You don\u2019t just stand at the counter waiting \u2014 the food arrives later, and you continue where you left off.
</p>

<p class="mt-4">
  That\u2019s exactly how <strong>async/await</strong> works in .NET. It lets your code <strong>pause and resume</strong> without blocking the whole thread, making apps faster and more responsive.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F914} Why Use async/await?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F680} Improves performance by not blocking threads.</li>
  <li>\u{1F4F1} Makes UI apps smoother (no freezing).</li>
  <li>\u{1F310} Helps handle long-running tasks like API calls, file access, DB queries.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F527} How Does It Work?</h3>
<p>
  - Mark your method as <code>async</code><br>
  - Use <code>await</code> before a task that takes time (like an HTTP request)<br>
  - .NET does the rest: it runs it in the background and picks up where it left off
</p>

<pre class="bg-[#1F2937] text-green-400 p-4 rounded-lg overflow-auto text-sm mt-3">
<code>// Example: Simulating a delay
public async Task DoSomethingAsync()
{
    Console.WriteLine("Starting...");
    await Task.Delay(2000); // Wait for 2 seconds
    Console.WriteLine("Finished!");
}
</code>
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F504} Real-Life Usage</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>API calls:</strong> Waiting for HTTP responses</li>
  <li><strong>Database access:</strong> Querying a database</li>
  <li><strong>File I/O:</strong> Reading/writing large files</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u26A0\uFE0F Common Pitfalls</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u274C Don\u2019t block async code with <code>.Result</code> or <code>.Wait()</code></li>
  <li>\u2705 Always <code>await</code> asynchronous methods</li>
  <li>\u2705 Avoid async void (use async Task instead)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<p>
  <code>async</code>/<code>await</code> makes your .NET code cleaner, more readable, and faster \u2014 especially for I/O-bound tasks.
</p>
<p class="mt-3">
  It's like saying: \u201CI\u2019ll come back to this later, meanwhile let me handle other things.\u201D
</p>
    `,proTip:"If you\u2019re in a controller or service method, always prefer async Task return types for smoother async flow.",codeSamples:[{language:"csharp",code:`// Async file read example
public async Task<string> ReadFileAsync(string path)
{
    return await File.ReadAllTextAsync(path);
}`}]};case"dotnet-deployment":return{slug:"dotnet-deployment",title:"Deploying .NET Apps to Cloud & IIS",content:`
<p class="text-base leading-relaxed">
  \u{1F680} You\u2019ve built a cool .NET app \u2014 now how do you make it available to the world? That\u2019s where <strong>deployment</strong> comes in.
</p>

<p class="mt-4">
  Whether you\u2019re putting it on a live server, hosting on the cloud, or just testing locally with IIS, deployment is the final step to turn your code into something real users can access.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F310} Common Ways to Deploy .NET Apps</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F527} <strong>Localhost/IIS:</strong> Great for testing or internal company apps</li>
  <li>\u2601\uFE0F <strong>Cloud (Azure, AWS, etc.):</strong> Ideal for production-grade, scalable hosting</li>
  <li>\u{1F433} <strong>Docker Containers:</strong> Perfect for consistent deployments across environments</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F6E0}\uFE0F Basic Steps to Deploy with CLI</h3>
<ol class="list-decimal list-inside text-gray-300">
  <li>Build the app: <code>dotnet publish -c Release</code></li>
  <li>Copy the output folder to the server</li>
  <li>Host using IIS, Nginx, Apache, or cloud service</li>
</ol>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4C1} Folder Structure After Publish</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><code>bin/Release/net8.0/publish/</code> \u2014 Contains all the files needed to run your app</li>
  <li><code>.dll</code> \u2014 Your compiled app</li>
  <li><code>web.config</code> \u2014 Important for IIS hosting</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F329}\uFE0F Deploying to Azure</h3>
<p>
  Azure is Microsoft's cloud platform \u2014 works perfectly with .NET.
</p>
<ul class="list-disc list-inside text-gray-300">
  <li>Create a Web App in Azure portal</li>
  <li>Use Visual Studio or GitHub Actions to deploy</li>
  <li>Supports automatic scaling and HTTPS by default</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>
  Think of deployment like <strong>putting a finished movie into theaters</strong>. You\u2019ve edited it (built it), exported the final version (published it), and now you\u2019re distributing it across screens (servers).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Build with:</strong> <code>dotnet publish</code></li>
  <li><strong>Host using:</strong> IIS, Azure, Docker, or any cloud provider</li>
  <li><strong>Monitor:</strong> Use logs and metrics to track uptime and performance</li>
</ul>
<p class="mt-3">Deployment is the final bridge between your app and real users. Don\u2019t skip learning it!</p>
    `,proTip:"Start with local IIS or Azure App Services for easy setup \u2014 both integrate well with Visual Studio and .NET CLI.",codeSamples:[{language:"bash",code:`# Publish a .NET app for deployment
dotnet publish -c Release --output ./publish`}]};case"dotnet-clean-architecture":return{slug:"dotnet-clean-architecture",title:"Clean Architecture in .NET (Layered Like Pizza)",content:`
<p class="text-base leading-relaxed">
  \u{1F355} Imagine a pizza \u2014 you\u2019ve got a crispy base, tasty sauce in the middle, and the cheesy toppings on top. Each layer has its own role, but together they create the full experience.
</p>
<p class="mt-4">
  That\u2019s exactly what <strong>Clean Architecture</strong> is \u2014 organizing your code in well-separated layers so it\u2019s easier to manage, test, and scale.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F3D7}\uFE0F What is Clean Architecture?</h3>
<p>
  Clean Architecture is a software design pattern that divides your application into independent layers with clear responsibilities:
</p>

<ul class="list-disc list-inside text-gray-300 mt-3">
  <li><strong>Domain Layer:</strong> Your app\u2019s core logic (like models, entities, interfaces)</li>
  <li><strong>Application Layer:</strong> Business rules, use-cases, and service interfaces</li>
  <li><strong>Infrastructure Layer:</strong> External stuff like database access, file systems, APIs</li>
  <li><strong>Presentation Layer:</strong> UI/API controllers (what users or clients interact with)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F504} How They Communicate</h3>
<p>
  \u{1F501} <strong>Inner layers never depend on outer layers.</strong><br />
  Infrastructure and UI <em>depend on</em> the application and domain \u2014 not the other way around.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F9E0} Real-World Analogy</h3>
<p>
  Think of building a car:
</p>
<ul class="list-disc list-inside text-gray-300">
  <li><strong>Domain:</strong> Engine parts \u2014 the rules of how things work</li>
  <li><strong>Application:</strong> Assembly instructions and wiring logic</li>
  <li><strong>Infrastructure:</strong> Tools and machines (wrenches, robotic arms)</li>
  <li><strong>Presentation:</strong> Car exterior and dashboard (how users see/interact)</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F4E6} Folder Structure (Example)</h3>
<pre class="bg-[#1F2937] text-green-400 rounded-lg p-4 overflow-auto">
MyApp/
\u2502
\u251C\u2500\u2500 Domain/
\u2502   \u2514\u2500\u2500 Entities, Interfaces
\u251C\u2500\u2500 Application/
\u2502   \u2514\u2500\u2500 UseCases, DTOs, Interfaces
\u251C\u2500\u2500 Infrastructure/
\u2502   \u2514\u2500\u2500 Repositories, Services (Db, Email, etc.)
\u2514\u2500\u2500 Presentation/
    \u2514\u2500\u2500 Controllers, UI, API
</pre>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2705 Why Use It?</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>\u{1F50D} Easy to test and debug</li>
  <li>\u{1F9E9} Plug and play \u2014 change database/email system with minimal code changes</li>
  <li>\u{1F510} Keeps core logic safe from infrastructure changes</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Summary</h3>
<p>
  Clean Architecture in .NET is about <strong>keeping responsibilities separated</strong> so your app is easier to maintain, scale, and test.
</p>
<p class="mt-3">
  If you plan to work on real-world projects \u2014 Clean Architecture is a must-know!
</p>
    `,proTip:"Keep your domain and application layers free of any external dependencies \u2014 no Entity Framework, no APIs \u2014 just plain logic and rules.",codeSamples:[{language:"csharp",code:`// Example of Domain Layer Entity
public class User {
  public Guid Id { get; set; }
  public string Email { get; set; }
  public bool IsVerified { get; set; }
}`}]};case"dotnet-best-practices":return{slug:"dotnet-best-practices",title:"Best Practices Every .NET Dev Should Know",content:`
<p class="text-base leading-relaxed">
  \u{1F9E0} Great developers write code that not only works \u2014 but is clean, maintainable, and scalable. These are the habits that separate juniors from pros.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">1\uFE0F\u20E3 Structure Your Codebase Cleanly</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <strong>Clean Architecture</strong> or at least separate concerns (e.g., Controllers, Services, Repositories).</li>
  <li>Group code by feature/module \u2014 not by technical type.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">2\uFE0F\u20E3 Dependency Injection for the Win</h3>
<p>
  Let .NET\u2019s built-in DI handle service lifetimes and avoid tight coupling. Register interfaces and inject them where needed.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">3\uFE0F\u20E3 Use Configuration Wisely</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Store config values in <code>appsettings.json</code> or environment variables.</li>
  <li>Use <code>IOptions&lt;T&gt;</code> or <code>IConfiguration</code> for binding and accessing.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">4\uFE0F\u20E3 Logging, Always</h3>
<p>
  Add logging using <code>ILogger&lt;T&gt;</code> and configure Serilog or built-in providers. Logging helps you debug and monitor real apps.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">5\uFE0F\u20E3 Handle Errors Gracefully</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Wrap risky logic in <code>try-catch</code> blocks.</li>
  <li>Return meaningful errors in APIs using <code>ProblemDetails</code> or custom responses.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">6\uFE0F\u20E3 Avoid Magic Strings and Duplicates</h3>
<p>
  Use constants, enums, or config files instead of repeating hardcoded strings everywhere.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">7\uFE0F\u20E3 Async/Await Everything (Almost)</h3>
<p>
  Always make I/O calls async \u2014 for example: DB access, API calls, file read/write.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">8\uFE0F\u20E3 Write Tests \u2014 Even Basic Ones</h3>
<p>
  Cover at least your services with unit tests. Start with <code>xUnit</code> or <code>NUnit</code>. Use Moq or FakeItEasy for mocks.
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">9\uFE0F\u20E3 Secure by Default</h3>
<ul class="list-disc list-inside text-gray-300">
  <li>Use <strong>Data Annotations</strong> or FluentValidation for user input.</li>
  <li>Never trust user input \u2014 always validate and sanitize.</li>
  <li>Apply proper authentication & authorization checks.</li>
</ul>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u{1F51F} Learn LINQ, Dapper, EF Core</h3>
<p>
  Knowing how to query data cleanly and efficiently is key. Learn both Dapper (lightweight) and EF Core (ORM).
</p>

<h3 class="text-lg font-semibold mt-6 mb-2 text-white">\u2728 Final Thoughts</h3>
<p>
  These best practices aren't rules you must follow \u2014 but they will make your life easier as your app grows. 
  <strong>Write code for the developer who comes after you \u2014 even if that developer is you next month.</strong>
</p>
    `,proTip:"Always run `dotnet format` before pushing your code. It keeps things clean, consistent, and review-friendly.",codeSamples:[{language:"csharp",code:`// A simple service pattern with DI
public interface IEmailService {
  void Send(string to, string subject, string body);
}

public class EmailService : IEmailService {
  public void Send(string to, string subject, string body) {
    // send logic here
  }
}

// In Program.cs or Startup.cs
builder.Services.AddScoped<IEmailService, EmailService>();`}]};default:return}}export{o as DotNetTopicContent,t as DotNetTopics};
