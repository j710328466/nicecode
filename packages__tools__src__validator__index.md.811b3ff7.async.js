(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"6eSL":function(e,n,t){"use strict";t.r(n);var a=t("T9Mk"),r=t.n(a),l=t("fmlK"),i=t("wyhO"),c=t("JjdP"),o=r.a.memo(c["default"]["validator-demo"].component);n["default"]=e=>(r.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"validator"},r.a.createElement(l["AnchorLink"],{to:"#validator","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"validator"),r.a.createElement("p",null,"\u5e38\u89c1\u6b63\u5219\u6821\u9a8c\u5408\u96c6")),r.a.createElement(i["default"],c["default"]["validator-demo"].previewerProps,r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u65b9\u6cd5"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"string"),r.a.createElement("td",null,"\u5b57\u7b26\u4e32\u6821\u9a8c"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"phone"),r.a.createElement("td",null,"\u7535\u8bdd\u53f7\u7801"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"mobile"),r.a.createElement("td",null,"\u624b\u673a\u53f7\u7801"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"url"),r.a.createElement("td",null,"\u94fe\u63a5"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"password"),r.a.createElement("td",null,"\u5bc6\u7801\uff08\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u7b26\u53f7\u4e24\u79cd\u53ca\u4ee5\u4e0a\uff09"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"idCard"),r.a.createElement("td",null,"\u8eab\u4efd\u8bc1\u53f7"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"mac"),r.a.createElement("td",null,"mac \u5730\u5740"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"noChars"),r.a.createElement("td",null,"\u5b57\u7b26\u4e32"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"postCode"),r.a.createElement("td",null,"\u90ae\u653f\u7f16\u7801"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"zh"),r.a.createElement("td",null,"\u4e2d\u6587"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"ip"),r.a.createElement("td",null,"ip\u5730\u5740"),r.a.createElement("td",null,"RegExp"),r.a.createElement("td",null,"-"))))))))},JjdP:function(e,n,t){"use strict";t.r(n);var a=t("SDO5"),r=t("4Wd/"),l=t.n(r),i=t("+JqO"),c="import React from 'react';\nimport { checkDevice } from '@nicecode/tools'\n\n\nconst Demo: React.FC<any> = () => {\n  return (\n    <div>\u662f\u5426\u5728PC\u7aef\uff1a{String(checkDevice.isPc())}</div>\n  )\n}\n\nexport default Demo;",o="import React from 'react'\nimport { common } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u751f\u6210UUID: {common.generateUUID()}</div>;\n};",d="import React from 'react'\nimport { floatUtil } from '@nicecode/tools'\n\nexport default () => {\n  return <div>{floatUtil.sub(12,33)}</div>;\n};",s="import React from 'react'\nimport { stringUtil } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u5143\u8f6c\u5206\uff1a{stringUtil.toFen(String(222))}</div>;\n};",p="import React from 'react'\nimport { validator } from '@nicecode/tools'\n\nexport default () => {\n  return <div>\u624b\u673a\u53f7\u6b63\u5219\uff1a{String(validator('mobile'))}</div>;\n};";n["default"]={"checkdevice-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"ZCBg"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.9"}},identifier:"checkdevice-demo"}},"common-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"HXc9"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:o}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.9"}},identifier:"common-demo"}},"floatutil-sub":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"Ldz0"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.9"}},identifier:"floatutil-sub"}},"stringutil-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"qhQu"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.9"}},identifier:"stringutil-demo"}},"validator-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"cR5D"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"^16.x"},"@nicecode/tools":{version:"0.1.9"}},identifier:"validator-demo"}},"Tooltips-demo":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){var n,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("74DN"),e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"T9Mk",7));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.next=8,t.e(3).then(t.t.bind(null,"XbmU",7));case 8:return r=function(){var e={display:"inline-block",padding:"12px",margin:"24px",textAlign:"center",width:"200px",border:"1px solid #aaa",borderRadius:"3px"};return a["default"].createElement("div",null,a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"up"},"\u6b63\u4e0a\u65b9!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"up-left"},"\u5de6\u4e0a\u89d2!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"up-right"},"\u53f3\u4e0a\u89d2!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"left"},"\u5de6\u8fb9!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"right"},"\u53f3\u8fb9!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"down-left"},"\u5de6\u4e0b\u89d2!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"down"},"\u6b63\u4e0b\u65b9!"),a["default"].createElement("p",{style:e,"aria-label":"\u55e8\uff0c\u5b9d\u8d1d!","data-nc-pos":"down-right"},"\u53f3\u4e0b\u89d2!"))},e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:'import React from \'react\';\nimport \'@nicecode/css\';\n\nexport default () => {\n  const style = {\n    display: \'inline-block\',\n    padding: \'12px\',\n    margin: \'24px\',\n    textAlign: \'center\',\n    width: \'200px\',\n    border: \'1px solid #aaa\',\n    borderRadius: \'3px\',\n  };\n\n  return (\n    <div>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="up">\n        \u6b63\u4e0a\u65b9!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="up-left">\n        \u5de6\u4e0a\u89d2!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="up-right">\n        \u53f3\u4e0a\u89d2!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="left">\n        \u5de6\u8fb9!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="right">\n        \u53f3\u8fb9!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="down-left">\n        \u5de6\u4e0b\u89d2!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="down">\n        \u6b63\u4e0b\u65b9!\n      </p>\n      <p style={style} aria-label="\u55e8\uff0c\u5b9d\u8d1d!" data-nc-pos="down-right">\n        \u53f3\u4e0b\u89d2!\n      </p>\n    </div>\n  );\n};'}},dependencies:{react:{version:"17.0.2"},"@nicecode/css":{version:"0.0.6"}},identifier:"Tooltips-demo"}},"Tooltips-demo-1":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){var n,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("74DN"),e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"T9Mk",7));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),r=function(){var e={display:"inline-block",padding:"12px",margin:"24px",textAlign:"center",width:"200px",border:"1px solid #aaa",borderRadius:"3px"};return a["default"].createElement("div",null,a["default"].createElement("p",{style:e,"data-nc-length":"small","data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"small Tooltip"),a["default"].createElement("p",{style:e,"data-nc-length":"medium","data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"medium Tooltip"),a["default"].createElement("p",{style:e,"data-nc-length":"large","data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"large Tooltip"),a["default"].createElement("p",{style:e,"data-nc-length":"xlarge","data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"Xlarge Tooltip"),a["default"].createElement("p",{style:e,"data-nc-length":"fit","data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"\u548c\u7236\u7ea7 dom \u540c\u5bbd"))},e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:'import React from \'react\';\n\nexport default () => {\n  const style = {\n    display: \'inline-block\',\n    padding: \'12px\',\n    margin: \'24px\',\n    textAlign: \'center\',\n    width: \'200px\',\n    border: \'1px solid #aaa\',\n    borderRadius: \'3px\',\n  };\n\n  return (\n    <div>\n      <p\n        style={style}\n        data-nc-length="small"\n        data-nc-pos="up"\n        aria-label="\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"\n      >\n        small Tooltip\n      </p>\n      <p\n        style={style}\n        data-nc-length="medium"\n        data-nc-pos="up"\n        aria-label="\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"\n      >\n        medium Tooltip\n      </p>\n      <p\n        style={style}\n        data-nc-length="large"\n        data-nc-pos="up"\n        aria-label="\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"\n      >\n        large Tooltip\n      </p>\n      <p\n        style={style}\n        data-nc-length="xlarge"\n        data-nc-pos="up"\n        aria-label="\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"\n      >\n        Xlarge Tooltip\n      </p>\n      <p\n        style={style}\n        data-nc-length="fit"\n        data-nc-pos="up"\n        aria-label="\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"\n      >\n        \u548c\u7236\u7ea7 dom \u540c\u5bbd\n      </p>\n    </div>\n  );\n};'}},dependencies:{react:{version:"17.0.2"}},identifier:"Tooltips-demo-1"}},"Tooltips-demo-2":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){var n,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("74DN"),e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"T9Mk",7));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.next=8,t.e(3).then(t.t.bind(null,"XbmU",7));case 8:return r=function(){var e={display:"inline-block",padding:"12px",margin:"24px",textAlign:"center",width:"200px",border:"1px solid #aaa",borderRadius:"3px"};return a["default"].createElement("div",null,a["default"].createElement("p",{style:e,"data-nc-pos":"up","data-nc-blunt":!0,"aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"no Animation"))},e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport '@nicecode/css';\n\nexport default () => {\n  const style = {\n    display: 'inline-block',\n    padding: '12px',\n    margin: '24px',\n    textAlign: 'center',\n    width: '200px',\n    border: '1px solid #aaa',\n    borderRadius: '3px',\n  };\n\n  return (\n    <div>\n      <p\n        style={style}\n        data-nc-pos=\"up\"\n        data-nc-blunt\n        aria-label=\"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002\"\n      >\n        no Animation\n      </p>\n    </div>\n  );\n};"}},dependencies:{react:{version:"17.0.2"},"@nicecode/css":{version:"0.0.6"}},identifier:"Tooltips-demo-2"}},"Tooltips-demo-3":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){var n,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("74DN"),e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"T9Mk",7));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.next=8,t.e(3).then(t.t.bind(null,"XbmU",7));case 8:return r=function(){var e={display:"inline-block",padding:"12px",margin:"24px",textAlign:"center",width:"200px",border:"1px solid #aaa",borderRadius:"3px"};return a["default"].createElement("div",null,a["default"].createElement("p",{style:e,"data-nc-pos":"up","data-nc-visible":!0,"aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"\u4e00\u76f4\u663e\u793a"))},e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport '@nicecode/css';\n\nexport default () => {\n  const style = {\n    display: 'inline-block',\n    padding: '12px',\n    margin: '24px',\n    textAlign: 'center',\n    width: '200px',\n    border: '1px solid #aaa',\n    borderRadius: '3px',\n  };\n\n  return (\n    <div>\n      <p\n        style={style}\n        data-nc-pos=\"up\"\n        data-nc-visible\n        aria-label=\"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002\"\n      >\n        \u4e00\u76f4\u663e\u793a\n      </p>\n    </div>\n  );\n};"}},dependencies:{react:{version:"17.0.2"},"@nicecode/css":{version:"0.0.6"}},identifier:"Tooltips-demo-3"}},"Tooltips-demo-4":{component:Object(i["dynamic"])({loader:function(){var e=Object(a["a"])(l.a.mark((function e(){var n,a,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("74DN"),e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"T9Mk",7));case 4:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.next=8,t.e(3).then(t.t.bind(null,"XbmU",7));case 8:return r=function(){var e={display:"inline-block",padding:"12px",margin:"24px",textAlign:"center",width:"200px",border:"1px solid #aaa",borderRadius:"3px","--nc-color":"red","--nc-font-size":"20px","--nc-move":"30px"};return a["default"].createElement("div",null,a["default"].createElement("p",{style:e,"data-nc-pos":"up","aria-label":"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002"},"\u4e00\u76f4\u663e\u793a"))},e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nimport '@nicecode/css';\n\nexport default () => {\n  const style = {\n    display: 'inline-block',\n    padding: '12px',\n    margin: '24px',\n    textAlign: 'center',\n    width: '200px',\n    border: '1px solid #aaa',\n    borderRadius: '3px',\n    '--nc-color': 'red',\n    '--nc-font-size': '20px',\n    '--nc-move': '30px',\n  };\n\n  return (\n    <div>\n      <p\n        style={style}\n        data-nc-pos=\"up\"\n        aria-label=\"\u5982\u679c\u8bf4\u4f60\u662f\u6d77\u4e0a\u7684\u70df\u706b\uff0c\u6211\u662f\u6d6a\u82b1\u7684\u6ce1\u6cab\uff0c\u67d0\u4e00\u523b\u4f60\u7684\u5149\u7167\u4eae\u4e86\u6211\u3002\"\n      >\n        \u4e00\u76f4\u663e\u793a\n      </p>\n    </div>\n  );\n};"}},dependencies:{react:{version:"17.0.2"},"@nicecode/css":{version:"0.0.6"}},identifier:"Tooltips-demo-4"}}}},MZF8:function(e,n,t){"use strict";var a=t("ogwx");t.d(n,"a",(function(){return a["b"]}));t("VCU9")},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);