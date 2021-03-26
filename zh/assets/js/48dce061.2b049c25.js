(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(263)),i={},o={unversionedId:"cli-references/vela_cap_center",id:"cli-references/vela_cap_center",isDocsHomePage:!1,title:"vela_cap_center",description:"vela cap center",source:"@site/docs/cli-references/vela_cap_center.md",slug:"/cli-references/vela_cap_center",permalink:"/zh/docs/cli-references/vela_cap_center",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli-references/vela_cap_center.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021"},l=[{value:"vela cap center",id:"vela-cap-center",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"vela-cap-center"},"vela cap center"),Object(c.b)("p",null,"Manage Capability Center"),Object(c.b)("h3",{id:"synopsis"},"Synopsis"),Object(c.b)("p",null,"Manage Capability Center with config, sync, list"),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -h, --help   help for center\n")),Object(c.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(c.b)("h3",{id:"see-also"},"SEE ALSO"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_cap"},"vela cap"),"\t - Manage capability centers and installing/uninstalling capabilities"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_cap_center_config"},"vela cap center config"),"\t - Configure (add if not exist) a capability center, default is local (built-in capabilities)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_cap_center_ls"},"vela cap center ls"),"\t - List all capability centers"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_cap_center_remove"},"vela cap center remove"),"\t - Remove specified capability center"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_cap_center_sync"},"vela cap center sync"),"\t - Sync capabilities from remote center, default to sync all centers")),Object(c.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(f,o(o({ref:t},p),{},{components:n})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);