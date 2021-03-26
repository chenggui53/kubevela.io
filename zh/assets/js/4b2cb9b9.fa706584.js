(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(263)),o={title:"Known Limitations"},l={unversionedId:"platform-builder-guide/using-helm/known-issues",id:"platform-builder-guide/using-helm/known-issues",isDocsHomePage:!1,title:"Known Limitations",description:"Limitations and Known Issues",source:"@site/docs/platform-builder-guide/using-helm/known-issues.md",slug:"/platform-builder-guide/using-helm/known-issues",permalink:"/zh/docs/platform-builder-guide/using-helm/known-issues",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-builder-guide/using-helm/known-issues.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Attach Traits",permalink:"/zh/docs/platform-builder-guide/using-helm/trait"},next:{title:"Overview",permalink:"/zh/docs/developer-experience-guide/appfile/quick-start-appfile"}},c=[{value:"Limitations and Known Issues",id:"limitations-and-known-issues",children:[]},{value:"Only one main workload in the chart",id:"only-one-main-workload-in-the-chart",children:[]},{value:"Upgrade the application",id:"upgrade-the-application",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"limitations-and-known-issues"},"Limitations and Known Issues"),Object(i.b)("p",null,"Here are some known issues for using Helm chart as application component. Pleas note most of these restrictions will be fixed over time."),Object(i.b)("h2",{id:"only-one-main-workload-in-the-chart"},"Only one main workload in the chart"),Object(i.b)("p",null,"The chart must have exactly one workload being regarded as the ",Object(i.b)("strong",{parentName:"p"},"main")," workload. In this context, ",Object(i.b)("inlineCode",{parentName:"p"},"main workload")," means the workload that will be tracked by KubeVela controllers, applied with traits and added into scopes. Only the ",Object(i.b)("inlineCode",{parentName:"p"},"main workload")," will benefit from KubeVela with rollout, revision, traffic management, etc."),Object(i.b)("p",null,"To tell KubeVela which one is the main workload, you must follow these two steps:"),Object(i.b)("h4",{id:"1-declare-main-workloads-resource-definition"},"1. Declare main workload's resource definition"),Object(i.b)("p",null,"The field ",Object(i.b)("inlineCode",{parentName:"p"},".spec.definitionRef")," in ",Object(i.b)("inlineCode",{parentName:"p"},"WorkloadDefinition")," is used to record the\nresource definition of the main workload.\nThe name should be in the format: ",Object(i.b)("inlineCode",{parentName:"p"},"<resource>.<group>"),". "),Object(i.b)("p",null,"For example, the Deployment resource should be defined as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\n...\nspec:\n  definitionRef:\n    name: deployments.apps\n    version: v1\n")),Object(i.b)("p",null,"The CloneSet workload resource should be defined as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  definitionRef:\n    name: clonesets.apps.kruise.io\n    version: v1alpha1\n")),Object(i.b)("h4",{id:"2-qualified-full-name-of-the-main-workload"},"2. Qualified full name of the main workload"),Object(i.b)("p",null,"The name of the main workload should be templated with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/helm/helm/blob/543364fba59b0c7c30e38ebe0f73680db895abb6/pkg/chartutil/create.go#L415"},"a default fully\nqualified app\nname"),". DO NOT assign any value to ",Object(i.b)("inlineCode",{parentName:"p"},".Values.fullnameOverride"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Also, Helm highly recommend that new charts are created via ",Object(i.b)("inlineCode",{parentName:"p"},"$ helm create")," command so the template names are automatically defined as per this best practice.")),Object(i.b)("h2",{id:"upgrade-the-application"},"Upgrade the application"),Object(i.b)("h4",{id:"rollout-strategy"},"Rollout strategy"),Object(i.b)("p",null,"For now, Helm based components cannot benefit from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/rollout-design.md#applicationdeployment-workflow"},"application level rollout strategy"),"."),Object(i.b)("p",null,"So currently in-place upgrade by modifying the application specification directly is the only way to upgrade the Helm based components, no advanced rollout strategy can be assigned to it. Please check ",Object(i.b)("a",{parentName:"p",href:"./trait#update-an-applicatiion"},"this sample"),"."),Object(i.b)("h4",{id:"changing-settings-will-trigger-helm-release-upgrade"},"Changing ",Object(i.b)("inlineCode",{parentName:"h4"},"settings")," will trigger Helm release upgrade"),Object(i.b)("p",null,"For Helm based component, ",Object(i.b)("inlineCode",{parentName:"p"},".spec.components.settings")," is the way user override the default values of the chart, so any changes applied to ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," will trigger a Helm release upgrade."),Object(i.b)("p",null,"This process is handled by Helm and ",Object(i.b)("inlineCode",{parentName:"p"},"Flux2/helm-controller"),", hence you can define remediation\nstrategies in the schematic according to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md#upgraderemediation"},"fluxcd/helmrelease API\ndoc"),"\nand ",Object(i.b)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/components/helm/helmreleases/#configuring-failure-remediation"},"spec doc"),"\nin case failure happens during this upgrade."),Object(i.b)("p",null,"For example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nmetadata:\n  name: webapp-chart\nspec:\n...\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n        upgrade:\n          remediation:\n            retries: 3 \n            remediationStrategy: rollback\n      repository:\n        url: "http://oam.dev/catalog/"\n\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: currently, it's hard to get helpful information of a living Helm release to figure out what happened if upgrading failed. We will enhance the observability to help users track the situation of Helm release in application level.")),Object(i.b)("h4",{id:"changing-traits-may-make-pods-restart"},"Changing ",Object(i.b)("inlineCode",{parentName:"h4"},"traits")," may make Pods restart"),Object(i.b)("p",null,"Traits work on Helm based component in the same way as CUE based component, i.e. changes on traits may impact the main workload instance. Hence, the Pods belonging to this workload instance may restart twice during upgrade, one is by the Helm upgrade, and the other one is caused by traits."))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);