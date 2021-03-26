(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return p})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),i=(a(0),a(263)),o={title:"Learning CUE"},l={unversionedId:"platform-builder-guide/using-cue/basic",id:"platform-builder-guide/using-cue/basic",isDocsHomePage:!1,title:"Learning CUE",description:"This document will explain how to use CUE to encapsulate a given capability in Kubernetes and make it available to end users to consume in Application CRD. Please make sure you have already learned about Application custom resource before reading the following guide.",source:"@site/docs/platform-builder-guide/using-cue/basic.md",slug:"/platform-builder-guide/using-cue/basic",permalink:"/docs/platform-builder-guide/using-cue/basic",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-builder-guide/using-cue/basic.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Definition CRD",permalink:"/docs/platform-builder-guide/design-abstraction/definition-and-templates"},next:{title:"Defining Workload Types",permalink:"/docs/platform-builder-guide/using-cue/workload-type"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Parameter and Template",id:"parameter-and-template",children:[]},{value:"CUE Template Step by Step",id:"cue-template-step-by-step",children:[]},{value:"Advanced CUE Templating",id:"advanced-cue-templating",children:[{value:"Structural Parameter",id:"structural-parameter",children:[]},{value:"Conditional Parameter",id:"conditional-parameter",children:[]},{value:"Optional and Default Value",id:"optional-and-default-value",children:[]},{value:"Loop",id:"loop",children:[]},{value:"Import CUE Internal Packages",id:"import-cue-internal-packages",children:[]},{value:"Import Kube Package",id:"import-kube-package",children:[]}]}],c={toc:p};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document will explain how to use ",Object(i.b)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," to encapsulate a given capability in Kubernetes and make it available to end users to consume in ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," CRD. Please make sure you have already learned about ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," custom resource before reading the following guide. "),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The reasons for KubeVela supports CUE as first class templating solution can be concluded as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CUE is designed for large scale configuration.")," CUE has the ability to understand a\nconfiguration worked on by engineers across a whole company and to safely change a value that modifies thousands of objects in a configuration. This aligns very well with KubeVela's original goal to define and ship production level applications at web scale."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CUE supports first-class code generation and automation.")," CUE can integrate with existing tools and workflows naturally while other tools would have to build complex custom solutions. For example, generate OpenAPI schemas wigh Go code. This is how KubeVela build developer tools and GUI interfaces based on the CUE templates."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CUE integrates very well with Go."),"\nKubeVela is built with GO just like most projects in Kubernetes system. CUE is also implemented in and exposes a rich API in Go. KubeVela integrates with CUE as its core library and works as a Kubernetes controller. With the help of CUE, KubeVela can easily handle data constraint problems.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Pleas also check ",Object(i.b)("a",{parentName:"p",href:"https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/"},"The Configuration Complexity Curse")," and ",Object(i.b)("a",{parentName:"p",href:"https://cuelang.org/docs/concepts/logic/"},"The Logic of CUE")," for more details.")),Object(i.b)("h2",{id:"parameter-and-template"},"Parameter and Template"),Object(i.b)("p",null,"A very simple ",Object(i.b)("inlineCode",{parentName:"p"},"WorkloadDefinition")," is like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nmetadata:\n  name: mydeploy\nspec:\n  definitionRef:\n    name: deployments.apps\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            name:  string\n            image: string\n        }\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": parameter.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": parameter.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  parameter.name\n                            image: parameter.image\n                        }]\n                    }\n                }\n            }\n        }\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"template")," field in this definition is a CUE module, it defines two keywords for KubeVela to build the application abstraction:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"parameter")," defines the input parameters from end user, i.e. the configurable fields in the abstraction."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"output")," defines the template for the abstraction. ")),Object(i.b)("h2",{id:"cue-template-step-by-step"},"CUE Template Step by Step"),Object(i.b)("p",null,"Let's say as the platform team, we only want to allow end user configure ",Object(i.b)("inlineCode",{parentName:"p"},"image")," and ",Object(i.b)("inlineCode",{parentName:"p"},"name")," fields in the ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," abstraction, and automatically generate all rest of the fields. How can we use CUE to achieve this?"),Object(i.b)("p",null,"We can start from the final resource we envision the platform will generate based on user inputs, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmeadata:\n  name: mytest # user inputs\nspec:\n  template:\n    spec:\n      containers:\n      - name: mytest # user inputs\n        env:\n        - name: a\n          value: b\n        image: nginx:v1 # user inputs\n    metadata:\n      labels:\n        app.oam.dev/component: mytest # generate by user inputs\n  selector:\n    matchLabels:\n      app.oam.dev/component: mytest # generate by user inputs\n")),Object(i.b)("p",null,"Then we can just convert this YAML to JSON and put the whole JSON object into the ",Object(i.b)("inlineCode",{parentName:"p"},"output")," keyword field:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},'output: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    metadata: name: "mytest"\n    spec: {\n        selector: matchLabels: {\n            "app.oam.dev/component": "mytest"\n        }\n        template: {\n            metadata: labels: {\n                "app.oam.dev/component": "mytest"\n            }\n            spec: {\n                containers: [{\n                    name:  "mytest"\n                    image: "nginx:v1"\n                    env: [{name:"a",value:"b"}]\n                }]\n            }\n        }\n    }\n}\n')),Object(i.b)("p",null,"Since CUE as a superset of JSON, we can use:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"C style comments,"),Object(i.b)("li",{parentName:"ul"},"quotes may be omitted from field names without special characters,"),Object(i.b)("li",{parentName:"ul"},"commas at the end of fields are optional,"),Object(i.b)("li",{parentName:"ul"},"comma after last element in list is allowed,"),Object(i.b)("li",{parentName:"ul"},"outer curly braces are optional.")),Object(i.b)("p",null,"After that, we can then add ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," keyword, and use it as a variable reference, this is the very basic CUE feature for templating."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},'parameter: {\n    name: string\n    image: string\n}\noutput: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n        selector: matchLabels: {\n            "app.oam.dev/component": parameter.name\n        }\n        template: {\n            metadata: labels: {\n                "app.oam.dev/component": parameter.name\n            }\n            spec: {\n                containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }\n        }\n    }\n}\n')),Object(i.b)("p",null,"Finally, you can put the above CUE module in the ",Object(i.b)("inlineCode",{parentName:"p"},"template")," field of ",Object(i.b)("inlineCode",{parentName:"p"},"WorkloadDefinition")," object and give it a name. Then end users can now author ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," resource reference this definition as workload type and only have ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"image")," as configurable parameters."),Object(i.b)("h2",{id:"advanced-cue-templating"},"Advanced CUE Templating"),Object(i.b)("p",null,"In this section, we will introduce advanced CUE templating features supports in KubeVela.  "),Object(i.b)("h3",{id:"structural-parameter"},"Structural Parameter"),Object(i.b)("p",null,"This is the most commonly used feature. It enables us to expose complex data structure for end users. For example, environment variable list."),Object(i.b)("p",null,"A simple guide is as below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Define a type in the CUE template, it includes a struct (",Object(i.b)("inlineCode",{parentName:"p"},"other"),"), a string and an integer."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"#Config: {\n   name:  string\n   value: int\n   other: {\n     key: string\n     value: string\n   }\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," section, reference above type and define it as ",Object(i.b)("inlineCode",{parentName:"p"},"[...#Config]"),". Then it can accept inputs from end users as an array list."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"parameter: {\n   name: string\n   image: string\n   configSingle: #Config\n   config: [...#Config] # array list parameter\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"output")," section, simply do templating as other parameters."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"output: {\n   ...\n         spec: {\n             containers: [{\n                 name:  parameter.name\n                 image: parameter.image\n                 env: parameter.config\n             }]\n         }\n    ...\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"As long as you install a workload definition object (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"mydeploy"),") with above template in the system, a new field ",Object(i.b)("inlineCode",{parentName:"p"},"config")," will be available to use like below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: mydeploy\n      settings:\n        image: crccheck/hello-world\n        name: mysvc\n        config: # a complex parameter\n         - name: a\n           value: 1\n           other:\n             key: mykey\n             value: myvalue\n")))),Object(i.b)("h3",{id:"conditional-parameter"},"Conditional Parameter"),Object(i.b)("p",null,"Conditional parameter can be used to do ",Object(i.b)("inlineCode",{parentName:"p"},"if..else")," logic in template."),Object(i.b)("p",null,"Below is an example that when ",Object(i.b)("inlineCode",{parentName:"p"},"useENV=true"),", it will render env section, otherwise, it will not."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'parameter: {\n    name:   string\n    image:  string\n    useENV: bool\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.useENV == true {\n                env: [{name: "my-env", value: "my-value"}]\n            }\n        }]\n    }\n    ...\n}\n')),Object(i.b)("h3",{id:"optional-and-default-value"},"Optional and Default Value"),Object(i.b)("p",null,"Optional parameter can be skipped, that usually works together with conditional logic. "),Object(i.b)("p",null,"Specifically, if some field does not exit, the CUE grammar is ",Object(i.b)("inlineCode",{parentName:"p"},"if _variable_ != _|_"),", the example is like below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"parameter: {\n    name: string\n    image: string\n    config?: [...#Config]\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.config != _|_ {\n                config: parameter.config\n            }\n        }]\n    }\n    ...\n}\n")),Object(i.b)("p",null,"Default Value is marked with a ",Object(i.b)("inlineCode",{parentName:"p"},"*")," prefix. It's used like "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'parameter: {\n    name: string\n    image: *"nginx:v1" | string\n    port: *80 | int\n    number: *123.4 | float\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n        }]\n    }\n    ...\n}\n')),Object(i.b)("p",null,"So if a parameter field is neither a parameter with default value nor a conditional field, it's a required value."),Object(i.b)("h3",{id:"loop"},"Loop"),Object(i.b)("h4",{id:"loop-for-map"},"Loop for Map"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [string]: string\n}\noutput: {\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for k, v in parameter.env {\n                    name:  k\n                    value: v\n                },\n            ]\n        }]\n    }\n}\n")),Object(i.b)("h4",{id:"loop-for-slice"},"Loop for Slice"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [...{name:string,value:string}]\n}\noutput: {\n  ...\n     spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for _, v in parameter.env {\n                    name:  v.name\n                    value: v.value\n                },\n            ]\n        }]\n    }\n}\n")),Object(i.b)("h3",{id:"import-cue-internal-packages"},"Import CUE Internal Packages"),Object(i.b)("p",null,"CUE has many ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/cuelang.org/go@v0.2.2/pkg"},"internal packages")," which also can be used in KubeVela."),Object(i.b)("p",null,"Below is an example that use ",Object(i.b)("inlineCode",{parentName:"p"},"strings.Join")," to ",Object(i.b)("inlineCode",{parentName:"p"},"concat")," string list to one string. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},'import ("strings")\n\nparameter: {\n    outputs: [{ip: "1.1.1.1", hostname: "xxx.com"}, {ip: "2.2.2.2", hostname: "yyy.com"}]\n}\noutput: {\n    spec: {\n        if len(parameter.outputs) > 0 {\n            _x: [ for _, v in parameter.outputs {\n                "\\(v.ip) \\(v.hostname)"\n            }]\n            message: "Visiting URL: " + strings.Join(_x, "")\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"import-kube-package"},"Import Kube Package"),Object(i.b)("p",null,"KubeVela automatically generates all K8s resources as internal packages by reading K8s openapi from the\ninstalled K8s cluster."),Object(i.b)("p",null,"You can use these packages with the format ",Object(i.b)("inlineCode",{parentName:"p"},"kube/<apiVersion>")," in CUE Template of KubeVela just like the same way\nwith the CUE internal packages."),Object(i.b)("p",null,"For example, ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment")," can be used as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "kube/apps/v1"\n)\n\nparameter: {\n    name:  string\n}\n\noutput: apps.#Deployment\noutput: {\n    metadata: name: parameter.name\n}\n')),Object(i.b)("p",null,"Service can be used as (import package with an alias is not necessary):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},'import ("kube/v1")\n\noutput: v1.#Service\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n    spec: type: "ClusterIP",\n}\n\nparameter: {\n    name:  "myapp"\n}\n')),Object(i.b)("p",null,"Even the installed CRD works:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'import (\n  oam  "kube/core.oam.dev/v1alpha2"\n)\n\noutput: oam.#Application\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n}\n\nparameter: {\n    name:  "myapp"\n}\n')))}s.isMDXComponent=!0},263:function(e,n,a){"use strict";a.d(n,"a",(function(){return m})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),b=t,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return a?r.a.createElement(d,l(l({ref:n},c),{},{components:a})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);