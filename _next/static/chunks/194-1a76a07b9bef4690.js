(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},357:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function l(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s=[],a=!1,u=-1;function d(){a&&n&&(a=!1,n.length?s=n.concat(s):u=-1,s.length&&f())}function f(){if(!a){var e=c(d);a=!0;for(var t=s.length;t;){for(n=s,s=[];++u<t;)n&&n[u].run();u=-1,t=s.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||a||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}},i=!0;try{t[e](l,l.exports,n),i=!1}finally{i&&delete r[e]}return l.exports}n.ab="//";var o=n(229);e.exports=o}()},6800:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}(r)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},6408:function(e,t,r){"use strict";r.d(t,{u:function(){return eS}});var n=r(2265);let o=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function f(e){return e.split("-")[0]}function p(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function h(e){return["top","bottom"].includes(f(e))?"y":"x"}function y(e){return e.replace(/start|end/g,e=>u[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>a[e])}function g(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:r,width:n,height:o}=e;return{width:n,height:o,top:r,left:t,right:t+n,bottom:r+o,x:t,y:r}}function E(e,t,r){let n,{reference:o,floating:l}=e,i=h(t),c=m(h(t)),s=v(c),a=f(t),u="y"===i,d=o.x+o.width/2-l.width/2,y=o.y+o.height/2-l.height/2,w=o[s]/2-l[s]/2;switch(a){case"top":n={x:d,y:o.y-l.height};break;case"bottom":n={x:d,y:o.y+o.height};break;case"right":n={x:o.x+o.width,y:y};break;case"left":n={x:o.x-l.width,y:y};break;default:n={x:o.x,y:o.y}}switch(p(t)){case"start":n[c]-=w*(r&&u?-1:1);break;case"end":n[c]+=w*(r&&u?-1:1)}return n}let x=async(e,t,r)=>{let{placement:n="bottom",strategy:o="absolute",middleware:l=[],platform:i}=r,c=l.filter(Boolean),s=await (null==i.isRTL?void 0:i.isRTL(t)),a=await i.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=E(a,n,s),f=n,p={},m=0;for(let r=0;r<c.length;r++){let{name:l,fn:v}=c[r],{x:h,y:y,data:w,reset:g}=await v({x:u,y:d,initialPlacement:n,placement:f,strategy:o,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=h?h:u,d=null!=y?y:d,p={...p,[l]:{...p[l],...w}},g&&m<=50&&(m++,"object"==typeof g&&(g.placement&&(f=g.placement),g.rects&&(a=!0===g.rects?await i.getElementRects({reference:e,floating:t,strategy:o}):g.rects),{x:u,y:d}=E(a,f,s)),r=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}};async function _(e,t){var r;void 0===t&&(t={});let{x:n,y:o,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),v=g(m),h=c[p?"floating"===f?"reference":"floating":f],y=b(await l.getClippingRect({element:null==(r=await (null==l.isElement?void 0:l.isElement(h)))||r?h:h.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),w="floating"===f?{x:n,y:o,width:i.floating.width,height:i.floating.height}:i.reference,E=await (null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),x=await (null==l.isElement?void 0:l.isElement(E))&&await (null==l.getScale?void 0:l.getScale(E))||{x:1,y:1},_=b(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:E,strategy:s}):w);return{top:(y.top-_.top+v.top)/x.y,bottom:(_.bottom-y.bottom+v.bottom)/x.y,left:(y.left-_.left+v.left)/x.x,right:(_.right-y.right+v.right)/x.x}}async function S(e,t){let{placement:r,platform:n,elements:o}=e,l=await (null==n.isRTL?void 0:n.isRTL(o.floating)),i=f(r),c=p(r),s="y"===h(r),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,m=d(t,e),{mainAxis:v,crossAxis:y,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&"number"==typeof w&&(y="end"===c?-1*w:w),s?{x:y*u,y:v*a}:{x:v*a,y:y*u}}function T(e){return L(e)?(e.nodeName||"").toLowerCase():"#document"}function A(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function R(e){var t;return null==(t=(L(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function L(e){return e instanceof Node||e instanceof A(e).Node}function k(e){return e instanceof Element||e instanceof A(e).Element}function O(e){return e instanceof HTMLElement||e instanceof A(e).HTMLElement}function C(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof A(e).ShadowRoot)}function N(e){let{overflow:t,overflowX:r,overflowY:n,display:o}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(o)}function D(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function $(e){let t=j(),r=H(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function j(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function I(e){return["html","body","#document"].includes(T(e))}function H(e){return A(e).getComputedStyle(e)}function W(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function B(e){if("html"===T(e))return e;let t=e.assignedSlot||e.parentNode||C(e)&&e.host||R(e);return C(t)?t.host:t}function M(e,t,r){var n;void 0===t&&(t=[]),void 0===r&&(r=!0);let o=function e(t){let r=B(t);return I(r)?t.ownerDocument?t.ownerDocument.body:t.body:O(r)&&N(r)?r:e(r)}(e),l=o===(null==(n=e.ownerDocument)?void 0:n.body),i=A(o);return l?t.concat(i,i.visualViewport||[],N(o)?o:[],i.frameElement&&r?M(i.frameElement):[]):t.concat(o,M(o,[],r))}function z(e){let t=H(e),r=parseFloat(t.width)||0,n=parseFloat(t.height)||0,o=O(e),l=o?e.offsetWidth:r,c=o?e.offsetHeight:n,s=i(r)!==l||i(n)!==c;return s&&(r=l,n=c),{width:r,height:n,$:s}}function F(e){return k(e)?e:e.contextElement}function P(e){let t=F(e);if(!O(t))return s(1);let r=t.getBoundingClientRect(),{width:n,height:o,$:l}=z(t),c=(l?i(r.width):r.width)/n,a=(l?i(r.height):r.height)/o;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}let V=s(0);function q(e){let t=A(e);return j()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:V}function K(e,t,r,n){var o;void 0===t&&(t=!1),void 0===r&&(r=!1);let l=e.getBoundingClientRect(),i=F(e),c=s(1);t&&(n?k(n)&&(c=P(n)):c=P(e));let a=(void 0===(o=r)&&(o=!1),n&&(!o||n===A(i))&&o)?q(i):s(0),u=(l.left+a.x)/c.x,d=(l.top+a.y)/c.y,f=l.width/c.x,p=l.height/c.y;if(i){let e=A(i),t=n&&k(n)?A(n):n,r=e,o=r.frameElement;for(;o&&n&&t!==r;){let e=P(o),t=o.getBoundingClientRect(),n=H(o),l=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,i=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;u*=e.x,d*=e.y,f*=e.x,p*=e.y,u+=l,d+=i,o=(r=A(o)).frameElement}}return b({width:f,height:p,x:u,y:d})}function X(e){return K(R(e)).left+W(e).scrollLeft}function Y(e,t,r){let n;if("viewport"===t)n=function(e,t){let r=A(e),n=R(e),o=r.visualViewport,l=n.clientWidth,i=n.clientHeight,c=0,s=0;if(o){l=o.width,i=o.height;let e=j();(!e||e&&"fixed"===t)&&(c=o.offsetLeft,s=o.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,r);else if("document"===t)n=function(e){let t=R(e),r=W(e),n=e.ownerDocument.body,o=l(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=l(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight),c=-r.scrollLeft+X(e),s=-r.scrollTop;return"rtl"===H(n).direction&&(c+=l(t.clientWidth,n.clientWidth)-o),{width:o,height:i,x:c,y:s}}(R(e));else if(k(t))n=function(e,t){let r=K(e,!0,"fixed"===t),n=r.top+e.clientTop,o=r.left+e.clientLeft,l=O(e)?P(e):s(1),i=e.clientWidth*l.x;return{width:i,height:e.clientHeight*l.y,x:o*l.x,y:n*l.y}}(t,r);else{let r=q(e);n={...t,x:t.x-r.x,y:t.y-r.y}}return b(n)}function Z(e){return"static"===H(e).position}function G(e,t){return O(e)&&"fixed"!==H(e).position?t?t(e):e.offsetParent:null}function U(e,t){let r=A(e);if(D(e))return r;if(!O(e)){let t=B(e);for(;t&&!I(t);){if(k(t)&&!Z(t))return t;t=B(t)}return r}let n=G(e,t);for(;n&&["table","td","th"].includes(T(n))&&Z(n);)n=G(n,t);return n&&I(n)&&Z(n)&&!$(n)?r:n||function(e){let t=B(e);for(;O(t)&&!I(t)&&!D(t);){if($(t))return t;t=B(t)}return null}(e)||r}let J=async function(e){let t=this.getOffsetParent||U,r=this.getDimensions,n=await r(e.floating);return{reference:function(e,t,r){let n=O(t),o=R(t),l="fixed"===r,i=K(e,!0,l,t),c={scrollLeft:0,scrollTop:0},a=s(0);if(n||!n&&!l){if(("body"!==T(t)||N(o))&&(c=W(t)),n){let e=K(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else o&&(a.x=X(o))}return{x:i.left+c.scrollLeft-a.x,y:i.top+c.scrollTop-a.y,width:i.width,height:i.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},Q={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:n,strategy:o}=e,l="fixed"===o,i=R(n),c=!!t&&D(t.floating);if(n===i||c&&l)return r;let a={scrollLeft:0,scrollTop:0},u=s(1),d=s(0),f=O(n);if((f||!f&&!l)&&(("body"!==T(n)||N(i))&&(a=W(n)),O(n))){let e=K(n);u=P(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+d.x,y:r.y*u.y-a.scrollTop*u.y+d.y}},getDocumentElement:R,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e,c=[..."clippingAncestors"===r?D(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let n=M(e,[],!1).filter(e=>k(e)&&"body"!==T(e)),o=null,l="fixed"===H(e).position,i=l?B(e):e;for(;k(i)&&!I(i);){let t=H(i),r=$(i);r||"fixed"!==t.position||(o=null),(l?!r&&!o:!r&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||N(i)&&!r&&function e(t,r){let n=B(t);return!(n===r||!k(n)||I(n))&&("fixed"===H(n).position||e(n,r))}(e,i))?n=n.filter(e=>e!==i):o=t,i=B(i)}return t.set(e,n),n}(t,this._c):[].concat(r),n],s=c[0],a=c.reduce((e,r)=>{let n=Y(t,r,i);return e.top=l(n.top,e.top),e.right=o(n.right,e.right),e.bottom=o(n.bottom,e.bottom),e.left=l(n.left,e.left),e},Y(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:U,getElementRects:J,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=z(e);return{width:t,height:r}},getScale:P,isElement:k,isRTL:function(e){return"rtl"===H(e).direction}},ee=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,n;let{x:o,y:l,placement:i,middlewareData:c}=t,s=await S(t,e);return i===(null==(r=c.offset)?void 0:r.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:o+s.x,y:l+s.y,data:{...s,placement:i}}}}},et=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:r,y:n,placement:i}=t,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...u}=d(e,t),p={x:r,y:n},v=await _(t,u),y=h(f(i)),w=m(y),g=p[w],b=p[y];if(c){let e="y"===w?"top":"left",t="y"===w?"bottom":"right",r=g+v[e],n=g-v[t];g=l(r,o(g,n))}if(s){let e="y"===y?"top":"left",t="y"===y?"bottom":"right",r=b+v[e],n=b-v[t];b=l(r,o(b,n))}let E=a.fn({...t,[w]:g,[y]:b});return{...E,data:{x:E.x-r,y:E.y-n}}}}},er=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,n,o,l,i;let{placement:c,middlewareData:s,rects:a,initialPlacement:u,platform:g,elements:b}=t,{mainAxis:E=!0,crossAxis:x=!0,fallbackPlacements:S,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:R=!0,...L}=d(e,t);if(null!=(r=s.arrow)&&r.alignmentOffset)return{};let k=f(c),O=h(u),C=f(u)===u,N=await (null==g.isRTL?void 0:g.isRTL(b.floating)),D=S||(C||!R?[w(u)]:function(e){let t=w(e);return[y(e),t,y(t)]}(u)),$="none"!==A;!S&&$&&D.push(...function(e,t,r,n){let o=p(e),l=function(e,t,r){let n=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(r)return t?o:n;return t?n:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(f(e),"start"===r,n);return o&&(l=l.map(e=>e+"-"+o),t&&(l=l.concat(l.map(y)))),l}(u,R,A,N));let j=[u,...D],I=await _(t,L),H=[],W=(null==(n=s.flip)?void 0:n.overflows)||[];if(E&&H.push(I[k]),x){let e=function(e,t,r){void 0===r&&(r=!1);let n=p(e),o=m(h(e)),l=v(o),i="x"===o?n===(r?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=w(i)),[i,w(i)]}(c,a,N);H.push(I[e[0]],I[e[1]])}if(W=[...W,{placement:c,overflows:H}],!H.every(e=>e<=0)){let e=((null==(o=s.flip)?void 0:o.index)||0)+1,t=j[e];if(t)return{data:{index:e,overflows:W},reset:{placement:t}};let r=null==(l=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:l.placement;if(!r)switch(T){case"bestFit":{let e=null==(i=W.filter(e=>{if($){let t=h(e.placement);return t===O||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(r=e);break}case"initialPlacement":r=u}if(c!==r)return{reset:{placement:r}}}return{}}}},en=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:n,placement:i,rects:c,platform:s,elements:a,middlewareData:u}=t,{element:f,padding:y=0}=d(e,t)||{};if(null==f)return{};let w=g(y),b={x:r,y:n},E=m(h(i)),x=v(E),_=await s.getDimensions(f),S="y"===E,T=S?"clientHeight":"clientWidth",A=c.reference[x]+c.reference[E]-b[E]-c.floating[x],R=b[E]-c.reference[E],L=await (null==s.getOffsetParent?void 0:s.getOffsetParent(f)),k=L?L[T]:0;k&&await (null==s.isElement?void 0:s.isElement(L))||(k=a.floating[T]||c.floating[x]);let O=k/2-_[x]/2-1,C=o(w[S?"top":"left"],O),N=o(w[S?"bottom":"right"],O),D=k-_[x]-N,$=k/2-_[x]/2+(A/2-R/2),j=l(C,o($,D)),I=!u.arrow&&null!=p(i)&&$!==j&&c.reference[x]/2-($<C?C:N)-_[x]/2<0,H=I?$<C?$-C:$-D:0;return{[E]:b[E]+H,data:{[E]:j,centerOffset:$-j-H,...I&&{alignmentOffset:H}},reset:I}}}),eo=(e,t,r)=>{let n=new Map,o={platform:Q,...r},l={...o.platform,_c:n};return x(e,t,{...o,platform:l})};var el=r(6800),ei=r(357);/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/let ec={core:!1,base:!1};function es({css:e,id:t="react-tooltip-base-styles",type:r="base",ref:n}){var o,l;if(!e||"undefined"==typeof document||ec[r]||"core"===r&&void 0!==ei&&(null===(o=null==ei?void 0:ei.env)||void 0===o?void 0:o.REACT_TOOLTIP_DISABLE_CORE_STYLES)||"base"!==r&&void 0!==ei&&(null===(l=null==ei?void 0:ei.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===r&&(t="react-tooltip-core-styles"),n||(n={});let{insertAt:i}=n;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);let c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),ec[r]=!0}let ea=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:r=null,place:n="top",offset:o=10,strategy:l="absolute",middlewares:i=[ee(Number(o)),er({fallbackAxisSideDirection:"start"}),et({padding:5})],border:c})=>e&&null!==t?r?(i.push(en({element:r,padding:5})),eo(e,t,{placement:n,strategy:l,middleware:i}).then(({x:e,y:t,placement:r,middlewareData:n})=>{var o,l;let i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(o=n.arrow)&&void 0!==o?o:{x:0,y:0},u=null!==(l=({top:"bottom",right:"left",bottom:"top",left:"right"})[r.split("-")[0]])&&void 0!==l?l:"bottom",d=0;if(c){let e=`${c}`.match(/(\d+)px/);d=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...c&&{borderBottom:c,borderRight:c},[u]:`-${4+d}px`},place:r}})):eo(e,t,{placement:"bottom",strategy:l,middleware:i}).then(({x:e,y:t,placement:r})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:r})):{tooltipStyles:{},tooltipArrowStyles:{},place:n},eu=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ed=(e,t,r)=>{let n=null,o=function(...o){let l=()=>{n=null,r||e.apply(this,o)};r&&!n&&(e.apply(this,o),n=setTimeout(l,t)),r||(n&&clearTimeout(n),n=setTimeout(l,t))};return o.cancel=()=>{n&&(clearTimeout(n),n=null)},o},ef=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,ep=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((e,r)=>ep(e,t[r]));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!ef(e)||!ef(t))return e===t;let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(r=>ep(e[r],t[r]))},em=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;let t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some(e=>{let r=t.getPropertyValue(e);return"auto"===r||"scroll"===r})},ev=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(em(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},eh="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,ey={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},ew=(0,n.createContext)({getTooltipData:()=>ey});function eg(e="DEFAULT_TOOLTIP_ID"){return(0,n.useContext)(ew).getTooltipData(e)}var eb={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},eE={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};let ex=({forwardRef:e,id:t,className:r,classNameArrow:i,variant:s="dark",anchorId:a,anchorSelect:u,place:d="top",offset:f=10,events:p=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:h,wrapper:y,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:E=!1,noArrow:x=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:T=!1,closeOnResize:A=!1,openEvents:L,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:C,style:N,position:D,afterShow:$,afterHide:j,content:I,contentWrapperRef:H,isOpen:W,defaultIsOpen:B=!1,setIsOpen:z,activeAnchor:P,setActiveAnchor:V,border:q,opacity:X,arrowColor:Y,role:Z="tooltip"})=>{var G;let U=(0,n.useRef)(null),J=(0,n.useRef)(null),Q=(0,n.useRef)(null),ee=(0,n.useRef)(null),et=(0,n.useRef)(null),[er,en]=(0,n.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:d}),[eo,ei]=(0,n.useState)(!1),[ec,es]=(0,n.useState)(!1),[eu,ef]=(0,n.useState)(null),em=(0,n.useRef)(!1),ey=(0,n.useRef)(null),{anchorRefs:ew,setActiveAnchor:ex}=eg(t),e_=(0,n.useRef)(!1),[eS,eT]=(0,n.useState)([]),eA=(0,n.useRef)(!1),eR=m||p.includes("click"),eL=eR||(null==L?void 0:L.click)||(null==L?void 0:L.dblclick)||(null==L?void 0:L.mousedown),ek=L?{...L}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!L&&eR&&Object.assign(ek,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});let eO=k?{...k}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!k&&eR&&Object.assign(eO,{mouseleave:!1,blur:!1,mouseout:!1});let eC=O?{...O}:{escape:S||!1,scroll:T||!1,resize:A||!1,clickOutsideAnchor:eL||!1};C&&(Object.assign(ek,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(eO,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(eC,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),eh(()=>(eA.current=!0,()=>{eA.current=!1}),[]);let eN=e=>{eA.current&&(e&&es(!0),setTimeout(()=>{eA.current&&(null==z||z(e),void 0===W&&ei(e))},10))};(0,n.useEffect)(()=>{if(void 0===W)return()=>null;W&&es(!0);let e=setTimeout(()=>{ei(W)},10);return()=>{clearTimeout(e)}},[W]),(0,n.useEffect)(()=>{if(eo!==em.current){if(et.current&&clearTimeout(et.current),em.current=eo,eo)null==$||$();else{let e=(e=>{let t=e.match(/^([\d.]+)(ms|s)$/);if(!t)return 0;let[,r,n]=t;return Number(r)*("ms"===n?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));et.current=setTimeout(()=>{es(!1),ef(null),null==j||j()},e+25)}}},[eo]);let eD=e=>{en(t=>ep(t,e)?t:e)},e$=(e=w)=>{Q.current&&clearTimeout(Q.current),ec?eN(!0):Q.current=setTimeout(()=>{eN(!0)},e)},ej=(e=g)=>{ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>{e_.current||eN(!1)},e)},eI=e=>{var t;if(!e)return;let r=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==r?void 0:r.isConnected))return V(null),void ex({current:null});w?e$():eN(!0),V(r),ex({current:r}),ee.current&&clearTimeout(ee.current)},eH=()=>{_?ej(g||100):g?ej():eN(!1),Q.current&&clearTimeout(Q.current)},eW=({x:e,y:t})=>{var r;ea({place:null!==(r=null==eu?void 0:eu.place)&&void 0!==r?r:d,offset:f,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:U.current,tooltipArrowReference:J.current,strategy:v,middlewares:h,border:q}).then(e=>{eD(e)})},eB=e=>{if(!e)return;let t={x:e.clientX,y:e.clientY};eW(t),ey.current=t},eM=e=>{var t;if(!eo)return;let r=e.target;r.isConnected&&(null===(t=U.current)||void 0===t||!t.contains(r))&&([document.querySelector(`[id='${a}']`),...eS].some(e=>null==e?void 0:e.contains(r))||(eN(!1),Q.current&&clearTimeout(Q.current)))},ez=ed(eI,50,!0),eF=ed(eH,50,!0),eP=e=>{eF.cancel(),ez(e)},eV=()=>{ez.cancel(),eF()},eq=(0,n.useCallback)(()=>{var e,t;let r=null!==(e=null==eu?void 0:eu.position)&&void 0!==e?e:D;r?eW(r):b?ey.current&&eW(ey.current):(null==P?void 0:P.isConnected)&&ea({place:null!==(t=null==eu?void 0:eu.place)&&void 0!==t?t:d,offset:f,elementReference:P,tooltipReference:U.current,tooltipArrowReference:J.current,strategy:v,middlewares:h,border:q}).then(e=>{eA.current&&eD(e)})},[eo,P,I,N,d,null==eu?void 0:eu.place,f,v,D,null==eu?void 0:eu.position,b]);(0,n.useEffect)(()=>{var e,t;let r=new Set(ew);eS.forEach(e=>{r.add({current:e})});let n=document.querySelector(`[id='${a}']`);n&&r.add({current:n});let i=()=>{eN(!1)},s=ev(P),u=ev(U.current);eC.scroll&&(window.addEventListener("scroll",i),null==s||s.addEventListener("scroll",i),null==u||u.addEventListener("scroll",i));let d=null;eC.resize?window.addEventListener("resize",i):P&&U.current&&(d=function(e,t,r,n){let i;void 0===n&&(n={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:d="function"==typeof IntersectionObserver,animationFrame:f=!1}=n,p=F(e),m=s||a?[...p?M(p):[],...M(t)]:[];m.forEach(e=>{s&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let v=p&&d?function(e,t){let r,n=null,i=R(e);function s(){var e;clearTimeout(r),null==(e=n)||e.disconnect(),n=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();let{left:f,top:p,width:m,height:v}=e.getBoundingClientRect();if(u||t(),!m||!v)return;let h=c(p),y=c(i.clientWidth-(f+m)),w={rootMargin:-h+"px "+-y+"px "+-c(i.clientHeight-(p+v))+"px "+-c(f)+"px",threshold:l(0,o(1,d))||1},g=!0;function b(e){let t=e[0].intersectionRatio;if(t!==d){if(!g)return a();t?a(!1,t):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(b,{...w,root:i.ownerDocument})}catch(e){n=new IntersectionObserver(b,w)}n.observe(e)}(!0),s}(p,r):null,h=-1,y=null;u&&(y=new ResizeObserver(e=>{let[n]=e;n&&n.target===p&&y&&(y.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var e;null==(e=y)||e.observe(t)})),r()}),p&&!f&&y.observe(p),y.observe(t));let w=f?K(e):null;return f&&function t(){let n=K(e);w&&(n.x!==w.x||n.y!==w.y||n.width!==w.width||n.height!==w.height)&&r(),w=n,i=requestAnimationFrame(t)}(),r(),()=>{var e;m.forEach(e=>{s&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==v||v(),null==(e=y)||e.disconnect(),y=null,f&&cancelAnimationFrame(i)}}(P,U.current,eq,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));let f=e=>{"Escape"===e.key&&eN(!1)};eC.escape&&window.addEventListener("keydown",f),eC.clickOutsideAnchor&&window.addEventListener("click",eM);let p=[],m=e=>{eo&&(null==e?void 0:e.target)===P||eI(e)},v=e=>{eo&&(null==e?void 0:e.target)===P&&eH()},h=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],y=["click","dblclick","mousedown","mouseup"];Object.entries(ek).forEach(([e,t])=>{t&&(h.includes(e)?p.push({event:e,listener:eP}):y.includes(e)&&p.push({event:e,listener:m}))}),Object.entries(eO).forEach(([e,t])=>{t&&(h.includes(e)?p.push({event:e,listener:eV}):y.includes(e)&&p.push({event:e,listener:v}))}),b&&p.push({event:"pointermove",listener:eB});let w=()=>{e_.current=!0},g=()=>{e_.current=!1,eH()};return _&&!eL&&(null===(e=U.current)||void 0===e||e.addEventListener("mouseenter",w),null===(t=U.current)||void 0===t||t.addEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{r.forEach(r=>{var n;null===(n=r.current)||void 0===n||n.addEventListener(e,t)})}),()=>{var e,t;eC.scroll&&(window.removeEventListener("scroll",i),null==s||s.removeEventListener("scroll",i),null==u||u.removeEventListener("scroll",i)),eC.resize?window.removeEventListener("resize",i):null==d||d(),eC.clickOutsideAnchor&&window.removeEventListener("click",eM),eC.escape&&window.removeEventListener("keydown",f),_&&!eL&&(null===(e=U.current)||void 0===e||e.removeEventListener("mouseenter",w),null===(t=U.current)||void 0===t||t.removeEventListener("mouseleave",g)),p.forEach(({event:e,listener:t})=>{r.forEach(r=>{var n;null===(n=r.current)||void 0===n||n.removeEventListener(e,t)})})}},[P,eq,ec,ew,eS,L,k,O,eR,w,g]),(0,n.useEffect)(()=>{var e,r;let n=null!==(r=null!==(e=null==eu?void 0:eu.anchorSelect)&&void 0!==e?e:u)&&void 0!==r?r:"";!n&&t&&(n=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`);let o=new MutationObserver(e=>{let r=[],o=[];e.forEach(e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===t?r.push(e.target):e.oldValue===t&&o.push(e.target)),"childList"===e.type){if(P){let t=[...e.removedNodes].filter(e=>1===e.nodeType);if(n)try{o.push(...t.filter(e=>e.matches(n))),o.push(...t.flatMap(e=>[...e.querySelectorAll(n)]))}catch(e){}t.some(e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,P))&&(es(!1),eN(!1),V(null),Q.current&&clearTimeout(Q.current),ee.current&&clearTimeout(ee.current),!0)})}if(n)try{let t=[...e.addedNodes].filter(e=>1===e.nodeType);r.push(...t.filter(e=>e.matches(n))),r.push(...t.flatMap(e=>[...e.querySelectorAll(n)]))}catch(e){}}}),(r.length||o.length)&&eT(e=>[...e.filter(e=>!o.includes(e)),...r])});return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{o.disconnect()}},[t,u,null==eu?void 0:eu.anchorSelect,P]),(0,n.useEffect)(()=>{eq()},[eq]),(0,n.useEffect)(()=>{if(!(null==H?void 0:H.current))return()=>null;let e=new ResizeObserver(()=>{setTimeout(()=>eq())});return e.observe(H.current),()=>{e.disconnect()}},[I,null==H?void 0:H.current]),(0,n.useEffect)(()=>{var e;let t=document.querySelector(`[id='${a}']`),r=[...eS,t];P&&r.includes(P)||V(null!==(e=eS[0])&&void 0!==e?e:t)},[a,eS,P]),(0,n.useEffect)(()=>(B&&eN(!0),()=>{Q.current&&clearTimeout(Q.current),ee.current&&clearTimeout(ee.current)}),[]),(0,n.useEffect)(()=>{var e;let r=null!==(e=null==eu?void 0:eu.anchorSelect)&&void 0!==e?e:u;if(!r&&t&&(r=`[data-tooltip-id='${t.replace(/'/g,"\\'")}']`),r)try{let e=Array.from(document.querySelectorAll(r));eT(e)}catch(e){eT([])}},[t,u,null==eu?void 0:eu.anchorSelect]),(0,n.useEffect)(()=>{Q.current&&(clearTimeout(Q.current),e$(w))},[w]);let eK=null!==(G=null==eu?void 0:eu.content)&&void 0!==G?G:I,eX=eo&&Object.keys(er.tooltipStyles).length>0;return(0,n.useImperativeHandle)(e,()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}ef(null!=e?e:null),(null==e?void 0:e.delay)?e$(e.delay):eN(!0)},close:e=>{(null==e?void 0:e.delay)?ej(e.delay):eN(!1)},activeAnchor:P,place:er.place,isOpen:!!(ec&&!E&&eK&&eX)})),ec&&!E&&eK?n.createElement(y,{id:t,role:Z,className:el("react-tooltip",eb.tooltip,eE.tooltip,eE[s],r,`react-tooltip__place-${er.place}`,eb[eX?"show":"closing"],eX?"react-tooltip__show":"react-tooltip__closing","fixed"===v&&eb.fixed,_&&eb.clickable),onTransitionEnd:e=>{et.current&&clearTimeout(et.current),eo||"opacity"!==e.propertyName||(es(!1),ef(null),null==j||j())},style:{...N,...er.tooltipStyles,opacity:void 0!==X&&eX?X:void 0},ref:U},eK,n.createElement(y,{className:el("react-tooltip-arrow",eb.arrow,eE.arrow,i,x&&eb.noArrow),style:{...er.tooltipArrowStyles,background:Y?`linear-gradient(to right bottom, transparent 50%, ${Y} 50%)`:void 0},ref:J})):null},e_=({content:e})=>n.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),eS=n.forwardRef(({id:e,anchorId:t,anchorSelect:r,content:o,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:v=!1,positionStrategy:h="absolute",middlewares:y,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:E=!1,noArrow:x=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:T=!1,closeOnResize:A=!1,openEvents:R,closeEvents:L,globalCloseEvents:k,imperativeModeOnly:O=!1,style:C,position:N,isOpen:D,defaultIsOpen:$=!1,disableStyleInjection:j=!1,border:I,opacity:H,arrowColor:W,setIsOpen:B,afterShow:M,afterHide:z,role:F="tooltip"},P)=>{let[V,q]=(0,n.useState)(o),[K,X]=(0,n.useState)(l),[Y,Z]=(0,n.useState)(u),[G,U]=(0,n.useState)(a),[J,Q]=(0,n.useState)(d),[ee,et]=(0,n.useState)(w),[er,en]=(0,n.useState)(g),[eo,ei]=(0,n.useState)(b),[ec,es]=(0,n.useState)(E),[ea,ed]=(0,n.useState)(f),[ef,ep]=(0,n.useState)(m),[em,ev]=(0,n.useState)(h),[eh,ey]=(0,n.useState)(null),[ew,eb]=(0,n.useState)(null),eE=(0,n.useRef)(j),{anchorRefs:eS,activeAnchor:eT}=eg(e),eA=e=>null==e?void 0:e.getAttributeNames().reduce((t,r)=>{var n;return r.startsWith("data-tooltip-")&&(t[r.replace(/^data-tooltip-/,"")]=null!==(n=null==e?void 0:e.getAttribute(r))&&void 0!==n?n:null),t},{}),eR=e=>{let t={place:e=>{Z(null!=e?e:u)},content:e=>{q(null!=e?e:o)},html:e=>{X(null!=e?e:l)},variant:e=>{U(null!=e?e:a)},offset:e=>{Q(null===e?d:Number(e))},wrapper:e=>{ed(null!=e?e:f)},events:e=>{let t=null==e?void 0:e.split(" ");ep(null!=t?t:m)},"position-strategy":e=>{ev(null!=e?e:h)},"delay-show":e=>{et(null===e?w:Number(e))},"delay-hide":e=>{en(null===e?g:Number(e))},float:e=>{ei(null===e?b:"true"===e)},hidden:e=>{es(null===e?E:"true"===e)},"class-name":e=>{ey(e)}};Object.values(t).forEach(e=>e(null)),Object.entries(e).forEach(([e,r])=>{var n;null===(n=t[e])||void 0===n||n.call(t,r)})};(0,n.useEffect)(()=>{q(o)},[o]),(0,n.useEffect)(()=>{X(l)},[l]),(0,n.useEffect)(()=>{Z(u)},[u]),(0,n.useEffect)(()=>{U(a)},[a]),(0,n.useEffect)(()=>{Q(d)},[d]),(0,n.useEffect)(()=>{et(w)},[w]),(0,n.useEffect)(()=>{en(g)},[g]),(0,n.useEffect)(()=>{ei(b)},[b]),(0,n.useEffect)(()=>{es(E)},[E]),(0,n.useEffect)(()=>{ev(h)},[h]),(0,n.useEffect)(()=>{eE.current!==j&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[j]),(0,n.useEffect)(()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===j,disableBase:j}}))},[]),(0,n.useEffect)(()=>{var n;let o=new Set(eS),l=r;if(!l&&e&&(l=`[data-tooltip-id='${e.replace(/'/g,"\\'")}']`),l)try{document.querySelectorAll(l).forEach(e=>{o.add({current:e})})}catch(e){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}let i=document.querySelector(`[id='${t}']`);if(i&&o.add({current:i}),!o.size)return()=>null;let c=null!==(n=null!=ew?ew:i)&&void 0!==n?n:eT.current,s=new MutationObserver(e=>{e.forEach(e=>{var t;c&&"attributes"===e.type&&(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-"))&&eR(eA(c))})});return c&&(eR(eA(c)),s.observe(c,{attributes:!0,childList:!1,subtree:!1})),()=>{s.disconnect()}},[eS,eT,ew,t,r]),(0,n.useEffect)(()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),I&&!eu("border",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),H&&!eu("opacity",`${H}`)&&console.warn(`[react-tooltip] "${H}" is not a valid \`opacity\`.`)},[]);let eL=p,ek=(0,n.useRef)(null);if(i){let e=i({content:(null==ew?void 0:ew.getAttribute("data-tooltip-content"))||V||null,activeAnchor:ew});eL=e?n.createElement("div",{ref:ek,className:"react-tooltip-content-wrapper"},e):null}else V&&(eL=V);K&&(eL=n.createElement(e_,{content:K}));let eO={forwardRef:P,id:e,anchorId:t,anchorSelect:r,className:el(c,eh),classNameArrow:s,content:eL,contentWrapperRef:ek,place:Y,variant:G,offset:J,wrapper:ea,events:ef,openOnClick:v,positionStrategy:em,middlewares:y,delayShow:ee,delayHide:er,float:eo,hidden:ec,noArrow:x,clickable:_,closeOnEsc:S,closeOnScroll:T,closeOnResize:A,openEvents:R,closeEvents:L,globalCloseEvents:k,imperativeModeOnly:O,style:C,position:N,isOpen:D,defaultIsOpen:$,border:I,opacity:H,arrowColor:W,setIsOpen:B,afterShow:M,afterHide:z,activeAnchor:ew,setActiveAnchor:e=>eb(e),role:F};return n.createElement(ex,{...eO})});"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",e=>{e.detail.disableCore||es({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||es({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})})}}]);