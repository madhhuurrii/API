(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(3),r=n.n(s),j=(n(10),n(5)),h=(n(11),n(4)),a=n.n(h),o=n(0);var d=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){a()("http://localhost:3000/data",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){t.sort((function(t,e){return parseInt(t.id)>parseInt(e.id)?1:parseInt(t.id)<parseInt(e.id)?-1:0})),i(t)})).catch((function(t){console.log("ERROR!")}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("center",{children:Object(o.jsxs)("table",{className:"App",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsx)("h1",{children:"ID \xa0"})}),Object(o.jsx)("th",{children:Object(o.jsx)("h1",{children:"Name \xa0"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:n&&n.length>0&&n.map((function(t){return Object(o.jsxs)("h2",{children:[t.id," \xa0"]})}))}),Object(o.jsx)("td",{children:n&&n.length>0&&n.map((function(t){return Object(o.jsxs)("h2",{children:[t.name," \xa0"]})}))})]})]})})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()}},[[13,1,2]]]);
//# sourceMappingURL=main.7277c566.chunk.js.map