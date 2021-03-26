(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(263)),o={title:"Auto-generated Schema"},c={unversionedId:"platform-builder-guide/using-cue/openapi-v3-json-schema",id:"version-v0.3.5/platform-builder-guide/using-cue/openapi-v3-json-schema",isDocsHomePage:!1,title:"Auto-generated Schema",description:"Auto-generated OpenAPI v3 JSON Schema for Capability",source:"@site/versioned_docs/version-v0.3.5/platform-builder-guide/using-cue/openapi-v3-json-schema.md",slug:"/platform-builder-guide/using-cue/openapi-v3-json-schema",permalink:"/zh/docs/v0.3.5/platform-builder-guide/using-cue/openapi-v3-json-schema",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/versioned_docs/version-v0.3.5/platform-builder-guide/using-cue/openapi-v3-json-schema.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v0.3.5/docs",previous:{title:"Advanced Features",permalink:"/zh/docs/v0.3.5/platform-builder-guide/using-cue/status"},next:{title:"Define Components",permalink:"/zh/docs/v0.3.5/platform-builder-guide/using-helm/component"}},s=[{value:"Auto-generated OpenAPI v3 JSON Schema for Capability",id:"auto-generated-openapi-v3-json-schema-for-capability",children:[]},{value:"Why?",id:"why",children:[]},{value:"How to use the generated JSON Schema of definition",id:"how-to-use-the-generated-json-schema-of-definition",children:[]}],p={toc:s};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"auto-generated-openapi-v3-json-schema-for-capability"},"Auto-generated OpenAPI v3 JSON Schema for Capability"),Object(i.b)("p",null,"For any installed capability, KubeVela will automatically generate OpenAPI v3 JSON Schema for it."),Object(i.b)("h2",{id:"why"},"Why?"),Object(i.b)("p",null,"In definition objects, ",Object(i.b)("a",{parentName:"p",href:"https://kubevela.io/#/en/platform-engineers/workload-type?id=_4-define-template"},"parameter")," section are expected to be set by developers when creating ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," object.\nWhile there is another GUI way for developers to input all parameter fields by rendering ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," section to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#format"},"OpenAPI v3 Specification"),"."),Object(i.b)("p",null,"For example,  after you created a definition object, KubeVela will generate OpenAPI v3 JSON Schema from ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," of Workload Type ",Object(i.b)("a",{parentName:"p",href:"https://kubevela.io/#/en/developers/references/workload-types/webservice"},"webservice"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "properties": {\n        "cmd": {\n            "description": "Commands to run in the container",\n            "items": {\n                "type": "string"\n            },\n            "title": "cmd",\n            "type": "array"\n        },\n        "cpu": {\n            "description": "Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)",\n            "title": "cpu",\n            "type": "string"\n        },\n        "env": {\n            "description": "Define arguments by using environment variables",\n            "items": {\n                "properties": {\n                    "name": {\n                        "description": "Environment variable name",\n                        "title": "name",\n                        "type": "string"\n                    },\n                    "value": {\n                        "description": "The value of the environment variable",\n                        "title": "value",\n                        "type": "string"\n                    },\n                    "valueFrom": {\n                        "description": "Specifies a source the value of this var should come from",\n                        "properties": {\n                            "secretKeyRef": {\n                                "description": "Selects a key of a secret in the pod\'s namespace",\n                                "properties": {\n                                    "key": {\n                                        "description": "The key of the secret to select from. Must be a valid secret key",\n                                        "title": "key",\n                                        "type": "string"\n                                    },\n                                    "name": {\n                                        "description": "The name of the secret in the pod\'s namespace to select from",\n                                        "title": "name",\n                                        "type": "string"\n                                    }\n                                },\n                                "required": ["name", "key"],\n                                "title": "secretKeyRef",\n                                "type": "object"\n                            }\n                        },\n                        "required": ["secretKeyRef"],\n                        "title": "valueFrom",\n                        "type": "object"\n                    }\n                },\n                "required": ["name"],\n                "type": "object"\n            },\n            "title": "env",\n            "type": "array"\n        },\n        "image": {\n            "description": "Which image would you like to use for your service",\n            "title": "image",\n            "type": "string"\n        },\n        "port": {\n            "default": 80,\n            "description": "Which port do you want customer traffic sent to",\n            "title": "port",\n            "type": "integer"\n        }\n    },\n    "required": ["image", "port"],\n    "type": "object"\n}\n')),Object(i.b)("p",null,"You can render the schema by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/alibaba/form-render"},"form-render")," or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"React JSON Schema form"),". A web form can be as below."),Object(i.b)("p",null,Object(i.b)("img",{src:n(358).default})),Object(i.b)("h2",{id:"how-to-use-the-generated-json-schema-of-definition"},"How to use the generated JSON Schema of definition"),Object(i.b)("p",null,"When a platform builder applies a WorkloadDefinition or TraitDefinition, a ConfigMap will be created in a namespace same\nas the definition (by default it will be in ",Object(i.b)("inlineCode",{parentName:"p"},"vela-system")," namespace) and labeled with ",Object(i.b)("inlineCode",{parentName:"p"},"definition.oam.dev=schema"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cm -n vela-system -l definition.oam.dev=schema\nNAME                DATA   AGE\nschema-ingress      1      19s\nschema-scaler       1      19s\nschema-task         1      19s\nschema-webservice   1      19s\nschema-worker       1      20s\n")),Object(i.b)("p",null,"The ConfigMap name is in the format ",Object(i.b)("inlineCode",{parentName:"p"},"schema-$definitionName"),", and the key of ConfigMap data is ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-v3-json-schema"),".\nFor example, we can use the following command to get the JSON Schema of ",Object(i.b)("inlineCode",{parentName:"p"},"webservice"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get cm schema-webservice -n vela-system -o yaml\napiVersion: v1\ndata:\n  openapi-v3-json-schema: \'{"properties":{"cmd":{"description":"Commands to run in\n    the container","items":{"type":"string"},"title":"cmd","type":"array"},"cpu":{"description":"Number\n    of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)","title":"cpu","type":"string"},"env":{"description":"Define\n    arguments by using environment variables","items":{"properties":{"name":{"description":"Environment\n    variable name","title":"name","type":"string"},"value":{"description":"The value\n    of the environment variable","title":"value","type":"string"},"valueFrom":{"description":"Specifies\n    a source the value of this var should come from","properties":{"secretKeyRef":{"description":"Selects\n    a key of a secret in the pod\'\'s namespace","properties":{"key":{"description":"The\n    key of the secret to select from. Must be a valid secret key","title":"key","type":"string"},"name":{"description":"The\n    name of the secret in the pod\'\'s namespace to select from","title":"name","type":"string"}},"required":["name","key"],"title":"secretKeyRef","type":"object"}},"required":["secretKeyRef"],"title":"valueFrom","type":"object"}},"required":["name"],"type":"object"},"title":"env","type":"array"},"image":{"description":"Which\n    image would you like to use for your service","title":"image","type":"string"},"port":{"default":80,"description":"Which\n    port do you want customer traffic sent to","title":"port","type":"integer"}},"required":["image","port"],"type":"object"}\'\nkind: ConfigMap\nmetadata:\n  name: schema-webservice\n  namespace: vela-system\n')),Object(i.b)("p",null,"If you adopt ",Object(i.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/references/apiserver"},"KubeVela API Server"),", you can get the\nschema by API ",Object(i.b)("a",{parentName:"p",href:"https://kubevela.io/en/developers/references/restful-api/index.html#api-Definitions-getDefinition"},"/api/definitions/{definitionName}"),"."))}l.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/json-schema-render-example-531b0a75ce10cf51ce46d9c48c6cdb58.jpg"}}]);