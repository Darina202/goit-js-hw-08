function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(w,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function O(e){return f=void 0,p&&i?y(e):(i=r=void 0,a)}function T(){var e=v(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),{email:h,message:j}=y.elements;let w;function O(){w=localStorage.getItem("feedback-form-state")||"";try{return JSON.parse(w)}catch{return w}}y.addEventListener("input",e(t)((function(e){const t={email:h.value.trim()||"",message:j.value.trim()||""};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(e=>{if(e.preventDefault(),""===h.value||""===j.value)return alert("Please fill in all the fields!");console.log(O()),localStorage.removeItem("feedback-form-state"),y.reset()})),function(){if(""===O())return;const e=O();h.value=e.email,j.value=e.message}();
//# sourceMappingURL=03-feedback.9ade9209.js.map
