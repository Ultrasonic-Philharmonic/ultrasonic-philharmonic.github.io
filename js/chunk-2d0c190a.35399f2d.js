(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c190a"],{"471b":function(t,e,r){"use strict";function o(t,e){
/*!
whatwg-fetch, 2.0.3
https://github.com/github/fetch
Copyright (c) 2014-2016 GitHub, Inc. - MIT License
*/
(function(t){function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!==typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function h(t){t=new Uint8Array(t);for(var e=Array(t.length),r=0;r<t.length;r++)e[r]=String.fromCharCode(t[r]);return e.join("")}function u(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t)if("string"===typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=u(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!B(t))throw Error("unsupported BodyInit type");this._bodyArrayBuffer=u(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob){t=this._bodyBlob;var e=new FileReader,r=s(e);return e.readAsText(t),r}if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t,e){e=e||{};var r=e.body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers));var o=e.method||this.method||"GET",i=o.toUpperCase();if(this.method=-1<_.indexOf(i)?i:o,this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("=");t=r.shift().replace(/\+/g," "),r=r.join("=").replace(/\+/g," "),e.append(decodeURIComponent(t),decodeURIComponent(r))}})),e}function p(t){var e=new n;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":");(t=r.shift().trim())&&(r=r.join(":").trim(),e.append(t,r))})),e}function l(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&300>this.status,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var c,b="Symbol"in t&&"iterator"in Symbol;if(c="FileReader"in t&&"Blob"in t)try{new Blob,c=!0}catch(T){c=!1}var m={searchParams:"URLSearchParams"in t,iterable:b,blob:c,formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var w="[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";"),v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},B=ArrayBuffer.isView||function(t){return t&&-1<w.indexOf(Object.prototype.toString.call(t))};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=r(o)},n.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},n.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),o(t)},n.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),o(t)},n.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),o(t)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _="DELETE GET HEAD OPTIONS POST PUT".split(" ");d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},f.call(d.prototype),f.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];l.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=d,t.Response=l,t.fetch=function(t,e){return new Promise((function(r,o){var n=new d(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL"),r(new l("response"in i?i.response:i.responseText,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach((function(t,e){i.setRequestHeader(e,t)})),i.send("undefined"===typeof n._bodyInit?null:n._bodyInit)}))},t.fetch.polyfill=!0}})("undefined"!==typeof self?self:t)}r.r(e),r.d(e,"applyPolyfill",(function(){return o}))}}]);
//# sourceMappingURL=chunk-2d0c190a.35399f2d.js.map