/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,r){function e(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=113},130:function(t,r,e){"use strict";var n=e(37);e.n(n).a},131:function(t,r,e){(t.exports=e(40)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},132:function(t,r,e){"use strict";var n=e(38);e.n(n).a},133:function(t,r,e){(t.exports=e(40)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},134:function(t,r,e){"use strict";var n=e(39);e.n(n).a},135:function(t,r,e){(t.exports=e(40)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.nav{list-style:none;margin:0;padding:0}.nav,.nav li{text-align:center}.nav li{display:inline-block;height:35px;line-height:35px;width:100px;border:1px solid #ccc;box-shadow:0 0 10px #eee;margin:10px;cursor:pointer;border-radius:10px;background-color:#fff}.nav li:hover,li.nuxt-link-exact-active{background-color:#35495e;border:1px solid #35495e;color:#fff;box-shadow:0 0 20px #eee}",""])},136:function(t,r,e){"use strict";e.r(r);e(57),e(66),e(69);var n=e(20),i=e.n(n),o=(e(49),e(50),e(93),e(4)),a=e.n(o),s=(e(95),e(96),e(74),e(27),e(76),e(75),e(100),e(112),e(0)),u=(e(81),e(113)),c=u.keys();function p(t){var r=u(t);return r.default||r}var f={},h=!0,d=!1,l=void 0;try{for(var x,v=c[Symbol.iterator]();!(h=(x=v.next()).done);h=!0){var m=x.value;f[m.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(m)}}catch(t){d=!0,l=t}finally{try{h||null==v.return||v.return()}finally{if(d)throw l}}var g=f,y=(e(114),e(115),e(116),e(118),e(120),e(121),e(124),e(21)),b=e.n(y),w=function(){return{}};function _(t){return t.then(function(t){return t.default||t})}function C(t,r){var e=t.options.data||w;!r&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var n=e.call(this);return this.$ssrContext&&(r=this.$ssrContext.asyncData[t.cid]),b()({},n,r)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function $(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function R(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,e){return Object.keys(t.components).map(function(n){return r&&r.push(e),t.components[n]})}))}function E(t,r){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return Object.keys(t.components).reduce(function(n,i){return t.components[i]?n.push(r(t.components[i],t.instances[i],t,i,e)):delete t.components[i],n},[])}))}function T(t){return Promise.all(E(t,function(){var t=a()(regeneratorRuntime.mark(function t(r,e,n,i){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof r||r.options){t.next=4;break}return t.next=3,r();case 3:r=t.sent;case 4:return n.components[i]=$(r),t.abrupt("return",n.components[i]);case 6:case"end":return t.stop()}},t,this)}));return function(r,e,n,i){return t.apply(this,arguments)}}()))}function A(t){return N.apply(this,arguments)}function N(){return(N=a()(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(r);case 2:return t.abrupt("return",b()({},r,{meta:R(r).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function S(t,r){return M.apply(this,arguments)}function M(){return(M=a()(regeneratorRuntime.mark(function t(r,e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.context||(r.context={isStatic:!0,isDev:!1,isHMR:!1,app:r,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(r.context.req=e.req),e.res&&(r.context.res=e.res),r.context.redirect=function(t,e,n){if(t){r.context._redirected=!0;var o=i()(e);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=e||{},e=t,o=i()(e),t=302),"object"===o&&(e=r.router.resolve(e).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(e))throw e=J(e,n),window.location.replace(e),new Error("ERR_REDIRECT");r.context.next({path:e,query:n,status:t})}},r.context.nuxtState=window.__NUXT__),r.context.next=e.next,r.context._redirected=!1,r.context._errored=!1,r.context.isHMR=!!e.isHMR,!e.route){t.next=9;break}return t.next=8,A(e.route);case 8:r.context.route=t.sent;case 9:if(r.context.params=r.context.route.params||{},r.context.query=r.context.route.query||{},!e.from){t.next=15;break}return t.next=14,A(e.from);case 14:r.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,r){var e;return(e=2===t.length?new Promise(function(e){t(r,function(t,n){t&&r.error(t),e(n=n||{})})}):t(r))&&(e instanceof Promise||"function"==typeof e.then)||(e=Promise.resolve(e)),e}function U(t,r){var e=window.location.pathname;return"hash"===r?window.location.hash.replace(/^#\//,""):(t&&0===e.indexOf(t)&&(e=e.slice(t.length)),decodeURI(e||"/")+window.location.search+window.location.hash)}function q(t,r){return function(t){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"===i()(t[e])&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,n){for(var i="",o=e||{},a=n||{},s=a.pretty?k:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=o[c.name||"pathMatch"],f=void 0;if(null==p){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=s(p[h]),!r[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!r[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');i+=c.prefix+f}}else i+=c}return i}}(function(t,r){var e,n=[],i=0,o=0,a="",s=r&&r.delimiter||"/";for(;null!=(e=P.exec(t));){var u=e[0],c=e[1],p=e.index;if(a+=t.slice(o,p),o=p+u.length,c)a+=c[1];else{var f=t[o],h=e[2],d=e[3],l=e[4],x=e[5],v=e[6],m=e[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,y="+"===v||"*"===v,b="?"===v||"*"===v,w=e[2]||s,_=l||x;n.push({name:d||i++,prefix:h||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!m,pattern:_?B(_):m?".*":"[^"+z(w)+"]+?"})}}o<t.length&&(a+=t.substr(o));a&&n.push(a);return n}(t,r))}function D(t,r){var e={},n=b()({},t,r);for(var i in n)String(t[i])!==String(r[i])&&(e[i]=!0);return e}function O(t){var r;if(t.message||"string"==typeof t)r=t.message||t;else try{r=JSON.stringify(t,null,2)}catch(e){r="[".concat(t.constructor.name,"]")}return{message:r,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function J(t,r){var e,n=t.indexOf("://");-1!==n?(e=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));var i,o=t.split("/"),a=(e?e+"://":"//")+o.shift(),s=o.filter(Boolean).join("/");return 2===(o=s.split("#")).length&&(s=o[0],i=o[1]),a+=s?"/"+s:"",r&&"{}"!==JSON.stringify(r)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(r){var e=t[r];return null==e?"":Array.isArray(e)?e.slice().map(function(t){return[r,"=",t].join("")}).join("&"):r+"="+e}).filter(Boolean).join("&")}(r)),a+=i?"#"+i:""}var I=e(82),K=e.n(I),H=e(56),F=function(){return _(e.e(2).then(e.bind(null,144)))},Q=function(){return _(e.e(3).then(e.bind(null,145)))};s.a.use(H.a),window.history.scrollRestoration="manual";var G=function(t,r,e){var n=!1;return t.matched.length<2?n={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(n={x:0,y:0}),e&&(n=e),new Promise(function(r){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(n={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}r(n)})})};var V=e(83),W=e.n(V).a,X={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,r){var e=r.parent,n=r.data,i=r.props;n.nuxtChild=!0;for(var o=e,a=e.$nuxt.nuxt.transitions,s=e.$nuxt.nuxt.defaultTransition,u=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&u++,e=e.$parent;n.nuxtChildDepth=u;var c=a[u]||s,p={};Y.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var f={};Z.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(o))});var h=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(o,t)};var d=[t("router-view",n)];return i.keepAlive&&(d=[t("keep-alive",{props:i.keepAliveProps},d)]),t("transition",{props:p,on:f},d)}},Y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],Z=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],j={name:"nuxt-link",functional:!0,render:function(t,r){return t("router-link",r.data,r.children)}},tt={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},rt=(e(130),e(19)),et=Object(rt.a)(tt,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"logo"},[r("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);et.options.__file="nuxt-error.vue";var nt=et.exports,it={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||q(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:X,NuxtError:nt}},ot={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var r=t(!1);return this.show&&(r=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),r}},at=(e(132),Object(rt.a)(ot,void 0,void 0,!1,null,null,null));at.options.__file="nuxt-loading.vue";var st=at.exports,ut=(e(134),Object(rt.a)({},function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("ul",{staticClass:"nav"},[r("nuxt-link",{attrs:{to:"/",tag:"li"}},[this._v("首页")]),this._v(" "),r("nuxt-link",{attrs:{to:"/about",tag:"li"}},[this._v("关于")])],1),this._v(" "),r("nuxt")],1)},[],!1,null,null,null));ut.options.__file="default.vue";var ct={_default:ut.exports},pt={head:{title:"vue-ueditor-wrap-nuxt",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"demo based on nuxt for vue-ueditor-wrap"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,r){var e=t("nuxt-loading",{ref:"loading"}),n=t(this.layout||"nuxt"),i=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),o=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[i]);return t("div",{domProps:{id:"__nuxt"}},[e,o])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ct["_"+t]||(t="default"),this.layoutName=t,this.layout=ct["_"+t],this.layout},loadLayout:function(t){return t&&ct["_"+t]||(t="default"),Promise.resolve(ct["_"+t])}},components:{NuxtLoading:st}};s.a.component(W.name,W),s.a.component(X.name,X),s.a.component(j.name,j),s.a.component(it.name,it),s.a.use(K.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ft={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ht(){return(ht=a()(regeneratorRuntime.mark(function t(r){var e,n,i,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new H.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:G,routes:[{path:"/about",component:F,name:"about"},{path:"/",component:Q,name:"index"}],fallback:!1});case 2:return e=t.sent,n=b()({router:e,nuxt:{defaultTransition:ft,transitions:[ft],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ft,{name:t}):Object.assign({},ft,t):ft}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,n.context._errored=!!t,t=t?O(t):null;var e=this.nuxt||this.$options.nuxt;return e.dateErr=Date.now(),e.err=t,r&&(r.nuxt.error=t),t}}},pt),i=r?r.next:function(t){return n.router.push(t)},r?o=e.resolve(r.url).route:(a=U(e.options.base),o=e.resolve(a).route),t.next=8,S(n,{route:o,next:i,error:n.nuxt.error.bind(n),payload:r?r.payload:void 0,req:r?r.req:void 0,res:r?r.res:void 0,beforeRenderFns:r?r.beforeRenderFns:void 0});case 8:t.next=11;break;case 11:return t.abrupt("return",{app:n,router:e});case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var dt,lt,xt=[],vt=window.__NUXT__||{};function mt(t,r,e){var n=function(t){var n=function(t,r){if(!t||!t.options||!t.options[r])return{};var e=t.options[r];if("function"==typeof e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return e.apply(void 0,i)}return e}(t,"transition",r,e)||{};return"string"==typeof n?{name:n}:n};return t.map(function(t){var r=Object.assign({},n(t));if(e&&e.matched.length&&e.matched[0].components.default){var i=n(e.matched[0].components.default);Object.keys(i).filter(function(t){return i[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){r[t]=i[t]})}return r})}function gt(t,r,e){return yt.apply(this,arguments)}function yt(){return(yt=a()(regeneratorRuntime.mark(function t(r,e,n){var i,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!dt.nuxt.err||e.path!==r.path,this._queryChanged=JSON.stringify(r.query)!==JSON.stringify(e.query),this._diffQuery=this._queryChanged?D(r.query,e.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,T(r);case 7:i=t.sent,!this._pathChanged&&this._queryChanged&&i.some(function(t){var r=t.options.watchQuery;return!0===r||!!Array.isArray(r)&&r.some(function(t){return o._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),n(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",r,e,error),n(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function bt(t,r){return vt.serverRendered&&r&&C(t,r),t._Ctor=t,t}function wt(t,r,e){var n=this,i=[],o=!1;if(void 0!==e&&(i=[],e.middleware&&(i=i.concat(e.middleware)),t.forEach(function(t){t.options.middleware&&(i=i.concat(t.options.middleware))})),i=i.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(o=!0,n.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!o)return function t(r,e){return!r.length||e._redirected||e._errored?Promise.resolve():L(r[0],e).then(function(){return t(r.slice(1),e)})}(i,r)}function _t(t,r,e){return Ct.apply(this,arguments)}function Ct(){return(Ct=a()(regeneratorRuntime.mark(function t(r,e,n){var i,o,a,u,c,p,f,h,d,l,x,v,m,g,y,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",n());case 2:return xt=r===e?[]:R(e,i=[]).map(function(t,r){return q(e.matched[i[r]].path)(e.params)}),o=!1,a=function(t){e.path===t.path&&w.$loading.finish&&w.$loading.finish(),e.path!==t.path&&w.$loading.pause&&w.$loading.pause(),o||(o=!0,n(t))},t.next=7,S(dt,{route:r,from:e,next:a.bind(this)});case 7:if(this._dateLastError=dt.nuxt.dateErr,this._hadError=!!dt.nuxt.err,(c=R(r,u=[])).length){t.next=25;break}return t.next=14,wt.call(this,c,dt.context);case 14:if(!o){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof nt.layout?nt.layout(dt.context):nt.layout);case 18:return p=t.sent,t.next=21,wt.call(this,c,dt.context,p);case 21:if(!o){t.next=23;break}return t.abrupt("return");case 23:return dt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",n());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(mt(c,r,e)),t.prev=27,t.next=30,wt.call(this,c,dt.context);case 30:if(!o){t.next=32;break}return t.abrupt("return");case 32:if(!dt.context._errored){t.next=34;break}return t.abrupt("return",n());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(dt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,wt.call(this,c,dt.context,f);case 41:if(!o){t.next=43;break}return t.abrupt("return");case 43:if(!dt.context._errored){t.next=45;break}return t.abrupt("return",n());case 45:h=!0,t.prev=46,d=!0,l=!1,x=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(d=(m=v.next()).done){t.next=64;break}if("function"==typeof(g=m.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(dt.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),l=!0,x=t.t0;case 70:t.prev=70,t.prev=71,d||null==v.return||v.return();case 73:if(t.prev=73,!l){t.next=76;break}throw x;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",n());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",n());case 87:return t.next=89,Promise.all(c.map(function(t,e){if(t._path=q(r.matched[u[e]].path)(r.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==xt[e])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var i=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=o&&a?30:45;if(o){var c=L(t.options.asyncData,dt.context).then(function(r){C(t,r),w.$loading.increase&&w.$loading.increase(s)});i.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(dt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),i.push(p)}return Promise.all(i)}));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),n()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(y=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",r,e,y));case 97:return xt=[],_=y,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(b=nt.layout)&&(b=b(dt.context)),t.next=103,this.loadLayout(b);case 103:this.error(y),this.$nuxt.$emit("routeChanged",r,e,y),n(!1);case 106:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function $t(t,r){E(t,function(t,r,e,n){return"object"!==i()(t)||t.options||((t=s.a.extend(t))._Ctor=t,e.components[n]=t),t})}function Rt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var r=this.$options.nuxt.err?nt.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(dt.context)),this.setLayout(r)}function Et(t,r){var e=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var r=[],n=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,e){return Object.keys(t.instances).map(function(n){return r&&r.push(e),t.instances[n]})}))}(t,r),i=R(t,r);n.forEach(function(t,r){if(t&&t.constructor._dataRefresh&&i[r]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)s.a.set(t.$data,n,e[n])}}),Rt.call(e,t)})}function Tt(t){window.onNuxtReadyCbs.forEach(function(r){"function"==typeof r&&r(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),lt.afterEach(function(r,e){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",r,e)})})}function At(){return(At=a()(regeneratorRuntime.mark(function t(r){var e,n,i,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return dt=r.app,lt=r.router,t.next=4,Promise.all((c=void 0,c=U((u=lt).options.base,u.options.mode),E(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(r,e,n,i,o){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof r||r.options){t.next=4;break}return t.next=3,r();case 3:r=t.sent;case 4:return a=bt($(r),vt.data?vt.data[o]:null),n.components[i]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(r,e,n,i,o){return t.apply(this,arguments)}}())));case 4:return e=t.sent,n=new s.a(dt),i=vt.layout||"default",t.next=9,n.loadLayout(i);case 9:if(n.setLayout(i),o=function(){n.$mount("#__nuxt"),s.a.nextTick(function(){Tt(n)})},n.setTransitions=n.$options.nuxt.setTransitions.bind(n),e.length&&(n.setTransitions(mt(e,lt.currentRoute)),xt=lt.currentRoute.matched.map(function(t){return q(t.path)(lt.currentRoute.params)})),n.$loading={},vt.error&&n.error(vt.error),lt.beforeEach(gt.bind(n)),lt.beforeEach(_t.bind(n)),lt.afterEach($t),lt.afterEach(Et.bind(n)),!vt.serverRendered){t.next=22;break}return o(),t.abrupt("return");case 22:_t.call(n,lt.currentRoute,lt.currentRoute,function(t){if(!t)return $t(lt.currentRoute,lt.currentRoute),Rt.call(n,lt.currentRoute),void o();lt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return ht.apply(this,arguments)}().then(function(t){return At.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},37:function(t,r,e){var n=e(131);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(41).default)("45b1ddea",n,!0,{})},38:function(t,r,e){var n=e(133);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(41).default)("fd547dac",n,!0,{})},39:function(t,r,e){var n=e(135);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(41).default)("371b8fbf",n,!0,{})},40:function(t,r){t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var e=function(t,r){var e=t[1]||"",n=t[3];if(!n)return e;if(r&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[e].concat(o).concat([i]).join("\n")}var a;return[e].join("\n")}(r,t);return r[2]?"@media "+r[2]+"{"+e+"}":e}).join("")},r.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},41:function(t,r,e){"use strict";function n(t,r){for(var e=[],n={},i=0;i<r.length;i++){var o=r[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):e.push(n[a]={id:a,parts:[s]})}return e}e.r(r),e.d(r,"default",function(){return l});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,p=function(){},f=null,h="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function l(t,r,e,i){c=e,f=i||{};var a=n(t,r);return x(a),function(r){for(var e=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,e.push(u)}r?x(a=n(t,r)):a=[];for(i=0;i<e.length;i++){var u;if(0===(u=e[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function x(t){for(var r=0;r<t.length;r++){var e=t[r],n=o[e.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](e.parts[i]);for(;i<e.parts.length;i++)n.parts.push(m(e.parts[i]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var a=[];for(i=0;i<e.parts.length;i++)a.push(m(e.parts[i]));o[e.id]={id:e.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var r,e,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return p;n.parentNode.removeChild(n)}if(d){var i=u++;n=s||(s=v()),r=b.bind(null,n,i,!1),e=b.bind(null,n,i,!0)}else n=v(),r=function(t,r){var e=r.css,n=r.media,i=r.sourceMap;n&&t.setAttribute("media",n);f.ssrId&&t.setAttribute(h,r.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else e()}}var g,y=(g=[],function(t,r){return g[t]=r,g.filter(Boolean).join("\n")});function b(t,r,e,n){var i=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(r,i);else{var o=document.createTextNode(i),a=t.childNodes;a[r]&&t.removeChild(a[r]),a.length?t.insertBefore(o,a[r]):t.appendChild(o)}}},83:function(t,r,e){"use strict";var n={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,r){var e=r.parent,n=r.slots,i=r.props,o=n(),a=o.default;void 0===a&&(a=[]);var s=o.placeholder;return e._isMounted?a:(e.$once("hook:mounted",function(){e.$forceUpdate()}),i.placeholderTag&&(i.placeholder||s)?t(i.placeholderTag,{class:["no-ssr-placeholder"]},i.placeholder||s):a.length>0?a.map(function(){return t(!1)}):t(!1))}};t.exports=n},84:function(t,r,e){t.exports=e(136)}},[[84,4,1]]]);