(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),c=r(667),d=r.n(c),s=new URL(r(946),r.b),l=i()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);var p=d()(s);l.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/*---------------------------Reset css above----------------------------------------------*/\r\n:root {\r\n    --background-dark: rgba(0, 0, 0, 0.8);\r\n    --background-light: rgba(0, 0, 0, 0.6);\r\n    --menu-gap: 3rem;\r\n}\r\n\r\nhtml {\r\n    font-size: 65%;\r\n}\r\n\r\nbody {\r\n    background-image: url("+p+");\r\n    /* height: 100vh;\r\n    width: 100vw; */\r\n    font-size: 1.5rem;\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: white;\r\n    font-family: cursive, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nheader {\r\n    background-color: var(--background-dark);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 97.8%;\r\n    padding: 2rem;\r\n}\r\n\r\n.name {\r\n    font-size: 8rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    gap: 3rem;\r\n}\r\n\r\n.nav-btn {\r\n    padding: 2rem;\r\n    font-size: 2rem;\r\n    background-color: transparent;\r\n    color: white;\r\n    border: 3px solid transparent;\r\n    transition: transform 0.4s;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-btn.active, .nav-btn:hover {\r\n    border-bottom: 3px solid white;\r\n    transform: translateY(-15%);\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n}\r\n\r\n#main {\r\n    max-width: 700px;\r\n    padding: 3rem;\r\n    margin: 6rem 0;\r\n    font-size: 3rem;\r\n    background-color: var(--background-light);\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 530px;\r\n    width: 620px;\r\n    animation: fadeIn 1.5s;\r\n}\r\n\r\n.home p {\r\n    padding: 1rem;\r\n}\r\n\r\n.home img {\r\n    width: 50%;\r\n    margin: 3rem 0;\r\n    opacity: 90%;\r\n}\r\n\r\n.round {\r\n    border-radius: 100%;\r\n}\r\n\r\n.menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: var(--menu-gap);\r\n    column-gap: var(--menu-gap);\r\n    animation: fadeIn 1.5s;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 300px;\r\n    padding: 3rem;\r\n    background-color: var(--background-light);\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.item:hover {\r\n    background-color: rgba(143, 143, 143, 0.4);\r\n}\r\n\r\n.item h2 {\r\n    padding: 2rem;\r\n}\r\n\r\n.item p {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.item img {\r\n    width: 50%;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation: fadeIn 1.5s;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.about p {\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},654:(n,e,r)=>{var t=r(379),o=r.n(t),a=r(795),i=r.n(a),c=r(569),d=r.n(c),s=r(565),l=r.n(s),p=r(216),u=r.n(p),m=r(589),f=r.n(m),h=r(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=r(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var d=t(n,o),s=0;s<a.length;s++){var l=r(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},628:(n,e,r)=>{function t(n,e,r){let t=document.createElement(n);if(""!=e)for(let n of e.split(" "))t.classList.add(n);return t.textContent=r,t}r.d(e,{Z:()=>t})},824:(n,e,r)=>{r.d(e,{Z:()=>i}),r(654);const t=r.p+"e935ba4442c381ad0594.png";var o=r(628),a=r(742);function i(){const n=document.createElement("div");return n.id="content",n.appendChild((0,a.Z)("home")),n.appendChild(function(){const n=(0,o.Z)("div","home","");n.id="main";const e=(0,o.Z)("p","","Welcome");n.appendChild(e);const r=(0,o.Z)("p","","To the best coffee shop in town");n.appendChild(r);const a=new Image;a.classList.add("round"),a.src=t,a.alt="latte",n.appendChild(a);const i=(0,o.Z)("p","","Order online or visit us today!");return n.appendChild(i),n}()),n}},742:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(628),o=r(824),a=r(91);function i(n){const e=(0,t.Z)("header","",""),r=(0,t.Z)("h1","name","Cafe Bean");e.appendChild(r);const c=(0,t.Z)("nav","",""),d=(0,t.Z)("button","nav-btn","Home");d.id="nav-home";const s=(0,t.Z)("button","nav-btn","Menu");s.id="nav-menu";const l=(0,t.Z)("button","nav-btn","About");return l.id="nav-about","home"===n?d.classList.add("active"):"menu"===n?s.classList.add("active"):l.classList.add("active"),d.addEventListener("click",(()=>{document.body.removeChild(document.getElementById("content")),document.body.appendChild((0,o.Z)())})),s.addEventListener("click",(()=>{document.body.removeChild(document.getElementById("content")),document.body.appendChild((0,a.Z)())})),l.addEventListener("click",(()=>{document.body.removeChild(document.getElementById("content")),document.body.appendChild(function(){const n=document.createElement("div");return n.id="content",n.appendChild(i("about")),n.appendChild(function(){const n=(0,t.Z)("div","about","");n.id="main";const e=(0,t.Z)("p","","This is a sample about section.");return n.appendChild(e),n}()),n}())})),c.appendChild(d),c.appendChild(s),c.appendChild(l),e.appendChild(c),e}r(654)},91:(n,e,r)=>{r.d(e,{Z:()=>d}),r(654);var t=r(628),o=r(742);const a=r.p+"e6df0042b09077c1e55e.jpg",i=r.p+"d420630584f508ed6d5e.jpg";function c(n,e,r,o,a){const i=(0,t.Z)("div","item",""),c=new Image;c.classList.add(e),c.src=n,c.alt=r,i.appendChild(c);const d=(0,t.Z)("h2","",o);i.appendChild(d);const s=(0,t.Z)("p","",a);return i.appendChild(s),i}function d(){const n=document.createElement("div");return n.id="content",n.appendChild((0,o.Z)("menu")),n.appendChild(function(){const n=(0,t.Z)("div","menu","");n.id="main";const e=c(a,"round","latte art","Latte","Organic Coffee, Your choice of milk, sugar");n.appendChild(e);const r=c(i,"round","iced coffee","Iced Coffee","Organic Coffee, Ice, Your choice of milk, sugar");return n.appendChild(r),n}()),n}},946:(n,e,r)=>{n.exports=r.p+"d89f7b7a549e561b0505.PNG"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{r(654);var n=r(824);document.body.appendChild((0,n.Z)())})()})();