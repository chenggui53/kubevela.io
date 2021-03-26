(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(263)),s={title:"Advanced Features"},c={unversionedId:"platform-builder-guide/using-cue/status",id:"platform-builder-guide/using-cue/status",isDocsHomePage:!1,title:"Advanced Features",description:"By using CUE as encapsulation method, some advanced features such as status write back could be easily achieved.",source:"@site/docs/platform-builder-guide/using-cue/status.md",slug:"/platform-builder-guide/using-cue/status",permalink:"/zh/docs/platform-builder-guide/using-cue/status",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-builder-guide/using-cue/status.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Defining Traits",permalink:"/zh/docs/platform-builder-guide/using-cue/trait"},next:{title:"Auto-generated Schema",permalink:"/zh/docs/platform-builder-guide/using-cue/openapi-v3-json-schema"}},i=[{value:"Health Check",id:"health-check",children:[]},{value:"Custom Status",id:"custom-status",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By using CUE as encapsulation method, some advanced features such as status write back could be easily achieved."),Object(o.b)("h2",{id:"health-check"},"Health Check"),Object(o.b)("p",null,"The spec of health check is ",Object(o.b)("inlineCode",{parentName:"p"},"spec.status.healthPolicy"),", they are the same for both Workload Type and Trait."),Object(o.b)("p",null,"If not defined, the health result will always be ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"The keyword in CUE is ",Object(o.b)("inlineCode",{parentName:"p"},"isHealth"),", the result of CUE expression must be ",Object(o.b)("inlineCode",{parentName:"p"},"bool")," type.\nKubeVela runtime will evaluate the CUE expression periodically until it becomes healthy. Every time the controller will get all the Kubernetes resources and fill them into the context field."),Object(o.b)("p",null,"So the context will contain following information:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),Object(o.b)("p",null,"Trait will not have the ",Object(o.b)("inlineCode",{parentName:"p"},"context.ouput"),", other fields are the same."),Object(o.b)("p",null,"The example of health check likes below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: (context.output.status.readyReplicas > 0) && (context.output.status.readyReplicas == context.output.status.replicas)\n   ...\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nspec:\n  status:\n    healthPolicy: |\n      isHealth: len(context.outputs.service.spec.clusterIP) > 0\n   ...\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examplesapp-with-status/template.yaml"},"this doc")," for the complete example.")),Object(o.b)("p",null,"The health check result will be recorded into the ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," resource."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nspec:\n  components:\n  - name: myweb\n    settings:\n      cmd:\n      - sleep\n      - "1000"\n      enemies: alien\n      image: busybox\n      lives: "3"\n    traits:\n    - name: ingress\n      properties:\n        domain: www.example.com\n        http:\n          /: 80\n    type: worker\nstatus:\n  ...\n  services:\n  - healthy: true\n    message: "type: busybox,\\t enemies:alien"\n    name: myweb\n    traits:\n    - healthy: true\n      message: \'Visiting URL: www.example.com, IP: 47.111.233.220\'\n      type: ingress\n  status: running\n')),Object(o.b)("h2",{id:"custom-status"},"Custom Status"),Object(o.b)("p",null,"The spec of custom status is ",Object(o.b)("inlineCode",{parentName:"p"},"spec.status.customStatus"),", they are the same for both Workload Type and Trait."),Object(o.b)("p",null,"The keyword in CUE is ",Object(o.b)("inlineCode",{parentName:"p"},"message"),", the result of CUE expression must be ",Object(o.b)("inlineCode",{parentName:"p"},"string")," type."),Object(o.b)("p",null,"The custom status has the same mechanism with health check.\nApplication CRD controller will evaluate the CUE expression after the health check succeed."),Object(o.b)("p",null,"The context will contain following information:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cue"},"context:{\n  name: <component name>\n  appName: <app name>\n  output: <K8s workload resource>\n  outputs: {\n    <resource1>: <K8s trait resource1>\n    <resource2>: <K8s trait resource2>\n  }\n}\n")),Object(o.b)("p",null,"Trait will not have the ",Object(o.b)("inlineCode",{parentName:"p"},"context.ouput"),", other fields are the same."),Object(o.b)("p",null,"Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examplesapp-with-status/template.yaml"},"this doc")," for the complete example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: " + context.output.spec.template.spec.containers[0].image + ",\\t enemies:" + context.outputs.gameconfig.data.enemies\n   ...\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nspec:\n  status:\n    customStatus: |-\n      message: "type: "+ context.outputs.service.spec.type +",\\t clusterIP:"+ context.outputs.service.spec.clusterIP+",\\t ports:"+ "\\(context.outputs.service.spec.ports[0].port)"+",\\t domain"+context.outputs.ingress.spec.rules[0].host\n   ...\n')))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);