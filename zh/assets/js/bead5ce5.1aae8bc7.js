(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(199)),o={title:"Application CRD"},c={unversionedId:"application",id:"application",isDocsHomePage:!1,title:"Application CRD",description:"This documentation will walk through how to use Application object to define your apps with corresponding operational behaviors in declarative approach.",source:"@site/docs/application.md",slug:"/application",permalink:"/zh/docs/application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/application.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1616922082,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Overview",permalink:"/zh/docs/platform-engineers/overview"},next:{title:"Definition CRD",permalink:"/zh/docs/platform-engineers/definition-and-templates"}},p=[{value:"Example",id:"example",children:[]},{value:"Conventions and &quot;Standard Contract&quot;",id:"conventions-and-standard-contract",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This documentation will walk through how to use ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," object to define your apps with corresponding operational behaviors in declarative approach."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"The sample application below claimed a ",Object(i.b)("inlineCode",{parentName:"p"},"backend")," component with ",Object(i.b)("em",{parentName:"p"},"Worker")," workload type, and a ",Object(i.b)("inlineCode",{parentName:"p"},"frontend")," component with ",Object(i.b)("em",{parentName:"p"},"Web Service")," workload type."),Object(i.b)("p",null,"Moreover, the ",Object(i.b)("inlineCode",{parentName:"p"},"frontend")," component claimed ",Object(i.b)("inlineCode",{parentName:"p"},"sidecar")," and ",Object(i.b)("inlineCode",{parentName:"p"},"autoscaler")," traits which means the workload will be automatically injected with a ",Object(i.b)("inlineCode",{parentName:"p"},"fluentd")," sidecar and scale from 1-100 replicas triggered by CPU usage."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: autoscaler\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"type: worker")," means the specification of this component (claimed in following ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," object named ",Object(i.b)("inlineCode",{parentName:"p"},"worker")," as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n\n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n                        }]\n                    }\n                }\n            }\n        }\n        parameter: {\n            image: string\n            cmd?: [...string]\n        }\n')),Object(i.b)("p",null,"Hence, the ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section of ",Object(i.b)("inlineCode",{parentName:"p"},"backend")," only supports two parameters: ",Object(i.b)("inlineCode",{parentName:"p"},"image")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cmd"),", this is enforced by the ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," list of the ",Object(i.b)("inlineCode",{parentName:"p"},".spec.template")," field of the definition."),Object(i.b)("p",null,"The similar extensible abstraction mechanism also applies to traits. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"name: autoscaler")," in ",Object(i.b)("inlineCode",{parentName:"p"},"frontend")," means its trait specification (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",Object(i.b)("inlineCode",{parentName:"p"},"TraitDefinition")," object named ",Object(i.b)("inlineCode",{parentName:"p"},"autoscaler")," as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s HPA for Deployment"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n            apiVersion: "autoscaling/v2beta2"\n            kind:       "HorizontalPodAutoscaler"\n            metadata: name: context.name\n            spec: {\n                scaleTargetRef: {\n                    apiVersion: "apps/v1"\n                    kind:       "Deployment"\n                    name:       context.name\n                }\n                minReplicas: parameter.min\n                maxReplicas: parameter.max\n                metrics: [{\n                    type: "Resource"\n                    resource: {\n                        name: "cpu"\n                        target: {\n                            type:               "Utilization"\n                            averageUtilization: parameter.cpuUtil\n                        }\n                    }\n                }]\n            }\n        }\n        parameter: {\n            min:     *1 | int\n            max:     *10 | int\n            cpuUtil: *50 | int\n        }\n')),Object(i.b)("p",null,"All the definition objects are expected to be defined and installed by platform team. The end users will only focus on ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," resource."),Object(i.b)("h2",{id:"conventions-and-standard-contract"},'Conventions and "Standard Contract"'),Object(i.b)("p",null,"After the ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),' resource is applied to Kubernetes cluster, the KubeVela runtime will generate and manage the underlying resources instances following below "standard contract" and conventions.'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Label"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"workload.oam.dev/type=<component definition name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(i.b)("inlineCode",{parentName:"td"},"ComponentDefinition"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"trait.oam.dev/type=<trait definition name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",Object(i.b)("inlineCode",{parentName:"td"},"TraitDefinition"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"app.oam.dev/name=<app name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of the application it belongs to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"app.oam.dev/component=<component name>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of the component it belongs to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"trait.oam.dev/resource=<name of trait resource instance>")),Object(i.b)("td",{parentName:"tr",align:"center"},"The name of trait resource instance")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TBD: the revision names and labels for resource instances are currently work in progress.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"TBD: a demo for kubectl apply above Application CR and show full detailed underlying resources.")))}b.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=b(t),s=a,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||i;return t?r.a.createElement(u,c(c({ref:n},l),{},{components:t})):r.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);