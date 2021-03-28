(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{282:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||p;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),p=(n(0),n(282)),o={title:"Attach Traits to Raw Template Based Components"},c={unversionedId:"kube/trait",id:"kube/trait",isDocsHomePage:!1,title:"Attach Traits to Raw Template Based Components",description:"In this sample, we will attach two traits,",source:"@site/docs/kube/trait.md",slug:"/kube/trait",permalink:"/zh/docs/kube/trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/kube/trait.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Defining Components with Raw Template",permalink:"/zh/docs/kube/component"},next:{title:"Defining Traits",permalink:"/zh/docs/cue/trait"}},l=[{value:"Verify",id:"verify",children:[]},{value:"Update an Application",id:"update-an-application",children:[]}],i={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"In this sample, we will attach two traits,\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler"),"\nand\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/kube-module/virtual-group-td.yaml"},"virtualgroup")," to a component"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),Object(p.b)("h2",{id:"verify"},"Verify"),Object(p.b)("p",null,"Deploy the application and verify traits work."),Object(p.b)("p",null,"Check the ",Object(p.b)("inlineCode",{parentName:"p"},"scaler")," trait."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNAME                            AGE\ndemo-podinfo-scaler-3x1sfcd34   2m\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n2\n")),Object(p.b)("p",null,"Check the ",Object(p.b)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp"\n}\n')),Object(p.b)("h2",{id:"update-an-application"},"Update an Application"),Object(p.b)("p",null,"After the application is deployed and workloads/traits are created successfully,\nyou can update the application, and corresponding changes will be applied to the\nworkload."),Object(p.b)("p",null,"Let's make several changes on the configuration of the sample application."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.1 # 1.14.0 => 1.14.1\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4 # 2 => 4\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),Object(p.b)("p",null,"Apply the new configuration and check the results after several seconds."),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"After updating, the workload instance name will be updated from ",Object(p.b)("inlineCode",{parentName:"p"},"mycomp-v1")," to ",Object(p.b)("inlineCode",{parentName:"p"},"mycomp-v2"),".")),Object(p.b)("p",null,"Check the new property value."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.1\"\n")),Object(p.b)("p",null,"Check the ",Object(p.b)("inlineCode",{parentName:"p"},"scaler")," trait."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n4\n")),Object(p.b)("p",null,"Check the ",Object(p.b)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp"\n}\n')))}s.isMDXComponent=!0}}]);