"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[6588],{76588:function(Jt,lt,X){X.d(lt,{Z:function(){return Tt}});var Y=X(35194),J=X(68185),ae=X(83288),z=X(30309),ut=X(69223),ot=X(82187),ce=X.n(ot),it=X(29953),ct=X(141),st=X(24694),a=X(50959),Le=X(91010),Ue=X(50446);function Te(e,n,c){return(e-n)/(c-n)}function Oe(e,n,c,s){var o=Te(n,c,s),v={};switch(e){case"rtl":v.right="".concat(o*100,"%"),v.transform="translateX(50%)";break;case"btt":v.bottom="".concat(o*100,"%"),v.transform="translateY(50%)";break;case"ttb":v.top="".concat(o*100,"%"),v.transform="translateY(-50%)";break;default:v.left="".concat(o*100,"%"),v.transform="translateX(-50%)";break}return v}function fe(e,n){return Array.isArray(e)?e[n]:e}var U=X(75924),vt=a.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),se=vt,dt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],ft=a.forwardRef(function(e,n){var c=e.prefixCls,s=e.value,o=e.valueIndex,v=e.onStartMove,m=e.style,d=e.render,R=e.dragging,y=e.onOffsetChange,b=e.onChangeComplete,E=e.onFocus,M=e.onMouseEnter,g=(0,Ue.Z)(e,dt),i=a.useContext(se),u=i.min,r=i.max,l=i.direction,t=i.disabled,h=i.keyboard,k=i.range,C=i.tabIndex,F=i.ariaLabelForHandle,Z=i.ariaLabelledByForHandle,K=i.ariaValueTextFormatterForHandle,N=i.styles,S=i.classNames,B="".concat(c,"-handle"),j=function(A){t||v(A,o)},p=function(A){E==null||E(A,o)},ne=function(A){M(A,o)},$=function(A){if(!t&&h){var I=null;switch(A.which||A.keyCode){case U.Z.LEFT:I=l==="ltr"||l==="btt"?-1:1;break;case U.Z.RIGHT:I=l==="ltr"||l==="btt"?1:-1;break;case U.Z.UP:I=l!=="ttb"?1:-1;break;case U.Z.DOWN:I=l!=="ttb"?-1:1;break;case U.Z.HOME:I="min";break;case U.Z.END:I="max";break;case U.Z.PAGE_UP:I=2;break;case U.Z.PAGE_DOWN:I=-2;break}I!==null&&(A.preventDefault(),y(I,o))}},D=function(A){switch(A.which||A.keyCode){case U.Z.LEFT:case U.Z.RIGHT:case U.Z.UP:case U.Z.DOWN:case U.Z.HOME:case U.Z.END:case U.Z.PAGE_UP:case U.Z.PAGE_DOWN:b==null||b();break}},H=Oe(l,s,u,r),O={};if(o!==null){var G;O={tabIndex:t?null:fe(C,o),role:"slider","aria-valuemin":u,"aria-valuemax":r,"aria-valuenow":s,"aria-disabled":t,"aria-label":fe(F,o),"aria-labelledby":fe(Z,o),"aria-valuetext":(G=fe(K,o))===null||G===void 0?void 0:G(s),"aria-orientation":l==="ltr"||l==="rtl"?"horizontal":"vertical",onMouseDown:j,onTouchStart:j,onFocus:p,onMouseEnter:ne,onKeyDown:$,onKeyUp:D}}var Q=a.createElement("div",(0,Le.Z)({ref:n,className:ce()(B,(0,J.Z)((0,J.Z)({},"".concat(B,"-").concat(o+1),o!==null&&k),"".concat(B,"-dragging"),R),S.handle),style:(0,Y.Z)((0,Y.Z)((0,Y.Z)({},H),m),N.handle)},O,g));return d&&(Q=d(Q,{index:o,prefixCls:c,value:s,dragging:R})),Q}),Ie=ft,mt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","onFocus"],gt=a.forwardRef(function(e,n){var c=e.prefixCls,s=e.style,o=e.onStartMove,v=e.onOffsetChange,m=e.values,d=e.handleRender,R=e.activeHandleRender,y=e.draggingIndex,b=e.onFocus,E=(0,Ue.Z)(e,mt),M=a.useRef({});a.useImperativeHandle(n,function(){return{focus:function(C){var F;(F=M.current[C])===null||F===void 0||F.focus()}}});var g=a.useState(-1),i=(0,z.Z)(g,2),u=i[0],r=i[1],l=function(C,F){r(F),b==null||b(C)},t=function(C,F){r(F)},h=(0,Y.Z)({prefixCls:c,onStartMove:o,onOffsetChange:v,render:d,onFocus:l,onMouseEnter:t},E);return a.createElement(a.Fragment,null,m.map(function(k,C){return a.createElement(Ie,(0,Le.Z)({ref:function(Z){Z?M.current[C]=Z:delete M.current[C]},dragging:y===C,style:fe(s,C),key:C,value:k,valueIndex:C},h))}),R&&a.createElement(Ie,(0,Le.Z)({key:"a11y"},h,{value:m[u],valueIndex:null,dragging:y!==-1,render:R,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),ht=gt,yt=function(n){var c=n.prefixCls,s=n.style,o=n.children,v=n.value,m=n.onClick,d=a.useContext(se),R=d.min,y=d.max,b=d.direction,E=d.includedStart,M=d.includedEnd,g=d.included,i="".concat(c,"-text"),u=Oe(b,v,R,y);return a.createElement("span",{className:ce()(i,(0,J.Z)({},"".concat(i,"-active"),g&&E<=v&&v<=M)),style:(0,Y.Z)((0,Y.Z)({},u),s),onMouseDown:function(l){l.stopPropagation()},onClick:function(){m(v)}},o)},Ct=yt,bt=function(n){var c=n.prefixCls,s=n.marks,o=n.onClick,v="".concat(c,"-mark");return s.length?a.createElement("div",{className:v},s.map(function(m){var d=m.value,R=m.style,y=m.label;return a.createElement(Ct,{key:d,prefixCls:v,style:R,value:d,onClick:o},y)})):null},St=bt,Mt=function(n){var c=n.prefixCls,s=n.value,o=n.style,v=n.activeStyle,m=a.useContext(se),d=m.min,R=m.max,y=m.direction,b=m.included,E=m.includedStart,M=m.includedEnd,g="".concat(c,"-dot"),i=b&&E<=s&&s<=M,u=(0,Y.Z)((0,Y.Z)({},Oe(y,s,d,R)),typeof o=="function"?o(s):o);return i&&(u=(0,Y.Z)((0,Y.Z)({},u),typeof v=="function"?v(s):v)),a.createElement("span",{className:ce()(g,(0,J.Z)({},"".concat(g,"-active"),i)),style:u})},kt=Mt,Et=function(n){var c=n.prefixCls,s=n.marks,o=n.dots,v=n.style,m=n.activeStyle,d=a.useContext(se),R=d.min,y=d.max,b=d.step,E=a.useMemo(function(){var M=new Set;if(s.forEach(function(i){M.add(i.value)}),o&&b!==null)for(var g=R;g<=y;)M.add(g),g+=b;return Array.from(M)},[R,y,b,o,s]);return a.createElement("div",{className:"".concat(c,"-step")},E.map(function(M){return a.createElement(kt,{prefixCls:c,key:M,value:M,style:v,activeStyle:m})}))},Zt=Et,xt=function(n){var c=n.prefixCls,s=n.style,o=n.start,v=n.end,m=n.index,d=n.onStartMove,R=n.replaceCls,y=a.useContext(se),b=y.direction,E=y.min,M=y.max,g=y.disabled,i=y.range,u=y.classNames,r="".concat(c,"-track"),l=Te(o,E,M),t=Te(v,E,M),h=function(Z){!g&&d&&d(Z,-1)},k={};switch(b){case"rtl":k.right="".concat(l*100,"%"),k.width="".concat(t*100-l*100,"%");break;case"btt":k.bottom="".concat(l*100,"%"),k.height="".concat(t*100-l*100,"%");break;case"ttb":k.top="".concat(l*100,"%"),k.height="".concat(t*100-l*100,"%");break;default:k.left="".concat(l*100,"%"),k.width="".concat(t*100-l*100,"%")}var C=R||ce()(r,(0,J.Z)((0,J.Z)({},"".concat(r,"-").concat(m+1),m!==null&&i),"".concat(c,"-track-draggable"),d),u.track);return a.createElement("div",{className:C,style:(0,Y.Z)((0,Y.Z)({},k),s),onMouseDown:h,onTouchStart:h})},Ke=xt,Rt=function(n){var c=n.prefixCls,s=n.style,o=n.values,v=n.startPoint,m=n.onStartMove,d=a.useContext(se),R=d.included,y=d.range,b=d.min,E=d.styles,M=d.classNames,g=a.useMemo(function(){if(!y){if(o.length===0)return[];var u=v!=null?v:b,r=o[0];return[{start:Math.min(u,r),end:Math.max(u,r)}]}for(var l=[],t=0;t<o.length-1;t+=1)l.push({start:o[t],end:o[t+1]});return l},[o,y,v,b]);if(!R)return null;var i=M.tracks||E.tracks?a.createElement(Ke,{index:null,prefixCls:c,start:g[0].start,end:g[g.length-1].end,replaceCls:ce()(M.tracks,"".concat(c,"-tracks")),style:E.tracks}):null;return a.createElement(a.Fragment,null,i,g.map(function(u,r){var l=u.start,t=u.end;return a.createElement(Ke,{index:r,prefixCls:c,style:(0,Y.Z)((0,Y.Z)({},fe(s,r)),E.track),start:l,end:t,key:r,onStartMove:m})}))},Ft=Rt,Ht=X(45680);function je(e){var n="touches"in e?e.touches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}function Pt(e,n,c,s,o,v,m,d,R){var y=a.useState(null),b=(0,z.Z)(y,2),E=b[0],M=b[1],g=a.useState(-1),i=(0,z.Z)(g,2),u=i[0],r=i[1],l=a.useState(c),t=(0,z.Z)(l,2),h=t[0],k=t[1],C=a.useState(c),F=(0,z.Z)(C,2),Z=F[0],K=F[1],N=a.useRef(null),S=a.useRef(null);a.useLayoutEffect(function(){u===-1&&k(c)},[c,u]),a.useEffect(function(){return function(){document.removeEventListener("mousemove",N.current),document.removeEventListener("mouseup",S.current),document.removeEventListener("touchmove",N.current),document.removeEventListener("touchend",S.current)}},[]);var B=function(D,H){h.some(function(O,G){return O!==D[G]})&&(H!==void 0&&M(H),k(D),m(D))},j=(0,Ht.zX)(function($,D){if($===-1){var H=Z[0],O=Z[Z.length-1],G=s-H,Q=o-O,w=D*(o-s);w=Math.max(w,G),w=Math.min(w,Q);var A=v(H+w);w=A-H;var I=Z.map(function(ue){return ue+w});B(I)}else{var ee=(o-s)*D,re=(0,ae.Z)(h);re[$]=Z[$];var le=R(re,ee,$,"dist");B(le.values,le.value)}}),p=function(D,H,O){D.stopPropagation();var G=O||c,Q=G[H];r(H),M(Q),K(G);var w=je(D),A=w.pageX,I=w.pageY,ee=function(ue){ue.preventDefault();var me=je(ue),we=me.pageX,Ae=me.pageY,xe=we-A,Ce=Ae-I,be=e.current.getBoundingClientRect(),Se=be.width,Me=be.height,oe;switch(n){case"btt":oe=-Ce/Me;break;case"ttb":oe=Ce/Me;break;case"rtl":oe=-xe/Se;break;default:oe=xe/Se}j(H,oe)},re=function le(ue){ue.preventDefault(),document.removeEventListener("mouseup",le),document.removeEventListener("mousemove",ee),document.removeEventListener("touchend",le),document.removeEventListener("touchmove",ee),N.current=null,S.current=null,r(-1),d()};document.addEventListener("mouseup",re),document.addEventListener("mousemove",ee),document.addEventListener("touchend",re),document.addEventListener("touchmove",ee),N.current=ee,S.current=re},ne=a.useMemo(function(){var $=(0,ae.Z)(c).sort(function(H,O){return H-O}),D=(0,ae.Z)(h).sort(function(H,O){return H-O});return $.every(function(H,O){return H===D[O]})?h:c},[c,h]);return[u,E,ne,p]}var Dt=Pt;function $t(e,n,c,s,o,v){var m=a.useCallback(function(g){return Math.max(e,Math.min(n,g))},[e,n]),d=a.useCallback(function(g){if(c!==null){var i=e+Math.round((m(g)-e)/c)*c,u=function(h){return(String(h).split(".")[1]||"").length},r=Math.max(u(c),u(n),u(e)),l=Number(i.toFixed(r));return e<=l&&l<=n?l:null}return null},[c,e,n,m]),R=a.useCallback(function(g){var i=m(g),u=s.map(function(t){return t.value});c!==null&&u.push(d(g)),u.push(e,n);var r=u[0],l=n-e;return u.forEach(function(t){var h=Math.abs(i-t);h<=l&&(r=t,l=h)}),r},[e,n,s,c,m,d]),y=function g(i,u,r){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof u=="number"){var t,h=i[r],k=h+u,C=[];s.forEach(function(S){C.push(S.value)}),C.push(e,n),C.push(d(h));var F=u>0?1:-1;l==="unit"?C.push(d(h+F*c)):C.push(d(k)),C=C.filter(function(S){return S!==null}).filter(function(S){return u<0?S<=h:S>=h}),l==="unit"&&(C=C.filter(function(S){return S!==h}));var Z=l==="unit"?h:k;t=C[0];var K=Math.abs(t-Z);if(C.forEach(function(S){var B=Math.abs(S-Z);B<K&&(t=S,K=B)}),t===void 0)return u<0?e:n;if(l==="dist")return t;if(Math.abs(u)>1){var N=(0,ae.Z)(i);return N[r]=t,g(N,u-F,r,l)}return t}else{if(u==="min")return e;if(u==="max")return n}},b=function(i,u,r){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",t=i[r],h=y(i,u,r,l);return{value:h,changed:h!==t}},E=function(i){return v===null&&i===0||typeof v=="number"&&i<v},M=function(i,u,r){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",t=i.map(R),h=t[r],k=y(t,u,r,l);if(t[r]=k,o===!1){var C=v||0;r>0&&t[r-1]!==h&&(t[r]=Math.max(t[r],t[r-1]+C)),r<t.length-1&&t[r+1]!==h&&(t[r]=Math.min(t[r],t[r+1]-C))}else if(typeof v=="number"||v===null){for(var F=r+1;F<t.length;F+=1)for(var Z=!0;E(t[F]-t[F-1])&&Z;){var K=b(t,1,F);t[F]=K.value,Z=K.changed}for(var N=r;N>0;N-=1)for(var S=!0;E(t[N]-t[N-1])&&S;){var B=b(t,-1,N-1);t[N-1]=B.value,S=B.changed}for(var j=t.length-1;j>0;j-=1)for(var p=!0;E(t[j]-t[j-1])&&p;){var ne=b(t,-1,j-1);t[j-1]=ne.value,p=ne.changed}for(var $=0;$<t.length-1;$+=1)for(var D=!0;E(t[$+1]-t[$])&&D;){var H=b(t,1,$+1);t[$+1]=H.value,D=H.changed}}return{value:t[r],values:t}};return[R,M]}var Nt=a.forwardRef(function(e,n){var c=e.prefixCls,s=c===void 0?"rc-slider":c,o=e.className,v=e.style,m=e.classNames,d=e.styles,R=e.disabled,y=R===void 0?!1:R,b=e.keyboard,E=b===void 0?!0:b,M=e.autoFocus,g=e.onFocus,i=e.onBlur,u=e.min,r=u===void 0?0:u,l=e.max,t=l===void 0?100:l,h=e.step,k=h===void 0?1:h,C=e.value,F=e.defaultValue,Z=e.range,K=e.count,N=e.onChange,S=e.onBeforeChange,B=e.onAfterChange,j=e.onChangeComplete,p=e.allowCross,ne=p===void 0?!0:p,$=e.pushable,D=$===void 0?!1:$,H=e.draggableTrack,O=e.reverse,G=e.vertical,Q=e.included,w=Q===void 0?!0:Q,A=e.startPoint,I=e.trackStyle,ee=e.handleStyle,re=e.railStyle,le=e.dotStyle,ue=e.activeDotStyle,me=e.marks,we=e.dots,Ae=e.handleRender,xe=e.activeHandleRender,Ce=e.tabIndex,be=Ce===void 0?0:Ce,Se=e.ariaLabelForHandle,Me=e.ariaLabelledByForHandle,oe=e.ariaValueTextFormatterForHandle,ge=a.useRef(null),Re=a.useRef(null),Fe=a.useMemo(function(){return G?O?"ttb":"btt":O?"rtl":"ltr"},[O,G]),W=a.useMemo(function(){return isFinite(r)?r:0},[r]),he=a.useMemo(function(){return isFinite(t)?t:100},[t]),ve=a.useMemo(function(){return k!==null&&k<=0?1:k},[k]),Ot=a.useMemo(function(){return typeof D=="boolean"?D?ve:!1:D>=0?D:!1},[D,ve]),He=a.useMemo(function(){return Object.keys(me||{}).map(function(P){var f=me[P],x={value:Number(P)};return f&&(0,ut.Z)(f)==="object"&&!a.isValidElement(f)&&("label"in f||"style"in f)?(x.style=f.style,x.label=f.label):x.label=f,x}).filter(function(P){var f=P.label;return f||typeof f=="number"}).sort(function(P,f){return P.value-f.value})},[me]),wt=$t(W,he,ve,He,ne,Ot),Ge=(0,z.Z)(wt,2),Pe=Ge[0],We=Ge[1],At=(0,it.Z)(F,{value:C}),ze=(0,z.Z)(At,2),ie=ze[0],Bt=ze[1],V=a.useMemo(function(){var P=ie==null?[]:Array.isArray(ie)?ie:[ie],f=(0,z.Z)(P,1),x=f[0],L=x===void 0?W:x,T=ie===null?[]:[L];if(Z){if(T=(0,ae.Z)(P),K||ie===void 0){var q=K>=0?K+1:2;for(T=T.slice(0,q);T.length<q;){var _;T.push((_=T[T.length-1])!==null&&_!==void 0?_:W)}}T.sort(function(te,de){return te-de})}return T.forEach(function(te,de){T[de]=Pe(te)}),T},[ie,Z,W,K,Pe]),De=a.useRef(V);De.current=V;var ke=function(f){return Z?f:f[0]},Be=function(f){var x=(0,ae.Z)(f).sort(function(L,T){return L-T});N&&!(0,ct.Z)(x,De.current,!0)&&N(ke(x)),Bt(x)},Je=function(){var f=ke(De.current);B==null||B(f),(0,st.ZP)(!B,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),j==null||j(f)},Xt=Dt(Re,Fe,V,W,he,Pe,Be,Je,We),$e=(0,z.Z)(Xt,4),Qe=$e[0],Yt=$e[1],Xe=$e[2],Ve=$e[3],qe=function(f,x){if(!y){var L=0,T=he-W;V.forEach(function(de,Ne){var Ee=Math.abs(f-de);Ee<=T&&(T=Ee,L=Ne)});var q=(0,ae.Z)(V);if(q[L]=f,Z&&!V.length&&K===void 0&&q.push(f),S==null||S(ke(q)),Be(q),x){var _,te;(_=document.activeElement)===null||_===void 0||(te=_.blur)===null||te===void 0||te.call(_),ge.current.focus(L),Ve(x,L,q)}}},Ut=function(f){f.preventDefault();var x=Re.current.getBoundingClientRect(),L=x.width,T=x.height,q=x.left,_=x.top,te=x.bottom,de=x.right,Ne=f.clientX,Ee=f.clientY,Ze;switch(Fe){case"btt":Ze=(te-Ee)/T;break;case"ttb":Ze=(Ee-_)/T;break;case"rtl":Ze=(de-Ne)/L;break;default:Ze=(Ne-q)/L}var zt=W+Ze*(he-W);qe(Pe(zt),f)},It=a.useState(null),_e=(0,z.Z)(It,2),Ye=_e[0],pe=_e[1],Kt=function(f,x){if(!y){var L=We(V,f,x);S==null||S(ke(V)),Be(L.values),pe(L.value)}};a.useEffect(function(){if(Ye!==null){var P=V.indexOf(Ye);P>=0&&ge.current.focus(P)}pe(null)},[Ye]);var jt=a.useMemo(function(){return H&&ve===null?!1:H},[H,ve]),et=function(f,x){Ve(f,x),S==null||S(ke(De.current))},tt=Qe!==-1;a.useEffect(function(){if(!tt){var P=V.lastIndexOf(Yt);ge.current.focus(P)}},[tt]);var ye=a.useMemo(function(){return(0,ae.Z)(Xe).sort(function(P,f){return P-f})},[Xe]),Gt=a.useMemo(function(){return Z?[ye[0],ye[ye.length-1]]:[W,ye[0]]},[ye,Z,W]),at=(0,z.Z)(Gt,2),nt=at[0],rt=at[1];a.useImperativeHandle(n,function(){return{focus:function(){ge.current.focus(0)},blur:function(){var f,x=document,L=x.activeElement;(f=Re.current)!==null&&f!==void 0&&f.contains(L)&&(L==null||L.blur())}}}),a.useEffect(function(){M&&ge.current.focus(0)},[]);var Wt=a.useMemo(function(){return{min:W,max:he,direction:Fe,disabled:y,keyboard:E,step:ve,included:w,includedStart:nt,includedEnd:rt,range:Z,tabIndex:be,ariaLabelForHandle:Se,ariaLabelledByForHandle:Me,ariaValueTextFormatterForHandle:oe,styles:d||{},classNames:m||{}}},[W,he,Fe,y,E,ve,w,nt,rt,Z,be,Se,Me,oe,d,m]);return a.createElement(se.Provider,{value:Wt},a.createElement("div",{ref:Re,className:ce()(s,o,(0,J.Z)((0,J.Z)((0,J.Z)((0,J.Z)({},"".concat(s,"-disabled"),y),"".concat(s,"-vertical"),G),"".concat(s,"-horizontal"),!G),"".concat(s,"-with-marks"),He.length)),style:v,onMouseDown:Ut},a.createElement("div",{className:ce()("".concat(s,"-rail"),m==null?void 0:m.rail),style:(0,Y.Z)((0,Y.Z)({},re),d==null?void 0:d.rail)}),a.createElement(Ft,{prefixCls:s,style:I,values:ye,startPoint:A,onStartMove:jt?et:void 0}),a.createElement(Zt,{prefixCls:s,marks:He,dots:we,style:le,activeStyle:ue}),a.createElement(ht,{ref:ge,prefixCls:s,style:ee,values:Xe,draggingIndex:Qe,onStartMove:et,onOffsetChange:Kt,onFocus:g,onBlur:i,handleRender:Ae,activeHandleRender:xe,onChangeComplete:Je}),a.createElement(St,{prefixCls:s,marks:He,onClick:qe})))}),Lt=Nt,Tt=Lt}}]);
