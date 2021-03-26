(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),r=(t(0),t(263)),o={title:"Defining Traits"},p={unversionedId:"platform-builder-guide/using-cue/trait",id:"version-v0.3.5/platform-builder-guide/using-cue/trait",isDocsHomePage:!1,title:"Defining Traits",description:"In this section we will introduce how to define a Trait with CUE template.",source:"@site/versioned_docs/version-v0.3.5/platform-builder-guide/using-cue/trait.md",slug:"/platform-builder-guide/using-cue/trait",permalink:"/docs/v0.3.5/platform-builder-guide/using-cue/trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/versioned_docs/version-v0.3.5/platform-builder-guide/using-cue/trait.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v0.3.5/docs",previous:{title:"Defining Workload Types",permalink:"/docs/v0.3.5/platform-builder-guide/using-cue/workload-type"},next:{title:"Advanced Features",permalink:"/docs/v0.3.5/platform-builder-guide/using-cue/status"}},s=[{value:"Composition",id:"composition",children:[{value:"Generate Multiple Resources with Loop",id:"generate-multiple-resources-with-loop",children:[]}]},{value:"Patch Trait",id:"patch-trait",children:[{value:"Strategy Patch Trait",id:"strategy-patch-trait",children:[]},{value:"Patch The Trait",id:"patch-the-trait",children:[]}]},{value:"Processing Trait",id:"processing-trait",children:[]},{value:"Simple data passing",id:"simple-data-passing",children:[]},{value:"More Use Cases for Patch Trait",id:"more-use-cases-for-patch-trait",children:[{value:"Add Labels",id:"add-labels",children:[]},{value:"Add Annotations",id:"add-annotations",children:[]},{value:"Add Pod ENV",id:"add-pod-env",children:[]},{value:"Dynamically Pod Service Account",id:"dynamically-pod-service-account",children:[]},{value:"Add Init Container",id:"add-init-container",children:[]}]}],l={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section we will introduce how to define a Trait with CUE template."),Object(r.b)("h2",{id:"composition"},"Composition"),Object(r.b)("p",null,"Defining a ",Object(r.b)("em",{parentName:"p"},"Trait")," with CUE template is a bit different from ",Object(r.b)("em",{parentName:"p"},"Workload Type"),": a trait MUST use ",Object(r.b)("inlineCode",{parentName:"p"},"outputs")," keyword instead of ",Object(r.b)("inlineCode",{parentName:"p"},"output")," in template."),Object(r.b)("p",null,"With the help of CUE template, it is very nature to compose multiple Kubernetes resources in one trait.\nSimilarly, the format MUST be ",Object(r.b)("inlineCode",{parentName:"p"},"outputs:<unique-name>:<full template>"),"."),Object(r.b)("p",null,"Below is an example for ",Object(r.b)("inlineCode",{parentName:"p"},"ingress")," trait."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  extension:\n    template: |\n      parameter: {\n        domain: string\n        http: [string]: int\n      }\n\n      // trait template can have multiple outputs in one trait\n      outputs: service: {\n        apiVersion: "v1"\n        kind: "Service"\n        spec: {\n          selector:\n            app: context.name\n          ports: [\n            for k, v in parameter.http {\n              port: v\n              targetPort: v\n            }\n          ]\n        }\n      }\n\n      outputs: ingress: {\n        apiVersion: "networking.k8s.io/v1beta1"\n        kind: "Ingress"\n        metadata:\n          name: context.name\n        spec: {\n          rules: [{\n            host: parameter.domain\n            http: {\n              paths: [\n                for k, v in parameter.http {\n                  path: k\n                  backend: {\n                    serviceName: context.name\n                    servicePort: v\n                  }\n                }\n              ]\n            }\n          }]\n        }\n      }\n')),Object(r.b)("p",null,"It can be used in the application object like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      settings:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - name: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),Object(r.b)("h3",{id:"generate-multiple-resources-with-loop"},"Generate Multiple Resources with Loop"),Object(r.b)("p",null,"You can define the for-loop inside the ",Object(r.b)("inlineCode",{parentName:"p"},"outputs"),", the type of ",Object(r.b)("inlineCode",{parentName:"p"},"parameter")," field used in the for-loop must be a map. "),Object(r.b)("p",null,"Below is an example that will generate multiple Kubernetes Services in one trait:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name: expose\nspec:\n  extension:\n    template: |\n      parameter: {\n        http: [string]: int\n      }\n\n      outputs: {\n        for k, v in parameter.http {\n            "\\(k)": {\n                apiVersion: "v1"\n                kind:       "Service"\n                spec: {\n                    selector:\n                        app: context.name\n                    ports: [{\n                        port:       v\n                        targetPort: v\n                    }]\n                }\n            }\n        }\n      }\n')),Object(r.b)("p",null,"The usage of this trait could be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      settings:\n        ...\n      traits:\n        - name: expose\n          properties:\n            http:\n              myservice1: 8080\n              myservice2: 8081\n")),Object(r.b)("h2",{id:"patch-trait"},"Patch Trait"),Object(r.b)("p",null,"You could also use keyword ",Object(r.b)("inlineCode",{parentName:"p"},"patch")," to patch data to the component instance (before the resource applied) and claim this behavior as a trait."),Object(r.b)("p",null,"Below is an example for ",Object(r.b)("inlineCode",{parentName:"p"},"node-affinity")," trait:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "affinity specify node affinity and toleration"\n  name: node-affinity\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {\n        spec: template: spec: {\n            if parameter.affinity != _|_ {\n                affinity: nodeAffinity: requiredDuringSchedulingIgnoredDuringExecution: nodeSelectorTerms: [{\n                    matchExpressions: [\n                        for k, v in parameter.affinity {\n                            key:      k\n                            operator: "In"\n                            values:   v\n                        },\n                    ]}]\n            }\n            if parameter.tolerations != _|_ {\n                tolerations: [\n                    for k, v in parameter.tolerations {\n                        effect:   "NoSchedule"\n                        key:      k\n                        operator: "Equal"\n                        value:    v\n                    }]\n            }\n        }\n      }\n\n      parameter: {\n        affinity?: [string]: [...string]\n        tolerations?: [string]: string\n      }\n')),Object(r.b)("p",null,"You can use it like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      settings:\n        image: oamdev/testapp:v1\n      traits:\n        - name: "node-affinity"\n          properties:\n            affinity:\n              server-owner: ["owner1","owner2"]\n              resource-pool: ["pool1","pool2","pool3"]\n            tolerations:\n              resource-pool: "broken-pool1"\n              server-owner: "old-owner"\n')),Object(r.b)("p",null,"The patch trait above assumes the component instance have ",Object(r.b)("inlineCode",{parentName:"p"},"spec.template.spec.affinity")," schema. Hence we need to use it with the field ",Object(r.b)("inlineCode",{parentName:"p"},"appliesToWorkloads")," which can enforce the trait only to be used by these specified workload types."),Object(r.b)("p",null,"By default, the patch trait in KubeVela relies on the CUE ",Object(r.b)("inlineCode",{parentName:"p"},"merge")," operation. It has following known constraints:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Can not handle conflicts. For example, if a field already has a final value ",Object(r.b)("inlineCode",{parentName:"li"},"replicas=5"),", then the patch trait will conflict when patches ",Object(r.b)("inlineCode",{parentName:"li"},"replicas=1")," and fail. It only works when ",Object(r.b)("inlineCode",{parentName:"li"},"replica")," is not finalized before patch."),Object(r.b)("li",{parentName:"ul"},"Array list in the patch will be merged following the order of index. It can not handle the duplication of the array list members.")),Object(r.b)("h3",{id:"strategy-patch-trait"},"Strategy Patch Trait"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"strategy patch")," is a special patch logic for patching array list. This is supported ",Object(r.b)("strong",{parentName:"p"},"only")," in KubeVela (i.e. not a standard CUE feature)."),Object(r.b)("p",null,"In order to make it work, you need to use annotation ",Object(r.b)("inlineCode",{parentName:"p"},"//+patchKey=<key_name>")," in the template."),Object(r.b)("p",null,"With this annotation, merging logic of two array lists will not follow the CUE behavior. Instead, it will treat the list as object and use a strategy merge approach: if the value of the key name equal, then the patch data will merge into that, if no equal found, the patch will append into the array list."),Object(r.b)("p",null,"The example of strategy patch trait will like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {\n         // +patchKey=name\n         spec: template: spec: containers: [parameter]\n      }\n      parameter: {\n         name: string\n         image: string\n         command?: [...string]\n      }\n')),Object(r.b)("p",null,"The patchKey is ",Object(r.b)("inlineCode",{parentName:"p"},"name")," which represents the container name in this example. In this case, if the workload already has a container with the same name of this ",Object(r.b)("inlineCode",{parentName:"p"},"sidecar")," trait, it will be a merge operation. If the workload don't have the container with same name, it will be a sidecar container append into the ",Object(r.b)("inlineCode",{parentName:"p"},"spec.template.spec.containers")," array list."),Object(r.b)("h3",{id:"patch-the-trait"},"Patch The Trait"),Object(r.b)("p",null,"If patch and outputs both exist in one trait, the patch part will execute first and then the output object will be rendered out. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "service the app"\n  name: kservice\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {spec: template: metadata: labels: app: context.name}\n      outputs: service: {\n        apiVersion: "v1"\n        kind: "Service"\n        metadata: name: context.name\n        spec: {\n          selector:  app: context.name\n          ports: [\n            for k, v in parameter.http {\n              port: v\n              targetPort: v\n            }\n          ]\n        }\n      }\n      parameter: {\n        http: [string]: int\n      }\n')),Object(r.b)("h2",{id:"processing-trait"},"Processing Trait"),Object(r.b)("p",null,"A trait can also help you to do some processing job. Currently, we have supported http request."),Object(r.b)("p",null,"The keyword is ",Object(r.b)("inlineCode",{parentName:"p"},"processing"),", inside the ",Object(r.b)("inlineCode",{parentName:"p"},"processing"),", there are two keywords ",Object(r.b)("inlineCode",{parentName:"p"},"output")," and ",Object(r.b)("inlineCode",{parentName:"p"},"http"),"."),Object(r.b)("p",null,"You can define http request ",Object(r.b)("inlineCode",{parentName:"p"},"method"),", ",Object(r.b)("inlineCode",{parentName:"p"},"url"),", ",Object(r.b)("inlineCode",{parentName:"p"},"body"),", ",Object(r.b)("inlineCode",{parentName:"p"},"header")," and ",Object(r.b)("inlineCode",{parentName:"p"},"trailer")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"http")," section.\nKubeVela will send a request using this information, the requested server shall output a ",Object(r.b)("strong",{parentName:"p"},"json result"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"output")," section will used to match with the ",Object(r.b)("inlineCode",{parentName:"p"},"json result"),", correlate fields by name will be automatically filled into it.\nThen you can use the requested data from ",Object(r.b)("inlineCode",{parentName:"p"},"processing.output")," into ",Object(r.b)("inlineCode",{parentName:"p"},"patch")," or ",Object(r.b)("inlineCode",{parentName:"p"},"output/outputs"),"."),Object(r.b)("p",null,"Below is an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha1\nkind: TraitDefinition\nmetadata:\n  name: auth-service\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            serviceURL: string\n        }\n\n        processing: {\n            output: {\n                token?: string\n            }\n            // task shall output a json result and output will correlate fields by name.\n            http: {\n                method: *"GET" | string\n                url:    parameter.serviceURL\n                request: {\n                    body?: bytes\n                    header: {}\n                    trailer: {}\n                }\n            }\n        }\n\n        patch: {\n            data: token: processing.output.token\n        }\n')),Object(r.b)("h2",{id:"simple-data-passing"},"Simple data passing"),Object(r.b)("p",null,"The trait can use the data of workload output and outputs to fill itself."),Object(r.b)("p",null,"There are two keywords ",Object(r.b)("inlineCode",{parentName:"p"},"output")," and ",Object(r.b)("inlineCode",{parentName:"p"},"outputs")," in the rendering context.\nYou can use ",Object(r.b)("inlineCode",{parentName:"p"},"context.output")," refer to the workload object, and use ",Object(r.b)("inlineCode",{parentName:"p"},"context.outputs.<xx>")," refer to the trait object.\nplease make sure the trait resource name is unique, or the former data will be covered by the latter one."),Object(r.b)("p",null,"Below is an example"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"the main workload object(Deployment) in this example will render into the context.output before rendering traits."),Object(r.b)("li",{parentName:"ol"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"context.outputs.<xx>")," will keep all these rendered trait data and can be used in the traits after them.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nmetadata:\n  name: worker\nspec:\n  definitionRef:\n    name: deployments.apps\n  extension:\n    template: |\n      output: {\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n        spec: {\n            selector: matchLabels: {\n                "app.oam.dev/component": context.name\n            }\n    \n            template: {\n                metadata: labels: {\n                    "app.oam.dev/component": context.name\n                }\n                spec: {\n                    containers: [{\n                        name:  context.name\n                        image: parameter.image\n                        ports: [{containerPort: parameter.port}]\n                        envFrom: [{\n                            configMapRef: name: context.name + "game-config"\n                        }]\n                        if parameter["cmd"] != _|_ {\n                            command: parameter.cmd\n                        }\n                    }]\n                }\n            }\n        }\n      }\n\n      outputs: gameconfig: {\n            apiVersion: "v1"\n            kind:       "ConfigMap"\n            metadata: {\n                name: context.name + "game-config"\n            }\n            data: {\n                enemies: parameter.enemies\n                lives:   parameter.lives\n            }\n      }\n\n      parameter: {\n        // +usage=Which image would you like to use for your service\n        // +short=i\n        image: string\n        // +usage=Commands to run in the container\n        cmd?: [...string]\n        lives:   string\n        enemies: string\n        port: int\n      }\n\n---\napiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  extension:\n    template: |\n      parameter: {\n        domain: string\n        path: string\n        exposePort: int\n      }\n      // trait template can have multiple outputs in one trait\n      outputs: service: {\n        apiVersion: "v1"\n        kind: "Service"\n        spec: {\n          selector:\n            app: context.name\n          ports: [{\n              port: parameter.exposePort\n              targetPort: context.output.spec.template.spec.containers[0].ports[0].containerPort\n            }]\n        }\n      }\n      outputs: ingress: {\n          apiVersion: "networking.k8s.io/v1beta1"\n          kind: "Ingress"\n          metadata:\n            name: context.name\n            labels: config: context.outputs.gameconfig.data.enemies\n          spec: {\n            rules: [{\n              host: parameter.domain\n              http: {\n                paths: [{\n                    path: parameter.path\n                    backend: {\n                      serviceName: context.name\n                      servicePort: parameter.exposePort\n                    }\n                }]\n              }\n            }]\n          }\n      }\n')),Object(r.b)("h2",{id:"more-use-cases-for-patch-trait"},"More Use Cases for Patch Trait"),Object(r.b)("p",null,"Patch trait could be very powerful, here are some more advanced use cases."),Object(r.b)("h3",{id:"add-labels"},"Add Labels"),Object(r.b)("p",null,"For example, patch common label (virtual group) to the component workload."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Add virtual group labels"\n  name: virtualgroup\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {\n        spec: template: {\n            metadata: labels: {\n                if parameter.type == "namespace" {\n                    "app.namespace.virtual.group": parameter.group\n                }\n                if parameter.type == "cluster" {\n                    "app.cluster.virtual.group": parameter.group\n                }\n            }\n        }\n      }\n      parameter: {\n        group: *"default" | string\n        type:  *"namespace" | string\n      }\n')),Object(r.b)("p",null,"Then it could be used like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nspec:\n  ...\n      traits:\n        - name: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),Object(r.b)("p",null,"In this example, different type will use different label key."),Object(r.b)("h3",{id:"add-annotations"},"Add Annotations"),Object(r.b)("p",null,"Similar to common labels, you could also patch the component workload with annotations. The annotation value will be a JSON string."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Specify auto scale by annotation"\n  name: kautoscale\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      import "encoding/json"\n\n      patch: {\n        metadata: annotations: {\n            "my.custom.autoscale.annotation": json.Marshal({\n                "minReplicas": parameter.min\n                "maxReplicas": parameter.max\n            })\n        }\n      }\n      parameter: {\n        min: *1 | int\n        max: *3 | int\n      }\n')),Object(r.b)("h3",{id:"add-pod-env"},"Add Pod ENV"),Object(r.b)("p",null,"Inject some system environments into pod is also very common use case."),Object(r.b)("p",null,"The example could be like below, this case rely on strategy merge patch, so don't forget add ",Object(r.b)("inlineCode",{parentName:"p"},"+patchKey=name")," like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add env into your pods"\n  name: env\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {\n        spec: template: spec: {\n            // +patchKey=name\n            containers: [{\n                name: context.name\n                // +patchKey=name\n                env: [\n                    for k, v in parameter.env {\n                        name:  k\n                        value: v\n                    },\n                ]\n            }]\n        }\n      }\n\n      parameter: {\n        env: [string]: string\n      }\n')),Object(r.b)("h3",{id:"dynamically-pod-service-account"},"Dynamically Pod Service Account"),Object(r.b)("p",null,"In this example, the service account was dynamically requested from an authentication service and patched into the service."),Object(r.b)("p",null,"This example put uid token in http header, you can also use request body. You may refer to ",Object(r.b)("a",{parentName:"p",href:"#Processing-Trait"},"processing")," section for more details."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "dynamically specify service account"\n  name: service-account\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      processing: {\n        output: {\n            credentials?: string\n        }\n        http: {\n            method: *"GET" | string\n            url:    parameter.serviceURL\n            request: {\n                header: {\n                    "authorization.token": parameter.uidtoken\n                }\n            }\n        }\n      }\n      patch: {\n        spec: template: spec: serviceAccountName: processing.output.credentials\n      }\n\n      parameter: {\n        uidtoken:   string\n        serviceURL: string\n      }\n')),Object(r.b)("h3",{id:"add-init-container"},"Add Init Container"),Object(r.b)("p",null,"Init container is useful to pre-define operations in an image and run it before app container."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please check ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/#create-a-pod-that-has-an-init-container"},"Kubernetes documentation")," for more detail about Init Container.")),Object(r.b)("p",null,"Below is an example of init container trait:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add an init container and use shared volume with pod"\n  name: init-container\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  extension:\n    template: |-\n      patch: {\n        spec: template: spec: {\n            // +patchKey=name\n            containers: [{\n                name: context.name\n                // +patchKey=name\n                volumeMounts: [{\n                    name:      parameter.mountName\n                    mountPath: parameter.appMountPath\n                }]\n            }]\n            initContainers: [{\n                name:    parameter.name\n                image:   parameter.image\n                if parameter.command != _|_ {\n                  command: parameter.command\n                }\n                // +patchKey=name\n                volumeMounts: [{\n                    name:      parameter.mountName\n                    mountPath: parameter.initMountPath\n                }]\n            }]\n            // +patchKey=name\n            volumes: [{\n                name:     parameter.mountName\n                emptyDir: {}\n            }]\n        }\n      }\n\n      parameter: {\n        name:  string\n        image: string\n        command?: [...string]\n        mountName:     *"workdir" | string\n        appMountPath:  string\n        initMountPath: string\n      }\n')),Object(r.b)("p",null,"This case must rely on the strategy merge patch, for every array list, we add a ",Object(r.b)("inlineCode",{parentName:"p"},"// +patchKey=name")," annotation to avoid conflict."),Object(r.b)("p",null,"The usage could be:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      settings:\n        image: oamdev/testapp:v1\n      traits:\n        - name: "init-container"\n          properties:\n            name:  "install-container"\n            image: "busybox"\n            command:\n            - wget\n            - "-O"\n            - "/work-dir/index.html"\n            - http://info.cern.ch\n            mountName: "workdir"\n            appMountPath:  "/usr/share/nginx/html"\n            initMountPath: "/work-dir"\n')))}c.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return t?i.a.createElement(b,p(p({ref:n},l),{},{components:t})):i.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);