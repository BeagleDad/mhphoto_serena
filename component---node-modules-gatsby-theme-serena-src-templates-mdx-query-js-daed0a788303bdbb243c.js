(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5Q0V":function(e,t,r){var n=r("cDf5").default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"8O0S":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r("q1tI"),o=r.n(n),u=r("A2+M"),s=r("Lkep"),l=r("MXbp"),c=r("Dayr");function p(e){let{data:{mdx:t}}=e;return o.a.createElement(s.a,null,o.a.createElement(c.a,{title:t.frontmatter.title,description:t.excerpt}),o.a.createElement(l.b.h1,null,t.frontmatter.title),o.a.createElement(u.MDXRenderer,null,t.body))}},"A2+M":function(e,t,r){const n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Lkep:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),u=r("R8Gr"),s=r("izhR");t.a=e=>{let{children:t}=e;return o.a.createElement(u.a,null,o.a.createElement(s.d,null,t))}},QILm:function(e,t,r){var n=r("8OQS");e.exports=function(e,t){if(null==e)return{};var r,o,u=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),u=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||u(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,r){var n=r("RIqP"),o=r("sXyB"),u=r("lSNA"),s=r("QILm");const l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const a=r("q1tI"),{mdx:i}=r("7ljp"),{useMDXScope:f}=r("BfwJ");e.exports=function(e){let{scope:t,children:r}=e,u=s(e,l);const c=f(t),d=a.useMemo(()=>{if(!r)return null;const e=p({React:a,mdx:i},c),t=Object.keys(e),u=t.map(t=>e[t]);return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(u)))},[r,t]);return a.createElement(d,p({},u))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},lSNA:function(e,t,r){var n=r("o5UB");e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},o5UB:function(e,t,r){var n=r("cDf5").default,o=r("5Q0V");e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function u(t,r,s){return o()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-serena-src-templates-mdx-query-js-daed0a788303bdbb243c.js.map