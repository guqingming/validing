!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.validing=e():r.validing=e()}("undefined"!=typeof self?self:this,(function(){return function(r){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return r[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,i){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:i})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(i,o,function(e){return r[e]}.bind(null,o));return i},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t(t.s=0)}([function(r,e,t){"use strict";function i(r){return"boolean"==typeof r}function o(r){return"string"==typeof r}function n(r){return Array.isArray(r)}function a(r){return null!=r&&("string"!=typeof r||""!==r.trim())}function u(r){return/^1[3-9]\d{9}$/.test(r)}function s(r){return/^0\d{2,3}-\d{7,8}$/.test(r)}function d(r){return/^[\(\[]-?\d*,-?\d*[\]\)]$/.test(r)}function c(r){return/^-?\d+(.?\d+)?$/.test(r)}function p(r){return/(^[\u00A0\u0020\u3000]|[\u00A0\u0020\u3000]$)/.test(r)}function l(r,e=2){return new RegExp(`^-?\\d+.\\d{${e}}$`).test(r)}function f(r,e){return new RegExp("^"+e).test(r)}function v(r,e){return new RegExp(e+"$").test(r)}function h(r){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(r)}function w(r){return/^\d{6}$/.test(r)}function g(r,e=0){switch(e){case 0:default:return/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(r);case 1:return/^\d{15}$/.test(r);case 2:return/^(^\d{18}$|^\d{17}(\d|X|x))$/.test(r)}}function E(r){return/^[1-9][0-9]{4,10}$/.test(r)}function q(r){return/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(r)}function m(r){return/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(r)}function b(r){return/^[\u4e00-\u9fa5]{2,4}$/.test(r)}function y(r){return/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(r)}function N(r,e=1){switch(e){case 1:default:return/^[\~\!\@\#\$\%\^\&\*\(\)\[\]\{\}\?\,\.\w\\\|\:\"\<\>\;\'\,\.\/\-\=]{6,18}$/.test(r);case 2:return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/.test(r)}}function j(r){return/^[A-Za-z0-9]+$/.test(r)}function S(r){return/^\d{4}(-\d{1,2}){2}( \d{1,2}(:\d{1,2}){2})?$/.test(r)}function $(r){return/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(r)}function x(r){return/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(r)}function O(r){return/^(https?:|mailto:|tel:)/.test(r)}function P(r){if("[object Object]"===Object.prototype.toString.call(r)){const e={};for(const t in r){const i=P(r[t]);a(i)&&(e[t]=i)}return e}return Array.isArray(r)?r.map(r=>P(r)):r}t.r(e),t.d(e,"isBooblean",(function(){return i})),t.d(e,"isString",(function(){return o})),t.d(e,"isHaveValue",(function(){return a})),t.d(e,"isPhoneNumber",(function(){return u})),t.d(e,"isNumber",(function(){return c})),t.d(e,"isArray",(function(){return n})),t.d(e,"isRangeNumber",(function(){return d})),t.d(e,"isDecimal",(function(){return l})),t.d(e,"isStartStr",(function(){return f})),t.d(e,"isEndStr",(function(){return v})),t.d(e,"isEmail",(function(){return h})),t.d(e,"isPostcode",(function(){return w})),t.d(e,"isIDCardNo",(function(){return g})),t.d(e,"isQQ",(function(){return E})),t.d(e,"isWeixin",(function(){return q})),t.d(e,"isCarNo",(function(){return m})),t.d(e,"isChineseName",(function(){return b})),t.d(e,"isUserName",(function(){return y})),t.d(e,"isPassword",(function(){return N})),t.d(e,"isNo",(function(){return j})),t.d(e,"isDate",(function(){return S})),t.d(e,"isNoSpecialChart",(function(){return $})),t.d(e,"isIP",(function(){return x})),t.d(e,"isWebSite",(function(){return O})),t.d(e,"isHaveSpace",(function(){return p}));const A={required:!1,type:0,tip:""};const C={required:!1,range:"[0,-]",decimal:0,strict:!1,tip:""};const Z={required:!1,tip:""};const D={required:!1,protocols:["http","https","ftp","sftp","mailto","tel"],tip:""};const L={required:!1,maxLength:60,tip:""};const W={required:!1,tip:""};const I={required:!1,type:0,tip:""};const z={required:!1,tip:""};const Q={required:!1,tip:""};const _={required:!1,tip:""};const M={required:!1,tip:""};const R={required:!1,tip:""};const U={required:!1,type:1,tip:""};const H={required:!1,tip:""};const B={required:!1,tip:""};const T={required:!1,tip:""};const V={required:!1,tip:""};const X={required:!1,range:"[6,-]",tip:""};const k={rules:{validatePhone:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validatePhone函数required参数必须为布尔值");if(void 0!==r.type&&0!==r.type&&1!==r.type&&2!==r.type)throw Error("validatePhone函数type参数只能是1|2|3");if(void 0!==r.tip&&!o(r.tip))throw Error("validatePhone函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(A,P(r));r.required||a(t)?a(t)?(u(t)||1!==o.type)&&(s(t)||2!==o.type)&&(u(t)||s(t)||0!==o.type)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateNumber:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateNumber函数required参数必须为布尔值");if(void 0!==r.range&&!d(r.range))throw Error("validateNumber函数range参数格式不正确");if(void 0!==r.strict&&!i(r.strict))throw Error("validateNumber函数strict参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateNumber函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const n=Object.assign(C,P(r));r.required||a(t)?a(t)?c(t)?!function(r,e){const[t,i]=r.substring(1,r.length-1).split(","),o=r.substring(0,1),n=r.substring(r.length-1,r.length);let a=!1;"-"!==t?"("===o?Number(e)>Number(t)&&(a=!0):"["===o&&Number(e)>=Number(t)&&(a=!0):a=!0;if(!a)return!1;a=!1,"-"!==i?")"===n?Number(e)<Number(i)&&(a=!0):"]"===n&&Number(e)<=Number(i)&&(a=!0):a=!0;if(!a)return!1;return!0}(n.range,t)?i(new Error(n.tip||"超出了允许的数值范围")):!function(r,e="",t){o(e)||(e=e.toString());if(0===r){if(e.includes("."))return!1}else{if(!t&&!e.includes("."))return!0;if(!t&&e.toString().split(".")[1].length<=r)return!0;if(!l(e,r))return!1}return!0}(n.decimal,t,n.strict)?i(new Error(n.tip||"小数位数错误")):i():i(new Error(n.tip||"不是有效的数字")):i(new Error(n.tip||"必填")):i()}},validateSpace:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateSpace函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateSpace函数tipe参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(Z,P(r));r.required||a(t)?a(t)?p(t)?i(new Error(o.tip||"首尾不能有空格")):i():i(new Error(o.tip||"必填")):i()}},validateWebsite:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateWebsite函数required参数必须为布尔值");if(void 0!==r.protocols){if(!n(r.protocols))throw Error("validateWebsite函数protocols参数只能是数组");const e=D.protocols;if(void 0!==e&&r.protocols.some(r=>!e.includes(r)))throw Error("validateWebsite函数protocols参数传入了一些无法识别的值")}if(void 0!==r.tip&&!o(r.tip))throw Error("validateWebsite函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(D,P(r));r.required||a(t)?a(t)?o.protocols.some(r=>f(t,r+":"))?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateMail:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateMail函数required参数必须为布尔值");if(void 0!==r.maxLength){if(!c(r.maxLength))throw Error("validateMail函数maxLength参数只能是数字");if(r.maxLength<10)throw Error("validateMail函数maxLength必须是大于10的数字")}if(void 0!==r.tip&&!o(r.tip))throw Error("validateMail函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(L,P(r));r.required||a(t)?a(t)?h(t)?t.length>o.maxLength?i(new Error(o.tip||"长度不能大于"+o.maxLength)):i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validatePostcode:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validatePostcode函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validatePostcode函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(W,P(r));r.required||a(t)?a(t)?w(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateIDCardNo:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateIDCardNo函数required参数必须为布尔值");if(void 0!==r.type&&0!==r.type&&1!==r.type&&2!==r.type)throw Error("validateIDCardNo函数type参数只能是0|1|2");if(void 0!==r.tip&&!o(r.tip))throw Error("validateIDCardNo函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(I,P(r));r.required||a(t)?a(t)&&a(t)?g(t,o.type)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateQQ:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateQQ函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateQQ函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(z,P(r));r.required||a(t)?a(t)?E(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateWinxin:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateWeixin函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateWeixin函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(Q,P(r));r.required||a(t)?a(t)?q(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateCarNo:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateCarNo函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateCarNo函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(_,P(r));r.required||a(t)?a(t)?m(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateChineseName:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateChineseName函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateChineseName函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(M,P(r));r.required||a(t)?a(t)?b(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateUserName:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateUserName函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateUserName函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(R,P(r));r.required||a(t)?a(t)?y(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validatePassword:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validatePassword函数required参数必须为布尔值");if(void 0!==r.type&&1!==r.type&&2!==r.type)throw Error("validatePassword函数type参数只能是1|2");if(void 0!==r.tip&&!o(r.tip))throw Error("validatePassword函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(U,P(r));r.required||a(t)?a(t)&&a(t)?N(t,o.type)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateNo:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateNo函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateNo函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(H,P(r));r.required||a(t)?a(t)?j(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateDate:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateDate函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateDate函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(B,P(r));r.required||a(t)?a(t)?S(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateNoSpecialChart:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateNoSpecialChart函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateNoSpecialChart函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(T,P(r));r.required||a(t)?a(t)?$(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateIP:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateIp函数required参数必须为布尔值");if(void 0!==r.tip&&!o(r.tip))throw Error("validateIp函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(V,P(r));r.required||a(t)?a(t)?x(t)?i():i(new Error(o.tip||"格式错误")):i(new Error(o.tip||"必填")):i()}},validateLength:r=>{try{if(void 0!==r.required&&!i(r.required))throw Error("validateLength函数required参数必须为布尔值");if(void 0!==r.range&&!d(r.range))throw Error("validateLength函数range参数格式不正确");if(void 0!==r.tip&&!o(r.tip))throw Error("validateLength函数tip参数只能是字符串")}catch(r){console.error(r.message)}return(e,t,i)=>{const o=Object.assign(X,P(r));r.required||a(t)?a(t)?!function(r,e){const[t,i]=r.substring(1,r.length-1).split(","),o=r.substring(0,1),n=r.substring(r.length-1,r.length);let a=!1;"-"!==t?"("===o?e.length>Number(t)&&(a=!0):"["===o&&e.length>=Number(t)&&(a=!0):a=!0;if(!a)return!1;a=!1,"-"!==i?")"===n?e.length<Number(i)&&(a=!0):"]"===n&&e.length<=Number(i)&&(a=!0):a=!0;if(!a)return!1;return!0}(o.range,t)?i(new Error(o.tip||"超出了允许的数值范围")):i():i(new Error(o.tip||"必填")):i()}}},isBooblean:i,isString:o,isHaveValue:a,isPhoneNumber:u,isNumber:c,isArray:n,isRangeNumber:d,isDecimal:l,isStartStr:f,isEndStr:v,isEmail:h,isPostcode:w,isIDCardNo:g,isQQ:E,isWeixin:q,isCarNo:m,isChineseName:b,isUserName:y,isPassword:N,isNo:j,isDate:S,isNoSpecialChart:$,isIP:x,isWebSite:O,isHaveSpace:p};e.default=k}])}));