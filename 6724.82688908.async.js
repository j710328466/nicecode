"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[6724],{68746:function(Se,z,u){u.d(z,{Z:function(){return e}});var w=u(68601),x=u(7376),m=u(19881),H=u(50959),U=["show"];function t(c,l){if(!l.max)return!0;var i=l.strategy(c);return i<=l.max}function e(c,l){return H.useMemo(function(){var i={};l&&(i.show=(0,m.Z)(l)==="object"&&l.formatter?l.formatter:!!l),i=(0,x.Z)((0,x.Z)({},i),c);var oe=i,I=oe.show,re=(0,w.Z)(oe,U);return(0,x.Z)((0,x.Z)({},re),{},{show:!!I,showFormatter:typeof I=="function"?I:void 0,strategy:re.strategy||function(ie){return ie.length}})},[c,l])}},66724:function(Se,z,u){u.d(z,{Q:function(){return i},Z:function(){return Ie}});var w=u(7376),x=u(57260),m=u(78948),H=u(19881),U=u(82187),t=u.n(U),e=u(50959),c=u(72361),l=function(a){var J,p,G=a.inputElement,A=a.children,C=a.prefixCls,P=a.prefix,B=a.suffix,Z=a.addonBefore,D=a.addonAfter,se=a.className,ce=a.style,W=a.disabled,K=a.readOnly,de=a.focused,X=a.triggerFocus,g=a.allowClear,Q=a.value,ve=a.handleReset,N=a.hidden,v=a.classes,r=a.classNames,F=a.dataAttrs,E=a.styles,h=a.components,V=A!=null?A:G,fe=(h==null?void 0:h.affixWrapper)||"span",$=(h==null?void 0:h.groupWrapper)||"span",Y=(h==null?void 0:h.wrapper)||"span",f=(h==null?void 0:h.groupAddon)||"span",L=(0,e.useRef)(null),me=function(ne){var te;(te=L.current)!==null&&te!==void 0&&te.contains(ne.target)&&(X==null||X())},k=(0,c.X3)(a),y=(0,e.cloneElement)(V,{value:Q,className:t()(V.props.className,!k&&(r==null?void 0:r.variant))||null});if(k){var S,T=null;if(g){var j,le=!W&&!K&&Q,M="".concat(C,"-clear-icon"),he=(0,H.Z)(g)==="object"&&g!==null&&g!==void 0&&g.clearIcon?g.clearIcon:"\u2716";T=e.createElement("span",{onClick:ve,onMouseDown:function(ne){return ne.preventDefault()},className:t()(M,(j={},(0,m.Z)(j,"".concat(M,"-hidden"),!le),(0,m.Z)(j,"".concat(M,"-has-suffix"),!!B),j)),role:"button",tabIndex:-1},he)}var d="".concat(C,"-affix-wrapper"),O=t()(d,(S={},(0,m.Z)(S,"".concat(C,"-disabled"),W),(0,m.Z)(S,"".concat(d,"-disabled"),W),(0,m.Z)(S,"".concat(d,"-focused"),de),(0,m.Z)(S,"".concat(d,"-readonly"),K),(0,m.Z)(S,"".concat(d,"-input-with-clear-btn"),B&&g&&Q),S),v==null?void 0:v.affixWrapper,r==null?void 0:r.affixWrapper,r==null?void 0:r.variant),q=(B||g)&&e.createElement("span",{className:t()("".concat(C,"-suffix"),r==null?void 0:r.suffix),style:E==null?void 0:E.suffix},T,B);y=e.createElement(fe,(0,x.Z)({className:O,style:E==null?void 0:E.affixWrapper,onClick:me},F==null?void 0:F.affixWrapper,{ref:L}),P&&e.createElement("span",{className:t()("".concat(C,"-prefix"),r==null?void 0:r.prefix),style:E==null?void 0:E.prefix},P),y,q)}if((0,c.He)(a)){var _="".concat(C,"-group"),ee="".concat(_,"-addon"),ue="".concat(_,"-wrapper"),ge=t()("".concat(C,"-wrapper"),_,v==null?void 0:v.wrapper,r==null?void 0:r.wrapper),Ee=t()(ue,(0,m.Z)({},"".concat(ue,"-disabled"),W),v==null?void 0:v.group,r==null?void 0:r.groupWrapper);y=e.createElement($,{className:Ee},e.createElement(Y,{className:ge},Z&&e.createElement(f,{className:ee},Z),y,D&&e.createElement(f,{className:ee},D)))}return e.cloneElement(y,{className:t()((J=y.props)===null||J===void 0?void 0:J.className,se)||null,style:(0,w.Z)((0,w.Z)({},(p=y.props)===null||p===void 0?void 0:p.style),ce),hidden:N})},i=l,oe=u(22937),I=u(81361),re=u(68601),ie=u(29953),Ze=u(36760),Ne=u(68746),Re=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],be=(0,e.forwardRef)(function(o,a){var J=o.autoComplete,p=o.onChange,G=o.onFocus,A=o.onBlur,C=o.onPressEnter,P=o.onKeyDown,B=o.prefixCls,Z=B===void 0?"rc-input":B,D=o.disabled,se=o.htmlSize,ce=o.className,W=o.maxLength,K=o.suffix,de=o.showCount,X=o.count,g=o.type,Q=g===void 0?"text":g,ve=o.classes,N=o.classNames,v=o.styles,r=o.onCompositionStart,F=o.onCompositionEnd,E=(0,re.Z)(o,Re),h=(0,e.useState)(!1),V=(0,I.Z)(h,2),fe=V[0],$=V[1],Y=(0,e.useRef)(!1),f=(0,e.useRef)(null),L=function(n){f.current&&(0,c.nH)(f.current,n)},me=(0,ie.Z)(o.defaultValue,{value:o.value}),k=(0,I.Z)(me,2),y=k[0],S=k[1],T=y==null?"":String(y),j=(0,e.useState)(null),le=(0,I.Z)(j,2),M=le[0],he=le[1],d=(0,Ne.Z)(X,de),O=d.max||W,q=d.strategy(T),_=!!O&&q>O;(0,e.useImperativeHandle)(a,function(){return{focus:L,blur:function(){var n;(n=f.current)===null||n===void 0||n.blur()},setSelectionRange:function(n,R,ae){var b;(b=f.current)===null||b===void 0||b.setSelectionRange(n,R,ae)},select:function(){var n;(n=f.current)===null||n===void 0||n.select()},input:f.current}}),(0,e.useEffect)(function(){$(function(s){return s&&D?!1:s})},[D]);var ee=function(n,R,ae){var b=R;if(!Y.current&&d.exceedFormatter&&d.max&&d.strategy(R)>d.max){if(b=d.exceedFormatter(R,{max:d.max}),R!==b){var xe,Ce;he([((xe=f.current)===null||xe===void 0?void 0:xe.selectionStart)||0,((Ce=f.current)===null||Ce===void 0?void 0:Ce.selectionEnd)||0])}}else if(ae.source==="compositionEnd")return;S(b),f.current&&(0,c.rJ)(f.current,n,p,b)};(0,e.useEffect)(function(){if(M){var s;(s=f.current)===null||s===void 0||s.setSelectionRange.apply(s,(0,oe.Z)(M))}},[M]);var ue=function(n){ee(n,n.target.value,{source:"change"})},ge=function(n){Y.current=!1,ee(n,n.currentTarget.value,{source:"compositionEnd"}),F==null||F(n)},Ee=function(n){C&&n.key==="Enter"&&C(n),P==null||P(n)},ye=function(n){$(!0),G==null||G(n)},ne=function(n){$(!1),A==null||A(n)},te=function(n){S(""),L(),f.current&&(0,c.rJ)(f.current,n,p)},Ae=_&&"".concat(Z,"-out-of-range"),Be=function(){var n=(0,Ze.Z)(o,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return e.createElement("input",(0,x.Z)({autoComplete:J},n,{onChange:ue,onFocus:ye,onBlur:ne,onKeyDown:Ee,className:t()(Z,(0,m.Z)({},"".concat(Z,"-disabled"),D),N==null?void 0:N.input),style:v==null?void 0:v.input,ref:f,size:se,type:Q,onCompositionStart:function(ae){Y.current=!0,r==null||r(ae)},onCompositionEnd:ge}))},De=function(){var n=Number(O)>0;if(K||d.show){var R=d.showFormatter?d.showFormatter({value:T,count:q,maxLength:O}):"".concat(q).concat(n?" / ".concat(O):"");return e.createElement(e.Fragment,null,d.show&&e.createElement("span",{className:t()("".concat(Z,"-show-count-suffix"),(0,m.Z)({},"".concat(Z,"-show-count-has-suffix"),!!K),N==null?void 0:N.count),style:(0,w.Z)({},v==null?void 0:v.count)},R),K)}return null};return e.createElement(i,(0,x.Z)({},E,{prefixCls:Z,className:t()(ce,Ae),handleReset:te,value:T,focused:fe,triggerFocus:L,suffix:De(),disabled:D,classes:ve,classNames:N,styles:v}),Be())}),we=be,Ie=we},72361:function(Se,z,u){u.d(z,{He:function(){return w},X3:function(){return x},nH:function(){return U},rJ:function(){return H}});function w(t){return!!(t.addonBefore||t.addonAfter)}function x(t){return!!(t.prefix||t.suffix||t.allowClear)}function m(t,e,c){var l=e.cloneNode(!0),i=Object.create(t,{target:{value:l},currentTarget:{value:l}});return l.value=c,typeof e.selectionStart=="number"&&typeof e.selectionEnd=="number"&&(l.selectionStart=e.selectionStart,l.selectionEnd=e.selectionEnd),i}function H(t,e,c,l){if(c){var i=e;if(e.type==="click"){i=m(e,t,""),c(i);return}if(t.type!=="file"&&l!==void 0){i=m(e,t,l),c(i);return}c(i)}}function U(t,e){if(t){t.focus(e);var c=e||{},l=c.cursor;if(l){var i=t.value.length;switch(l){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(i,i);break;default:t.setSelectionRange(0,i)}}}}}}]);
