(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{4697:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9862:function(e){e.exports={style:{fontFamily:"'__Plus_Jakarta_Sans_e30d0c', '__Plus_Jakarta_Sans_Fallback_e30d0c'",fontStyle:"normal"},className:"__className_e30d0c"}},2278:function(e,t,n){"use strict";n.d(t,{aU:function(){return el},x8:function(){return eu},dk:function(){return es},zt:function(){return er},fC:function(){return ei},Dx:function(){return ea},l_:function(){return eo}});var r,o=n(2265),i=n(4887);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var s=n(1584),l=n(7437);function u(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),a=n.length;n=[...n,r];let s=t=>{let{scope:n,children:r,...s}=t,u=n?.[e]?.[a]||i,c=o.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:r})};return s.displayName=t+"Provider",[s,function(n,s){let l=s?.[e]?.[a]||i,u=o.useContext(l);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var c=n(1538),d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?c.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function f(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}function v(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var p="dismissableLayer.update",m=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),w=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:c,onPointerDownOutside:f,onFocusOutside:w,onInteractOutside:y,onDismiss:x,...b}=e,g=o.useContext(m),[T,C]=o.useState(null),P=null!==(i=null==T?void 0:T.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,N]=o.useState({}),R=(0,s.e)(t,e=>C(e)),L=Array.from(g.layers),[D]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),S=L.indexOf(D),M=T?L.indexOf(T):-1,j=g.layersWithOutsidePointerEventsDisabled.size>0,k=M>=S,O=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){h("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!k||n||(null==f||f(e),null==y||y(e),e.defaultPrevented||null==x||x())},P),_=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&h("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==w||w(e),null==y||y(e),e.defaultPrevented||null==x||x())},P);return!function(e,t=globalThis?.document){let n=v(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{M!==g.layers.size-1||(null==c||c(e),!e.defaultPrevented&&x&&(e.preventDefault(),x()))},P),o.useEffect(()=>{if(T)return u&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(T)),g.layers.add(T),E(),()=>{u&&1===g.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=r)}},[T,P,u,g]),o.useEffect(()=>()=>{T&&(g.layers.delete(T),g.layersWithOutsidePointerEventsDisabled.delete(T),E())},[T,g]),o.useEffect(()=>{let e=()=>N({});return document.addEventListener(p,e),()=>document.removeEventListener(p,e)},[]),(0,l.jsx)(d.div,{...b,ref:R,style:{pointerEvents:j?k?"auto":"none":void 0,...e.style},onFocusCapture:a(e.onFocusCapture,_.onFocusCapture),onBlurCapture:a(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:a(e.onPointerDownCapture,O.onPointerDownCapture)})});w.displayName="DismissableLayer";var y=o.forwardRef((e,t)=>{let n=o.useContext(m),r=o.useRef(null),i=(0,s.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(d.div,{...e,ref:i})});function E(){let e=new CustomEvent(p);document.dispatchEvent(e)}function h(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?f(i,a):i.dispatchEvent(a)}y.displayName="DismissableLayerBranch";var x=globalThis?.document?o.useLayoutEffect:()=>{},b=o.forwardRef((e,t)=>{var n,r;let{container:a,...s}=e,[u,c]=o.useState(!1);x(()=>c(!0),[]);let f=a||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return f?i.createPortal((0,l.jsx)(d.div,{...s,ref:t}),f):null});b.displayName="Portal";var g=e=>{var t,n;let r,i;let{present:a,children:l}=e,u=function(e){var t,n;let[r,i]=o.useState(),a=o.useRef({}),s=o.useRef(e),l=o.useRef("none"),[u,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return o.useEffect(()=>{let e=T(a.current);l.current="mounted"===u?e:"none"},[u]),x(()=>{let t=a.current,n=s.current;if(n!==e){let r=l.current,o=T(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),s.current=e}},[e,c]),x(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=T(a.current).includes(e.animationName);if(e.target===r&&o&&(c("ANIMATION_END"),!s.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(l.current=T(a.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(a),c="function"==typeof l?l({present:u.isPresent}):o.Children.only(l),d=(0,s.e)(u.ref,(r=null===(t=Object.getOwnPropertyDescriptor(c.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?c.ref:(r=null===(n=Object.getOwnPropertyDescriptor(c,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?c.props.ref:c.props.ref||c.ref);return"function"==typeof l||u.isPresent?o.cloneElement(c,{ref:d}):null};function T(e){return(null==e?void 0:e.animationName)||"none"}g.displayName="Presence";var C=o.forwardRef((e,t)=>(0,l.jsx)(d.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));C.displayName="VisuallyHidden";var P="ToastProvider",[N,R,L]=function(e){let t=e+"CollectionProvider",[n,r]=u(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,r=o.useRef(null),a=o.useRef(new Map).current;return(0,l.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};d.displayName=t;let f=e+"CollectionSlot",v=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=a(f,n),i=(0,s.e)(t,o.collectionRef);return(0,l.jsx)(c.g7,{ref:i,children:r})});v.displayName=f;let p=e+"CollectionItemSlot",m="data-radix-collection-item",w=o.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,u=o.useRef(null),d=(0,s.e)(t,u),f=a(p,n);return o.useEffect(()=>(f.itemMap.set(u,{ref:u,...i}),()=>void f.itemMap.delete(u))),(0,l.jsx)(c.g7,{[m]:"",ref:d,children:r})});return w.displayName=p,[{Provider:d,Slot:v,ItemSlot:w},function(t){let n=a(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[D,S]=u("Toast",[L]),[M,j]=D(P),k=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:s}=e,[u,c]=o.useState(null),[d,f]=o.useState(0),v=o.useRef(!1),p=o.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(P,"`. Expected non-empty `string`.")),(0,l.jsx)(N.Provider,{scope:t,children:(0,l.jsx)(M,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:u,onViewportChange:c,onToastAdd:o.useCallback(()=>f(e=>e+1),[]),onToastRemove:o.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:v,isClosePausedRef:p,children:s})})};k.displayName=P;var O="ToastViewport",_=["F8"],F="toast.viewportPause",A="toast.viewportResume",I=o.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=_,label:i="Notifications ({hotkey})",...a}=e,u=j(O,n),c=R(n),f=o.useRef(null),v=o.useRef(null),p=o.useRef(null),m=o.useRef(null),w=(0,s.e)(t,m,u.onViewportChange),E=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=u.toastCount>0;o.useEffect(()=>{let e=e=>{var t;0!==r.length&&r.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),o.useEffect(()=>{let e=f.current,t=m.current;if(h&&e&&t){let n=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(F);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},r=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(A);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},i=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[h,u.isClosePausedRef]);let x=o.useCallback(e=>{let{tabbingDirection:t}=e,n=c().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[c]);return o.useEffect(()=>{let e=m.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,i;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=v.current)||void 0===r||r.focus();return}let s=x({tabbingDirection:a?"backwards":"forwards"}),l=s.findIndex(e=>e===n);en(s.slice(l+1))?t.preventDefault():a?null===(o=v.current)||void 0===o||o.focus():null===(i=p.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,x]),(0,l.jsxs)(y,{ref:f,role:"region","aria-label":i.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:h?void 0:"none"},children:[h&&(0,l.jsx)(W,{ref:v,onFocusFromOutsideViewport:()=>{en(x({tabbingDirection:"forwards"}))}}),(0,l.jsx)(N.Slot,{scope:n,children:(0,l.jsx)(d.ol,{tabIndex:-1,...a,ref:w})}),h&&(0,l.jsx)(W,{ref:p,onFocusFromOutsideViewport:()=>{en(x({tabbingDirection:"backwards"}))}})]})});I.displayName=O;var U="ToastFocusProxy",W=o.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=j(U,n);return(0,l.jsx)(C,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=i.viewport)||void 0===t?void 0:t.contains(n))||r()}})});W.displayName=U;var K="Toast",V=o.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...u}=e,[c=!0,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=v(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,s=a?e:r,l=v(n);return[s,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}({prop:r,defaultProp:i,onChange:s});return(0,l.jsx)(g,{present:n||c,children:(0,l.jsx)(B,{open:c,...u,ref:t,onClose:()=>d(!1),onPause:v(e.onPause),onResume:v(e.onResume),onSwipeStart:a(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:a(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:a(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:a(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),d(!1)})})})});V.displayName=K;var[$,z]=D(K,{onClose(){}}),B=o.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:u,open:c,onClose:f,onEscapeKeyDown:p,onPause:m,onResume:y,onSwipeStart:E,onSwipeMove:h,onSwipeCancel:x,onSwipeEnd:b,...g}=e,T=j(K,n),[C,P]=o.useState(null),R=(0,s.e)(t,e=>P(e)),L=o.useRef(null),D=o.useRef(null),S=u||T.duration,M=o.useRef(0),k=o.useRef(S),O=o.useRef(0),{onToastAdd:_,onToastRemove:I}=T,U=v(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=T.viewport)||void 0===e||e.focus()),f()}),W=o.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(O.current),M.current=new Date().getTime(),O.current=window.setTimeout(U,e))},[U]);o.useEffect(()=>{let e=T.viewport;if(e){let t=()=>{W(k.current),null==y||y()},n=()=>{let e=new Date().getTime()-M.current;k.current=k.current-e,window.clearTimeout(O.current),null==m||m()};return e.addEventListener(F,n),e.addEventListener(A,t),()=>{e.removeEventListener(F,n),e.removeEventListener(A,t)}}},[T.viewport,S,m,y,W]),o.useEffect(()=>{c&&!T.isClosePausedRef.current&&W(S)},[c,S,T.isClosePausedRef,W]),o.useEffect(()=>(_(),()=>I()),[_,I]);let V=o.useMemo(()=>C?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(C):null,[C]);return T.viewport?(0,l.jsxs)(l.Fragment,{children:[V&&(0,l.jsx)(X,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:V}),(0,l.jsx)($,{scope:n,onClose:U,children:i.createPortal((0,l.jsx)(N.ItemSlot,{scope:n,children:(0,l.jsx)(w,{asChild:!0,onEscapeKeyDown:a(p,()=>{T.isFocusedToastEscapeKeyDownRef.current||U(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,l.jsx)(d.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":T.swipeDirection,...g,ref:R,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:a(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:a(e.onPointerDown,e=>{0===e.button&&(L.current={x:e.clientX,y:e.clientY})}),onPointerMove:a(e.onPointerMove,e=>{if(!L.current)return;let t=e.clientX-L.current.x,n=e.clientY-L.current.y,r=!!D.current,o=["left","right"].includes(T.swipeDirection),i=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,s=o?0:i(0,n),l="touch"===e.pointerType?10:2,u={x:a,y:s},c={originalEvent:e,delta:u};r?(D.current=u,ee("toast.swipeMove",h,c,{discrete:!1})):et(u,T.swipeDirection,l)?(D.current=u,ee("toast.swipeStart",E,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(L.current=null)}),onPointerUp:a(e.onPointerUp,e=>{let t=D.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),D.current=null,L.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};et(t,T.swipeDirection,T.swipeThreshold)?ee("toast.swipeEnd",b,r,{discrete:!0}):ee("toast.swipeCancel",x,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),X=e=>{let{__scopeToast:t,children:n,...r}=e,i=j(K,t),[a,s]=o.useState(!1),[u,c]=o.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=v(e);x(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>s(!0)),o.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,l.jsx)(b,{asChild:!0,children:(0,l.jsx)(C,{...r,children:a&&(0,l.jsxs)(l.Fragment,{children:[i.label," ",n]})})})},q=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(d.div,{...r,ref:t})});q.displayName="ToastTitle";var H=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(d.div,{...r,ref:t})});H.displayName="ToastDescription";var J="ToastAction",Y=o.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,l.jsx)(Q,{altText:n,asChild:!0,children:(0,l.jsx)(G,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(J,"`. Expected non-empty `string`.")),null)});Y.displayName=J;var Z="ToastClose",G=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=z(Z,n);return(0,l.jsx)(Q,{asChild:!0,children:(0,l.jsx)(d.button,{type:"button",...r,ref:t,onClick:a(e.onClick,o.onClose)})})});G.displayName=Z;var Q=o.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,l.jsx)(d.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function ee(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?f(i,a):i.dispatchEvent(a)}var et=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function en(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var er=k,eo=I,ei=V,ea=q,es=H,el=Y,eu=G}}]);