(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{JjdP:function(e,n,t){"use strict";t.r(n);var r=t("SDO5"),a=t("4Wd/"),c=t.n(a),o=t("FSYb"),i="import React from 'react';\nimport { checkDevice } from '@nicecode/tools'\n\n\nconst Demo: React.FC<any> = () => {\n  return (\n    <div>\u662f\u5426\u5728PC\u7aef\uff1a{String(checkDevice.isPc())}</div>\n  )\n}\n\nexport default Demo;",s="import React from 'react'\nimport { common } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u751f\u6210UUID: {common.generateUUID()}</div>;\n};",d="import React from 'react'\nimport { floatUtil } from '@nicecode/tools'\n\nexport default () => {\n  return <div>{floatUtil.sub(12,33)}</div>;\n};",l="import React from 'react'\nimport { stringUtil } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u5143\u8f6c\u5206\uff1a{stringUtil.toFen(String(222))}</div>;\n};",u="import React from 'react'\nimport { validator } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u624b\u673a\u53f7\u6b63\u5219\uff1a{String(validator('mobile'))}</div>;\n};";n["default"]={"checkdevice-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"ZCBg"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:i}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.8"}},identifier:"checkdevice-demo"}},"common-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"HXc9"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.8"}},identifier:"common-demo"}},"floatutil-sub":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"Ldz0"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.8"}},identifier:"floatutil-sub"}},"stringutil-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"qhQu"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.8"}},identifier:"stringutil-demo"}},"validator-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"cR5D"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:u}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.8"}},identifier:"validator-demo"}}}},L6d6:function(e,n,t){"use strict";t.r(n);var r=t("T9Mk"),a=t.n(r),c=t("yPDl"),o=t("z8xl");t("JjdP");n["default"]=e=>(a.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"git-\u63d0\u4ea4\u5b9a\u5236\u5316\u6a21\u677f"},a.a.createElement(c["AnchorLink"],{to:"#git-\u63d0\u4ea4\u5b9a\u5236\u5316\u6a21\u677f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"git \u63d0\u4ea4\u5b9a\u5236\u5316\u6a21\u677f"),a.a.createElement("h2",{id:"\u5feb\u901f\u4e0a\u624b"},a.a.createElement(c["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),a.a.createElement("h3",{id:"1-\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u5305"},a.a.createElement(c["AnchorLink"],{to:"#1-\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u5305","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"1. \u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u5305"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"cnpm i commitizen @nicecode/commit --save-dev")),a.a.createElement("h3",{id:"2-\u5728-packagejson-\u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9"},a.a.createElement(c["AnchorLink"],{to:"#2-\u5728-packagejson-\u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2. \u5728 package.json \u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9"),a.a.createElement(o["a"],{code:'{\n  ...\n  "config": {\n    "commitizen": {\n      "path": "@nicecode/commit"\n    }\n  },\n}',lang:"json"}),a.a.createElement("h3",{id:"3-\u5728-packagejson-\u4e2d\u521b\u5efa\u4ee5\u4e0b-script-\u547d\u4ee4"},a.a.createElement(c["AnchorLink"],{to:"#3-\u5728-packagejson-\u4e2d\u521b\u5efa\u4ee5\u4e0b-script-\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3. \u5728 package.json \u4e2d\u521b\u5efa\u4ee5\u4e0b script \u547d\u4ee4"),a.a.createElement(o["a"],{code:'{\n  "cz": "git add . && git cz"\n}',lang:"json"}),a.a.createElement("h3",{id:"4-\u8fd0\u884c\u547d\u4ee4"},a.a.createElement(c["AnchorLink"],{to:"#4-\u8fd0\u884c\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"4. \u8fd0\u884c\u547d\u4ee4"),a.a.createElement(o["a"],{code:"npm run cz",lang:"unknown"}))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);