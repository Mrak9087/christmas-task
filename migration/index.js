(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(15),r=t.n(o),i=t(645),s=t.n(i)()(r());s.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n","",{version:3,sources:["webpack://./src/components/view/news/news.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;AACJ",sourcesContent:[".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n"],sourceRoot:""}]);const A=s},501:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(15),r=t.n(o),i=t(645),s=t.n(i)()(r());s.push([n.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n","",{version:3,sources:["webpack://./src/components/view/sources/sources.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB",sourcesContent:[".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n"],sourceRoot:""}]);const A=s},767:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(15),r=t.n(o),i=t(645),s=t.n(i),A=t(667),a=t.n(A),c=t(202),l=s()(r()),u=a()(c);l.push([n.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer_container {\n    padding: 0 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    max-width: 1140px;\n    margin: 0 auto;\n}\n\n.github{\n    text-decoration: none;\n    font-size: 16px;\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.github:hover{\n    color: #333;\n}\n\n.rss {\n    display: block;\n    font-family: 'Open Sans', sans-serif;\n    width: 86px;\n    height: 32px;\n    background-image: url("+u+");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: left center;\n    padding-right: 111px;\n    filter: hue-rotate(177deg) saturate(100%);\n}\n\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n","",{version:3,sources:["webpack://./src/global.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,yDAAsD;IACtD,wBAAwB;IACxB,4BAA4B;IAC5B,gCAAgC;IAChC,oBAAoB;IACpB,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB",sourcesContent:["body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer_container {\n    padding: 0 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    max-width: 1140px;\n    margin: 0 auto;\n}\n\n.github{\n    text-decoration: none;\n    font-size: 16px;\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.github:hover{\n    color: #333;\n}\n\n.rss {\n    display: block;\n    font-family: 'Open Sans', sans-serif;\n    width: 86px;\n    height: 32px;\n    background-image: url('./assets/svg/rs_school_js.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: left center;\n    padding-right: 111px;\n    filter: hue-rotate(177deg) saturate(100%);\n}\n\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n"],sourceRoot:""}]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var A=0;A<n.length;A++){var a=[].concat(n[A]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),e.push(a))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var t,o,r=(o=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var o,r,i=[],s=!0,A=!1;try{for(t=t.call(n);!(s=(o=t.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(n){A=!0,r=n}finally{try{s||null==t.return||t.return()}finally{if(A)throw r}}return i}}(t,o)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],s=r[3];if(!s)return i;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),c="/*# ".concat(a," */"),l=s.sources.map((function(n){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function A(n,e){for(var t={},o=[],r=0;r<n.length;r++){var A=n[r],a=e.base?A[0]+e.base:A[0],c=t[a]||0,l="".concat(a," ").concat(c);t[a]=c+1;var u=s(l),p={css:A[1],media:A[2],sourceMap:A[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:m(p,e),references:1}),o.push(l)}return o}function a(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var s=r(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,d=0;function m(n,e){var t,o,r;if(e.singleton){var i=d++;t=f||(f=a(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=a(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=A(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var a=A(n,e),c=0;c<t.length;c++){var l=s(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},202:(n,e,t)=>{n.exports=t.p+"544118f5c40b3a698c40.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n,e=function(){return e=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},e.apply(this,arguments)},o=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){void 0===e&&(e=function(n){console.error("No callback for GET response")}),this.load("GET",n.endpoint,e,n.options)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,t){var o=e(e({},this.options),n),r="".concat(this.baseLink).concat(t,"?");return Object.keys(o).forEach((function(n){r+="".concat(n,"=").concat(o[n],"&")})),r.slice(0,-1)},n.prototype.load=function(n,e,t,o){fetch(this.makeUrl(o,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))},n}(),r=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const i=function(n){function e(){return n.call(this,"https://nodenews.herokuapp.com/",{apiKey:"c929c812775f40e084b2cc711dc2f190"})||this}return r(e,n),e}(o);var s=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();const A=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return s(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:"sources"},e)},e.prototype.getNews=function(e,t){for(var o=e.target,r=e.currentTarget;o!==r;){if(o.classList.contains("source__item")){var i=o.getAttribute("data-source-id");return void(r.getAttribute("data-source")!==i&&(r.setAttribute("data-source",i),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},t)))}o=o.parentNode}},e}(i);var a=t(379),c=t.n(a),l=t(669);c()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=function(){function n(){}return n.prototype.draw=function(n){var e=n.length>=10?n.filter((function(n,e){return e<10})):n,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");e.forEach((function(n,e){var r=o.content.cloneNode(!0);e%2&&r.querySelector(".news__item").classList.add("alt"),r.querySelector(".news__meta-photo").style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")"),r.querySelector(".news__meta-author").textContent=n.author||n.source.name,r.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),r.querySelector(".news__description-title").textContent=n.title,r.querySelector(".news__description-source").textContent=n.source.name,r.querySelector(".news__description-content").textContent=n.description,r.querySelector(".news__read-more a").setAttribute("href",n.url),t.append(r)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(t)},n}();const p=u;var f=t(501);c()(f.Z,{insert:"head",singleton:!1}),f.Z.locals;const d=function(){function n(){}return n.prototype.draw=function(n){var e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((function(n){var o=t.content.cloneNode(!0);o.querySelector(".source__item-name").textContent=n.name,o.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(o)})),document.querySelector(".sources").append(e)},n}();var m=function(){function n(){this.news=new p,this.sources=new d}return n.prototype.drawNews=function(n){var e=n.articles?n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=n.sources?n.sources:[];this.sources.draw(e)},n}();const _=function(){function n(){this.controller=new A,this.view=new m}return n.prototype.start=function(){var n=this;document.querySelector(".sources").addEventListener("click",(function(e){return n.controller.getNews(e,(function(e){return n.view.drawNews(e)}))})),this.controller.getSources((function(e){return n.view.drawSources(e)}))},n}();var h=t(767);c()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,(new _).start()})()})();
//# sourceMappingURL=index.js.map