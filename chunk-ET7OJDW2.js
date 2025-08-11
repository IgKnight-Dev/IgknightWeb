import{b as B,c as W,d as N,g as R,p as A}from"./chunk-RRUL5IR4.js";import{Aa as b,Da as _,Ib as j,Ma as w,Na as t,Nb as L,Oa as e,P as x,Pa as m,Va as c,Y as g,Yb as D,Z as u,bc as H,dc as v,ib as o,jb as k,mb as p,nb as h,oa as M,ob as f,qa as S,ra as s,wa as E,za as T}from"./chunk-EFSD2UP6.js";import"./chunk-EJUJSVO6.js";function z(a,l){if(a&1&&(t(0,"pre"),o(1),e()),a&2){let i=l.$implicit;s(),k(i)}}var C=class a{constructor(l){this.sanitizer=l;this.runCode()}languages=["HTML","CSS","JavaScript"];selectedLanguage="HTML";htmlCode=`
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
`))}onCodeChange(){this.autoRun&&(clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.runCode()},500))}static \u0275fac=function(i){return new(i||a)(E(D))};static \u0275cmp=T({type:a,selectors:[["app-try-editor"]],hostBindings:function(i,n){i&1&&c("message",function(r){return n.onMessage(r)},S)},standalone:!1,decls:92,vars:6,consts:[[1,"min-h-screen","bg-[#0F172A]","text-white","flex","flex-col","relative"],[1,"lg:hidden","absolute","inset-0","bg-black","bg-opacity-85","flex","flex-col","items-center","justify-center","p-6","text-center","z-50","pointer-events-auto"],[1,"text-3xl","font-bold","mb-4"],[1,"mb-6","text-gray-300"],["onclick","history.back()",1,"bg-orange-500","hover:bg-orange-600","text-white","px-6","py-3","rounded-lg","font-semibold"],[1,"flex","justify-between","items-center","p-4","border-b","border-gray-700"],[1,"flex","items-center","gap-3","ml-28"],["routerLink","/documentation",1,"text-white","hover:text-orange-400","mr-3"],[1,"flex","items-center"],[1,"text-3xl"],[1,"text-2xl","font-bold","bg-gradient-to-r","from-orange-400","to-orange-600","bg-clip-text","text-transparent"],[1,"text-xs","text-slate-400"],[1,"flex","items-center","gap-2"],[1,"text-center","py-6"],[1,"text-3xl","font-bold"],[1,"text-gray-400","mt-2"],[1,"flex","justify-between","items-center","bg-[#1E293B]","p-4","mx-8","rounded-lg","mb-4","shadow-lg"],[1,"flex","items-center","gap-3"],[1,"w-8","h-8","bg-gradient-to-r","from-orange-400","to-orange-600","rounded-lg","flex","items-center","justify-center"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","lucide-settings-icon","lucide-settings"],["d","M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"],["cx","12","cy","12","r","3"],[1,"font-semibold","text-lg","text-slate-300"],[1,"flex","items-center","gap-4","mt-4","ml-6","flex-wrap"],["type","checkbox",1,"accent-orange-500",3,"ngModelChange","ngModel"],[1,"flex","items-center","gap-2","bg-green-500","px-4","py-2","rounded-lg","hover:bg-green-600","text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"],[1,"flex","items-center","gap-2","bg-red-500","px-4","py-2","rounded-lg","hover:bg-red-600","text-white",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"],["stroke-linecap","round","stroke-linejoin","round","d","M3 6h18"],["stroke-linecap","round","stroke-linejoin","round","d","M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"],[1,"flex","flex-1","gap-4","px-8","pb-6","overflow-hidden"],[1,"w-1/2","bg-[#1E293B]","p-4","rounded-lg","flex","flex-col","gap-4","overflow-auto","custom-scroll","shadow-lg"],[1,"flex","justify-between","items-center","mb-2"],[1,"text-lg","font-semibold","flex","items-center","gap-3"],[1,"w-8","h-8","bg-gradient-to-r","from-purple-500","to-purple-600","rounded-lg","flex","items-center","justify-center"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide","lucide-brain-icon","lucide-brain"],["d","M12 18V5"],["d","M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"],["d","M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"],["d","M17.997 5.125a4 4 0 0 1 2.526 5.77"],["d","M18 18a4 4 0 0 0 2-7.464"],["d","M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"],["d","M6 18a4 4 0 0 1-2-7.464"],["d","M6.003 5.125a4 4 0 0 0-2.526 5.77"],[1,"bg-red-500","text-white","text-xs","font-semibold","px-3","py-1","rounded-full"],[1,"text-orange-400","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-orange-400","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-blue-400","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-blue-400","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-yellow-300","font-semibold","mb-2"],[1,"w-full","h-40","p-2","bg-[#111827]","text-amber-300","rounded-lg","resize-none","custom-scroll",3,"ngModelChange","ngModel"],[1,"text-green-400","font-semibold","mb-2"],[1,"w-full","h-80","bg-white","rounded-lg",3,"srcdoc"],[1,"text-purple-400","font-semibold","mb-2"],[1,"bg-black","p-2","rounded","text-sm","font-mono","h-32","overflow-y-auto","custom-scroll"],[4,"ngFor","ngForOf"],[1,"text-center","text-sm","text-gray-400","py-4","border-t","border-gray-700"]],template:function(i,n){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"\u{1F6AB} Not Supported on Mobile"),e(),t(4,"p",3),o(5," This code editor works best on desktop or laptop devices. "),m(6,"br"),o(7," Please use a larger screen to edit code. "),e(),t(8,"button",4),o(9," Go Back "),e()(),t(10,"div",5)(11,"div",6)(12,"button",7),o(13,"\u2190 Back to Home"),e(),t(14,"div",8)(15,"div",9),o(16,"\u26A1"),e(),t(17,"div")(18,"h1",10),o(19," IGKNIGHT "),e(),t(20,"p",11),o(21,"Code Editor"),e()()()(),t(22,"div",12),o(23," \u{1F319} Dark Mode "),e()(),t(24,"div",13)(25,"h1",14),o(26,"Try Out Your Code in Real-Time"),e(),t(27,"p",15),o(28,"Write HTML, CSS, or JavaScript and see the result instantly!"),e()(),t(29,"div",16)(30,"div",17)(31,"div",18),g(),t(32,"svg",19),m(33,"path",20)(34,"circle",21),e()(),u(),t(35,"span",22),o(36,"Code Control Panel"),e()(),t(37,"div",23)(38,"label",12)(39,"input",24),f("ngModelChange",function(r){return h(n.autoRun,r)||(n.autoRun=r),r}),e(),o(40," Auto Run "),e(),t(41,"button",25),c("click",function(){return n.runCode()}),g(),t(42,"svg",26),m(43,"path",27),e(),o(44," Run "),e(),u(),t(45,"button",28),c("click",function(){return n.clearCode()}),g(),t(46,"svg",26),m(47,"path",29)(48,"path",30)(49,"path",31),e(),o(50," Clear "),e()()(),u(),t(51,"div",32)(52,"div",33)(53,"div",34)(54,"h3",35)(55,"div",36),g(),t(56,"svg",37),m(57,"path",38)(58,"path",39)(59,"path",40)(60,"path",41)(61,"path",42)(62,"path",43)(63,"path",44)(64,"path",45),e()(),o(65," Code Editor Area "),e(),u(),t(66,"span",46),o(67,"\u{1F534} LIVE"),e()(),t(68,"div")(69,"h4",47),o(70,"HTML Editor"),e(),t(71,"textarea",48),f("ngModelChange",function(r){return h(n.htmlCode,r)||(n.htmlCode=r),r}),c("ngModelChange",function(){return n.onCodeChange()}),e()(),t(72,"div")(73,"h4",49),o(74,"CSS Editor"),e(),t(75,"textarea",50),f("ngModelChange",function(r){return h(n.cssCode,r)||(n.cssCode=r),r}),c("ngModelChange",function(){return n.onCodeChange()}),e()(),t(76,"div")(77,"h4",51),o(78,"JavaScript Editor"),e(),t(79,"textarea",52),f("ngModelChange",function(r){return h(n.jsCode,r)||(n.jsCode=r),r}),c("ngModelChange",function(){return n.onCodeChange()}),e()()(),t(80,"div",33)(81,"div")(82,"h4",53),o(83,"Live Preview"),e(),m(84,"iframe",54),e(),t(85,"div")(86,"h4",55),o(87,"Console Output"),e(),t(88,"div",56),_(89,z,2,1,"pre",57),e()()()(),t(90,"div",58),o(91," \u{1F463} Made with \u2764\uFE0F | Version 1.0.0 "),e()()),i&2&&(s(39),p("ngModel",n.autoRun),s(32),p("ngModel",n.htmlCode),s(4),p("ngModel",n.cssCode),s(4),p("ngModel",n.jsCode),s(5),w("srcdoc",n.output,M),s(5),w("ngForOf",n.consoleLogs))},dependencies:[j,H,W,B,N,R],encapsulation:2})};var V=[{path:"",component:C}],y=class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=b({type:a});static \u0275inj=x({imports:[v.forChild(V),v]})};var I=class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=b({type:a});static \u0275inj=x({imports:[L,y,A]})};export{I as EditorModule};
