"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[3277],{40054:function(W,r,e){e.r(r);var m=e(50959),a=e(87637),u=e(50544),n=e(11527),v=a.ZP._InternalPanelDoNotUseOrYouWillBeFired;r.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.ZP,{theme:{components:{Message:{contentPadding:40,contentBg:"#e6f4ff"}}},children:(0,n.jsx)(v,{content:"Hello World!",type:"error"})}),(0,n.jsx)(u.ZP,{theme:{components:{Message:{colorBgElevated:"#e6f4ff"}}},children:(0,n.jsx)(v,{content:"Hello World!",type:"error"})})]})}},22328:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o=function(){P.open({type:"success",content:"This is a prompt message with custom className and style",className:"custom-class",style:{marginTop:"20vh"}})};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{onClick:o,children:"Customized style"})]})};r.default=c},59053:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o=function(){P.open({type:"success",content:"This is a prompt message for success, and it will disappear in 10 seconds",duration:10})};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{onClick:o,children:"Customized display duration"})]})};r.default=c},18472:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o=function(){P.info("Hello, Ant Design!")};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{type:"primary",onClick:o,children:"Display normal message"})]})};r.default=c},6647:function(W,r,e){e.r(r);var m=e(50959),a=e(87637),u=e(2751),n=e(11527),v=function(){a.ZP.info("This is a normal message")},_=function(){return(0,n.jsx)(u.ZP,{type:"primary",onClick:v,children:"Static Method"})};r.default=_},58150:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o=function(){P.open({type:"loading",content:"Action in progress..",duration:0}),setTimeout(P.destroy,2500)};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{onClick:o,children:"Display a loading indicator"})]})};r.default=c},46517:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(57853),_=e(2751),c=e(11527),O=function(){var M=n.ZP.useMessage(),P=a()(M,2),C=P[0],o=P[1],i=function(){C.open({type:"success",content:"This is a success message"})},D=function(){C.open({type:"error",content:"This is an error message"})},B=function(){C.open({type:"warning",content:"This is a warning message"})};return(0,c.jsxs)(c.Fragment,{children:[o,(0,c.jsxs)(v.Z,{children:[(0,c.jsx)(_.ZP,{onClick:i,children:"Success"}),(0,c.jsx)(_.ZP,{onClick:D,children:"Error"}),(0,c.jsx)(_.ZP,{onClick:B,children:"Warning"})]})]})};r.default=O},63811:function(W,r,e){e.r(r);var m=e(50959),a=e(87637),u=e(11527),n=a.ZP._InternalPanelDoNotUseOrYouWillBeFired;r.default=function(){return(0,u.jsx)(n,{content:"Hello World!",type:"error"})}},19810:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o=function(){P.open({type:"loading",content:"Action in progress..",duration:2.5}).then(function(){return n.ZP.success("Loading finished",2.5)}).then(function(){return n.ZP.info("Loading finished",2.5)})};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{onClick:o,children:"Display sequential messages"})]})};r.default=c},36479:function(W,r,e){e.r(r);var m=e(48305),a=e.n(m),u=e(50959),n=e(87637),v=e(2751),_=e(11527),c=function(){var f=n.ZP.useMessage(),M=a()(f,2),P=M[0],C=M[1],o="updatable",i=function(){P.open({key:o,type:"loading",content:"Loading..."}),setTimeout(function(){P.open({key:o,type:"success",content:"Loaded!",duration:2})},1e3)};return(0,_.jsxs)(_.Fragment,{children:[C,(0,_.jsx)(v.ZP,{type:"primary",onClick:i,children:"Open the message box"})]})};r.default=c},76313:function(W,r,e){e.d(r,{T:function(){return a},n:function(){return m}});function m(u){return["small","middle","large"].includes(u)}function a(u){return u?typeof u=="number"&&!Number.isNaN(u):!1}},13142:function(W,r,e){e.d(r,{Cn:function(){return C},u6:function(){return O}});var m=e(48305),a=e.n(m),u=e(50959),n=e(8400),v=e(14823),_=100,c=10,O=_*c,f={Modal:_,Drawer:_,Popover:_,Popconfirm:_,Tooltip:_,Tour:_},M={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function P(o){return o in f}function C(o,i){var D=(0,n.ZP)(),B=a()(D,2),K=B[1],I=u.useContext(v.Z),X=P(o);if(i!==void 0)return[i,i];var L=I!=null?I:0;return X?(L+=(I?0:K.zIndexPopupBase)+f[o],L=Math.min(L,K.zIndexPopupBase+O)):L+=M[o],[I===void 0?i:L,L]}},14823:function(W,r,e){var m=e(50959),a=m.createContext(void 0);r.Z=a},67680:function(W,r,e){var m=e(48305),a=e.n(m),u=e(8400),n=function(_){var c=(0,u.ZP)(),O=a()(c,5),f=O[4];return f?"".concat(_,"-css-var"):""};r.Z=n},72724:function(W,r,e){e.d(r,{CW:function(){return j}});var m=e(26068),a=e.n(m),u=e(48305),n=e.n(u),v=e(67825),_=e.n(v),c=e(39814),O=e.n(c),f=e(67101),M=e.n(f),P=e(18350),C=e.n(P),o=e(71265),i=e.n(o),D=e(56489),B=e.n(D),K=e(82187),I=e.n(K),X=e(73062),L=e(50959),Y=e(45645),w=e(91683),F=e(67680),U=e(11527),J=["prefixCls","className","type","icon","content"],A={info:(0,U.jsx)(i(),{}),success:(0,U.jsx)(O(),{}),error:(0,U.jsx)(M(),{}),warning:(0,U.jsx)(C(),{}),loading:(0,U.jsx)(B(),{})},j=function(p){var d=p.prefixCls,s=p.type,t=p.icon,l=p.children;return(0,U.jsxs)("div",{className:I()("".concat(d,"-custom-content"),"".concat(d,"-").concat(s)),children:[t||A[s],(0,U.jsx)("span",{children:l})]})},H=function(p){var d=p.prefixCls,s=p.className,t=p.type,l=p.icon,g=p.content,E=_()(p,J),h=L.useContext(Y.E_),S=h.getPrefixCls,y=d||S("message"),z=(0,F.Z)(y),$=(0,w.Z)(y,z),N=n()($,3),b=N[0],x=N[1],R=N[2];return b((0,U.jsx)(X.qX,a()(a()({},E),{},{prefixCls:y,className:I()(s,x,"".concat(y,"-notice-pure-panel"),R,z),eventKey:"pure",duration:null,content:(0,U.jsx)(j,{prefixCls:y,type:t,icon:l,children:g})})))};r.ZP=H},87637:function(W,r,e){var m=e(15558),a=e.n(m),u=e(26068),n=e.n(u),v=e(48305),_=e.n(v),c=e(50959),O=e(28837),f=e(50544),M=e(72724),P=e(46941),C=e(65924),o=e(11527),i=null,D=function(s){return s()},B=[],K={};function I(){var d=K,s=d.prefixCls,t=d.getContainer,l=d.duration,g=d.rtl,E=d.maxCount,h=d.top,S=s!=null?s:(0,f.w6)().getPrefixCls("message"),y=(t==null?void 0:t())||document.body;return{prefixCls:S,getContainer:function(){return y},duration:l,rtl:g,maxCount:E,top:h}}var X=c.forwardRef(function(d,s){var t=c.useState(I),l=_()(t,2),g=l[0],E=l[1],h=(0,P.K)(g),S=_()(h,2),y=S[0],z=S[1],$=(0,f.w6)(),N=$.getRootPrefixCls(),b=$.getIconPrefixCls(),x=$.getTheme(),R=function(){E(I)};return c.useEffect(R,[]),c.useImperativeHandle(s,function(){var Z=n()({},y);return Object.keys(Z).forEach(function(V){Z[V]=function(){var T;return R(),(T=y)[V].apply(T,arguments)}}),{instance:Z,sync:R}}),(0,o.jsx)(f.ZP,{prefixCls:N,iconPrefixCls:b,theme:x,children:z})});function L(){if(!i){var d=document.createDocumentFragment(),s={fragment:d};i=s,D(function(){(0,O.sY)((0,o.jsx)(X,{ref:function(l){var g=l||{},E=g.instance,h=g.sync;Promise.resolve().then(function(){!s.instance&&E&&(s.instance=E,s.sync=h,L())})}}),d)});return}i.instance&&(B.forEach(function(t){var l=t.type,g=t.skipped;if(!g)switch(l){case"open":{D(function(){var E=i.instance.open(n()(n()({},K),t.config));E==null||E.then(t.resolve),t.setCloseFn(E)});break}case"destroy":D(function(){var E;(E=i)===null||E===void 0||E.instance.destroy(t.key)});break;default:D(function(){var E,h=(E=i.instance)[l].apply(E,a()(t.args));h==null||h.then(t.resolve),t.setCloseFn(h)})}}),B=[])}function Y(d){K=n()(n()({},K),d),D(function(){var s,t;(s=i)===null||s===void 0||(t=s.sync)===null||t===void 0||t.call(s)})}function w(d){var s=(0,C.J)(function(t){var l,g={type:"open",config:d,resolve:t,setCloseFn:function(h){l=h}};return B.push(g),function(){l?D(function(){l()}):g.skipped=!0}});return L(),s}function F(d,s){var t=(0,C.J)(function(l){var g,E={type:d,args:s,resolve:l,setCloseFn:function(S){g=S}};return B.push(E),function(){g?D(function(){g()}):E.skipped=!0}});return L(),t}function U(d){B.push({type:"destroy",key:d}),L()}var J=["success","info","warning","error","loading"],A={open:w,destroy:U,config:Y,useMessage:P.Z,_InternalPanelDoNotUseOrYouWillBeFired:M.ZP},j=A;J.forEach(function(d){j[d]=function(){for(var s=arguments.length,t=new Array(s),l=0;l<s;l++)t[l]=arguments[l];return F(d,t)}});var H=function(){},G=null,p=null;r.ZP=j},91683:function(W,r,e){var m=e(26068),a=e.n(m),u=e(82092),n=e.n(u),v=e(3152),_=e(13142),c=e(65588),O=e(41755),f=e(84552),M=function(o){var i=o.componentCls,D=o.iconCls,B=o.boxShadow,K=o.colorText,I=o.colorSuccess,X=o.colorError,L=o.colorWarning,Y=o.colorInfo,w=o.fontSizeLG,F=o.motionEaseInOutCirc,U=o.motionDurationSlow,J=o.marginXS,A=o.paddingXS,j=o.borderRadiusLG,H=o.zIndexPopup,G=o.contentPadding,p=o.contentBg,d="".concat(i,"-notice"),s=new v.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:A,transform:"translateY(0)",opacity:1}}),t=new v.E4("MessageMoveOut",{"0%":{maxHeight:o.height,padding:A,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),l=n()(n()(n()(n()(n()(n()({padding:A,textAlign:"center"},"".concat(i,"-custom-content > ").concat(D),{verticalAlign:"text-bottom",marginInlineEnd:J,fontSize:w}),"".concat(d,"-content"),{display:"inline-block",padding:G,background:p,borderRadius:j,boxShadow:B,pointerEvents:"all"}),"".concat(i,"-success > ").concat(D),{color:I}),"".concat(i,"-error > ").concat(D),{color:X}),"".concat(i,"-warning > ").concat(D),{color:L}),"".concat(i,"-info > ").concat(D,`,
      `).concat(i,"-loading > ").concat(D),{color:Y});return[n()({},i,a()(a()({},(0,c.Wf)(o)),{},n()(n()(n()(n()(n()(n()({color:K,position:"fixed",top:J,width:"100%",pointerEvents:"none",zIndex:H},"".concat(i,"-move-up"),{animationFillMode:"forwards"}),`
        `.concat(i,`-move-up-appear,
        `).concat(i,`-move-up-enter
      `),{animationName:s,animationDuration:U,animationPlayState:"paused",animationTimingFunction:F}),`
        `.concat(i,"-move-up-appear").concat(i,`-move-up-appear-active,
        `).concat(i,"-move-up-enter").concat(i,`-move-up-enter-active
      `),{animationPlayState:"running"}),"".concat(i,"-move-up-leave"),{animationName:t,animationDuration:U,animationPlayState:"paused",animationTimingFunction:F}),"".concat(i,"-move-up-leave").concat(i,"-move-up-leave-active"),{animationPlayState:"running"}),"&-rtl",{direction:"rtl",span:{direction:"rtl"}}))),n()({},i,n()({},"".concat(d,"-wrapper"),a()({},l))),n()({},"".concat(i,"-notice-pure-panel"),a()(a()({},l),{},{padding:0,textAlign:"start"}))]},P=function(o){return{zIndexPopup:o.zIndexPopupBase+_.u6+10,contentBg:o.colorBgElevated,contentPadding:"".concat((o.controlHeightLG-o.fontSize*o.lineHeight)/2,"px ").concat(o.paddingSM,"px")}};r.Z=(0,O.I$)("Message",function(C){var o=(0,f.TS)(C,{height:150});return[M(o)]},P)},46941:function(W,r,e){e.d(r,{K:function(){return d},Z:function(){return s}});var m=e(31759),a=e.n(m),u=e(67825),n=e.n(u),v=e(26068),_=e.n(v),c=e(82092),O=e.n(c),f=e(48305),M=e.n(f),P=e(50959),C=e(99067),o=e.n(C),i=e(82187),D=e.n(i),B=e(73062),K=e(16924),I=e(45645),X=e(72724),L=e(91683),Y=e(65924),w=e(67680),F=e(11527),U=["content","icon","type","key","className","style","onClose"],J=8,A=3,j=function(l){var g=l.children,E=l.prefixCls,h=(0,w.Z)(E),S=(0,L.Z)(E,h),y=M()(S,3),z=y[0],$=y[1],N=y[2];return z((0,F.jsx)(B.JB,{classNames:{list:D()($,N,h)},children:g}))},H=function(l,g){var E=g.prefixCls,h=g.key;return(0,F.jsx)(j,{prefixCls:E,children:l},h)},G=P.forwardRef(function(t,l){var g=t.top,E=t.prefixCls,h=t.getContainer,S=t.maxCount,y=t.duration,z=y===void 0?A:y,$=t.rtl,N=t.transitionName,b=t.onAllRemoved,x=P.useContext(I.E_),R=x.getPrefixCls,Z=x.getPopupContainer,V=x.message,T=E||R("message"),ee=function(){return{left:"50%",transform:"translateX(-50%)",top:g!=null?g:J}},k=function(){return D()(O()({},"".concat(T,"-rtl"),$))},ne=function(){return(0,Y.g)(T,N)},Q=(0,F.jsx)("span",{className:"".concat(T,"-close-x"),children:(0,F.jsx)(o(),{className:"".concat(T,"-close-icon")})}),_e=(0,B.lm)({prefixCls:T,style:ee,className:k,motion:ne,closable:!1,closeIcon:Q,duration:z,getContainer:function(){return(h==null?void 0:h())||(Z==null?void 0:Z())||document.body},maxCount:S,onAllRemoved:b,renderNotifications:H}),te=M()(_e,2),ae=te[0],se=te[1];return P.useImperativeHandle(l,function(){return _()(_()({},ae),{},{prefixCls:T,message:V})}),se}),p=0;function d(t){var l=P.useRef(null),g=(0,K.ln)("Message"),E=P.useMemo(function(){var h=function(b){var x;(x=l.current)===null||x===void 0||x.close(b)},S=function(b){if(!l.current){g(!1,"usage","You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");var x=function(){};return x.then=function(){},x}var R=l.current,Z=R.open,V=R.prefixCls,T=R.message,ee="".concat(V,"-notice"),k=b.content,ne=b.icon,Q=b.type,_e=b.key,te=b.className,ae=b.style,se=b.onClose,re=n()(b,U),oe=_e;return oe==null&&(p+=1,oe="antd-message-".concat(p)),(0,Y.J)(function(ie){return Z(_()(_()({},re),{},{key:oe,content:(0,F.jsx)(X.CW,{prefixCls:V,type:Q,icon:ne,children:k}),placement:"top",className:D()(Q&&"".concat(ee,"-").concat(Q),te,T==null?void 0:T.className),style:_()(_()({},T==null?void 0:T.style),ae),onClose:function(){se==null||se(),ie()}})),function(){h(oe)}})},y=function(b){if(b!==void 0)h(b);else{var x;(x=l.current)===null||x===void 0||x.destroy()}},z={open:S,destroy:y},$=["info","success","warning","error","loading"];return $.forEach(function(N){var b=function(R,Z,V){var T;R&&a()(R)==="object"&&"content"in R?T=R:T={content:R};var ee,k;typeof Z=="function"?k=Z:(ee=Z,k=V);var ne=_()(_()({onClose:k,duration:ee},T),{},{type:N});return S(ne)};z[N]=b}),z},[]);return[E,(0,F.jsx)(G,_()(_()({},t),{},{ref:l}),"message-holder")]}function s(t){return d(t)}},65924:function(W,r,e){e.d(r,{J:function(){return a},g:function(){return m}});function m(u,n){return{motionName:n!=null?n:"".concat(u,"-move-up")}}function a(u){var n,v=new Promise(function(c){n=u(function(){c(!0)})}),_=function(){var O;(O=n)===null||O===void 0||O()};return _.then=function(c,O){return v.then(c,O)},_.promise=v,_}},57853:function(W,r,e){e.d(r,{Z:function(){return J}});var m=e(26068),a=e.n(m),u=e(82092),n=e.n(u),v=e(48305),_=e.n(v),c=e(67825),O=e.n(c),f=e(50959),M=e(82187),P=e.n(M),C=e(36902),o=e(76313),i=e(45645),D=e(99236),B=f.createContext({latestIndex:0}),K=B.Provider,I=e(11527),X=function(j){var H=j.className,G=j.index,p=j.children,d=j.split,s=j.style,t=f.useContext(B),l=t.latestIndex;return p==null?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:H,style:s,children:p}),G<l&&d&&(0,I.jsx)("span",{className:"".concat(H,"-split"),children:d})]})},L=X,Y=e(1829),w=["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"],F=f.forwardRef(function(A,j){var H,G,p=f.useContext(i.E_),d=p.getPrefixCls,s=p.space,t=p.direction,l=A.size,g=l===void 0?(s==null?void 0:s.size)||"small":l,E=A.align,h=A.className,S=A.rootClassName,y=A.children,z=A.direction,$=z===void 0?"horizontal":z,N=A.prefixCls,b=A.split,x=A.style,R=A.wrap,Z=R===void 0?!1:R,V=A.classNames,T=A.styles,ee=O()(A,w),k=Array.isArray(g)?g:[g,g],ne=_()(k,2),Q=ne[0],_e=ne[1],te=(0,o.n)(_e),ae=(0,o.n)(Q),se=(0,o.T)(_e),re=(0,o.T)(Q),oe=(0,C.Z)(y,{keepEmpty:!0}),ie=E===void 0&&$==="horizontal"?"center":E,q=d("space",N),fe=(0,Y.Z)(q),de=_()(fe,3),ge=de[0],Me=de[1],Ce=de[2],he=P()(q,s==null?void 0:s.className,Me,"".concat(q,"-").concat($),n()(n()(n()(n()({},"".concat(q,"-rtl"),t==="rtl"),"".concat(q,"-align-").concat(ie),ie),"".concat(q,"-gap-row-").concat(_e),te),"".concat(q,"-gap-col-").concat(Q),ae),h,S,Ce),Pe=P()("".concat(q,"-item"),(H=V==null?void 0:V.item)!==null&&H!==void 0?H:s==null||(G=s.classNames)===null||G===void 0?void 0:G.item),ue=0,Oe=oe.map(function(le,me){var Ee,ve;le!=null&&(ue=me);var pe=le&&le.key||"".concat(Pe,"-").concat(me);return(0,I.jsx)(L,{className:Pe,index:me,split:b,style:(Ee=T==null?void 0:T.item)!==null&&Ee!==void 0?Ee:s==null||(ve=s.styles)===null||ve===void 0?void 0:ve.item,children:le},pe)}),De=f.useMemo(function(){return{latestIndex:ue}},[ue]);if(oe.length===0)return null;var ce={};return Z&&(ce.flexWrap="wrap"),!ae&&re&&(ce.columnGap=Q),!te&&se&&(ce.rowGap=_e),ge((0,I.jsx)("div",a()(a()({ref:j,className:he,style:a()(a()(a()({},ce),s==null?void 0:s.style),x)},ee),{},{children:(0,I.jsx)(K,{value:De,children:Oe})})))}),U=F;U.Compact=D.ZP;var J=U}}]);
