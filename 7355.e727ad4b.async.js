(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[7355],{57082:function(h,m,r){"use strict";r.d(m,{Z:function(){return a}});var o=r(57260),i=r(50959),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},v=p,f=r(61278),s=function(y,$){return i.createElement(f.Z,(0,o.Z)({},y,{ref:$,icon:v}))},t=i.forwardRef(s),a=t},34948:function(h,m,r){"use strict";r.d(m,{Z:function(){return a}});var o=r(57260),i=r(50959),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},v=p,f=r(61278),s=function(y,$){return i.createElement(f.Z,(0,o.Z)({},y,{ref:$,icon:v}))},t=i.forwardRef(s),a=t},34018:function(h,m,r){"use strict";r.d(m,{Z:function(){return a}});var o=r(57260),i=r(50959),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},v=p,f=r(61278),s=function(y,$){return i.createElement(f.Z,(0,o.Z)({},y,{ref:$,icon:v}))},t=i.forwardRef(s),a=t},57216:function(h,m,r){"use strict";r.d(m,{C2:function(){return s}});var o=r(23238),i=r(84878),p=r(44394),v=r(1924);const f=t=>{const{checkboxCls:a}=t,c=`${a}-wrapper`;return[{[`${a}-group`]:Object.assign(Object.assign({},(0,i.Wf)(t)),{display:"inline-flex",flexWrap:"wrap",columnGap:t.marginXS,[`> ${t.antCls}-row`]:{flex:1}}),[c]:Object.assign(Object.assign({},(0,i.Wf)(t)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${c}`]:{marginInlineStart:0},[`&${c}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[a]:Object.assign(Object.assign({},(0,i.Wf)(t)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:t.borderRadiusSM,alignSelf:"center",[`${a}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${a}-inner`]:Object.assign({},(0,i.oN)(t))},[`${a}-inner`]:{boxSizing:"border-box",display:"block",width:t.checkboxSize,height:t.checkboxSize,direction:"ltr",backgroundColor:t.colorBgContainer,border:`${(0,o.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,borderCollapse:"separate",transition:`all ${t.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:t.calc(t.checkboxSize).div(14).mul(5).equal(),height:t.calc(t.checkboxSize).div(14).mul(8).equal(),border:`${(0,o.bf)(t.lineWidthBold)} solid ${t.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${t.motionDurationFast} ${t.motionEaseInBack}, opacity ${t.motionDurationFast}`}},"& + span":{paddingInlineStart:t.paddingXS,paddingInlineEnd:t.paddingXS}})},{[`
        ${c}:not(${c}-disabled),
        ${a}:not(${a}-disabled)
      `]:{[`&:hover ${a}-inner`]:{borderColor:t.colorPrimary}},[`${c}:not(${c}-disabled)`]:{[`&:hover ${a}-checked:not(${a}-disabled) ${a}-inner`]:{backgroundColor:t.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${a}-checked:not(${a}-disabled):after`]:{borderColor:t.colorPrimaryHover}}},{[`${a}-checked`]:{[`${a}-inner`]:{backgroundColor:t.colorPrimary,borderColor:t.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${t.motionDurationMid} ${t.motionEaseOutBack} ${t.motionDurationFast}`}}},[`
        ${c}-checked:not(${c}-disabled),
        ${a}-checked:not(${a}-disabled)
      `]:{[`&:hover ${a}-inner`]:{backgroundColor:t.colorPrimaryHover,borderColor:"transparent"}}},{[a]:{"&-indeterminate":{[`${a}-inner`]:{backgroundColor:t.colorBgContainer,borderColor:t.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:t.calc(t.fontSizeLG).div(2).equal(),height:t.calc(t.fontSizeLG).div(2).equal(),backgroundColor:t.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${c}-disabled`]:{cursor:"not-allowed"},[`${a}-disabled`]:{[`&, ${a}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${a}-inner`]:{background:t.colorBgContainerDisabled,borderColor:t.colorBorder,"&:after":{borderColor:t.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:t.colorTextDisabled},[`&${a}-indeterminate ${a}-inner::after`]:{background:t.colorTextDisabled}}}]};function s(t,a){const c=(0,p.TS)(a,{checkboxCls:`.${t}`,checkboxSize:a.controlInteractiveSize});return[f(c)]}m.ZP=(0,v.I$)("Checkbox",(t,a)=>{let{prefixCls:c}=a;return[s(c,t)]})},32547:function(h,m,r){"use strict";r.d(m,{Z:function(){return fe}});var o=r(50959),i=r(82187),p=r.n(i),v=r(13791),f=r(35806),s=r(18415),t=r(81026),c={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},$=o.createContext({}),O=r(71783),R=function(e,n){var u={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(u[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(e);d<l.length;d++)n.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(e,l[d])&&(u[l[d]]=e[l[d]]);return u};const T=e=>(0,O.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function G(e,n,u){const l=o.useMemo(()=>n||T(u),[n,u]);return o.useMemo(()=>l.map(g=>{var{span:b}=g,j=R(g,["span"]);return Object.assign(Object.assign({},j),{span:typeof b=="number"?b:(0,v.m9)(e,b)})}),[l,e])}function X(e,n,u){let l=e,d=!1;return(u===void 0||u>n)&&(l=Object.assign(Object.assign({},e),{span:n}),d=u!==void 0),[l,d]}function K(e,n){const u=[];let l=[],d=n,g=!1;return e.filter(b=>b).forEach((b,j)=>{const P=b==null?void 0:b.span,C=P||1;if(j===e.length-1){const[x,L]=X(b,d,P);g=g||L,l.push(x),u.push(l);return}if(C<d)d-=C,l.push(b);else{const[x,L]=X(b,d,C);g=g||L,l.push(x),u.push(l),d=n,l=[]}}),[u,g]}var Q=(e,n)=>{const[u,l]=(0,o.useMemo)(()=>K(n,e),[n,e]);return u},_=e=>{let{children:n}=e;return n};function Y(e){return e!=null}var w=e=>{const{itemPrefixCls:n,component:u,span:l,className:d,style:g,labelStyle:b,contentStyle:j,bordered:P,label:C,content:x,colon:L,type:B}=e,M=u;return P?o.createElement(M,{className:p()({[`${n}-item-label`]:B==="label",[`${n}-item-content`]:B==="content"},d),style:g,colSpan:l},Y(C)&&o.createElement("span",{style:b},C),Y(x)&&o.createElement("span",{style:j},x)):o.createElement(M,{className:p()(`${n}-item`,d),style:g,colSpan:l},o.createElement("div",{className:`${n}-item-container`},(C||C===0)&&o.createElement("span",{className:p()(`${n}-item-label`,{[`${n}-item-no-colon`]:!L}),style:b},C),(x||x===0)&&o.createElement("span",{className:p()(`${n}-item-content`),style:j},x)))};function D(e,n,u){let{colon:l,prefixCls:d,bordered:g}=n,{component:b,type:j,showLabel:P,showContent:C,labelStyle:x,contentStyle:L}=u;return e.map((B,M)=>{let{label:N,children:q,prefixCls:U=d,className:Z,style:H,labelStyle:I,contentStyle:E,span:z=1,key:V}=B;return typeof b=="string"?o.createElement(w,{key:`${j}-${V||M}`,className:Z,style:H,labelStyle:Object.assign(Object.assign({},x),I),contentStyle:Object.assign(Object.assign({},L),E),span:z,colon:l,component:b,itemPrefixCls:U,bordered:g,label:P?N:null,content:C?q:null,type:j}):[o.createElement(w,{key:`label-${V||M}`,className:Z,style:Object.assign(Object.assign(Object.assign({},x),H),I),span:1,colon:l,component:b[0],itemPrefixCls:U,bordered:g,label:N,type:"label"}),o.createElement(w,{key:`content-${V||M}`,className:Z,style:Object.assign(Object.assign(Object.assign({},L),H),E),span:z*2-1,component:b[1],itemPrefixCls:U,bordered:g,content:q,type:"content"})]})}var k=e=>{const n=o.useContext($),{prefixCls:u,vertical:l,row:d,index:g,bordered:b}=e;return l?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${g}`,className:`${u}-row`},D(d,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),o.createElement("tr",{key:`content-${g}`,className:`${u}-row`},D(d,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):o.createElement("tr",{key:g,className:`${u}-row`},D(d,e,Object.assign({component:b?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},S=r(23238),W=r(84878),ae=r(1924),le=r(44394);const ie=e=>{const{componentCls:n,labelBg:u}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,S.bf)(e.padding)} ${(0,S.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,S.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:u,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,S.bf)(e.paddingSM)} ${(0,S.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,S.bf)(e.paddingXS)} ${(0,S.bf)(e.padding)}`}}}}}},se=e=>{const{componentCls:n,extraColor:u,itemPaddingBottom:l,colonMarginRight:d,colonMarginLeft:g,titleMarginBottom:b}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,W.Wf)(e)),ie(e)),{["&-rtl"]:{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:b},[`${n}-title`]:Object.assign(Object.assign({},W.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:u,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,S.bf)(g)} ${(0,S.bf)(d)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ce=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var de=(0,ae.I$)("Descriptions",e=>{const n=(0,le.TS)(e,{});return se(n)},ce),ue=function(e,n){var u={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(u[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(e);d<l.length;d++)n.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(e,l[d])&&(u[l[d]]=e[l[d]]);return u};const re=e=>{const{prefixCls:n,title:u,extra:l,column:d,colon:g=!0,bordered:b,layout:j,children:P,className:C,rootClassName:x,style:L,size:B,labelStyle:M,contentStyle:N,items:q}=e,U=ue(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:Z,direction:H,descriptions:I}=o.useContext(f.E_),E=Z("descriptions",n),z=(0,t.Z)(),V=o.useMemo(()=>{var F;return typeof d=="number"?d:(F=(0,v.m9)(z,Object.assign(Object.assign({},c),d)))!==null&&F!==void 0?F:3},[z,d]),me=G(z,q,P),ee=(0,s.Z)(B),pe=Q(V,me),[ve,be,ge]=de(E),ye=o.useMemo(()=>({labelStyle:M,contentStyle:N}),[M,N]);return ve(o.createElement($.Provider,{value:ye},o.createElement("div",Object.assign({className:p()(E,I==null?void 0:I.className,{[`${E}-${ee}`]:ee&&ee!=="default",[`${E}-bordered`]:!!b,[`${E}-rtl`]:H==="rtl"},C,x,be,ge),style:Object.assign(Object.assign({},I==null?void 0:I.style),L)},U),(u||l)&&o.createElement("div",{className:`${E}-header`},u&&o.createElement("div",{className:`${E}-title`},u),l&&o.createElement("div",{className:`${E}-extra`},l)),o.createElement("div",{className:`${E}-view`},o.createElement("table",null,o.createElement("tbody",null,pe.map((F,oe)=>o.createElement(k,{key:oe,index:oe,colon:g,prefixCls:E,vertical:j==="vertical",bordered:b,row:F}))))))))};re.Item=_;var fe=re},32772:function(h,m,r){"use strict";r.d(m,{N:function(){return o}});const o=i=>({color:i.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${i.motionDurationSlow}`,"&:focus, &:hover":{color:i.colorLinkHover},"&:active":{color:i.colorLinkActive}})},74197:function(h,m,r){"use strict";r.d(m,{G:function(){return v}});var o=r(40664),i=function(s){if((0,o.Z)()&&window.document.documentElement){var t=Array.isArray(s)?s:[s],a=window.document.documentElement;return t.some(function(c){return c in a.style})}return!1},p=function(s,t){if(!i(s))return!1;var a=document.createElement("div"),c=a.style[s];return a.style[s]=t,a.style[s]!==c};function v(f,s){return!Array.isArray(f)&&s!==void 0?p(f,s):i(f)}},42900:function(h,m,r){"use strict";var o=r(7946).default;Object.defineProperty(m,"__esModule",{value:!0}),m.default=p;var i=o(r(50959));function p(v){var f=i.useRef();f.current=v;var s=i.useCallback(function(){for(var t,a=arguments.length,c=new Array(a),y=0;y<a;y++)c[y]=arguments[y];return(t=f.current)===null||t===void 0?void 0:t.call.apply(t,[f].concat(c))},[]);return s}},68139:function(h,m,r){"use strict";var o=r(39599).default,i=r(7946).default;Object.defineProperty(m,"__esModule",{value:!0}),m.useLayoutUpdateEffect=m.default=void 0;var p=i(r(50959)),v=o(r(90043)),f=(0,v.default)()?p.useLayoutEffect:p.useEffect,s=function(y,$){var O=p.useRef(!0);f(function(){return y(O.current)},$),f(function(){return O.current=!1,function(){O.current=!0}},[])},t=m.useLayoutUpdateEffect=function(y,$){s(function(O){if(!O)return y()},$)},a=m.default=s},61657:function(h,m,r){"use strict";var o,i=r(39599).default;o={value:!0},m.Z=a;var p=i(r(64938)),v=i(r(42900)),f=r(68139),s=i(r(56148));function t(c){return c!==void 0}function a(c,y){var $=y||{},O=$.defaultValue,R=$.value,T=$.onChange,G=$.postState,X=(0,s.default)(function(){return t(R)?R:t(O)?typeof O=="function"?O():O:typeof c=="function"?c():c}),K=(0,p.default)(X,2),J=K[0],Q=K[1],A=R!==void 0?R:J,_=G?G(A):A,Y=(0,v.default)(T),te=(0,s.default)([A]),w=(0,p.default)(te,2),D=w[0],ne=w[1];(0,f.useLayoutUpdateEffect)(function(){var S=D[0];J!==S&&Y(J,S)},[D]),(0,f.useLayoutUpdateEffect)(function(){t(R)||Q(R)},[R]);var k=(0,v.default)(function(S,W){Q(S,W),ne([A],W)});return[_,k]}},56148:function(h,m,r){"use strict";var o=r(7946).default,i=r(39599).default;Object.defineProperty(m,"__esModule",{value:!0}),m.default=f;var p=i(r(64938)),v=o(r(50959));function f(s){var t=v.useRef(!1),a=v.useState(s),c=(0,p.default)(a,2),y=c[0],$=c[1];v.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function O(R,T){T&&t.current||$(R)}return[y,O]}},82625:function(h){function m(r,o){var i=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var p,v,f,s,t=[],a=!0,c=!1;try{if(f=(i=i.call(r)).next,o===0){if(Object(i)!==i)return;a=!1}else for(;!(a=(p=f.call(i)).done)&&(t.push(p.value),t.length!==o);a=!0);}catch(y){c=!0,v=y}finally{try{if(!a&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw v}}return t}}h.exports=m,h.exports.__esModule=!0,h.exports.default=h.exports},64938:function(h,m,r){var o=r(45371),i=r(82625),p=r(47571),v=r(23936);function f(s,t){return o(s)||i(s,t)||p(s,t)||v()}h.exports=f,h.exports.__esModule=!0,h.exports.default=h.exports}}]);
