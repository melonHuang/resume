// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={name:"Wendy Huang",slogan:"I want to build tools for humans",email:"melonh0327@gmail.com",website:"https://github.com/melonHuang",phonePrefix:"(86)",phone:"18588640327",summary:"I’m a <strong>Senior Front-End Engineer</strong> with <strong>4 years working experience</strong>. Crafting interesting and useful tools is my jam. In the recent past, I have <strong>given talks</strong> at development conferences, <strong>started several open source projects</strong>, and actively participated in the <strong>translation of technical books</strong>.",works:[{company:"Qihoo 360 Technology Co. Lt",position:"Senior Front-End Developer - <strong>Annual Excellent Employee of department</strong>",duration:"2013 - 2017",projects:[{name:"Shengxiang - an online presentation editor",website:"https://ppt.baomitu.com/editor",duration:"2016 - 2017",details:["<strong>Led a team</strong> of four Front-End developers, enforced coding standards, kept the group engaged and passionate.","<strong>Designed predictable, scalable architecture</strong> with Vue&Vuex (React&Redux alike Javascript libraries).","Automated workflow for development, testing, and production environment with Gulp, Webpack, PostCSS, etc.","Designed database tables and implemented Back-End logics and APIs using ThinkJS (a Back-End MVC Framework).","Designed innovative features and transformed them into coordinated ART and IT deliverables."]},{name:"Baomitu - an interactive mobile storytelling platform",duration:"2015 - 2016",website:"https://www.baomitu.com/",details:["Built <strong>componentized architecture</strong> by designing Nova.js ( a web component framework like Polymer)."]},{name:"Mobile Guard Department",duration:"2014 - 2015",details:["Developed official websites, mobile-side pages for special events and cross-device webviews.","Made <strong>quick response and decisions</strong> to several independent and <strong>concurrent</strong> requirements every day, while making effective plans and guaranteeing high quality deliverables.","Delivered <strong>high performance</strong> and compatible <strong>cross-device</strong> web pages.","Designed NovaUI (an open source <strong>mobile-side</strong> component gallery) to share common mobile-side components with the other engineers."]},{name:"CRM System",duration:"2013 - 2014",details:["Wrote consistent, concise, and well documented codes to build pages full of form manipulations and charts.","Abstracted and designed common plugins for reusability."]}]}],projects:[{name:"Nova.js",website:"http://melonhuang.github.io/nova/",duration:"2015 - 2016",intro:"A production-ready Web Component Framework, only 12KB after gziped, providing an easy way to define custom element with data binding, CSS Scoping, etc."},{name:"NovaUI",website:"http://75team.github.io/novaUI/",duration:"2013 - 2016",intro:"A mobile side component gallery with high animation performance, flexible APIs and clear documents."},{name:"AnimationGenerator",website:"https://chrome.google.com/webstore/detail/animation-generator/kionilekanaambbbnjghihllokicnnlj?utm_source=chrome-ntp-ico",duration:"2014 - 2014",intro:"A Chrome Devtools extension which can help generate animation codes for web pages quickly."}],speaking:[{conference:"The 2nd CSSConf of China",intro:"High Performance Animation",duration:"2015"},{conference:"Other talks",intro:"How Browser Renders, <br>Mobile-side Development, <br>Web Component, etc",website:"https://melonhuang.github.io/sharing/",duration:"2013 - now"}],publications:[{name:"Large Scale Javascript",intro:"Translated Chapters 8 - 19 from English to Madarine",duration:"2016"},{name:"The Mobile Handbook",intro:"Translated Chapters 3 - 4 from English to Mandarine",duration:"2015"}],education:[{name:"Sun Yat-sen University",intro:"Software Engineering BSc",duration:"2009 - 2013"}],skills:[{name:"Modern Web Stack",list:["HTML5, CSS3, Javascript, DOM scripting","Mobile-Side development, responsive web design","Node.js and MVC Back-End Framework","Network knowleges including HTTP protol, TCP handshakes, etc","Fullstack, able to design database tables, implement Back-End logics and design UI","Good documenting habit"]},{name:"Rich Experience in",list:["Performance Optimization","Large-scale web applications, designing scalable architecture and workflow","Javascript Application Framework - Vue.js","Cross-browser and cross-device development, handling compatibility issues"]},{name:"Tools",list:["npm, gulp, webpack, postCSS, babel, thinkjs, eslint, mocha.js, chai.js, etc","vim, git/svn, chrome devtools, photoshop, zsh, etc","Vue.js, Polymer, jQuery, Zepto, etc"]}]};exports.default=e;
},{}],14:[function(require,module,exports) {
!function(){"use strict";var e,n={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};n.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(e){return e?e.toString().replace(t,function(e){return n[e]||e}):""}},e=function(){return this||(0,eval)("this")}(),"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):e.doT=n;var t={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},r=/$^/;function o(e,n,t){return("string"==typeof n?n:n.toString()).replace(e.define||r,function(n,r,o,a){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in t||(":"===o?(e.defineParams&&a.replace(e.defineParams,function(e,n,o){t[r]={arg:n,text:o}}),r in t||(t[r]=a)):new Function("def","def['"+r+"']="+a)(t)),""}).replace(e.use||r,function(n,r){e.useParams&&(r=r.replace(e.useParams,function(e,n,r,o){if(t[r]&&t[r].arg&&o){var a=(r+":"+o).replace(/'|\\/g,"_");return t.__exp=t.__exp||{},t.__exp[a]=t[r].text.replace(new RegExp("(^|[^\\w$])"+t[r].arg+"([^\\w$])","g"),"$1"+o+"$2"),n+"def.__exp['"+a+"']"}}));var a=new Function("def","return "+r)(t);return a?o(e,a,t):a})}function a(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}n.template=function(i,c,u){var d,s,p=(c=c||n.templateSettings).append?t.append:t.split,l=0,f=c.use||c.define?o(c,i,u||{}):i;f=("var out='"+(c.strip?f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):f).replace(/'|\\/g,"\\$&").replace(c.interpolate||r,function(e,n){return p.start+a(n)+p.end}).replace(c.encode||r,function(e,n){return d=!0,p.startencode+a(n)+p.end}).replace(c.conditional||r,function(e,n,t){return n?t?"';}else if("+a(t)+"){out+='":"';}else{out+='":t?"';if("+a(t)+"){out+='":"';}out+='"}).replace(c.iterate||r,function(e,n,t,r){return n?(l+=1,s=r||"i"+l,n=a(n),"';var arr"+l+"="+n+";if(arr"+l+"){var "+t+","+s+"=-1,l"+l+"=arr"+l+".length-1;while("+s+"<l"+l+"){"+t+"=arr"+l+"["+s+"+=1];out+='"):"';} } out+='"}).replace(c.evaluate||r,function(e,n){return"';"+a(n)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),d&&(c.selfcontained||!e||e._encodeHTML||(e._encodeHTML=n.encodeHTMLSource(c.doNotSkipEncoded)),f="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+n.encodeHTMLSource.toString()+"("+(c.doNotSkipEncoded||"")+"));"+f);try{return new Function(c.varname,f)}catch(e){throw e}},n.compile=function(e,t){return n.template(e,null,t)}}();
},{}],5:[function(require,module,exports) {
"use strict";var e=require("./resume"),r=n(e),t=require("dot"),u=n(t);function n(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#template").innerHTML,a=u.default.template(l),d=a(r.default);document.querySelector("#resume").innerHTML=d;
},{"./resume":7,"dot":14}]},{},[5])