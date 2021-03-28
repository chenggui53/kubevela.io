(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,l(l({ref:t},p),{},{components:n})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(195)),r={title:"Definition CRD"},l={unversionedId:"platform-engineers/definition-and-templates",id:"platform-engineers/definition-and-templates",isDocsHomePage:!1,title:"Definition CRD",description:"This documentation explains how to register and manage available components and traits in your platform with",source:"@site/docs/platform-engineers/definition-and-templates.md",slug:"/platform-engineers/definition-and-templates",permalink:"/docs/platform-engineers/definition-and-templates",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/definition-and-templates.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1616922082,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Application CRD",permalink:"/docs/application"},next:{title:"Generate Forms from Definitions",permalink:"/docs/platform-engineers/openapi-v3-json-schema"}},c=[{value:"Overview",id:"overview",children:[{value:"Capability Indicator",id:"capability-indicator",children:[]},{value:"Interoperability Fields",id:"interoperability-fields",children:[]},{value:"Capability Encapsulation and Abstraction",id:"capability-encapsulation-and-abstraction",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This documentation explains how to register and manage available ",Object(o.b)("em",{parentName:"p"},"components")," and ",Object(o.b)("em",{parentName:"p"},"traits")," in your platform with\n",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefinition"),', so end users could instantiate and "assemble" them into an ',Object(o.b)("inlineCode",{parentName:"p"},"Application"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"All definition objects are expected to be maintained and installed by platform team, think them as ",Object(o.b)("em",{parentName:"p"},"capability providers")," in your platform.")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Essentially, a definition object in KubeVela is consisted by three section:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Capability Indicator")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ComponentDefinition")," uses ",Object(o.b)("inlineCode",{parentName:"li"},"spec.workload")," to indicate the workload type of this component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TraitDefinition")," uses ",Object(o.b)("inlineCode",{parentName:"li"},"spec.definitionRef")," to indicate the provider of this trait."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Interoperability Fields"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"they are for the platform to ensure a trait can work with given workload type. Hence only ",Object(o.b)("inlineCode",{parentName:"li"},"TraitDefinition")," has these fields."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Capability Encapsulation and Abstraction")," defined by ",Object(o.b)("inlineCode",{parentName:"li"},"spec.schematic"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"this defines the ",Object(o.b)("strong",{parentName:"li"},"templating and parametering")," (i.e. encapsulation) of this capability.")))),Object(o.b)("p",null,"Hence, the basic structure of definition object is as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: XxxDefinition\nmetadata:\n  name: <definition name>\nspec:\n  ...\n  schematic:\n    cue:\n      # cue template ...\n    helm:\n      # Helm chart ...\n  # ... interoperability fields\n")),Object(o.b)("p",null,"Let's explain these fields one by one."),Object(o.b)("h3",{id:"capability-indicator"},"Capability Indicator"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),", the indicator of workload type is declared as ",Object(o.b)("inlineCode",{parentName:"p"},"spec.workload"),"."),Object(o.b)("p",null,"Below is a definition for ",Object(o.b)("em",{parentName:"p"},"Web Service")," in KubeVela: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n    ...        \n')),Object(o.b)("p",null,"In above example, it claims to leverage Kubernetes Deployment (",Object(o.b)("inlineCode",{parentName:"p"},"apiVersion: apps/v1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"kind: Deployment"),") as the workload type for component."),Object(o.b)("h3",{id:"interoperability-fields"},"Interoperability Fields"),Object(o.b)("p",null,"The interoperability fields are ",Object(o.b)("strong",{parentName:"p"},"trait only"),". An overall view of interoperability fields in a ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefinition")," is show as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name:  ingress\nspec:\n  appliesToWorkloads: \n    - deployments.apps\n    - webservice\n  conflictsWith: \n    - service\n  workloadRefPath: spec.wrokloadRef \n")),Object(o.b)("p",null,"Let's explain them in detail."),Object(o.b)("h4",{id:"specappliestoworkloads"},Object(o.b)("inlineCode",{parentName:"h4"},".spec.appliesToWorkloads")),Object(o.b)("p",null,"This field defines the constraints that what kinds of workloads this trait is allowed to apply to."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It accepts an array of string as value."),Object(o.b)("li",{parentName:"ul"},"Each item in the array refers to one or a group of workload types to which this trait is allowded to apply.")),Object(o.b)("p",null,"There are four approaches to denote one or a group of workload types."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ComponentDefinition")," name, e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"webservice"),", ",Object(o.b)("inlineCode",{parentName:"li"},"worker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference (CRD name), e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"deployments.apps")),Object(o.b)("li",{parentName:"ul"},"Resource group of ",Object(o.b)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference prefixed with ",Object(o.b)("inlineCode",{parentName:"li"},"*."),", e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"*.apps"),", ",Object(o.b)("inlineCode",{parentName:"li"},"*.oam.dev"),". This means the trait is allowded to apply to any workloads in this group."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"*")," means this trait is allowded to apply to any workloads")),Object(o.b)("p",null,"If this field is omitted, it means this trait is allowded to apply to any workload types."),Object(o.b)("p",null,"KubeVela will raise an error if a trait is applied to a workload which is NOT included in the ",Object(o.b)("inlineCode",{parentName:"p"},"appliesToWorkloads"),"."),Object(o.b)("h5",{id:"specconflictswith"},Object(o.b)("inlineCode",{parentName:"h5"},".spec.conflictsWith")),Object(o.b)("p",null,"This field defines that constraints that what kinds of traits are conflicting with this trait, if they are applied to the same workload."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It accepts an array of string as value. "),Object(o.b)("li",{parentName:"ul"},"Each item in the array refers to one or a group of traits.")),Object(o.b)("p",null,"There are four approaches to denote one or a group of workload types."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TraitDefinition")," name, e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"ingress")),Object(o.b)("li",{parentName:"ul"},"Resource group of ",Object(o.b)("inlineCode",{parentName:"li"},"TraitDefinition")," definition reference prefixed with ",Object(o.b)("inlineCode",{parentName:"li"},"*."),", e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"*.networking.k8s.io"),". This means the trait is conflicting with any traits in this group."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"*")," means this trait is conflicting with any other trait.")),Object(o.b)("p",null,"If this field is omitted, it means this trait is NOT conflicting with any traits."),Object(o.b)("h5",{id:"specworkloadrefpath"},Object(o.b)("inlineCode",{parentName:"h5"},".spec.workloadRefPath")),Object(o.b)("p",null,"This field defines the field path of the trait which is used to store the reference of the workload to which the trait is applied."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It accepts a string as value, e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"spec.workloadRef"),".  ")),Object(o.b)("p",null,"If this field is set, KubeVela core will automatically fill the workload reference into target field of the trait. Then the trait controller can get the workload reference from the trait latter. So this field usually accompanies with the traits whose controllers relying on the workload reference at runtime. "),Object(o.b)("p",null,"Please check ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," trait as a demonstration of how to set this field."),Object(o.b)("h3",{id:"capability-encapsulation-and-abstraction"},"Capability Encapsulation and Abstraction"),Object(o.b)("p",null,"The templating and parameterizing of given capability are defined in ",Object(o.b)("inlineCode",{parentName:"p"},"spec.schematic")," field. For example, below is the full definition of ",Object(o.b)("em",{parentName:"p"},"Web Service")," type in KubeVela:"),Object(o.b)("details",null,Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n        \n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n        \n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n        \n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n        \n                            if parameter["env"] != _|_ {\n                                env: parameter.env\n                            }\n        \n                            if context["config"] != _|_ {\n                                env: context.config\n                            }\n        \n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n        \n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n        \n            // +usage=Commands to run in the container\n            cmd?: [...string]\n        \n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n            // +usage=Define arguments by using environment variables\n            env?: [...{\n                // +usage=Environment variable name\n                name: string\n                // +usage=The value of the environment variable\n                value?: string\n                // +usage=Specifies a source the value of this var should come from\n                valueFrom?: {\n                    // +usage=Selects a key of a secret in the pod\'s namespace\n                    secretKeyRef: {\n                        // +usage=The name of the secret in the pod\'s namespace to select from\n                        name: string\n                        // +usage=The key of the secret to select from. Must be a valid secret key\n                        key: string\n                    }\n                }\n            }]\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }     \n'))),Object(o.b)("p",null,"The specification of ",Object(o.b)("inlineCode",{parentName:"p"},"schematic")," is explained in following CUE and Helm specific documentations."),Object(o.b)("p",null,"Also, the ",Object(o.b)("inlineCode",{parentName:"p"},"schematic")," filed enables you to render UI forms directly based on them, please check the ",Object(o.b)("a",{parentName:"p",href:"/docs/platform-engineers/openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how to."))}s.isMDXComponent=!0}}]);