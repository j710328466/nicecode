(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[6077],{37297:function(h,d,e){"use strict";e.d(d,{b:function(){return S}});var x=e(50959),a=e(80918),s=e(78404),f=e(61768),u=e(92577),c=e(27081),i=e(17797),T=e(72526),y=e(98715),A=function(n){(0,T.Z)(o,n);var t=(0,y.Z)(o);function o(){return(0,c.Z)(this,o),t.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){return this.props.children}}]),o}(x.Component),_=null,v=e(40664),E={subtree:!0,childList:!0,attributeFilter:["style","class"]};function S(n,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:E;x.useEffect(function(){if(!(!(0,v.Z)()||!n)){var l,g=Array.isArray(n)?n:[n];return"MutationObserver"in window&&(l=new MutationObserver(t),g.forEach(function(p){l.observe(p,o)})),function(){var p,D;(p=l)===null||p===void 0||p.takeRecords(),(D=l)===null||D===void 0||D.disconnect()}}},[o,n])}var M=function(t){var o=t.children,l=t.options,g=t.onMutate,p=g===void 0?function(){}:g,D=useEvent(p),L=React.useRef(null),j=React.useRef(null),X=React.isValidElement(o)&&supportRef(o),V=useComposeRef(j,X?o.ref:null),$=React.useState(null),Q=_slicedToArray($,2),J=Q[0],q=Q[1];return useMutateObserver(J,D,l),useLayoutEffect(function(){q(findDOMNode(j.current)||findDOMNode(L.current))}),o?React.createElement(DomWrapper,{ref:L},X?React.cloneElement(o,{ref:V}):o):null},r=null,C=null},20634:function(h,d,e){"use strict";e.r(d);var x=e(50959),a=e(15791),s=e(11527),f=function(){return(0,s.jsx)(a.Z,{content:"nicecode",children:(0,s.jsx)("div",{style:{height:500}})})};d.default=f},77728:function(h,d,e){"use strict";e.r(d);var x=e(50959),a=e(15791),s=e(11527),f=function(){return(0,s.jsx)(a.Z,{height:30,width:130,image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",children:(0,s.jsx)("div",{style:{height:500}})})};d.default=f},17497:function(h,d,e){"use strict";e.r(d);var x=e(50959),a=e(15791),s=e(11527),f=function(){return(0,s.jsx)(a.Z,{content:["nicecode nicecode","Happy Working"],children:(0,s.jsx)("div",{style:{height:500}})})};d.default=f},60342:function(h,d,e){"use strict";e.d(d,{Mj:function(){return i},uH:function(){return u},u_:function(){return c}});var x=e(50959),a=e(23238),s=e(57958),f=e(89649),u=(0,a.jG)(s.Z),c={token:f.Z,override:{override:f.Z},hashed:!0},i=x.createContext(c)},57958:function(h,d,e){"use strict";e.d(d,{Z:function(){return C}});var x=e(26068),a=e.n(x),s=e(22601),f=e(86966);function u(n){var t=n.sizeUnit,o=n.sizeStep;return{sizeXXL:t*(o+8),sizeXL:t*(o+4),sizeLG:t*(o+2),sizeMD:t*(o+1),sizeMS:t*o,size:t*o,sizeSM:t*(o-1),sizeXS:t*(o-2),sizeXXS:t*(o-3)}}var c=e(89649),i=e(343),T=function(t){var o=t,l=t,g=t,p=t;return t<6&&t>=5?o=t+1:t<16&&t>=6?o=t+2:t>=16&&(o=16),t<7&&t>=5?l=4:t<8&&t>=7?l=5:t<14&&t>=8?l=6:t<16&&t>=14?l=7:t>=16&&(l=8),t<6&&t>=2?g=1:t>=6&&(g=2),t>4&&t<8?p=4:t>=8&&(p=6),{borderRadius:t,borderRadiusXS:g,borderRadiusSM:l,borderRadiusLG:o,borderRadiusOuter:p}},y=T;function A(n){var t=n.motionUnit,o=n.motionBase,l=n.borderRadius,g=n.lineWidth;return a()({motionDurationFast:"".concat((o+t).toFixed(1),"s"),motionDurationMid:"".concat((o+t*2).toFixed(1),"s"),motionDurationSlow:"".concat((o+t*3).toFixed(1),"s"),lineWidthBold:g+1},y(l))}var _=e(32861),v=function(t,o){return new _.C(t).setAlpha(o).toRgbString()},E=function(t,o){var l=new _.C(t);return l.darken(o).toHexString()},S=function(t){var o=(0,s.generate)(t);return{1:o[0],2:o[1],3:o[2],4:o[3],5:o[4],6:o[5],7:o[6],8:o[4],9:o[5],10:o[6]}},M=function(t,o){var l=t||"#fff",g=o||"#000";return{colorBgBase:l,colorTextBase:g,colorText:v(g,.88),colorTextSecondary:v(g,.65),colorTextTertiary:v(g,.45),colorTextQuaternary:v(g,.25),colorFill:v(g,.15),colorFillSecondary:v(g,.06),colorFillTertiary:v(g,.04),colorFillQuaternary:v(g,.02),colorBgLayout:E(l,4),colorBgContainer:E(l,0),colorBgElevated:E(l,0),colorBgSpotlight:v(g,.85),colorBgBlur:"transparent",colorBorder:E(l,15),colorBorderSecondary:E(l,6)}},r=e(60231);function C(n){var t=Object.keys(c.M).map(function(o){var l=(0,s.generate)(n[o]);return new Array(10).fill(1).reduce(function(g,p,D){return g["".concat(o,"-").concat(D+1)]=l[D],g["".concat(o).concat(D+1)]=l[D],g},{})}).reduce(function(o,l){return o=a()(a()({},o),l),o},{});return a()(a()(a()(a()(a()(a()(a()({},n),t),(0,i.Z)(n,{generateColorPalettes:S,generateNeutralColorPalettes:M})),(0,r.Z)(n.fontSize)),u(n)),(0,f.Z)(n)),A(n))}},89649:function(h,d,e){"use strict";e.d(d,{M:function(){return s}});var x=e(26068),a=e.n(x),s={blue:"#0099FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#FF4D4F",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#0099FF",gold:"#FAAD14",lime:"#A0D911"},f=a()(a()({},s),{},{colorPrimary:"#0099FF",colorSuccess:"#52C41A",colorWarning:"#FAAD14",colorError:"#FF4D4F",colorInfo:"#0099FF",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0});d.Z=f},343:function(h,d,e){"use strict";e.d(d,{Z:function(){return f}});var x=e(26068),a=e.n(x),s=e(32861);function f(u,c){var i=c.generateColorPalettes,T=c.generateNeutralColorPalettes,y=u.colorSuccess,A=u.colorWarning,_=u.colorError,v=u.colorInfo,E=u.colorPrimary,S=u.colorBgBase,M=u.colorTextBase,r=i(E),C=i(y),n=i(A),t=i(_),o=i(v),l=T(S,M),g=u.colorLink||u.colorInfo,p=i(g);return a()(a()({},l),{},{colorPrimaryBg:r[1],colorPrimaryBgHover:r[2],colorPrimaryBorder:r[3],colorPrimaryBorderHover:r[4],colorPrimaryHover:r[5],colorPrimary:r[6],colorPrimaryActive:r[7],colorPrimaryTextHover:r[8],colorPrimaryText:r[9],colorPrimaryTextActive:r[10],colorSuccessBg:C[1],colorSuccessBgHover:C[2],colorSuccessBorder:C[3],colorSuccessBorderHover:C[4],colorSuccessHover:C[4],colorSuccess:C[6],colorSuccessActive:C[7],colorSuccessTextHover:C[8],colorSuccessText:C[9],colorSuccessTextActive:C[10],colorErrorBg:t[1],colorErrorBgHover:t[2],colorErrorBorder:t[3],colorErrorBorderHover:t[4],colorErrorHover:t[5],colorError:t[6],colorErrorActive:t[7],colorErrorTextHover:t[8],colorErrorText:t[9],colorErrorTextActive:t[10],colorWarningBg:n[1],colorWarningBgHover:n[2],colorWarningBorder:n[3],colorWarningBorderHover:n[4],colorWarningHover:n[4],colorWarning:n[6],colorWarningActive:n[7],colorWarningTextHover:n[8],colorWarningText:n[9],colorWarningTextActive:n[10],colorInfoBg:o[1],colorInfoBgHover:o[2],colorInfoBorder:o[3],colorInfoBorderHover:o[4],colorInfoHover:o[4],colorInfo:o[6],colorInfoActive:o[7],colorInfoTextHover:o[8],colorInfoText:o[9],colorInfoTextActive:o[10],colorLinkHover:p[4],colorLink:p[6],colorLinkActive:p[7],colorBgMask:new s.C("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}},86966:function(h,d){"use strict";var e=function(a){var s=a.controlHeight;return{controlHeightSM:s*.75,controlHeightXS:s*.5,controlHeightLG:s*1.25}};d.Z=e},60231:function(h,d,e){"use strict";e.d(d,{Z:function(){return s}});function x(f){var u=new Array(10).fill(null).map(function(c,i){var T=i-1,y=f*Math.pow(2.71828,T/5),A=i>1?Math.floor(y):Math.ceil(y);return Math.floor(A/2)*2});return u[1]=f,u.map(function(c){var i=c+8;return{size:c,lineHeight:i/c}})}var a=function(u){var c=x(u),i=c.map(function(M){return M.size}),T=c.map(function(M){return M.lineHeight}),y=i[1],A=i[0],_=i[2],v=T[1],E=T[0],S=T[2];return{fontSizeSM:A,fontSize:y,fontSizeLG:_,fontSizeXL:i[3],fontSizeHeading1:i[6],fontSizeHeading2:i[5],fontSizeHeading3:i[4],fontSizeHeading4:i[3],fontSizeHeading5:i[2],lineHeight:v,lineHeightLG:S,lineHeightSM:E,fontHeight:Math.round(v*y),fontHeightLG:Math.round(S*_),fontHeightSM:Math.round(E*A),lineHeightHeading1:T[6],lineHeightHeading2:T[5],lineHeightHeading3:T[4],lineHeightHeading4:T[3],lineHeightHeading5:T[2]}},s=a},18645:function(h,d,e){"use strict";e.d(d,{ZP:function(){return t},ID:function(){return r},NJ:function(){return M}});var x=e(48305),a=e.n(x),s=e(26068),f=e.n(s),u=e(67825),c=e.n(u),i=e(50959),T=e(23238),y="3.2",A=e(60342),_=e(89649),v=e(2738),E=["override"],S=["theme"],M={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0},r={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},C={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},n=function o(l,g,p){var D=p.getDerivativeToken(l),L=g.override,j=c()(g,E),X=f()(f()({},D),{},{override:L});return X=(0,v.Z)(X),j&&Object.entries(j).forEach(function(V){var $=a()(V,2),Q=$[0],J=$[1],q=J.theme,P=c()(J,S),m=P;q&&(m=o(f()(f()({},X),P),{override:P},q)),X[Q]=m}),X};function t(){var o=i.useContext(A.Mj),l=o.token,g=o.hashed,p=o.theme,D=o.override,L=o.cssVar,j="".concat(y,"-").concat(g||""),X=p||A.uH,V=(0,T.fp)(X,[_.Z,l],{salt:j,override:D,getComputedToken:n,formatToken:v.Z,cssVar:L&&{prefix:L.prefix,key:L.key,unitless:M,ignore:r,preserve:C}}),$=a()(V,3),Q=$[0],J=$[1],q=$[2];return[X,q,g?J:"",Q,L]}},2738:function(h,d,e){"use strict";e.d(d,{Z:function(){return _}});var x=e(26068),a=e.n(x),s=e(67825),f=e.n(s),u=e(32861),c=e(89649);function i(v){return v>=0&&v<=255}function T(v,E){var S=new u.C(v).toRgb(),M=S.r,r=S.g,C=S.b,n=S.a;if(n<1)return v;for(var t=new u.C(E).toRgb(),o=t.r,l=t.g,g=t.b,p=.01;p<=1;p+=.01){var D=Math.round((M-o*(1-p))/p),L=Math.round((r-l*(1-p))/p),j=Math.round((C-g*(1-p))/p);if(i(D)&&i(L)&&i(j))return new u.C({r:D,g:L,b:j,a:Math.round(p*100)/100}).toRgbString()}return new u.C({r:M,g:r,b:C,a:1}).toRgbString()}var y=T,A=["override"];function _(v){var E=v.override,S=f()(v,A),M=a()({},E);Object.keys(c.Z).forEach(function(L){delete M[L]});var r=a()(a()({},S),M),C=480,n=576,t=768,o=992,l=1200,g=1600;if(r.motion===!1){var p="0s";r.motionDurationFast=p,r.motionDurationMid=p,r.motionDurationSlow=p}var D=a()(a()({},r),{},{colorFillContent:r.colorFillSecondary,colorFillContentHover:r.colorFill,colorFillAlter:r.colorFillQuaternary,colorBgContainerDisabled:r.colorFillTertiary,colorBorderBg:r.colorBgContainer,colorSplit:y(r.colorBorderSecondary,r.colorBgContainer),colorTextPlaceholder:r.colorTextQuaternary,colorTextDisabled:r.colorTextQuaternary,colorTextHeading:r.colorText,colorTextLabel:r.colorTextSecondary,colorTextDescription:r.colorTextTertiary,colorTextLightSolid:r.colorWhite,colorHighlight:r.colorError,colorBgTextHover:r.colorFillSecondary,colorBgTextActive:r.colorFill,colorIcon:r.colorTextTertiary,colorIconHover:r.colorText,colorErrorOutline:y(r.colorErrorBg,r.colorBgContainer),colorWarningOutline:y(r.colorWarningBg,r.colorBgContainer),fontSizeIcon:r.fontSizeSM,lineWidthFocus:r.lineWidth*4,lineWidth:r.lineWidth,controlOutlineWidth:r.lineWidth*2,controlInteractiveSize:r.controlHeight/2,controlItemBgHover:r.colorFillTertiary,controlItemBgActive:r.colorPrimaryBg,controlItemBgActiveHover:r.colorPrimaryBgHover,controlItemBgActiveDisabled:r.colorFill,controlTmpOutline:r.colorFillQuaternary,controlOutline:y(r.colorPrimaryBg,r.colorBgContainer),lineType:r.lineType,borderRadius:r.borderRadius,borderRadiusXS:r.borderRadiusXS,borderRadiusSM:r.borderRadiusSM,borderRadiusLG:r.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:r.sizeXXS,paddingXS:r.sizeXS,paddingSM:r.sizeSM,padding:r.size,paddingMD:r.sizeMD,paddingLG:r.sizeLG,paddingXL:r.sizeXL,paddingContentHorizontalLG:r.sizeLG,paddingContentVerticalLG:r.sizeMS,paddingContentHorizontal:r.sizeMS,paddingContentVertical:r.sizeSM,paddingContentHorizontalSM:r.size,paddingContentVerticalSM:r.sizeXS,marginXXS:r.sizeXXS,marginXS:r.sizeXS,marginSM:r.sizeSM,margin:r.size,marginMD:r.sizeMD,marginLG:r.sizeLG,marginXL:r.sizeXL,marginXXL:r.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:C,screenXSMin:C,screenXSMax:n-1,screenSM:n,screenSMMin:n,screenSMMax:t-1,screenMD:t,screenMDMin:t,screenMDMax:o-1,screenLG:o,screenLGMin:o,screenLGMax:l-1,screenXL:l,screenXLMin:l,screenXLMax:g-1,screenXXL:g,screenXXLMin:g,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px `.concat(new u.C("rgba(0, 0, 0, 0.16)").toRgbString(),`,
      0 3px 6px 0 `).concat(new u.C("rgba(0, 0, 0, 0.12)").toRgbString(),`,
      0 5px 12px 4px `).concat(new u.C("rgba(0, 0, 0, 0.09)").toRgbString(),`
    `),boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"},M);return D}},77488:function(h,d,e){"use strict";e.d(d,{H:function(){return u}});var x=e(45680),a=e(50959);function s(){}var f=a.createContext({add:s,remove:s});function u(c){var i=a.useContext(f),T=a.useRef(),y=(0,x.zX)(function(A){if(A){var _=c?A.querySelector(c):A;i.add(_),T.current=_}else i.remove(T.current)});return y}d.Z=f},15791:function(h,d,e){"use strict";e.d(d,{Z:function(){return q}});var x=e(26068),a=e.n(x),s=e(15558),f=e.n(s),u=e(48305),c=e.n(u),i=e(50959),T=e(37297),y=e(82187),A=e.n(y),_=e(18645),v=e(77488),E=3;function S(P,m){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,b=document.createElement("canvas"),U=b.getContext("2d"),Z=P*O,F=m*O;return b.setAttribute("width","".concat(Z,"px")),b.setAttribute("height","".concat(F,"px")),U.save(),[U,b,Z,F]}function M(){function P(m,O,b,U,Z,F,ae,W){var k=S(U,Z,b),H=c()(k,4),B=H[0],ee=H[1],G=H[2],ge=H[3];if(m instanceof HTMLImageElement)B.drawImage(m,0,0,G,ge);else{var ke=F.color,Ne=F.fontSize,ze=F.fontStyle,we=F.fontWeight,re=F.fontFamily,Le=F.textAlign,ye=Number(Ne)*b;B.font="".concat(ze," normal ").concat(we," ").concat(ye,"px/").concat(Z,"px ").concat(re),B.fillStyle=ke,B.textAlign=Le,B.textBaseline="top";var Ae=Array.isArray(m)?m:[m];Ae==null||Ae.forEach(function(K,N){B.fillText(K!=null?K:"",G/2,N*(ye+E*b))})}var ie=Math.PI/180*Number(O),Oe=Math.max(U,Z),We=S(Oe,Oe,b),me=c()(We,3),pe=me[0],He=me[1],te=me[2];pe.translate(te/2,te/2),pe.rotate(ie),G>0&&ge>0&&pe.drawImage(ee,-G/2,-ge/2);function Be(K,N){var Ee=K*Math.cos(ie)-N*Math.sin(ie),Ce=K*Math.sin(ie)+N*Math.cos(ie);return[Ee,Ce]}var le=0,he=0,ce=0,xe=0,oe=G/2,se=ge/2,Ie=[[0-oe,0-se],[0+oe,0-se],[0+oe,0+se],[0-oe,0+se]];Ie.forEach(function(K){var N=c()(K,2),Ee=N[0],Ce=N[1],Ze=Be(Ee,Ce),be=c()(Ze,2),Ge=be[0],Ke=be[1];le=Math.min(le,Ge),he=Math.max(he,Ge),ce=Math.min(ce,Ke),xe=Math.max(xe,Ke)});var Xe=le+te/2,Fe=ce+te/2,Y=he-le,ne=xe-ce,ue=ae*b,ve=W*b,Me=(Y+ue)*2,Se=ne+ve,De=S(Me,Se),je=c()(De,2),Qe=je[0],Ue=je[1];function de(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Qe.drawImage(He,Xe,Fe,Y,ne,K,N,Y,ne)}return de(),de(Y+ue,-ne/2-ve/2),de(Y+ue,+ne/2+ve/2),[Ue.toDataURL(),Me/b,Se/b]}return P}var r=e(85669),C=e(45680);function n(P){var m=i.useRef(!1),O=i.useRef(),b=(0,C.zX)(P);return function(){m.current||(m.current=!0,b(),O.current=(0,r.Z)(function(){m.current=!1}))}}function t(P){return P.replace(/([A-Z])/g,"-$1").toLowerCase()}function o(P){return Object.keys(P).map(function(m){return"".concat(t(m),": ").concat(P[m],";")}).join(" ")}function l(){return window.devicePixelRatio||1}var g=function(m,O){var b=!1;return m.removedNodes.length&&(b=Array.from(m.removedNodes).some(function(U){return O(U)})),m.type==="attributes"&&O(m.target)&&(b=!0),b},p=2,D=3,L={visibility:"visible !important"};function j(P){var m=i.useState(function(){return new Map}),O=c()(m,1),b=O[0],U=function(W,k,H){if(H){if(!b.get(H)){var B=document.createElement("div");b.set(H,B)}var ee=b.get(H);ee.setAttribute("style",o(a()(a()({},P),{},{backgroundImage:"url('".concat(W,"')"),backgroundSize:"".concat(Math.floor(k),"px")},L))),ee.removeAttribute("class"),H.append(ee)}},Z=function(W){var k=b.get(W);k&&W&&W.removeChild(k),b.delete(W)},F=function(W){return Array.from(b.values()).includes(W)};return[U,Z,F]}var X=e(11527);function V(P,m){return P.size===m.size?P:m}var $=100,Q=100,J=function(m){var O,b,U=m.zIndex,Z=U===void 0?9:U,F=m.rotate,ae=F===void 0?-22:F,W=m.width,k=m.height,H=m.image,B=m.content,ee=m.font,G=ee===void 0?{}:ee,ge=m.style,ke=m.className,Ne=m.rootClassName,ze=m.gap,we=ze===void 0?[$,Q]:ze,re=m.offset,Le=m.children,ye=m.inherit,Ae=ye===void 0?!0:ye,ie=(0,_.ZP)(),Oe=c()(ie,2),We=Oe[1],me=G.color,pe=me===void 0?We.colorFill:me,He=G.fontSize,te=He===void 0?We.fontSizeLG:He,Be=G.fontWeight,le=Be===void 0?"normal":Be,he=G.fontStyle,ce=he===void 0?"normal":he,xe=G.fontFamily,oe=xe===void 0?"sans-serif":xe,se=G.textAlign,Ie=se===void 0?"center":se,Xe=c()(we,2),Fe=Xe[0],Y=Fe===void 0?$:Fe,ne=Xe[1],ue=ne===void 0?Q:ne,ve=Y/2,Me=ue/2,Se=(O=re==null?void 0:re[0])!==null&&O!==void 0?O:ve,De=(b=re==null?void 0:re[1])!==null&&b!==void 0?b:Me,je=i.useMemo(function(){var I={zIndex:Z,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},z=Se-ve,R=De-Me;return z>0&&(I.left="".concat(z,"px"),I.width="calc(100% - ".concat(z,"px)"),z=0),R>0&&(I.top="".concat(R,"px"),I.height="calc(100% - ".concat(R,"px)"),R=0),I.backgroundPosition="".concat(z,"px ").concat(R,"px"),I},[Z,Se,ve,De,Me]),Qe=i.useState(),Ue=c()(Qe,2),de=Ue[0],K=Ue[1],N=i.useState(new Set),Ee=c()(N,2),Ce=Ee[0],Ze=Ee[1],be=i.useMemo(function(){var I=de?[de]:[];return[].concat(I,f()(Array.from(Ce)))},[de,Ce]),Ge=function(z){var R=120,w=64;if(!H&&z.measureText){z.font="".concat(Number(te),"px ").concat(oe);var Pe=Array.isArray(B)?B:[B],_e=Pe.map(function(fe){var Re=z.measureText(fe);return[Re.width,Re.fontBoundingBoxAscent+Re.fontBoundingBoxDescent]});R=Math.ceil(Math.max.apply(Math,f()(_e.map(function(fe){return fe[0]})))),w=Math.ceil(Math.max.apply(Math,f()(_e.map(function(fe){return fe[1]}))))*Pe.length+(Pe.length-1)*E}return[W!=null?W:R,k!=null?k:w]},Ke=M(),rr=i.useState(null),Je=c()(rr,2),$e=Je[0],tr=Je[1],or=function(){var z=document.createElement("canvas"),R=z.getContext("2d");if(R){var w=l(),Pe=Ge(R),_e=c()(Pe,2),fe=_e[0],Re=_e[1],Ve=function(vr){var dr=Ke(vr||"",ae,w,fe,Re,{color:pe,fontSize:te,fontStyle:ce,fontWeight:le,fontFamily:oe,textAlign:Ie},Y,ue),er=c()(dr,2),fr=er[0],gr=er[1];tr([fr,gr])};if(H){var Te=new Image;Te.onload=function(){Ve(Te)},Te.onerror=function(){Ve(B)},Te.crossOrigin="anonymous",Te.referrerPolicy="no-referrer",Te.src=H}else Ve(B)}},qe=n(or),nr=j(je),Ye=c()(nr,3),ar=Ye[0],ir=Ye[1],lr=Ye[2];(0,i.useEffect)(function(){$e&&be.forEach(function(I){ar($e[0],$e[1],I)})},[$e,be]);var cr=function(z){z.forEach(function(R){g(R,lr)&&qe()})};(0,T.b)(be,cr),(0,i.useEffect)(qe,[ae,Z,W,k,H,B,pe,te,le,ce,oe,Ie,Y,ue,Se,De]);var sr=i.useMemo(function(){return{add:function(z){Ze(function(R){var w=new Set(R);return w.add(z),V(R,w)})},remove:function(z){ir(z),Ze(function(R){var w=new Set(R);return w.delete(z),V(R,w)})}}},[]),ur=Ae?(0,X.jsx)(v.Z.Provider,{value:sr,children:Le}):Le;return(0,X.jsx)("div",{ref:K,className:A()(ke,Ne),style:a()({position:"relative"},ge),children:ur})},q=J},45680:function(h,d,e){"use strict";e.d(d,{C8:function(){return a.Z},t4:function(){return s.t4},x1:function(){return s.x1},zX:function(){return x.Z}});var x=e(92577),a=e(29953),s=e(78404),f=e(77812),u=e(24694)},48290:function(h,d,e){"use strict";e.d(d,{Z:function(){return x}});function x(a,s){for(var f=a,u=0;u<s.length;u+=1){if(f==null)return;f=f[s[u]]}return f}},77812:function(h,d,e){"use strict";e.d(d,{T:function(){return _},Z:function(){return i}});var x=e(19881),a=e(7376),s=e(22937),f=e(31752),u=e(48290);function c(v,E,S,M){if(!E.length)return S;var r=(0,f.Z)(E),C=r[0],n=r.slice(1),t;return!v&&typeof C=="number"?t=[]:Array.isArray(v)?t=(0,s.Z)(v):t=(0,a.Z)({},v),M&&S===void 0&&n.length===1?delete t[C][n[0]]:t[C]=c(t[C],n,S,M),t}function i(v,E,S){var M=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return E.length&&M&&S===void 0&&!(0,u.Z)(v,E.slice(0,-1))?v:c(v,E,S,M)}function T(v){return(0,x.Z)(v)==="object"&&v!==null&&Object.getPrototypeOf(v)===Object.prototype}function y(v){return Array.isArray(v)?[]:{}}var A=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function _(){for(var v=arguments.length,E=new Array(v),S=0;S<v;S++)E[S]=arguments[S];var M=y(E[0]);return E.forEach(function(r){function C(n,t){var o=new Set(t),l=(0,u.Z)(r,n),g=Array.isArray(l);if(g||T(l)){if(!o.has(l)){o.add(l);var p=(0,u.Z)(M,n);g?M=i(M,n,[]):(!p||(0,x.Z)(p)!=="object")&&(M=i(M,n,y(l))),A(l).forEach(function(D){C([].concat((0,s.Z)(n),[D]),o)})}}else M=i(M,n,l)}C([])}),M}},38498:function(h,d,e){var x=e(78770);function a(s){if(Array.isArray(s))return x(s)}h.exports=a,h.exports.__esModule=!0,h.exports.default=h.exports},20698:function(h){function d(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}h.exports=d,h.exports.__esModule=!0,h.exports.default=h.exports},91162:function(h){function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}h.exports=d,h.exports.__esModule=!0,h.exports.default=h.exports},15558:function(h,d,e){var x=e(38498),a=e(20698),s=e(31479),f=e(91162);function u(c){return x(c)||a(c)||s(c)||f()}h.exports=u,h.exports.__esModule=!0,h.exports.default=h.exports},31752:function(h,d,e){"use strict";e.d(d,{Z:function(){return u}});var x=e(57898),a=e(72605),s=e(61024),f=e(45396);function u(c){return(0,x.Z)(c)||(0,a.Z)(c)||(0,s.Z)(c)||(0,f.Z)()}}}]);
