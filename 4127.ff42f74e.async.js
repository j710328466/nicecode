"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[4127],{2121:function(fe,U,n){n.d(U,{J:function(){return b}});var r=n(50959);const b=r.createContext({}),L=r.createContext({message:{},notification:{},modal:{}});U.Z=L},66319:function(fe,U,n){n.d(U,{CW:function(){return V}});var r=n(69066),b=n(62824),L=n(79193),c=n(65479),T=n(59168),G=n(82187),W=n.n(G),I=n(60591),d=n(50959),Z=n(35806),Q=n(69183),te=n(69187),_=function(D,j){var R={};for(var t in D)Object.prototype.hasOwnProperty.call(D,t)&&j.indexOf(t)<0&&(R[t]=D[t]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,t=Object.getOwnPropertySymbols(D);e<t.length;e++)j.indexOf(t[e])<0&&Object.prototype.propertyIsEnumerable.call(D,t[e])&&(R[t[e]]=D[t[e]]);return R};const k={info:d.createElement(c.Z,null),success:d.createElement(r.Z,null),error:d.createElement(b.Z,null),warning:d.createElement(L.Z,null),loading:d.createElement(T.Z,null)},V=D=>{let{prefixCls:j,type:R,icon:t,children:e}=D;return d.createElement("div",{className:W()(`${j}-custom-content`,`${j}-${R}`)},t||k[R],d.createElement("span",null,e))},ne=D=>{const{prefixCls:j,className:R,type:t,icon:e,content:a}=D,u=_(D,["prefixCls","className","type","icon","content"]),{getPrefixCls:i}=d.useContext(Z.E_),o=j||i("message"),f=(0,te.Z)(o),[g,O,F]=(0,Q.Z)(o,f);return g(d.createElement(I.qX,Object.assign({},u,{prefixCls:o,className:W()(R,O,`${o}-notice-pure-panel`,F,f),eventKey:"pure",duration:null,content:d.createElement(V,{prefixCls:o,type:t,icon:e},a)})))};U.ZP=ne},69183:function(fe,U,n){var r=n(23238),b=n(13758),L=n(84878),c=n(1924),T=n(44394);const G=I=>{const{componentCls:d,iconCls:Z,boxShadow:Q,colorText:te,colorSuccess:_,colorError:k,colorWarning:V,colorInfo:ne,fontSizeLG:D,motionEaseInOutCirc:j,motionDurationSlow:R,marginXS:t,paddingXS:e,borderRadiusLG:a,zIndexPopup:u,contentPadding:i,contentBg:o}=I,f=`${d}-notice`,g=new r.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:e,transform:"translateY(0)",opacity:1}}),O=new r.E4("MessageMoveOut",{"0%":{maxHeight:I.height,padding:e,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),F={padding:e,textAlign:"center",[`${d}-custom-content > ${Z}`]:{verticalAlign:"text-bottom",marginInlineEnd:t,fontSize:D},[`${f}-content`]:{display:"inline-block",padding:i,background:o,borderRadius:a,boxShadow:Q,pointerEvents:"all"},[`${d}-success > ${Z}`]:{color:_},[`${d}-error > ${Z}`]:{color:k},[`${d}-warning > ${Z}`]:{color:V},[`${d}-info > ${Z},
      ${d}-loading > ${Z}`]:{color:ne}};return[{[d]:Object.assign(Object.assign({},(0,L.Wf)(I)),{color:te,position:"fixed",top:t,width:"100%",pointerEvents:"none",zIndex:u,[`${d}-move-up`]:{animationFillMode:"forwards"},[`
        ${d}-move-up-appear,
        ${d}-move-up-enter
      `]:{animationName:g,animationDuration:R,animationPlayState:"paused",animationTimingFunction:j},[`
        ${d}-move-up-appear${d}-move-up-appear-active,
        ${d}-move-up-enter${d}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${d}-move-up-leave`]:{animationName:O,animationDuration:R,animationPlayState:"paused",animationTimingFunction:j},[`${d}-move-up-leave${d}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[d]:{[`${f}-wrapper`]:Object.assign({},F)}},{[`${d}-notice-pure-panel`]:Object.assign(Object.assign({},F),{padding:0,textAlign:"start"})}]},W=I=>({zIndexPopup:I.zIndexPopupBase+b.u6+10,contentBg:I.colorBgElevated,contentPadding:`${(I.controlHeightLG-I.fontSize*I.lineHeight)/2}px ${I.paddingSM}px`});U.Z=(0,c.I$)("Message",I=>{const d=(0,T.TS)(I,{height:150});return[G(d)]},W)},26861:function(fe,U,n){n.d(U,{K:function(){return R},Z:function(){return t}});var r=n(50959),b=n(75607),L=n(82187),c=n.n(L),T=n(60591),G=n(29368),W=n(35806),I=n(69187),d=n(66319),Z=n(69183),Q=n(29015),te=function(e,a){var u={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&a.indexOf(i)<0&&(u[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)a.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(u[i[o]]=e[i[o]]);return u};const _=8,k=3,V=e=>{let{children:a,prefixCls:u}=e;const i=(0,I.Z)(u),[o,f,g]=(0,Z.Z)(u,i);return o(r.createElement(T.JB,{classNames:{list:c()(f,g,i)}},a))},ne=(e,a)=>{let{prefixCls:u,key:i}=a;return r.createElement(V,{prefixCls:u,key:i},e)},D=r.forwardRef((e,a)=>{const{top:u,prefixCls:i,getContainer:o,maxCount:f,duration:g=k,rtl:O,transitionName:F,onAllRemoved:S}=e,{getPrefixCls:p,getPopupContainer:$,message:A,direction:s}=r.useContext(W.E_),l=i||p("message"),y=()=>({left:"50%",transform:"translateX(-50%)",top:u!=null?u:_}),v=()=>c()({[`${l}-rtl`]:O!=null?O:s==="rtl"}),m=()=>(0,Q.g)(l,F),h=r.createElement("span",{className:`${l}-close-x`},r.createElement(b.Z,{className:`${l}-close-icon`})),[C,B]=(0,T.lm)({prefixCls:l,style:y,className:v,motion:m,closable:!1,closeIcon:h,duration:g,getContainer:()=>(o==null?void 0:o())||($==null?void 0:$())||document.body,maxCount:f,onAllRemoved:S,renderNotifications:ne});return r.useImperativeHandle(a,()=>Object.assign(Object.assign({},C),{prefixCls:l,message:A})),B});let j=0;function R(e){const a=r.useRef(null),u=(0,G.ln)("Message");return[r.useMemo(()=>{const o=S=>{var p;(p=a.current)===null||p===void 0||p.close(S)},f=S=>{if(!a.current){const z=()=>{};return z.then=()=>{},z}const{open:p,prefixCls:$,message:A}=a.current,s=`${$}-notice`,{content:l,icon:y,type:v,key:m,className:h,style:C,onClose:B}=S,H=te(S,["content","icon","type","key","className","style","onClose"]);let K=m;return K==null&&(j+=1,K=`antd-message-${j}`),(0,Q.J)(z=>(p(Object.assign(Object.assign({},H),{key:K,content:r.createElement(d.CW,{prefixCls:$,type:v,icon:y},l),placement:"top",className:c()(v&&`${s}-${v}`,h,A==null?void 0:A.className),style:Object.assign(Object.assign({},A==null?void 0:A.style),C),onClose:()=>{B==null||B(),z()}})),()=>{o(K)}))},O={open:f,destroy:S=>{var p;S!==void 0?o(S):(p=a.current)===null||p===void 0||p.destroy()}};return["info","success","warning","error","loading"].forEach(S=>{const p=($,A,s)=>{let l;$&&typeof $=="object"&&"content"in $?l=$:l={content:$};let y,v;typeof A=="function"?v=A:(y=A,v=s);const m=Object.assign(Object.assign({onClose:v,duration:y},l),{type:S});return f(m)};O[S]=p}),O},[]),r.createElement(D,Object.assign({key:"message-holder"},e,{ref:a}))]}function t(e){return R(e)}},29015:function(fe,U,n){n.d(U,{J:function(){return b},g:function(){return r}});function r(L,c){return{motionName:c!=null?c:`${L}-move-up`}}function b(L){let c;const T=new Promise(W=>{c=L(()=>{W(!0)})}),G=()=>{c==null||c()};return G.then=(W,I)=>T.then(W,I),G.promise=T,G}},28204:function(fe,U,n){n.d(U,{CW:function(){return e},ZP:function(){return u},z5:function(){return R}});var r=n(50959),b=n(69066),L=n(62824),c=n(75607),T=n(79193),G=n(65479),W=n(59168),I=n(82187),d=n.n(I),Z=n(60591),Q=n(35806),te=n(69187),_=n(48973),k=n(1924),V=n(23238),ne=(0,k.bk)(["Notification","PurePanel"],i=>{const o=`${i.componentCls}-notice`,f=(0,_.Rp)(i);return{[`${o}-pure-panel`]:Object.assign(Object.assign({},(0,_.$e)(f)),{width:f.width,maxWidth:`calc(100vw - ${(0,V.bf)(i.calc(f.notificationMarginEdge).mul(2).equal())})`,margin:0})}},_.eh),D=function(i,o){var f={};for(var g in i)Object.prototype.hasOwnProperty.call(i,g)&&o.indexOf(g)<0&&(f[g]=i[g]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,g=Object.getOwnPropertySymbols(i);O<g.length;O++)o.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(i,g[O])&&(f[g[O]]=i[g[O]]);return f};const j={info:r.createElement(G.Z,null),success:r.createElement(b.Z,null),error:r.createElement(L.Z,null),warning:r.createElement(T.Z,null),loading:r.createElement(W.Z,null)};function R(i,o){return o===null||o===!1?null:o||r.createElement(c.Z,{className:`${i}-close-icon`})}const t={success:b.Z,info:G.Z,error:L.Z,warning:T.Z},e=i=>{const{prefixCls:o,icon:f,type:g,message:O,description:F,btn:S,role:p="alert"}=i;let $=null;return f?$=r.createElement("span",{className:`${o}-icon`},f):g&&($=r.createElement(t[g]||null,{className:d()(`${o}-icon`,`${o}-icon-${g}`)})),r.createElement("div",{className:d()({[`${o}-with-icon`]:$}),role:p},$,r.createElement("div",{className:`${o}-message`},O),r.createElement("div",{className:`${o}-description`},F),S&&r.createElement("div",{className:`${o}-btn`},S))};var u=i=>{const{prefixCls:o,className:f,icon:g,type:O,message:F,description:S,btn:p,closable:$=!0,closeIcon:A,className:s}=i,l=D(i,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:y}=r.useContext(Q.E_),v=o||y("notification"),m=`${v}-notice`,h=(0,te.Z)(v),[C,B,H]=(0,_.ZP)(v,h);return C(r.createElement("div",{className:d()(`${m}-pure-panel`,B,f,H,h)},r.createElement(ne,{prefixCls:v}),r.createElement(Z.qX,Object.assign({},l,{prefixCls:v,eventKey:"pure",duration:null,closable:$,className:d()({notificationClassName:s}),closeIcon:R(v,A),content:r.createElement(e,{prefixCls:m,icon:g,type:O,message:F,description:S,btn:p})}))))}},48973:function(fe,U,n){n.d(U,{ZP:function(){return R},$e:function(){return V},eh:function(){return D},Rp:function(){return j}});var r=n(23238),b=n(13758),L=n(84878),c=n(44394),T=n(1924),W=t=>{const{componentCls:e,notificationMarginEdge:a,animationMaxHeight:u}=t,i=`${e}-notice`,o=new r.E4("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),f=new r.E4("antNotificationTopFadeIn",{"0%":{top:-u,opacity:0},"100%":{top:0,opacity:1}}),g=new r.E4("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(u).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),O=new r.E4("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[e]:{[`&${e}-top, &${e}-bottom`]:{marginInline:0,[i]:{marginInline:"auto auto"}},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:f}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:g}},[`&${e}-topRight, &${e}-bottomRight`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:o}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:a,_skip_check_:!0},[i]:{marginInlineEnd:"auto",marginInlineStart:0},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:O}}}}};const I=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],d={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},Z=(t,e)=>{const{componentCls:a}=t;return{[`${a}-${e}`]:{[`&${a}-stack > ${a}-notice-wrapper`]:{[e.startsWith("top")?"top":"bottom"]:0,[d[e]]:{value:0,_skip_check_:!0}}}}},Q=t=>{const e={};for(let a=1;a<t.notificationStackLayer;a++)e[`&:nth-last-child(${a+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},e)},te=t=>{const e={};for(let a=1;a<t.notificationStackLayer;a++)e[`&:nth-last-child(${a+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},e)};var k=t=>{const{componentCls:e}=t;return Object.assign({[`${e}-stack`]:{[`& > ${e}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Q(t))},[`${e}-stack:not(${e}-stack-expanded)`]:{[`& > ${e}-notice-wrapper`]:Object.assign({},te(t))},[`${e}-stack${e}-stack-expanded`]:{[`& > ${e}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},I.map(a=>Z(t,a)).reduce((a,u)=>Object.assign(Object.assign({},a),u),{}))};const V=t=>{const{iconCls:e,componentCls:a,boxShadow:u,fontSizeLG:i,notificationMarginBottom:o,borderRadiusLG:f,colorSuccess:g,colorInfo:O,colorWarning:F,colorError:S,colorTextHeading:p,notificationBg:$,notificationPadding:A,notificationMarginEdge:s,fontSize:l,lineHeight:y,width:v,notificationIconSize:m,colorText:h}=t,C=`${a}-notice`;return{position:"relative",marginBottom:o,marginInlineStart:"auto",background:$,borderRadius:f,boxShadow:u,[C]:{padding:A,width:v,maxWidth:`calc(100vw - ${(0,r.bf)(t.calc(s).mul(2).equal())})`,overflow:"hidden",lineHeight:y,wordWrap:"break-word"},[`${C}-message`]:{marginBottom:t.marginXS,color:p,fontSize:i,lineHeight:t.lineHeightLG},[`${C}-description`]:{fontSize:l,color:h},[`${C}-closable ${C}-message`]:{paddingInlineEnd:t.paddingLG},[`${C}-with-icon ${C}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(m).equal(),fontSize:i},[`${C}-with-icon ${C}-description`]:{marginInlineStart:t.calc(t.marginSM).add(m).equal(),fontSize:l},[`${C}-icon`]:{position:"absolute",fontSize:m,lineHeight:1,[`&-success${e}`]:{color:g},[`&-info${e}`]:{color:O},[`&-warning${e}`]:{color:F},[`&-error${e}`]:{color:S}},[`${C}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},(0,L.Qy)(t)),[`${C}-btn`]:{float:"right",marginTop:t.marginSM}}},ne=t=>{const{componentCls:e,notificationMarginBottom:a,notificationMarginEdge:u,motionDurationMid:i,motionEaseInOut:o}=t,f=`${e}-notice`,g=new r.E4("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:a},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},(0,L.Wf)(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:u,_skip_check_:!0},[`${e}-hook-holder`]:{position:"relative"},[`${e}-fade-appear-prepare`]:{opacity:"0 !important"},[`${e}-fade-enter, ${e}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:o,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${e}-fade-leave`]:{animationTimingFunction:o,animationFillMode:"both",animationDuration:i,animationPlayState:"paused"},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationPlayState:"running"},[`${e}-fade-leave${e}-fade-leave-active`]:{animationName:g,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${f}-btn`]:{float:"left"}}})},{[e]:{[`${f}-wrapper`]:Object.assign({},V(t))}}]},D=t=>({zIndexPopup:t.zIndexPopupBase+b.u6+50,width:384}),j=t=>{const e=t.paddingMD,a=t.paddingLG;return(0,c.TS)(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:a,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${(0,r.bf)(t.paddingMD)} ${(0,r.bf)(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3})};var R=(0,T.I$)("Notification",t=>{const e=j(t);return[ne(e),W(e),k(e)]},D)},34191:function(fe,U,n){n.d(U,{Z:function(){return e},k:function(){return t}});var r=n(50959),b=n(82187),L=n.n(b),c=n(60591),T=n(29368),G=n(35806),W=n(69187),I=n(82838),d=n(28204),Z=n(48973);function Q(a,u,i){let o;switch(a){case"top":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:u,bottom:"auto"};break;case"topLeft":o={left:0,top:u,bottom:"auto"};break;case"topRight":o={right:0,top:u,bottom:"auto"};break;case"bottom":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:i};break;case"bottomLeft":o={left:0,top:"auto",bottom:i};break;default:o={right:0,top:"auto",bottom:i};break}return o}function te(a){return{motionName:`${a}-fade`}}var _=function(a,u){var i={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&u.indexOf(o)<0&&(i[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,o=Object.getOwnPropertySymbols(a);f<o.length;f++)u.indexOf(o[f])<0&&Object.prototype.propertyIsEnumerable.call(a,o[f])&&(i[o[f]]=a[o[f]]);return i};const k=24,V=4.5,ne="topRight",D=a=>{let{children:u,prefixCls:i}=a;const o=(0,W.Z)(i),[f,g,O]=(0,Z.ZP)(i,o);return f(r.createElement(c.JB,{classNames:{list:L()(g,O,o)}},u))},j=(a,u)=>{let{prefixCls:i,key:o}=u;return r.createElement(D,{prefixCls:i,key:o},a)},R=r.forwardRef((a,u)=>{const{top:i,bottom:o,prefixCls:f,getContainer:g,maxCount:O,rtl:F,onAllRemoved:S,stack:p,duration:$}=a,{getPrefixCls:A,getPopupContainer:s,notification:l,direction:y}=(0,r.useContext)(G.E_),[,v]=(0,I.ZP)(),m=f||A("notification"),h=z=>Q(z,i!=null?i:k,o!=null?o:k),C=()=>L()({[`${m}-rtl`]:F!=null?F:y==="rtl"}),B=()=>te(m),[H,K]=(0,c.lm)({prefixCls:m,style:h,className:C,motion:B,closable:!0,closeIcon:(0,d.z5)(m),duration:$!=null?$:V,getContainer:()=>(g==null?void 0:g())||(s==null?void 0:s())||document.body,maxCount:O,onAllRemoved:S,renderNotifications:j,stack:p===!1?!1:{threshold:typeof p=="object"?p==null?void 0:p.threshold:void 0,offset:8,gap:v.margin}});return r.useImperativeHandle(u,()=>Object.assign(Object.assign({},H),{prefixCls:m,notification:l})),K});function t(a){const u=r.useRef(null),i=(0,T.ln)("Notification");return[r.useMemo(()=>{const f=S=>{var p;if(!u.current)return;const{open:$,prefixCls:A,notification:s}=u.current,l=`${A}-notice`,{message:y,description:v,icon:m,type:h,btn:C,className:B,style:H,role:K="alert",closeIcon:z}=S,ce=_(S,["message","description","icon","type","btn","className","style","role","closeIcon"]),w=(0,d.z5)(l,typeof z!="undefined"?z:s==null?void 0:s.closeIcon);return $(Object.assign(Object.assign({placement:(p=a==null?void 0:a.placement)!==null&&p!==void 0?p:ne},ce),{content:r.createElement(d.CW,{prefixCls:l,icon:m,type:h,message:y,description:v,btn:C,role:K}),className:L()(h&&`${l}-${h}`,B,s==null?void 0:s.className),style:Object.assign(Object.assign({},s==null?void 0:s.style),H),closeIcon:w,closable:!!w}))},O={open:f,destroy:S=>{var p,$;S!==void 0?(p=u.current)===null||p===void 0||p.close(S):($=u.current)===null||$===void 0||$.destroy()}};return["success","info","warning","error"].forEach(S=>{O[S]=p=>f(Object.assign(Object.assign({},p),{type:S}))}),O},[]),r.createElement(R,Object.assign({key:"notification-holder"},a,{ref:u}))]}function e(a){return t(a)}},60591:function(fe,U,n){n.d(U,{qX:function(){return k},JB:function(){return D},lm:function(){return A}});var r=n(22937),b=n(81361),L=n(68601),c=n(50959),T=n(7376),G=n(10422),W=n(57260),I=n(78948),d=n(82187),Z=n.n(d),Q=n(10091),te=n(75924),_=c.forwardRef(function(s,l){var y=s.prefixCls,v=s.style,m=s.className,h=s.duration,C=h===void 0?4.5:h,B=s.eventKey,H=s.content,K=s.closable,z=s.closeIcon,ce=z===void 0?"x":z,w=s.props,Y=s.onClick,X=s.onNoticeClose,le=s.times,oe=s.hovering,J=c.useState(!1),ue=(0,b.Z)(J,2),se=ue[0],ae=ue[1],q=oe||se,ie=function(){X(B)},M=function(E){(E.key==="Enter"||E.code==="Enter"||E.keyCode===te.Z.ENTER)&&ie()};c.useEffect(function(){if(!q&&C>0){var P=setTimeout(function(){ie()},C*1e3);return function(){clearTimeout(P)}}},[C,q,le]);var x="".concat(y,"-notice");return c.createElement("div",(0,W.Z)({},w,{ref:l,className:Z()(x,m,(0,I.Z)({},"".concat(x,"-closable"),K)),style:v,onMouseEnter:function(E){var N;ae(!0),w==null||(N=w.onMouseEnter)===null||N===void 0||N.call(w,E)},onMouseLeave:function(E){var N;ae(!1),w==null||(N=w.onMouseLeave)===null||N===void 0||N.call(w,E)},onClick:Y}),c.createElement("div",{className:"".concat(x,"-content")},H),K&&c.createElement("a",{tabIndex:0,className:"".concat(x,"-close"),onKeyDown:M,onClick:function(E){E.preventDefault(),E.stopPropagation(),ie()}},ce))}),k=_,V=c.createContext({}),ne=function(l){var y=l.children,v=l.classNames;return c.createElement(V.Provider,{value:{classNames:v}},y)},D=ne,j=n(19881),R=8,t=3,e=16,a=function(l){var y={offset:R,threshold:t,gap:e};if(l&&(0,j.Z)(l)==="object"){var v,m,h;y.offset=(v=l.offset)!==null&&v!==void 0?v:R,y.threshold=(m=l.threshold)!==null&&m!==void 0?m:t,y.gap=(h=l.gap)!==null&&h!==void 0?h:e}return[!!l,y]},u=a,i=["className","style","classNames","styles"],o=function(l){var y,v=l.configList,m=l.placement,h=l.prefixCls,C=l.className,B=l.style,H=l.motion,K=l.onAllNoticeRemoved,z=l.onNoticeClose,ce=l.stack,w=(0,c.useContext)(V),Y=w.classNames,X=(0,c.useRef)({}),le=(0,c.useState)(null),oe=(0,b.Z)(le,2),J=oe[0],ue=oe[1],se=(0,c.useState)([]),ae=(0,b.Z)(se,2),q=ae[0],ie=ae[1],M=v.map(function(ee){return{config:ee,key:String(ee.key)}}),x=u(ce),P=(0,b.Z)(x,2),E=P[0],N=P[1],re=N.offset,me=N.threshold,Ce=N.gap,pe=E&&(q.length>0||M.length<=me),je=typeof H=="function"?H(m):H;return(0,c.useEffect)(function(){E&&q.length>1&&ie(function(ee){return ee.filter(function(ve){return M.some(function(he){var Ne=he.key;return ve===Ne})})})},[q,M,E]),(0,c.useEffect)(function(){var ee;if(E&&X.current[(ee=M[M.length-1])===null||ee===void 0?void 0:ee.key]){var ve;ue(X.current[(ve=M[M.length-1])===null||ve===void 0?void 0:ve.key])}},[M,E]),c.createElement(Q.V4,(0,W.Z)({key:m,className:Z()(h,"".concat(h,"-").concat(m),Y==null?void 0:Y.list,C,(y={},(0,I.Z)(y,"".concat(h,"-stack"),!!E),(0,I.Z)(y,"".concat(h,"-stack-expanded"),pe),y)),style:B,keys:M,motionAppear:!0},je,{onAllRemoved:function(){K(m)}}),function(ee,ve){var he=ee.config,Ne=ee.className,Be=ee.style,We=ee.index,Te=he,Se=Te.key,Fe=Te.times,de=String(Se),ye=he,Ke=ye.className,Ue=ye.style,Pe=ye.classNames,Oe=ye.styles,He=(0,L.Z)(ye,i),Ie=M.findIndex(function(xe){return xe.key===de}),$e={};if(E){var Ee=M.length-1-(Ie>-1?Ie:We-1),Ae=m==="top"||m==="bottom"?"-50%":"0";if(Ee>0){var Me,be,De;$e.height=pe?(Me=X.current[de])===null||Me===void 0?void 0:Me.offsetHeight:J==null?void 0:J.offsetHeight;for(var Ze=0,Le=0;Le<Ee;Le++){var Re;Ze+=((Re=X.current[M[M.length-1-Le].key])===null||Re===void 0?void 0:Re.offsetHeight)+Ce}var ze=(pe?Ze:Ee*re)*(m.startsWith("top")?1:-1),we=!pe&&J!==null&&J!==void 0&&J.offsetWidth&&(be=X.current[de])!==null&&be!==void 0&&be.offsetWidth?((J==null?void 0:J.offsetWidth)-re*2*(Ee<3?Ee:3))/((De=X.current[de])===null||De===void 0?void 0:De.offsetWidth):1;$e.transform="translate3d(".concat(Ae,", ").concat(ze,"px, 0) scaleX(").concat(we,")")}else $e.transform="translate3d(".concat(Ae,", 0, 0)")}return c.createElement("div",{ref:ve,className:Z()("".concat(h,"-notice-wrapper"),Ne,Pe==null?void 0:Pe.wrapper),style:(0,T.Z)((0,T.Z)((0,T.Z)({},Be),$e),Oe==null?void 0:Oe.wrapper),onMouseEnter:function(){return ie(function(ge){return ge.includes(de)?ge:[].concat((0,r.Z)(ge),[de])})},onMouseLeave:function(){return ie(function(ge){return ge.filter(function(Ge){return Ge!==de})})}},c.createElement(k,(0,W.Z)({},He,{ref:function(ge){Ie>-1?X.current[de]=ge:delete X.current[de]},prefixCls:h,classNames:Pe,styles:Oe,className:Z()(Ke,Y==null?void 0:Y.notice),style:Ue,times:Fe,key:Se,eventKey:Se,onNoticeClose:z,hovering:E&&q.length>0})))})},f=o,g=c.forwardRef(function(s,l){var y=s.prefixCls,v=y===void 0?"rc-notification":y,m=s.container,h=s.motion,C=s.maxCount,B=s.className,H=s.style,K=s.onAllRemoved,z=s.stack,ce=s.renderNotifications,w=c.useState([]),Y=(0,b.Z)(w,2),X=Y[0],le=Y[1],oe=function(P){var E,N=X.find(function(re){return re.key===P});N==null||(E=N.onClose)===null||E===void 0||E.call(N),le(function(re){return re.filter(function(me){return me.key!==P})})};c.useImperativeHandle(l,function(){return{open:function(P){le(function(E){var N=(0,r.Z)(E),re=N.findIndex(function(pe){return pe.key===P.key}),me=(0,T.Z)({},P);if(re>=0){var Ce;me.times=(((Ce=E[re])===null||Ce===void 0?void 0:Ce.times)||0)+1,N[re]=me}else me.times=0,N.push(me);return C>0&&N.length>C&&(N=N.slice(-C)),N})},close:function(P){oe(P)},destroy:function(){le([])}}});var J=c.useState({}),ue=(0,b.Z)(J,2),se=ue[0],ae=ue[1];c.useEffect(function(){var x={};X.forEach(function(P){var E=P.placement,N=E===void 0?"topRight":E;N&&(x[N]=x[N]||[],x[N].push(P))}),Object.keys(se).forEach(function(P){x[P]=x[P]||[]}),ae(x)},[X]);var q=function(P){ae(function(E){var N=(0,T.Z)({},E),re=N[P]||[];return re.length||delete N[P],N})},ie=c.useRef(!1);if(c.useEffect(function(){Object.keys(se).length>0?ie.current=!0:ie.current&&(K==null||K(),ie.current=!1)},[se]),!m)return null;var M=Object.keys(se);return(0,G.createPortal)(c.createElement(c.Fragment,null,M.map(function(x){var P=se[x],E=c.createElement(f,{key:x,configList:P,placement:x,prefixCls:v,className:B==null?void 0:B(x),style:H==null?void 0:H(x),motion:h,onNoticeClose:oe,onAllNoticeRemoved:q,stack:z});return ce?ce(E,{prefixCls:v,key:x}):E})),m)}),O=g,F=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],S=function(){return document.body},p=0;function $(){for(var s={},l=arguments.length,y=new Array(l),v=0;v<l;v++)y[v]=arguments[v];return y.forEach(function(m){m&&Object.keys(m).forEach(function(h){var C=m[h];C!==void 0&&(s[h]=C)})}),s}function A(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.getContainer,y=l===void 0?S:l,v=s.motion,m=s.prefixCls,h=s.maxCount,C=s.className,B=s.style,H=s.onAllRemoved,K=s.stack,z=s.renderNotifications,ce=(0,L.Z)(s,F),w=c.useState(),Y=(0,b.Z)(w,2),X=Y[0],le=Y[1],oe=c.useRef(),J=c.createElement(O,{container:X,ref:oe,prefixCls:m,motion:v,maxCount:h,className:C,style:B,onAllRemoved:H,stack:K,renderNotifications:z}),ue=c.useState([]),se=(0,b.Z)(ue,2),ae=se[0],q=se[1],ie=c.useMemo(function(){return{open:function(x){var P=$(ce,x);(P.key===null||P.key===void 0)&&(P.key="rc-notification-".concat(p),p+=1),q(function(E){return[].concat((0,r.Z)(E),[{type:"open",config:P}])})},close:function(x){q(function(P){return[].concat((0,r.Z)(P),[{type:"close",key:x}])})},destroy:function(){q(function(x){return[].concat((0,r.Z)(x),[{type:"destroy"}])})}}},[]);return c.useEffect(function(){le(y())}),c.useEffect(function(){oe.current&&ae.length&&(ae.forEach(function(M){switch(M.type){case"open":oe.current.open(M.config);break;case"close":oe.current.close(M.key);break;case"destroy":oe.current.destroy();break}}),q(function(M){return M.filter(function(x){return!ae.includes(x)})}))},[ae]),[ie,J]}}}]);
