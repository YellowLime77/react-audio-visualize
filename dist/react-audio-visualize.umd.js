(function(V,w){typeof exports=="object"&&typeof module<"u"?w(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],w):(V=typeof globalThis<"u"?globalThis:V||self,w(V.AudioVisualize={},V.React))})(this,function(V,w){"use strict";var X={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function ke(){if(ie)return N;ie=1;var l=w,d=Symbol.for("react.element"),S=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,m=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(s,c,v){var i,a={},g=null,b=null;v!==void 0&&(g=""+v),c.key!==void 0&&(g=""+c.key),c.ref!==void 0&&(b=c.ref);for(i in c)y.call(c,i)&&!E.hasOwnProperty(i)&&(a[i]=c[i]);if(s&&s.defaultProps)for(i in c=s.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:d,type:s,key:g,ref:b,props:a,_owner:m.current}}return N.Fragment=S,N.jsx=_,N.jsxs=_,N}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Fe(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var l=w,d=Symbol.for("react.element"),S=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),i=Symbol.for("react.suspense_list"),a=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),j=Symbol.iterator,k="@@iterator";function x(e){if(e===null||typeof e!="object")return null;var r=j&&e[j]||e[k];return typeof r=="function"?r:null}var P=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];O("error",e,t)}}function O(e,r,t){{var n=P.ReactDebugCurrentFrame,f=n.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var p=t.map(function(u){return String(u)});p.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,p)}}var A=!1,Le=!1,Ne=!1,We=!1,Be=!1,ce;ce=Symbol.for("react.module.reference");function Ue(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===E||Be||e===m||e===v||e===i||We||e===b||A||Le||Ne||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===a||e.$$typeof===_||e.$$typeof===s||e.$$typeof===c||e.$$typeof===ce||e.getModuleId!==void 0))}function ze(e,r,t){var n=e.displayName;if(n)return n;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function fe(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case S:return"Portal";case E:return"Profiler";case m:return"StrictMode";case v:return"Suspense";case i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s:var r=e;return fe(r)+".Consumer";case _:var t=e;return fe(t._context)+".Provider";case c:return ze(e,e.render,"ForwardRef");case a:var n=e.displayName||null;return n!==null?n:F(e.type)||"Memo";case g:{var f=e,p=f._payload,u=f._init;try{return F(u(p))}catch{return null}}}return null}var Y=Object.assign,B=0,le,de,ve,pe,he,me,ge;function ye(){}ye.__reactDisabledLog=!0;function Je(){{if(B===0){le=console.log,de=console.info,ve=console.warn,pe=console.error,he=console.group,me=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}}function Ge(){{if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:le}),info:Y({},e,{value:de}),warn:Y({},e,{value:ve}),error:Y({},e,{value:pe}),group:Y({},e,{value:he}),groupCollapsed:Y({},e,{value:me}),groupEnd:Y({},e,{value:ge})})}B<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=P.ReactCurrentDispatcher,$;function z(e,r,t){{if($===void 0)try{throw Error()}catch(f){var n=f.stack.trim().match(/\n( *(at )?)/);$=n&&n[1]||""}return`
`+$+e}}var q=!1,J;{var He=typeof WeakMap=="function"?WeakMap:Map;J=new He}function Ee(e,r){if(!e||q)return"";{var t=J.get(e);if(t!==void 0)return t}var n;q=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var p;p=Q.current,Q.current=null,Je();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(I){n=I}Reflect.construct(e,[],u)}else{try{u.call()}catch(I){n=I}e.call(u.prototype)}}else{try{throw Error()}catch(I){n=I}e()}}catch(I){if(I&&n&&typeof I.stack=="string"){for(var o=I.stack.split(`
`),C=n.stack.split(`
`),R=o.length-1,T=C.length-1;R>=1&&T>=0&&o[R]!==C[T];)T--;for(;R>=1&&T>=0;R--,T--)if(o[R]!==C[T]){if(R!==1||T!==1)do if(R--,T--,T<0||o[R]!==C[T]){var D=`
`+o[R].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&J.set(e,D),D}while(R>=1&&T>=0);break}}}finally{q=!1,Q.current=p,Ge(),Error.prepareStackTrace=f}var L=e?e.displayName||e.name:"",De=L?z(L):"";return typeof e=="function"&&J.set(e,De),De}function Ke(e,r,t){return Ee(e,!1)}function Xe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,Xe(e));if(typeof e=="string")return z(e);switch(e){case v:return z("Suspense");case i:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ke(e.render);case a:return G(e.type,r,t);case g:{var n=e,f=n._payload,p=n._init;try{return G(p(f),r,t)}catch{}}}return""}var H=Object.prototype.hasOwnProperty,Re={},_e=P.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}function Ze(e,r,t,n,f){{var p=Function.call.bind(H);for(var u in e)if(p(e,u)){var o=void 0;try{if(typeof e[u]!="function"){var C=Error((n||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}o=e[u](r,u,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(R){o=R}o&&!(o instanceof Error)&&(K(f),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,u,typeof o),K(null)),o instanceof Error&&!(o.message in Re)&&(Re[o.message]=!0,K(f),h("Failed %s type: %s",t,o.message),K(null))}}}var Qe=Array.isArray;function ee(e){return Qe(e)}function $e(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function qe(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function xe(e){if(qe(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",$e(e)),be(e)}var U=P.ReactCurrentOwner,er={key:!0,ref:!0,__self:!0,__source:!0},Te,we,re;re={};function rr(e){if(H.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function tr(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function nr(e,r){if(typeof e.ref=="string"&&U.current&&r&&U.current.stateNode!==r){var t=F(U.current.type);re[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(U.current.type),e.ref),re[t]=!0)}}function ar(e,r){{var t=function(){Te||(Te=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){we||(we=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var or=function(e,r,t,n,f,p,u){var o={$$typeof:d,type:e,key:r,ref:t,props:u,_owner:p};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function sr(e,r,t,n,f){{var p,u={},o=null,C=null;t!==void 0&&(xe(t),o=""+t),tr(r)&&(xe(r.key),o=""+r.key),rr(r)&&(C=r.ref,nr(r,f));for(p in r)H.call(r,p)&&!er.hasOwnProperty(p)&&(u[p]=r[p]);if(e&&e.defaultProps){var R=e.defaultProps;for(p in R)u[p]===void 0&&(u[p]=R[p])}if(o||C){var T=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&ar(u,T),C&&ir(u,T)}return or(e,o,C,f,n,U.current,u)}}var te=P.ReactCurrentOwner,Se=P.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);Se.setExtraStackFrame(t)}else Se.setExtraStackFrame(null)}var ne;ne=!1;function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Oe(){{if(te.current){var e=F(te.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ur(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function cr(e){{var r=Oe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=cr(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==te.current&&(n=" It was passed a child from "+F(e._owner.type)+"."),M(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),M(null)}}function je(e,r){{if(typeof e!="object")return;if(ee(e))for(var t=0;t<e.length;t++){var n=e[t];ae(n)&&Ce(n,r)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var f=x(e);if(typeof f=="function"&&f!==e.entries)for(var p=f.call(e),u;!(u=p.next()).done;)ae(u.value)&&Ce(u.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===a))t=r.propTypes;else return;if(t){var n=F(r);Ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ne){ne=!0;var f=F(r);h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){M(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),M(null);break}}e.ref!==null&&(M(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}function Ae(e,r,t,n,f,p){{var u=Ue(e);if(!u){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var C=ur(f);C?o+=C:o+=Oe();var R;e===null?R="null":ee(e)?R="array":e!==void 0&&e.$$typeof===d?(R="<"+(F(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):R=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",R,o)}var T=sr(e,r,t,f,p);if(T==null)return T;if(u){var D=r.children;if(D!==void 0)if(n)if(ee(D)){for(var L=0;L<D.length;L++)je(D[L],e);Object.freeze&&Object.freeze(D)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else je(D,e)}return e===y?lr(T):fr(T),T}}function dr(e,r,t){return Ae(e,r,t,!0)}function vr(e,r,t){return Ae(e,r,t,!1)}var pr=vr,hr=dr;W.Fragment=y,W.jsx=pr,W.jsxs=hr}()),W}process.env.NODE_ENV==="production"?X.exports=ke():X.exports=Fe();var se=X.exports;const Ie=(l,d,S,y)=>{let m=d/(S+y),E=Math.floor(l.length/m);m>l.length&&(m=l.length,E=1);const _=[];for(let s=0;s<m;s++){let c=0;for(let v=0;v<E&&s*E+v<l.length;v++)c+=l[s*E+v];_.push(c/E)}return _},Ve=(l,d,S,y,m,E)=>{const _=d.height/2,s=d.getContext("2d");s&&(s.clearRect(0,0,d.width,d.height),m!=="transparent"&&(s.fillStyle=m,s.fillRect(0,0,d.width,d.height)),l.forEach((c,v)=>{s.fillStyle=E;const i=v*(S+y),a=_-c/2,g=S,b=c||1;s.beginPath(),s.roundRect?(s.roundRect(i,a,g,b,50),s.fill()):s.fillRect(i,a,g,b)}))},mr="",Ye=({mediaRecorder:l,height:d="100%",barWidth:S=2,gap:y=1,backgroundColor:m="transparent",barColor:E="rgb(160, 198, 255)",fftSize:_=1024,maxDecibels:s=-10,minDecibels:c=-90,smoothingTimeConstant:v=.4})=>{const[i]=w.useState(()=>new AudioContext),[a,g]=w.useState(),b=w.useRef(null);w.useEffect(()=>{if(!l.stream)return;const x=i.createAnalyser();g(x),x.fftSize=_,x.minDecibels=c,x.maxDecibels=s,x.smoothingTimeConstant=v,i.createMediaStreamSource(l.stream).connect(x)},[l.stream]),w.useEffect(()=>{a&&l.state==="recording"&&j()},[a,l.state]);const j=w.useCallback(()=>{if(!a)return;const x=new Uint8Array(a==null?void 0:a.frequencyBinCount);l.state==="recording"?(a==null||a.getByteFrequencyData(x),k(x),requestAnimationFrame(j)):l.state==="paused"?k(x):l.state==="inactive"&&i.state!=="closed"&&i.close()},[a,i.state]),k=x=>{if(!b.current)return;const P=Ie(x,b.current.width,S,y);Ve(P,b.current,S,y,m,E)};return se.jsx("canvas",{ref:b,height:d})},Me=(l,d,S,y,m)=>{const E=l.getChannelData(0),_=S/(y+m),s=Math.floor(E.length/_),c=d/2;let v=[],i=0;for(let a=0;a<_;a++){const g=[];let b=0;const j=[];let k=0;for(let O=0;O<s&&a*s+O<l.length;O++){const A=E[a*s+O];A<=0&&(g.push(A),b++),A>0&&(j.push(A),k++)}const x=g.reduce((O,A)=>O+A,0)/b,h={max:j.reduce((O,A)=>O+A,0)/k,min:x};h.max>i&&(i=h.max),Math.abs(h.min)>i&&(i=Math.abs(h.min)),v.push(h)}if(c*.8>i*c){const a=c*.8/i;v=v.map(g=>({max:g.max*a,min:g.min*a}))}return v},Z=(l,d,S,y,m,E,_,s=0,c=1)=>{const v=d.height/2,i=d.getContext("2d");if(!i)return;i.clearRect(0,0,d.width,d.height),m!=="transparent"&&(i.fillStyle=m,i.fillRect(0,0,d.width,d.height));const a=(s||0)/c;l.forEach((g,b)=>{const j=b/l.length,k=a>j;i.fillStyle=k&&_?_:E;const x=b*(S+y),P=v+g.min,h=S,O=v+g.max-P;i.beginPath(),i.roundRect?(i.roundRect(x,P,h,O,50),i.fill()):i.fillRect(x,P,h,O)})},ue=w.forwardRef(({blob:l,width:d,height:S,barWidth:y=2,gap:m=1,currentTime:E,style:_,backgroundColor:s="transparent",barColor:c="rgb(184, 184, 184)",barPlayedColor:v="rgb(160, 198, 255)"},i)=>{const a=w.useRef(null),[g,b]=w.useState([]),[j,k]=w.useState(0);return w.useImperativeHandle(i,()=>a.current,[]),w.useEffect(()=>{(async()=>{if(!a.current)return;if(!l){const O=Array.from({length:100},()=>({max:0,min:0}));Z(O,a.current,y,m,s,c,v);return}const P=await l.arrayBuffer();await new AudioContext().decodeAudioData(P,O=>{if(!a.current)return;k(O.duration);const A=Me(O,S,d,y,m);b(A),Z(A,a.current,y,m,s,c,v)})})()},[l,a.current]),w.useEffect(()=>{a.current&&Z(g,a.current,y,m,s,c,v,E,j)},[E,j]),se.jsx("canvas",{ref:a,width:d,height:S,style:{..._}})});ue.displayName="AudioVisualizer",V.AudioVisualizer=ue,V.LiveAudioVisualizer=Ye,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
