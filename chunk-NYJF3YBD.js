import{b as L,c as F,d as H,g as W,p as R}from"./chunk-RRUL5IR4.js";import{Aa as f,Da as v,Ib as w,Ma as y,Na as t,Nb as D,Oa as e,P as p,Pa as M,Va as m,Yb as j,bc as k,dc as x,ib as o,jb as T,mb as g,nb as u,oa as b,ob as c,qa as E,ra as s,wa as S,za as _}from"./chunk-EFSD2UP6.js";import"./chunk-EJUJSVO6.js";function N(a,l){if(a&1&&(t(0,"pre"),o(1),e()),a&2){let i=l.$implicit;s(),T(i)}}var h=class a{constructor(l){this.sanitizer=l;this.runCode()}languages=["HTML","CSS","JavaScript"];selectedLanguage="HTML";htmlCode=`
  <h1>IgKnight Try Editor</h1>
  <p>Hello World!</p>
  <button onclick="changeText()">Click Me</button>
`;cssCode=`
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;jsCode=`
  function changeText() {
    console.log('Hey There');
    alert('You clicked the button!');
    const para = document.querySelector('p');
    if (para) {
      para.textContent = '\u{1F680} Keep learning with IgKnight!';
    }
  }
`;output="";consoleLogs=[];autoRun=!0;showConsole=!0;debounceTimer;runCode(){this.consoleLogs=[];let i=`
      <html>
        <head>
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
          <script>
            
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.join(" "));
        originalLog.apply(console, args);
        window.parent.postMessage({ type: 'console', data: logs.join('\\n') }, '*');
      };
    
            try {
              ${this.jsCode}
            } catch (err) {
              console.log(err.message);
            }
          <\/script>
        </body>
      </html>
    `;this.output=this.sanitizer.bypassSecurityTrustHtml(i)}clearCode(){this.htmlCode="",this.cssCode="",this.jsCode="",this.consoleLogs=[],this.runCode()}saveCode(){let l={html:this.htmlCode,css:this.cssCode,js:this.jsCode};localStorage.setItem("savedCode",JSON.stringify(l)),alert("Code saved successfully!")}loadSavedCode(){let l=localStorage.getItem("savedCode");if(l){let i=JSON.parse(l);this.htmlCode=i.html||"",this.cssCode=i.css||"",this.jsCode=i.js||"",this.onCodeChange()}}onMessage(l){l.data.type==="console"&&(this.consoleLogs=l.data.data.split(`
`))}onCodeChange(){this.autoRun&&(clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.runCode()},500))}static \u0275fac=function(i){return new(i||a)(S(j))};static \u0275cmp=_({type:a,selectors:[["app-try-editor"]],hostBindings:function(i,n){i&1&&m("message",function(r){return n.onMessage(r)},E)},standalone:!1,decls:69,vars:6,consts:[[1,"min-h-screen","bg-[#0F172A]","text-white","flex","flex-col"],[1,"flex","justify-between","items-center","p-4","border-b","border-gray-700"],[1,"flex","items-center","gap-3","ml-28"],["routerLink","/documentation",1,"text-white","hover:text-orange-400","mr-3"],[1,"flex","items-center"],[1,"text-3xl"],[1,"text-2xl","font-bold","bg-gradient-to-r","from-orange-400","to-orange-600","bg-clip-text","text-transparent"],[1,"text-xs","text-slate-400"],[1,"flex","items-center","gap-2"],[1,"text-center","py-6"],[1,"text-3xl","font-bold"],[1,"text-gray-400","mt-2"],[1,"flex","justify-between","items-center","bg-[#1E293B]","p-4","mx-8","rounded-lg","mb-4","shadow-lg"],[1,"flex","items-center","gap-3"],[1,"w-8","h-8","bg-gradient-to-r","from-orange-400","to-orange-600","rounded-lg","flex","items-center","justify-center"],[1,"font-semibold","text-lg","text-slate-300"],[1,"flex","gap-3"],[1,"flex","items-center","gap-2","ml-6"],["type","checkbox",1,"accent-orange-500",3,"ngModelChange","ngModel"],[1,"bg-green-500","px-4","py-2","rounded-lg","hover:bg-green-600",3,"click"],[1,"bg-red-500","px-4","py-2","rounded-lg","hover:bg-red-600",3,"click"],[1,"bg-orange-500","px-4","py-2","rounded-lg","hover:bg-orange-600",3,"click"],[1,"flex","flex-1","gap-4","px-8","pb-6","overflow-hidden"],[1,"w-1/2","bg-[#1E293B]","p-4","rounded-lg","flex","flex-col","gap-4","overflow-auto","custom-scroll","shadow-lg"],[1,"flex","justify-between","items-center","mb-2"],[1,"text-lg","font-semibold","flex","items-center","gap-3"],[1,"w-8","h-8","bg-gradient-to-r","from-purple-500","to-purple-600","rounded-lg","flex","items-center","justify-center"],[1,"bg-red-500","text-white","text-xs","font-semibold","px-3","py-1","rounded-full"],[1,"text-orange-400","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-green-400","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-blue-400","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-blue-400","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-yellow-300","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-yellow-300","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-green-400","font-semibold","mb-2"],[1,"w-full","h-80","bg-white","rounded-lg",3,"srcdoc"],[1,"text-purple-400","font-semibold","mb-2"],[1,"bg-black","p-2","rounded","text-sm","font-mono","h-32","overflow-y-auto","custom-scroll"],[4,"ngFor","ngForOf"],[1,"text-center","text-sm","text-gray-400","py-4","border-t","border-gray-700"]],template:function(i,n){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),o(4,"\u2190 Back to Home"),e(),t(5,"div",4)(6,"div",5),o(7,"\u26A1"),e(),t(8,"div")(9,"h1",6),o(10," IGKNIGHT "),e(),t(11,"p",7),o(12,"Code Editor"),e()()()(),t(13,"div",8),o(14," \u{1F319} Dark Mode "),e()(),t(15,"div",9)(16,"h1",10),o(17,"Try Out Your Code in Real-Time"),e(),t(18,"p",11),o(19,"Write HTML, CSS, or JavaScript and see the result instantly!"),e()(),t(20,"div",12)(21,"div",13)(22,"div",14),o(23," \u2699\uFE0F "),e(),t(24,"span",15),o(25,"Code Control Panel"),e()(),t(26,"div",16)(27,"label",17)(28,"input",18),c("ngModelChange",function(r){return u(n.autoRun,r)||(n.autoRun=r),r}),e(),o(29," Auto Run "),e(),t(30,"button",19),m("click",function(){return n.runCode()}),o(31," \u25B6\uFE0F Run "),e(),t(32,"button",20),m("click",function(){return n.clearCode()}),o(33," \u{1F5D1}\uFE0F Clear "),e(),t(34,"button",21),m("click",function(){return n.saveCode()}),o(35," \u{1F4BE} Save "),e()()(),t(36,"div",22)(37,"div",23)(38,"div",24)(39,"h3",25)(40,"div",26),o(41," \u{1F9E0} "),e(),o(42," Code Editor Area "),e(),t(43,"span",27),o(44,"\u{1F534} LIVE"),e()(),t(45,"div")(46,"h4",28),o(47,"HTML Editor"),e(),t(48,"textarea",29),c("ngModelChange",function(r){return u(n.htmlCode,r)||(n.htmlCode=r),r}),m("ngModelChange",function(){return n.onCodeChange()}),e()(),t(49,"div")(50,"h4",30),o(51,"CSS Editor"),e(),t(52,"textarea",31),c("ngModelChange",function(r){return u(n.cssCode,r)||(n.cssCode=r),r}),m("ngModelChange",function(){return n.onCodeChange()}),e()(),t(53,"div")(54,"h4",32),o(55,"JavaScript Editor"),e(),t(56,"textarea",33),c("ngModelChange",function(r){return u(n.jsCode,r)||(n.jsCode=r),r}),m("ngModelChange",function(){return n.onCodeChange()}),e()()(),t(57,"div",23)(58,"div")(59,"h4",34),o(60,"Live Preview"),e(),M(61,"iframe",35),e(),t(62,"div")(63,"h4",36),o(64,"Console Output"),e(),t(65,"div",37),v(66,N,2,1,"pre",38),e()()()(),t(67,"div",39),o(68," \u{1F463} Made with \u2764\uFE0F | GitHub | Report Bug | Version 1.0.0 "),e()()),i&2&&(s(28),g("ngModel",n.autoRun),s(20),g("ngModel",n.htmlCode),s(4),g("ngModel",n.cssCode),s(4),g("ngModel",n.jsCode),s(5),y("srcdoc",n.output,b),s(5),y("ngForOf",n.consoleLogs))},dependencies:[w,k,F,L,H,W],encapsulation:2})};var z=[{path:"",component:h}],C=class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=f({type:a});static \u0275inj=p({imports:[x.forChild(z),x]})};var I=class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=f({type:a});static \u0275inj=p({imports:[D,C,R]})};export{I as EditorModule};
