!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("iU1Pc"),i={form:document.querySelector(".form"),delayInput:document.querySelector("input[name='delay']"),stepInput:document.querySelector("input[name='step']"),amountInput:document.querySelector("input[name='amount']")};function a(e,n){var t=Math.random()>.3;return new Promise((function(o,u){setTimeout((function(){t?o({position:e,delay:n}):u({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(i.amountInput.value),o=Number(i.delayInput.value),u=Number(i.stepInput.value),l=1;l<=t;l+=1){a(l,o+u*(l-1)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.b0fa7d00.js.map