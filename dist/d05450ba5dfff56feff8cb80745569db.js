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
})({8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var resume = {
  name: 'Wendy Huang',
  slogan: 'I want to build tools for humans',
  email: 'melonh0327@gmail.com',
  website: 'https://melonhuang.github.io',
  phonePrefix: '(86)',
  phone: '18588640327',
  summary: 'I’m a <strong>Senior Front-End Engineer</strong> with <strong>4 years working experience</strong>. Crafting interesting and useful tools is my jam. In the recent past, I have <strong>given talks</strong> at development conferences, <strong>started several open source projects</strong>, and actively participated in the <strong>translation of technical books</strong>.',
  works: [{
    company: 'Qihoo 360 Technology Co. Lt',
    position: 'Senior Front-End Developer - <strong>Annual Excellent Employee of department</strong>',
    duration: '2013 - 2017',
    projects: [{
      name: 'An online presentation editor - Shengxiang',
      website: 'https://ppt.baomitu.com/editor',
      duration: '2016 - 2017',
      details: ['<strong>Led a team</strong> of four Front-End developers, enforced coding standards, kept the group engaged and passionate.', '<strong>Designed predictable, scalable architecture</strong> with Vue&Vuex (React&Redux alike Javascript libraries).', 'Automated workflow for development, testing, and production environment with Gulp, Webpack, PostCSS, etc.', 'Designed database tables and implemented Back-End logics and APIs using ThinkJS (a Back-End MVC Framework).', 'Designed innovative features and transformed them into coordinated ART and IT deliverables.']
    }, {
      name: 'An interactive mobile storytelling platform - Baomitu',
      duration: '2015 - 2016',
      website: 'https://www.baomitu.com/',
      details: ['Built <strong>componentized architecture</strong> by designing Nova.js ( a web component framework like Polymer).']
    }, {
      name: 'Mobile Guard Department',
      duration: '2014 - 2015',
      details: ['Developed official websites, mobile-side pages for special events and cross-device webviews.', 'Made <strong>quick response and decisions</strong> to several independent and <strong>concurrent</strong> requirements every day, while making effective plans and guaranteeing high quality deliverables.', 'Delivered <strong>high performance</strong> and compatible <strong>cross-device</strong> web pages.', 'Designed NovaUI (an open source <strong>mobile-side</strong> component gallery) to share common mobile-side components with the other engineers.']
    }, {
      name: 'CRM System',
      duration: '2013 - 2014',
      details: ['Wrote consistent, concise, and well documented codes to build pages full of form manipulations and charts.', 'Abstracted and designed common plugins for reusability.']
    }]
  }],
  projects: [{
    name: 'Nova.js',
    website: 'http://melonhuang.github.io/nova/',
    duration: '2015 - 2016',
    intro: 'A production-ready Web Component Framework, only 12KB after gziped, providing an easy way to define custom element with data binding, CSS Scoping, etc.'
  }, {
    name: 'NovaUI',
    website: 'http://75team.github.io/novaUI/',
    duration: '2013 - 2016',
    intro: 'A mobile side component gallery with high animation performance, flexible APIs and clear documents.'
  }, {
    name: 'AnimationGenerator',
    website: 'https://chrome.google.com/webstore/detail/animation-generator/kionilekanaambbbnjghihllokicnnlj?utm_source=chrome-ntp-ico',
    duration: '2014 - 2014',
    intro: 'A Chrome Devtools extension which can help generate animation codes for web pages quickly.'
  }],
  speaking: [{
    conference: 'The 2nd CSSConf of China',
    intro: 'High Performance Animation',
    duration: '2015'
  }, {
    conference: 'Other talks',
    intro: 'How Browser Renders, <br>Mobile-side Development, <br>Web Component, etc',
    website: 'https://melonhuang.github.io/sharing/',
    duration: '2013 - now'
  }],
  publications: [{
    name: 'Large Scale Javascript',
    intro: 'Translated Chapters 8 - 19 from English to Madarine',
    duration: '2016'
  }, {
    name: 'The Mobile Handbook',
    intro: 'Translated Chapters 3 - 4 from English to Mandarine',
    duration: '2015'
  }],
  education: [{
    name: 'Sun Yat-sen University',
    intro: 'Software Engineering BSc',
    duration: '2009 - 2013'
  }],
  skills: [{
    name: 'Modern Web Stack',
    list: ['HTML5, CSS3, Javascript, DOM scripting', 'Mobile-Side development, responsive web design', 'Node.js and MVC Back-End Framework', 'Network knowleges including HTTP protol, TCP handshakes, etc', 'Fullstack, able to design database tables, implement Back-End logics and design UI', 'Good documenting habit']
  }, {
    name: 'Rich Experience in',
    list: ['Performance Optimization', 'Large-scale web applications, designing scalable architecture and workflow', 'Javascript Application Framework - Vue.js', 'Cross-browser and cross-device development, handling compatibility issues']
  }, {
    name: "Tools",
    list: ['npm, gulp, webpack, postCSS, babel, thinkjs, eslint, mocha.js, chai.js, etc', 'vim, git/svn, chrome devtools, photoshop, zsh, etc', 'Vue.js, Polymer, jQuery, Zepto, etc']
  }]
};

exports.default = resume;
},{}],16:[function(require,module,exports) {
// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function () {
	"use strict";

	var doT = {
		name: "doT",
		version: "1.1.1",
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams:/^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname:	"it",
			strip:		true,
			append:		true,
			selfcontained: false,
			doNotSkipEncoded: false
		},
		template: undefined, //fn, compile template
		compile:  undefined, //fn, for express
		log: true
	}, _globals;

	doT.encodeHTMLSource = function(doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	};

	_globals = (function(){ return this || (0,eval)("this"); }());

	/* istanbul ignore else */
	if (typeof module !== "undefined" && module.exports) {
		module.exports = doT;
	} else if (typeof define === "function" && define.amd) {
		define(function(){return doT;});
	} else {
		_globals.doT = doT;
	}

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === "string") ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf("def.") === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ":") {
					if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
						def[code] = {arg: param, text: v};
					});
					if (!(code in def)) def[code]= value;
				} else {
					new Function("def", "def['"+code+"']=" + value)(def);
				}
			}
			return "";
		})
		.replace(c.use || skip, function(m, code) {
			if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
				if (def[d] && def[d].arg && param) {
					var rw = (d+":"+param).replace(/'|\\/g, "_");
					def.__exp = def.__exp || {};
					def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
					return s + "def.__exp['"+rw+"']";
				}
			});
			var v = new Function("def", "return " + code)(def);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
			str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
			.replace(/'|\\/g, "\\$&")
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
			.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
			//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode) {
			if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
			str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
				+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
				+ str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			/* istanbul ignore else */
			if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());

},{}],5:[function(require,module,exports) {
"use strict";

var _resume = require("./resume");

var _resume2 = _interopRequireDefault(_resume);

var _dot = require("dot");

var _dot2 = _interopRequireDefault(_dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tmplText = document.querySelector('#template').innerHTML;

var tmplFun = _dot2.default.template(tmplText);
var resultText = tmplFun(_resume2.default);

document.querySelector('#resume').innerHTML = resultText;
},{"./resume":8,"dot":16}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:51022/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,5])