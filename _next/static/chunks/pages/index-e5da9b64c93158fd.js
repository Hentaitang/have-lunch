(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2329)}])},2329:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(3251),a=n(745),l=n.n(a),i=n(8658);function s(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function c(e){return function t(n){return 0==arguments.length||s(n)?t:e.apply(this,arguments)}}function u(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return s(n)?t:c(function(t){return e(n,t)});default:return s(n)&&s(r)?t:s(n)?c(function(t){return e(t,r)}):s(r)?c(function(t){return e(n,t)}):e(n,r)}}}var o=u(function(e,t){return t instanceof e||null!=t&&(t.constructor===e||"Object"===e.name&&"object"==typeof t)}),f=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function d(e,t,n){return function(){if(0==arguments.length)return n();var r=arguments[arguments.length-1];if(!f(r)){for(var a=0;a<e.length;){if("function"==typeof r[e[a]])return r[e[a]].apply(r,Array.prototype.slice.call(arguments,0,-1));a+=1}if(null!=r&&"function"==typeof r["@@transducer/step"]){var l=t.apply(null,Array.prototype.slice.call(arguments,0,-1));return l(r)}}return n.apply(this,arguments)}}var p={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}},h=function(){function e(e,t){this.xf=t,this.f=e,this.idx=-1,this.found=!1}return e.prototype["@@transducer/init"]=p.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,-1)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){if(this.idx+=1,this.f(t)){var n;this.found=!0,e=(n=this.xf["@@transducer/step"](e,this.idx))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}}return e},e}(),m=u(d([],function(e){return function(t){return new h(e,t)}},function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return n;n+=1}return -1}));function y(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function x(e,t,n){for(var r=0,a=n.length;r<a;){if(e(t,n[r]))return!0;r+=1}return!1}function g(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var v="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},b=Object.prototype.toString,C=function(){return"[object Arguments]"===b.call(arguments)?function(e){return"[object Arguments]"===b.call(e)}:function(e){return g("callee",e)}}(),j=!({toString:null}).propertyIsEnumerable("toString"),w=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],N=function(){return arguments.propertyIsEnumerable("length")}(),O=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},_="function"!=typeof Object.keys||N?c(function(e){if(Object(e)!==e)return[];var t,n,r=[],a=N&&C(e);for(t in e)g(t,e)&&(!a||"length"!==t)&&(r[r.length]=t);if(j)for(n=w.length-1;n>=0;)g(t=w[n],e)&&!O(r,t)&&(r[r.length]=t),n-=1;return r}):c(function(e){return Object(e)!==e?[]:Object.keys(e)}),k=c(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function S(e,t,n,r){var a=y(e);function l(e,t){return A(e,t,n.slice(),r.slice())}return!x(function(e,t){return!x(l,t,e)},y(t),a)}function A(e,t,n,r){if(v(e,t))return!0;var a,l=k(e);if(l!==k(t))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(l){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(null==(a=String(e.constructor).match(/^function (\w*)/))?"":a[1]))return e===t;break;case"Boolean":case"Number":case"String":if(!(typeof e==typeof t&&v(e.valueOf(),t.valueOf())))return!1;break;case"Date":if(!v(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(!(e.source===t.source&&e.global===t.global&&e.ignoreCase===t.ignoreCase&&e.multiline===t.multiline&&e.sticky===t.sticky&&e.unicode===t.unicode))return!1}for(var i=n.length-1;i>=0;){if(n[i]===e)return r[i]===t;i-=1}switch(l){case"Map":if(e.size!==t.size)return!1;return S(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":if(e.size!==t.size)return!1;return S(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var s=_(e);if(s.length!==_(t).length)return!1;var c=n.concat([e]),u=r.concat([t]);for(i=s.length-1;i>=0;){var o=s[i];if(!(g(o,t)&&A(t[o],e[o],c,u)))return!1;i-=1}return!0}var E=u(function(e,t){return A(e,t,[],[])}),I=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=p.init,e.prototype["@@transducer/result"]=p.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),q=u(d(["fantasy-land/filter","filter"],function(e){return function(t){return new I(e,t)}},function(e,t){return"[object Object]"===Object.prototype.toString.call(t)?function(e,t,n){for(var r=0,a=n.length;r<a;)t=e(t,n[r]),r+=1;return t}(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{},_(t)):function(e,t){for(var n=0,r=t.length,a=[];n<r;)e(t[n])&&(a[a.length]=t[n]),n+=1;return a}(e,t)})),M=(0,i.memo)(()=>{let e=(0,i.useState)(""),t=(0,i.useState)(""),n=(0,i.useState)([]),a=(0,i.useState)(!1);(0,i.useEffect)(()=>{document.title="今天吃什么呢?";let e=JSON.parse(localStorage.getItem("eat_somethings"));n[1](o(Array,e)?e:[])},[]);let s=(0,i.useCallback)(t=>{t.preventDefault(),-1===m(t=>E(e[0],t))(n[0])?n[1](t=>{let n=[...t,e[0]];return localStorage.setItem("eat_somethings",JSON.stringify(n)),n}):alert("".concat(e[0],"已经存在了")),e[1]("")},[e[0],n[0]]);return(0,r.jsx)("div",{children:a[0]?(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between py-12 px-10 ".concat(l().className),children:[(0,r.jsxs)("div",{className:"z-10 max-w-5xl w-full font-mono text-sm",children:[(0,r.jsx)("div",{onClick:()=>a[1](!1),style:{cursor:"pointer"},children:"<- 后退"}),(0,r.jsxs)("div",{className:"flex",style:{margin:"20px 0"},children:[(0,r.jsx)("button",{className:"py-4 px-3 bg-blue-500 text-white mx-2 rounded-md",onClick:()=>{var e,t;return e=n[0].join(","),void((t=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","午饭列表.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t))},children:"导出午饭列表"}),(0,r.jsx)("button",{className:"py-4 px-3 bg-blue-500 text-white mx-2 rounded-md",onClick:()=>document.getElementById("readTxt").click(),children:"导入午饭列表"}),(0,r.jsx)("input",{style:{display:"none"},type:"file",className:"read-local-txt-input",id:"readTxt",accept:".txt",onChange:e=>{let t=document.getElementById("readTxt").files[0],r=new FileReader;r.readAsText(t),r.onload=e=>{let t=e.target.result.split(",");n[1](t),localStorage.setItem("eat_somethings",JSON.stringify(t))},e.target.value=null}})]}),(0,r.jsx)("div",{className:"flex",style:{flexFlow:"wrap"},children:n[0].map((e,t)=>(0,r.jsxs)("div",{className:"flex",style:{paddingRight:"10px",paddingBottom:"10px"},children:[(0,r.jsx)("div",{style:{paddingRight:"5px"},children:e}),(0,r.jsx)("div",{style:{cursor:"pointer"},onClick:()=>n[1](t=>{let n=q(t=>!E(e,t),t);return localStorage.setItem("eat_somethings",JSON.stringify(n)),n}),children:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M1.49414 2.4H0.869141C0.74482 2.4 0.625592 2.35259 0.537684 2.2682C0.449777 2.18381 0.400391 2.06935 0.400391 1.95C0.400391 1.83065 0.449777 1.71619 0.537684 1.6318C0.625592 1.54741 0.74482 1.5 0.869141 1.5H11.1816C11.306 1.5 11.4252 1.54741 11.5131 1.6318C11.601 1.71619 11.6504 1.83065 11.6504 1.95C11.6504 2.06935 11.601 2.18381 11.5131 2.2682C11.4252 2.35259 11.306 2.4 11.1816 2.4H2.43164V10.35C2.43164 10.4485 2.45185 10.546 2.49111 10.637C2.53037 10.728 2.58792 10.8107 2.66046 10.8803C2.73301 10.95 2.81913 11.0052 2.91392 11.0429C3.0087 11.0806 3.1103 11.1 3.21289 11.1H8.83789C8.94049 11.1 9.04208 11.0806 9.13686 11.0429C9.23165 11.0052 9.31777 10.95 9.39032 10.8803C9.46286 10.8107 9.52041 10.728 9.55967 10.637C9.59893 10.546 9.61914 10.4485 9.61914 10.35V2.31C9.61914 2.19065 9.66853 2.07619 9.75644 1.9918C9.84434 1.90741 9.96357 1.86 10.0879 1.86C10.2122 1.86 10.3314 1.90741 10.4193 1.9918C10.5073 2.07619 10.5566 2.19065 10.5566 2.31V10.35C10.5566 11.2612 9.78711 12 8.83789 12H3.21289C2.26367 12 1.49414 11.2612 1.49414 10.35V2.4ZM4.77539 0.9C4.65107 0.9 4.53184 0.852589 4.44393 0.768198C4.35603 0.683807 4.30664 0.569347 4.30664 0.45C4.30664 0.330653 4.35603 0.216193 4.44393 0.131802C4.53184 0.0474106 4.65107 0 4.77539 0H7.27539C7.39971 0 7.51894 0.0474106 7.60685 0.131802C7.69475 0.216193 7.74414 0.330653 7.74414 0.45C7.74414 0.569347 7.69475 0.683807 7.60685 0.768198C7.51894 0.852589 7.39971 0.9 7.27539 0.9H4.77539ZM4.30664 4.95C4.30664 4.83065 4.35603 4.71619 4.44393 4.6318C4.53184 4.54741 4.65107 4.5 4.77539 4.5C4.89971 4.5 5.01894 4.54741 5.10685 4.6318C5.19476 4.71619 5.24414 4.83065 5.24414 4.95V8.55C5.24414 8.66935 5.19476 8.78381 5.10685 8.8682C5.01894 8.95259 4.89971 9 4.77539 9C4.65107 9 4.53184 8.95259 4.44393 8.8682C4.35603 8.78381 4.30664 8.66935 4.30664 8.55V4.95ZM6.80664 4.95C6.80664 4.83065 6.85603 4.71619 6.94393 4.6318C7.03184 4.54741 7.15107 4.5 7.27539 4.5C7.39971 4.5 7.51894 4.54741 7.60685 4.6318C7.69475 4.71619 7.74414 4.83065 7.74414 4.95V8.55C7.74414 8.66935 7.69475 8.78381 7.60685 8.8682C7.51894 8.95259 7.39971 9 7.27539 9C7.15107 9 7.03184 8.95259 6.94393 8.8682C6.85603 8.78381 6.80664 8.66935 6.80664 8.55V4.95Z",fill:"#1D1D1D"})})}),","]},e))})]}),(0,r.jsx)("div",{className:"relative flex place-items-center "}),(0,r.jsx)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"})]}):(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between py-24 px-10 ".concat(l().className),children:[(0,r.jsxs)("div",{className:"z-10 max-w-5xl w-full font-mono text-sm",children:[(0,r.jsxs)("form",{onSubmit:s,children:[(0,r.jsx)("input",{type:"text",name:"name",className:"bg-gray px-4 py-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md",placeholder:"请输入你想吃的",value:e[0],onChange:t=>e[1](t.target.value)}),(0,r.jsx)("button",{className:"py-4 px-3 bg-blue-500 text-white m-2 rounded-md",children:"保存"})]}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)("div",{onClick:()=>a[1](!0),children:"午饭列表"})})]}),(0,r.jsx)("div",{className:"relative flex place-items-center ",children:(0,r.jsxs)("div",{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-center",children:[(0,r.jsxs)("div",{children:["今天吃什么呢?"," ",(0,r.jsx)("button",{className:"py-4 px-3 bg-blue-500 text-white m-2 rounded-md",onClick:()=>{n[0].length>0?t[1](n[0][function(e,t){let n=Math.ceil(0);return Math.floor(Math.random()*(Math.floor(t)-n)+n)}(0,n[0].length)]):alert("请输入要吃的午饭")},children:"随机生成"})]}),(0,r.jsx)("div",{className:"text-center font-bold py-8 text-8xl",style:{wordBreak:"break-word"},children:t[0]})]})}),(0,r.jsx)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"})]})})})},745:function(e){e.exports={style:{fontFamily:"'__Inter_3c012e', '__Inter_Fallback_3c012e'",fontStyle:"normal"},className:"__className_3c012e"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2149)}),_N_E=e.O()}]);