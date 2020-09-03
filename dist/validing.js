!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.validing=r():e.validing=r()}("undefined"!=typeof self?self:this,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=0)}([function(e,r,t){"use strict";function n(e){return"boolean"==typeof e}function o(e){return"string"==typeof e}function i(e){return null!=e&&("string"!=typeof e||""!==e.trim())}function u(e){return/^1[3-9]\d{9}$/.test(e)}function a(e){return/0\d{2,3}-\d{7,8}/.test(e)}function s(e){return/^-?\d+(.?\d+)?$/.test(e)}function c(e){if("[object Object]"===Object.prototype.toString.call(e)){const r={};for(const t in e){const n=c(e[t]);i(n)&&(r[t]=n)}return r}return Array.isArray(e)?e.map(e=>c(e)):e}t.r(r),t.d(r,"isBooblean",(function(){return n})),t.d(r,"isString",(function(){return o})),t.d(r,"isHaveValue",(function(){return i})),t.d(r,"isPhoneNumber",(function(){return u})),t.d(r,"isNumber",(function(){return s}));const d={required:!1,type:3,name:"此项"};const f={required:!1,range:"[0,]",decimal:0,strict:!1,name:"此项"};const l={required:!1,name:"此项"};const m={required:!1,protocols:["http","https","ftp","sftp","mailto","tel"],name:"此项"};const p={rules:{validatePhone:e=>{try{if(void 0!==e.required&&!n(e.required))throw Error("validatePhone函数required参数必须为布尔值");if(void 0!==e.type&&1!==e.type&&2!==e.type&&3!==e.type)throw Error("validatePhone函数type参数只能是1|2|3");if(void 0!==e.name&&!o(e.name))throw Error("validatePhone函数name参数只能是字符串")}catch(e){console.error(e.message)}return(r,t,n)=>{const o=Object.assign(d,c(e));e.required||i(t)?i(t)?(u(t)||1!==o.type)&&(a(t)||2!==o.type)&&(u(t)||a(t)||3!==o.type)?n():n(new Error(o.name+"格式错误")):n(new Error(o.name+"必填")):n()}},validateNumber:e=>{try{if(void 0!==e.required&&!n(e.required))throw Error("validateNumber函数required参数必须为布尔值");if(void 0!==e.range&&(r=e.range,!/^[\(\[]-?\d+,-?\d+[\]\)]$/.test(r)))throw Error("validateNumber函数range参数格式不正确");if(void 0!==e.strict&&!n(e.strict))throw Error("validateNumber函数strict参数必须为布尔值");if(void 0!==e.name&&!o(e.name))throw Error("validateNumber函数name参数只能是字符串")}catch(e){console.error(e.message)}var r;return(r,t,n)=>{const o=Object.assign(f,c(e));if(e.required||i(t))if(i(t))if(s(t)){if(!function(e,r){const[t,n]=e.substring(1,e.length-1).split(","),o=e.substring(0,1),i=e.substring(e.length-1,e.length);let u=!1;"-"!==t?"("===o?Number(r)>Number(t)&&(u=!0):"["===o&&Number(r)>=Number(t)&&(u=!0):u=!0;if(!u)return!1;u=!1,"-"!==n?")"===i?Number(r)<Number(n)&&(u=!0):"]"===i&&Number(r)<=Number(n)&&(u=!0):u=!0;if(!u)return!1;return!0}(o.range,t))return void n(new Error(o.name+"超出了允许的数值范围"));if(!function(e,r,t){if(0===e){if(r.includes("."))return!1}else{if(!t&&!r.includes("."))return!0;if(!function(e,r){return new RegExp(`^-?\\d+.\\d{${r}}$`).test(e)}(r,e))return!1}return!0}(o.decimal,t,o.strict))return void n(new Error(o.name+"小数位数错误"));n()}else n(new Error(o.name+"不是有效的数字"));else n(new Error(o.name+"必填"));else n()}},validateSpace:e=>{try{if(void 0!==e.required&&!n(e.required))throw Error("validateSpace函数required参数必须为布尔值");if(void 0!==e.name&&!o(e.name))throw Error("validateSpace函数name参数只能是字符串")}catch(e){console.error(e.message)}return(r,t,n)=>{const o=Object.assign(l,c(e));e.required||i(t)?i(t)?!function(e){return/(^ | $)/.test(e)}(t)?n():n(new Error(o.name+"首尾不能有空格")):n(new Error(o.name+"必填")):n()}},validateWebsite:e=>{try{if(void 0!==e.required&&!n(e.required))throw Error("validateWebsite函数required参数必须为布尔值");if(void 0!==e.protocols){if(r=e.protocols,!Array.isArray(r))throw Error("validateWebsite函数protocols参数只能是数组");const t=m.protocols;if(void 0!==t&&e.protocols.some(e=>!t.includes(e)))throw Error("validateWebsite函数protocols参数传入了一些无法识别的值")}if(void 0!==e.name&&!o(e.name))throw Error("validateWebsite函数name参数只能是字符串")}catch(e){console.error(e.message)}var r;return(r,t,n)=>{const o=Object.assign(m,c(e));e.required||i(t)?i(t)?o.protocols.some(e=>function(e,r){return new RegExp("^"+r).test(e)}(t,e+":"))?n():n(new Error(o.name+"外部网址格式错误")):n(new Error(o.name+"必填")):n()}}},isBooblean:n,isString:o,isHaveValue:i,isPhoneNumber:u,isNumber:s};r.default=p}])}));