function Xx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Qx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R0={exports:{}},Qa={},z0={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),Zx=Symbol.for("react.portal"),ew=Symbol.for("react.fragment"),tw=Symbol.for("react.strict_mode"),nw=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),ow=Symbol.for("react.forward_ref"),sw=Symbol.for("react.suspense"),aw=Symbol.for("react.memo"),lw=Symbol.for("react.lazy"),ip=Symbol.iterator;function cw(e){return e===null||typeof e!="object"?null:(e=ip&&e[ip]||e["@@iterator"],typeof e=="function"?e:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,V0={};function Ii(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||D0}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N0(){}N0.prototype=Ii.prototype;function ud(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||D0}var dd=ud.prototype=new N0;dd.constructor=ud;_0(dd,Ii.prototype);dd.isPureReactComponent=!0;var op=Array.isArray,B0=Object.prototype.hasOwnProperty,fd={current:null},F0={key:!0,ref:!0,__self:!0,__source:!0};function $0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)B0.call(t,r)&&!F0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xo,type:e,key:o,ref:s,props:i,_owner:fd.current}}function uw(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function dw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sp=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dw(""+e.key):t.toString(36)}function _s(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xo:case Zx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+zl(s,0):r,op(i)?(n="",e!=null&&(n=e.replace(sp,"$&/")+"/"),_s(i,t,n,"",function(c){return c})):i!=null&&(pd(i)&&(i=uw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",op(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+zl(o,a);s+=_s(o,t,n,l,i)}else if(l=cw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+zl(o,a++),s+=_s(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return _s(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Vs={transition:null},pw={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:fd};function H0(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!pd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Ii;Z.Fragment=ew;Z.Profiler=nw;Z.PureComponent=ud;Z.StrictMode=tw;Z.Suspense=sw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Z.act=H0;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=fd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)B0.call(t,l)&&!F0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:s}};Z.createContext=function(e){return e={$$typeof:iw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rw,_context:e},e.Consumer=e};Z.createElement=$0;Z.createFactory=function(e){var t=$0.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:ow,render:e}};Z.isValidElement=pd;Z.lazy=function(e){return{$$typeof:lw,_payload:{_status:-1,_result:e},_init:fw}};Z.memo=function(e,t){return{$$typeof:aw,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=t}};Z.unstable_act=H0;Z.useCallback=function(e,t){return Je.current.useCallback(e,t)};Z.useContext=function(e){return Je.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Je.current.useEffect(e,t)};Z.useId=function(){return Je.current.useId()};Z.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Je.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};Z.useRef=function(e){return Je.current.useRef(e)};Z.useState=function(e){return Je.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Je.current.useTransition()};Z.version="18.3.1";z0.exports=Z;var C=z0.exports;const q=Oi(C),hw=Xx({__proto__:null,default:q},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw=C,gw=Symbol.for("react.element"),vw=Symbol.for("react.fragment"),yw=Object.prototype.hasOwnProperty,xw=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ww={key:!0,ref:!0,__self:!0,__source:!0};function G0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)yw.call(t,r)&&!ww.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gw,type:e,key:o,ref:s,props:i,_owner:xw.current}}Qa.Fragment=vw;Qa.jsx=G0;Qa.jsxs=G0;R0.exports=Qa;var d=R0.exports,U0={exports:{}},gt={},W0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,V){var N=L.length;L.push(V);e:for(;0<N;){var J=N-1>>>1,te=L[J];if(0<i(te,V))L[J]=V,L[N]=te,N=J;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var V=L[0],N=L.pop();if(N!==V){L[0]=N;e:for(var J=0,te=L.length,ot=te>>>1;J<ot;){var st=2*(J+1)-1,xt=L[st],De=st+1,wt=L[De];if(0>i(xt,N))De<te&&0>i(wt,xt)?(L[J]=wt,L[De]=N,J=De):(L[J]=xt,L[st]=N,J=st);else if(De<te&&0>i(wt,N))L[J]=wt,L[De]=N,J=De;else break e}}return V}function i(L,V){var N=L.sortIndex-V.sortIndex;return N!==0?N:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,p=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=L)r(c),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(c)}}function w(L){if(x=!1,m(L),!y)if(n(l)!==null)y=!0,ie(b);else{var V=n(c);V!==null&&ee(w,V.startTime-L)}}function b(L,V){y=!1,x&&(x=!1,g(j),j=-1),v=!0;var N=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||L&&!R());){var J=f.callback;if(typeof J=="function"){f.callback=null,p=f.priorityLevel;var te=J(f.expirationTime<=V);V=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var ot=!0;else{var st=n(c);st!==null&&ee(w,st.startTime-V),ot=!1}return ot}finally{f=null,p=N,v=!1}}var T=!1,P=null,j=-1,A=5,k=-1;function R(){return!(e.unstable_now()-k<A)}function B(){if(P!==null){var L=e.unstable_now();k=L;var V=!0;try{V=P(!0,L)}finally{V?_():(T=!1,P=null)}}else T=!1}var _;if(typeof h=="function")_=function(){h(B)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=B,_=function(){W.postMessage(null)}}else _=function(){S(B,0)};function ie(L){P=L,T||(T=!0,_())}function ee(L,V){j=S(function(){L(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ie(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var N=p;p=V;try{return L()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var N=p;p=L;try{return V()}finally{p=N}},e.unstable_scheduleCallback=function(L,V,N){var J=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?J+N:J):N=J,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=N+te,L={id:u++,callback:V,priorityLevel:L,startTime:N,expirationTime:te,sortIndex:-1},N>J?(L.sortIndex=N,t(c,L),n(l)===null&&L===n(c)&&(x?(g(j),j=-1):x=!0,ee(w,N-J))):(L.sortIndex=te,t(l,L),y||v||(y=!0,ie(b))),L},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(L){var V=p;return function(){var N=p;p=V;try{return L.apply(this,arguments)}finally{p=N}}}})(Y0);W0.exports=Y0;var Sw=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw=C,ht=Sw;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,Po={};function Rr(e,t){vi(e,t),vi(e+"Capture",t)}function vi(e,t){for(Po[e]=t,e=0;e<t.length;e++)q0.add(t[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function Cw(e){return _c.call(lp,e)?!0:_c.call(ap,e)?!1:Tw.test(e)?lp[e]=!0:(ap[e]=!0,!1)}function Pw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ew(e,t,n,r){if(t===null||typeof t>"u"||Pw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function md(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hd,md);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hd,md);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hd,md);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function gd(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ew(t,n,i,r)&&(n=null),r||i===null?Cw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kn=bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),X0=Symbol.for("react.offscreen"),cp=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=cp&&e[cp]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Dl;function eo(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var _l=!1;function Vl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?eo(e):""}function jw(e){switch(e.tag){case 5:return eo(e.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function Fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Gr:return"Portal";case Vc:return"Profiler";case vd:return"StrictMode";case Nc:return"Suspense";case Bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J0:return(e.displayName||"Context")+".Consumer";case K0:return(e._context.displayName||"Context")+".Provider";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xd:return t=e.displayName||null,t!==null?t:Fc(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Fc(e(t))}catch{}}return null}function kw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(t);case 8:return t===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Aw(e){var t=Q0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=Aw(e))}function Z0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $c(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function up(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eg(e,t){t=t.checked,t!=null&&gd(e,"checked",t,!1)}function Hc(e,t){eg(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gc(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var to=Array.isArray;function li(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(to(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function tg(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ng(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ng(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fs,rg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mw=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(e){Mw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ao[t]=ao[e]})});function ig(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ao.hasOwnProperty(e)&&ao[e]?(""+t).trim():t+"px"}function og(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ig(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lw=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(e,t){if(t){if(Lw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function qc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jc=null,ci=null,ui=null;function hp(e){if(e=es(e)){if(typeof Jc!="function")throw Error(z(280));var t=e.stateNode;t&&(t=rl(t),Jc(e.stateNode,e.type,t))}}function sg(e){ci?ui?ui.push(e):ui=[e]:ci=e}function ag(){if(ci){var e=ci,t=ui;if(ui=ci=null,hp(e),t)for(e=0;e<t.length;e++)hp(t[e])}}function lg(e,t){return e(t)}function cg(){}var Nl=!1;function ug(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return lg(e,t,n)}finally{Nl=!1,(ci!==null||ui!==null)&&(cg(),ag())}}function jo(e,t){var n=e.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Xc=!1;if(Tn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Xc=!1}function Ow(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var lo=!1,la=null,ca=!1,Qc=null,Iw={onError:function(e){lo=!0,la=e}};function Rw(e,t,n,r,i,o,s,a,l){lo=!1,la=null,Ow.apply(Iw,arguments)}function zw(e,t,n,r,i,o,s,a,l){if(Rw.apply(this,arguments),lo){if(lo){var c=la;lo=!1,la=null}else throw Error(z(198));ca||(ca=!0,Qc=c)}}function zr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mp(e){if(zr(e)!==e)throw Error(z(188))}function Dw(e){var t=e.alternate;if(!t){if(t=zr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return mp(i),e;if(o===r)return mp(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function fg(e){return e=Dw(e),e!==null?pg(e):null}function pg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pg(e);if(t!==null)return t;e=e.sibling}return null}var hg=ht.unstable_scheduleCallback,gp=ht.unstable_cancelCallback,_w=ht.unstable_shouldYield,Vw=ht.unstable_requestPaint,Ce=ht.unstable_now,Nw=ht.unstable_getCurrentPriorityLevel,Sd=ht.unstable_ImmediatePriority,mg=ht.unstable_UserBlockingPriority,ua=ht.unstable_NormalPriority,Bw=ht.unstable_LowPriority,gg=ht.unstable_IdlePriority,Za=null,en=null;function Fw(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Gw,$w=Math.log,Hw=Math.LN2;function Gw(e){return e>>>=0,e===0?32:31-($w(e)/Hw|0)|0}var ps=64,hs=4194304;function no(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=no(a):(o&=s,o!==0&&(r=no(o)))}else s=n&~i,s!==0?r=no(s):o!==0&&(r=no(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Uw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ww(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ht(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Uw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vg(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function Yw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function yg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xg,Td,wg,Sg,bg,eu=!1,ms=[],Hn=null,Gn=null,Un=null,ko=new Map,Ao=new Map,Dn=[],qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function Hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=es(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kw(e,t,n,r,i){switch(t){case"focusin":return Hn=Hi(Hn,e,t,n,r,i),!0;case"dragenter":return Gn=Hi(Gn,e,t,n,r,i),!0;case"mouseover":return Un=Hi(Un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ko.set(o,Hi(ko.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ao.set(o,Hi(Ao.get(o)||null,e,t,n,r,i)),!0}return!1}function Tg(e){var t=vr(e.target);if(t!==null){var n=zr(t);if(n!==null){if(t=n.tag,t===13){if(t=dg(n),t!==null){e.blockedOn=t,bg(e.priority,function(){wg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return t=es(n),t!==null&&Td(t),e.blockedOn=n,!1;t.shift()}return!0}function yp(e,t,n){Ns(e)&&n.delete(t)}function Jw(){eu=!1,Hn!==null&&Ns(Hn)&&(Hn=null),Gn!==null&&Ns(Gn)&&(Gn=null),Un!==null&&Ns(Un)&&(Un=null),ko.forEach(yp),Ao.forEach(yp)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Jw)))}function Mo(e){function t(i){return Gi(i,e)}if(0<ms.length){Gi(ms[0],e);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hn!==null&&Gi(Hn,e),Gn!==null&&Gi(Gn,e),Un!==null&&Gi(Un,e),ko.forEach(t),Ao.forEach(t),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&Dn.shift()}var di=kn.ReactCurrentBatchConfig,fa=!0;function Xw(e,t,n,r){var i=ae,o=di.transition;di.transition=null;try{ae=1,Cd(e,t,n,r)}finally{ae=i,di.transition=o}}function Qw(e,t,n,r){var i=ae,o=di.transition;di.transition=null;try{ae=4,Cd(e,t,n,r)}finally{ae=i,di.transition=o}}function Cd(e,t,n,r){if(fa){var i=tu(e,t,n,r);if(i===null)Jl(e,t,r,pa,n),vp(e,r);else if(Kw(i,e,t,n,r))r.stopPropagation();else if(vp(e,r),t&4&&-1<qw.indexOf(e)){for(;i!==null;){var o=es(i);if(o!==null&&xg(o),o=tu(e,t,n,r),o===null&&Jl(e,t,r,pa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var pa=null;function tu(e,t,n,r){if(pa=null,e=wd(r),e=vr(e),e!==null)if(t=zr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function Cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nw()){case Sd:return 1;case mg:return 4;case ua:case Bw:return 16;case gg:return 536870912;default:return 16}default:return 16}}var Nn=null,Pd=null,Bs=null;function Pg(){if(Bs)return Bs;var e,t=Pd,n=t.length,r,i="value"in Nn?Nn.value:Nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Bs=i.slice(e,1<r?1-r:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function xp(){return!1}function vt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:xp,this.isPropagationStopped=xp,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=vt(Ri),Zo=we({},Ri,{view:0,detail:0}),Zw=vt(Zo),Fl,$l,Ui,el=we({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(Fl=e.screenX-Ui.screenX,$l=e.screenY-Ui.screenY):$l=Fl=0,Ui=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),wp=vt(el),e2=we({},el,{dataTransfer:0}),t2=vt(e2),n2=we({},Zo,{relatedTarget:0}),Hl=vt(n2),r2=we({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),i2=vt(r2),o2=we({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s2=vt(o2),a2=we({},Ri,{data:0}),Sp=vt(a2),l2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u2[e])?!!t[e]:!1}function jd(){return d2}var f2=we({},Zo,{key:function(e){if(e.key){var t=l2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p2=vt(f2),h2=we({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=vt(h2),m2=we({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),g2=vt(m2),v2=we({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),y2=vt(v2),x2=we({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w2=vt(x2),S2=[9,13,27,32],kd=Tn&&"CompositionEvent"in window,co=null;Tn&&"documentMode"in document&&(co=document.documentMode);var b2=Tn&&"TextEvent"in window&&!co,Eg=Tn&&(!kd||co&&8<co&&11>=co),Tp=" ",Cp=!1;function jg(e,t){switch(e){case"keyup":return S2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function T2(e,t){switch(e){case"compositionend":return kg(t);case"keypress":return t.which!==32?null:(Cp=!0,Tp);case"textInput":return e=t.data,e===Tp&&Cp?null:e;default:return null}}function C2(e,t){if(Wr)return e==="compositionend"||!kd&&jg(e,t)?(e=Pg(),Bs=Pd=Nn=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eg&&t.locale!=="ko"?null:t.data;default:return null}}var P2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P2[e.type]:t==="textarea"}function Ag(e,t,n,r){sg(r),t=ha(t,"onChange"),0<t.length&&(n=new Ed("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var uo=null,Lo=null;function E2(e){Bg(e,0)}function tl(e){var t=Kr(e);if(Z0(t))return e}function j2(e,t){if(e==="change")return t}var Mg=!1;if(Tn){var Gl;if(Tn){var Ul="oninput"in document;if(!Ul){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Ul=typeof Ep.oninput=="function"}Gl=Ul}else Gl=!1;Mg=Gl&&(!document.documentMode||9<document.documentMode)}function jp(){uo&&(uo.detachEvent("onpropertychange",Lg),Lo=uo=null)}function Lg(e){if(e.propertyName==="value"&&tl(Lo)){var t=[];Ag(t,Lo,e,wd(e)),ug(E2,t)}}function k2(e,t,n){e==="focusin"?(jp(),uo=t,Lo=n,uo.attachEvent("onpropertychange",Lg)):e==="focusout"&&jp()}function A2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Lo)}function M2(e,t){if(e==="click")return tl(t)}function L2(e,t){if(e==="input"||e==="change")return tl(t)}function O2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:O2;function Oo(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(t,i)||!Wt(e[i],t[i]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,t){var n=kp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function Og(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Og(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ig(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I2(e){var t=Ig(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(r!==null&&Ad(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ap(n,o);var s=Ap(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R2=Tn&&"documentMode"in document&&11>=document.documentMode,Yr=null,nu=null,fo=null,ru=!1;function Mp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||Yr==null||Yr!==aa(r)||(r=Yr,"selectionStart"in r&&Ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&Oo(fo,r)||(fo=r,r=ha(nu,"onSelect"),0<r.length&&(t=new Ed("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},Wl={},Rg={};Tn&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function nl(e){if(Wl[e])return Wl[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rg)return Wl[e]=t[n];return e}var zg=nl("animationend"),Dg=nl("animationiteration"),_g=nl("animationstart"),Vg=nl("transitionend"),Ng=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){Ng.set(e,t),Rr(t,[e])}for(var Yl=0;Yl<Lp.length;Yl++){var ql=Lp[Yl],z2=ql.toLowerCase(),D2=ql[0].toUpperCase()+ql.slice(1);rr(z2,"on"+D2)}rr(zg,"onAnimationEnd");rr(Dg,"onAnimationIteration");rr(_g,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Vg,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zw(r,t,void 0,e),e.currentTarget=null}function Bg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Op(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Op(i,a,c),o=l}}}if(ca)throw e=Qc,ca=!1,Qc=null,e}function de(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var r=e+"__bubble";n.has(r)||(Fg(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),Fg(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[ys]){e[ys]=!0,q0.forEach(function(n){n!=="selectionchange"&&(_2.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,Kl("selectionchange",!1,t))}}function Fg(e,t,n,r){switch(Cg(t)){case 1:var i=Xw;break;case 4:i=Qw;break;default:i=Cd}n=i.bind(null,t,n,e),i=void 0,!Xc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=vr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}ug(function(){var c=o,u=wd(n),f=[];e:{var p=Ng.get(e);if(p!==void 0){var v=Ed,y=e;switch(e){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":v=p2;break;case"focusin":y="focus",v=Hl;break;case"focusout":y="blur",v=Hl;break;case"beforeblur":case"afterblur":v=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=t2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=g2;break;case zg:case Dg:case _g:v=i2;break;case Vg:v=y2;break;case"scroll":v=Zw;break;case"wheel":v=w2;break;case"copy":case"cut":case"paste":v=s2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bp}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=jo(h,g),w!=null&&x.push(Ro(h,w,m)))),S)break;h=h.return}0<x.length&&(p=new v(p,y,null,n,u),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Kc&&(y=n.relatedTarget||n.fromElement)&&(vr(y)||y[Cn]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?vr(y):null,y!==null&&(S=zr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=wp,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=bp,w="onPointerLeave",g="onPointerEnter",h="pointer"),S=v==null?p:Kr(v),m=y==null?p:Kr(y),p=new x(w,h+"leave",v,n,u),p.target=S,p.relatedTarget=m,w=null,vr(u)===c&&(x=new x(g,h+"enter",y,n,u),x.target=m,x.relatedTarget=S,w=x),S=w,v&&y)t:{for(x=v,g=y,h=0,m=x;m;m=Br(m))h++;for(m=0,w=g;w;w=Br(w))m++;for(;0<h-m;)x=Br(x),h--;for(;0<m-h;)g=Br(g),m--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Br(x),g=Br(g)}x=null}else x=null;v!==null&&Ip(f,p,v,x,!1),y!==null&&S!==null&&Ip(f,S,y,x,!0)}}e:{if(p=c?Kr(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var b=j2;else if(Pp(p))if(Mg)b=L2;else{b=A2;var T=k2}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=M2);if(b&&(b=b(e,c))){Ag(f,b,n,u);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Gc(p,"number",p.value)}switch(T=c?Kr(c):window,e){case"focusin":(Pp(T)||T.contentEditable==="true")&&(Yr=T,nu=c,fo=null);break;case"focusout":fo=nu=Yr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Mp(f,n,u);break;case"selectionchange":if(R2)break;case"keydown":case"keyup":Mp(f,n,u)}var P;if(kd)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Wr?jg(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Eg&&n.locale!=="ko"&&(Wr||j!=="onCompositionStart"?j==="onCompositionEnd"&&Wr&&(P=Pg()):(Nn=u,Pd="value"in Nn?Nn.value:Nn.textContent,Wr=!0)),T=ha(c,j),0<T.length&&(j=new Sp(j,e,null,n,u),f.push({event:j,listeners:T}),P?j.data=P:(P=kg(n),P!==null&&(j.data=P)))),(P=b2?T2(e,n):C2(e,n))&&(c=ha(c,"onBeforeInput"),0<c.length&&(u=new Sp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}Bg(f,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jo(e,n),o!=null&&r.unshift(Ro(e,o,i)),o=jo(e,t),o!=null&&r.push(Ro(e,o,i))),e=e.return}return r}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ip(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=jo(n,o),l!=null&&s.unshift(Ro(n,l,a))):i||(l=jo(n,o),l!=null&&s.push(Ro(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var V2=/\r\n?/g,N2=/\u0000|\uFFFD/g;function Rp(e){return(typeof e=="string"?e:""+e).replace(V2,`
`).replace(N2,"")}function xs(e,t,n){if(t=Rp(t),Rp(e)!==t&&n)throw Error(z(425))}function ma(){}var iu=null,ou=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,B2=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(e){return zp.resolve(null).then(e).catch($2)}:au;function $2(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+zi,zo="__reactProps$"+zi,Cn="__reactContainer$"+zi,lu="__reactEvents$"+zi,H2="__reactListeners$"+zi,G2="__reactHandles$"+zi;function vr(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dp(e);e!==null;){if(n=e[Xt])return n;e=Dp(e)}return t}e=n,n=e.parentNode}return null}function es(e){return e=e[Xt]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function rl(e){return e[zo]||null}var cu=[],Jr=-1;function ir(e){return{current:e}}function pe(e){0>Jr||(e.current=cu[Jr],cu[Jr]=null,Jr--)}function le(e,t){Jr++,cu[Jr]=e.current,e.current=t}var er={},Ye=ir(er),nt=ir(!1),jr=er;function yi(e,t){var n=e.type.contextTypes;if(!n)return er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function ga(){pe(nt),pe(Ye)}function _p(e,t,n){if(Ye.current!==er)throw Error(z(168));le(Ye,t),le(nt,n)}function $g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,kw(e)||"Unknown",i));return we({},n,r)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,jr=Ye.current,le(Ye,e),le(nt,nt.current),!0}function Vp(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=$g(e,t,jr),r.__reactInternalMemoizedMergedChildContext=e,pe(nt),pe(Ye),le(Ye,e)):pe(nt),le(nt,n)}var pn=null,il=!1,Ql=!1;function Hg(e){pn===null?pn=[e]:pn.push(e)}function U2(e){il=!0,Hg(e)}function or(){if(!Ql&&pn!==null){Ql=!0;var e=0,t=ae;try{var n=pn;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,il=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),hg(Sd,or),i}finally{ae=t,Ql=!1}}return null}var Xr=[],Qr=0,ya=null,xa=0,Ct=[],Pt=0,kr=null,hn=1,mn="";function fr(e,t){Xr[Qr++]=xa,Xr[Qr++]=ya,ya=e,xa=t}function Gg(e,t,n){Ct[Pt++]=hn,Ct[Pt++]=mn,Ct[Pt++]=kr,kr=e;var r=hn;e=mn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,hn=1<<32-Ht(t)+i|n<<i|r,mn=o+e}else hn=1<<o|n<<i|r,mn=e}function Md(e){e.return!==null&&(fr(e,1),Gg(e,1,0))}function Ld(e){for(;e===ya;)ya=Xr[--Qr],Xr[Qr]=null,xa=Xr[--Qr],Xr[Qr]=null;for(;e===kr;)kr=Ct[--Pt],Ct[Pt]=null,mn=Ct[--Pt],Ct[Pt]=null,hn=Ct[--Pt],Ct[Pt]=null}var pt=null,ft=null,ge=!1,Ft=null;function Ug(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Np(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:hn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(ge){var t=ft;if(t){var n=t;if(!Np(e,t)){if(uu(e))throw Error(z(418));t=Wn(n.nextSibling);var r=pt;t&&Np(e,t)?Ug(r,n):(e.flags=e.flags&-4097|2,ge=!1,pt=e)}}else{if(uu(e))throw Error(z(418));e.flags=e.flags&-4097|2,ge=!1,pt=e}}}function Bp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ws(e){if(e!==pt)return!1;if(!ge)return Bp(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=ft)){if(uu(e))throw Wg(),Error(z(418));for(;t;)Ug(e,t),t=Wn(t.nextSibling)}if(Bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?Wn(e.stateNode.nextSibling):null;return!0}function Wg(){for(var e=ft;e;)e=Wn(e.nextSibling)}function xi(){ft=pt=null,ge=!1}function Od(e){Ft===null?Ft=[e]:Ft.push(e)}var W2=kn.ReactCurrentBatchConfig;function Wi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Ss(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fp(e){var t=e._init;return t(e._payload)}function Yg(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Jn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,w){return h===null||h.tag!==6?(h=oc(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var b=m.type;return b===Ur?u(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Rn&&Fp(b)===h.type)?(w=i(h,m.props),w.ref=Wi(g,h,m),w.return=g,w):(w=qs(m.type,m.key,m.props,null,g.mode,w),w.ref=Wi(g,h,m),w.return=g,w)}function c(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=sc(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function u(g,h,m,w,b){return h===null||h.tag!==7?(h=Tr(m,g.mode,w,b),h.return=g,h):(h=i(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=oc(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case us:return m=qs(h.type,h.key,h.props,null,g.mode,m),m.ref=Wi(g,null,h),m.return=g,m;case Gr:return h=sc(h,g.mode,m),h.return=g,h;case Rn:var w=h._init;return f(g,w(h._payload),m)}if(to(h)||Fi(h))return h=Tr(h,g.mode,m,null),h.return=g,h;Ss(g,h)}return null}function p(g,h,m,w){var b=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:a(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case us:return m.key===b?l(g,h,m,w):null;case Gr:return m.key===b?c(g,h,m,w):null;case Rn:return b=m._init,p(g,h,b(m._payload),w)}if(to(m)||Fi(m))return b!==null?null:u(g,h,m,w,null);Ss(g,m)}return null}function v(g,h,m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(h,g,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case us:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,b);case Gr:return g=g.get(w.key===null?m:w.key)||null,c(h,g,w,b);case Rn:var T=w._init;return v(g,h,m,T(w._payload),b)}if(to(w)||Fi(w))return g=g.get(m)||null,u(h,g,w,b,null);Ss(h,w)}return null}function y(g,h,m,w){for(var b=null,T=null,P=h,j=h=0,A=null;P!==null&&j<m.length;j++){P.index>j?(A=P,P=null):A=P.sibling;var k=p(g,P,m[j],w);if(k===null){P===null&&(P=A);break}e&&P&&k.alternate===null&&t(g,P),h=o(k,h,j),T===null?b=k:T.sibling=k,T=k,P=A}if(j===m.length)return n(g,P),ge&&fr(g,j),b;if(P===null){for(;j<m.length;j++)P=f(g,m[j],w),P!==null&&(h=o(P,h,j),T===null?b=P:T.sibling=P,T=P);return ge&&fr(g,j),b}for(P=r(g,P);j<m.length;j++)A=v(P,g,j,m[j],w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?j:A.key),h=o(A,h,j),T===null?b=A:T.sibling=A,T=A);return e&&P.forEach(function(R){return t(g,R)}),ge&&fr(g,j),b}function x(g,h,m,w){var b=Fi(m);if(typeof b!="function")throw Error(z(150));if(m=b.call(m),m==null)throw Error(z(151));for(var T=b=null,P=h,j=h=0,A=null,k=m.next();P!==null&&!k.done;j++,k=m.next()){P.index>j?(A=P,P=null):A=P.sibling;var R=p(g,P,k.value,w);if(R===null){P===null&&(P=A);break}e&&P&&R.alternate===null&&t(g,P),h=o(R,h,j),T===null?b=R:T.sibling=R,T=R,P=A}if(k.done)return n(g,P),ge&&fr(g,j),b;if(P===null){for(;!k.done;j++,k=m.next())k=f(g,k.value,w),k!==null&&(h=o(k,h,j),T===null?b=k:T.sibling=k,T=k);return ge&&fr(g,j),b}for(P=r(g,P);!k.done;j++,k=m.next())k=v(P,g,j,k.value,w),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?j:k.key),h=o(k,h,j),T===null?b=k:T.sibling=k,T=k);return e&&P.forEach(function(B){return t(g,B)}),ge&&fr(g,j),b}function S(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case us:e:{for(var b=m.key,T=h;T!==null;){if(T.key===b){if(b=m.type,b===Ur){if(T.tag===7){n(g,T.sibling),h=i(T,m.props.children),h.return=g,g=h;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Rn&&Fp(b)===T.type){n(g,T.sibling),h=i(T,m.props),h.ref=Wi(g,T,m),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}m.type===Ur?(h=Tr(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=qs(m.type,m.key,m.props,null,g.mode,w),w.ref=Wi(g,h,m),w.return=g,g=w)}return s(g);case Gr:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=sc(m,g.mode,w),h.return=g,g=h}return s(g);case Rn:return T=m._init,S(g,h,T(m._payload),w)}if(to(m))return y(g,h,m,w);if(Fi(m))return x(g,h,m,w);Ss(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=oc(m,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return S}var wi=Yg(!0),qg=Yg(!1),wa=ir(null),Sa=null,Zr=null,Id=null;function Rd(){Id=Zr=Sa=null}function zd(e){var t=wa.current;pe(wa),e._currentValue=t}function fu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fi(e,t){Sa=e,Id=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Id!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(Sa===null)throw Error(z(308));Zr=e,Sa.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var yr=null;function Dd(e){yr===null?yr=[e]:yr.push(e)}function Kg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function _d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pn(e,n)}return i=r.interleaved,i===null?(t.next=t,Dd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pn(e,n)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}function $p(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,u=c=l=null,a=o;do{var p=a.lane,v=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,f,p):y,p==null)break e;f=we({},f,p);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=f):u=u.next=v,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mr|=s,e.lanes=s,e.memoizedState=f}}function Hp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ts={},tn=ir(ts),Do=ir(ts),_o=ir(ts);function xr(e){if(e===ts)throw Error(z(174));return e}function Vd(e,t){switch(le(_o,t),le(Do,e),le(tn,ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wc(t,e)}pe(tn),le(tn,t)}function Si(){pe(tn),pe(Do),pe(_o)}function Xg(e){xr(_o.current);var t=xr(tn.current),n=Wc(t,e.type);t!==n&&(le(Do,e),le(tn,n))}function Nd(e){Do.current===e&&(pe(tn),pe(Do))}var ve=ir(0);function Ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Bd(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var Hs=kn.ReactCurrentDispatcher,ec=kn.ReactCurrentBatchConfig,Ar=0,xe=null,ke=null,Ie=null,Ca=!1,po=!1,Vo=0,Y2=0;function Fe(){throw Error(z(321))}function Fd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,i,o){if(Ar=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hs.current=e===null||e.memoizedState===null?X2:Q2,e=n(r,i),po){o=0;do{if(po=!1,Vo=0,25<=o)throw Error(z(301));o+=1,Ie=ke=null,t.updateQueue=null,Hs.current=Z2,e=n(r,i)}while(po)}if(Hs.current=Pa,t=ke!==null&&ke.next!==null,Ar=0,Ie=ke=xe=null,Ca=!1,t)throw Error(z(300));return e}function Hd(){var e=Vo!==0;return Vo=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?xe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ot(){if(ke===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ie===null?xe.memoizedState:Ie.next;if(t!==null)Ie=t,ke=e;else{if(e===null)throw Error(z(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ie===null?xe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function No(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=Ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Ar&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,xe.lanes|=u,Mr|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Wt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,Mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nc(e){var t=Ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Wt(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qg(){}function Zg(e,t){var n=xe,r=Ot(),i=t(),o=!Wt(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,Gd(nv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Bo(9,tv.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(z(349));Ar&30||ev(n,t,i)}return i}function ev(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tv(e,t,n,r){t.value=n,t.getSnapshot=r,rv(t)&&iv(e)}function nv(e,t,n){return n(function(){rv(t)&&iv(e)})}function rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function iv(e){var t=Pn(e,1);t!==null&&Gt(t,e,1,-1)}function Gp(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=J2.bind(null,xe,e),[t.memoizedState,e]}function Bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ov(){return Ot().memoizedState}function Gs(e,t,n,r){var i=Kt();xe.flags|=e,i.memoizedState=Bo(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&Fd(r,s.deps)){i.memoizedState=Bo(t,n,o,r);return}}xe.flags|=e,i.memoizedState=Bo(1|t,n,o,r)}function Up(e,t){return Gs(8390656,8,e,t)}function Gd(e,t){return ol(2048,8,e,t)}function sv(e,t){return ol(4,2,e,t)}function av(e,t){return ol(4,4,e,t)}function lv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cv(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,lv.bind(null,t,e),n)}function Ud(){}function uv(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dv(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fv(e,t,n){return Ar&21?(Wt(n,t)||(n=vg(),xe.lanes|=n,Mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function q2(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=ec.transition;ec.transition={};try{e(!1),t()}finally{ae=n,ec.transition=r}}function pv(){return Ot().memoizedState}function K2(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hv(e))mv(t,n);else if(n=Kg(e,t,n,r),n!==null){var i=Ke();Gt(n,e,r,i),gv(n,t,r)}}function J2(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(e))mv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Wt(a,s)){var l=t.interleaved;l===null?(i.next=i,Dd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Kg(e,t,i,r),n!==null&&(i=Ke(),Gt(n,e,r,i),gv(n,t,r))}}function hv(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function mv(e,t){po=Ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}var Pa={readContext:Lt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},X2={readContext:Lt,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Up,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gs(4194308,4,lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gs(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=K2.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:Gp,useDebugValue:Ud,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=Gp(!1),t=e[0];return e=q2.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=Kt();if(ge){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ze===null)throw Error(z(349));Ar&30||ev(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Up(nv.bind(null,r,o,e),[e]),r.flags|=2048,Bo(9,tv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Kt(),t=ze.identifierPrefix;if(ge){var n=mn,r=hn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q2={readContext:Lt,useCallback:uv,useContext:Lt,useEffect:Gd,useImperativeHandle:cv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:dv,useReducer:tc,useRef:ov,useState:function(){return tc(No)},useDebugValue:Ud,useDeferredValue:function(e){var t=Ot();return fv(t,ke.memoizedState,e)},useTransition:function(){var e=tc(No)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Qg,useSyncExternalStore:Zg,useId:pv,unstable_isNewReconciler:!1},Z2={readContext:Lt,useCallback:uv,useContext:Lt,useEffect:Gd,useImperativeHandle:cv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:dv,useReducer:nc,useRef:ov,useState:function(){return nc(No)},useDebugValue:Ud,useDeferredValue:function(e){var t=Ot();return ke===null?t.memoizedState=e:fv(t,ke.memoizedState,e)},useTransition:function(){var e=nc(No)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Qg,useSyncExternalStore:Zg,useId:pv,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?zr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Kn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Gt(t,e,i,r),$s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Kn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yn(e,o,i),t!==null&&(Gt(t,e,i,r),$s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Kn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yn(e,i,r),t!==null&&(Gt(t,e,r,n),$s(t,e,r))}};function Wp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,o):!0}function vv(e,t,n){var r=!1,i=er,o=t.contextType;return typeof o=="object"&&o!==null?o=Lt(o):(i=rt(t)?jr:Ye.current,r=t.contextTypes,o=(r=r!=null)?yi(e,i):er),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function hu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_d(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Lt(o):(o=rt(t)?jr:Ye.current,i.context=yi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&sl.enqueueReplaceState(i,i.state,null),ba(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var n="",r=t;do n+=jw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function yv(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ja||(ja=!0,Pu=r),mu(e,t)},n}function xv(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){mu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mu(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hS.bind(null,e,t,n),t.then(e,e))}function Kp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var tS=kn.ReactCurrentOwner,tt=!1;function qe(e,t,n,r){t.child=e===null?qg(t,null,n,r):wi(t,e.child,n,r)}function Xp(e,t,n,r,i){n=n.render;var o=t.ref;return fi(t,i),r=$d(e,t,n,r,o,i),n=Hd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ge&&n&&Md(t),t.flags|=1,qe(e,t,r,i),t.child)}function Qp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Zd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wv(e,t,o,r,i)):(e=qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(s,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Jn(o,r),e.ref=t.ref,e.return=t,t.child=e}function wv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oo(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,En(e,t,i)}return gu(e,t,n,r,i)}function Sv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(ti,ut),ut|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(ti,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(ti,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(ti,ut),ut|=r;return qe(e,t,i,n),t.child}function bv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var o=rt(n)?jr:Ye.current;return o=yi(t,o),fi(t,i),n=$d(e,t,n,r,o,i),r=Hd(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ge&&r&&Md(t),t.flags|=1,qe(e,t,n,i),t.child)}function Zp(e,t,n,r,i){if(rt(n)){var o=!0;va(t)}else o=!1;if(fi(t,i),t.stateNode===null)Us(e,t),vv(t,n,r),hu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=rt(n)?jr:Ye.current,c=yi(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Yp(t,s,r,c),zn=!1;var p=t.memoizedState;s.state=p,ba(t,r,s,i),l=t.memoizedState,a!==r||p!==l||nt.current||zn?(typeof u=="function"&&(pu(t,n,u,r),l=t.memoizedState),(a=zn||Wp(t,n,a,r,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Jg(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Nt(t.type,a),s.props=c,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=rt(n)?jr:Ye.current,l=yi(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Yp(t,s,r,l),zn=!1,p=t.memoizedState,s.state=p,ba(t,r,s,i);var y=t.memoizedState;a!==f||p!==y||nt.current||zn?(typeof v=="function"&&(pu(t,n,v,r),y=t.memoizedState),(c=zn||Wp(t,n,c,r,p,y,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,o,i)}function vu(e,t,n,r,i,o){bv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Vp(t,n,!1),En(e,t,o);r=t.stateNode,tS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=wi(t,e.child,null,o),t.child=wi(t,null,a,o)):qe(e,t,a,o),t.memoizedState=r.state,i&&Vp(t,n,!0),t.child}function Tv(e){var t=e.stateNode;t.pendingContext?_p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_p(e,t.context,!1),Vd(e,t.containerInfo)}function eh(e,t,n,r,i){return xi(),Od(i),t.flags|=256,qe(e,t,n,r),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cv(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(ve,i&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=cl(s,r,0,null),e=Tr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xu(n),t.memoizedState=yu,e):Wd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Jn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Jn(a,o):(o=Tr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?xu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=yu,r}return o=e.child,e=o.sibling,r=Jn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wd(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bs(e,t,n,r){return r!==null&&Od(r),wi(t,e.child,null,n),e=Wd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=rc(Error(z(422))),bs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=cl({mode:"visible",children:r.children},i,0,null),o=Tr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&wi(t,e.child,null,s),t.child.memoizedState=xu(s),t.memoizedState=yu,o);if(!(t.mode&1))return bs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=rc(o,r,void 0),bs(e,t,s,r)}if(a=(s&e.childLanes)!==0,tt||a){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pn(e,i),Gt(r,e,i,-1))}return Qd(),r=rc(Error(z(421))),bs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=Wn(i.nextSibling),pt=t,ge=!0,Ft=null,e!==null&&(Ct[Pt++]=hn,Ct[Pt++]=mn,Ct[Pt++]=kr,hn=e.id,mn=e.overflow,kr=t),t=Wd(t,r.children),t.flags|=4096,t)}function th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fu(e.return,t,n)}function ic(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qe(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&th(e,n,t);else if(e.tag===19)th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ta(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ta(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,o);break;case"together":ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rS(e,t,n){switch(t.tag){case 3:Tv(t),xi();break;case 5:Xg(t);break;case 1:rt(t.type)&&va(t);break;case 4:Vd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Cv(e,t,n):(le(ve,ve.current&1),e=En(e,t,n),e!==null?e.sibling:null);le(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Sv(e,t,n)}return En(e,t,n)}var Ev,wu,jv,kv;Ev=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};jv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xr(tn.current);var o=null;switch(n){case"input":i=$c(e,i),r=$c(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Uc(e,i),r=Uc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ma)}Yc(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Po.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Po.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&de("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iS(e,t,n){var r=t.pendingProps;switch(Ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return rt(t.type)&&ga(),$e(t),null;case 3:return r=t.stateNode,Si(),pe(nt),pe(Ye),Bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ws(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(ku(Ft),Ft=null))),wu(e,t),$e(t),null;case 5:Nd(t);var i=xr(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)jv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return $e(t),null}if(e=xr(tn.current),ws(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[zo]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)de(ro[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":up(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":fp(r,o),de("invalid",r)}Yc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xs(r.textContent,a,e),i=["children",""+a]):Po.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&de("scroll",r)}switch(n){case"input":ds(r),dp(r,o,!0);break;case"textarea":ds(r),pp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ma)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ng(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xt]=t,e[zo]=r,Ev(e,t,!1,!1),t.stateNode=e;e:{switch(s=qc(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)de(ro[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":up(e,r),i=$c(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",e);break;case"textarea":fp(e,r),i=Uc(e,r),de("invalid",e);break;default:i=r}Yc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?og(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(e,l):typeof l=="number"&&Eo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Po.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&gd(e,o,l,s))}switch(n){case"input":ds(e),dp(e,r,!1);break;case"textarea":ds(e),pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?li(e,!!r.multiple,o,!1):r.defaultValue!=null&&li(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=xr(_o.current),xr(tn.current),ws(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return $e(t),null;case 13:if(pe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&ft!==null&&t.mode&1&&!(t.flags&128))Wg(),xi(),t.flags|=98560,o=!1;else if(o=ws(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[Xt]=t}else xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else Ft!==null&&(ku(Ft),Ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ae===0&&(Ae=3):Qd())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Si(),wu(e,t),e===null&&Io(t.stateNode.containerInfo),$e(t),null;case 10:return zd(t.type._context),$e(t),null;case 17:return rt(t.type)&&ga(),$e(t),null;case 19:if(pe(ve),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Yi(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ta(e),s!==null){for(t.flags|=128,Yi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>Ti&&(t.flags|=128,r=!0,Yi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ta(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ge)return $e(t),null}else 2*Ce()-o.renderingStartTime>Ti&&n!==1073741824&&(t.flags|=128,r=!0,Yi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=ve.current,le(ve,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Xd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function oS(e,t){switch(Ld(t),t.tag){case 1:return rt(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Si(),pe(nt),pe(Ye),Bd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nd(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return Si(),null;case 10:return zd(t.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Ts=!1,Ge=!1,sS=typeof WeakSet=="function"?WeakSet:Set,F=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){be(e,t,r)}}var nh=!1;function aS(e,t){if(iu=fa,e=Ig(),Ad(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++c===i&&(a=s),p===o&&++u===r&&(l=s),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},fa=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Nt(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){be(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return y=nh,nh=!1,y}function ho(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Su(t,n,o)}i=i.next}while(i!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Av(e){var t=e.alternate;t!==null&&(e.alternate=null,Av(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[zo],delete t[lu],delete t[H2],delete t[G2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mv(e){return e.tag===5||e.tag===3||e.tag===4}function rh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ma));else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}var _e=null,Bt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Lv(e,t,n),n=n.sibling}function Lv(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 5:Ge||ei(n,t);case 6:var r=_e,i=Bt;_e=null,Mn(e,t,n),_e=r,Bt=i,_e!==null&&(Bt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Bt?(e=_e,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Mo(e)):Xl(_e,n.stateNode));break;case 4:r=_e,i=Bt,_e=n.stateNode.containerInfo,Bt=!0,Mn(e,t,n),_e=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Su(n,t,s),i=i.next}while(i!==r)}Mn(e,t,n);break;case 1:if(!Ge&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,t,a)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Mn(e,t,n),Ge=r):Mn(e,t,n);break;default:Mn(e,t,n)}}function ih(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sS),t.forEach(function(r){var i=gS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,Bt=!1;break e;case 3:_e=a.stateNode.containerInfo,Bt=!0;break e;case 4:_e=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(_e===null)throw Error(z(160));Lv(o,s,i),_e=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){be(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ov(t,e),t=t.sibling}function Ov(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),qt(e),r&4){try{ho(3,e,e.return),al(3,e)}catch(x){be(e,e.return,x)}try{ho(5,e,e.return)}catch(x){be(e,e.return,x)}}break;case 1:Vt(t,e),qt(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Vt(t,e),qt(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{Eo(i,"")}catch(x){be(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&eg(i,o),qc(a,s);var c=qc(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?og(i,f):u==="dangerouslySetInnerHTML"?rg(i,f):u==="children"?Eo(i,f):gd(i,u,f,c)}switch(a){case"input":Hc(i,o);break;case"textarea":tg(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?li(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?li(i,!!o.multiple,o.defaultValue,!0):li(i,!!o.multiple,o.multiple?[]:"",!1))}i[zo]=o}catch(x){be(e,e.return,x)}}break;case 6:if(Vt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){be(e,e.return,x)}}break;case 3:if(Vt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(x){be(e,e.return,x)}break;case 4:Vt(t,e),qt(e);break;case 13:Vt(t,e),qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=Ce())),r&4&&ih(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(c=Ge)||u,Vt(t,e),Ge=c):Vt(t,e),qt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(F=e,u=e.child;u!==null;){for(f=F=u;F!==null;){switch(p=F,v=p.child,p.tag){case 0:case 11:case 14:case 15:ho(4,p,p.return);break;case 1:ei(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){be(r,n,x)}}break;case 5:ei(p,p.return);break;case 22:if(p.memoizedState!==null){sh(f);continue}}v!==null?(v.return=p,F=v):sh(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ig("display",s))}catch(x){be(e,e.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){be(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vt(t,e),qt(e),r&4&&ih(e);break;case 21:break;default:Vt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mv(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var o=rh(e);Cu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=rh(e);Tu(e,a,s);break;default:throw Error(z(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lS(e,t,n){F=e,Iv(e)}function Iv(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ts;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=Ts;var c=Ge;if(Ts=s,(Ge=l)&&!c)for(F=i;F!==null;)s=F,l=s.child,s.tag===22&&s.memoizedState!==null?ah(i):l!==null?(l.return=s,F=l):ah(i);for(;o!==null;)F=o,Iv(o),o=o.sibling;F=i,Ts=a,Ge=c}oh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):oh(e)}}function oh(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ge||t.flags&512&&bu(t)}catch(p){be(t,t.return,p)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function sh(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function ah(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){be(t,i,l)}}var o=t.return;try{bu(t)}catch(l){be(t,o,l)}break;case 5:var s=t.return;try{bu(t)}catch(l){be(t,s,l)}}}catch(l){be(t,t.return,l)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var cS=Math.ceil,Ea=kn.ReactCurrentDispatcher,Yd=kn.ReactCurrentOwner,Mt=kn.ReactCurrentBatchConfig,re=0,ze=null,Ee=null,Ve=0,ut=0,ti=ir(0),Ae=0,Fo=null,Mr=0,ll=0,qd=0,mo=null,et=null,Kd=0,Ti=1/0,dn=null,ja=!1,Pu=null,qn=null,Cs=!1,Bn=null,ka=0,go=0,Eu=null,Ws=-1,Ys=0;function Ke(){return re&6?Ce():Ws!==-1?Ws:Ws=Ce()}function Kn(e){return e.mode&1?re&2&&Ve!==0?Ve&-Ve:W2.transition!==null?(Ys===0&&(Ys=vg()),Ys):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Cg(e.type)),e):1}function Gt(e,t,n,r){if(50<go)throw go=0,Eu=null,Error(z(185));Qo(e,n,r),(!(re&2)||e!==ze)&&(e===ze&&(!(re&2)&&(ll|=n),Ae===4&&_n(e,Ve)),it(e,r),n===1&&re===0&&!(t.mode&1)&&(Ti=Ce()+500,il&&or()))}function it(e,t){var n=e.callbackNode;Ww(e,t);var r=da(e,e===ze?Ve:0);if(r===0)n!==null&&gp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gp(n),t===1)e.tag===0?U2(lh.bind(null,e)):Hg(lh.bind(null,e)),F2(function(){!(re&6)&&or()}),n=null;else{switch(yg(r)){case 1:n=Sd;break;case 4:n=mg;break;case 16:n=ua;break;case 536870912:n=gg;break;default:n=ua}n=Fv(n,Rv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rv(e,t){if(Ws=-1,Ys=0,re&6)throw Error(z(327));var n=e.callbackNode;if(pi()&&e.callbackNode!==n)return null;var r=da(e,e===ze?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Aa(e,r);else{t=r;var i=re;re|=2;var o=Dv();(ze!==e||Ve!==t)&&(dn=null,Ti=Ce()+500,br(e,t));do try{fS();break}catch(a){zv(e,a)}while(!0);Rd(),Ea.current=o,re=i,Ee!==null?t=0:(ze=null,Ve=0,t=Ae)}if(t!==0){if(t===2&&(i=Zc(e),i!==0&&(r=i,t=ju(e,i))),t===1)throw n=Fo,br(e,0),_n(e,r),it(e,Ce()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!uS(i)&&(t=Aa(e,r),t===2&&(o=Zc(e),o!==0&&(r=o,t=ju(e,o))),t===1))throw n=Fo,br(e,0),_n(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:pr(e,et,dn);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=Kd+500-Ce(),10<t)){if(da(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=au(pr.bind(null,e,et,dn),t);break}pr(e,et,dn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cS(r/1960))-r,10<r){e.timeoutHandle=au(pr.bind(null,e,et,dn),r);break}pr(e,et,dn);break;case 5:pr(e,et,dn);break;default:throw Error(z(329))}}}return it(e,Ce()),e.callbackNode===n?Rv.bind(null,e):null}function ju(e,t){var n=mo;return e.current.memoizedState.isDehydrated&&(br(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=et,et=n,t!==null&&ku(t)),e}function ku(e){et===null?et=e:et.push.apply(et,e)}function uS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~qd,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function lh(e){if(re&6)throw Error(z(327));pi();var t=da(e,0);if(!(t&1))return it(e,Ce()),null;var n=Aa(e,t);if(e.tag!==0&&n===2){var r=Zc(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=Fo,br(e,0),_n(e,t),it(e,Ce()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,et,dn),it(e,Ce()),null}function Jd(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Ti=Ce()+500,il&&or())}}function Lr(e){Bn!==null&&Bn.tag===0&&!(re&6)&&pi();var t=re;re|=1;var n=Mt.transition,r=ae;try{if(Mt.transition=null,ae=1,e)return e()}finally{ae=r,Mt.transition=n,re=t,!(re&6)&&or()}}function Xd(){ut=ti.current,pe(ti)}function br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B2(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:Si(),pe(nt),pe(Ye),Bd();break;case 5:Nd(r);break;case 4:Si();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:zd(r.type._context);break;case 22:case 23:Xd()}n=n.return}if(ze=e,Ee=e=Jn(e.current,null),Ve=ut=t,Ae=0,Fo=null,qd=ll=Mr=0,et=mo=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yr=null}return e}function zv(e,t){do{var n=Ee;try{if(Rd(),Hs.current=Pa,Ca){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ca=!1}if(Ar=0,Ie=ke=xe=null,po=!1,Vo=0,Yd.current=null,n===null||n.return===null){Ae=1,Fo=t,Ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Kp(s);if(v!==null){v.flags&=-257,Jp(v,s,a,o,t),v.mode&1&&qp(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){qp(o,c,t),Qd();break e}l=Error(z(426))}}else if(ge&&a.mode&1){var S=Kp(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Jp(S,s,a,o,t),Od(bi(l,a));break e}}o=l=bi(l,a),Ae!==4&&(Ae=2),mo===null?mo=[o]:mo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=yv(o,l,t);$p(o,g);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qn===null||!qn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=xv(o,a,t);$p(o,w);break e}}o=o.return}while(o!==null)}Vv(n)}catch(b){t=b,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function Dv(){var e=Ea.current;return Ea.current=Pa,e===null?Pa:e}function Qd(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),ze===null||!(Mr&268435455)&&!(ll&268435455)||_n(ze,Ve)}function Aa(e,t){var n=re;re|=2;var r=Dv();(ze!==e||Ve!==t)&&(dn=null,br(e,t));do try{dS();break}catch(i){zv(e,i)}while(!0);if(Rd(),re=n,Ea.current=r,Ee!==null)throw Error(z(261));return ze=null,Ve=0,Ae}function dS(){for(;Ee!==null;)_v(Ee)}function fS(){for(;Ee!==null&&!_w();)_v(Ee)}function _v(e){var t=Bv(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Vv(e):Ee=t,Yd.current=null}function Vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=oS(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}else if(n=iS(n,t,ut),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function pr(e,t,n){var r=ae,i=Mt.transition;try{Mt.transition=null,ae=1,pS(e,t,n,r)}finally{Mt.transition=i,ae=r}return null}function pS(e,t,n,r){do pi();while(Bn!==null);if(re&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yw(e,o),e===ze&&(Ee=ze=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,Fv(ua,function(){return pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var s=ae;ae=1;var a=re;re|=4,Yd.current=null,aS(e,n),Ov(n,e),I2(ou),fa=!!iu,ou=iu=null,e.current=n,lS(n),Vw(),re=a,ae=s,Mt.transition=o}else e.current=n;if(Cs&&(Cs=!1,Bn=e,ka=i),o=e.pendingLanes,o===0&&(qn=null),Fw(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ja)throw ja=!1,e=Pu,Pu=null,e;return ka&1&&e.tag!==0&&pi(),o=e.pendingLanes,o&1?e===Eu?go++:(go=0,Eu=e):go=0,or(),null}function pi(){if(Bn!==null){var e=yg(ka),t=Mt.transition,n=ae;try{if(Mt.transition=null,ae=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,ka=0,re&6)throw Error(z(331));var i=re;for(re|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(F=c;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:ho(8,u,o)}var f=u.child;if(f!==null)f.return=u,F=f;else for(;F!==null;){u=F;var p=u.sibling,v=u.return;if(Av(u),u===c){F=null;break}if(p!==null){p.return=v,F=p;break}F=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ho(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,F=g;break e}F=o.return}}var h=e.current;for(F=h;F!==null;){s=F;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,F=m;else e:for(s=h;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(b){be(a,a.return,b)}if(a===s){F=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,F=w;break e}F=a.return}}if(re=i,or(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Za,e)}catch{}r=!0}return r}finally{ae=n,Mt.transition=t}}return!1}function ch(e,t,n){t=bi(n,t),t=yv(e,t,1),e=Yn(e,t,1),t=Ke(),e!==null&&(Qo(e,1,t),it(e,t))}function be(e,t,n){if(e.tag===3)ch(e,e,n);else for(;t!==null;){if(t.tag===3){ch(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=bi(n,e),e=xv(t,e,1),t=Yn(t,e,1),e=Ke(),t!==null&&(Qo(t,1,e),it(t,e));break}}t=t.return}}function hS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ve&n)===n&&(Ae===4||Ae===3&&(Ve&130023424)===Ve&&500>Ce()-Kd?br(e,0):qd|=n),it(e,t)}function Nv(e,t){t===0&&(e.mode&1?(t=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):t=1);var n=Ke();e=Pn(e,t),e!==null&&(Qo(e,t,n),it(e,n))}function mS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nv(e,n)}function gS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Nv(e,n)}var Bv;Bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,rS(e,t,n);tt=!!(e.flags&131072)}else tt=!1,ge&&t.flags&1048576&&Gg(t,xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var i=yi(t,Ye.current);fi(t,n),i=$d(null,t,r,e,i,n);var o=Hd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,va(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_d(t),i.updater=sl,t.stateNode=i,i._reactInternals=t,hu(t,r,e,n),t=vu(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&Md(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yS(r),e=Nt(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=Zp(null,t,r,e,n);break e;case 11:t=Xp(null,t,r,e,n);break e;case 14:t=Qp(null,t,r,Nt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Zp(e,t,r,i,n);case 3:e:{if(Tv(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Jg(e,t),ba(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=bi(Error(z(423)),t),t=eh(e,t,r,n,i);break e}else if(r!==i){i=bi(Error(z(424)),t),t=eh(e,t,r,n,i);break e}else for(ft=Wn(t.stateNode.containerInfo.firstChild),pt=t,ge=!0,Ft=null,n=qg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){t=En(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Xg(t),e===null&&du(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,su(r,i)?s=null:o!==null&&su(r,o)&&(t.flags|=32),bv(e,t),qe(e,t,s,n),t.child;case 6:return e===null&&du(t),null;case 13:return Cv(e,t,n);case 4:return Vd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wi(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Xp(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,le(wa,r._currentValue),r._currentValue=s,o!==null)if(Wt(o.value,s)){if(o.children===i.children&&!nt.current){t=En(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fi(t,n),i=Lt(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),Qp(e,t,r,i,n);case 15:return wv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Us(e,t),t.tag=1,rt(r)?(e=!0,va(t)):e=!1,fi(t,n),vv(t,r,i),hu(t,r,i,n),vu(null,t,r,!0,e,n);case 19:return Pv(e,t,n);case 22:return Sv(e,t,n)}throw Error(z(156,t.tag))};function Fv(e,t){return hg(e,t)}function vS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new vS(e,t,n,r)}function Zd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yS(e){if(typeof e=="function")return Zd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yd)return 11;if(e===xd)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Zd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ur:return Tr(n.children,i,o,t);case vd:s=8,i|=8;break;case Vc:return e=Et(12,n,t,i|2),e.elementType=Vc,e.lanes=o,e;case Nc:return e=Et(13,n,t,i),e.elementType=Nc,e.lanes=o,e;case Bc:return e=Et(19,n,t,i),e.elementType=Bc,e.lanes=o,e;case X0:return cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K0:s=10;break e;case J0:s=9;break e;case yd:s=11;break e;case xd:s=14;break e;case Rn:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tr(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=Et(22,e,r,t),e.elementType=X0,e.lanes=n,e.stateNode={isHidden:!1},e}function oc(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function sc(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(e,t,n,r,i,o,s,a,l){return e=new xS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(o),e}function wS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $v(e){if(!e)return er;e=e._reactInternals;e:{if(zr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(rt(n))return $g(e,n,t)}return t}function Hv(e,t,n,r,i,o,s,a,l){return e=ef(n,r,!0,e,i,o,s,a,l),e.context=$v(null),n=e.current,r=Ke(),i=Kn(n),o=vn(r,i),o.callback=t??null,Yn(n,o,i),e.current.lanes=i,Qo(e,i,r),it(e,r),e}function ul(e,t,n,r){var i=t.current,o=Ke(),s=Kn(i);return n=$v(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(i,t,s),e!==null&&(Gt(e,i,s,o),$s(e,i,s)),s}function Ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tf(e,t){uh(e,t),(e=e.alternate)&&uh(e,t)}function SS(){return null}var Gv=typeof reportError=="function"?reportError:function(e){console.error(e)};function nf(e){this._internalRoot=e}dl.prototype.render=nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ul(e,t,null,null)};dl.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){ul(null,e,null,null)}),t[Cn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&Tg(e)}};function rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dh(){}function bS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ma(s);o.call(c)}}var s=Hv(t,r,e,0,null,!1,!1,"",dh);return e._reactRootContainer=s,e[Cn]=s.current,Io(e.nodeType===8?e.parentNode:e),Lr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ma(l);a.call(c)}}var l=ef(e,0,!1,null,null,!1,!1,"",dh);return e._reactRootContainer=l,e[Cn]=l.current,Io(e.nodeType===8?e.parentNode:e),Lr(function(){ul(t,l,n,r)}),l}function pl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ma(s);a.call(l)}}ul(t,s,e,i)}else s=bS(n,t,e,i,r);return Ma(s)}xg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=no(t.pendingLanes);n!==0&&(bd(t,n|1),it(t,Ce()),!(re&6)&&(Ti=Ce()+500,or()))}break;case 13:Lr(function(){var r=Pn(e,1);if(r!==null){var i=Ke();Gt(r,e,1,i)}}),tf(e,1)}};Td=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Ke();Gt(t,e,134217728,n)}tf(e,134217728)}};wg=function(e){if(e.tag===13){var t=Kn(e),n=Pn(e,t);if(n!==null){var r=Ke();Gt(n,e,t,r)}tf(e,t)}};Sg=function(){return ae};bg=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Jc=function(e,t,n){switch(t){case"input":if(Hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rl(r);if(!i)throw Error(z(90));Z0(r),Hc(r,i)}}}break;case"textarea":tg(e,n);break;case"select":t=n.value,t!=null&&li(e,!!n.multiple,t,!1)}};lg=Jd;cg=Lr;var TS={usingClientEntryPoint:!1,Events:[es,Kr,rl,sg,ag,Jd]},qi={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CS={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fg(e),e===null?null:e.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||SS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Za=Ps.inject(CS),en=Ps}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(t))throw Error(z(200));return wS(e,t,null,n)};gt.createRoot=function(e,t){if(!rf(e))throw Error(z(299));var n=!1,r="",i=Gv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ef(e,1,!1,null,null,n,!1,r,i),e[Cn]=t.current,Io(e.nodeType===8?e.parentNode:e),new nf(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=fg(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Lr(e)};gt.hydrate=function(e,t,n){if(!fl(t))throw Error(z(200));return pl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!rf(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hv(t,null,e,1,n??null,i,!1,o,s),e[Cn]=t.current,Io(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new dl(t)};gt.render=function(e,t,n){if(!fl(t))throw Error(z(200));return pl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!fl(e))throw Error(z(40));return e._reactRootContainer?(Lr(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1};gt.unstable_batchedUpdates=Jd;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return pl(e,t,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(e){console.error(e)}}Uv(),U0.exports=gt;var PS=U0.exports,Wv,fh=PS;Wv=fh.createRoot,fh.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const ph="popstate";function ES(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=Dr(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Au("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof o=="string"?o:La(o))}function r(i,o){of(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return kS(t,n,r,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function of(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jS(){return Math.random().toString(36).substr(2,8)}function hh(e,t){return{usr:e.state,key:e.key,idx:t}}function Au(e,t,n,r){return n===void 0&&(n=null),$o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dr(t):t,{state:n,key:t&&t.key||r||jS()})}function La(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Fn.Pop,l=null,c=u();c==null&&(c=0,s.replaceState($o({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){a=Fn.Pop;let S=u(),g=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:g})}function p(S,g){a=Fn.Push;let h=Au(x.location,S,g);n&&n(h,S),c=u()+1;let m=hh(h,c),w=x.createHref(h);try{s.pushState(m,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function v(S,g){a=Fn.Replace;let h=Au(x.location,S,g);n&&n(h,S),c=u();let m=hh(h,c),w=x.createHref(h);s.replaceState(m,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:La(S);return h=h.replace(/ $/,"%20"),je(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ph,f),l=S,()=>{i.removeEventListener(ph,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:v,go(S){return s.go(S)}};return x}var mh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mh||(mh={}));function AS(e,t,n){return n===void 0&&(n="/"),MS(e,t,n,!1)}function MS(e,t,n,r){let i=typeof t=="string"?Dr(t):t,o=sf(i.pathname||"/",n);if(o==null)return null;let s=Yv(e);LS(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=$S(o);a=BS(s[l],c,r)}return a}function Yv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Xn([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yv(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:VS(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of qv(o.path))i(o,s,l)}),t}function qv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=qv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function LS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:NS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OS=/^:[\w-]+$/,IS=3,RS=2,zS=1,DS=10,_S=-2,gh=e=>e==="*";function VS(e,t){let n=e.split("/"),r=n.length;return n.some(gh)&&(r+=_S),t&&(r+=RS),n.filter(i=>!gh(i)).reduce((i,o)=>i+(OS.test(o)?IS:o===""?zS:DS),r)}function NS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function BS(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=vh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=vh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Xn([o,f.pathname]),pathnameBase:WS(Xn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Xn([o,f.pathnameBase]))}return s}function vh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=FS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:p,isOptional:v}=u;if(p==="*"){let x=a[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function FS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),of(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $S(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return of(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function HS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dr(e):e;return{pathname:n?n.startsWith("/")?n:GS(n,t):t,search:YS(r),hash:qS(i)}}function GS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ac(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function US(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kv(e,t){let n=US(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dr(e):(i=$o({},e),je(!i.pathname||!i.pathname.includes("?"),ac("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),ac("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),ac("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=HS(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),WS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function KS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xv=["post","put","patch","delete"];new Set(Xv);const JS=["get",...Xv];new Set(JS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const af=C.createContext(null),XS=C.createContext(null),_r=C.createContext(null),hl=C.createContext(null),Vr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Qv=C.createContext(null);function QS(e,t){let{relative:n}=t===void 0?{}:t;ns()||je(!1);let{basename:r,navigator:i}=C.useContext(_r),{hash:o,pathname:s,search:a}=e1(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Xn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ns(){return C.useContext(hl)!=null}function Nr(){return ns()||je(!1),C.useContext(hl).location}function Zv(e){C.useContext(_r).static||C.useLayoutEffect(e)}function ZS(){let{isDataRoute:e}=C.useContext(Vr);return e?fb():eb()}function eb(){ns()||je(!1);let e=C.useContext(af),{basename:t,future:n,navigator:r}=C.useContext(_r),{matches:i}=C.useContext(Vr),{pathname:o}=Nr(),s=JSON.stringify(Kv(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Zv(()=>{a.current=!0}),C.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Jv(c,JSON.parse(s),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,s,o,e])}function e1(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(_r),{matches:i}=C.useContext(Vr),{pathname:o}=Nr(),s=JSON.stringify(Kv(i,r.v7_relativeSplatPath));return C.useMemo(()=>Jv(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function tb(e,t){return nb(e,t)}function nb(e,t,n,r){ns()||je(!1);let{navigator:i}=C.useContext(_r),{matches:o}=C.useContext(Vr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Nr(),u;if(t){var f;let S=typeof t=="string"?Dr(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||je(!1),u=S}else u=c;let p=u.pathname||"/",v=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=AS(e,{pathname:v}),x=ab(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?C.createElement(hl.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fn.Pop}},x):x}function rb(){let e=db(),t=KS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const ib=C.createElement(rb,null);class ob extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Vr.Provider,{value:this.props.routeContext},C.createElement(Qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sb(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(af);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Vr.Provider,{value:t},r)}function ab(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||je(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let f=s[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:p,errors:v}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,f,p)=>{let v,y=!1,x=null,S=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||ib,l&&(c<0&&p===0?(y=!0,S=null):c===p&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),h=()=>{let m;return v?m=x:y?m=S:f.route.Component?m=C.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=u,C.createElement(sb,{match:f,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?C.createElement(ob,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var t1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(t1||{}),Oa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Oa||{});function lb(e){let t=C.useContext(af);return t||je(!1),t}function cb(e){let t=C.useContext(XS);return t||je(!1),t}function ub(e){let t=C.useContext(Vr);return t||je(!1),t}function n1(e){let t=ub(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function db(){var e;let t=C.useContext(Qv),n=cb(Oa.UseRouteError),r=n1(Oa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fb(){let{router:e}=lb(t1.UseNavigateStable),t=n1(Oa.UseNavigateStable),n=C.useRef(!1);return Zv(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:t},o)))},[e,t])}function hr(e){je(!1)}function pb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:o,static:s=!1,future:a}=e;ns()&&je(!1);let l=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:l,navigator:o,static:s,future:Ho({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:f="",hash:p="",state:v=null,key:y="default"}=r,x=C.useMemo(()=>{let S=sf(u,l);return S==null?null:{location:{pathname:S,search:f,hash:p,state:v,key:y},navigationType:i}},[l,u,f,p,v,y,i]);return x==null?null:C.createElement(_r.Provider,{value:c},C.createElement(hl.Provider,{children:n,value:x}))}function hb(e){let{children:t,location:n}=e;return tb(Mu(t),n)}new Promise(()=>{});function Mu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Mu(r.props.children,o));return}r.type!==hr&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Mu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lu(){return Lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lu.apply(this,arguments)}function mb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vb(e,t){return e.button===0&&(!t||t==="_self")&&!gb(e)}const yb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xb="6";try{window.__reactRouterVersion=xb}catch{}const wb="startTransition",yh=hw[wb];function Sb(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=ES({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=C.useCallback(f=>{c&&yh?yh(()=>l(f)):l(f)},[l,c]);return C.useLayoutEffect(()=>s.listen(u),[s,u]),C.createElement(pb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const bb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r1=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,p=mb(t,yb),{basename:v}=C.useContext(_r),y,x=!1;if(typeof c=="string"&&Tb.test(c)&&(y=c,bb))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),b=sf(w.pathname,v);w.origin===m.origin&&b!=null?c=b+w.search+w.hash:x=!0}catch{}let S=QS(c,{relative:i}),g=Cb(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||g(m)}return C.createElement("a",Lu({},p,{href:y||S,onClick:x||o?r:h,ref:n,target:l}))});var xh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xh||(xh={}));var wh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wh||(wh={}));function Cb(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=ZS(),c=Nr(),u=e1(e,{relative:s});return C.useCallback(f=>{if(vb(f,n)){f.preventDefault();let p=r!==void 0?r:La(c)===La(u);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,u,r,i,n,e,o,s,a])}function Pb(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Go(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ou=e=>Array.isArray(e);function i1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Uo(e){return typeof e=="string"||Array.isArray(e)}function Sh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function lf(e,t,n,r){if(typeof t=="function"){const[i,o]=Sh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Sh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function ml(e,t,n){const r=e.getProps();return lf(r,t,n!==void 0?n:r.custom,e)}const cf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uf=["initial",...cf],rs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sr=new Set(rs),yn=e=>e*1e3,xn=e=>e/1e3,Eb={type:"spring",stiffness:500,damping:25,restSpeed:10},jb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),kb={type:"keyframes",duration:.8},Ab={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Mb=(e,{keyframes:t})=>t.length>2?kb:sr.has(e)?e.startsWith("scale")?jb(t[1]):Eb:Ab;function df(e,t){return e?e[t]||e.default||e:void 0}const Lb={skipAnimations:!1,useManualTiming:!1},Ob=e=>e!==null;function gl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Ob),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Ne=e=>e;function Ib(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),e()),c(s)}const l={schedule:(c,u=!1,f=!1)=>{const v=f&&r?t:n;return u&&o.add(c),v.has(c)||v.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(s=c,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const Es=["read","resolveKeyframes","update","preRender","render","postRender"],Rb=40;function o1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Es.reduce((g,h)=>(g[h]=Ib(o),g),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:p}=s,v=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,Rb),1),i.timestamp=g,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},y=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Es.reduce((g,h)=>{const m=s[h];return g[h]=(w,b=!1,T=!1)=>(n||y(),m.schedule(w,b,T)),g},{}),cancel:g=>{for(let h=0;h<Es.length;h++)s[Es[h]].cancel(g)},state:i,steps:s}}const{schedule:ne,cancel:Yt,state:Me,steps:lc}=o1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ne,!0),s1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,zb=1e-7,Db=12;function _b(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=s1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>zb&&++a<Db);return s}function is(e,t,n,r){if(e===t&&n===r)return Ne;const i=o=>_b(o,0,1,e,n);return o=>o===0||o===1?o:s1(i(o),t,r)}const a1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,l1=e=>t=>1-e(1-t),c1=is(.33,1.53,.69,.99),ff=l1(c1),u1=a1(ff),d1=e=>(e*=2)<1?.5*ff(e):.5*(2-Math.pow(2,-10*(e-1))),pf=e=>1-Math.sin(Math.acos(e)),f1=l1(pf),p1=a1(pf),h1=e=>/^0[^.\s]+$/u.test(e);function Vb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||h1(e):!0}let Nb=Ne,Iu=Ne;const m1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),g1=e=>t=>typeof t=="string"&&t.startsWith(e),v1=g1("--"),Bb=g1("var(--"),hf=e=>Bb(e)?Fb.test(e.split("/*")[0].trim()):!1,Fb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$b=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hb(e){const t=$b.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function y1(e,t,n=1){const[r,i]=Hb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return m1(s)?parseFloat(s):s}return hf(i)?y1(i,t,n+1):i}const tr=(e,t,n)=>n>t?t:n<e?e:n,Di={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Wo={...Di,transform:e=>tr(0,1,e)},js={...Di,default:1},os=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ln=os("deg"),nn=os("%"),U=os("px"),Gb=os("vh"),Ub=os("vw"),bh={...nn,parse:e=>nn.parse(e)/100,transform:e=>nn.transform(e*100)},Wb=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Th=e=>e===Di||e===U,Ch=(e,t)=>parseFloat(e.split(", ")[t]),Ph=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Ch(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Ch(o[1],e):0}},Yb=new Set(["x","y","z"]),qb=rs.filter(e=>!Yb.has(e));function Kb(e){const t=[];return qb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ci={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Ph(4,13),y:Ph(5,14)};Ci.translateX=Ci.x;Ci.translateY=Ci.y;const x1=e=>t=>t.test(e),Jb={test:e=>e==="auto",parse:e=>e},w1=[Di,U,nn,Ln,Ub,Gb,Jb],Eh=e=>w1.find(x1(e)),Cr=new Set;let Ru=!1,zu=!1;function S1(){if(zu){const e=Array.from(Cr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Kb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}zu=!1,Ru=!1,Cr.forEach(e=>e.complete()),Cr.clear()}function b1(){Cr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(zu=!0)})}function Xb(){b1(),S1()}class mf{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Cr.add(this),Ru||(Ru=!0,ne.read(b1),ne.resolveKeyframes(S1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Cr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Cr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vo=e=>Math.round(e*1e5)/1e5,gf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Qb(e){return e==null}const Zb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vf=(e,t)=>n=>!!(typeof n=="string"&&Zb.test(n)&&n.startsWith(e)||t&&!Qb(n)&&Object.prototype.hasOwnProperty.call(n,t)),T1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(gf);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},e5=e=>tr(0,255,e),cc={...Di,transform:e=>Math.round(e5(e))},wr={test:vf("rgb","red"),parse:T1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cc.transform(e)+", "+cc.transform(t)+", "+cc.transform(n)+", "+vo(Wo.transform(r))+")"};function t5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Du={test:vf("#"),parse:t5,transform:wr.transform},ni={test:vf("hsl","hue"),parse:T1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+nn.transform(vo(t))+", "+nn.transform(vo(n))+", "+vo(Wo.transform(r))+")"},He={test:e=>wr.test(e)||Du.test(e)||ni.test(e),parse:e=>wr.test(e)?wr.parse(e):ni.test(e)?ni.parse(e):Du.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wr.transform(e):ni.transform(e)},n5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(gf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(n5))===null||n===void 0?void 0:n.length)||0)>0}const C1="number",P1="color",i5="var",o5="var(",jh="${}",s5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(s5,l=>(He.test(l)?(r.color.push(o),i.push(P1),n.push(He.parse(l))):l.startsWith(o5)?(r.var.push(o),i.push(i5),n.push(l)):(r.number.push(o),i.push(C1),n.push(parseFloat(l))),++o,jh)).split(jh);return{values:n,split:a,indexes:r,types:i}}function E1(e){return Yo(e).values}function j1(e){const{split:t,types:n}=Yo(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===C1?o+=vo(i[s]):a===P1?o+=He.transform(i[s]):o+=i[s]}return o}}const a5=e=>typeof e=="number"?0:e;function l5(e){const t=E1(e);return j1(e)(t.map(a5))}const nr={test:r5,parse:E1,createTransformer:j1,getAnimatableNone:l5},c5=new Set(["brightness","contrast","saturate","opacity"]);function u5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(gf)||[];if(!r)return e;const i=n.replace(r,"");let o=c5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const d5=/\b([a-z-]*)\(.*?\)/gu,_u={...nr,getAnimatableNone:e=>{const t=e.match(d5);return t?t.map(u5).join(" "):e}},f5={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,backgroundPositionX:U,backgroundPositionY:U},p5={rotate:Ln,rotateX:Ln,rotateY:Ln,rotateZ:Ln,scale:js,scaleX:js,scaleY:js,scaleZ:js,skew:Ln,skewX:Ln,skewY:Ln,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Wo,originX:bh,originY:bh,originZ:U},kh={...Di,transform:Math.round},yf={...f5,...p5,zIndex:kh,size:U,fillOpacity:Wo,strokeOpacity:Wo,numOctaves:kh},h5={...yf,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:_u,WebkitFilter:_u},xf=e=>h5[e];function k1(e,t){let n=xf(e);return n!==_u&&(n=nr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const m5=new Set(["auto","none","0"]);function g5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!m5.has(o)&&Yo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=k1(n,i)}class A1 extends mf{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),hf(c))){const u=y1(c,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Wb.has(r)||t.length!==2)return;const[i,o]=t,s=Eh(i),a=Eh(o);if(s!==a)if(Th(s)&&Th(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Vb(t[i])&&r.push(i);r.length&&g5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ci[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Ci[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function wf(e){return typeof e=="function"}let Ks;function v5(){Ks=void 0}const rn={now:()=>(Ks===void 0&&rn.set(Me.isProcessing||Lb.useManualTiming?Me.timestamp:performance.now()),Ks),set:e=>{Ks=e,queueMicrotask(v5)}},Ah=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(nr.test(e)||e==="0")&&!e.startsWith("url("));function y5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function x5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Ah(i,t),a=Ah(o,t);return!s||!a?!1:y5(e)||(n==="spring"||wf(n))&&r}const w5=40;class M1{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=rn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>w5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Xb(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=rn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!x5(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(gl(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Sf(e,t){return t?e*(1e3/t):0}const S5=5;function L1(e,t,n){const r=Math.max(t-S5,0);return Sf(n-e(r),t-r)}const uc=.001,b5=.01,T5=10,C5=.05,P5=1;function E5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=tr(C5,P5,s),e=tr(b5,T5,xn(e)),s<1?(i=c=>{const u=c*s,f=u*e,p=u-n,v=Vu(c,s),y=Math.exp(-f);return uc-p/v*y},o=c=>{const f=c*s*e,p=f*n+n,v=Math.pow(s,2)*Math.pow(c,2)*e,y=Math.exp(-f),x=Vu(Math.pow(c,2),s);return(-i(c)+uc>0?-1:1)*((p-v)*y)/x}):(i=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-uc+u*f},o=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const a=5/e,l=k5(i,o,a);if(e=yn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const j5=12;function k5(e,t,n){let r=n;for(let i=1;i<j5;i++)r=r-e(r)/t(r);return r}function Vu(e,t){return e*Math.sqrt(1-t*t)}const A5=["duration","bounce"],M5=["stiffness","damping","mass"];function Mh(e,t){return t.some(n=>e[n]!==void 0)}function L5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Mh(e,M5)&&Mh(e,A5)){const n=E5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function O1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:p}=L5({...r,velocity:-xn(r.velocity||0)}),v=f||0,y=l/(2*Math.sqrt(a*c)),x=o-i,S=xn(Math.sqrt(a/c)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(y<1){const m=Vu(S,y);h=w=>{const b=Math.exp(-y*S*w);return o-b*((v+y*S*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(y===1)h=m=>o-Math.exp(-S*m)*(x+(v+S*x)*m);else{const m=S*Math.sqrt(y*y-1);h=w=>{const b=Math.exp(-y*S*w),T=Math.min(m*w,300);return o-b*((v+y*S*x)*Math.sinh(T)+m*x*Math.cosh(T))/m}}return{calculatedDuration:p&&u||null,next:m=>{const w=h(m);if(p)s.done=m>=u;else{let b=0;y<1&&(b=m===0?yn(v):L1(h,m,w));const T=Math.abs(b)<=n,P=Math.abs(o-w)<=t;s.done=T&&P}return s.value=s.done?o:w,s}}}function Lh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},v=j=>a!==void 0&&j<a||l!==void 0&&j>l,y=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=n*t;const S=f+x,g=s===void 0?S:s(S);g!==S&&(x=g-f);const h=j=>-x*Math.exp(-j/r),m=j=>g+h(j),w=j=>{const A=h(j),k=m(j);p.done=Math.abs(A)<=c,p.value=p.done?g:k};let b,T;const P=j=>{v(p.value)&&(b=j,T=O1({keyframes:[p.value,y(p.value)],velocity:L1(m,j,p.value),damping:i,stiffness:o,restDelta:c,restSpeed:u}))};return P(0),{calculatedDuration:null,next:j=>{let A=!1;return!T&&b===void 0&&(A=!0,w(j),P(j)),b!==void 0&&j>=b?T.next(j-b):(!A&&w(j),p)}}}const O5=is(.42,0,1,1),I5=is(0,0,.58,1),I1=is(.42,0,.58,1),R5=e=>Array.isArray(e)&&typeof e[0]!="number",bf=e=>Array.isArray(e)&&typeof e[0]=="number",Oh={linear:Ne,easeIn:O5,easeInOut:I1,easeOut:I5,circIn:pf,circInOut:p1,circOut:f1,backIn:ff,backInOut:u1,backOut:c1,anticipate:d1},Ih=e=>{if(bf(e)){Iu(e.length===4);const[t,n,r,i]=e;return is(t,n,r,i)}else if(typeof e=="string")return Iu(Oh[e]!==void 0),Oh[e];return e},z5=(e,t)=>n=>t(e(n)),wn=(...e)=>e.reduce(z5),Or=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ye=(e,t,n)=>e+(t-e)*n;function dc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function D5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=dc(l,a,e+1/3),o=dc(l,a,e),s=dc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Ia(e,t){return n=>n>0?t:e}const fc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},_5=[Du,wr,ni],V5=e=>_5.find(t=>t.test(e));function Rh(e){const t=V5(e);if(!t)return!1;let n=t.parse(e);return t===ni&&(n=D5(n)),n}const zh=(e,t)=>{const n=Rh(e),r=Rh(t);if(!n||!r)return Ia(e,t);const i={...n};return o=>(i.red=fc(n.red,r.red,o),i.green=fc(n.green,r.green,o),i.blue=fc(n.blue,r.blue,o),i.alpha=ye(n.alpha,r.alpha,o),wr.transform(i))},Nu=new Set(["none","hidden"]);function N5(e,t){return Nu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function B5(e,t){return n=>ye(e,t,n)}function Tf(e){return typeof e=="number"?B5:typeof e=="string"?hf(e)?Ia:He.test(e)?zh:H5:Array.isArray(e)?R1:typeof e=="object"?He.test(e)?zh:F5:Ia}function R1(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Tf(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function F5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Tf(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function $5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const H5=(e,t)=>{const n=nr.createTransformer(t),r=Yo(e),i=Yo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nu.has(e)&&!i.values.length||Nu.has(t)&&!r.values.length?N5(e,t):wn(R1($5(r,i),i.values),n):Ia(e,t)};function z1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ye(e,t,n):Tf(e)(e,t)}function G5(e,t,n){const r=[],i=n||z1,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Ne:t;a=wn(l,a)}r.push(a)}return r}function Cf(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Iu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=G5(t,r,i),a=s.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const f=Or(e[u],e[u+1],c);return s[u](f)};return n?c=>l(tr(e[0],e[o-1],c)):l}function U5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Or(0,t,r);e.push(ye(n,1,i))}}function D1(e){const t=[0];return U5(t,e.length-1),t}function W5(e,t){return e.map(n=>n*t)}function Y5(e,t){return e.map(()=>t||I1).splice(0,e.length-1)}function Ra({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=R5(r)?r.map(Ih):Ih(r),o={done:!1,value:t[0]},s=W5(n&&n.length===t.length?n:D1(t),e),a=Cf(s,t,{ease:Array.isArray(i)?i:Y5(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Dh=2e4;function q5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Dh;)t+=n,r=e.next(t);return t>=Dh?1/0:t}const K5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ne.update(t,!0),stop:()=>Yt(t),now:()=>Me.isProcessing?Me.timestamp:rn.now()}},J5={decay:Lh,inertia:Lh,tween:Ra,keyframes:Ra,spring:O1},X5=e=>e/100;class Pf extends M1{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||mf,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=wf(n)?n:J5[n]||Ra;let l,c;a!==Ra&&typeof t[0]!="number"&&(l=wn(X5,z1(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});o==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=q5(u));const{calculatedDuration:f}=u,p=f+i,v=p*(r+1)-i;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:p,repeat:v,repeatType:y,repeatDelay:x,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let m=this.currentTime,w=o;if(v){const j=Math.min(this.currentTime,u)/f;let A=Math.floor(j),k=j%1;!k&&j>=1&&(k=1),k===1&&A--,A=Math.min(A,v+1),!!(A%2)&&(y==="reverse"?(k=1-k,x&&(k-=x/f)):y==="mirror"&&(w=s)),m=tr(0,1,k)*f}const b=h?{done:!1,value:l[0]}:w.next(m);a&&(b.value=a(b.value));let{done:T}=b;!h&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return P&&i!==void 0&&(b.value=gl(l,this.options,i)),S&&S(b.value),P&&this.finish(),b}get duration(){const{resolved:t}=this;return t?xn(t.calculatedDuration):0}get time(){return xn(this.currentTime)}set time(t){t=yn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=xn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=K5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const _1=new Set(["opacity","clipPath","filter","transform"]),Q5=10,Z5=(e,t)=>{let n="";const r=Math.max(Math.round(t/Q5),2);for(let i=0;i<r;i++)n+=e(Or(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ef(e){let t;return()=>(t===void 0&&(t=e()),t)}const eT={linearEasing:void 0};function tT(e,t){const n=Ef(e);return()=>{var r;return(r=eT[t])!==null&&r!==void 0?r:n()}}const za=tT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function V1(e){return!!(typeof e=="function"&&za()||!e||typeof e=="string"&&(e in Bu||za())||bf(e)||Array.isArray(e)&&e.every(V1))}const io=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Bu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:io([0,.65,.55,1]),circOut:io([.55,0,1,.45]),backIn:io([.31,.01,.66,-.59]),backOut:io([.33,1.53,.69,.99])};function N1(e,t){if(e)return typeof e=="function"&&za()?Z5(e,t):bf(e)?io(e):Array.isArray(e)?e.map(n=>N1(n,t)||Bu.easeOut):Bu[e]}function nT(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=N1(a,i);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function _h(e,t){e.timeline=t,e.onfinish=null}const rT=Ef(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Da=10,iT=2e4;function oT(e){return wf(e.type)||e.type==="spring"||!V1(e.ease)}function sT(e,t){const n=new Pf({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<iT;)r=n.sample(o),i.push(r.value),o+=Da;return{times:void 0,keyframes:i,duration:o-Da,ease:"linear"}}const B1={anticipate:d1,backInOut:u1,circInOut:p1};function aT(e){return e in B1}class Vh extends M1{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new A1(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&za()&&aT(s)&&(s=B1[s]),oT(this.options)){const{onComplete:p,onUpdate:v,motionValue:y,element:x,...S}=this.options,g=sT(t,S);t=g.keyframes,t.length===1&&(t[1]=t[0]),i=g.duration,o=g.times,s=g.ease,a="keyframes"}const f=nT(l.owner.current,c,t,{...this.options,duration:i,times:o,ease:s});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?(_h(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(gl(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return xn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return xn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=yn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ne;const{animation:r}=n;_h(r,t)}return Ne}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:p,...v}=this.options,y=new Pf({...v,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=yn(this.time);c.setWithVelocity(y.sample(x-Da).value,y.sample(x).value,Da)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return rT()&&r&&_1.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const F1=Ef(()=>window.ScrollTimeline!==void 0);class lT{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>F1()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function cT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const jf=(e,t,n,r={},i,o)=>s=>{const a=df(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-yn(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};cT(a)||(u={...u,...Mb(e,u)}),u.duration&&(u.duration=yn(u.duration)),u.repeatDelay&&(u.repeatDelay=yn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const p=gl(u.keyframes,a);if(p!==void 0)return ne.update(()=>{u.onUpdate(p),u.onComplete()}),new lT([])}return!o&&Vh.supports(u)?new Vh(u):new Pf(u)},uT=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),dT=e=>Ou(e)?e[e.length-1]||0:e;function kf(e,t){e.indexOf(t)===-1&&e.push(t)}function Af(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Mf{constructor(){this.subscriptions=[]}add(t){return kf(this.subscriptions,t),()=>Af(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nh=30,fT=e=>!isNaN(parseFloat(e)),yo={current:void 0};class pT{constructor(t,n={}){this.version="11.11.7",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=rn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=rn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=fT(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Mf);const r=this.events[t].add(n);return t==="change"?()=>{r(),ne.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return yo.current&&yo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=rn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Nh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Nh);return Sf(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qt(e,t){return new pT(e,t)}function hT(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qt(n))}function mT(e,t){const n=ml(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=dT(o[s]);hT(e,s,a)}}const vl=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gT="framerAppearId",$1="data-"+vl(gT);function H1(e){return e.props[$1]}const Ue=e=>!!(e&&e.getVelocity);function vT(e){return!!(Ue(e)&&e.add)}function G1(e){if(sr.has(e))return"transform";if(_1.has(e))return vl(e)}function Fu(e,t){var n;if(!e.applyWillChange)return;const r=e.getValue("willChange");if(vT(r))return r.add(t);!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&G1(t)&&e.setStaticValue("willChange","transform")}function yT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function U1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),v=l[f];if(v===void 0||u&&yT(u,f))continue;const y={delay:n,...df(s||{},f)};let x=!1;if(window.MotionHandoffAnimation){const g=H1(e);if(g){const h=window.MotionHandoffAnimation(g,f,ne);h!==null&&(y.startTime=h,x=!0)}}Fu(e,f),p.start(jf(f,p,v,e.shouldReduceMotion&&sr.has(f)?{type:!1}:y,e,x));const S=p.animation;S&&c.push(S)}return a&&Promise.all(c).then(()=>{ne.update(()=>{a&&mT(e,a)})}),c}function $u(e,t,n={}){var r;const i=ml(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(U1(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=o;return xT(e,t,u+c,f,p,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,u]=l==="beforeChildren"?[s,a]:[a,s];return c().then(()=>u())}else return Promise.all([s(),a(n.delay)])}function xT(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(wT).forEach((c,u)=>{c.notify("AnimationStart",t),s.push($u(c,t,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function wT(e,t){return e.sortNodePosition(t)}function ST(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>$u(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=$u(e,t,n);else{const i=typeof t=="function"?ml(e,t,n.custom):t;r=Promise.all(U1(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const bT=uf.length;function W1(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?W1(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<bT;n++){const r=uf[n],i=e.props[r];(Uo(i)||i===!1)&&(t[r]=i)}return t}const TT=[...cf].reverse(),CT=cf.length;function PT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>ST(e,n,r)))}function ET(e){let t=PT(e),n=Bh(),r=!0;const i=l=>(c,u)=>{var f;const p=ml(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:v,transitionEnd:y,...x}=p;c={...c,...x,...y}}return c};function o(l){t=l(e)}function s(l){const{props:c}=e,u=W1(e.parent)||{},f=[],p=new Set;let v={},y=1/0;for(let S=0;S<CT;S++){const g=TT[S],h=n[g],m=c[g]!==void 0?c[g]:u[g],w=Uo(m),b=g===l?h.isActive:null;b===!1&&(y=S);let T=m===u[g]&&m!==c[g]&&w;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),h.protectedKeys={...v},!h.isActive&&b===null||!m&&!h.prevProp||Go(m)||typeof m=="boolean")continue;const P=jT(h.prevProp,m);let j=P||g===l&&h.isActive&&!T&&w||S>y&&w,A=!1;const k=Array.isArray(m)?m:[m];let R=k.reduce(i(g),{});b===!1&&(R={});const{prevResolvedValues:B={}}=h,_={...B,...R},H=ee=>{j=!0,p.has(ee)&&(A=!0,p.delete(ee)),h.needsAnimating[ee]=!0;const L=e.getValue(ee);L&&(L.liveStyle=!1)};for(const ee in _){const L=R[ee],V=B[ee];if(v.hasOwnProperty(ee))continue;let N=!1;Ou(L)&&Ou(V)?N=!i1(L,V):N=L!==V,N?L!=null?H(ee):p.add(ee):L!==void 0&&p.has(ee)?H(ee):h.protectedKeys[ee]=!0}h.prevProp=m,h.prevResolvedValues=R,h.isActive&&(v={...v,...R}),r&&e.blockInitialAnimation&&(j=!1),j&&(!(T&&P)||A)&&f.push(...k.map(ee=>({animation:ee,options:{type:g}})))}if(p.size){const S={};p.forEach(g=>{const h=e.getBaseTarget(g),m=e.getValue(g);m&&(m.liveStyle=!0),S[g]=h??null}),f.push({animation:S})}let x=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const f=s(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Bh(),r=!0}}}function jT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!i1(t,e):!1}function dr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Bh(){return{animate:dr(!0),whileInView:dr(),whileHover:dr(),whileTap:dr(),whileDrag:dr(),whileFocus:dr(),exit:dr()}}class ar{constructor(t){this.isMounted=!1,this.node=t}update(){}}class kT extends ar{constructor(t){super(t),t.animationState||(t.animationState=ET(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Go(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let AT=0;class MT extends ar{constructor(){super(...arguments),this.id=AT++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const LT={animation:{Feature:kT},exit:{Feature:MT}},Y1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function yl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const OT=e=>t=>Y1(t)&&e(t,yl(t));function gn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Sn(e,t,n,r){return gn(e,t,OT(n),r)}const Fh=(e,t)=>Math.abs(e-t);function IT(e,t){const n=Fh(e.x,t.x),r=Fh(e.y,t.y);return Math.sqrt(n**2+r**2)}class q1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=hc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=IT(f.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:y}=f,{timestamp:x}=Me;this.history.push({...y,timestamp:x});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=pc(p,this.transformPagePoint),ne.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=hc(f.type==="pointercancel"?this.lastMoveEventInfo:pc(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,S),y&&y(f,S)},!Y1(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=yl(t),a=pc(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Me;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,hc(a,this.history)),this.removeListeners=wn(Sn(this.contextWindow,"pointermove",this.handlePointerMove),Sn(this.contextWindow,"pointerup",this.handlePointerUp),Sn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Yt(this.updatePoint)}}function pc(e,t){return t?{point:t(e.point)}:e}function $h(e,t){return{x:e.x-t.x,y:e.y-t.y}}function hc({point:e},t){return{point:e,delta:$h(e,K1(t)),offset:$h(e,RT(t)),velocity:zT(t,.1)}}function RT(e){return e[0]}function K1(e){return e[e.length-1]}function zT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=K1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yn(t)));)n--;if(!r)return{x:0,y:0};const o=xn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function J1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Hh=J1("dragHorizontal"),Gh=J1("dragVertical");function X1(e){let t=!1;if(e==="y")t=Gh();else if(e==="x")t=Hh();else{const n=Hh(),r=Gh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Q1(){const e=X1(!0);return e?(e(),!1):!0}function ri(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Z1=1e-4,DT=1-Z1,_T=1+Z1,ey=.01,VT=0-ey,NT=0+ey;function mt(e){return e.max-e.min}function BT(e,t,n){return Math.abs(e-t)<=n}function Uh(e,t,n,r=.5){e.origin=r,e.originPoint=ye(t.min,t.max,e.origin),e.scale=mt(n)/mt(t),e.translate=ye(n.min,n.max,e.origin)-e.originPoint,(e.scale>=DT&&e.scale<=_T||isNaN(e.scale))&&(e.scale=1),(e.translate>=VT&&e.translate<=NT||isNaN(e.translate))&&(e.translate=0)}function xo(e,t,n,r){Uh(e.x,t.x,n.x,r?r.originX:void 0),Uh(e.y,t.y,n.y,r?r.originY:void 0)}function Wh(e,t,n){e.min=n.min+t.min,e.max=e.min+mt(t)}function FT(e,t,n){Wh(e.x,t.x,n.x),Wh(e.y,t.y,n.y)}function Yh(e,t,n){e.min=t.min-n.min,e.max=e.min+mt(t)}function wo(e,t,n){Yh(e.x,t.x,n.x),Yh(e.y,t.y,n.y)}function $T(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ye(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ye(n,e,r.max):Math.min(e,n)),e}function qh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function HT(e,{top:t,left:n,bottom:r,right:i}){return{x:qh(e.x,n,i),y:qh(e.y,t,r)}}function Kh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function GT(e,t){return{x:Kh(e.x,t.x),y:Kh(e.y,t.y)}}function UT(e,t){let n=.5;const r=mt(e),i=mt(t);return i>r?n=Or(t.min,t.max-r,e.min):r>i&&(n=Or(e.min,e.max-i,t.min)),tr(0,1,n)}function WT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Hu=.35;function YT(e=Hu){return e===!1?e=0:e===!0&&(e=Hu),{x:Jh(e,"left","right"),y:Jh(e,"top","bottom")}}function Jh(e,t,n){return{min:Xh(e,t),max:Xh(e,n)}}function Xh(e,t){return typeof e=="number"?e:e[t]||0}const Qh=()=>({translate:0,scale:1,origin:0,originPoint:0}),ii=()=>({x:Qh(),y:Qh()}),Zh=()=>({min:0,max:0}),Te=()=>({x:Zh(),y:Zh()});function Tt(e){return[e("x"),e("y")]}function ty({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function qT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function KT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function mc(e){return e===void 0||e===1}function Gu({scale:e,scaleX:t,scaleY:n}){return!mc(e)||!mc(t)||!mc(n)}function mr(e){return Gu(e)||ny(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ny(e){return em(e.x)||em(e.y)}function em(e){return e&&e!=="0%"}function _a(e,t,n){const r=e-n,i=t*r;return n+i}function tm(e,t,n,r,i){return i!==void 0&&(e=_a(e,i,r)),_a(e,n,r)+t}function Uu(e,t=0,n=1,r,i){e.min=tm(e.min,t,n,r,i),e.max=tm(e.max,t,n,r,i)}function ry(e,{x:t,y:n}){Uu(e.x,t.translate,t.scale,t.originPoint),Uu(e.y,n.translate,n.scale,n.originPoint)}const nm=.999999999999,rm=1.0000000000001;function JT(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&si(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,ry(e,s)),r&&mr(o.latestValues)&&si(e,o.latestValues))}t.x<rm&&t.x>nm&&(t.x=1),t.y<rm&&t.y>nm&&(t.y=1)}function oi(e,t){e.min=e.min+t,e.max=e.max+t}function im(e,t,n,r,i=.5){const o=ye(e.min,e.max,i);Uu(e,t,n,o,r)}function si(e,t){im(e.x,t.x,t.scaleX,t.scale,t.originX),im(e.y,t.y,t.scaleY,t.scale,t.originY)}function iy(e,t){return ty(KT(e.getBoundingClientRect(),t))}function XT(e,t,n){const r=iy(e,n),{scroll:i}=t;return i&&(oi(r.x,i.offset.x),oi(r.y,i.offset.y)),r}const oy=({current:e})=>e?e.ownerDocument.defaultView:null,QT=new WeakMap;class ZT{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(yl(u,"page").point)},o=(u,f)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=X1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(nn.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[S];m&&(g=mt(m)*(parseFloat(g)/100))}}this.originPoint[S]=g}),y&&ne.postRender(()=>y(u,f)),Fu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(u,f)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:S}=f;if(v&&this.currentDirection===null){this.currentDirection=eC(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),x&&x(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Tt(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new q1(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:oy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ne.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ks(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=$T(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ri(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=HT(i.layoutBox,n):this.constraints=!1,this.elastic=YT(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Tt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=WT(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ri(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=XT(r,i.root,this.visualElement.getTransformPagePoint());let s=GT(i.layout.layoutBox,o);if(n){const a=n(qT(s));this.hasMutatedConstraints=!!a,a&&(s=ty(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Tt(u=>{if(!ks(u,n,this.currentDirection))return;let f=l&&l[u]||{};s&&(f={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fu(this.visualElement,t),r.start(jf(t,r,0,n,this.visualElement,!1))}stopAnimation(){Tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Tt(n=>{const{drag:r}=this.getProps();if(!ks(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ye(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ri(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Tt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=UT({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Tt(s=>{if(!ks(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ye(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;QT.set(this.visualElement,this);const t=this.visualElement.current,n=Sn(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ri(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ne.read(r);const s=gn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Tt(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Hu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function ks(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function eC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class tC extends ar{constructor(t){super(t),this.removeGroupControls=Ne,this.removeListeners=Ne,this.controls=new ZT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ne}unmount(){this.removeGroupControls(),this.removeListeners()}}const om=e=>(t,n)=>{e&&ne.postRender(()=>e(t,n))};class nC extends ar{constructor(){super(...arguments),this.removePointerDownListener=Ne}onPointerDown(t){this.session=new q1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:oy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:om(t),onStart:om(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ne.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Sn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const xl=C.createContext(null);function rC(){const e=C.useContext(xl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=C.useId();C.useEffect(()=>r(i),[]);const o=C.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Lf=C.createContext({}),sy=C.createContext({}),Js={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ki={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=sm(e,t.target.x),r=sm(e,t.target.y);return`${n}% ${r}%`}},iC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=nr.parse(e);if(i.length>5)return r;const o=nr.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=ye(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},Va={};function oC(e){Object.assign(Va,e)}const{schedule:Of,cancel:DA}=o1(queueMicrotask,!1);class sC extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;oC(aC),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Js.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ne.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Of.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ay(e){const[t,n]=rC(),r=C.useContext(Lf);return d.jsx(sC,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(sy),isPresent:t,safeToRemove:n})}const aC={borderRadius:{...Ki,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ki,borderTopRightRadius:Ki,borderBottomLeftRadius:Ki,borderBottomRightRadius:Ki,boxShadow:iC},ly=["TopLeft","TopRight","BottomLeft","BottomRight"],lC=ly.length,am=e=>typeof e=="string"?parseFloat(e):e,lm=e=>typeof e=="number"||U.test(e);function cC(e,t,n,r,i,o){i?(e.opacity=ye(0,n.opacity!==void 0?n.opacity:1,uC(r)),e.opacityExit=ye(t.opacity!==void 0?t.opacity:1,0,dC(r))):o&&(e.opacity=ye(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<lC;s++){const a=`border${ly[s]}Radius`;let l=cm(t,a),c=cm(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||lm(l)===lm(c)?(e[a]=Math.max(ye(am(l),am(c),r),0),(nn.test(c)||nn.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ye(t.rotate||0,n.rotate||0,r))}function cm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const uC=cy(0,.5,f1),dC=cy(.5,.95,Ne);function cy(e,t,n){return r=>r<e?0:r>t?1:n(Or(e,t,r))}function um(e,t){e.min=t.min,e.max=t.max}function St(e,t){um(e.x,t.x),um(e.y,t.y)}function dm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function fm(e,t,n,r,i){return e-=t,e=_a(e,1/n,r),i!==void 0&&(e=_a(e,1/i,r)),e}function fC(e,t=0,n=1,r=.5,i,o=e,s=e){if(nn.test(t)&&(t=parseFloat(t),t=ye(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ye(o.min,o.max,r);e===o&&(a-=t),e.min=fm(e.min,t,n,a,i),e.max=fm(e.max,t,n,a,i)}function pm(e,t,[n,r,i],o,s){fC(e,t[n],t[r],t[i],t.scale,o,s)}const pC=["x","scaleX","originX"],hC=["y","scaleY","originY"];function hm(e,t,n,r){pm(e.x,t,pC,n?n.x:void 0,r?r.x:void 0),pm(e.y,t,hC,n?n.y:void 0,r?r.y:void 0)}function mm(e){return e.translate===0&&e.scale===1}function uy(e){return mm(e.x)&&mm(e.y)}function gm(e,t){return e.min===t.min&&e.max===t.max}function mC(e,t){return gm(e.x,t.x)&&gm(e.y,t.y)}function vm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function dy(e,t){return vm(e.x,t.x)&&vm(e.y,t.y)}function ym(e){return mt(e.x)/mt(e.y)}function xm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class gC{constructor(){this.members=[]}add(t){kf(this.members,t),t.scheduleRender()}remove(t){if(Af(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function vC(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:p,skewX:v,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const yC=(e,t)=>e.depth-t.depth;class xC{constructor(){this.children=[],this.isDirty=!1}add(t){kf(this.children,t),this.isDirty=!0}remove(t){Af(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(yC),this.isDirty=!1,this.children.forEach(t)}}function Xs(e){const t=Ue(e)?e.get():e;return uT(t)?t.toValue():t}function wC(e,t){const n=rn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yt(r),e(o-t))};return ne.read(r,!0),()=>Yt(r)}function SC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function bC(e,t,n){const r=Ue(e)?e:Qt(e);return r.start(jf("",r,t,n)),r.animation}const gr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},oo=typeof window<"u"&&window.MotionDebug!==void 0,gc=["","X","Y","Z"],TC={visibility:"hidden"},wm=1e3;let CC=0;function vc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function fy(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=H1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ne,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&fy(r)}function py({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=CC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,oo&&(gr.totalNodes=gr.resolvedTargetDeltas=gr.recalculatedProjection=0),this.nodes.forEach(jC),this.nodes.forEach(OC),this.nodes.forEach(IC),this.nodes.forEach(kC),oo&&window.MotionDebug.record(gr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new xC)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Mf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=SC(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=wC(p,250),Js.hasAnimatedSinceResize&&(Js.hasAnimatedSinceResize=!1,this.nodes.forEach(bm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||VC,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=u.getProps(),h=!this.targetLayout||!dy(this.targetLayout,y)||v,m=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...df(x,"layout"),onPlay:S,onComplete:g};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||bm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RC),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Sm);return}this.isUpdating||this.nodes.forEach(MC),this.isUpdating=!1,this.nodes.forEach(LC),this.nodes.forEach(PC),this.nodes.forEach(EC),this.clearAllSnapshots();const a=rn.now();Me.delta=tr(0,1e3/60,a-Me.timestamp),Me.timestamp=a,Me.isProcessing=!0,lc.update.process(Me),lc.preRender.process(Me),lc.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Of.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(AC),this.sharedNodes.forEach(zC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!uy(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&(a||mr(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),NC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return Te();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(BC))){const{scroll:u}=this.root;u&&(oi(l.x,u.offset.x),oi(l.y,u.offset.y))}return l}removeElementScroll(s){var a;const l=Te();if(St(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&St(l,s),oi(l.x,f.offset.x),oi(l.y,f.offset.y))}return l}applyTransform(s,a=!1){const l=Te();St(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&si(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),mr(u.latestValues)&&si(l,u.latestValues)}return mr(this.latestValues)&&si(l,this.latestValues),l}removeTransform(s){const a=Te();St(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!mr(c.latestValues))continue;Gu(c.latestValues)&&c.updateSnapshot();const u=Te(),f=c.measurePageBox();St(u,f),hm(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return mr(this.latestValues)&&hm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),wo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Te(),this.targetWithTransforms=Te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),FT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),ry(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Te(),this.relativeTargetOrigin=Te(),wo(this.relativeTargetOrigin,this.target,v.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}oo&&gr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gu(this.parent.latestValues)||ny(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;JT(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Te());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(dm(this.prevProjectionDelta.x,this.projectionDelta.x),dm(this.prevProjectionDelta.y,this.projectionDelta.y)),xo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!xm(this.projectionDelta.x,this.prevProjectionDelta.x)||!xm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),oo&&gr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ii(),this.projectionDelta=ii(),this.projectionDeltaWithTransform=ii()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Te(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,S=this.getStack(),g=!S||S.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(_C));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const b=w/1e3;Tm(f.x,s.x,b),Tm(f.y,s.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),DC(this.relativeTarget,this.relativeTargetOrigin,p,b),m&&mC(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Te()),St(m,this.relativeTarget)),x&&(this.animationValues=u,cC(u,c,this.latestValues,b,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ne.update(()=>{Js.hasAnimatedSinceResize=!0,this.currentAnimation=bC(0,wm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(wm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&hy(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Te();const f=mt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const p=mt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}St(a,l),si(a,u),xo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new gC),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&vc("z",s,c,this.animationValues);for(let u=0;u<gc.length;u++)vc(`rotate${gc[u]}`,s,c,this.animationValues),vc(`skew${gc[u]}`,s,c,this.animationValues);s.render();for(const u in c)s.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return TC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Xs(s==null?void 0:s.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Xs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!mr(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=vC(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:v,y}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Va){if(p[x]===void 0)continue;const{correct:S,applyTo:g}=Va[x],h=c.transform==="none"?p[x]:S(p[x],f);if(g){const m=g.length;for(let w=0;w<m;w++)c[g[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Xs(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Sm),this.root.sharedNodes.clear()}}}function PC(e){e.updateLayout()}function EC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Tt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],v=mt(p);p.min=r[f].min,p.max=p.min+v}):hy(o,n.layoutBox,r)&&Tt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],v=mt(r[f]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const a=ii();xo(a,r,n.layoutBox);const l=ii();s?xo(l,e.applyTransform(i,!0),n.measuredBox):xo(l,r,n.layoutBox);const c=!uy(a);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:v}=f;if(p&&v){const y=Te();wo(y,n.layoutBox,p.layoutBox);const x=Te();wo(x,r,v.layoutBox),dy(y,x)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function jC(e){oo&&gr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function AC(e){e.clearSnapshot()}function Sm(e){e.clearMeasurements()}function MC(e){e.isLayoutDirty=!1}function LC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function bm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function OC(e){e.resolveTargetDelta()}function IC(e){e.calcProjection()}function RC(e){e.resetSkewAndRotation()}function zC(e){e.removeLeadSnapshot()}function Tm(e,t,n){e.translate=ye(t.translate,0,n),e.scale=ye(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Cm(e,t,n,r){e.min=ye(t.min,n.min,r),e.max=ye(t.max,n.max,r)}function DC(e,t,n,r){Cm(e.x,t.x,n.x,r),Cm(e.y,t.y,n.y,r)}function _C(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const VC={duration:.45,ease:[.4,0,.1,1]},Pm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Em=Pm("applewebkit/")&&!Pm("chrome/")?Math.round:Ne;function jm(e){e.min=Em(e.min),e.max=Em(e.max)}function NC(e){jm(e.x),jm(e.y)}function hy(e,t,n){return e==="position"||e==="preserve-aspect"&&!BT(ym(t),ym(n),.2)}function BC(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const FC=py({attachResizeListener:(e,t)=>gn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yc={current:void 0},my=py({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!yc.current){const e=new FC({});e.mount(window),e.setOptions({layoutScroll:!0}),yc.current=e}return yc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$C={pan:{Feature:nC},drag:{Feature:tC,ProjectionNode:my,MeasureLayout:ay}};function km(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||Q1())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&ne.postRender(()=>l(o,s))};return Sn(e.current,n,i,{passive:!e.getProps()[r]})}class HC extends ar{mount(){this.unmount=wn(km(this.node,!0),km(this.node,!1))}unmount(){}}class GC extends ar{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wn(gn(this.node.current,"focus",()=>this.onFocus()),gn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gy=(e,t)=>t?e===t?!0:gy(e,t.parentElement):!1;function xc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,yl(n))}class UC extends ar{constructor(){super(...arguments),this.removeStartListeners=Ne,this.removeEndListeners=Ne,this.removeAccessibleListeners=Ne,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Sn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!gy(this.node.current,a.target)?u:c;p&&ne.update(()=>p(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Sn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=wn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||xc("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&ne.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=gn(this.node.current,"keyup",s),xc("down",(a,l)=>{this.startPress(a,l)})},n=gn(this.node.current,"keydown",t),r=()=>{this.isPressing&&xc("cancel",(o,s)=>this.cancelPress(o,s))},i=gn(this.node.current,"blur",r);this.removeAccessibleListeners=wn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ne.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Q1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ne.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Sn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=gn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=wn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Wu=new WeakMap,wc=new WeakMap,WC=e=>{const t=Wu.get(e.target);t&&t(e)},YC=e=>{e.forEach(WC)};function qC({root:e,...t}){const n=e||document;wc.has(n)||wc.set(n,{});const r=wc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(YC,{root:e,...t})),r[i]}function KC(e,t,n){const r=qC(t);return Wu.set(e,n),r.observe(e),()=>{Wu.delete(e),r.unobserve(e)}}const JC={some:0,all:1};class XC extends ar{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:JC[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=c?u:f;p&&p(l)};return KC(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(QC(t,n))&&this.startObserver()}unmount(){}}function QC({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const ZC={inView:{Feature:XC},tap:{Feature:UC},focus:{Feature:GC},hover:{Feature:HC}},eP={layout:{ProjectionNode:my,MeasureLayout:ay}},wl=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Sl=C.createContext({}),If=typeof window<"u",bl=If?C.useLayoutEffect:C.useEffect,vy=C.createContext({strict:!1});function tP(e,t,n,r,i){var o,s;const{visualElement:a}=C.useContext(Sl),l=C.useContext(vy),c=C.useContext(xl),u=C.useContext(wl).reducedMotion,f=C.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,v=C.useContext(sy);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&nP(f.current,n,i,v),C.useInsertionEffect(()=>{p&&p.update(n,c)});const y=n[$1],x=C.useRef(!!y&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,y))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,y)));return bl(()=>{p&&(window.MotionIsMounted=!0,p.updateFeatures(),Of.render(p.render),x.current&&p.animationState&&p.animationState.animateChanges())}),C.useEffect(()=>{p&&(!x.current&&p.animationState&&p.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,y)}),x.current=!1))}),p}function nP(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:yy(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&ri(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function yy(e){if(e)return e.options.allowProjection!==!1?e.projection:yy(e.parent)}function rP(e,t,n){return C.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ri(n)&&(n.current=r))},[t])}function Tl(e){return Go(e.animate)||uf.some(t=>Uo(e[t]))}function xy(e){return!!(Tl(e)||e.variants)}function iP(e,t){if(Tl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Uo(n)?n:void 0,animate:Uo(r)?r:void 0}}return e.inherit!==!1?t:{}}function oP(e){const{initial:t,animate:n}=iP(e,C.useContext(Sl));return C.useMemo(()=>({initial:t,animate:n}),[Am(t),Am(n)])}function Am(e){return Array.isArray(e)?e.join(" "):e}const Mm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pi={};for(const e in Mm)Pi[e]={isEnabled:t=>Mm[e].some(n=>!!t[n])};function sP(e){for(const t in e)Pi[t]={...Pi[t],...e[t]}}const aP=Symbol.for("motionComponentSymbol");function lP({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&sP(e);function o(a,l){let c;const u={...C.useContext(wl),...a,layoutId:cP(a)},{isStatic:f}=u,p=oP(a),v=r(a,f);if(!f&&If){uP();const y=dP(u);c=y.MeasureLayout,p.visualElement=tP(i,v,u,t,y.ProjectionNode)}return d.jsxs(Sl.Provider,{value:p,children:[c&&p.visualElement?d.jsx(c,{visualElement:p.visualElement,...u}):null,n(i,a,rP(v,p.visualElement,l),v,f,p.visualElement)]})}const s=C.forwardRef(o);return s[aP]=i,s}function cP({layoutId:e}){const t=C.useContext(Lf).id;return t&&e!==void 0?t+"-"+e:e}function uP(e,t){C.useContext(vy).strict}function dP(e){const{drag:t,layout:n}=Pi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const fP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rf(e){return typeof e!="string"||e.includes("-")?!1:!!(fP.indexOf(e)>-1||/[A-Z]/u.test(e))}function wy(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Sy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function by(e,t,n,r){wy(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Sy.has(i)?i:vl(i),t.attrs[i])}function Ty(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Va[e]||e==="opacity")}function zf(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Ue(i[s])||t.style&&Ue(t.style[s])||Ty(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function Cy(e,t,n){const r=zf(e,t,n);for(const i in e)if(Ue(e[i])||Ue(t[i])){const o=rs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function _i(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}function pP({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,o,s,a){const l={latestValues:hP(i,o,s,a?!1:e,t),renderState:n()};return r&&(l.mount=c=>r(i,c,l)),l}const Py=e=>(t,n)=>{const r=C.useContext(Sl),i=C.useContext(xl),o=()=>pP(e,t,r,i,n);return n?o():_i(o)};function Lm(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const o=lf(e,r[i]);if(o){const{transitionEnd:s,transition:a,...l}=o;n(l,s)}}}function hP(e,t,n,r,i){var o;const s={};let a=r&&((o=e.style)===null||o===void 0?void 0:o.willChange)===void 0;const l=i(e,{});for(const x in l)s[x]=Xs(l[x]);let{initial:c,animate:u}=e;const f=Tl(e),p=xy(e);t&&p&&!f&&e.inherit!==!1&&(c===void 0&&(c=t.initial),u===void 0&&(u=t.animate));let v=n?n.initial===!1:!1;v=v||c===!1;const y=v?u:c;return y&&typeof y!="boolean"&&!Go(y)&&Lm(e,y,(x,S)=>{for(const g in x){let h=x[g];if(Array.isArray(h)){const m=v?h.length-1:0;h=h[m]}h!==null&&(s[g]=h)}for(const g in S)s[g]=S[g]}),a&&u&&c!==!1&&!Go(u)&&Lm(e,u,x=>{for(const S in x)if(G1(S)){s.willChange="transform";return}}),s}const Df=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ey=()=>({...Df(),attrs:{}}),jy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,mP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gP=rs.length;function vP(e,t,n){let r="",i=!0;for(let o=0;o<gP;o++){const s=rs[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=jy(a,yf[s]);if(!l){i=!1;const u=mP[s]||s;r+=`${u}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function _f(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(sr.has(l)){s=!0;continue}else if(v1(l)){i[l]=c;continue}else{const u=jy(c,yf[l]);l.startsWith("origin")?(a=!0,o[l]=u):r[l]=u}}if(t.transform||(s||n?r.transform=vP(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=o;r.transformOrigin=`${l} ${c} ${u}`}}function Om(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function yP(e,t,n){const r=Om(t,e.x,e.width),i=Om(n,e.y,e.height);return`${r} ${i}`}const xP={offset:"stroke-dashoffset",array:"stroke-dasharray"},wP={offset:"strokeDashoffset",array:"strokeDasharray"};function SP(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?xP:wP;e[o.offset]=U.transform(-r);const s=U.transform(t),a=U.transform(n);e[o.array]=`${s} ${a}`}function Vf(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(_f(e,c,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=yP(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),s!==void 0&&SP(p,s,a,l,!1)}const Nf=e=>typeof e=="string"&&e.toLowerCase()==="svg",bP={useVisualState:Py({scrapeMotionValuesFromProps:Cy,createRenderState:Ey,onMount:(e,t,{renderState:n,latestValues:r})=>{ne.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ne.render(()=>{Vf(n,r,Nf(t.tagName),e.transformTemplate),by(t,n)})}})},TP={useVisualState:Py({applyWillChange:!0,scrapeMotionValuesFromProps:zf,createRenderState:Df})};function ky(e,t,n){for(const r in t)!Ue(t[r])&&!Ty(r,n)&&(e[r]=t[r])}function CP({transformTemplate:e},t){return C.useMemo(()=>{const n=Df();return _f(n,t,e),Object.assign({},n.vars,n.style)},[t])}function PP(e,t){const n=e.style||{},r={};return ky(r,n,e),Object.assign(r,CP(e,t)),r}function EP(e,t){const n={},r=PP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const jP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Na(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||jP.has(e)}let Ay=e=>!Na(e);function kP(e){e&&(Ay=t=>t.startsWith("on")?!Na(t):e(t))}try{kP(require("@emotion/is-prop-valid").default)}catch{}function AP(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Ay(i)||n===!0&&Na(i)||!t&&!Na(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function MP(e,t,n,r){const i=C.useMemo(()=>{const o=Ey();return Vf(o,t,Nf(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};ky(o,e.style,e),i.style={...o,...i.style}}return i}function LP(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Rf(n)?MP:EP)(r,o,s,n),c=AP(r,typeof n=="string",e),u=n!==C.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=C.useMemo(()=>Ue(f)?f.get():f,[f]);return C.createElement(n,{...u,children:p})}}function OP(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Rf(r)?bP:TP,preloadedFeatures:e,useRender:LP(i),createVisualElement:t,Component:r};return lP(s)}}const Yu={current:null},My={current:!1};function IP(){if(My.current=!0,!!If)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Yu.current=e.matches;e.addListener(t),t()}else Yu.current=!1}function RP(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Ue(i))e.addValue(r,i);else if(Ue(o))e.addValue(r,Qt(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Qt(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Im=new WeakMap,zP=[...w1,He,nr],DP=e=>zP.find(x1(e)),Rm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _P{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=rn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ne.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Tl(n),this.isVariantNode=xy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];l[p]!==void 0&&Ue(v)&&v.set(l[p],!1)}}mount(t){this.current=t,Im.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),My.current||IP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Im.delete(this.current),this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=sr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&ne.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pi){const n=Pi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Rm.length;r++){const i=Rm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=RP(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Qt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(m1(i)||h1(i))?i=parseFloat(i):!DP(i)&&nr.test(n)&&(i=k1(t,n)),this.setBaseTarget(t,Ue(i)?i.get():i)),Ue(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=lf(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ue(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Mf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ly extends _P{constructor(){super(...arguments),this.KeyframeResolver=A1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function VP(e){return window.getComputedStyle(e)}class NP extends Ly{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=wy}readValueFromInstance(t,n){if(sr.has(n)){const r=xf(n);return r&&r.default||0}else{const r=VP(t),i=(v1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return iy(t,n)}build(t,n,r){_f(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return zf(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ue(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class BP extends Ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Te}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sr.has(n)){const r=xf(n);return r&&r.default||0}return n=Sy.has(n)?n:vl(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cy(t,n,r)}build(t,n,r){Vf(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){by(t,n,r,i)}mount(t){this.isSVGTag=Nf(t.tagName),super.mount(t)}}const FP=(e,t)=>Rf(e)?new BP(t):new NP(t,{allowProjection:e!==C.Fragment}),$P=OP({...LT,...ZC,...$C,...eP},FP),G=Pb($P);class HP extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function GP({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),i=C.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=C.useContext(wl);return C.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:c}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return o&&(u.nonce=o),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),d.jsx(HP,{isPresent:t,childRef:r,sizeRef:i,children:C.cloneElement(e,{ref:r})})}const UP=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=_i(WP),l=C.useId(),c=C.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),u=C.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),o?[Math.random(),c]:[n,c]);return C.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),C.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=d.jsx(GP,{isPresent:n,children:e})),d.jsx(xl.Provider,{value:u,children:e})};function WP(){return new Map}const As=e=>e.key||"";function zm(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const YP=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=C.useMemo(()=>zm(e),[e]),l=a.map(As),c=C.useRef(!0),u=C.useRef(a),f=_i(()=>new Map),[p,v]=C.useState(a),[y,x]=C.useState(a);bl(()=>{c.current=!1,u.current=a;for(let h=0;h<y.length;h++){const m=As(y[h]);l.includes(m)?f.delete(m):f.get(m)!==!0&&f.set(m,!1)}},[y,l.length,l.join("-")]);const S=[];if(a!==p){let h=[...a];for(let m=0;m<y.length;m++){const w=y[m],b=As(w);l.includes(b)||(h.splice(m,0,w),S.push(w))}s==="wait"&&S.length&&(h=S),x(zm(h)),v(a);return}const{forceRender:g}=C.useContext(Lf);return d.jsx(d.Fragment,{children:y.map(h=>{const m=As(h),w=a===y||l.includes(m),b=()=>{if(f.has(m))f.set(m,!0);else return;let T=!0;f.forEach(P=>{P||(T=!1)}),T&&(g==null||g(),x(u.current),i&&i())};return d.jsx(UP,{isPresent:w,initial:!c.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:s,onExitComplete:w?void 0:b,children:h},m)})})};function qP(e){const t=_i(()=>Qt(e)),{isStatic:n}=C.useContext(wl);if(n){const[,r]=C.useState(e);C.useEffect(()=>t.on("change",r),[])}return t}function Oy(e,t){const n=qP(t()),r=()=>n.set(t());return r(),bl(()=>{const i=()=>ne.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Yt(r)}}),n}const KP=e=>e&&typeof e=="object"&&e.mix,JP=e=>KP(e)?e.mix:void 0;function XP(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Cf(i,o,{mixer:JP(o[0]),...s});return t?a(r):a}function QP(e){yo.current=[],e();const t=Oy(yo.current,e);return yo.current=void 0,t}function Ms(e,t,n,r){if(typeof e=="function")return QP(e);const i=typeof t=="function"?t:XP(t,n,r);return Array.isArray(e)?Dm(e,i):Dm([e],([o])=>i(o))}function Dm(e,t){const n=_i(()=>[]);return Oy(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Iy(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Qs=new WeakMap;let On;function ZP(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function e3({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Qs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return ZP(e,n)}})})}function t3(e){e.forEach(e3)}function n3(){typeof ResizeObserver>"u"||(On=new ResizeObserver(t3))}function r3(e,t){On||n3();const n=Iy(e);return n.forEach(r=>{let i=Qs.get(r);i||(i=new Set,Qs.set(r,i)),i.add(t),On==null||On.observe(r)}),()=>{n.forEach(r=>{const i=Qs.get(r);i==null||i.delete(t),i!=null&&i.size||On==null||On.unobserve(r)})}}const Zs=new Set;let So;function i3(){So=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Zs.forEach(n=>n(t))},window.addEventListener("resize",So)}function o3(e){return Zs.add(e),So||i3(),()=>{Zs.delete(e),!Zs.size&&So&&(So=void 0)}}function s3(e,t){return typeof e=="function"?o3(e):r3(e,t)}const a3=50,_m=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),l3=()=>({time:0,x:_m(),y:_m()}),c3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Vm(e,t,n,r){const i=n[t],{length:o,position:s}=c3[t],a=i.current,l=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Or(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>a3?0:Sf(i.current-a,c)}function u3(e,t,n){Vm(e,"x",t,n),Vm(e,"y",t,n),t.time=n}function d3(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const f3={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},qu={start:0,center:.5,end:1};function Nm(e,t,n=0){let r=0;if(e in qu&&(e=qu[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const p3=[0,0];function h3(e,t,n,r){let i=Array.isArray(e)?e:p3,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,qu[e]?e:"0"]),o=Nm(i[0],n,r),s=Nm(i[1],t),o-s}const m3={x:0,y:0};function g3(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function v3(e,t,n){const{offset:r=f3.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?d3(i,e):m3,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:g3(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const f=r.length;for(let p=0;p<f;p++){const v=h3(r[p],c[s],l[s],a[o]);!u&&v!==t[o].interpolatorOffsets[p]&&(u=!0),t[o].offset[p]=v}u&&(t[o].interpolate=Cf(t[o].offset,D1(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function y3(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function x3(e,t,n,r={}){return{measure:()=>y3(e,r.target,n),update:i=>{u3(e,n,i),(r.offset||r.target)&&v3(e,n,r)},notify:()=>t(n)}}const Ji=new WeakMap,Bm=new WeakMap,Sc=new WeakMap,Fm=e=>e===document.documentElement?window:e;function Bf(e,{container:t=document.documentElement,...n}={}){let r=Sc.get(t);r||(r=new Set,Sc.set(t,r));const i=l3(),o=x3(t,e,i,n);if(r.add(o),!Ji.has(t)){const a=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(Me.timestamp)},c=()=>{for(const p of r)p.notify()},u=()=>{ne.read(a,!1,!0),ne.read(l,!1,!0),ne.update(c,!1,!0)};Ji.set(t,u);const f=Fm(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&Bm.set(t,s3(t,u)),f.addEventListener("scroll",u,{passive:!0})}const s=Ji.get(t);return ne.read(s,!1,!0),()=>{var a;Yt(s);const l=Sc.get(t);if(!l||(l.delete(o),l.size))return;const c=Ji.get(t);Ji.delete(t),c&&(Fm(t).removeEventListener("scroll",c),(a=Bm.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function Ry(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return ne.update(r,!0),()=>Yt(r)}function w3({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Bf(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const bc=new Map;function zy({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),bc.has(t)||bc.set(t,{});const r=bc.get(t);return r[n]||(r[n]=F1()?new ScrollTimeline({source:t,axis:n}):w3({source:t,axis:n})),r[n]}function S3(e){return e.length===2}function Dy(e){return e&&(e.target||e.offset)}function b3(e,t){return S3(e)||Dy(t)?Bf(n=>{e(n[t.axis].progress,n)},t):Ry(e,zy(t))}function T3(e,t){if(Dy(t))return e.pause(),Bf(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=zy(t);return e.attachTimeline(n,r=>(r.pause(),Ry(i=>{r.time=r.duration*i},n)))}}function C3(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?b3(e,r):T3(e,r)}function $m(e,t){Nb(!!(!t||t.current))}const P3=()=>({scrollX:Qt(0),scrollY:Qt(0),scrollXProgress:Qt(0),scrollYProgress:Qt(0)});function E3({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=_i(P3);return(n?bl:C.useEffect)(()=>($m("target",t),$m("container",e),C3((s,{x:a,y:l})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const j3={some:0,all:1};function k3(e,t,{root:n,margin:r,amount:i="some"}={}){const o=Iy(e),s=new WeakMap,a=c=>{c.forEach(u=>{const f=s.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const p=t(u);typeof p=="function"?s.set(u.target,p):l.unobserve(u.target)}else f&&(f(u),s.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:r,threshold:typeof i=="number"?i:j3[i]});return o.forEach(c=>l.observe(c)),()=>l.disconnect()}function _y(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,s]=C.useState(!1);return C.useEffect(()=>{if(!e.current||i&&o)return;const a=()=>(s(!0),i?void 0:()=>s(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return k3(e.current,a,l)},[t,e,n,i,r]),o}var Vy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hm=q.createContext&&q.createContext(Vy),A3=["attr","size","title"];function M3(e,t){if(e==null)return{};var n=L3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L3(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(this,arguments)}function Gm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gm(Object(n),!0).forEach(function(r){O3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O3(e,t,n){return t=I3(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I3(e){var t=R3(e,"string");return typeof t=="symbol"?t:t+""}function R3(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ny(e){return e&&e.map((t,n)=>q.createElement(t.tag,Fa({key:n},t.attr),Ny(t.child)))}function se(e){return t=>q.createElement(z3,Ba({attr:Fa({},e.attr)},t),Ny(e.child))}function z3(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=M3(e,A3),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),q.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Fa(Fa({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&q.createElement("title",null,o),e.children)};return Hm!==void 0?q.createElement(Hm.Consumer,null,n=>t(n)):t(Vy)}function Um(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function By(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function sn(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function ct(e){return se({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function Wm(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function D3(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Ym(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function qm(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Km(e){return se({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function jt(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function kt(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function _3(e){return se({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function an(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function ln(e){return se({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function At(e){return se({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Fy={exports:{}},V3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",N3=V3,B3=N3;function $y(){}function Hy(){}Hy.resetWarningCache=$y;var F3=function(){function e(r,i,o,s,a,l){if(l!==B3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hy,resetWarningCache:$y};return n.PropTypes=n,n};Fy.exports=F3();var $3=Fy.exports;const he=Oi($3);function H3(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Gy=C,G3=H3(Gy);function Jm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U3(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var W3=!!(typeof window<"u"&&window.document&&window.document.createElement);function Y3(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],a;function l(){a=e(s.map(function(u){return u.props})),c.canUseDOM?t(a):n&&(a=n(a))}var c=function(u){U3(f,u);function f(){return u.apply(this,arguments)||this}f.peek=function(){return a},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=a;return a=void 0,s=[],y};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){s.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var y=s.indexOf(this);s.splice(y,1),l()},p.render=function(){return G3.createElement(o,this.props)},f}(Gy.PureComponent);return Jm(c,"displayName","SideEffect("+r(o)+")"),Jm(c,"canUseDOM",W3),c}}var q3=Y3;const K3=Oi(q3);var J3=typeof Element<"u",X3=typeof Map=="function",Q3=typeof Set=="function",Z3=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ea(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ea(e[r],t[r]))return!1;return!0}var o;if(X3&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ea(r.value[1],t.get(r.value[0])))return!1;return!0}if(Q3&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Z3&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(J3&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ea(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var eE=function(t,n){try{return ea(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const tE=Oi(eE);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Xm=Object.getOwnPropertySymbols,nE=Object.prototype.hasOwnProperty,rE=Object.prototype.propertyIsEnumerable;function iE(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function oE(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var sE=oE()?Object.assign:function(e,t){for(var n,r=iE(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)nE.call(n,s)&&(r[s]=n[s]);if(Xm){i=Xm(n);for(var a=0;a<i.length;a++)rE.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};const aE=Oi(sE);var Pr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Y).map(function(e){return Y[e]});var me={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},$a={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},qo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},lE=Object.keys($a).reduce(function(e,t){return e[$a[t]]=t,e},{}),cE=[Y.NOSCRIPT,Y.SCRIPT,Y.STYLE],$t="data-react-helmet",uE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dE=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},fE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pE=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Qm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},hE=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Ku=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},mE=function(t){var n=hi(t,Y.TITLE),r=hi(t,qo.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=hi(t,qo.DEFAULT_TITLE);return n||i||void 0},gE=function(t){return hi(t,qo.ON_CHANGE_CLIENT_STATE)||function(){}},Tc=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return Ze({},r,i)},{})},vE=function(t,n){return n.filter(function(r){return typeof r[Y.BASE]<"u"}).map(function(r){return r[Y.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var a=o[s],l=a.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},Xi=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&SE("Helmet: "+t+' should be of type "Array". Instead found type "'+uE(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,s){var a={};s.filter(function(p){for(var v=void 0,y=Object.keys(p),x=0;x<y.length;x++){var S=y[x],g=S.toLowerCase();n.indexOf(g)!==-1&&!(v===me.REL&&p[v].toLowerCase()==="canonical")&&!(g===me.REL&&p[g].toLowerCase()==="stylesheet")&&(v=g),n.indexOf(S)!==-1&&(S===me.INNER_HTML||S===me.CSS_TEXT||S===me.ITEM_PROP)&&(v=S)}if(!v||!p[v])return!1;var h=p[v].toLowerCase();return i[v]||(i[v]={}),a[v]||(a[v]={}),i[v][h]?!1:(a[v][h]=!0,!0)}).reverse().forEach(function(p){return o.push(p)});for(var l=Object.keys(a),c=0;c<l.length;c++){var u=l[c],f=aE({},i[u],a[u]);i[u]=f}return o},[]).reverse()},hi=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},yE=function(t){return{baseTag:vE([me.HREF,me.TARGET],t),bodyAttributes:Tc(Pr.BODY,t),defer:hi(t,qo.DEFER),encode:hi(t,qo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Tc(Pr.HTML,t),linkTags:Xi(Y.LINK,[me.REL,me.HREF],t),metaTags:Xi(Y.META,[me.NAME,me.CHARSET,me.HTTPEQUIV,me.PROPERTY,me.ITEM_PROP],t),noscriptTags:Xi(Y.NOSCRIPT,[me.INNER_HTML],t),onChangeClientState:gE(t),scriptTags:Xi(Y.SCRIPT,[me.SRC,me.INNER_HTML],t),styleTags:Xi(Y.STYLE,[me.CSS_TEXT],t),title:mE(t),titleAttributes:Tc(Pr.TITLE,t)}},Ju=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){Ju(t)},0)}}(),Zm=function(t){return clearTimeout(t)},xE=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ju:global.requestAnimationFrame||Ju,wE=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Zm:global.cancelAnimationFrame||Zm,SE=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Qi=null,bE=function(t){Qi&&wE(Qi),t.defer?Qi=xE(function(){e0(t,function(){Qi=null})}):(e0(t),Qi=null)},e0=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,s=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,p=t.title,v=t.titleAttributes;Xu(Y.BODY,i),Xu(Y.HTML,o),TE(p,v);var y={baseTag:Fr(Y.BASE,r),linkTags:Fr(Y.LINK,s),metaTags:Fr(Y.META,a),noscriptTags:Fr(Y.NOSCRIPT,l),scriptTags:Fr(Y.SCRIPT,u),styleTags:Fr(Y.STYLE,f)},x={},S={};Object.keys(y).forEach(function(g){var h=y[g],m=h.newTags,w=h.oldTags;m.length&&(x[g]=m),w.length&&(S[g]=y[g].oldTags)}),n&&n(),c(t,x,S)},Uy=function(t){return Array.isArray(t)?t.join(""):t},TE=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Uy(t)),Xu(Y.TITLE,n)},Xu=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute($t),o=i?i.split(","):[],s=[].concat(o),a=Object.keys(n),l=0;l<a.length;l++){var c=a[l],u=n[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),o.indexOf(c)===-1&&o.push(c);var f=s.indexOf(c);f!==-1&&s.splice(f,1)}for(var p=s.length-1;p>=0;p--)r.removeAttribute(s[p]);o.length===s.length?r.removeAttribute($t):r.getAttribute($t)!==a.join(",")&&r.setAttribute($t,a.join(","))}},Fr=function(t,n){var r=document.head||document.querySelector(Y.HEAD),i=r.querySelectorAll(t+"["+$t+"]"),o=Array.prototype.slice.call(i),s=[],a=void 0;return n&&n.length&&n.forEach(function(l){var c=document.createElement(t);for(var u in l)if(l.hasOwnProperty(u))if(u===me.INNER_HTML)c.innerHTML=l.innerHTML;else if(u===me.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[u]>"u"?"":l[u];c.setAttribute(u,f)}c.setAttribute($t,"true"),o.some(function(p,v){return a=v,c.isEqualNode(p)})?o.splice(a,1):s.push(c)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),s.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:s}},Wy=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},CE=function(t,n,r,i){var o=Wy(r),s=Uy(n);return o?"<"+t+" "+$t+'="true" '+o+">"+Ku(s,i)+"</"+t+">":"<"+t+" "+$t+'="true">'+Ku(s,i)+"</"+t+">"},PE=function(t,n,r){return n.reduce(function(i,o){var s=Object.keys(o).filter(function(c){return!(c===me.INNER_HTML||c===me.CSS_TEXT)}).reduce(function(c,u){var f=typeof o[u]>"u"?u:u+'="'+Ku(o[u],r)+'"';return c?c+" "+f:f},""),a=o.innerHTML||o.cssText||"",l=cE.indexOf(t)===-1;return i+"<"+t+" "+$t+'="true" '+s+(l?"/>":">"+a+"</"+t+">")},"")},Yy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[$a[i]||i]=t[i],r},n)},EE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[lE[i]||i]=t[i],r},n)},jE=function(t,n,r){var i,o=(i={key:n},i[$t]=!0,i),s=Yy(r,o);return[q.createElement(Y.TITLE,s,n)]},kE=function(t,n){return n.map(function(r,i){var o,s=(o={key:i},o[$t]=!0,o);return Object.keys(r).forEach(function(a){var l=$a[a]||a;if(l===me.INNER_HTML||l===me.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[l]=r[a]}),q.createElement(t,s)})},cn=function(t,n,r){switch(t){case Y.TITLE:return{toComponent:function(){return jE(t,n.title,n.titleAttributes)},toString:function(){return CE(t,n.title,n.titleAttributes,r)}};case Pr.BODY:case Pr.HTML:return{toComponent:function(){return Yy(n)},toString:function(){return Wy(n)}};default:return{toComponent:function(){return kE(t,n)},toString:function(){return PE(t,n,r)}}}},qy=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,s=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.scriptTags,u=t.styleTags,f=t.title,p=f===void 0?"":f,v=t.titleAttributes;return{base:cn(Y.BASE,n,i),bodyAttributes:cn(Pr.BODY,r,i),htmlAttributes:cn(Pr.HTML,o,i),link:cn(Y.LINK,s,i),meta:cn(Y.META,a,i),noscript:cn(Y.NOSCRIPT,l,i),script:cn(Y.SCRIPT,c,i),style:cn(Y.STYLE,u,i),title:cn(Y.TITLE,{title:p,titleAttributes:v},i)}},AE=function(t){var n,r;return r=n=function(i){pE(o,i);function o(){return dE(this,o),hE(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(a){return!tE(this.props,a)},o.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case Y.SCRIPT:case Y.NOSCRIPT:return{innerHTML:l};case Y.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(a){var l,c=a.child,u=a.arrayTypeChildren,f=a.newChildProps,p=a.nestedChildren;return Ze({},u,(l={},l[c.type]=[].concat(u[c.type]||[],[Ze({},f,this.mapNestedChildrenToProps(c,p))]),l))},o.prototype.mapObjectTypeChildren=function(a){var l,c,u=a.child,f=a.newProps,p=a.newChildProps,v=a.nestedChildren;switch(u.type){case Y.TITLE:return Ze({},f,(l={},l[u.type]=v,l.titleAttributes=Ze({},p),l));case Y.BODY:return Ze({},f,{bodyAttributes:Ze({},p)});case Y.HTML:return Ze({},f,{htmlAttributes:Ze({},p)})}return Ze({},f,(c={},c[u.type]=Ze({},p),c))},o.prototype.mapArrayTypeChildrenToProps=function(a,l){var c=Ze({},l);return Object.keys(a).forEach(function(u){var f;c=Ze({},c,(f={},f[u]=a[u],f))}),c},o.prototype.warnOnInvalidChildren=function(a,l){return!0},o.prototype.mapChildrenToProps=function(a,l){var c=this,u={};return q.Children.forEach(a,function(f){if(!(!f||!f.props)){var p=f.props,v=p.children,y=Qm(p,["children"]),x=EE(y);switch(c.warnOnInvalidChildren(f,v),f.type){case Y.LINK:case Y.META:case Y.NOSCRIPT:case Y.SCRIPT:case Y.STYLE:u=c.flattenArrayTypeChildren({child:f,arrayTypeChildren:u,newChildProps:x,nestedChildren:v});break;default:l=c.mapObjectTypeChildren({child:f,newProps:l,newChildProps:x,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},o.prototype.render=function(){var a=this.props,l=a.children,c=Qm(a,["children"]),u=Ze({},c);return l&&(u=this.mapChildrenToProps(l,u)),q.createElement(t,u)},fE(o,null,[{key:"canUseDOM",set:function(a){t.canUseDOM=a}}]),o}(q.Component),n.propTypes={base:he.object,bodyAttributes:he.object,children:he.oneOfType([he.arrayOf(he.node),he.node]),defaultTitle:he.string,defer:he.bool,encodeSpecialCharacters:he.bool,htmlAttributes:he.object,link:he.arrayOf(he.object),meta:he.arrayOf(he.object),noscript:he.arrayOf(he.object),onChangeClientState:he.func,script:he.arrayOf(he.object),style:he.arrayOf(he.object),title:he.string,titleAttributes:he.object,titleTemplate:he.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=qy({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},ME=function(){return null},LE=K3(yE,bE,qy)(ME),jn=AE(LE);jn.renderStatic=jn.rewind;var We=function(){return We=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},We.apply(this,arguments)};function Ei(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var fe="-ms-",bo="-moz-",oe="-webkit-",Ky="comm",Cl="rule",Ff="decl",OE="@import",Jy="@keyframes",IE="@layer",Xy=Math.abs,$f=String.fromCharCode,Qu=Object.assign;function RE(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Qy(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function ta(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function ji(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function Zy(e){return e.length}function so(e,t){return t.push(e),e}function zE(e,t){return e.map(t).join("")}function t0(e,t){return e.filter(function(n){return!fn(n,t)})}var Pl=1,ki=1,ex=0,It=0,Pe=0,Vi="";function El(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pl,column:ki,length:s,return:"",siblings:a}}function In(e,t){return Qu(El("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $r(e){for(;e.root;)e=In(e.root,{children:[e]});so(e,e.siblings)}function DE(){return Pe}function _E(){return Pe=It>0?Re(Vi,--It):0,ki--,Pe===10&&(ki=1,Pl--),Pe}function Ut(){return Pe=It<ex?Re(Vi,It++):0,ki++,Pe===10&&(ki=1,Pl++),Pe}function Er(){return Re(Vi,It)}function na(){return It}function jl(e,t){return ji(Vi,e,t)}function Zu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function VE(e){return Pl=ki=1,ex=Jt(Vi=e),It=0,[]}function NE(e){return Vi="",e}function Cc(e){return Qy(jl(It-1,ed(e===91?e+2:e===40?e+1:e)))}function BE(e){for(;(Pe=Er())&&Pe<33;)Ut();return Zu(e)>2||Zu(Pe)>3?"":" "}function FE(e,t){for(;--t&&Ut()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return jl(e,na()+(t<6&&Er()==32&&Ut()==32))}function ed(e){for(;Ut();)switch(Pe){case e:return It;case 34:case 39:e!==34&&e!==39&&ed(Pe);break;case 40:e===41&&ed(e);break;case 92:Ut();break}return It}function $E(e,t){for(;Ut()&&e+Pe!==57;)if(e+Pe===84&&Er()===47)break;return"/*"+jl(t,It-1)+"*"+$f(e===47?e:Ut())}function HE(e){for(;!Zu(Er());)Ut();return jl(e,It)}function GE(e){return NE(ra("",null,null,null,[""],e=VE(e),0,[0],e))}function ra(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,f=s,p=0,v=0,y=0,x=1,S=1,g=1,h=0,m="",w=i,b=o,T=r,P=m;S;)switch(y=h,h=Ut()){case 40:if(y!=108&&Re(P,f-1)==58){ta(P+=K(Cc(h),"&","&\f"),"&\f",Xy(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=Cc(h);break;case 9:case 10:case 13:case 32:P+=BE(y);break;case 92:P+=FE(na()-1,7);continue;case 47:switch(Er()){case 42:case 47:so(UE($E(Ut(),na()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[c++]=Jt(P)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+u:g==-1&&(P=K(P,/\f/g,"")),v>0&&Jt(P)-f&&so(v>32?r0(P+";",r,n,f-1,l):r0(K(P," ","")+";",r,n,f-2,l),l);break;case 59:P+=";";default:if(so(T=n0(P,t,n,c,u,i,a,m,w=[],b=[],f,o),o),h===123)if(u===0)ra(P,t,T,T,w,o,f,a,b);else switch(p===99&&Re(P,3)===110?100:p){case 100:case 108:case 109:case 115:ra(e,T,T,r&&so(n0(e,T,T,0,0,i,a,m,i,w=[],f,b),b),i,b,f,a,r?w:b);break;default:ra(P,T,T,T,[""],b,0,a,b)}}c=u=v=0,x=g=1,m=P="",f=s;break;case 58:f=1+Jt(P),v=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&_E()==125)continue}switch(P+=$f(h),h*x){case 38:g=u>0?1:(P+="\f",-1);break;case 44:a[c++]=(Jt(P)-1)*g,g=1;break;case 64:Er()===45&&(P+=Cc(Ut())),p=Er(),u=f=Jt(m=P+=HE(na())),h++;break;case 45:y===45&&Jt(P)==2&&(x=0)}}return o}function n0(e,t,n,r,i,o,s,a,l,c,u,f){for(var p=i-1,v=i===0?o:[""],y=Zy(v),x=0,S=0,g=0;x<r;++x)for(var h=0,m=ji(e,p+1,p=Xy(S=s[x])),w=e;h<y;++h)(w=Qy(S>0?v[h]+" "+m:K(m,/&\f/g,v[h])))&&(l[g++]=w);return El(e,t,n,i===0?Cl:a,l,c,u,f)}function UE(e,t,n,r){return El(e,t,n,Ky,$f(DE()),ji(e,2,-2),0,r)}function r0(e,t,n,r,i){return El(e,t,n,Ff,ji(e,0,r),ji(e,r+1,-1),r,i)}function tx(e,t,n){switch(RE(e,t)){case 5103:return oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oe+e+e;case 4789:return bo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return oe+e+bo+e+fe+e+e;case 5936:switch(Re(e,t+11)){case 114:return oe+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return oe+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return oe+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return oe+e+fe+e+e;case 6165:return oe+e+fe+"flex-"+e+e;case 5187:return oe+e+K(e,/(\w+).+(:[^]+)/,oe+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return oe+e+fe+"flex-item-"+K(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":fe+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return oe+e+fe+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return oe+e+fe+K(e,"shrink","negative")+e;case 5292:return oe+e+fe+K(e,"basis","preferred-size")+e;case 6060:return oe+"box-"+K(e,"-grow","")+oe+e+fe+K(e,"grow","positive")+e;case 4554:return oe+K(e,/([^-])(transform)/g,"$1"+oe+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,oe+"$1"),/(image-set)/,oe+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,oe+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,oe+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oe+e+e;case 4200:if(!fn(e,/flex-|baseline/))return fe+"grid-column-align"+ji(e,t)+e;break;case 2592:case 3360:return fe+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,fn(r.props,/grid-\w+-end/)})?~ta(e+(n=n[t].value),"span",0)?e:fe+K(e,"-start","")+e+fe+"grid-row-span:"+(~ta(n,"span",0)?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":fe+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return fn(r.props,/grid-\w+-start/)})?e:fe+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+oe+"$2-$3$1"+bo+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ta(e,"stretch",0)?tx(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return fe+i+":"+o+c+(s?fe+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(Re(e,t+6)===121)return K(e,":",":"+oe)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oe+(Re(e,14)===45?"inline-":"")+"box$3$1"+oe+"$2$3$1"+fe+"$2box$3")+e;case 100:return K(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function Ha(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function WE(e,t,n,r){switch(e.type){case IE:if(e.children.length)break;case OE:case Ff:return e.return=e.return||e.value;case Ky:return"";case Jy:return e.return=e.value+"{"+Ha(e.children,r)+"}";case Cl:if(!Jt(e.value=e.props.join(",")))return""}return Jt(n=Ha(e.children,r))?e.return=e.value+"{"+n+"}":""}function YE(e){var t=Zy(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function qE(e){return function(t){t.root||(t=t.return)&&e(t)}}function KE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ff:e.return=tx(e.value,e.length,n);return;case Jy:return Ha([In(e,{value:K(e.value,"@","@"+oe)})],r);case Cl:if(e.length)return zE(n=e.props,function(i){switch(fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$r(In(e,{props:[K(i,/:(read-\w+)/,":"+bo+"$1")]})),$r(In(e,{props:[i]})),Qu(e,{props:t0(n,r)});break;case"::placeholder":$r(In(e,{props:[K(i,/:(plac\w+)/,":"+oe+"input-$1")]})),$r(In(e,{props:[K(i,/:(plac\w+)/,":"+bo+"$1")]})),$r(In(e,{props:[K(i,/:(plac\w+)/,fe+"input-$1")]})),$r(In(e,{props:[i]})),Qu(e,{props:t0(n,r)});break}return""})}}var JE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lt={},Ai=typeof process<"u"&&lt!==void 0&&(lt.REACT_APP_SC_ATTR||lt.SC_ATTR)||"data-styled",nx="active",rx="data-styled-version",kl="6.1.13",Hf=`/*!sc*/
`,Ga=typeof window<"u"&&"HTMLElement"in window,XE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==""?lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&lt!==void 0&&lt.SC_DISABLE_SPEEDY!==void 0&&lt.SC_DISABLE_SPEEDY!==""&&lt.SC_DISABLE_SPEEDY!=="false"&&lt.SC_DISABLE_SPEEDY),QE={},Al=Object.freeze([]),Mi=Object.freeze({});function ix(e,t,n){return n===void 0&&(n=Mi),e.theme!==n.theme&&e.theme||t||n.theme}var ox=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ZE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e4=/(^-|-$)/g;function i0(e){return e.replace(ZE,"-").replace(e4,"")}var t4=/(a)(d)/gi,Ls=52,o0=function(e){return String.fromCharCode(e+(e>25?39:97))};function td(e){var t,n="";for(t=Math.abs(e);t>Ls;t=t/Ls|0)n=o0(t%Ls)+n;return(o0(t%Ls)+n).replace(t4,"$1-$2")}var Pc,sx=5381,ai=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ax=function(e){return ai(sx,e)};function Gf(e){return td(ax(e)>>>0)}function n4(e){return e.displayName||e.name||"Component"}function Ec(e){return typeof e=="string"&&!0}var lx=typeof Symbol=="function"&&Symbol.for,cx=lx?Symbol.for("react.memo"):60115,r4=lx?Symbol.for("react.forward_ref"):60112,i4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ux={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s4=((Pc={})[r4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pc[cx]=ux,Pc);function s0(e){return("type"in(t=e)&&t.type.$$typeof)===cx?ux:"$$typeof"in e?s4[e.$$typeof]:i4;var t}var a4=Object.defineProperty,l4=Object.getOwnPropertyNames,a0=Object.getOwnPropertySymbols,c4=Object.getOwnPropertyDescriptor,u4=Object.getPrototypeOf,l0=Object.prototype;function dx(e,t,n){if(typeof t!="string"){if(l0){var r=u4(t);r&&r!==l0&&dx(e,r,n)}var i=l4(t);a0&&(i=i.concat(a0(t)));for(var o=s0(e),s=s0(t),a=0;a<i.length;++a){var l=i[a];if(!(l in o4||n&&n[l]||s&&l in s||o&&l in o)){var c=c4(t,l);try{a4(e,l,c)}catch{}}}}return e}function Li(e){return typeof e=="function"}function Uf(e){return typeof e=="object"&&"styledComponentId"in e}function Sr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ua(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ko(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nd(e,t,n){if(n===void 0&&(n=!1),!n&&!Ko(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nd(e[r],t[r]);else if(Ko(t))for(var r in t)e[r]=nd(e[r],t[r]);return e}function Wf(e,t){Object.defineProperty(e,"toString",{value:t})}function ss(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var d4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ss(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Hf);return n},e}(),ia=new Map,Wa=new Map,oa=1,Os=function(e){if(ia.has(e))return ia.get(e);for(;Wa.has(oa);)oa++;var t=oa++;return ia.set(e,t),Wa.set(t,e),t},f4=function(e,t){oa=t+1,ia.set(e,t),Wa.set(t,e)},p4="style[".concat(Ai,"][").concat(rx,'="').concat(kl,'"]'),h4=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m4=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},g4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hf),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(h4);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(f4(u,c),m4(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},c0=function(e){for(var t=document.querySelectorAll(p4),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ai)!==nx&&(g4(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function v4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ai,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ai,nx),r.setAttribute(rx,kl);var s=v4();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},y4=function(){function e(t){this.element=fx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ss(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),x4=function(){function e(t){this.element=fx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),w4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),u0=Ga,S4={isServer:!Ga,useCSSOMInjection:!XE},Ya=function(){function e(t,n,r){t===void 0&&(t=Mi),n===void 0&&(n={});var i=this;this.options=We(We({},S4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ga&&u0&&(u0=!1,c0(this)),Wf(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(f){var p=function(g){return Wa.get(g)}(f);if(p===void 0)return"continue";var v=o.names.get(p),y=s.getGroup(f);if(v===void 0||!v.size||y.length===0)return"continue";var x="".concat(Ai,".g").concat(f,'[id="').concat(p,'"]'),S="";v!==void 0&&v.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(Hf)},u=0;u<a;u++)c(u);return l}(i)})}return e.registerId=function(t){return Os(t)},e.prototype.rehydrate=function(){!this.server&&Ga&&c0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(We(We({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new w4(i):r?new y4(i):new x4(i)}(this.options),new d4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),b4=/&/g,T4=/^\s*\/\/.*$/gm;function px(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=px(n.children,t)),n})}function C4(e){var t,n,r,i=Mi,o=i.options,s=o===void 0?Mi:o,a=i.plugins,l=a===void 0?Al:a,c=function(p,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===Cl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(b4,n).replace(r,c))}),s.prefix&&u.push(KE),u.push(WE);var f=function(p,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(T4,""),g=GE(y||v?"".concat(y," ").concat(v," { ").concat(S," }"):S);s.namespace&&(g=px(g,s.namespace));var h=[];return Ha(g,YE(u.concat(qE(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,v){return v.name||ss(15),ai(p,v.name)},sx).toString():"",f}var P4=new Ya,rd=C4(),hx=q.createContext({shouldForwardProp:void 0,styleSheet:P4,stylis:rd});hx.Consumer;q.createContext(void 0);function id(){return C.useContext(hx)}var mx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=rd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wf(this,function(){throw ss(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rd),this.name+t.hash},e}(),E4=function(e){return e>="A"&&e<="Z"};function d0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;E4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gx=function(e){return e==null||e===!1||e===""},vx=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gx(o)&&(Array.isArray(o)&&o.isCss||Li(o)?r.push("".concat(d0(i),":"),o,";"):Ko(o)?r.push.apply(r,Ei(Ei(["".concat(i," {")],vx(o),!1),["}"],!1)):r.push("".concat(d0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in JE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qn(e,t,n,r){if(gx(e))return[];if(Uf(e))return[".".concat(e.styledComponentId)];if(Li(e)){if(!Li(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Qn(i,t,n,r)}var o;return e instanceof mx?n?(e.inject(n,r),[e.getName(r)]):[e]:Ko(e)?vx(e):Array.isArray(e)?Array.prototype.concat.apply(Al,e.map(function(s){return Qn(s,t,n,r)})):[e.toString()]}function yx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Li(n)&&!Uf(n))return!1}return!0}var j4=ax(kl),k4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yx(t),this.componentId=n,this.baseHash=ai(j4,n),this.baseStyle=r,Ya.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Sr(i,this.staticRulesId);else{var o=Ua(Qn(this.rules,t,n,r)),s=td(ai(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Sr(i,s),this.staticRulesId=s}else{for(var l=ai(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var p=Ua(Qn(f,t,n,r));l=ai(l,p+u),c+=p}}if(c){var v=td(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Sr(i,v)}}return i},e}(),Yf=q.createContext(void 0);Yf.Consumer;var jc={};function A4(e,t,n){var r=Uf(e),i=e,o=!Ec(e),s=t.attrs,a=s===void 0?Al:s,l=t.componentId,c=l===void 0?function(w,b){var T=typeof w!="string"?"sc":i0(w);jc[T]=(jc[T]||0)+1;var P="".concat(T,"-").concat(Gf(kl+T+jc[T]));return b?"".concat(b,"-").concat(P):P}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(w){return Ec(w)?"styled.".concat(w):"Styled(".concat(n4(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(i0(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(w,b){return x(w,b)&&S(w,b)}}else y=x}var g=new k4(n,p,r?i.componentStyle:void 0);function h(w,b){return function(T,P,j){var A=T.attrs,k=T.componentStyle,R=T.defaultProps,B=T.foldedComponentIds,_=T.styledComponentId,H=T.target,W=q.useContext(Yf),ie=id(),ee=T.shouldForwardProp||ie.shouldForwardProp,L=ix(P,W,R)||Mi,V=function(xt,De,wt){for(var M,I=We(We({},De),{className:void 0,theme:wt}),D=0;D<xt.length;D+=1){var O=Li(M=xt[D])?M(I):M;for(var X in O)I[X]=X==="className"?Sr(I[X],O[X]):X==="style"?We(We({},I[X]),O[X]):O[X]}return De.className&&(I.className=Sr(I.className,De.className)),I}(A,P,L),N=V.as||H,J={};for(var te in V)V[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&V.theme===L||(te==="forwardedAs"?J.as=V.forwardedAs:ee&&!ee(te,N)||(J[te]=V[te]));var ot=function(xt,De){var wt=id(),M=xt.generateAndInjectStyles(De,wt.styleSheet,wt.stylis);return M}(k,V),st=Sr(B,_);return ot&&(st+=" "+ot),V.className&&(st+=" "+V.className),J[Ec(N)&&!ox.has(N)?"class":"className"]=st,J.ref=j,C.createElement(N,J)}(m,w,b)}h.displayName=f;var m=q.forwardRef(h);return m.attrs=v,m.componentStyle=g,m.displayName=f,m.shouldForwardProp=y,m.foldedComponentIds=r?Sr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var j=0,A=T;j<A.length;j++)nd(b,A[j],!0);return b}({},i.defaultProps,w):w}}),Wf(m,function(){return".".concat(m.styledComponentId)}),o&&dx(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function f0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var p0=function(e){return Object.assign(e,{isCss:!0})};function qf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Li(e)||Ko(e))return p0(Qn(f0(Al,Ei([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qn(r):p0(Qn(f0(r,t)))}function od(e,t,n){if(n===void 0&&(n=Mi),!t)throw ss(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,qf.apply(void 0,Ei([i],o,!1)))};return r.attrs=function(i){return od(e,t,We(We({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return od(e,t,We(We({},n),i))},r}var xx=function(e){return od(A4,e)},E=xx;ox.forEach(function(e){E[e]=xx(e)});var M4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yx(t),Ya.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ua(Qn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ya.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function wx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qf.apply(void 0,Ei([e],t,!1)),i="sc-global-".concat(Gf(JSON.stringify(r))),o=new M4(r,i),s=function(l){var c=id(),u=q.useContext(Yf),f=q.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,l,c.styleSheet,u,c.stylis),q.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,f,p){if(o.isStatic)o.renderStyles(l,QE,u,p);else{var v=We(We({},c),{theme:ix(c,f,s.defaultProps)});o.renderStyles(l,v,u,p)}}return q.memo(s)}function as(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ua(qf.apply(void 0,Ei([e],t,!1))),i=Gf(r);return new mx(i,r)}const L4=E(G.video)`
    width: 100%;
    object-fit: cover;
    height: 95vh;
    position: relative;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 0 0 1000px 1000px / 100px 100px;
    clip-path: circle(0% at 50% 50%);

    @media (max-width: 768px){
        height: 95dvh ;
        border-radius: 0 0 500px 500px / 50px 50px;
    }
`,O4=()=>d.jsxs(L4,{autoPlay:!0,loop:!0,muted:!0,initial:{clipPath:"circle(0% at 50% 50%)"},animate:{clipPath:"circle(100% at 50% 50%)"},transition:{duration:1,ease:"easeInOut"},children:[d.jsx("source",{src:"/home_play.mp4",type:"video/mp4"}),"Seu navegador não suporta o elemento de vídeo."]});function h0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Kf(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:h0(t[n])&&h0(e[n])&&Object.keys(t[n]).length>0&&Kf(e[n],t[n])})}const Sx={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bn(){const e=typeof document<"u"?document:{};return Kf(e,Sx),e}const I4={document:Sx,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function yt(){const e=typeof window<"u"?window:{};return Kf(e,I4),e}function R4(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function z4(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function sd(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function qa(){return Date.now()}function D4(e){const t=yt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function _4(e,t){t===void 0&&(t="x");const n=yt();let r,i,o;const s=D4(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Is(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function V4(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function dt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!V4(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Is(e[a])&&Is(r[a])?r[a].__swiper__?e[a]=r[a]:dt(e[a],r[a]):!Is(e[a])&&Is(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:dt(e[a],r[a])):e[a]=r[a])}}}return e}function Rs(e,t,n){e.style.setProperty(t,n)}function bx(e){let{swiper:t,targetPosition:n,side:r}=e;const i=yt(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",u=(p,v)=>c==="next"&&p>=v||c==="prev"&&p<=v,f=()=>{a=new Date().getTime(),s===null&&(s=a);const p=Math.max(Math.min((a-s)/l,1),0),v=.5-Math.cos(p*Math.PI)/2;let y=o+v*(n-o);if(u(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),u(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Jf(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function Zt(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function N4(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function Ka(e){try{console.warn(e);return}catch{}}function Jo(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:R4(t)),n}function B4(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function F4(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function $n(e,t){return yt().getComputedStyle(e,null).getPropertyValue(t)}function Ja(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Tx(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ad(e,t,n){const r=yt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Le(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function $4(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let kc;function H4(){const e=yt(),t=bn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Cx(){return kc||(kc=H4()),kc}let Ac;function G4(e){let{userAgent:t}=e===void 0?{}:e;const n=Cx(),r=yt(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const f=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&y&&n.touch&&x.indexOf(`${a}x${l}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),y=!1),c&&!v&&(s.os="android",s.android=!0),(u||p||f)&&(s.os="ios",s.ios=!0),s}function Px(e){return e===void 0&&(e={}),Ac||(Ac=G4(e)),Ac}let Mc;function U4(){const e=yt(),t=Px();let n=!1;function r(){const a=e.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(e.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function W4(){return Mc||(Mc=U4()),Mc}function Y4(e){let{swiper:t,on:n,emit:r}=e;const i=yt();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(f=>{s=i.requestAnimationFrame(()=>{const{width:p,height:v}=t;let y=p,x=v;f.forEach(S=>{let{contentBoxSize:g,contentRect:h,target:m}=S;m&&m!==t.el||(y=h?h.width:(g[0]||g).inlineSize,x=h?h.height:(g[0]||g).blockSize)}),(y!==p||x!==v)&&a()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),n("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function q4(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=yt(),a=function(u,f){f===void 0&&(f={});const p=s.MutationObserver||s.WebkitMutationObserver,v=new p(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const x=function(){i("observerUpdate",y[0])};s.requestAnimationFrame?s.requestAnimationFrame(x):s.setTimeout(x,0)});v.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Tx(t.hostEl);for(let f=0;f<u.length;f+=1)a(u[f])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(u=>{u.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var K4={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function J4(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt($n(r,"padding-left")||0,10)-parseInt($n(r,"padding-right")||0,10),n=n-parseInt($n(r,"padding-top")||0,10)-parseInt($n(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function X4(){const e=this;function t(k,R){return parseFloat(k.getPropertyValue(e.getDirectionLabel(R))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=Zt(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:u.length;let p=[];const v=[],y=[];let x=n.slidesOffsetBefore;typeof x=="function"&&(x=n.slidesOffsetBefore.call(e));let S=n.slidesOffsetAfter;typeof S=="function"&&(S=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-x,b=0,T=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,u.forEach(k=>{s?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Rs(r,"--swiper-centered-offset-before",""),Rs(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let j;const A=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(k=>typeof n.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<f;k+=1){j=0;let R;if(u[k]&&(R=u[k]),P&&e.grid.updateSlide(k,R,u),!(u[k]&&$n(R,"display")==="none")){if(n.slidesPerView==="auto"){A&&(u[k].style[e.getDirectionLabel("width")]="");const B=getComputedStyle(R),_=R.style.transform,H=R.style.webkitTransform;if(_&&(R.style.transform="none"),H&&(R.style.webkitTransform="none"),n.roundLengths)j=e.isHorizontal()?ad(R,"width"):ad(R,"height");else{const W=t(B,"width"),ie=t(B,"padding-left"),ee=t(B,"padding-right"),L=t(B,"margin-left"),V=t(B,"margin-right"),N=B.getPropertyValue("box-sizing");if(N&&N==="border-box")j=W+L+V;else{const{clientWidth:J,offsetWidth:te}=R;j=W+ie+ee+L+V+(te-J)}}_&&(R.style.transform=_),H&&(R.style.webkitTransform=H),n.roundLengths&&(j=Math.floor(j))}else j=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(j=Math.floor(j)),u[k]&&(u[k].style[e.getDirectionLabel("width")]=`${j}px`);u[k]&&(u[k].swiperSlideSize=j),y.push(j),n.centeredSlides?(w=w+j/2+b/2+m,b===0&&k!==0&&(w=w-o/2-m),k===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&p.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&p.push(w),v.push(w),w=w+j+m),e.virtualSize+=j+m,b=j,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+S,s&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),P&&e.grid.updateWrapperSize(j,p),!n.centeredSlides){const k=[];for(let R=0;R<p.length;R+=1){let B=p[R];n.roundLengths&&(B=Math.floor(B)),p[R]<=e.virtualSize-o&&k.push(B)}p=k,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(l&&n.loop){const k=y[0]+m;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),B=k*n.slidesPerGroup;for(let _=0;_<R;_+=1)p.push(p[p.length-1]+B)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+k),v.push(v[v.length-1]+k),e.virtualSize+=k}if(p.length===0&&(p=[0]),m!==0){const k=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");u.filter((R,B)=>!n.cssMode||n.loop?!0:B!==u.length-1).forEach(R=>{R.style[k]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let k=0;y.forEach(B=>{k+=B+(m||0)}),k-=m;const R=k>o?k-o:0;p=p.map(B=>B<=0?-x:B>R?R+S:B)}if(n.centerInsufficientSlides){let k=0;y.forEach(B=>{k+=B+(m||0)}),k-=m;const R=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(k+R<o){const B=(o-k-R)/2;p.forEach((_,H)=>{p[H]=_-B}),v.forEach((_,H)=>{v[H]=_+B})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:v,slidesSizesGrid:y}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Rs(r,"--swiper-centered-offset-before",`${-p[0]}px`),Rs(r,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const k=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(B=>B+k),e.slidesGrid=e.slidesGrid.map(B=>B+R)}if(f!==c&&e.emit("slidesLengthChange"),p.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const k=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(k);f<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(k):R&&e.el.classList.remove(k)}}function Q4(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Z4(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const m0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function ej(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(s+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),p=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),v=-(s-u),y=v+t.slidesSizesGrid[l],x=v>=0&&v<=t.size-t.slidesSizesGrid[l],S=v>=0&&v<t.size-1||y>1&&y<=t.size||v<=0&&y>=t.size;S&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),m0(c,S,n.slideVisibleClass),m0(c,x,n.slideFullyVisibleClass),c.progress=i?-f:f,c.originalProgress=i?-p:p}}function tj(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:a}=t;const l=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,s=f||i>=1,u&&(i=0),f&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],v=t.slidesGrid[f],y=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=p?a=(x-p)/y:a=(x+y-v)/y,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const Lc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function nj(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,a=f=>Zt(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,c,u;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else s?(l=t.filter(f=>f.column===i)[0],u=t.filter(f=>f.column===i+1)[0],c=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(s||(u=F4(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=B4(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(f=>{Lc(f,f===l,n.slideActiveClass),Lc(f,f===u,n.slideNextClass),Lc(f,f===c,n.slidePrevClass)}),e.emitSlidesClasses()}const sa=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Oc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},ld=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,a=[s-t];a.push(...Array.from({length:t}).map((l,c)=>s+r+c)),e.slides.forEach((l,c)=>{a.includes(l.column)&&Oc(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const a=(s%n+n)%n;(a<i||a>o)&&Oc(e,a)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&Oc(e,s)};function rj(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function ij(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:a}=t;let l=e,c;const u=v=>{let y=v-t.virtual.slidesBefore;return y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),y};if(typeof l>"u"&&(l=rj(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);c=v+Math.floor((l-v)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===o&&!t.params.loop){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled&&i.loop)p=u(l);else if(f){const v=t.slides.filter(x=>x.column===l)[0];let y=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(y)&&(y=Math.max(t.slides.indexOf(v),0)),p=Math.floor(y/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?p=parseInt(v,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:a,snapIndex:c,previousRealIndex:s,realIndex:p,previousIndex:o,activeIndex:l}),t.initialized&&ld(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function oj(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let o=!1,s;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){o=!0,s=a;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var sj={updateSize:J4,updateSlides:X4,updateAutoHeight:Q4,updateSlidesOffset:Z4,updateSlidesProgress:ej,updateProgress:tj,updateSlidesClasses:nj,updateActiveIndex:ij,updateClickedSlide:oj};function aj(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=_4(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function lj(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function cj(){return-this.snapGrid[0]}function uj(){return-this.snapGrid[this.snapGrid.length-1]}function dj(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>l?u=l:r&&e<c?u=c:u=e,o.updateProgress(u),s.cssMode){const f=o.isHorizontal();if(t===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return bx({swiper:o,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var fj={getTranslate:aj,setTranslate:lj,minTranslate:cj,maxTranslate:uj,translateTo:dj};function pj(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ex(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function hj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ex({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function mj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ex({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var gj={setTransition:pj,transitionStart:hj,transitionEnd:mj};function vj(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:p,wrapperEl:v,enabled:y}=o;if(!y&&!r&&!i||o.destroyed||o.animating&&a.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,s);let S=x+Math.floor((s-x)/o.params.slidesPerGroup);S>=l.length&&(S=l.length-1);const g=-l[S];if(a.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const T=-Math.floor(g*100),P=Math.floor(c[b]*100),j=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?T>=P&&T<j-(j-P)/2?s=b:T>=P&&T<j&&(s=b+1):T>=P&&(s=b)}if(o.initialized&&s!==f&&(!o.allowSlideNext&&(p?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(f||0)!==s))return!1;s!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let h;s>f?h="next":s<f?h="prev":h="reset";const m=o.virtual&&o.params.virtual.enabled;if(!(m&&i)&&(p&&-g===o.translate||!p&&g===o.translate))return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(g),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(a.cssMode){const b=o.isHorizontal(),T=p?g:-g;if(t===0)m&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[b?"scrollLeft":"scrollTop"]=T})):v[b?"scrollLeft":"scrollTop"]=T,m&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return bx({swiper:o,targetPosition:T,side:b?"left":"top"}),!0;v.scrollTo({[b?"left":"top"]:T,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(T){!o||o.destroyed||T.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function yj(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let a;if(o){const p=s*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else a=i.getSlideIndexByData(s);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let f=l-a<u;if(c&&(f=f||a<Math.ceil(u/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(f=!1),f){const p=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?a+1:a-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(o){const p=s*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function xj(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function wj(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=a?r.translate:-r.translate;function p(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=p(f),y=o.map(g=>p(g));let x=o[y.indexOf(v)-1];if(typeof x>"u"&&i.cssMode){let g;o.forEach((h,m)=>{v>=h&&(g=m)}),typeof g<"u"&&(x=o[g>0?g-1:g])}let S=0;if(typeof x<"u"&&(S=s.indexOf(x),S<0&&(S=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(S=S-r.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(S,e,t,n)}),!0;return r.slideTo(S,e,t,n)}function Sj(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function bj(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function Tj(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Zt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),sd(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Zt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),sd(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Cj={slideTo:vj,slideToLoop:yj,slideNext:xj,slidePrev:wj,slideReset:Sj,slideToClosest:bj,slideToClickedSlide:Tj};function Pj(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{Zt(r,`.${n.slideClass}, swiper-slide`).forEach((f,p)=>{f.setAttribute("data-swiper-slide-index",p)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),a=t.slides.length%s!==0,l=o&&t.slides.length%n.grid.rows!==0,c=u=>{for(let f=0;f<u;f+=1){const p=t.isElement?Jo("swiper-slide",[n.slideBlankClass]):Jo("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(a){if(n.loopAddBlankSlides){const u=s-t.slides.length%s;c(u),t.recalcSlides(),t.updateSlides()}else Ka("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;c(u),t.recalcSlides(),t.updateSlides()}else Ka("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function Ej(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:v}=l,{centeredSlides:y}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let x=v.slidesPerView;x==="auto"?x=l.slidesPerViewDynamic():(x=Math.ceil(parseFloat(v.slidesPerView,10)),y&&x%2===0&&(x=x+1));const S=v.slidesPerGroupAuto?x:v.slidesPerGroup;let g=S;g%S!==0&&(g+=S-g%S),g+=v.loopAdditionalSlides,l.loopedSlides=g;const h=l.grid&&v.grid&&v.grid.rows>1;c.length<x+g?Ka("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&Ka("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let b=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(c.filter(_=>_.classList.contains(v.slideActiveClass))[0]):b=o;const T=r==="next"||!r,P=r==="prev"||!r;let j=0,A=0;const k=h?Math.ceil(c.length/v.grid.rows):c.length,B=(h?c[o].column:o)+(y&&typeof i>"u"?-x/2+.5:0);if(B<g){j=Math.max(g-B,S);for(let _=0;_<g-B;_+=1){const H=_-Math.floor(_/k)*k;if(h){const W=k-H-1;for(let ie=c.length-1;ie>=0;ie-=1)c[ie].column===W&&m.push(ie)}else m.push(k-H-1)}}else if(B+x>k-g){A=Math.max(B-(k-g*2),S);for(let _=0;_<A;_+=1){const H=_-Math.floor(_/k)*k;h?c.forEach((W,ie)=>{W.column===H&&w.push(ie)}):w.push(H)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&m.forEach(_=>{c[_].swiperLoopMoveDOM=!0,p.prepend(c[_]),c[_].swiperLoopMoveDOM=!1}),T&&w.forEach(_=>{c[_].swiperLoopMoveDOM=!0,p.append(c[_]),c[_].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&P||w.length>0&&T)&&l.slides.forEach((_,H)=>{l.grid.updateSlide(H,_,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&P){if(typeof t>"u"){const _=l.slidesGrid[b],W=l.slidesGrid[b+j]-_;a?l.setTranslate(l.translate-W):(l.slideTo(b+Math.ceil(j),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-W,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-W))}else if(i){const _=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+_,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&T)if(typeof t>"u"){const _=l.slidesGrid[b],W=l.slidesGrid[b-A]-_;a?l.setTranslate(l.translate-W):(l.slideTo(b-A,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-W,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-W))}else{const _=h?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-_,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!s){const _={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(H=>{!H.destroyed&&H.params.loop&&H.loopFix({..._,slideTo:H.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({..._,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function jj(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var kj={loopCreate:Pj,loopFix:Ej,loopDestroy:jj};function Aj(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Mj(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Lj={setGrabCursor:Aj,unsetGrabCursor:Mj};function Oj(e,t){t===void 0&&(t=this);function n(r){if(!r||r===bn()||r===yt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function g0(e,t,n){const r=yt(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function Ij(e){const t=this,n=bn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){g0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:a}=t;if(!a||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!N4(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(p?Oj(f,l):l.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const v=s.currentX,y=s.currentY;if(!g0(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=v,s.startY=y,i.touchStartTime=qa(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;l.matches(i.focusableElements)&&(x=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const S=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Rj(e){const t=bn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(T=>T.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){o.startX=u,o.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=qa());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=f;const p=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(p**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:p*p+v*v>=25&&(T=Math.atan2(Math.abs(v),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let y=n.isHorizontal()?p:v,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(y=Math.abs(y)*(s?1:-1),x=Math.abs(x)*(s?1:-1)),o.diff=y,y*=i.touchRatio,s&&(y=-y,x=-x);const S=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const g=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&g&&h&&Math.abs(y)>=1){Object.assign(o,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=y+r.startTranslate;let w=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),y>0?(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**b))):y<0&&(g&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**b))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function zj(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(b=>b.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=t;if(!u||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=qa(),p=f-n.touchStartTime;if(t.allowClick){const b=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(b&&b[0]||r.target,b),t.emit("tap click",r),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=qa(),sd(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(s.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const y=v>=-t.maxTranslate()&&!t.params.loop;let x=0,S=t.slidesSizesGrid[0];for(let b=0;b<c.length;b+=b<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=b<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[b+T]<"u"?(y||v>=c[b]&&v<c[b+T])&&(x=b,S=c[b+T]-c[b]):(y||v>=c[b])&&(x=b,S=c[c.length-1]-c[c.length-2])}let g=null,h=null;s.rewind&&(t.isBeginning?h=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const m=(v-c[x])/S,w=x<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(p>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?g:x+w):t.slideTo(x)),t.swipeDirection==="prev"&&(m>1-s.longSwipesRatio?t.slideTo(x+w):h!==null&&m<0&&Math.abs(m)>s.longSwipesRatio?t.slideTo(h):t.slideTo(x))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+w):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:x+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:x))}}function v0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function Dj(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _j(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Vj(e){const t=this;sa(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Nj(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const jx=(e,t)=>{const n=bn(),{params:r,el:i,wrapperEl:o,device:s}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",v0,!0):e[c]("observerUpdate",v0,!0),i[l]("load",e.onLoad,{capture:!0}))};function Bj(){const e=this,{params:t}=e;e.onTouchStart=Ij.bind(e),e.onTouchMove=Rj.bind(e),e.onTouchEnd=zj.bind(e),e.onDocumentTouchStart=Nj.bind(e),t.cssMode&&(e.onScroll=_j.bind(e)),e.onClick=Dj.bind(e),e.onLoad=Vj.bind(e),jx(e,"on")}function Fj(){jx(this,"off")}var $j={attachEvents:Bj,detachEvents:Fj};const y0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Hj(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const l=(s in o?o[s]:void 0)||e.originalParams,c=y0(e,r),u=y0(e,l),f=e.params.grabCursor,p=l.grabCursor,v=r.enabled;c&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!p?e.unsetGrabCursor():!f&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,b=l[m]&&l[m].enabled;w&&!b&&e[m].disable(),!w&&b&&e[m].enable()});const y=l.direction&&l.direction!==r.direction,x=r.loop&&(l.slidesPerView!==r.slidesPerView||y),S=r.loop;y&&n&&e.changeDirection(),dt(e.params,l);const g=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!g?e.disable():!v&&g&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",l),n&&(x?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!S&&h?(e.loopCreate(t),e.updateSlides()):S&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Gj(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=yt(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:c}=s[a];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var Uj={setBreakpoint:Hj,getBreakpoint:Gj};function Wj(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Yj(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=Wj(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function qj(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var Kj={addClasses:Yj,removeClasses:qj};function Jj(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Xj={checkOverflow:Jj},cd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Qj(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){dt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){dt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),dt(t,r)}}const Ic={eventsEmitter:K4,update:sj,translate:fj,transition:gj,slide:Cj,loop:kj,grabCursor:Lj,events:$j,breakpoints:Uj,checkOverflow:Xj,classes:Kj},Rc={};let Xf=class un{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=dt({},n),t&&!n.el&&(n.el=t);const s=bn();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const u=[];return s.querySelectorAll(n.el).forEach(f=>{const p=dt({},n,{el:f});u.push(new un(p))}),u}const a=this;a.__swiper__=!0,a.support=Cx(),a.device=Px({userAgent:n.userAgent}),a.browser=W4(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(u=>{u({params:n,swiper:a,extendParams:Qj(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=dt({},cd,l);return a.params=dt({},c,Rc,n),a.originalParams=dt({},a.params),a.passedParams=dt({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Zt(n,`.${r.slideClass}, swiper-slide`),o=Ja(i[0]);return Ja(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Zt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[c]?Math.ceil(o[c].swiperSlideSize):0,p;for(let v=c+1;v<o.length;v+=1)o[v]&&!p&&(f+=Math.ceil(o[v].swiperSlideSize),u+=1,f>l&&(p=!0));for(let v=c-1;v>=0;v-=1)o[v]&&!p&&(f+=o[v].swiperSlideSize,u+=1,f>l&&(p=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(n?s[f]+a[f]-s[c]<l:s[f]-s[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)s[c]-s[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&sa(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Zt(r,i())[0];return!s&&n.params.createElements&&(s=Jo("div",n.params.wrapperClass),r.append(s),Zt(r,`.${n.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||$n(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||$n(r,"direction")==="rtl"),wrongRTL:$n(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?sa(n,o):o.addEventListener("load",s=>{sa(n,s.target)})}),ld(n),n.initialized=!0,ld(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),z4(r)),r.destroyed=!0),null}static extendDefaults(t){dt(Rc,t)}static get extendedDefaults(){return Rc}static get defaults(){return cd}static installModule(t){un.prototype.__modules__||(un.prototype.__modules__=[]);const n=un.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>un.installModule(n)),un):(un.installModule(t),un)}};Object.keys(Ic).forEach(e=>{Object.keys(Ic[e]).forEach(t=>{Xf.prototype[t]=Ic[e][t]})});Xf.use([Y4,q4]);const kx=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ir(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function mi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Ir(t[r])&&Ir(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:mi(e[r],t[r]):e[r]=t[r]})}function Ax(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Mx(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Lx(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Ox(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function Zj(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function e6(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=e;const c=i.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:v,virtual:y,thumbs:x}=t;let S,g,h,m,w,b,T,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(S=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(w=!0);const j=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),u[A].prevEl=void 0,u[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),u[A].el=void 0,t[A].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?b=!0:!u.loop&&r.loop?T=!0:P=!0),c.forEach(A=>{if(Ir(u[A])&&Ir(r[A]))Object.assign(u[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&j(A);else{const k=r[A];(k===!0||k===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?k===!1&&j(A):u[A]=r[A]}}),c.includes("controller")&&!g&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&y&&u.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("virtual")&&y&&u.virtual.enabled&&(n&&(y.slides=n),y.update(!0)),i.includes("children")&&n&&u.loop&&(P=!0),S&&x.init()&&x.update(!0),g&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),m&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(u.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(u.navigation.nextEl=o),s&&(u.navigation.prevEl=s),p.init(),p.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(b||P)&&t.loopDestroy(),(T||P)&&t.loopCreate(),t.update()}function t6(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};mi(n,cd),n._emitClasses=!0,n.init=!1;const o={},s=kx.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(s.indexOf(l)>=0?Ir(e[l])?(n[l]={},i[l]={},mi(n[l],e[l]),mi(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function n6(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=e;Ax(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),Mx(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),Lx(t)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function r6(e,t,n,r,i){const o=[];if(!t)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return kx.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Ir(e[l])&&Ir(t[l])){const c=Object.keys(e[l]),u=Object.keys(t[l]);c.length!==u.length?s(l):(c.forEach(f=>{e[l][f]!==t[l][f]&&s(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&s(l)}))}else e[l]!==t[l]&&s(l)}),o}const i6=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}function Ix(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Rx(e){const t=[];return q.Children.toArray(e).forEach(n=>{Ix(n)?t.push(n):n.props&&n.props.children&&Rx(n.props.children).forEach(r=>t.push(r))}),t}function o6(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(Ix(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Rx(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function s6(e,t,n){if(!n)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let u=a;u<l;u+=1)u>=o&&u<=s&&c.push(t[r(u)]);return c.map((u,f)=>q.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function To(e,t){return typeof window>"u"?C.useEffect(e,t):C.useLayoutEffect(e,t)}const x0=C.createContext(null),a6=C.createContext(null),Rt=C.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=e===void 0?{}:e,l=!1;const[c,u]=C.useState("swiper"),[f,p]=C.useState(null),[v,y]=C.useState(!1),x=C.useRef(!1),S=C.useRef(null),g=C.useRef(null),h=C.useRef(null),m=C.useRef(null),w=C.useRef(null),b=C.useRef(null),T=C.useRef(null),P=C.useRef(null),{params:j,passedParams:A,rest:k,events:R}=t6(a),{slides:B,slots:_}=o6(o),H=()=>{y(!v)};Object.assign(j.on,{_containerClasses(V,N){u(N)}});const W=()=>{Object.assign(j.on,R),l=!0;const V={...j};if(delete V.wrapperClass,g.current=new Xf(V),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=B;const N={cache:!1,slides:B,renderExternal:p,renderExternalUpdate:!1};mi(g.current.params.virtual,N),mi(g.current.originalParams.virtual,N)}};S.current||W(),g.current&&g.current.on("_beforeBreakpoint",H);const ie=()=>{l||!R||!g.current||Object.keys(R).forEach(V=>{g.current.on(V,R[V])})},ee=()=>{!R||!g.current||Object.keys(R).forEach(V=>{g.current.off(V,R[V])})};C.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",H)}),C.useEffect(()=>{!x.current&&g.current&&(g.current.emitSlidesClasses(),x.current=!0)}),To(()=>{if(t&&(t.current=S.current),!!S.current)return g.current.destroyed&&W(),n6({el:S.current,nextEl:w.current,prevEl:b.current,paginationEl:T.current,scrollbarEl:P.current,swiper:g.current},j),s&&!g.current.destroyed&&s(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),To(()=>{ie();const V=r6(A,h.current,B,m.current,N=>N.key);return h.current=A,m.current=B,V.length&&g.current&&!g.current.destroyed&&e6({swiper:g.current,slides:B,passedParams:A,changedParams:V,nextEl:w.current,prevEl:b.current,scrollbarEl:P.current,paginationEl:T.current}),()=>{ee()}}),To(()=>{i6(g.current)},[f]);function L(){return j.virtual?s6(g.current,B,f):B.map((V,N)=>q.cloneElement(V,{swiper:g.current,swiperSlideIndex:N}))}return q.createElement(r,Xa({ref:S,className:Ox(`${c}${n?` ${n}`:""}`)},k),q.createElement(a6.Provider,{value:g.current},_["container-start"],q.createElement(i,{className:Zj(j.wrapperClass)},_["wrapper-start"],L(),_["wrapper-end"]),Ax(j)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:b,className:"swiper-button-prev"}),q.createElement("div",{ref:w,className:"swiper-button-next"})),Lx(j)&&q.createElement("div",{ref:P,className:"swiper-scrollbar"}),Mx(j)&&q.createElement("div",{ref:T,className:"swiper-pagination"}),_["container-end"]))});Rt.displayName="Swiper";const zt=C.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:a,virtualIndex:l,swiperSlideIndex:c,...u}=e===void 0?{}:e;const f=C.useRef(null),[p,v]=C.useState("swiper-slide"),[y,x]=C.useState(!1);function S(w,b,T){b===f.current&&v(T)}To(()=>{if(typeof c<"u"&&(f.current.swiperSlideIndex=c),t&&(t.current=f.current),!(!f.current||!o)){if(o.destroyed){p!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",S),()=>{o&&o.off("_slideClass",S)}}}),To(()=>{o&&f.current&&!o.destroyed&&v(o.getSlideClasses(f.current))},[o]);const g={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(g):r,m=()=>{x(!0)};return q.createElement(n,Xa({ref:f,className:Ox(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},u),s&&q.createElement(x0.Provider,{value:g},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},h(),a&&!y&&q.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&q.createElement(x0.Provider,{value:g},h(),a&&!y&&q.createElement("div",{className:"swiper-lazy-preloader"})))});zt.displayName="SwiperSlide";function zx(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Zt(e.el,`.${r[i]}`)[0];o||(o=Jo("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function lr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(y){let x;return y&&typeof y=="string"&&t.isElement&&(x=t.el.querySelector(y)||t.hostEl.querySelector(y),x)?x:(y&&(typeof y=="string"&&(x=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&x&&x.length>1&&t.el.querySelectorAll(y).length===1?x=t.el.querySelector(y):x&&x.length===1&&(x=x[0])),y&&!x?y:x)}function s(y,x){const S=t.params.navigation;y=Le(y),y.forEach(g=>{g&&(g.classList[x?"add":"remove"](...S.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=x),t.params.watchOverflow&&t.enabled&&g.classList[t.isLocked?"add":"remove"](S.lockClass))})}function a(){const{nextEl:y,prevEl:x}=t.navigation;if(t.params.loop){s(x,!1),s(y,!1);return}s(x,t.isBeginning&&!t.params.rewind),s(y,t.isEnd&&!t.params.rewind)}function l(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function u(){const y=t.params.navigation;if(t.params.navigation=zx(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let x=o(y.nextEl),S=o(y.prevEl);Object.assign(t.navigation,{nextEl:x,prevEl:S}),x=Le(x),S=Le(S);const g=(h,m)=>{h&&h.addEventListener("click",m==="next"?c:l),!t.enabled&&h&&h.classList.add(...y.lockClass.split(" "))};x.forEach(h=>g(h,"next")),S.forEach(h=>g(h,"prev"))}function f(){let{nextEl:y,prevEl:x}=t.navigation;y=Le(y),x=Le(x);const S=(g,h)=>{g.removeEventListener("click",h==="next"?c:l),g.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(g=>S(g,"next")),x.forEach(g=>S(g,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(u(),a())}),r("toEdge fromEdge lock unlock",()=>{a()}),r("destroy",()=>{f()}),r("enable disable",()=>{let{nextEl:y,prevEl:x}=t.navigation;if(y=Le(y),x=Le(x),t.enabled){a();return}[...y,...x].filter(S=>!!S).forEach(S=>S.classList.add(t.params.navigation.lockClass))}),r("click",(y,x)=>{let{nextEl:S,prevEl:g}=t.navigation;S=Le(S),g=Le(g);const h=x.target;let m=g.includes(h)||S.includes(h);if(t.isElement&&!m){const w=x.path||x.composedPath&&x.composedPath();w&&(m=w.find(b=>S.includes(b)||g.includes(b)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;S.length?w=S[0].classList.contains(t.params.navigation.hiddenClass):g.length&&(w=g[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...S,...g].filter(b=>!!b).forEach(b=>b.classList.toggle(t.params.navigation.hiddenClass))}});const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),a()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:p,disable:v,update:a,init:u,destroy:f})}function Zi(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function cr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function u(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function f(h){const m=h.target.closest(Zi(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=Ja(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const b=u(t.realIndex,w,t.slides.length);b==="next"?t.slideNext():b==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function p(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=Le(w);let b,T;const P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,j=t.params.loop?Math.ceil(P/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(T=t.previousRealIndex||0,b=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(b=t.snapIndex,T=t.previousSnapIndex):(T=t.previousIndex||0,b=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let k,R,B;if(m.dynamicBullets&&(s=ad(A[0],t.isHorizontal()?"width":"height"),w.forEach(_=>{_.style[t.isHorizontal()?"width":"height"]=`${s*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&T!==void 0&&(a+=b-(T||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),k=Math.max(b-a,0),R=k+(Math.min(A.length,m.dynamicMainBullets)-1),B=(R+k)/2),A.forEach(_=>{const H=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(W=>`${m.bulletActiveClass}${W}`)].map(W=>typeof W=="string"&&W.includes(" ")?W.split(" "):W).flat();_.classList.remove(...H)}),w.length>1)A.forEach(_=>{const H=Ja(_);H===b?_.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&_.setAttribute("part","bullet"),m.dynamicBullets&&(H>=k&&H<=R&&_.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),H===k&&c(_,"prev"),H===R&&c(_,"next"))});else{const _=A[b];if(_&&_.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&A.forEach((H,W)=>{H.setAttribute("part",W===b?"bullet-active":"bullet")}),m.dynamicBullets){const H=A[k],W=A[R];for(let ie=k;ie<=R;ie+=1)A[ie]&&A[ie].classList.add(...`${m.bulletActiveClass}-main`.split(" "));c(H,"prev"),c(W,"next")}}if(m.dynamicBullets){const _=Math.min(A.length,m.dynamicMainBullets+4),H=(s*_-s)/2-B*s,W=h?"right":"left";A.forEach(ie=>{ie.style[t.isHorizontal()?W:"top"]=`${H}px`})}}w.forEach((A,k)=>{if(m.type==="fraction"&&(A.querySelectorAll(Zi(m.currentClass)).forEach(R=>{R.textContent=m.formatFractionCurrent(b+1)}),A.querySelectorAll(Zi(m.totalClass)).forEach(R=>{R.textContent=m.formatFractionTotal(j)})),m.type==="progressbar"){let R;m.progressbarOpposite?R=t.isHorizontal()?"vertical":"horizontal":R=t.isHorizontal()?"horizontal":"vertical";const B=(b+1)/j;let _=1,H=1;R==="horizontal"?_=B:H=B,A.querySelectorAll(Zi(m.progressbarFillClass)).forEach(W=>{W.style.transform=`translate3d(0,0,0) scaleX(${_}) scaleY(${H})`,W.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(A.innerHTML=m.renderCustom(t,b+1,j),k===0&&i("paginationRender",A)):(k===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Le(w);let b="";if(h.type==="bullets"){let T=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&T>m&&(T=m);for(let P=0;P<T;P+=1)h.renderBullet?b+=h.renderBullet.call(t,P,h.bulletClass):b+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?b=h.renderFraction.call(t,h.currentClass,h.totalClass):b=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?b=h.renderProgressbar.call(t,h.progressbarFillClass):b=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(T=>{h.type!=="custom"&&(T.innerHTML=b||""),h.type==="bullets"&&t.pagination.bullets.push(...T.querySelectorAll(Zi(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function y(){t.params.pagination=zx(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>Tx(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Le(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",f),t.enabled||w.classList.add(h.lockClass)}))}function x(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Le(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Le(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(y(),v(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{v(),p()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Le(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(h,m)=>{const w=m.target,b=Le(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const T=b[0].classList.contains(t.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),b.forEach(P=>P.classList.toggle(t.params.pagination.hiddenClass))}});const S=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Le(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),y(),v(),p()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Le(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),x()};Object.assign(t.pagination,{enable:S,disable:g,render:v,update:p,init:y,destroy:x})}function ur(e){let{swiper:t,extendParams:n,on:r,emit:i,params:o}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,a,l=o&&o.autoplay?o.autoplay.delay:3e3,c=o&&o.autoplay?o.autoplay.delay:3e3,u,f=new Date().getTime(),p,v,y,x,S,g,h;function m(L){!t||t.destroyed||!t.wrapperEl||L.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||L.detail&&L.detail.bySwiperTouchMove)&&k())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=u,p=!1);const L=t.autoplay.paused?u:f+c-new Date().getTime();t.autoplay.timeLeft=L,i("autoplayTimeLeft",L,L/l),a=requestAnimationFrame(()=>{w()})},b=()=>{let L;return t.virtual&&t.params.virtual.enabled?L=t.slides.filter(N=>N.classList.contains("swiper-slide-active"))[0]:L=t.slides[t.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},T=L=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(a),w();let V=typeof L>"u"?t.params.autoplay.delay:L;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const N=b();!Number.isNaN(N)&&N>0&&typeof L>"u"&&(V=N,l=N,c=N),u=V;const J=t.params.speed,te=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(J,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,J,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(J,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,J,!0,!0),i("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return V>0?(clearTimeout(s),s=setTimeout(()=>{te()},V)):requestAnimationFrame(()=>{te()}),V},P=()=>{f=new Date().getTime(),t.autoplay.running=!0,T(),i("autoplayStart")},j=()=>{t.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(a),i("autoplayStop")},A=(L,V)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(s),L||(g=!0);const N=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):k()};if(t.autoplay.paused=!0,V){S&&(u=t.params.autoplay.delay),S=!1,N();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),N())},k=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),g?(g=!1,T(u)):T(),t.autoplay.paused=!1,i("autoplayResume"))},R=()=>{if(t.destroyed||!t.autoplay.running)return;const L=bn();L.visibilityState==="hidden"&&(g=!0,A(!0)),L.visibilityState==="visible"&&k()},B=L=>{L.pointerType==="mouse"&&(g=!0,h=!0,!(t.animating||t.autoplay.paused)&&A(!0))},_=L=>{L.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&k())},H=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",B),t.el.addEventListener("pointerleave",_))},W=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",B),t.el.removeEventListener("pointerleave",_))},ie=()=>{bn().addEventListener("visibilitychange",R)},ee=()=>{bn().removeEventListener("visibilitychange",R)};r("init",()=>{t.params.autoplay.enabled&&(H(),ie(),P())}),r("destroy",()=>{W(),ee(),t.autoplay.running&&j()}),r("_freeModeStaticRelease",()=>{(y||g)&&k()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?j():A(!0,!0)}),r("beforeTransitionStart",(L,V,N)=>{t.destroyed||!t.autoplay.running||(N||!t.params.autoplay.disableOnInteraction?A(!0,!0):j())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){j();return}v=!0,y=!1,g=!1,x=setTimeout(()=>{g=!0,y=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(x),clearTimeout(s),t.params.autoplay.disableOnInteraction){y=!1,v=!1;return}y&&t.params.cssMode&&k(),y=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(S=!0)}),Object.assign(t.autoplay,{start:P,stop:j,pause:A,resume:k})}function l6(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:a,recreateShadows:l,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=s?s():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(f,p)=>{n.params.effect===t&&o(p)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function c6(e,t){const n=Jf(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function w0(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Jf(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Jo("div",r.split(" ")),i.append(o)),o}function u6(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),l6({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:a,slides:l,slidesSizesGrid:c}=t,u=t.params.coverflowEffect,f=t.isHorizontal(),p=t.translate,v=f?-p+s/2:-p+a/2,y=f?u.rotate:-u.rotate,x=u.depth,S=$4(t);for(let g=0,h=l.length;g<h;g+=1){const m=l[g],w=c[g],b=m.swiperSlideOffset,T=(v-b-w/2)/w,P=typeof u.modifier=="function"?u.modifier(T):T*u.modifier;let j=f?y*P:0,A=f?0:y*P,k=-x*Math.abs(P),R=u.stretch;typeof R=="string"&&R.indexOf("%")!==-1&&(R=parseFloat(u.stretch)/100*w);let B=f?0:R*P,_=f?R*P:0,H=1-(1-u.scale)*Math.abs(P);Math.abs(_)<.001&&(_=0),Math.abs(B)<.001&&(B=0),Math.abs(k)<.001&&(k=0),Math.abs(j)<.001&&(j=0),Math.abs(A)<.001&&(A=0),Math.abs(H)<.001&&(H=0);const W=`translate3d(${_}px,${B}px,${k}px)  rotateX(${S(A)}deg) rotateY(${S(j)}deg) scale(${H})`,ie=c6(u,m);if(ie.style.transform=W,m.style.zIndex=-Math.abs(Math.round(P))+1,u.slideShadows){let ee=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),L=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");ee||(ee=w0("coverflow",m,f?"left":"top")),L||(L=w0("coverflow",m,f?"right":"bottom")),ee&&(ee.style.opacity=P>0?P:0),L&&(L.style.opacity=-P>0?-P:0)}}},setTransition:s=>{t.slides.map(l=>Jf(l)).forEach(l=>{l.style.transitionDuration=`${s}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const d6=E.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; /* Ajusta a distância entre o texto e o ícone */
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({backDefine:e})=>e||"var(--color--white)"};
  border-radius: 10px;
  color: ${({colorDefine:e})=>e||"var(--color--black)"};
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  font-family: var(--font--comfortaa);
  font-weight: 600;
  left: 0;
  bottom: 0;

  .icon {
    font-size: 18px;
    color: var(--color--black);
    margin-left: 8px; /* Ajusta a margem à esquerda do ícone para maior separação */
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); /* Animação da seta movendo para a direita no hover */
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`,Qf=({text:e,backDefine:t,colorDefine:n})=>d.jsxs(d6,{backDefine:t,colorDefine:n,children:[e,d.jsx(By,{className:"icon"})]}),f6=wx`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        &:hover{
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,p6=as`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,h6=E(G.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`,m6=E(G.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${p6} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;

  &:hover {
    transform: rotate(45deg) scale(1.2);
  }
`,g6=E(G.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px; /* Define a espessura da borda */
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff); /* Cria a borda */
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none; /* Faz com que a borda seja apenas decorativa */
`,v6=E(G.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,y6=E(G.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,x6=E(G.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,w6=E(G.div)`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,Co=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",width:o="100%",autoplayDelay:s=3e3,showPagination:a=!0,showNavigation:l=!0})=>{const{scrollY:c}=E3(),u=Ms(c,[0,300],[0,-30]),f=Ms(c,[0,300],[0,-20]),p=Ms(c,[0,300],[0,-10]),v=Ms(c,[0,300],[0,-5]);return d.jsxs(d.Fragment,{children:[d.jsx(f6,{}),d.jsx(Rt,{modules:[lr,cr,ur],navigation:l,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:s,disableOnInteraction:!1},style:{width:o,height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:2,spaceBetween:20,height:"250px"},1024:{slidesPerView:3,spaceBetween:30,height:"300px"}},children:e.map((y,x)=>d.jsx(zt,{children:t==="image"?d.jsx(h6,{src:y.src,alt:y.alt||`Slide ${x+1}`,initial:{scale:.8,rotate:10,opacity:0},whileInView:{scale:1,rotate:0,opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):d.jsxs(m6,{backgroundImage:y.backgroundImage,initial:{opacity:0,scale:.8,rotate:5},whileInView:{opacity:1,scale:1,rotate:0},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[d.jsx(g6,{}),d.jsxs(v6,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[d.jsx(y6,{style:{y:u},children:y.title}),d.jsx(x6,{style:{y:f},children:y.subtitle}),d.jsx(w6,{style:{y:p},children:y.features.map((S,g)=>d.jsxs("span",{children:[S.icon," ",S.text]},g))}),d.jsx(Qf,{text:"Conhecer todas as acomodações",style:{y:v}})]})]})},x))})]})},gi=E.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color--black);
    background-color: inherit;
    border: 4px solid transparent;
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: var(--color--black);
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }
`,S0=E.svg`
    position: absolute;
    width: 24px;
    fill: var(--color--black);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &.arr-1 {
        right: 16px;
    }

    &.arr-2 {
        left: -25%;
    }

    ${gi}:hover &.arr-1 {
        right: -25%;
    }

    ${gi}:hover &.arr-2 {
        left: 16px;
    }

    ${gi}:hover & {
        fill:var(--color--white);
    }
`,S6=E.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color--black);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${gi}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,b6=E.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${gi}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,Vn=({text:e,onClick:t})=>d.jsxs(gi,{onClick:t,children:[d.jsx(S0,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),d.jsx(b6,{children:e}),d.jsx(S6,{}),d.jsx(S0,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),T6=as`
    0% {
        border-radius: 80px 20px 50px 80px;
    }
    25% {
        border-radius: 50px 80px 30px 60px;
    }
    50% {
        border-radius: 100px 50px 80px 30px;
    }
    75% {
        border-radius: 60px 30px 100px 50px;
    }
    100% {
        border-radius: 80px 20px 50px 80px;
    }
`,C6=E(G.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 40%;
    height: 60vh;
    padding: 50px;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.1;
        left: 0;
        top: 0;
        border: 1px solid var(--color--black);
        background-image: url('../../public/background/background_black.webp');
        background-position: center;
        background-size: contain;
        animation: ${T6} 8s ease-in-out infinite;
    }
`,P6=E(G.h1)`
    width: 100%;
    text-align: left;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    font-size: 1.8rem;
`,E6=E(G.p)`
    width: 80%;
    font-family: var(--font--avenir);
`,b0=({text:e,title:t,borderColor:n,containerAnimation:r={opacity:0,y:50},titleAnimation:i={opacity:0,y:-20},textAnimation:o={opacity:0,x:-20},buttonAnimation:s={opacity:0,scale:.8},animationDuration:a=.5})=>d.jsxs(C6,{borderColor:n,initial:r,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:a},children:[d.jsx(P6,{initial:i,whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:a,delay:.2},children:t}),d.jsx(E6,{initial:o,whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:a,delay:.4},children:e}),d.jsx(G.div,{initial:s,whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:a,delay:.6},children:d.jsx(Vn,{text:"Fazer minha reserva",backgroundColor:"transparent",border:"1px solid var(--color--black)",color:"var(--color--black)"})})]}),j6=wx`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,k6=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-image: ${({backgroundImage:e})=>`url(${e})`};
    background-size: cover;
    background-position: center;
`,A6=E.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px; /* Mantém o mesmo border-radius */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)); /* Gradiente */
    pointer-events: none; /* Apenas decorativa */
    z-index: 1;
`,M6=E.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    gap: 20px;
    z-index: 2;
`,L6=E.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,O6=E.p`
    font-size: 14px;
    width: 80%;
    margin: 2px 0 10px;
    font-family: var(--font--avenir);
`,Zf=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=3e3,showPagination:i=!0,showNavigation:o=!0})=>d.jsxs(d.Fragment,{children:[d.jsx(j6,{}),d.jsx(Rt,{modules:[lr,cr,ur,u6],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:200,modifier:1,slideShadows:!0},navigation:o,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1},style:{width:n,height:t},children:e.map((s,a)=>d.jsx(zt,{style:{width:"60%"},children:d.jsxs(k6,{backgroundImage:s.backgroundImage,children:[d.jsx(A6,{}),d.jsxs(M6,{children:[d.jsx(L6,{children:s.title}),d.jsx(O6,{children:s.description}),d.jsx(Qf,{text:"Fazer minha reserva agora"})]})]})},a))})]}),I6=E(G.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`,R6=E(G.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,z6=E(G.div)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--color--black);
    padding: 3px 10px;
    font-family: var(--font--comfortaa);
    background-color: var(--color--white);
    cursor: default;
    font-size: 8px;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); // Sombra para destacar o texto
`,T0=({images:e=[],reverse:t=!1})=>d.jsx(Rt,{modules:[ur],slidesPerView:5,spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t},speed:2500,freeMode:!0,freeModeMomentum:!1,children:e.map((n,r)=>d.jsx(zt,{children:d.jsxs(I6,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[d.jsx(R6,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),d.jsx(z6,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),D6=as`
  0% {
    border-radius: 0 20px 20px 0;
  }
  25% {
    border-radius: 20px 0 20px 20px;
  }
  50% {
    border-radius: 20px 20px 0 20px;
  }
  75% {
    border-radius: 20px 20px 20px 0;
  }
  100% {
    border-radius: 0 20px 20px 0;
  }
`,_6=E(G.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    border: 1px solid var(--color--black);
    animation: ${D6} 5s ease-in-out infinite;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`,V6=E.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`,N6=E.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,B6=E.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,F6=E.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,$6=E.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: #555;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: #e0e0e0;
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;
    }
`,H6=E.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,G6=E.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,U6=({events:e=[]})=>d.jsx(Rt,{modules:[lr,cr,ur],autoplay:!0,slidesPerView:3,spaceBetween:20,navigation:!0,pagination:!1,loop:!0,children:e.map((t,n)=>d.jsx(zt,{children:d.jsx(W6,{event:t,delay:n*.1})},n))}),W6=({event:e,delay:t})=>{const n=q.useRef(null),r=_y(n,{once:!0});return d.jsxs(_6,{ref:n,initial:{opacity:0,y:50},animate:r?{opacity:1,y:0}:{},transition:{duration:.5,delay:t},children:[d.jsx(V6,{src:e.image,alt:e.title}),d.jsxs(N6,{children:[d.jsx(B6,{children:e.title}),d.jsx(F6,{children:e.dateRange}),d.jsx($6,{children:e.features.map((i,o)=>d.jsxs("span",{children:[i.icon," ",i.text]},o))}),d.jsx(H6,{children:d.jsxs(G6,{children:["A partir de: ",d.jsx("span",{children:"10x"}),"R$",e.price]})}),d.jsx(Qf,{text:"Quero fechar minha reserva nesse pacote",backDefine:"var(--color--black)",colorDefine:"var(--color--white)"})]})]})};function Y6(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function Dx(e){return se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function _x(e){return se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}function q6(e){return se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function K6(e){return se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function J6(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function X6(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"},child:[]}]})(e)}function Q6(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M16.5 12h-9c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1zM7.25 8.5h4v2h-4zM12.75 8.5h4v2h-4z"},child:[]},{tag:"path",attr:{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15h-1.5v-1.5h-11V17H5v-3.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17z"},child:[]}]})(e)}function Z6(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function bt(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}const ek="/assets/white-uzQkVjI3.png",tk=E(G.button)`
    font-family: inherit;
    width: 80%;
    border-radius: 20px 0 20px 0;
    font-size: 20px;
    background: #212121;
    color: white;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-weight: 1000;

    @media (max-width: 768px){
        width: 100%;
        font-size: 10px;
        padding: 1em;
    }

    & > span {
        margin-left: 20px;
        transition: opacity 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        font-size: 15px;
    }

    & > svg {
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        max-width: 100%;
    }

    &:hover {
        background: var(--color--blue);
    }

    &:hover > svg {
        transform: translateX(5px) scale(1.2);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`,nk=E(G.footer)`
    height: auto;
    margin-top: 5vh;
    padding: 5% 5%;
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--black);
    border-radius: 70px 70px 0 0;
    gap: 60px;

    @media (max-width: 768px){
        margin-top: 10vh;
        border-radius: 25px 25px 0 0;
        padding: 10% 5%;
    }
`,rk=E.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-family: var(--font--comfortaa);
        width: 70%;
        font-size: 28px;
        line-height: 100%;
        color: var(--color--white);
        font-weight: 400;

        @media (max-width: 768px){
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }

    & > p {
        width: 80%;
        line-height: 110%;
        color: var(--color--white);
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            width: 90%;
            text-align: center;
            font-size: 12px;
        }
    }

    & > p > a{
        margin-left: 1ch;
        color: var(--color--blue);
    }

    & > hr{
        width: 85%;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-top: -25px;
        color: var(--color--white);

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div > div{
        display: flex;
        gap: 10px;
    }

    & > div > div > a {
        color: var(--color--white);
    }
`,ik=E.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > form > input{
        width: 80%;
        height: 30px;
        border-radius: 0 20px 0 20px;
        border: none;
        padding: 20px;
        background-color: var(--color--white);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,ok=E.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,sk=E.section`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > h1{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`,ak=E.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 30vh;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    & > div {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px){
         width: 100%;
        }
    }

    & > div p{
        color: var(--color--white);
        width: 80%;
        line-height: 100%;
        font-family: var(--font--avenir);
        margin-top: 10px;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & > div h2{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;

        @media (max-width: 768px){
            font-size: 20px;
        }

    }

    & > div a{
        color: var(--color--white);
        text-decoration: none;
        font-family: var(--font--avenir);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;
        transition: all .2s ease;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px);
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`,lk=E.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    & > p{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 12px;
    }

    & > a{
        color: var(--color--blue);
        font-size: 12px;
    }

    & > p > b > a{
        color: var(--color--blue);
        margin-left: 1ch;
    }
`,ck=E.hr`
    width: 100%;
    margin-bottom: -50px;
`,ls=()=>{const e=C.useRef(null),t=_y(e,{once:!0}),n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return d.jsx(d.Fragment,{children:d.jsxs(nk,{ref:e,initial:"hidden",animate:t?"visible":"hidden",children:[d.jsxs(ok,{as:G.div,children:[d.jsxs(rk,{children:[d.jsx(G.h1,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.2},children:"Fale agora com a nossa central de reservas"}),d.jsxs(G.p,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.3},children:["Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa",d.jsx("a",{href:"https://exemplo.com/politica-de-privacidade",children:"política de privacidade"}),"."]}),d.jsx(G.hr,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.4}}),d.jsxs("div",{children:[d.jsx(G.h4,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.5},children:"Siga-nos"}),d.jsxs("div",{children:[d.jsx(G.a,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.6},children:d.jsx(Y6,{})}),d.jsx(G.a,{href:"https://tiktok.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.7},children:d.jsx(K6,{})}),d.jsx(G.a,{href:"https://pinterest.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.8},children:d.jsx(q6,{})})]})]})]}),d.jsx(ik,{children:d.jsxs("form",{id:"contactForm",children:[d.jsx(G.input,{type:"text",id:"name",placeholder:"Me diga seu nome",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:.9}}),d.jsx(G.input,{type:"email",id:"email",placeholder:"Preciso saber seu e-mail também!",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1}}),d.jsx(G.input,{type:"tel",id:"tel",placeholder:"Me diga seu número de WhatsApp",variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.1}}),d.jsxs(tk,{whileHover:{scale:1.05,backgroundColor:"var(--color--blue)"},whileTap:{scale:.95},children:[d.jsx(J6,{size:20}),d.jsx("span",{children:"Enviar meu dados para contato"})]})]})})]}),d.jsxs(ak,{as:G.div,children:[d.jsxs(G.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.2},children:[d.jsx("img",{src:ek,alt:"Logo da le ange na cor branca"}),d.jsx("p",{children:"A pousada mais Pet Friendly, venha conhecer!"})]}),d.jsxs(G.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.3},children:[d.jsx("h2",{children:"Âncoras"}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Início "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Acomodações "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Estrutura "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Pet Friendly "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Pacotes "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Atrações "]})]}),d.jsxs(G.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.4},children:[d.jsx("h2",{children:"Ajuda"}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," WhatsApp "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," +55 (24) 98109-0909 "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," pousadaleange@gmail.com "]})]}),d.jsxs(G.div,{variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.5},children:[d.jsx("h2",{children:"Fique por dentro de tudo"}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Instagram "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," TikTok "]}),d.jsxs("a",{href:"#",children:[" ",d.jsx(bt,{})," Pinterest "]})]})]}),d.jsxs(sk,{as:G.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.6},children:[d.jsx("h1",{children:"Saiba onde estamos localizados"}),d.jsx("div",{children:d.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra"})}),d.jsx("div",{children:d.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:15},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar"})})]}),d.jsx(ck,{as:G.hr,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.7}}),d.jsxs(lk,{as:G.div,variants:n,initial:"hidden",animate:t?"visible":"hidden",transition:{delay:1.8},children:[d.jsx("p",{children:"Todos os direitos reservados | &copy 2024"}),d.jsx("a",{href:"#",children:"Termos de condições"}),d.jsxs("p",{children:["Desenvolvido por ",d.jsx("b",{children:d.jsx("a",{href:"#",children:"Aleph"})})]})]})]})})};function uk(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.653-2.359a2.224 2.224 0 0 1 3.125 0l.224.22.223-.22a2.225 2.225 0 0 1 3.126 0 2.13 2.13 0 0 1 0 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 0 1 0-3.07z"},child:[]}]})(e)}function dk(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5m6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"},child:[]}]})(e)}const fk=[{src:"../../../public/serra/9.jpeg",alt:"Imagem 1"},{src:"../../../public/serra/1.JPG",alt:"Imagem 1"},{src:"../../../public/serra/2.JPG",alt:"Imagem 1"},{src:"../../../public/serra/3.JPG",alt:"Imagem 1"},{src:"../../../public/serra/4.JPG",alt:"Imagem 1"},{src:"../../../public/serra/5.jpg",alt:"Imagem 1"},{src:"../../../public/serra/6.jpeg",alt:"Imagem 1"},{src:"../../../public/serra/7.JPG",alt:"Imagem 1"},{src:"../../../public/serra/8.JPG",alt:"Imagem 1"}],pk=[{src:"../../../public/mar/1.JPG",alt:"Imagem 1"},{src:"../../../public/mar/3.jpg",alt:"Imagem 3"},{src:"../../../public/mar/6.JPG",alt:"Imagem 1"},{src:"../../../public/mar/7.JPG",alt:"Imagem 2"},{src:"../../../public/mar/8.JPG",alt:"Imagem 3"},{src:"../../../public/mar/9.JPG",alt:"Imagem 2"},{src:"../../../public/mar/10.JPG",alt:"Imagem 3"}],hk=[{src:"../../../public/carrossel/1.PNG",label:"Le Ange Mar"},{src:"../../../public/carrossel/2.jpg",label:"Le Ange Mar"},{src:"../../../public/carrossel/3.PNG",label:"Le Ange Mar"},{src:"../../../public/carrossel/4.PNG",label:"Pacotes"},{src:"../../../public/carrossel/5.PNG",label:"Le Ange Mar"},{src:"../../../public/carrossel/6.PNG",label:"Le Ange Mar"},{src:"../../../public/carrossel/7.PNG",label:"Le Ange Mar"},{src:"../../../public/carrossel/9.JPG",label:"Pacotes"}],mk=[{src:"../../../public/carrossel/13.jpg",label:"Le Ange Mar"},{src:"../../../public/carrossel/14.JPG",label:"Le Ange Mar"},{src:"../../../public/carrossel/15.JPG",label:"Le Ange Mar"},{src:"../../../public/carrossel/16.png",label:"Pacotes"},{src:"../../../public/carrossel/17.png",label:"Le Ange Mar"},{src:"../../../public/carrossel/19.jpg",label:"Le Ange Mar"},{src:"../../../public/carrossel/20.JPG",label:"Le Ange Mar"}],C0=E.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;
`,gk=E.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;
`,vk=E.aside`
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);

        @media (max-width: 768px){
            border: 1px solid red;
            margin-left: 10%;
            font-size: 20px;
            width: 80%;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;
        }
    }
`,yk=[{backgroundImage:"../../../public/suites/master-6.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"},{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/standart4.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/standart7.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/standart8.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"},{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/stardart-5.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/sup2.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"},{backgroundImage:"../../../public/suites/sup3.webp",title:"Pousada Le Ange Serra",subtitle:"Miguel Pereira - RJ",features:[{icon:d.jsx(an,{}),text:"Ar condicionado"},{icon:d.jsx(ct,{}),text:"Cama king size"},{icon:d.jsx(sn,{}),text:"Banheira"},{icon:d.jsx(ln,{}),text:"Smart TV"}],buttonText:"Conhecer todas as acomodações"}],xk=E.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
`,wk=[{backgroundImage:"../../../public/estrutura/aconchego.JPG",title:"Aconchego",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/cozinha.webp",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/suites.jpeg",title:"Suites",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/relaxar.JPG",title:"Relaxar",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"}],Sk=E.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    &::before {
        background-image: url('../../../public/background/background_white.webp');
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`,zs=E.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);

`,Ds=E.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--avenir);
    opacity: 0.7;
`,bk=[{image:"../../../public/pacotes/frutosdomar.jpg",title:"Frutos do mar",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"../../../public/pacotes/buteco.jpg",title:"Noite do Boteco",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"../../../public/pacotes/pizzas.jpeg",title:"Noite das pizzas",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"../../../public/pousada/serra_pousada4.JPG",title:"Noite Árabe",dateRange:"20/09/2024 até 22/09/2024 (2 diárias)",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25}],Tk=E.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;
    
`,Ck=E.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`,P0=E.b`
    color: var(--color--green);
`,zc=E.b`
    color: var(--color--blue);
`,Pk=()=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Início - Pousada Le Ange"})}),d.jsx(O4,{}),d.jsxs(gk,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[d.jsxs(vk,{children:[d.jsxs("h1",{children:["Conheça o ",d.jsx(zc,{children:"melhor de cada cantinho nosso"})]}),d.jsx("p",{children:"Pousada mais Pet Friendly"})]}),d.jsxs(C0,{children:[d.jsx(Co,{content:fk,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1}),d.jsx(b0,{title:"Pousada Le Ange Serra",text:"Aqui na LeAnge, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma EXPERIÊNCIA ÚNICA ao lado do seu PET, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px"})]}),d.jsxs(C0,{children:[d.jsx(b0,{title:"Pousada Le Ange Mar",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da propriedade e o seu pet é calorosamente recebido para momentos especiais.",borderColor:"var(--color--blue)",borderRadius:"30px"}),d.jsx(Co,{content:pk,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),d.jsxs(xk,{children:[d.jsxs("div",{children:[d.jsxs(zs,{children:["Nossos quartos ",d.jsx(P0,{children:"mais buscados"})," ",d.jsx(Q6,{})," "]}),d.jsx(Ds,{children:"Já consegue se imaginar dormindo?"})]}),d.jsx(Co,{content:yk,contentType:"div",spaceBetween:20,slidesPerView:2,width:"100%",height:"90vh",showPagination:!1,showNavigation:!0})]}),d.jsxs(Sk,{children:[d.jsxs("div",{children:[d.jsxs(zs,{children:["Estrutura que te ",d.jsx(zc,{children:"convida"})," ",d.jsx(uk,{})," "]}),d.jsx(Ds,{children:"Venha ter essa experiência"})]}),d.jsx(Zf,{content:wk,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),d.jsxs("div",{children:[d.jsxs(zs,{children:[" ",d.jsx(P0,{children:"Sinta-se"})," mais próximo da gente ",d.jsx(dk,{})," "]}),d.jsx(Ds,{children:"Alguns dos nossos momentos"})]}),d.jsxs(Tk,{children:[d.jsx(T0,{images:hk}),d.jsx(T0,{images:mk,reverse:!0})]}),d.jsxs("div",{children:[d.jsxs(zs,{children:["Qual deles você ",d.jsx(zc,{children:"mais gostou?"})," ",d.jsx(X6,{})," "]}),d.jsx(Ds,{children:"Estamos te esperando!"})]}),d.jsx(Ck,{children:d.jsx(U6,{events:bk})}),d.jsx(ls,{})]}),Oe="/assets/3-BncHLBjc.jpg",Ek=E.div`
    height: 15vh;
`,jk=E.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 120%;
            font-family: var(--font--comfortaa);
            font-weight: 200;

            & > b{
                font-weight: 400;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--avenir);
            font-size: 1.2rem;
            color: var(--color--black);
            width: 70%;
            line-height: 100%;
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 90%;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;
        }
    }
`,E0=E.section`
    width: 100%;
    height: 100vh;
`,kk=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--avenir);
                    line-height: 100%;
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('/public/mar/7.JPG');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('/public/mar/7.JPG');
            background-size: cover;
            background-position: center;
        }
    }
`,j0=[{src:"../../../public/serra/9.jpeg",alt:"Imagem 1"},{src:"../../../public/serra/1.JPG",alt:"Imagem 1"},{src:"../../../public/serra/2.JPG",alt:"Imagem 1"},{src:"../../../public/serra/3.JPG",alt:"Imagem 1"},{src:"../../../public/serra/4.JPG",alt:"Imagem 1"},{src:"../../../public/serra/5.jpg",alt:"Imagem 1"},{src:"../../../public/serra/6.jpeg",alt:"Imagem 1"},{src:"../../../public/serra/7.JPG",alt:"Imagem 1"},{src:"../../../public/serra/8.JPG",alt:"Imagem 1"}],Ak=E.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            }
        }
    }

    & > div:nth-child(2){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
            }
        }
        
    }
`,Mk=E.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    & > div{
        width: 50%;
        height: 80%;

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
        }

        & > div {
            width: 100%;
            height: 25%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            }
        }
    }

    & > div:nth-child(1){
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
        }

        & > p{
            font-size: 1.2rem;
            font-family: var(--font--avenir);
            width: 70%;
            line-height: 100%;
        }

        & > ol{
            margin-left: 30px;
            list-style-image: url('/public/icon/correto.png');

            & > li{
                font-family: var(--font--avenir);
                color: var(--color--black);
                font-size: 1rem;
            }
        }
        
    }
`,Lk=()=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Eventos - Pousada Le Ange"})}),d.jsx(Ek,{}),d.jsxs(jk,{children:[d.jsxs("div",{children:[d.jsxs("h1",{children:["Do alto da ",d.jsx("b",{children:d.jsx("a",{href:"#",children:"Serra"})}),",",d.jsx("br",{})," às ondas do ",d.jsx("b",{children:d.jsx("a",{href:"#",children:"Mar"})})]}),d.jsx("p",{children:"Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos."}),d.jsx(Vn,{text:"Fazer meu evento"})]}),d.jsx("div",{children:d.jsx("img",{src:Oe,alt:"foto da home da página de eventos"})})]}),d.jsx(E0,{children:d.jsx(Co,{content:j0,spaceBetween:20,slidesPerView:1,width:"90%",height:"100vh",contentType:"image",showPagination:!0})}),d.jsxs(kk,{children:[d.jsx("div",{children:d.jsx("h1",{children:"Sobre nós"})}),d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),d.jsxs("div",{children:[d.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),d.jsx(Vn,{text:"Fazer reserva"})]})]}),d.jsxs("div",{children:[d.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),d.jsxs("div",{children:[d.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),d.jsx(Vn,{text:"Fazer reserva"})]})]})]})]}),d.jsxs(Ak,{children:[d.jsx("div",{children:d.jsx("img",{src:Oe,alt:"foto do casamento"})}),d.jsxs("div",{children:[d.jsx("h1",{children:"Pré-Wedding"}),d.jsx("p",{children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),d.jsxs("ol",{children:[d.jsx("li",{children:"Coquetel na Chegada (Sexta-feira)"}),d.jsx("li",{children:"Noite Especial no Sábado"}),d.jsx("li",{children:"Ensaio Fotográfico dos Noivos"}),d.jsx("li",{children:"Decoração Romântica na Suíte dos Noivos"}),d.jsx("li",{children:"Massagem Relaxante para os noivos na LeAnge Serra"}),d.jsx("li",{children:"Passeio de Bugre para os noivos na LeAnge Mar"}),d.jsx("li",{children:"Piquenique para os Noivos"}),d.jsx("li",{children:"Late Checkout no Domingo"})]}),d.jsx(Vn,{text:"Fazer reserva"}),d.jsxs("div",{children:[d.jsx("img",{src:Oe,alt:"foto do casamento"}),d.jsx("img",{src:Oe,alt:"foto do casamento"}),d.jsx("img",{src:Oe,alt:"foto do casamento"})]})]})]}),d.jsxs(Mk,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Aniversário"}),d.jsx("p",{children:"Comemore os momentos doces da vida."}),d.jsxs("ol",{children:[d.jsx("li",{children:"Coquetel na Chegada (Sexta-feira)"}),d.jsx("li",{children:"Noite Especial no Sábado"}),d.jsx("li",{children:"Massagem Relaxante para o aniversariante na LeAnge Serra"}),d.jsx("li",{children:"Passeio de Bugre para o aniversariante na LeAnge Mar"}),d.jsx("li",{children:"Piquenique"}),d.jsx("li",{children:"Late Checkout no Domingo"})]}),d.jsx(Vn,{text:"Fazer reserva"}),d.jsxs("div",{children:[d.jsx("img",{src:Oe,alt:"foto do casamento"}),d.jsx("img",{src:Oe,alt:"foto do casamento"}),d.jsx("img",{src:Oe,alt:"foto do casamento"})]})]}),d.jsx("div",{children:d.jsx("img",{src:Oe,alt:"foto do casamento"})})]}),d.jsx(E0,{children:d.jsx(Co,{content:j0,spaceBetween:20,slidesPerView:1,width:"90%",height:"100vh",contentType:"image",showPagination:!0})}),d.jsx(ls,{})]}),Ok="/assets/cachorro-DKrXiAvb.png",k0="/assets/6-C7Kbx66b.jpeg",Vx=E.button`
  background: ${e=>e.backgroundColor||"transparent"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: var(--font--comfortaa);
  padding: 2px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: ${e=>e.textColor||"#000"};
  border: 1px solid ${e=>e.borderColor||"#000"};
  transition: color 0.3s 0.1s ease-out;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: ${({hoverColor:e})=>e||""};
    border: 1px solid ${e=>e.hoverBorderColor||e.borderColor||"#000"};
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em ${e=>e.hoverBackgroundColor||e.borderColor||"#000"};
  }
`,Ik=E(Z6)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Vx}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,Rk=E.span`
  margin: 10px;
`,An=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:o,hoverBackgroundColor:s,hoverBorderColor:a,hoverColor:l,onClick:c})=>d.jsxs(Vx,{onClick:c,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:s,hoverBorderColor:a,hoverColor:l,children:[d.jsx(Ik,{iconColor:i,hoverIconColor:o}),d.jsx(Rk,{children:e})]}),zk=E.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 5%;

        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
            }
        }

        & > h4 {
            font-family: var(--font--avenir);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -30px;
            font-size: 1.2rem;

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`,Dk=E.div`
    height: 15vh;
`,_k=E.section`
    width: 100%;
    height: 80vh;
    margin-top: 5vh;
    padding: 0% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width: 768px){
            max-width: 100%;
            height: 50%;

            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
    
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px){
            width: 100%;

            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--avenir);
            font-weight: 100;
            margin-top: -30px;
            font-size: 1.2rem;

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`,Vk=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 50px;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 768px){
            width: 100%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

            @media (max-width: 768px){
    
                font-size: 20px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){
            width: 100%;

            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 30px 0 30px 0; 
        height: 48%;
        object-fit: cover;

        @media (max-width: 768px){
            width: 48%;
        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 30px 0 30px;
       }

    }
`,Nk=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;
        
        @media (max-width: 768px){

            width: 100%;
            flex-direction: column;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
                
                @media (max-width: 768px){
        
                    font-size: 20px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;

            @media (max-width: 768px){
                width: 100%;
                height: auto;
                margin-top: 25px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
        
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;

        @media (max-width: 768px){

            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;

            @media (max-width: 768px){
                width: 100%;
    
                margin-top: 40px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
        
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 30px 0 30px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 30px 0 30px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 768px){
    
                width: 100%;
            }

            & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
                
                @media (max-width: 768px){
        
                    margin-top: 50px;
                    font-size: 20px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`,Bk=E.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

        @media (max-width: 768px){

            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);

                @media (max-width: 768px){
        
                    margin-top: 50px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);

                @media (max-width: 768px){
        
                    margin-top: 25px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--avenir);

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 80px 0 80px 0;
        }
    }
`,Fk=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/public/mar/3.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        @media (max-width: 768px){
            width: 100%;
            height: auto;
        }

        & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--black);

            @media (max-width: 768px){
                font-size: 24px;
                width: 100%;
                text-align: center;
            }
        }

        & > h1 b{
            color: var(--color--green);
        }

        & > p {
            width: 80%;
            font-family: var(--font--avenir);
            text-align: justify;

            @media (max-width: 768px){
                font-size: 14px;
                text-align: justify;
            }
        }
    }
`,$k=E.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        width: 35%;
        text-align: center;
        line-height: 100%;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`,Hk=()=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),d.jsx(Dk,{}),d.jsxs(zk,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Pousada Le Ange"}),d.jsx("h4",{children:"A pousada mais Pet Friendly do Brasil"}),d.jsx("p",{children:"Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação."})]}),d.jsx("div",{children:d.jsx("img",{src:Ok,alt:"foto do cachorro"})})]}),d.jsxs(_k,{children:[d.jsxs("div",{children:[d.jsx("img",{src:k0,alt:"foto da le ande da serra"}),d.jsx("img",{src:Oe,alt:"foto da le ande da serra"})]}),d.jsxs("div",{children:[d.jsx("h1",{children:"Duas unidades,"}),d.jsx("h4",{children:"dois cenários incomparáveis"}),d.jsx("p",{children:"A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),d.jsxs(Vk,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Diferenciais"}),d.jsx("p",{children:"Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência."})]}),d.jsxs("div",{children:[d.jsx("img",{src:Oe,alt:"foto do diferencial"}),d.jsx("img",{src:Oe,alt:"foto do diferencial"}),d.jsx("img",{src:Oe,alt:"foto do diferencial"}),d.jsx("img",{src:Oe,alt:"foto do diferencial"})]})]}),d.jsxs(Nk,{children:[d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Gastronomias"}),d.jsx("p",{children:"Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."})]}),d.jsxs("div",{children:[d.jsx("img",{src:Oe,alt:"foto de gastronomia"}),d.jsx("img",{src:Oe,alt:"foto de gastronomia"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("img",{src:Oe,alt:"foto de gastronomia"}),d.jsx("img",{src:Oe,alt:"foto de gastronomia"})]}),d.jsxs("div",{children:[d.jsx("h1",{children:"Espaços compartilhados"}),d.jsx("p",{children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),d.jsxs(Bk,{children:[d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Suítes"}),d.jsx("p",{children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),d.jsxs("div",{children:[d.jsx("h1",{children:"Público de alto padrão"}),d.jsx("p",{children:"Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos."})]})]}),d.jsx("div",{children:d.jsx("img",{src:k0,alt:"foto da pousada"})})]}),d.jsx(Fk,{children:d.jsxs("div",{children:[d.jsxs("h1",{children:["Compromisso com o ",d.jsx("b",{children:"Meio Ambiente"})]}),d.jsx("p",{children:"Estamos, profundamente, comprometidos com a sustentabilidade. Utilizamos produtos de produtores rurais locais, promovendo a economia regional e minimizando nosso impacto ambiental. Implementamos práticas ecológicas em todas as nossas operações, desde o uso de energia solar até a gestão eficiente de recursos."})]})}),d.jsxs($k,{children:[d.jsx("h1",{children:"Venha viver essa experiência com a gente!"}),d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]})]}),Gk=E.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  height: 80vh;
  gap: 50px;
  padding: 0 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};
`,Uk=E.div`
  flex: 1;
  height: 100%;
`,Wk=E.h2`
  font-size: 3.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; // Prefixo $ adicionado
`,Yk=E.p`
  margin-bottom: 1.5em;
  font-size: 1.2rem;
  width: 80%;
  color: var(--color--black);
`,qk=E.div`
  flex: 2;
  height: 100%;
`,Kk=E.img`
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
`,Jk=E(Rt)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({$bgColor:e})=>e||"var(--color--green)"}; // Prefixo $ adicionado
    box-shadow: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom: 10px !important;
    top: 90% !important;
  }

  .swiper-button-prev {
    left: 100px;
    margin-right: 5px; /* Espaço entre os botões */
  }

  .swiper-button-next {
    left: 150px; /* Coloca o botão "next" próximo ao botão "prev" */
  }
`,Nx=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>d.jsx(Jk,{navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,modules:[lr,cr,ur],className:"mySwiper",$bgColor:n,children:e.map((i,o)=>d.jsx(zt,{children:d.jsxs(Gk,{imagePosition:r,children:[d.jsxs(Uk,{children:[d.jsx(Wk,{$colorDefined:t,children:i.title})," ",d.jsx(Yk,{children:i.description}),d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]}),d.jsx(qk,{children:d.jsx(Kk,{src:i.imageUrl,alt:i.title})})]})},o))}),Xk=as`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,Qk=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;
    position: relative;

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 65%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s ease-in-out;
        animation: ${Xk} 5s ease-in-out infinite;
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.5s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;
    }
`,Zk=E.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    & > div:nth-child(1) {
        width: 60%;
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    & > div h1 {
        font-size: 3rem;
        color: var(--color--black);
        font-family: var(--font--comfortaa);
    }

    & > div p {
        width: 80%;
        font-family: var(--font--avenir);
        color: var(--color--black);
        line-height: 100%;
        font-size: 1rem;
    }
`,Bx=({images:e})=>{const[t,n]=C.useState(null);return d.jsxs(Qk,{children:[d.jsxs(Zk,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Suítes"}),d.jsx("p",{children:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira excepcional com vista deliciosa para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda."})]}),d.jsx("div",{children:d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),d.jsx("main",{children:e.map((r,i)=>d.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[d.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),d.jsxs("span",{onClick:()=>alert("Conhecendo suíte completa!"),children:[t===i?"Conhecer Suíte Completa":r.text,t===i&&d.jsx(By,{})]})]},i))})]})},e8=E.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    gap: 50px;
`,t8=E.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`,n8=E.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px;
    }
`,r8=E.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
`,i8=E.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);

    & > b {
        color: ${({colorDefinedBold:e})=>e||"var(--color--green)"};
    }
`,o8=E.p`
    color: var(--color--black);
    font-size: 1.2rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--avenir);
`,s8=E(An)`
    margin-top: auto; // Alinha o botão para o fundo
`,Fx=({colorDefinedBold:e})=>d.jsxs(e8,{children:[d.jsx(t8,{children:d.jsxs(n8,{children:[d.jsxs("div",{children:[d.jsx("img",{src:"/public/serra/1.JPG",alt:"Imagem 1"}),d.jsx("img",{src:"/public/serra/1.JPG",alt:"Imagem 2"})]}),d.jsxs("div",{children:[d.jsx("img",{src:"/public/serra/1.JPG",alt:"Imagem 3"}),d.jsx("img",{src:"/public/serra/1.JPG",alt:"Imagem 4"})]})]})}),d.jsxs(r8,{children:[d.jsxs(i8,{colorDefinedBold:e,children:["Pensão ",d.jsx("b",{children:"Completa"})]}),d.jsxs(o8,{children:["Sabe aquela comida com sabor, tempero e afeto que te abraça?",d.jsx("br",{}),d.jsx("br",{}),"Essa é a gastronomia registrada da LeAnge!",d.jsx("br",{}),d.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo nossas deliciosas sobremesas. Adaptamos nosso cardápio para atender a diferentes estilos alimentares, incluindo opções tradicionais, veganas, vegetarianas, diabéticos, low carb e outras preferências individuais."]}),d.jsx(s8,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]})]}),Dc=["/serra/1.JPG","/serra/2.JPG","/serra/1.JPG","/serra/2.JPG","/serra/1.JPG","/serra/2.JPG","/serra/1.JPG","/serra/2.JPG","/serra/1.JPG","/serra/2.JPG"],a8=E.div`
    height: 80vh;
`,l8=E.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 10px;
`,c8=E(zt)`
    width: 100%; // Ajusta a largura para 100% para evitar espaço vazio
    height: 100%;
    display: flex;
    flex-direction: column;
`,A0=E.img`
    width: 100%;
    height: ${e=>e.index%2===0?"40vh":"30vh"}; /* Alternating height */
    object-fit: cover;
    border-radius: 15px;
`,u8=E.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
    }
`,$x=()=>d.jsxs(d.Fragment,{children:[d.jsxs(u8,{children:[d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")}),d.jsx("h1",{children:"Pet Friendly"})]}),d.jsx(a8,{children:d.jsx(Rt,{loop:!0,modules:[ur,lr,cr],autoplay:{delay:1e3,disableOnInteraction:!1},spaceBetween:10,slidesPerView:5,children:Dc.map((t,n)=>d.jsx(c8,{children:d.jsxs(l8,{children:[d.jsx(A0,{src:t,alt:`Pet ${n}`,index:n}),n+1<Dc.length&&d.jsx(A0,{src:Dc[n+1],alt:`Pet ${n+1}`,index:n+1})]})},n))})})]}),d8=E.img`
    width: 90%;
    margin-left: 5%;
    height: 70vh;
    border-radius: 30px;
    object-fit: cover; // Para garantir que a imagem cubra o espaço do slide
`,f8=E.div`
    position: absolute;
    top: 5%;
    left: 7%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 10px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-family: var(--font--comfortaa);
    font-size: 0.7rem;
`,p8=({images:e})=>d.jsx(Rt,{spaceBetween:10,slidesPerView:1,modules:[lr,cr,ur],autoplay:{delay:3e3,disableOnInteraction:!1},children:e.map((n,r)=>d.jsxs(zt,{style:{position:"relative"},children:[d.jsx(d8,{src:n.src,alt:`Atração ${r+1}`}),d.jsx(f8,{children:d.jsx("h3",{children:n.text})})]},r))}),h8=[{src:"../../public/serra/1.JPG",text:"Passeio de bugre"},{src:"../../public/serra/2.JPG",text:"Atração Atração 1: Descrição da Atração 12: Descrição da Atração 2"},{src:"../../public/serra/3.JPG",text:"Atração 3: Descrição da Atração 3"},{src:"../../public/serra/4.JPG",text:"Atração 4: Descrição da Atração 4"},{src:"../../public/serra/5.JPG",text:"Atração 5: Descrição da Atração 5"}],m8=E.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
    }
`,g8=E.div`
    width: 100%;
    height: 70vh;
    position: relative; // Para garantir que o texto fique sobre as imagens
`,Hx=()=>d.jsxs(d.Fragment,{children:[d.jsxs(m8,{children:[d.jsx("h1",{children:"Nossas atrações"}),d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})]}),d.jsx(g8,{children:d.jsx(p8,{images:h8})})]}),M0=E.section`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    height: 15vh;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;
        width: 100%;
    }
`,v8=E.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    padding: 0 5%;
`,y8=E.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 10px; /* Bordas arredondadas */
    position: relative; /* Para posicionar o texto em cima da imagem */
    overflow: hidden; /* Para esconder qualquer conteúdo que extrapole o container */
`,x8=E.h2`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
`,w8=E.p`
    font-size: 1rem;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 5px 20px;
    margin: 10px 0; /* Espaço entre o nome e o depoimento */
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; /* Para garantir que o texto fique acima da imagem */
`,S8=[{id:1,name:"João Silva",text:"Ótima experiência!",bgImages:["/public/serra/1.JPG","/public/serra/2.JPG","/public/serra/3.JPG"]},{id:2,name:"Maria Oliveira",text:"Atendimento excepcional.",bgImages:["/public/serra/4.JPG","/public/serra/5.JPG","/public/serra/6.JPG"]},{id:3,name:"Carlos Pereira",text:"Recomendo a todos!",bgImages:["/public/serra/7.JPG","/public/serra/8.JPG","/public/serra/9.JPG"]},{id:4,name:"Ana Santos",text:"Fiquei encantado!",bgImages:["/public/serra/10.JPG","/public/serra/11.JPG","/public/serra/12.JPG"]},{id:5,name:"Pedro Lima",text:"Voltarei com certeza.",bgImages:["/public/serra/13.JPG","/public/serra/14.JPG","/public/serra/15.JPG"]},{id:6,name:"Fernanda Costa",text:"Uma experiência inesquecível!",bgImages:["/public/serra/16.JPG","/public/serra/17.JPG","/public/serra/18.JPG"]}],Gx=()=>d.jsxs(d.Fragment,{children:[d.jsx(M0,{children:d.jsx("h1",{children:"Palavra do Hóspede"})}),d.jsx(v8,{children:d.jsx(Rt,{slidesPerView:3,spaceBetween:10,modules:[ur],grabCursor:!0,autoplay:{delay:5e3,disableOnInteraction:!1},children:S8.map(e=>d.jsx(zt,{children:d.jsxs(y8,{children:[d.jsx(Rt,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>d.jsx(zt,{children:d.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"10px"}})},n))}),d.jsx(x8,{children:e.name}),d.jsx(w8,{children:e.text})]})},e.id))})}),d.jsx(M0,{children:d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),b8=E.div`
    height: 5vh;
`,T8=E(G.section)`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
`,C8=E(G.div)`
    width: 45%;
    height: 100%;
    background-image: url('../../../public/experienciaSerra/imageHomee.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 100px 0 100px;
`,P8=E(G.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
    }

    & > h1 b {
        color: var(--color--green);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        font-size: 18px;
        line-height: 100%;
        width: 50%;
    }
`,E8=[{backgroundImage:"../../../public/estrutura/aconchego.JPG",title:"Aconchego",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/cozinha.webp",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/suites.jpeg",title:"Suites",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/relaxar.JPG",title:"Relaxar",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"}],j8=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);
    }
    

`,k8=[{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"../../../public/serra/1.JPG"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"../../../public/serra/1.JPG"}],A8=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,M8=[{src:"../../public/serra/1.JPG",text:"Suíte Master 3"},{src:"../../public/serra/2.JPG",text:"Descrição 2"},{src:"../../public/serra/3.JPG",text:"Descrição 3"},{src:"../../public/serra/4.JPG",text:"Descrição 4"},{src:"../../public/serra/5.JPG",text:"Descrição 5"},{src:"../../public/serra/1.JPG",text:"Descrição 6"},{src:"../../public/serra/2.JPG",text:"Descrição 7"},{src:"../../public/serra/3.JPG",text:"Descrição 8"},{src:"../../public/serra/4.JPG",text:"Descrição 9"},{src:"../../public/serra/5.JPG",text:"Descrição 10"}],L8=()=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),d.jsx(b8,{}),d.jsxs(T8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[d.jsx(C8,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}}),d.jsxs(P8,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[d.jsx(G.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE SERRA"}),d.jsxs(G.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY DO ",d.jsx("b",{children:"BRASIL"})]}),d.jsx(G.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),d.jsx(G.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]})]}),d.jsxs(j8,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),d.jsx("p",{children:"Estamos ansisosos por você!"})]}),d.jsx(Zf,{content:E8,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),d.jsx(A8,{children:d.jsx(Nx,{slides:k8})}),d.jsx(Bx,{images:M8}),d.jsx(Fx,{}),d.jsx($x,{}),d.jsx(Hx,{}),d.jsx(Gx,{}),d.jsx(ls,{})]}),O8=E.div`
    height: 5vh;
`,I8=E(G.section)`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
`,R8=E(G.div)`
    width: 45%;
    height: 100%;
    background-image: url('../../../public/experienciaSerra/imageHomee.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100px 0px 100px 0px;
`,z8=E(G.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 22px;
        font-weight: 200;
        color: var(--color--black);
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 80%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
    }

    & > h1 b {
        color: var(--color--blue);
    }

    & > p {
        font-family: var(--font--avenir);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
    }
`,D8=[{backgroundImage:"../../../public/estrutura/aconchego.JPG",title:"Aconchego",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/cozinha.webp",title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/suites.jpeg",title:"Suites",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/estrutura/relaxar.JPG",title:"Relaxar",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar...",buttonText:"Viver minha experiência agora"},{backgroundImage:"../../../public/pousada/mar_pousada2.JPG",title:"Conforto",description:"Desfrute de nossas acomodações com todo o conforto e comodidade...",buttonText:"Viver minha experiência agora"}],_8=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;
    

    & > div h1{
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        text-align: center;
    }

    & > div p{
        text-align: center;
        font-family: var(--font--avenir);
    }
    

`,V8=[{title:"Tranquilidade",description:"A área da sauna fica localizada ao lado da mata, A área da sauna fica localizada ao lado da mat, A área da sauna fica localizada ao lado da mata",imageUrl:"../../../public/serra/1.JPG"},{title:"Conforto",description:"Desfrute de acomodações de luxo...",buttonText:"Reserve já seu lugar",imageUrl:"../../../public/serra/1.JPG"}],N8=E.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,B8=[{src:"../../public/serra/1.JPG",text:"Suíte Master 3"},{src:"../../public/serra/2.JPG",text:"Descrição 2"},{src:"../../public/serra/3.JPG",text:"Descrição 3"},{src:"../../public/serra/4.JPG",text:"Descrição 4"},{src:"../../public/serra/5.JPG",text:"Descrição 5"},{src:"../../public/serra/1.JPG",text:"Descrição 6"},{src:"../../public/serra/2.JPG",text:"Descrição 7"},{src:"../../public/serra/3.JPG",text:"Descrição 8"},{src:"../../public/serra/4.JPG",text:"Descrição 9"},{src:"../../public/serra/5.JPG",text:"Descrição 10"}],F8=()=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),d.jsx(O8,{}),d.jsxs(I8,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[d.jsxs(z8,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[d.jsx(G.h4,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"FALAR SEMPRE SOBRE A LEANGE MAR"}),d.jsxs(G.h1,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:["PET FRIENDLY DO ",d.jsx("b",{children:"BRASIL"})]}),d.jsx(G.p,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.6},children:"Aqui você e seu pet, são mais do que bem-vindos!"}),d.jsx(G.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,ease:"backOut"},children:d.jsx(An,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>alert("Reservado!")})})]}),d.jsx(R8,{initial:{scale:.8,x:"-100vw"},animate:{scale:1,x:0},transition:{duration:.8,ease:"easeOut"}})]}),d.jsxs(_8,{children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Veja um pouco sobre nosso espaço"}),d.jsx("p",{children:"Estamos ansisosos por você!"})]}),d.jsx(Zf,{content:D8,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),d.jsx(N8,{children:d.jsx(Nx,{slides:V8,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),d.jsx(Bx,{images:B8}),d.jsx(Fx,{colorDefinedBold:"var(--color--blue)"}),d.jsx($x,{}),d.jsx(Hx,{}),d.jsx(Gx,{}),d.jsx(ls,{})]}),Hr="/assets/black-BUrso9Bn.png";function $8(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var Ux={exports:{}};(function(e,t){(function(n,r){e.exports=r(C)})(typeof self<"u"?self:Qx,function(n){return function(r){var i={};function o(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return r[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=r,o.c=i,o.d=function(s,a,l){o.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},o.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,a){if(1&a&&(s=o(s)),8&a||4&a&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),2&a&&typeof s!="string")for(var c in s)o.d(l,c,(function(u){return s[u]}).bind(null,c));return l},o.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(a,"a",a),a},o.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var s={linear:function(a,l,c,u){return(c-l)*a/u+l},easeInQuad:function(a,l,c,u){return(c-l)*(a/=u)*a+l},easeOutQuad:function(a,l,c,u){return-(c-l)*(a/=u)*(a-2)+l},easeInOutQuad:function(a,l,c,u){var f=c-l;return(a/=u/2)<1?f/2*a*a+l:-f/2*(--a*(a-2)-1)+l},easeInCubic:function(a,l,c,u){return(c-l)*(a/=u)*a*a+l},easeOutCubic:function(a,l,c,u){return(c-l)*((a=a/u-1)*a*a+1)+l},easeInOutCubic:function(a,l,c,u){var f=c-l;return(a/=u/2)<1?f/2*a*a*a+l:f/2*((a-=2)*a*a+2)+l},easeInQuart:function(a,l,c,u){return(c-l)*(a/=u)*a*a*a+l},easeOutQuart:function(a,l,c,u){return-(c-l)*((a=a/u-1)*a*a*a-1)+l},easeInOutQuart:function(a,l,c,u){var f=c-l;return(a/=u/2)<1?f/2*a*a*a*a+l:-f/2*((a-=2)*a*a*a-2)+l},easeInQuint:function(a,l,c,u){return(c-l)*(a/=u)*a*a*a*a+l},easeOutQuint:function(a,l,c,u){return(c-l)*((a=a/u-1)*a*a*a*a+1)+l},easeInOutQuint:function(a,l,c,u){var f=c-l;return(a/=u/2)<1?f/2*a*a*a*a*a+l:f/2*((a-=2)*a*a*a*a+2)+l},easeInSine:function(a,l,c,u){var f=c-l;return-f*Math.cos(a/u*(Math.PI/2))+f+l},easeOutSine:function(a,l,c,u){return(c-l)*Math.sin(a/u*(Math.PI/2))+l},easeInOutSine:function(a,l,c,u){return-(c-l)/2*(Math.cos(Math.PI*a/u)-1)+l},easeInExpo:function(a,l,c,u){return a==0?l:(c-l)*Math.pow(2,10*(a/u-1))+l},easeOutExpo:function(a,l,c,u){var f=c-l;return a==u?l+f:f*(1-Math.pow(2,-10*a/u))+l},easeInOutExpo:function(a,l,c,u){var f=c-l;return a===0?l:a===u?l+f:(a/=u/2)<1?f/2*Math.pow(2,10*(a-1))+l:f/2*(2-Math.pow(2,-10*--a))+l},easeInCirc:function(a,l,c,u){return-(c-l)*(Math.sqrt(1-(a/=u)*a)-1)+l},easeOutCirc:function(a,l,c,u){return(c-l)*Math.sqrt(1-(a=a/u-1)*a)+l},easeInOutCirc:function(a,l,c,u){var f=c-l;return(a/=u/2)<1?-f/2*(Math.sqrt(1-a*a)-1)+l:f/2*(Math.sqrt(1-(a-=2)*a)+1)+l},easeInElastic:function(a,l,c,u){var f,p,v,y=c-l;return v=1.70158,a===0?l:(a/=u)==1?l+y:((p=0)||(p=.3*u),(f=y)<Math.abs(y)?(f=y,v=p/4):v=p/(2*Math.PI)*Math.asin(y/f),-f*Math.pow(2,10*(a-=1))*Math.sin((a*u-v)*(2*Math.PI)/p)+l)},easeOutElastic:function(a,l,c,u){var f,p,v,y=c-l;return v=1.70158,a===0?l:(a/=u)==1?l+y:((p=0)||(p=.3*u),(f=y)<Math.abs(y)?(f=y,v=p/4):v=p/(2*Math.PI)*Math.asin(y/f),f*Math.pow(2,-10*a)*Math.sin((a*u-v)*(2*Math.PI)/p)+y+l)},easeInOutElastic:function(a,l,c,u){var f,p,v,y=c-l;return v=1.70158,a===0?l:(a/=u/2)==2?l+y:((p=0)||(p=u*.44999999999999996),(f=y)<Math.abs(y)?(f=y,v=p/4):v=p/(2*Math.PI)*Math.asin(y/f),a<1?f*Math.pow(2,10*(a-=1))*Math.sin((a*u-v)*(2*Math.PI)/p)*-.5+l:f*Math.pow(2,-10*(a-=1))*Math.sin((a*u-v)*(2*Math.PI)/p)*.5+y+l)},easeInBack:function(a,l,c,u,f){return f===void 0&&(f=1.70158),(c-l)*(a/=u)*a*((f+1)*a-f)+l},easeOutBack:function(a,l,c,u,f){return f===void 0&&(f=1.70158),(c-l)*((a=a/u-1)*a*((f+1)*a+f)+1)+l},easeInOutBack:function(a,l,c,u,f){var p=c-l;return f===void 0&&(f=1.70158),(a/=u/2)<1?p/2*(a*a*((1+(f*=1.525))*a-f))+l:p/2*((a-=2)*a*((1+(f*=1.525))*a+f)+2)+l},easeInBounce:function(a,l,c,u){var f=c-l;return f-s.easeOutBounce(u-a,0,f,u)+l},easeOutBounce:function(a,l,c,u){var f=c-l;return(a/=u)<.36363636363636365?f*(7.5625*a*a)+l:a<.7272727272727273?f*(7.5625*(a-=.5454545454545454)*a+.75)+l:a<.9090909090909091?f*(7.5625*(a-=.8181818181818182)*a+.9375)+l:f*(7.5625*(a-=.9545454545454546)*a+.984375)+l},easeInOutBounce:function(a,l,c,u){var f=c-l;return a<u/2?.5*s.easeInBounce(2*a,0,f,u)+l:.5*s.easeOutBounce(2*a-u,0,f,u)+.5*f+l}};r.exports=s},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return wt});var s,a,l=o(0),c=o.n(l),u=o(1),f=o.n(u);function p(M,I){return M+Math.random()*(I-M)}function v(M,I){for(var D=0;D<I.length;D++){var O=I[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(M,O.key,O)}}function y(M,I,D){return I in M?Object.defineProperty(M,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[I]=D,M}(function(M){M[M.Circle=0]="Circle",M[M.Square=1]="Square",M[M.Strip=2]="Strip"})(s||(s={})),function(M){M[M.Positive=1]="Positive",M[M.Negative=-1]="Negative"}(a||(a={}));var x=function(){function M(O,X,$,Q){(function(Ml,Ll){if(!(Ml instanceof Ll))throw new TypeError("Cannot call a class as a function")})(this,M),y(this,"context",void 0),y(this,"radius",void 0),y(this,"x",void 0),y(this,"y",void 0),y(this,"w",void 0),y(this,"h",void 0),y(this,"vx",void 0),y(this,"vy",void 0),y(this,"shape",void 0),y(this,"angle",void 0),y(this,"angularSpin",void 0),y(this,"color",void 0),y(this,"rotateY",void 0),y(this,"rotationDirection",void 0),y(this,"getOptions",void 0),this.getOptions=X;var ce,Se,ue=this.getOptions(),on=ue.colors,Dt=ue.initialVelocityX,_t=ue.initialVelocityY;this.context=O,this.x=$,this.y=Q,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof Dt=="number"?p(-Dt,Dt):p(Dt.min,Dt.max),this.vy=typeof _t=="number"?p(-_t,0):p(_t.min,_t.max),this.shape=(ce=0,Se=2,Math.floor(ce+Math.random()*(Se-ce+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=on[Math.floor(Math.random()*on.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?a.Positive:a.Negative}var I,D;return I=M,(D=[{key:"update",value:function(){var O=this.getOptions(),X=O.gravity,$=O.wind,Q=O.friction,ce=O.opacity,Se=O.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=X,this.vx+=$,this.vx*=Q,this.vy*=Q,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);var ue=.1*this.rotationDirection;if(this.rotateY+=ue,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=ce,this.context.lineCap="round",this.context.lineWidth=2,Se&&typeof Se=="function")Se.call(this,this.context);else switch(this.shape){case s.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case s.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case s.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(I.prototype,D),M}();function S(M,I,D){return I in M?Object.defineProperty(M,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[I]=D,M}var g=function M(I,D){var O=this;(function($,Q){if(!($ instanceof Q))throw new TypeError("Cannot call a class as a function")})(this,M),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"getOptions",void 0),S(this,"x",0),S(this,"y",0),S(this,"w",0),S(this,"h",0),S(this,"lastNumberOfPieces",0),S(this,"tweenInitTime",Date.now()),S(this,"particles",[]),S(this,"particlesGenerated",0),S(this,"removeParticleAt",function($){O.particles.splice($,1)}),S(this,"getParticle",function(){var $=p(O.x,O.w+O.x),Q=p(O.y,O.h+O.y);return new x(O.context,O.getOptions,$,Q)}),S(this,"animate",function(){var $=O.canvas,Q=O.context,ce=O.particlesGenerated,Se=O.lastNumberOfPieces,ue=O.getOptions(),on=ue.run,Dt=ue.recycle,_t=ue.numberOfPieces,Ml=ue.debug,Ll=ue.tweenFunction,Ol=ue.tweenDuration;if(!on)return!1;var Il=O.particles.length,Ni=Dt?Il:ce,Rl=Date.now();if(Ni<_t){Se!==_t&&(O.tweenInitTime=Rl,O.lastNumberOfPieces=_t);for(var ep=O.tweenInitTime,Jx=Ll(Rl-ep>Ol?Ol:Math.max(0,Rl-ep),Ni,_t,Ol),tp=Math.round(Jx-Ni),np=0;np<tp;np++)O.particles.push(O.getParticle());O.particlesGenerated+=tp}return Ml&&(Q.font="12px sans-serif",Q.fillStyle="#333",Q.textAlign="right",Q.fillText("Particles: ".concat(Il),$.width-10,$.height-20)),O.particles.forEach(function(Bi,rp){Bi.update(),(Bi.y>$.height||Bi.y<-100||Bi.x>$.width+100||Bi.x<-100)&&(Dt&&Ni<=_t?O.particles[rp]=O.getParticle():O.removeParticleAt(rp))}),Il>0||Ni<_t}),this.canvas=I;var X=this.canvas.getContext("2d");if(!X)throw new Error("Could not get canvas context");this.context=X,this.getOptions=D};function h(M,I){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(M);I&&(O=O.filter(function(X){return Object.getOwnPropertyDescriptor(M,X).enumerable})),D.push.apply(D,O)}return D}function m(M){for(var I=1;I<arguments.length;I++){var D=arguments[I]!=null?arguments[I]:{};I%2?h(Object(D),!0).forEach(function(O){b(M,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(O){Object.defineProperty(M,O,Object.getOwnPropertyDescriptor(D,O))})}return M}function w(M,I){for(var D=0;D<I.length;D++){var O=I[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(M,O.key,O)}}function b(M,I,D){return I in M?Object.defineProperty(M,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[I]=D,M}var T={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},P=function(){function M(O,X){var $=this;(function(ce,Se){if(!(ce instanceof Se))throw new TypeError("Cannot call a class as a function")})(this,M),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"_options",void 0),b(this,"generator",void 0),b(this,"rafId",void 0),b(this,"setOptionsWithDefaults",function(ce){var Se={confettiSource:{x:0,y:0,w:$.canvas.width,h:0}};$._options=m(m(m({},Se),T),ce),Object.assign($,ce.confettiSource)}),b(this,"update",function(){var ce=$.options,Se=ce.run,ue=ce.onConfettiComplete,on=$.canvas,Dt=$.context;Se&&(Dt.fillStyle="white",Dt.clearRect(0,0,on.width,on.height)),$.generator.animate()?$.rafId=requestAnimationFrame($.update):(ue&&typeof ue=="function"&&$.generator.particlesGenerated>0&&ue.call($,$),$._options.run=!1)}),b(this,"reset",function(){$.generator&&$.generator.particlesGenerated>0&&($.generator.particlesGenerated=0,$.generator.particles=[],$.generator.lastNumberOfPieces=0)}),b(this,"stop",function(){$.options={run:!1},$.rafId&&(cancelAnimationFrame($.rafId),$.rafId=void 0)}),this.canvas=O;var Q=this.canvas.getContext("2d");if(!Q)throw new Error("Could not get canvas context");this.context=Q,this.generator=new g(this.canvas,function(){return $.options}),this.options=X,this.update()}var I,D;return I=M,(D=[{key:"options",get:function(){return this._options},set:function(O){var X=this._options&&this._options.run,$=this._options&&this._options.recycle;this.setOptionsWithDefaults(O),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof O.recycle=="boolean"&&O.recycle&&$===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof O.run=="boolean"&&O.run&&X===!1&&this.update()}}])&&w(I.prototype,D),M}();function j(M){return function(I){if(Array.isArray(I))return W(I)}(M)||function(I){if(typeof Symbol<"u"&&Symbol.iterator in Object(I))return Array.from(I)}(M)||H(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(M){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I})(M)}function k(){return(k=Object.assign||function(M){for(var I=1;I<arguments.length;I++){var D=arguments[I];for(var O in D)Object.prototype.hasOwnProperty.call(D,O)&&(M[O]=D[O])}return M}).apply(this,arguments)}function R(M,I){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(M);I&&(O=O.filter(function(X){return Object.getOwnPropertyDescriptor(M,X).enumerable})),D.push.apply(D,O)}return D}function B(M){for(var I=1;I<arguments.length;I++){var D=arguments[I]!=null?arguments[I]:{};I%2?R(Object(D),!0).forEach(function(O){ot(M,O,D[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):R(Object(D)).forEach(function(O){Object.defineProperty(M,O,Object.getOwnPropertyDescriptor(D,O))})}return M}function _(M,I){return function(D){if(Array.isArray(D))return D}(M)||function(D,O){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(D)))){var X=[],$=!0,Q=!1,ce=void 0;try{for(var Se,ue=D[Symbol.iterator]();!($=(Se=ue.next()).done)&&(X.push(Se.value),!O||X.length!==O);$=!0);}catch(on){Q=!0,ce=on}finally{try{$||ue.return==null||ue.return()}finally{if(Q)throw ce}}return X}}(M,I)||H(M,I)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function H(M,I){if(M){if(typeof M=="string")return W(M,I);var D=Object.prototype.toString.call(M).slice(8,-1);return D==="Object"&&M.constructor&&(D=M.constructor.name),D==="Map"||D==="Set"?Array.from(M):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?W(M,I):void 0}}function W(M,I){(I==null||I>M.length)&&(I=M.length);for(var D=0,O=new Array(I);D<I;D++)O[D]=M[D];return O}function ie(M,I){if(!(M instanceof I))throw new TypeError("Cannot call a class as a function")}function ee(M,I){for(var D=0;D<I.length;D++){var O=I[D];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(M,O.key,O)}}function L(M,I){return(L=Object.setPrototypeOf||function(D,O){return D.__proto__=O,D})(M,I)}function V(M){var I=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var D,O=te(M);if(I){var X=te(this).constructor;D=Reflect.construct(O,arguments,X)}else D=O.apply(this,arguments);return N(this,D)}}function N(M,I){return!I||A(I)!=="object"&&typeof I!="function"?J(M):I}function J(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function te(M){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(I){return I.__proto__||Object.getPrototypeOf(I)})(M)}function ot(M,I,D){return I in M?Object.defineProperty(M,I,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[I]=D,M}var st=c.a.createRef(),xt=function(M){(function($,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(Q&&Q.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Q&&L($,Q)})(X,M);var I,D,O=V(X);function X($){var Q;ie(this,X);for(var ce=arguments.length,Se=new Array(ce>1?ce-1:0),ue=1;ue<ce;ue++)Se[ue-1]=arguments[ue];return ot(J(Q=O.call.apply(O,[this,$].concat(Se))),"canvas",c.a.createRef()),ot(J(Q),"confetti",void 0),Q.canvas=$.canvasRef||st,Q}return I=X,(D=[{key:"componentDidMount",value:function(){if(this.canvas.current){var $=De(this.props)[0];this.confetti=new P(this.canvas.current,$)}}},{key:"componentDidUpdate",value:function(){var $=De(this.props)[0];this.confetti&&(this.confetti.options=$)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var $=_(De(this.props),2),Q=$[0],ce=$[1],Se=B({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},ce.style);return c.a.createElement("canvas",k({width:Q.width,height:Q.height,ref:this.canvas},ce,{style:Se}))}}])&&ee(I.prototype,D),X}(l.Component);function De(M){var I={},D={},O=[].concat(j(Object.keys(T)),["confettiSource","drawShape","onConfettiComplete"]),X=["canvasRef"];for(var $ in M){var Q=M[$];O.includes($)?I[$]=Q:X.includes($)?X[$]=Q:D[$]=Q}return[I,D,{}]}ot(xt,"defaultProps",B({},T)),ot(xt,"displayName","ReactConfetti");var wt=c.a.forwardRef(function(M,I){return c.a.createElement(xt,k({canvasRef:I},M))});i.default=wt}]).default})})(Ux);var H8=Ux.exports;const G8=Oi(H8),U8=as`
  0% {
    border-bottom: 1px solid var(--color--green);
    border-top: 1px solid var(--color--blue);
    border-left: 1px solid var(--color--green);
    border-right: 1px solid var(--color--blue);
  }
  25% {
    border-left: 1px solid var(--color--green);
    border-right: 1px solid var(--color--blue);
    border-top: 1px solid var(--color--green);
    border-bottom: 1px solid var(--color--blue);
  }
  50% {
    border-top: 1px solid var(--color--green);
    border-bottom: 1px solid var(--color--blue);
    border-right: 1px solid var(--color--green);
    border-left: 1px solid var(--color--blue);
  }
  75% {
    border-right: 1px solid var(--color--green);
    border-left: 1px solid var(--color--blue);
    border-bottom: 1px solid var(--color--green);
    border-top: 1px solid var(--color--blue);
  }
  100% {
    border-bottom: 1px solid var(--color--green);
    border-top: 1px solid var(--color--blue);
    border-left: 1px solid var(--color--green);
    border-right: 1px solid var(--color--blue);
  }
`,W8=E.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 2.5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 25px;
        animation: ${U8} 1s linear infinite;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease; 
    }
`,Y8=E.header`
    display: flex;
    gap: 5px;
`,at=E(({isActive:e,...t})=>d.jsx(r1,{...t}))`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--avenir);
    padding: 5px 15px;
    transition: all 0.3s ease;
    border-radius: var(--border--radius--btn);
    background-color: ${({isActive:e,variant:t})=>e?t==="serra"?"var(--color--green)":t==="mar"?"var(--color--blue)":"var(--color--black)":"transparent"};
    color: ${({isActive:e})=>e?"var(--color--white)":"var(--color--black)"};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
        border-radius: var(--border--radius--btn);
    }

    &:hover {
        color: var(--color--white);
        background-color: ${({variant:e})=>e==="serra"?"var(--color--green)":e==="mar"?"var(--color--blue)":"var(--color--black)"};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
    }
`,Qe=E.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
    overflow: hidden;

    ${({isVisible:e})=>e&&`
        width: 13px;
        height: 13px;
        opacity: 1;
        transform: scale(1);
        margin-right: 7.5px;
    `}
`,q8=E.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,L0=E(at)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,K8=E.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        z-index: 999;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 15px;

        & > img {
            width: 30%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px;
            font-family: var(--font--comfortaa);
            border: none;
            font-size: 12px;
            padding: 7.5px;
            gap: 2.5px;
            background-color: transparent;
            color: var(--color--black);
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.2s ease;
            border: 1px solid var(--color--black);
            background-color: ${({isClicked:e})=>e?"var(--color--black)":"transparent"};
            color: ${({isClicked:e})=>e?"var(--color--white)":"var(--color--black)"};

            &:hover {
                background-color: var(--color--black);
                color: var(--color--white);
                border: 1px solid var(--color--black);
                transform: scale(0.95);
            }
        }
    }
`,J8=E.div`
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    width: 250px;
    height: 95vh;
    margin-top: 2.5vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    ${({isOpen:e})=>e&&`
        transform: translateX(0);
    `}

    & > button:nth-child(1) {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--color--black);
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
            transform: rotate(180deg) scale(0.95);
            border: 2px solid var(--color--black);
            background-color: red;
        }
    }

    & > img {
        width: 65%;
        margin-top: 50px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`,X8=()=>{const e=Nr(),[t,n]=C.useState(!1),[r,i]=C.useState(!1),[o,s]=C.useState(!1),[a,l]=C.useState(!1),[c,u]=C.useState(!1);let f;const p=()=>{l(x=>!x),u(x=>!x)},v=()=>{l(!1),u(!1)},y=()=>{s(!0),clearTimeout(f),f=setTimeout(()=>{s(!1)},3e3)};return C.useEffect(()=>(window.addEventListener("scroll",y),()=>{window.removeEventListener("scroll",y),clearTimeout(f)}),[]),C.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const x=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},5e3);return()=>clearTimeout(x)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),d.jsxs(d.Fragment,{children:[d.jsxs(W8,{isScrolled:o,children:[t&&d.jsx(q8,{isVisible:r,children:d.jsx(G8,{})}),d.jsx(r1,{to:"/","aria-label":"Home",children:d.jsxs("picture",{children:[d.jsx("source",{media:"(max-width: 480px)",srcSet:Hr}),d.jsx("source",{media:"(max-width: 768px)",srcSet:Hr}),d.jsx("source",{media:"(min-width: 769px)",srcSet:Hr}),d.jsx("img",{src:Hr,alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),d.jsxs(Y8,{children:[d.jsxs(at,{to:"/",isActive:e.pathname==="/",children:[d.jsx(Qe,{isVisible:e.pathname==="/",children:d.jsx(Ym,{})}),"Início"]}),d.jsxs(at,{to:"/sobre",isActive:e.pathname==="/sobre",children:[d.jsx(Qe,{isVisible:e.pathname==="/sobre",children:d.jsx(qm,{})}),"Sobre nós"]}),d.jsxs(at,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[d.jsx(Qe,{isVisible:e.pathname==="/mar",children:d.jsx(Um,{})}),"Le Ange Mar"]}),d.jsxs(at,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[d.jsx(Qe,{isVisible:e.pathname==="/serra",children:d.jsx(Km,{})}),"Le Ange Serra"]}),d.jsxs(at,{to:"/home/#pacotes",isActive:e.pathname==="/home/#pacotes",children:[d.jsx(Qe,{isVisible:e.pathname==="/home/#pacotes",children:d.jsx(ct,{})}),"Pacotes"]}),d.jsxs(L0,{to:"/event",isActive:e.pathname==="/event",children:[d.jsx(Qe,{isVisible:e.pathname==="/event",children:d.jsx(Wm,{})}),"Eventos"]}),d.jsxs(at,{to:"/acomoda",isActive:e.pathname==="/acomoda",children:[d.jsx(Qe,{isVisible:e.pathname==="/acomoda",children:d.jsx(ct,{})}),"Acomodações"]})]}),d.jsx(Vn,{text:"Fazer minha reserva"})]}),d.jsxs(K8,{isScrolled:o,children:[d.jsx("img",{src:Hr,alt:"logo da le ange"}),d.jsxs("button",{onClick:p,isClicked:c,children:["Menu",d.jsx($8,{})]})]}),d.jsxs(J8,{isOpen:a,children:[d.jsx("button",{onClick:v,children:"X"}),d.jsx("img",{src:Hr,alt:"logo da le ange"}),d.jsxs("div",{children:[d.jsxs(at,{to:"/",isActive:e.pathname==="/",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/",children:d.jsx(Ym,{})}),"Início"]}),d.jsxs(at,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/sobre",children:d.jsx(qm,{})}),"Sobre nós"]}),d.jsxs(at,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/mar",children:d.jsx(Um,{})}),"Le Ange Mar"]}),d.jsxs(at,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/serra",children:d.jsx(Km,{})}),"Le Ange Serra"]}),d.jsxs(at,{to:"/home/#pacotes",isActive:e.pathname==="/home/#pacotes",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/home/#pacotes",children:d.jsx(ct,{})}),"Pacotes"]}),d.jsxs(L0,{to:"/event",isActive:e.pathname==="/event",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/event",children:d.jsx(Wm,{})}),"Eventos"]}),d.jsxs(at,{to:"/acomoda",isActive:e.pathname==="/acomoda",onClick:v,children:[d.jsx(Qe,{isVisible:e.pathname==="/acomoda",children:d.jsx(ct,{})}),"Acomodações"]})]}),d.jsx(Vn,{text:"Fazer minha reserva"})]})]})},Q8=E.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 4px var(--color--black);
  color: var(--color--black);
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,Wx=E.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 10px;
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 500;
  transition: transform 0.3s ease; /* Adicionei a transição para o transform */
`,Z8=E(Wx)`
  position: absolute;
  inset: 0;
  background-color: var(--color--blue);
  transform: translate(0%, 100%);
`,eA=E.span`
color: var(--color--black);
`,tA=E.span`
  color: var(--color--white);
`,Yx=({text:e="Quick View",text2:t="Shop Now"})=>d.jsxs(Q8,{children:[d.jsxs(Wx,{className:"default-btn",children:[d.jsx(D3,{size:15,color:"var(--color--black)"}),d.jsx(eA,{children:e})]}),d.jsxs(Z8,{className:"hover-btn",children:[d.jsx(_3,{size:15,color:"var(--color--white)"}),d.jsx(tA,{children:t})]})]});function qx(e){return se({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z",fill:"currentColor"},child:[]}]})(e)}function Kx(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"},child:[]}]})(e)}const nA=E.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`,rA=E.section`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
`,iA=E.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
`,oA=E.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 10px 0 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
`,sA=E.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;
`,aA=E.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px 0 10px 0;
    transition: border 0.3s;

    &.active {
        border: 3px solid var(--color--black);
    }

    &:hover {
        border: 2px solid var(--color--green);
    }
`,lA=E.main`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    border: 2px solid var(--color--black);
    border-radius: 0px 30px 0px 30px;

    & > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    & > section > div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
            font-family: var(--font--avenir);
            font-size: 1.2em;
            color: var(--color--black);
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        & > hr {
            width: 100%;
            height: 2px;
            background-color: var(--color--black);
            border-color: var(--color--black);
        }
    }
`,cA=E.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
`,uA=E.p`
    font-size: 1rem;
    color: var(--color--black); 
`,dA=E.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;

    & > div:nth-child(1), & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;
    }
`,fA=E.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,pA=E.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */
`,O0=E.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50px; /* Largura do botão */
    height: 50px; /* Altura do botão */

    &:after {
        font-size: 0px;
    }

    &:hover {
        background-color: var(--color--white);
        color: var(--color--black);
        border: 1px solid var(--color--black);
    }
`,hA=E.div`
    height: 12vh;
`,mA=({suites:e})=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),d.jsx(hA,{}),d.jsx(nA,{children:d.jsxs(Rt,{navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[lr,cr],children:[e.map((t,n)=>{const[r,i]=C.useState(t.images[0]);return d.jsx(zt,{children:d.jsxs(rA,{children:[d.jsxs(iA,{children:[d.jsx(oA,{src:r,alt:t.NomedaSuite}),d.jsx(sA,{children:t.images.map((o,s)=>d.jsx(aA,{src:o,alt:`Thumbnail ${s+1}`,onClick:()=>i(o),className:r===o?"active":""},s))})]}),d.jsxs(lA,{children:[d.jsxs("section",{children:[d.jsxs("div",{children:[d.jsx(cA,{children:t.NomedaPousada}),d.jsxs("p",{children:["Suíte: ",t.NomedaSuite]})]}),d.jsx("div",{children:d.jsx("hr",{})})]}),d.jsx(fA,{children:t.features.map((o,s)=>d.jsxs("span",{children:[o.icon," ",o.text]},s))}),d.jsxs(dA,{children:[d.jsxs("div",{children:[d.jsx(qx,{size:30})," ",t.medida]}),d.jsxs("div",{children:[d.jsx(Kx,{size:30})," ",t.adultos]})]}),d.jsx(uA,{children:t.Description}),d.jsx(Yx,{text:"Fazer reserva!",text2:"Vamos lá!"})]})]})},n)}),d.jsxs(pA,{children:[d.jsx(O0,{className:"swiper-button-prev custom",children:d.jsx(Dx,{})}),d.jsx(O0,{className:"swiper-button-next custom",children:d.jsx(_x,{})})]})]})})]}),gA=E.section`
    width: 100%;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`,vA=E.section`
    width: 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
`,yA=E.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
`,xA=E.img`
    width: 100%;
    height: 80%;
    border-radius: 0px 10px 0 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
`,wA=E.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 20%;
`,SA=E.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px 0 10px 0;
    transition: border 0.3s;

    &.active {
        border: 3px solid var(--color--black);
    }

    &:hover {
        border: 2px solid var(--color--green);
    }
`,bA=E.main`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    border: 2px solid var(--color--black);
    border-radius: 0px 30px 0px 30px;

    & > section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    & > section > div:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p {
            font-family: var(--font--avenir);
            font-size: 1.2em;
            color: var(--color--black);
        }
    }

    & > section > div:nth-child(2){
        width: 100%;
        & > hr {
            width: 100%;
            height: 2px;
            background-color: var(--color--black);
            border-color: var(--color--black);
        }
    }
`,TA=E.h2`
    font-size: 2rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
`,CA=E.p`
    font-size: 1rem;
    color: var(--color--black); 
`,PA=E.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    width: 50%;

    & > div:nth-child(1), & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;
    }
`,EA=E.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,jA=E.div`
    position: absolute;
    bottom: 50px; /* Distância do fundo */
    right: 25px; /* Distância da direita */
    display: flex;
    width: 10%;
    gap: 5px; /* Espaçamento entre os botões */
`,I0=E.div`
    background-color: var(--color--black);
    color: white;
    padding: 15px; /* Tamanho do botão */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex; /* Flexbox para centralizar o ícone */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50px; /* Largura do botão */
    height: 50px; /* Altura do botão */

    &:after {
        font-size: 0px;
    }

    &:hover {
        background-color: var(--color--white);
        color: var(--color--black);
        border: 1px solid var(--color--black);
    }
`,kA=E.div`
    height: 5vh;
`,AA=({suites:e})=>d.jsxs(d.Fragment,{children:[d.jsx(jn,{children:d.jsx("title",{children:"Acomodações - Pousada Le Ange"})}),d.jsx(kA,{}),d.jsx(gA,{children:d.jsxs(Rt,{navigation:{nextEl:".swiper-button-next.custom",prevEl:".swiper-button-prev.custom"},pagination:!1,spaceBetween:20,modules:[lr,cr],children:[e.map((t,n)=>{const[r,i]=C.useState(t.images[0]);return d.jsx(zt,{children:d.jsxs(vA,{children:[d.jsxs(bA,{children:[d.jsxs("section",{children:[d.jsxs("div",{children:[d.jsx(TA,{children:t.NomedaPousada}),d.jsxs("p",{children:["Suíte: ",t.NomedaSuite]})]}),d.jsx("div",{children:d.jsx("hr",{})})]}),d.jsx(EA,{children:t.features.map((o,s)=>d.jsxs("span",{children:[o.icon," ",o.text]},s))}),d.jsxs(PA,{children:[d.jsxs("div",{children:[d.jsx(qx,{size:30})," ",t.medida]}),d.jsxs("div",{children:[d.jsx(Kx,{size:30})," ",t.adultos]})]}),d.jsx(CA,{children:t.Description}),d.jsx(Yx,{text:"Fazer reserva!",text2:"Vamos lá!"})]}),d.jsxs(yA,{children:[d.jsx(xA,{src:r,alt:t.NomedaSuite}),d.jsx(wA,{children:t.images.map((o,s)=>d.jsx(SA,{src:o,alt:`Thumbnail ${s+1}`,onClick:()=>i(o),className:r===o?"active":""},s))})]})]})},n)}),d.jsxs(jA,{children:[d.jsx(I0,{className:"swiper-button-prev custom",children:d.jsx(Dx,{})}),d.jsx(I0,{className:"swiper-button-next custom",children:d.jsx(_x,{})})]})]})}),d.jsx(ls,{})]}),MA=[{NomedaSuite:"Master 1",NomedaPousada:"Le Ange Serra",medida:"28m²",adultos:"Até 3 adultos",Description:"Descrição da suíte 1.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]},{NomedaSuite:"Master 2",NomedaPousada:"Le Ange Serra",medida:"30m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"},{icon:d.jsx(jt,{}),text:"Música"},{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]},{NomedaSuite:"Master 3",NomedaPousada:"Le Ange Serra",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]}],LA=[{NomedaSuite:"Master 1",NomedaPousada:"Le Ange Serra",medida:"28m²",adultos:"Até 3 adultos",Description:"Descrição da suíte 1.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]},{NomedaSuite:"Master 2",NomedaPousada:"Le Ange Serra",medida:"30m²",adultos:"Até 4 adultos",Description:"Descrição da suíte 2.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"},{icon:d.jsx(jt,{}),text:"Música"},{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]},{NomedaSuite:"Master 3",NomedaPousada:"Le Ange Serra",medida:"32m²",adultos:"Até 2 adultos",Description:"Descrição da suíte 3.",features:[{icon:d.jsx(At,{}),text:"Todas as refeições incluídas"},{icon:d.jsx(jt,{}),text:"Música ao vivo"},{icon:d.jsx(kt,{}),text:"Taxa pet free (não cobramos por pet)"}],images:["/public/suites/master-6.webp","/public/suites/standart4.webp","/public/suites/standart7.webp","/public/suites/stardart-5.webp","/public/suites/stardart-5.webp"]}],OA=()=>d.jsxs(d.Fragment,{children:[d.jsx(mA,{suites:MA}),d.jsx(AA,{suites:LA})]});function IA(){const{pathname:e}=Nr();return C.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function RA(){const e=Nr();return d.jsxs(d.Fragment,{children:[d.jsx(IA,{}),d.jsx(YP,{children:d.jsxs(hb,{location:e,children:[d.jsx(hr,{path:"/",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(Pk,{})})}),d.jsx(hr,{path:"/sobre",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(Hk,{})})}),d.jsx(hr,{path:"/mar",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(F8,{})})}),d.jsx(hr,{path:"/serra",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(L8,{})})}),d.jsx(hr,{path:"/event",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(Lk,{})})}),d.jsx(hr,{path:"/acomoda",element:d.jsx(G.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:d.jsx(OA,{})})})]},e.pathname)})]})}function zA(){return d.jsxs(Sb,{children:[d.jsx(X8,{}),d.jsx(RA,{})]})}Wv(document.getElementById("root")).render(d.jsx(C.StrictMode,{children:d.jsx(zA,{})}));
