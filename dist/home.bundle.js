(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>p});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),l=new URL(e(946),e.b),d=i()(o());d.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);var u=c()(l);d.push([r.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/*---------------------------Reset css above----------------------------------------------*/\r\n:root {\r\n    --background-dark: rgba(0, 0, 0, 0.8);\r\n    --background-light: rgba(0, 0, 0, 0.6);\r\n    --menu-gap: 3rem;\r\n}\r\n\r\nhtml {\r\n    font-size: 65%;\r\n}\r\n\r\nbody {\r\n    background-image: url("+u+");\r\n    /* height: 100vh;\r\n    width: 100vw; */\r\n    font-size: 1.5rem;\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: white;\r\n    font-family: cursive, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nheader {\r\n    background-color: var(--background-dark);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 97.8%;\r\n    padding: 2rem;\r\n}\r\n\r\n.name {\r\n    font-size: 8rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    gap: 3rem;\r\n}\r\n\r\n.nav-btn {\r\n    padding: 2rem;\r\n    font-size: 2rem;\r\n    background-color: transparent;\r\n    color: white;\r\n    border: 3px solid transparent;\r\n    transition: transform 0.4s;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-btn.active, .nav-btn:hover {\r\n    border-bottom: 3px solid white;\r\n    transform: translateY(-15%);\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 100vh;\r\n}\r\n\r\n#main {\r\n    max-width: 700px;\r\n    padding: 3rem;\r\n    margin: 6rem 0;\r\n    font-size: 3rem;\r\n    background-color: var(--background-light);\r\n    /* border: 1px solid white; */\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 530px;\r\n    width: 620px;\r\n    animation: fadeIn 1.5s;\r\n}\r\n\r\n.home p {\r\n    padding: 1rem;\r\n}\r\n\r\n.home img {\r\n    width: 50%;\r\n    margin: 3rem 0;\r\n    opacity: 90%;\r\n}\r\n\r\n.round {\r\n    border-radius: 100%;\r\n}\r\n\r\n.menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: var(--menu-gap);\r\n    column-gap: var(--menu-gap);\r\n    animation: fadeIn 1.5s;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 300px;\r\n    padding: 3rem;\r\n    background-color: var(--background-light);\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.item:hover {\r\n    background-color: rgba(143, 143, 143, 0.4);\r\n}\r\n\r\n.item h2 {\r\n    padding: 2rem;\r\n}\r\n\r\n.item p {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.item img {\r\n    width: 50%;\r\n}\r\n\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }",""]);const p=d},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},654:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),l=e(565),d=e.n(l),u=e(216),p=e.n(u),f=e(589),m=e.n(f),g=e(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},946:(r,n,e)=>{r.exports=e.p+"d89f7b7a549e561b0505.PNG"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href,e.nc=void 0,e(654),e.p})();