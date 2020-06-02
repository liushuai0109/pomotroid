(function(t){function e(e){for(var s,r,a=e[0],l=e[1],c=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/pomotroid/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2fb4":function(t,e,o){},"4e33":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container-fluid pb-5 Jumbotron-wrapper u-bg-navy"},[o("div",{staticClass:"container Jumbotron"},[o("div",{staticClass:"row py-5"},[o("div",{staticClass:"col-8 col-lg-4 col-md-6 mx-auto"},[o("img",{attrs:{src:"./pomotroid-site-timer.svg",alt:"Pomotroid timer"}})])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h1",{staticClass:"Title"},[t._v("Pomotroid")]),o("p",{staticClass:"Title-subtitle"},[t._v(" A simple, configurable and visually pleasing Pomodoro timer. ")]),o("div",{staticClass:"Button-wrapper mt-5"},[o("a",{attrs:{href:t.platformInfo.link}},[o("div",{staticClass:"Button Button--blue"},[o("p",{staticClass:"Button-text"},[t._v(" Download for "+t._s(t.platformInfo.platform)+" ")])])])])])])])]),o("app-rounder",{attrs:{color:"navy",direction:"down"}}),o("div",{staticClass:"container Section Section--light my-5 py-5"},[o("div",{staticClass:"row"},[t._m(0),o("div",{staticClass:"col-lg-8"},[o("img",{attrs:{src:"./pomotroid-screens.png",alt:"Pomotroid screenshots"}})])])]),o("app-rounder"),o("div",{staticClass:"container-fluid u-bg-lightNavy"},[o("div",{staticClass:"container"},[t._m(1),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4 text-center"},[o("h3",[t._v("Windows")]),o("div",{staticClass:"Button-wrapper mt-3"},[o("a",{attrs:{href:t.downloadLinks.windows}},[t._m(2)])])]),o("div",{staticClass:"col-md-4 text-center"},[o("h3",[t._v("Mac OS")]),o("div",{staticClass:"Button-wrapper mt-3"},[o("a",{attrs:{href:t.downloadLinks.mac}},[t._m(3)])])]),o("div",{staticClass:"col-md-4 text-center"},[o("h3",[t._v("Linux")]),o("div",{staticClass:"Button-wrapper mt-3"},[o("a",{attrs:{href:t.downloadLinks.linux}},[t._m(4)])])])]),o("div",{staticClass:"row mt-5 py-5 Section"},[o("div",{staticClass:"col text-center"},[o("h2",{staticClass:"Section-title Section-title--borderGreen"},[t._v("Feedback")]),t._m(5),t._m(6),o("p",[t._v("Enjoy using Pomotroid? Spread the word!")]),o("div",{staticClass:"Button-wrapper my-5"},[o("a",{attrs:{href:"https://twitter.com/intent/tweet?text=Pomotroid%20-%20a%20simple%2C%20visually-pleasing%2C%20and%20open%20source%20Pomodoro%20timer&url=https%3A%2F%2Fsplode.github.io%2Fpomotroid%2F&hashtags=pomodoro,productivity,opensource&via=splode",target:"_blank",rel:"noopener"}},[o("div",{staticClass:"Button Button--green"},[o("p",{staticClass:"Button-text mr-3"},[t._v("Share on Twitter")]),o("svg",{staticClass:"Icon--sm Icon--white",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}})])])])])])])])]),o("div",{staticClass:"container-fluid u-bg-navy"},[o("div",{staticClass:"container py-5 Footer"},[o("div",{staticClass:"row"},[t._m(7),o("div",{staticClass:"col-12 text-center"},[o("a",{attrs:{href:"https://github.com/Splode",target:"_blank",rel:"noopener","aria-label":"Christopher Murphy on GitHub",title:"Christopher Murphy on GitHub"}},[o("svg",{staticClass:"Icon--button Icon--md Icon--blueGrey mr-3",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),o("a",{attrs:{href:"https://twitter.com/splode",target:"_blank",rel:"noopener","aria-label":"Christopher Murphy on Twitter",title:"Christopher Murphy on Twitter"}},[o("svg",{staticClass:"Icon--button Icon--md Icon--blueGrey",attrs:{version:"1.2",baseProfile:"tiny",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-454 256.3 49.7 49.7","xml:space":"preserve"}},[o("path",{attrs:{d:"M-429.2,256.3c-13.7,0-24.8,11.1-24.8,24.8c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8\n              C-404.3,267.5-415.5,256.3-429.2,256.3z M-418.1,275.5c0,0.2,0,0.5,0,0.7c0,7.6-5.7,16.3-16.3,16.3c-3.2,0-6.2-0.9-8.8-2.6\n              c0.4,0.1,0.9,0.1,1.4,0.1c2.7,0,5.1-0.9,7.1-2.4c-2.5,0-4.6-1.7-5.3-4c0.3,0.1,0.7,0.1,1.1,0.1c0.5,0,1-0.1,1.5-0.2\n              c-2.6-0.5-4.6-2.8-4.6-5.6c0,0,0,0,0-0.1c0.8,0.4,1.7,0.7,2.6,0.7c-1.5-1-2.5-2.8-2.5-4.8c0-1,0.3-2,0.8-2.9c2.8,3.5,7,5.7,11.8,6\n              c-0.1-0.4-0.1-0.9-0.1-1.3c0-3.2,2.6-5.7,5.7-5.7c1.6,0,3.1,0.7,4.2,1.8c1.3-0.3,2.5-0.7,3.6-1.4c-0.4,1.3-1.3,2.5-2.5,3.2\n              c1.2-0.1,2.3-0.4,3.3-0.9C-416,273.7-417,274.7-418.1,275.5z"}})])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-8 col-md-6 col-lg-4 mx-sm-auto text-center text-lg-left"},[o("h2",{staticClass:"Section-title Section-title--borderRed"},[t._v("Features")]),o("ul",{staticClass:"TextList"},[o("li",{staticClass:"TextList-item"},[o("h3",[t._v("Custom Times & Rounds")]),o("p",[t._v(" Customize focus, short break, long break, and rounds to fit your workflow. ")])]),o("li",{staticClass:"TextList-item"},[o("h3",[t._v("Charming Sound Notifications")]),o("p",[t._v(" Pleasing chimes let you know when it’s time to take a break or start focussing. ")])]),o("li",{staticClass:"TextList-item"},[o("h3",[t._v("Simple & Easy to Use")]),o("p",[t._v(" Pomotroid is simple and straightforward, making it incredibly easy to use. ")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row mb-3"},[o("div",{staticClass:"col text-center"},[o("h2",{staticClass:"Section-title Section-title--borderBlue"},[t._v("Download")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Button Button--blue"},[o("p",{staticClass:"Button-text"},[t._v("Download for Windows")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Button Button--blue"},[o("p",{staticClass:"Button-text"},[t._v("Download for Mac")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Button Button--blue"},[o("p",{staticClass:"Button-text"},[t._v("Download for Linux")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" Found a bug or would like to suggest a new feature? "),o("a",{staticClass:"LinkInline LinkInline--green",attrs:{href:"https://github.com/Splode/pomotroid/issues",target:"_blank",rel:"noopener"}},[t._v("Open an issue")]),t._v(". ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" Feel free to explore the source or contribute via the "),o("a",{staticClass:"LinkInline LinkInline--green",attrs:{href:"https://github.com/Splode/pomotroid",target:"_blank",rel:"noopener"}},[t._v("GitHub repo")]),t._v(". ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 text-center"},[o("p",[t._v(" Pomotroid is free and open source software created and maintained by "),o("a",{staticClass:"LinkInline LinkInline--green",attrs:{href:"https://christophermurphy.dev",target:"_blank",rel:"noopener"}},[t._v("Christopher Murphy")]),t._v(". ")])])}],r=(o("c975"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"Rounder",class:t.RounderClasses,attrs:{id:"Layer_1",version:"1.2",baseProfile:"tiny",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1280 121.8","xml:space":"preserve"}},[o("path",{class:t.RounderFillClasses,attrs:{d:"M1280,121.8C1158.5,49.4,917.5,0,640,0C362.5,0,121.5,49.4,0,121.8L1280,121.8z"}})])}),a=[],l={props:{color:{type:String,default:"lightNavy",required:!1,validator:function(t){return"navy"===t||"lightNavy"===t}},direction:{type:String,default:"up",required:!1,validator:function(t){return"up"===t||"down"===t}}},computed:{RounderClasses:function(){return{isDown:"down"===this.direction,isUp:"up"===this.direction}},RounderFillClasses:function(){return{isLightNavy:"lightNavy"===this.color,isNavy:"navy"===this.color}}}},c=l,u=(o("8288"),o("2877")),d=Object(u["a"])(c,r,a,!1,null,"7c2465a0",null),p=d.exports,m={name:"App",components:{appRounder:p},data:function(){return{downloadLinks:{windows:"https://github.com/Splode/pomotroid/releases/download/v0.10.0/pomotroid-0.10.0-setup.exe",mac:"https://github.com/Splode/pomotroid/releases/download/v0.10.0/pomotroid-0.10.0-macos.dmg",linux:"https://github.com/Splode/pomotroid/releases/download/v0.10.0/pomotroid-0.10.0-linux.tar.gz"},platforms:{windows:["Windows","Win32","Win64"],mac:["Macintosh","MacIntel","MacPPC","Mac68K"],linux:["Linux","Linux aarch64","Linux x86_64"]}}},computed:{platformInfo:function(){return-1!==this.platforms.windows.indexOf(this.platform)?{platform:"Windows",link:this.downloadLinks.windows}:-1!==this.platforms.mac.indexOf(this.platform)?{platform:"Mac",link:this.downloadLinks.mac}:-1!==this.platforms.linux.indexOf(this.platform)?{platform:"Linux",link:this.downloadLinks.linux}:{platform:"Windows",link:this.downloadLinks.windows}},platform:function(){return navigator.platform}}},v=m,f=(o("81e5"),Object(u["a"])(v,n,i,!1,null,"4e2cf9d2",null)),h=f.exports;o("8e03"),o("2fb4"),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"81e5":function(t,e,o){"use strict";var s=o("bd7f"),n=o.n(s);n.a},8288:function(t,e,o){"use strict";var s=o("4e33"),n=o.n(s);n.a},bd7f:function(t,e,o){}});
//# sourceMappingURL=app.b7a4a2e0.js.map