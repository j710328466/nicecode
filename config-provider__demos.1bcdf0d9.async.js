"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[2317],{97893:function(ge,T,e){e.r(T);var p=e(48305),n=e.n(p),u=e(50959),t=e(17587),L=e(25649),D=e(39814),d=e(95934),g=e(35100),s=e(11527),O={borderRadius:6,colorPrimary:"#1677ff",Button:{colorPrimary:"#00B96B"}};T.default=function(){var v,w,_=u.useState(O),K=n()(_,2),b=K[0],G=K[1];return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.ZP,{theme:{token:{colorPrimary:b.colorPrimary,borderRadius:b.borderRadius},components:{Button:{colorPrimary:(v=b.Button)===null||v===void 0?void 0:v.colorPrimary,algorithm:(w=b.Button)===null||w===void 0?void 0:w.algorithm}}},children:(0,s.jsxs)(L.Z,{children:[(0,s.jsx)(D.Z,{}),(0,s.jsx)(d.ZP,{type:"primary",children:"Button"})]})}),(0,s.jsx)(g.Z,{})]})}},34379:function(ge,T,e){e.d(T,{T:function(){return n},n:function(){return p}});function p(u){return["small","middle","large"].includes(u)}function n(u){return u?typeof u=="number"&&!Number.isNaN(u):!1}},32714:function(ge,T,e){e.d(T,{F:function(){return d},Z:function(){return D}});var p=e(82092),n=e.n(p),u=e(82187),t=e.n(u),L=null;function D(g,s,O){return t()(n()(n()(n()(n()(n()({},"".concat(g,"-status-success"),s==="success"),"".concat(g,"-status-warning"),s==="warning"),"".concat(g,"-status-error"),s==="error"),"".concat(g,"-status-validating"),s==="validating"),"".concat(g,"-has-feedback"),O))}var d=function(s,O){return O||s}},69950:function(ge,T,e){var p=e(48305),n=e.n(p),u=e(18645),t=function(D){var d=(0,u.ZP)(),g=n()(d,5),s=g[4];return s?"".concat(D,"-css-var"):""};T.Z=t},35100:function(ge,T,e){e.d(T,{Z:function(){return xe}});var p=e(26068),n=e.n(p),u=e(82092),t=e.n(u),L=e(48305),D=e.n(L),d=e(67825),g=e.n(d),s=e(50959),O=e(82187),v=e.n(O),w=e(48600),_=e(23238),K=e(74338),b=e(13968),G=e(1084),oe=function(i){var r=i.componentCls,Z=i.sizePaddingEdgeHorizontal,l=i.colorSplit,I=i.lineWidth,N=i.textPaddingInline,F=i.orientationMargin,h=i.verticalMarginInline;return t()({},r,n()(n()({},(0,K.Wf)(i)),{},t()(t()(t()(t()(t()(t()(t()(t()(t()(t()({borderBlockStart:"".concat((0,_.bf)(I)," solid ").concat(l),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:h,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,_.bf)(I)," solid ").concat(l)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,_.bf)(i.dividerHorizontalGutterMargin)," 0")}},"&-horizontal".concat(r,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat((0,_.bf)(i.dividerHorizontalWithTextGutterMargin)," 0"),color:i.colorTextHeading,fontWeight:500,fontSize:i.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(l),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,_.bf)(I)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),"&-horizontal".concat(r,"-with-text-left"),{"&::before":{width:"calc(".concat(F," * 100%)")},"&::after":{width:"calc(100% - ".concat(F," * 100%)")}}),"&-horizontal".concat(r,"-with-text-right"),{"&::before":{width:"calc(100% - ".concat(F," * 100%)")},"&::after":{width:"calc(".concat(F," * 100%)")}}),"".concat(r,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:N}),"&-dashed",{background:"none",borderColor:l,borderStyle:"dashed",borderWidth:"".concat((0,_.bf)(I)," 0 0")}),"&-horizontal".concat(r,"-with-text").concat(r,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),"&-vertical".concat(r,"-dashed"),{borderInlineStartWidth:I,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),"&-plain".concat(r,"-with-text"),{color:i.colorText,fontWeight:"normal",fontSize:i.fontSize}),"&-horizontal".concat(r,"-with-text-left").concat(r,"-no-default-orientation-margin-left"),t()({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(r,"-inner-text"),{paddingInlineStart:Z})),"&-horizontal".concat(r,"-with-text-right").concat(r,"-no-default-orientation-margin-right"),t()({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(r,"-inner-text"),{paddingInlineEnd:Z}))))},A=function(i){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:i.marginXS}},he=(0,b.I$)("Divider",function(k){var i=(0,G.TS)(k,{dividerHorizontalWithTextGutterMargin:k.margin,dividerHorizontalGutterMargin:k.marginLG,sizePaddingEdgeHorizontal:0});return[oe(i)]},A,{unitless:{orientationMargin:!0}}),H=e(11527),be=["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"],Ce=function(i){var r=s.useContext(w.E_),Z=r.getPrefixCls,l=r.direction,I=r.divider,N=i.prefixCls,F=i.type,h=F===void 0?"horizontal":F,o=i.orientation,z=o===void 0?"center":o,P=i.orientationMargin,ce=i.className,W=i.rootClassName,q=i.children,Ie=i.dashed,ve=i.plain,fe=i.style,me=g()(i,be),y=Z("divider",N),Pe=he(y),a=D()(Pe,3),E=a[0],$=a[1],M=a[2],ee=z.length>0?"-".concat(z):z,Q=!!q,X=z==="left"&&P!=null,C=z==="right"&&P!=null,x=v()(y,I==null?void 0:I.className,$,M,"".concat(y,"-").concat(h),t()(t()(t()(t()(t()(t()(t()({},"".concat(y,"-with-text"),Q),"".concat(y,"-with-text").concat(ee),Q),"".concat(y,"-dashed"),!!Ie),"".concat(y,"-plain"),!!ve),"".concat(y,"-rtl"),l==="rtl"),"".concat(y,"-no-default-orientation-margin-left"),X),"".concat(y,"-no-default-orientation-margin-right"),C),ce,W),m=s.useMemo(function(){return typeof P=="number"?P:/^\d+$/.test(P)?Number(P):P},[P]),B=n()(n()({},X&&{marginLeft:m}),C&&{marginRight:m});if(!1)var re;return E((0,H.jsx)("div",n()(n()({className:x,style:n()(n()({},I==null?void 0:I.style),fe)},me),{},{role:"separator",children:q&&h!=="vertical"&&(0,H.jsx)("span",{className:"".concat(y,"-inner-text"),style:B,children:q})})))},xe=Ce},81714:function(ge,T,e){e.d(T,{RV:function(){return s},Rk:function(){return O},Ux:function(){return w},aM:function(){return v},q3:function(){return d},qI:function(){return g}});var p=e(26068),n=e.n(p),u=e(50959),t=e(91640),L=e(37824),D=e(11527),d=u.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),g=u.createContext(null),s=function(K){var b=(0,L.Z)(K,["prefixCls"]);return(0,D.jsx)(t.RV,n()({},b))},O=u.createContext({prefixCls:""}),v=u.createContext({}),w=function(K){var b=K.children,G=K.status,oe=K.override,A=(0,u.useContext)(v),he=(0,u.useMemo)(function(){var H=n()({},A);return oe&&delete H.isFormItemInput,G&&(delete H.status,delete H.hasFeedback,delete H.feedbackIcon),H},[G,oe,A]);return(0,D.jsx)(v.Provider,{value:he,children:b})}},99055:function(ge,T,e){e.d(T,{Z:function(){return h},n:function(){return N}});var p=e(82092),n=e.n(p),u=e(26068),t=e.n(u),L=e(31759),D=e.n(L),d=e(48305),g=e.n(d),s=e(67825),O=e.n(s),v=e(50959),w=e(4978),_=e.n(w),K=e(82187),b=e.n(K),G=e(66724),oe=e(57157),A=e(32714),he=e(48600),H=e(89248),be=e(7590),Ce=e(81714),xe=e(1139),k=e(7165),i=e(15415);function r(o){return!!(o.prefix||o.suffix||o.allowClear)}var Z=e(69950),l=e(11527),I=["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames"];function N(o,z){if(o){o.focus(z);var P=z||{},ce=P.cursor;if(ce){var W=o.value.length;switch(ce){case"start":o.setSelectionRange(0,0);break;case"end":o.setSelectionRange(W,W);break;default:o.setSelectionRange(0,W);break}}}}var F=(0,v.forwardRef)(function(o,z){var P,ce=o.prefixCls,W=o.bordered,q=W===void 0?!0:W,Ie=o.status,ve=o.size,fe=o.disabled,me=o.onBlur,y=o.onFocus,Pe=o.suffix,a=o.allowClear,E=o.addonAfter,$=o.addonBefore,M=o.className,ee=o.style,Q=o.styles,X=o.rootClassName,C=o.onChange,x=o.classNames,m=O()(o,I),B=v.useContext(he.E_),re=B.getPrefixCls,V=B.direction,f=B.input,c=re("input",ce),R=(0,v.useRef)(null),ie=(0,Z.Z)(c),se=(0,i.ZP)(c,ie),_e=g()(se,3),te=_e[0],j=_e[1],le=_e[2],De=(0,xe.ri)(c,V),Oe=De.compactSize,pe=De.compactItemClassnames,Y=(0,be.Z)(function(Ae){var Te;return(Te=ve!=null?ve:Oe)!==null&&Te!==void 0?Te:Ae}),de=v.useContext(H.Z),ne=fe!=null?fe:de,ae=(0,v.useContext)(Ce.aM),J=ae.status,ue=ae.hasFeedback,Re=ae.feedbackIcon,Ee=(0,A.F)(J,Ie),Me=r(o)||!!ue,ye=(0,v.useRef)(Me);if(!1)var Be;var je=(0,k.Z)(R,!0),Ne=function(Te){je(),me==null||me(Te)},ze=function(Te){je(),y==null||y(Te)},Se=function(Te){je(),C==null||C(Te)},S=(ue||Pe)&&(0,l.jsxs)(l.Fragment,{children:[Pe,ue&&Re]}),U;return D()(a)==="object"&&a!==null&&a!==void 0&&a.clearIcon?U=a:a&&(U={clearIcon:(0,l.jsx)(_(),{})}),te((0,l.jsx)(G.Z,t()(t()({ref:(0,oe.sQ)(z,R),prefixCls:c,autoComplete:f==null?void 0:f.autoComplete},m),{},{disabled:ne,onBlur:Ne,onFocus:ze,style:t()(t()({},f==null?void 0:f.style),ee),styles:t()(t()({},f==null?void 0:f.styles),Q),suffix:S,allowClear:U,className:b()(M,X,le,ie,j,pe,f==null?void 0:f.className),onChange:Se,addonAfter:E&&(0,l.jsx)(xe.BR,{children:(0,l.jsx)(Ce.Ux,{override:!0,status:!0,children:E})}),addonBefore:$&&(0,l.jsx)(xe.BR,{children:(0,l.jsx)(Ce.Ux,{override:!0,status:!0,children:$})}),classNames:t()(t()(t()({},x),f==null?void 0:f.classNames),{},{input:b()(n()(n()(n()(n()({},"".concat(c,"-sm"),Y==="small"),"".concat(c,"-lg"),Y==="large"),"".concat(c,"-rtl"),V==="rtl"),"".concat(c,"-borderless"),!q),!Me&&(0,A.Z)(c,Ee),x==null?void 0:x.input,f==null||(P=f.classNames)===null||P===void 0?void 0:P.input,j)}),classes:{affixWrapper:b()(n()(n()(n()(n()({},"".concat(c,"-affix-wrapper-sm"),Y==="small"),"".concat(c,"-affix-wrapper-lg"),Y==="large"),"".concat(c,"-affix-wrapper-rtl"),V==="rtl"),"".concat(c,"-affix-wrapper-borderless"),!q),(0,A.Z)("".concat(c,"-affix-wrapper"),Ee,ue),j),wrapper:b()(n()({},"".concat(c,"-group-rtl"),V==="rtl"),j),group:b()(n()(n()(n()(n()({},"".concat(c,"-group-wrapper-sm"),Y==="small"),"".concat(c,"-group-wrapper-lg"),Y==="large"),"".concat(c,"-group-wrapper-rtl"),V==="rtl"),"".concat(c,"-group-wrapper-disabled"),ne),(0,A.Z)("".concat(c,"-group-wrapper"),Ee,ue),j)}})))}),h=F},19126:function(ge,T,e){var p=e(26068),n=e.n(p),u=e(82092),t=e.n(u),L=e(48305),D=e.n(L),d=e(31759),g=e.n(d),s=e(67825),O=e.n(s),v=e(50959),w=e(4978),_=e.n(w),K=e(82187),b=e.n(K),G=e(93568),oe=e(32714),A=e(48600),he=e(89248),H=e(7590),be=e(81714),Ce=e(99055),xe=e(15415),k=e(69950),i=e(11527),r=["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className"],Z=(0,v.forwardRef)(function(l,I){var N,F=l.prefixCls,h=l.bordered,o=h===void 0?!0:h,z=l.size,P=l.disabled,ce=l.status,W=l.allowClear,q=l.classNames,Ie=l.rootClassName,ve=l.className,fe=O()(l,r),me=v.useContext(A.E_),y=me.getPrefixCls,Pe=me.direction,a=(0,H.Z)(z),E=v.useContext(he.Z),$=P!=null?P:E,M=v.useContext(be.aM),ee=M.status,Q=M.hasFeedback,X=M.feedbackIcon,C=(0,oe.F)(ee,ce),x=v.useRef(null);v.useImperativeHandle(I,function(){var se;return{resizableTextArea:(se=x.current)===null||se===void 0?void 0:se.resizableTextArea,focus:function(te){var j;(0,Ce.n)((j=x.current)===null||j===void 0||(j=j.resizableTextArea)===null||j===void 0?void 0:j.textArea,te)},blur:function(){var te;return(te=x.current)===null||te===void 0?void 0:te.blur()}}});var m=y("input",F),B;g()(W)==="object"&&W!==null&&W!==void 0&&W.clearIcon?B=W:W&&(B={clearIcon:(0,i.jsx)(_(),{})});var re=(0,k.Z)(m),V=(0,xe.ZP)(m,re),f=D()(V,3),c=f[0],R=f[1],ie=f[2];return c((0,i.jsx)(G.Z,n()(n()({},fe),{},{disabled:$,allowClear:B,className:b()(ie,re,ve,Ie),classes:{affixWrapper:b()("".concat(m,"-textarea-affix-wrapper"),t()(t()(t()(t()(t()({},"".concat(m,"-affix-wrapper-rtl"),Pe==="rtl"),"".concat(m,"-affix-wrapper-borderless"),!o),"".concat(m,"-affix-wrapper-sm"),a==="small"),"".concat(m,"-affix-wrapper-lg"),a==="large"),"".concat(m,"-textarea-show-count"),l.showCount||((N=l.count)===null||N===void 0?void 0:N.show)),(0,oe.Z)("".concat(m,"-affix-wrapper"),C),R)},classNames:n()(n()({},q),{},{textarea:b()(t()(t()(t()({},"".concat(m,"-borderless"),!o),"".concat(m,"-sm"),a==="small"),"".concat(m,"-lg"),a==="large"),(0,oe.Z)(m,C),R,q==null?void 0:q.textarea)}),prefixCls:m,suffix:Q&&(0,i.jsx)("span",{className:"".concat(m,"-textarea-suffix"),children:X}),ref:x})))});T.Z=Z},7165:function(ge,T,e){e.d(T,{Z:function(){return n}});var p=e(50959);function n(u,t){var L=(0,p.useRef)([]),D=function(){L.current.push(setTimeout(function(){var g,s,O;if((g=u.current)!==null&&g!==void 0&&g.input&&((s=u.current)===null||s===void 0?void 0:s.input.getAttribute("type"))==="password"&&(O=u.current)!==null&&O!==void 0&&O.input.hasAttribute("value")){var v;(v=u.current)===null||v===void 0||v.input.removeAttribute("value")}}))};return(0,p.useEffect)(function(){return t&&D(),function(){return L.current.forEach(function(d){d&&clearTimeout(d)})}},[]),D}},39814:function(ge,T,e){e.d(T,{Z:function(){return Pe}});var p=e(26068),n=e.n(p),u=e(82092),t=e.n(u),L=e(48305),D=e.n(L),d=e(50959),g=e(82187),s=e.n(g),O=e(48600),v=e(81714),w=e(15415),_=e(11527),K=function(E){var $=(0,d.useContext)(O.E_),M=$.getPrefixCls,ee=$.direction,Q=E.prefixCls,X=E.className,C=M("input-group",Q),x=M("input"),m=(0,w.ZP)(x),B=D()(m,2),re=B[0],V=B[1],f=s()(C,t()(t()(t()(t()({},"".concat(C,"-lg"),E.size==="large"),"".concat(C,"-sm"),E.size==="small"),"".concat(C,"-compact"),E.compact),"".concat(C,"-rtl"),ee==="rtl"),V,X),c=(0,d.useContext)(v.aM),R=(0,d.useMemo)(function(){return n()(n()({},c),{},{isFormItemInput:!1})},[c]);if(!1)var ie;return re((0,_.jsx)("span",{className:f,style:E.style,onMouseEnter:E.onMouseEnter,onMouseLeave:E.onMouseLeave,onFocus:E.onFocus,onBlur:E.onBlur,children:(0,_.jsx)(v.aM.Provider,{value:R,children:E.children})}))},b=K,G=e(99055),oe=e(67825),A=e.n(oe),he=e(31759),H=e.n(he),be=e(1314),Ce=e.n(be),xe=e(47533),k=e.n(xe),i=e(37824),r=e(57157),Z=e(7165),l=["className","prefixCls","inputPrefixCls","size"],I=function(E){return E?(0,_.jsx)(k(),{}):(0,_.jsx)(Ce(),{})},N={click:"onClick",hover:"onMouseOver"},F=d.forwardRef(function(a,E){var $=a.visibilityToggle,M=$===void 0?!0:$,ee=H()(M)==="object"&&M.visible!==void 0,Q=(0,d.useState)(function(){return ee?M.visible:!1}),X=D()(Q,2),C=X[0],x=X[1],m=(0,d.useRef)(null);d.useEffect(function(){ee&&x(M.visible)},[ee,M]);var B=(0,Z.Z)(m),re=function(){var de=a.disabled;de||(C&&B(),x(function(ne){var ae=!ne;if(H()(M)==="object"){var J;(J=M.onVisibleChange)===null||J===void 0||J.call(M,ae)}return ae}))},V=function(de){var ne=a.action,ae=ne===void 0?"click":ne,J=a.iconRender,ue=J===void 0?I:J,Re=N[ae]||"",Ee=ue(C),Me=t()(t()(t()(t()(t()({},Re,re),"className","".concat(de,"-icon")),"key","passwordIcon"),"onMouseDown",function(Be){Be.preventDefault()}),"onMouseUp",function(Be){Be.preventDefault()});return d.cloneElement(d.isValidElement(Ee)?Ee:(0,_.jsx)("span",{children:Ee}),Me)},f=a.className,c=a.prefixCls,R=a.inputPrefixCls,ie=a.size,se=A()(a,l),_e=d.useContext(O.E_),te=_e.getPrefixCls,j=te("input",R),le=te("input-password",c),De=M&&V(le),Oe=s()(le,f,t()({},"".concat(le,"-").concat(ie),!!ie)),pe=n()(n()({},(0,i.Z)(se,["suffix","iconRender","visibilityToggle"])),{},{type:C?"text":"password",className:Oe,prefixCls:j,suffix:De});return ie&&(pe.size=ie),(0,_.jsx)(G.Z,n()({ref:(0,r.sQ)(E,m)},pe))}),h=F,o=e(72819),z=e.n(o),P=e(79280),ce=e(95934),W=e(7590),q=e(1139),Ie=["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"],ve=d.forwardRef(function(a,E){var $=a.prefixCls,M=a.inputPrefixCls,ee=a.className,Q=a.size,X=a.suffix,C=a.enterButton,x=C===void 0?!1:C,m=a.addonAfter,B=a.loading,re=a.disabled,V=a.onSearch,f=a.onChange,c=a.onCompositionStart,R=a.onCompositionEnd,ie=A()(a,Ie),se=d.useContext(O.E_),_e=se.getPrefixCls,te=se.direction,j=d.useRef(!1),le=_e("input-search",$),De=_e("input",M),Oe=(0,q.ri)(le,te),pe=Oe.compactSize,Y=(0,W.Z)(function(Se){var S;return(S=Q!=null?Q:pe)!==null&&S!==void 0?S:Se}),de=d.useRef(null),ne=function(S){S&&S.target&&S.type==="click"&&V&&V(S.target.value,S,{source:"clear"}),f&&f(S)},ae=function(S){var U;document.activeElement===((U=de.current)===null||U===void 0?void 0:U.input)&&S.preventDefault()},J=function(S){if(V){var U;V((U=de.current)===null||U===void 0||(U=U.input)===null||U===void 0?void 0:U.value,S,{source:"input"})}},ue=function(S){j.current||B||J(S)},Re=typeof x=="boolean"?(0,_.jsx)(z(),{}):null,Ee="".concat(le,"-button"),Me,ye=x||{},Be=ye.type&&ye.type.__ANT_BUTTON===!0;Be||ye.type==="button"?Me=(0,P.Tm)(ye,n()({onMouseDown:ae,onClick:function(S){var U,Ae;ye==null||(U=ye.props)===null||U===void 0||(Ae=U.onClick)===null||Ae===void 0||Ae.call(U,S),J(S)},key:"enterButton"},Be?{className:Ee,size:Y}:{})):Me=(0,_.jsx)(ce.ZP,{className:Ee,type:x?"primary":void 0,size:Y,disabled:re,onMouseDown:ae,onClick:J,loading:B,icon:Re,children:x},"enterButton"),m&&(Me=[Me,(0,P.Tm)(m,{key:"addonAfter"})]);var je=s()(le,t()(t()(t()({},"".concat(le,"-rtl"),te==="rtl"),"".concat(le,"-").concat(Y),!!Y),"".concat(le,"-with-button"),!!x),ee),Ne=function(S){j.current=!0,c==null||c(S)},ze=function(S){j.current=!1,R==null||R(S)};return(0,_.jsx)(G.Z,n()(n()({ref:(0,r.sQ)(de,E),onPressEnter:ue},ie),{},{size:Y,onCompositionStart:Ne,onCompositionEnd:ze,prefixCls:De,addonAfter:Me,suffix:X,onChange:ne,className:je,disabled:re}))}),fe=ve,me=e(19126),y=G.Z;y.Group=b,y.Search=fe,y.TextArea=me.Z,y.Password=h;var Pe=y},25649:function(ge,T,e){e.d(T,{Z:function(){return i}});var p=e(26068),n=e.n(p),u=e(82092),t=e.n(u),L=e(48305),D=e.n(L),d=e(67825),g=e.n(d),s=e(50959),O=e(82187),v=e.n(O),w=e(36902),_=e(34379),K=e(48600),b=e(1139),G=s.createContext({latestIndex:0}),oe=G.Provider,A=e(11527),he=function(Z){var l=Z.className,I=Z.index,N=Z.children,F=Z.split,h=Z.style,o=s.useContext(G),z=o.latestIndex;return N==null?null:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:l,style:h,children:N}),I<z&&F&&(0,A.jsx)("span",{className:"".concat(l,"-split"),children:F})]})},H=he,be=e(92305),Ce=["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"],xe=s.forwardRef(function(r,Z){var l,I,N=s.useContext(K.E_),F=N.getPrefixCls,h=N.space,o=N.direction,z=r.size,P=z===void 0?(h==null?void 0:h.size)||"small":z,ce=r.align,W=r.className,q=r.rootClassName,Ie=r.children,ve=r.direction,fe=ve===void 0?"horizontal":ve,me=r.prefixCls,y=r.split,Pe=r.style,a=r.wrap,E=a===void 0?!1:a,$=r.classNames,M=r.styles,ee=g()(r,Ce),Q=Array.isArray(P)?P:[P,P],X=D()(Q,2),C=X[0],x=X[1],m=(0,_.n)(x),B=(0,_.n)(C),re=(0,_.T)(x),V=(0,_.T)(C),f=(0,w.Z)(Ie,{keepEmpty:!0}),c=ce===void 0&&fe==="horizontal"?"center":ce,R=F("space",me),ie=(0,be.Z)(R),se=D()(ie,3),_e=se[0],te=se[1],j=se[2],le=v()(R,h==null?void 0:h.className,te,"".concat(R,"-").concat(fe),t()(t()(t()(t()({},"".concat(R,"-rtl"),o==="rtl"),"".concat(R,"-align-").concat(c),c),"".concat(R,"-gap-row-").concat(x),m),"".concat(R,"-gap-col-").concat(C),B),W,q,j),De=v()("".concat(R,"-item"),(l=$==null?void 0:$.item)!==null&&l!==void 0?l:h==null||(I=h.classNames)===null||I===void 0?void 0:I.item),Oe=0,pe=f.map(function(ne,ae){var J,ue;ne!=null&&(Oe=ae);var Re=ne&&ne.key||"".concat(De,"-").concat(ae);return(0,A.jsx)(H,{className:De,index:ae,split:y,style:(J=M==null?void 0:M.item)!==null&&J!==void 0?J:h==null||(ue=h.styles)===null||ue===void 0?void 0:ue.item,children:ne},Re)}),Y=s.useMemo(function(){return{latestIndex:Oe}},[Oe]);if(f.length===0)return null;var de={};return E&&(de.flexWrap="wrap"),!B&&V&&(de.columnGap=C),!m&&re&&(de.rowGap=x),_e((0,A.jsx)("div",n()(n()({ref:Z,className:le,style:n()(n()(n()({},de),h==null?void 0:h.style),Pe)},ee),{},{children:(0,A.jsx)(oe,{value:Y,children:pe})})))}),k=xe;k.Compact=b.ZP;var i=k}}]);
