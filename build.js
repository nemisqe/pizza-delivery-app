!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist/",n(n.s=3)}([function(t,e,n){const r=n(1),o=n(4),a=n(2);let s=0,c=[];const l=a(r,{getRandomName:()=>{const t=["Vasya","Petya","Kolya","Misha","Roma","Mike","Daniel"];let e=Math.floor(Math.random()*t.length);return randomName=t[e]},createClients:()=>{let e=new l,n=o.prototype.getRandomPizza(),r=e.getRandomName(),a={orderId:++s,clientOrder:n,clientName:r};e.on("makeOrder",()=>{let t=document.querySelectorAll(".clients-list__item");for(let e=0;e<t.length;e++){}t[i].innerHTML="Hello "+a.clientName+". Your order is "+a.clientOrder+". Id is "+a.orderId}),e.emit("makeOrder"),t.exports.orders=c}});t.exports=l},function(t,e){function n(){this.cb={}}n.prototype.on=function(t,e){this.cb[t]||(this.cb[t]=[]),this.cb[t].push(e)},n.prototype.emit=function(t,e){const n=this.cb[t];n&&n.forEach(function(t){t(e)})},t.exports=n},function(t,e){t.exports=function(t,e){const{constructor:n,...r}=e;function o(){t.apply(this,arguments),n.apply(this,arguments)}o.prototype=Object.create(t.prototype),o.prototype.constructor=n;for(let t in r)o.prototype[t]=r[t];return o}},function(t,e,n){const r=n(0),o=n(5);n(6),n(11);let i=new r;setInterval(()=>i.createClients(),1e3);let a=new o;setInterval(()=>a.getCookedOrder(),5e3)},function(t,e,n){n(0);const r=n(1),o=n(2)(r,{getRandomPizza:function(){var t=["Margherita","Marinara","Frutti di Mare","Carbonara","ШКОЛЬНАЯ","Эхо войны"],e=Math.floor(Math.random()*t.length);return randomPizza=t[e]}});t.exports=o},function(t,e,n){const r=n(1),o=n(2),a=n(0),s=o(r,{getCookedOrder:()=>{let t=a.orders.map(t=>t.orderId),e=document.querySelectorAll(".chiefs-list__item");for(let t=0;t<e.length;t++){}e[i].innerHTML="Order "+t[0]+" is cooked!",a.orders.shift()}});t.exports=s},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".wrapper {\r\n    width: 1200px;\r\n    height: 600px;\r\n    margin: 0 auto;\r\n    border: 2px solid black;\r\n    display: flex;\r\n    justify-content: left;\r\n}\r\n\r\n.clients {\r\n    width: 300px;\r\n    height: 400px;\r\n    border: 2px solid blue;\r\n    margin-left: 100px;\r\n    margin-top: 120px;\r\n}\r\n\r\n.clients-list {\r\n    width: 200px;\r\n    height: 350px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.chiefs {\r\n    width: 300px;\r\n    height: 400px;\r\n    border: 2px solid blue;\r\n    margin-top: 120px;\r\n    margin-left: 100px;\r\n}\r\n\r\n.chiefs-list {\r\n    width: 200px;\r\n    height: 350px;\r\n    overflow-y: scroll;\r\n}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(10);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=v(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){let n=document.querySelector(".wrapper"),r=document.createElement("div");r.className="clients",n.appendChild(r);let o=document.createElement("ul");o.className="clients-list",r.appendChild(o),setInterval(()=>{let t=document.createElement("li");t.className="clients-list__item",o.appendChild(t)},1e3);let i=document.createElement("div");i.className="chiefs",n.appendChild(i);let a=document.createElement("ul");a.className="chiefs-list",i.appendChild(a),setInterval(()=>{let t=document.createElement("li");t.className="chiefs-list__item",a.appendChild(t)},5e3)}]);