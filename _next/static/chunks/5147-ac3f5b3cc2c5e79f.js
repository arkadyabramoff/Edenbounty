!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7ca63514-6bca-419f-bece-644ea02e0a47",e._sentryDebugIdIdentifier="sentry-dbid-7ca63514-6bca-419f-bece-644ea02e0a47")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5147],{32522:function(e,n,t){t.d(n,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,i={},u=0,a=function(e){return e&&(e.host||a(e.parentNode))},c=function(e,n,t,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(n.contains(e))return e;var t=a(e);return t&&n.contains(t)?t:(console.error("aria-hidden",e,"in not contained inside",n,". Doing nothing"),null)}).filter(function(e){return!!e});i[t]||(i[t]=new WeakMap);var f=i[t],d=[],s=new Set,p=new Set(l),m=function(e){!e||s.has(e)||(s.add(e),m(e.parentNode))};l.forEach(m);var v=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))v(e);else try{var n=e.getAttribute(c),i=null!==n&&"false"!==n,u=(r.get(e)||0)+1,a=(f.get(e)||0)+1;r.set(e,u),f.set(e,a),d.push(e),1===u&&i&&o.set(e,!0),1===a&&e.setAttribute(t,"true"),i||e.setAttribute(c,"true")}catch(n){console.error("aria-hidden: cannot operate on ",e,n)}})};return v(n),s.clear(),u++,function(){d.forEach(function(e){var n=r.get(e)-1,i=f.get(e)-1;r.set(e,n),f.set(e,i),n||(o.has(e)||e.removeAttribute(c),o.delete(e)),i||e.removeAttribute(t)}),--u||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},l=function(e,n,t){void 0===t&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=n||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,t,"aria-hidden")):function(){return null}}},4911:function(e,n,t){t.d(n,{Av:function(){return u},pF:function(){return r},xv:function(){return i},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",u="--removed-body-scroll-bar-size"},62495:function(e,n,t){t.d(n,{jp:function(){return v}});var r=t(15769),o=t(97030),i=t(4911),u={left:0,top:0,right:0,gap:0},a=function(e){return parseInt(e||"",10)||0},c=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[a(t),a(r),a(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return u;var n=c(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},f=(0,o.Ws)(),d="data-scroll-locked",s=function(e,n,t,r){var o=e.left,u=e.top,a=e.right,c=e.gap;return void 0===t&&(t="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(i.Av,": ").concat(c,"px;\n  }\n")},p=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},m=function(){r.useEffect(function(){return document.body.setAttribute(d,(p()+1).toString()),function(){var e=p()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},v=function(e){var n=e.noRelative,t=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o;m();var u=r.useMemo(function(){return l(i)},[i]);return r.createElement(f,{styles:s(u,!n,i,t?"":"!important")})}},97030:function(e,n,t){t.d(n,{Ws:function(){return a}});var r,o=t(15769),i=function(){var e=0,n=null;return{add:function(o){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=r||t.nc;return n&&e.setAttribute("nonce",n),e}())){var i,u;(i=n).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),u=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},u=function(){var e=i();return function(n,t){o.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},a=function(){var e=u();return function(n){return e(n.styles,n.dynamic),null}}},43398:function(e,n,t){t.d(n,{L:function(){return u}});var r=t(45639),o=t(15769),i=function(e){var n=e.sideCar,t=(0,r._T)(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=n.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,r.pi)({},t))};function u(e,n){return e.useMedium(n),i}i.isSideCarExport=!0},37255:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),!1===t||!r.defaultPrevented)return n?.(r)}}},46507:function(e,n,t){t.d(n,{B:function(){return c}});var r=t(15769),o=t(33440),i=t(75664),u=t(62662),a=t(65675);function c(e){let n=e+"CollectionProvider",[t,c]=(0,o.b)(n),[l,f]=t(n,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:n,children:t}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,a.jsx)(l,{scope:n,itemMap:i,collectionRef:o,children:t})};d.displayName=n;let s=e+"CollectionSlot",p=r.forwardRef((e,n)=>{let{scope:t,children:r}=e,o=f(s,t),c=(0,i.e)(n,o.collectionRef);return(0,a.jsx)(u.g7,{ref:c,children:r})});p.displayName=s;let m=e+"CollectionItemSlot",v="data-radix-collection-item",g=r.forwardRef((e,n)=>{let{scope:t,children:o,...c}=e,l=r.useRef(null),d=(0,i.e)(n,l),s=f(m,t);return r.useEffect(()=>(s.itemMap.set(l,{ref:l,...c}),()=>void s.itemMap.delete(l))),(0,a.jsx)(u.g7,{[v]:"",ref:d,children:o})});return g.displayName=m,[{Provider:d,Slot:p,ItemSlot:g},function(n){let t=f(e+"CollectionConsumer",n);return r.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let n=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>n.indexOf(e.ref.current)-n.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},c]}},75664:function(e,n,t){t.d(n,{F:function(){return o},e:function(){return i}});var r=t(15769);function o(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function i(...e){return r.useCallback(o(...e),e)}},33440:function(e,n,t){t.d(n,{b:function(){return i}});var r=t(15769),o=t(65675);function i(e,n=[]){let t=[],i=()=>{let n=t.map(e=>r.createContext(e));return function(t){let o=t?.[e]||n;return r.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return i.scopeName=e,[function(n,i){let u=r.createContext(i),a=t.length;function c(n){let{scope:t,children:i,...c}=n,l=t?.[e][a]||u,f=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:f,children:i})}return t=[...t,i],c.displayName=n+"Provider",[c,function(t,o){let c=o?.[e][a]||u,l=r.useContext(c);if(l)return l;if(void 0!==i)return i;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((n,{useScope:t,scopeName:r})=>{let o=t(e)[`__scope${r}`];return{...n,...o}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:o}),[o])}};return t.scopeName=n.scopeName,t}(i,...n)]}},61486:function(e,n,t){t.d(n,{gm:function(){return i}});var r=t(15769);t(65675);var o=r.createContext(void 0);function i(e){let n=r.useContext(o);return e||n||"ltr"}},27996:function(e,n,t){t.d(n,{M:function(){return c}});var r,o=t(15769),i=t(99327),u=(r||(r=t.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function c(e){let[n,t]=o.useState(u());return(0,i.b)(()=>{e||t(e=>e??String(a++))},[e]),e||(n?`radix-${n}`:"")}},59557:function(e,n,t){t.d(n,{z:function(){return a}});var r=t(15769),o=t(70083),i=t(75664),u=t(99327),a=e=>{var n,t;let a,l;let{present:f,children:d}=e,s=function(e){var n,t;let[i,a]=r.useState(),l=r.useRef({}),f=r.useRef(e),d=r.useRef("none"),[s,p]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return r.useEffect(()=>{let e=c(l.current);d.current="mounted"===s?e:"none"},[s]),(0,u.b)(()=>{let n=l.current,t=f.current;if(t!==e){let r=d.current,o=c(n);e?p("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?p("UNMOUNT"):t&&r!==o?p("ANIMATION_OUT"):p("UNMOUNT"),f.current=e}},[e,p]),(0,u.b)(()=>{if(i){let e=e=>{let n=c(l.current).includes(e.animationName);e.target===i&&n&&o.flushSync(()=>p("ANIMATION_END"))},n=e=>{e.target===i&&(d.current=c(l.current))};return i.addEventListener("animationstart",n),i.addEventListener("animationcancel",e),i.addEventListener("animationend",e),()=>{i.removeEventListener("animationstart",n),i.removeEventListener("animationcancel",e),i.removeEventListener("animationend",e)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(f),p="function"==typeof d?d({present:s.isPresent}):r.Children.only(d),m=(0,i.e)(s.ref,(a=null===(n=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?p.ref:(a=null===(t=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof d||s.isPresent?r.cloneElement(p,{ref:m}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},3015:function(e,n,t){t.d(n,{WV:function(){return a},jH:function(){return c}});var r=t(15769),o=t(70083),i=t(62662),u=t(65675),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=r.forwardRef((e,t)=>{let{asChild:r,...o}=e,a=r?i.g7:n;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:t})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&o.flushSync(()=>e.dispatchEvent(n))}},70996:function(e,n,t){t.d(n,{Pc:function(){return A},ck:function(){return W},fC:function(){return T}});var r=t(15769),o=t(37255),i=t(46507),u=t(75664),a=t(33440),c=t(27996),l=t(3015),f=t(27869),d=t(82690),s=t(61486),p=t(65675),m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[h,y,b]=(0,i.B)(g),[w,A]=(0,a.b)(g,[b]),[x,E]=w(g),N=r.forwardRef((e,n)=>(0,p.jsx)(h.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(h.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(R,{...e,ref:n})})}));N.displayName=g;var R=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:i,loop:a=!1,dir:c,currentTabStopId:g,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:b,onEntryFocus:w,preventScrollOnEntryFocus:A=!1,...E}=e,N=r.useRef(null),R=(0,u.e)(n,N),M=(0,s.gm)(c),[S=null,C]=(0,d.T)({prop:g,defaultProp:h,onChange:b}),[T,W]=r.useState(!1),O=(0,f.W)(w),j=y(t),k=r.useRef(!1),[D,_]=r.useState(0);return r.useEffect(()=>{let e=N.current;if(e)return e.addEventListener(m,O),()=>e.removeEventListener(m,O)},[O]),(0,p.jsx)(x,{scope:t,orientation:i,dir:M,loop:a,currentTabStopId:S,onItemFocus:r.useCallback(e=>C(e),[C]),onItemShiftTab:r.useCallback(()=>W(!0),[]),onFocusableItemAdd:r.useCallback(()=>_(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>_(e=>e-1),[]),children:(0,p.jsx)(l.WV.div,{tabIndex:T||0===D?-1:0,"data-orientation":i,...E,ref:R,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let n=!k.current;if(e.target===e.currentTarget&&n&&!T){let n=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=j().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),A)}}k.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>W(!1))})})}),M="RovingFocusGroupItem",S=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:i=!0,active:u=!1,tabStopId:a,...f}=e,d=(0,c.M)(),s=a||d,m=E(M,t),v=m.currentTabStopId===s,g=y(t),{onFocusableItemAdd:b,onFocusableItemRemove:w}=m;return r.useEffect(()=>{if(i)return b(),()=>w()},[i,b,w]),(0,p.jsx)(h.ItemSlot,{scope:t,id:s,focusable:i,active:u,children:(0,p.jsx)(l.WV.span,{tabIndex:v?0:-1,"data-orientation":m.orientation,...f,ref:n,onMouseDown:(0,o.M)(e.onMouseDown,e=>{i?m.onItemFocus(s):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>m.onItemFocus(s)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return C[o]}(e,m.orientation,m.dir);if(void 0!==n){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)o.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&o.reverse();let i=o.indexOf(e.currentTarget);o=m.loop?(t=o,r=i+1,t.map((e,n)=>t[(r+n)%t.length])):o.slice(i+1)}setTimeout(()=>I(o))}})})})});S.displayName=M;var C={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}var T=N,W=S},62662:function(e,n,t){t.d(n,{A4:function(){return c},g7:function(){return u}});var r=t(15769),o=t(75664),i=t(65675),u=r.forwardRef((e,n)=>{let{children:t,...o}=e,u=r.Children.toArray(t),c=u.find(l);if(c){let e=c.props.children,t=u.map(n=>n!==c?n:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,t):null})}return(0,i.jsx)(a,{...o,ref:n,children:t})});u.displayName="Slot";var a=r.forwardRef((e,n)=>{let{children:t,...i}=e;if(r.isValidElement(t)){let e,u;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return r.cloneElement(t,{...function(e,n){let t={...n};for(let r in n){let o=e[r],i=n[r];/^on[A-Z]/.test(r)?o&&i?t[r]=(...e)=>{i(...e),o(...e)}:o&&(t[r]=o):"style"===r?t[r]={...o,...i}:"className"===r&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}(i,t.props),ref:n?(0,o.F)(n,a):a})}return r.Children.count(t)>1?r.Children.only(null):null});a.displayName="SlotClone";var c=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function l(e){return r.isValidElement(e)&&e.type===c}},27869:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(15769);function o(e){let n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...e)=>n.current?.(...e),[])}},82690:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(15769),o=t(27869);function i({prop:e,defaultProp:n,onChange:t=()=>{}}){let[i,u]=function({defaultProp:e,onChange:n}){let t=r.useState(e),[i]=t,u=r.useRef(i),a=(0,o.W)(n);return r.useEffect(()=>{u.current!==i&&(a(i),u.current=i)},[i,u,a]),t}({defaultProp:n,onChange:t}),a=void 0!==e,c=a?e:i,l=(0,o.W)(t);return[c,r.useCallback(n=>{if(a){let t="function"==typeof n?n(e):n;t!==e&&l(t)}else u(n)},[a,e,u,l])]}},99327:function(e,n,t){t.d(n,{b:function(){return o}});var r=t(15769),o=globalThis?.document?r.useLayoutEffect:()=>{}},96852:function(e,n,t){t.d(n,{t:function(){return i}});var r=t(15769),o=t(99327);function i(e){let[n,t]=r.useState(void 0);return(0,o.b)(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let n=new ResizeObserver(n=>{let r,o;if(!Array.isArray(n)||!n.length)return;let i=n[0];if("borderBoxSize"in i){let e=i.borderBoxSize,n=Array.isArray(e)?e[0]:e;r=n.inlineSize,o=n.blockSize}else r=e.offsetWidth,o=e.offsetHeight;t({width:r,height:o})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}t(void 0)},[e]),n}}}]);