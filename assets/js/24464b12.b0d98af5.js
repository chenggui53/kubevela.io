(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(282)),i={title:"Rollout"},o={unversionedId:"developers/references/traits/rollout",id:"developers/references/traits/rollout",isDocsHomePage:!1,title:"Rollout",description:"Description",source:"@site/docs/developers/references/traits/rollout.md",slug:"/developers/references/traits/rollout",permalink:"/docs/developers/references/traits/rollout",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/references/traits/rollout.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021"},c=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Conflicts With",id:"conflicts-with",children:[{value:"<code>Autoscale</code>",id:"autoscale",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Configures Canary deployment strategy for your application."),Object(l.b)("h2",{id:"specification"},"Specification"),Object(l.b)("p",null,"List of all configuration options for a ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," trait."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'servcies:\n  express-server:\n    ...\n\n    rollout:\n      replicas: 2\n      stepWeight: 50\n      interval: "10s"\n')),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"interval"),Object(l.b)("td",{parentName:"tr",align:null},"Schedule interval time"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"30s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stepWeight"),Object(l.b)("td",{parentName:"tr",align:null},"Weight percent of every step in rolling update"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"50")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"replicas"),Object(l.b)("td",{parentName:"tr",align:null},"Total replicas of the workload"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"2")))),Object(l.b)("h2",{id:"conflicts-with"},"Conflicts With"),Object(l.b)("h3",{id:"autoscale"},Object(l.b)("inlineCode",{parentName:"h3"},"Autoscale")),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Autoscle")," traits are attached to the same service, they two will fight over the number of instances during rollout. Thus, it's by design that ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," will take over replicas control (specified by ",Object(l.b)("inlineCode",{parentName:"p"},".replicas")," field) during rollout."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: in up coming releases, KubeVela will introduce a separate section in Appfile to define release phase configurations such as ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout"),".")))}u.isMDXComponent=!0},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||l;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);