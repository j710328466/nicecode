(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[7804],{32861:function(w,H,S){"use strict";S.d(H,{C:function(){return u}});function f(r,e){g(r)&&(r="100%");const t=d(r);return r=e===360?r:Math.min(e,Math.max(0,parseFloat(r))),t&&(r=parseInt(String(r*e),10)/100),Math.abs(r-e)<1e-6?1:(e===360?r=(r<0?r%e+e:r%e)/parseFloat(String(e)):r=r%e/parseFloat(String(e)),r)}function x(r){return Math.min(1,Math.max(0,r))}function g(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function d(r){return typeof r=="string"&&r.indexOf("%")!==-1}function l(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function b(r){return Number(r)<=1?`${Number(r)*100}%`:r}function p(r){return r.length===1?"0"+r:String(r)}function o(r,e,t){return{r:f(r,255)*255,g:f(e,255)*255,b:f(t,255)*255}}function c(r,e,t){r=f(r,255),e=f(e,255),t=f(t,255);const n=Math.max(r,e,t),a=Math.min(r,e,t);let s=0,i=0;const h=(n+a)/2;if(n===a)i=0,s=0;else{const k=n-a;switch(i=h>.5?k/(2-n-a):k/(n+a),n){case r:s=(e-t)/k+(e<t?6:0);break;case e:s=(t-r)/k+2;break;case t:s=(r-e)/k+4;break;default:break}s/=6}return{h:s,s:i,l:h}}function R(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*(6*t):t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function y(r,e,t){let n,a,s;if(r=f(r,360),e=f(e,100),t=f(t,100),e===0)a=t,s=t,n=t;else{const i=t<.5?t*(1+e):t+e-t*e,h=2*t-i;n=R(h,i,r+1/3),a=R(h,i,r),s=R(h,i,r-1/3)}return{r:n*255,g:a*255,b:s*255}}function $(r,e,t){r=f(r,255),e=f(e,255),t=f(t,255);const n=Math.max(r,e,t),a=Math.min(r,e,t);let s=0;const i=n,h=n-a,k=n===0?0:h/n;if(n===a)s=0;else{switch(n){case r:s=(e-t)/h+(e<t?6:0);break;case e:s=(t-r)/h+2;break;case t:s=(r-e)/h+4;break;default:break}s/=6}return{h:s,s:k,v:i}}function F(r,e,t){r=f(r,360)*6,e=f(e,100),t=f(t,100);const n=Math.floor(r),a=r-n,s=t*(1-e),i=t*(1-a*e),h=t*(1-(1-a)*e),k=n%6,G=[t,i,s,s,h,t][k],D=[h,t,t,i,s,s][k],L=[s,s,h,t,t,i][k];return{r:G*255,g:D*255,b:L*255}}function I(r,e,t,n){const a=[p(Math.round(r).toString(16)),p(Math.round(e).toString(16)),p(Math.round(t).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function N(r,e,t,n,a){const s=[p(Math.round(r).toString(16)),p(Math.round(e).toString(16)),p(Math.round(t).toString(16)),p(P(n))];return a&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function T(r,e,t,n){return[pad2(P(n)),pad2(Math.round(r).toString(16)),pad2(Math.round(e).toString(16)),pad2(Math.round(t).toString(16))].join("")}function P(r){return Math.round(parseFloat(r)*255).toString(16)}function _(r){return m(r)/255}function m(r){return parseInt(r,16)}function B(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function q(r){let e={r:0,g:0,b:0},t=1,n=null,a=null,s=null,i=!1,h=!1;return typeof r=="string"&&(r=U(r)),typeof r=="object"&&(v(r.r)&&v(r.g)&&v(r.b)?(e=o(r.r,r.g,r.b),i=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):v(r.h)&&v(r.s)&&v(r.v)?(n=b(r.s),a=b(r.v),e=F(r.h,n,a),i=!0,h="hsv"):v(r.h)&&v(r.s)&&v(r.l)&&(n=b(r.s),s=b(r.l),e=y(r.h,n,s),i=!0,h="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(t=r.a)),t=l(t),{ok:i,format:r.format||h,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}const W="[-\\+]?\\d+%?",A="(?:"+"[-\\+]?\\d*\\.\\d+%?"+")|(?:"+W+")",E="[\\s|\\(]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")\\s*\\)?",O="[\\s|\\(]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")[,|\\s]+("+A+")\\s*\\)?",M={CSS_UNIT:new RegExp(A),rgb:new RegExp("rgb"+E),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+E),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+E),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function U(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let e=!1;if(j[r])r=j[r],e=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=M.rgb.exec(r);return t?{r:t[1],g:t[2],b:t[3]}:(t=M.rgba.exec(r),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=M.hsl.exec(r),t?{h:t[1],s:t[2],l:t[3]}:(t=M.hsla.exec(r),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=M.hsv.exec(r),t?{h:t[1],s:t[2],v:t[3]}:(t=M.hsva.exec(r),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=M.hex8.exec(r),t?{r:m(t[1]),g:m(t[2]),b:m(t[3]),a:_(t[4]),format:e?"name":"hex8"}:(t=M.hex6.exec(r),t?{r:m(t[1]),g:m(t[2]),b:m(t[3]),format:e?"name":"hex"}:(t=M.hex4.exec(r),t?{r:m(t[1]+t[1]),g:m(t[2]+t[2]),b:m(t[3]+t[3]),a:_(t[4]+t[4]),format:e?"name":"hex8"}:(t=M.hex3.exec(r),t?{r:m(t[1]+t[1]),g:m(t[2]+t[2]),b:m(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function v(r){return!!M.CSS_UNIT.exec(String(r))}class u{constructor(e="",t={}){var a;if(e instanceof u)return e;typeof e=="number"&&(e=B(e)),this.originalInput=e;const n=q(e);this.originalInput=e,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=t.format)!=null?a:n.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let t,n,a;const s=e.r/255,i=e.g/255,h=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),h<=.03928?a=h/12.92:a=Math.pow((h+.055)/1.055,2.4),.2126*t+.7152*n+.0722*a}getAlpha(){return this.a}setAlpha(e){return this.a=l(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=$(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=$(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${a}%)`:`hsva(${t}, ${n}%, ${a}%, ${this.roundA})`}toHsl(){const e=c(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=c(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),a=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${a}%)`:`hsla(${t}, ${n}%, ${a}%, ${this.roundA})`}toHex(e=!1){return I(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return N(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){const e=t=>`${Math.round(f(t,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=t=>Math.round(f(t,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+I(this.r,this.g,this.b,!1);for(const[t,n]of Object.entries(j))if(e===n)return t;return!1}toString(e){const t=!!e;e=e!=null?e:this.format;let n=!1;const a=this.a<1&&this.a>=0;return!t&&a&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new u(this.toString())}lighten(e=10){const t=this.toHsl();return t.l+=e/100,t.l=x(t.l),new u(t)}brighten(e=10){const t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new u(t)}darken(e=10){const t=this.toHsl();return t.l-=e/100,t.l=x(t.l),new u(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const t=this.toHsl();return t.s-=e/100,t.s=x(t.s),new u(t)}saturate(e=10){const t=this.toHsl();return t.s+=e/100,t.s=x(t.s),new u(t)}greyscale(){return this.desaturate(100)}spin(e){const t=this.toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,new u(t)}mix(e,t=50){const n=this.toRgb(),a=new u(e).toRgb(),s=t/100,i={r:(a.r-n.r)*s+n.r,g:(a.g-n.g)*s+n.g,b:(a.b-n.b)*s+n.b,a:(a.a-n.a)*s+n.a};return new u(i)}analogous(e=6,t=30){const n=this.toHsl(),a=360/t,s=[this];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,s.push(new u(n));return s}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new u(e)}monochromatic(e=6){const t=this.toHsv(),{h:n}=t,{s:a}=t;let{v:s}=t;const i=[],h=1/e;for(;e--;)i.push(new u({h:n,s:a,v:s})),s=(s+h)%1;return i}splitcomplement(){const e=this.toHsl(),{h:t}=e;return[this,new u({h:(t+72)%360,s:e.s,l:e.l}),new u({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){const t=this.toRgb(),n=new u(e).toRgb(),a=t.a+n.a*(1-t.a);return new u({r:(t.r*t.a+n.r*n.a*(1-t.a))/a,g:(t.g*t.a+n.g*n.a*(1-t.a))/a,b:(t.b*t.a+n.b*n.a*(1-t.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const t=this.toHsl(),{h:n}=t,a=[this],s=360/e;for(let i=1;i<e;i++)a.push(new u({h:(n+i*s)%360,s:t.s,l:t.l}));return a}equals(e){return this.toRgbString()===new u(e).toRgbString()}}},85669:function(w,H){"use strict";var S;S={value:!0},H.Z=void 0;var f=function(c){return+setTimeout(c,16)},x=function(c){return clearTimeout(c)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(f=function(c){return window.requestAnimationFrame(c)},x=function(c){return window.cancelAnimationFrame(c)});var g=0,d=new Map;function l(o){d.delete(o)}var b=function(c){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;g+=1;var y=g;function $(F){if(F===0)l(y),c();else{var I=f(function(){$(F-1)});d.set(y,I)}}return $(R),y};b.cancel=function(o){var c=d.get(o);return l(o),x(c)};var p=H.Z=b},67825:function(w,H,S){var f=S(64382);function x(g,d){if(g==null)return{};var l=f(g,d),b,p;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(g);for(p=0;p<o.length;p++)b=o[p],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(g,b)&&(l[b]=g[b])}return l}w.exports=x,w.exports.__esModule=!0,w.exports.default=w.exports},64382:function(w){function H(S,f){if(S==null)return{};var x={},g=Object.keys(S),d,l;for(l=0;l<g.length;l++)d=g[l],!(f.indexOf(d)>=0)&&(x[d]=S[d]);return x}w.exports=H,w.exports.__esModule=!0,w.exports.default=w.exports}}]);
