(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),i=(n(0),n(263)),l={title:"Overview"},o={unversionedId:"developer-experience-guide/appfile/quick-start-appfile",id:"version-v0.3.5/developer-experience-guide/appfile/quick-start-appfile",isDocsHomePage:!1,title:"Overview",description:"Building Developer Experience with KubeVela",source:"@site/versioned_docs/version-v0.3.5/developer-experience-guide/appfile/quick-start-appfile.md",slug:"/developer-experience-guide/appfile/quick-start-appfile",permalink:"/zh/docs/v0.3.5/developer-experience-guide/appfile/quick-start-appfile",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/versioned_docs/version-v0.3.5/developer-experience-guide/appfile/quick-start-appfile.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v0.3.5/docs",previous:{title:"Known Limitations",permalink:"/zh/docs/v0.3.5/platform-builder-guide/using-helm/known-issues"},next:{title:"Learning Appfile",permalink:"/zh/docs/v0.3.5/developer-experience-guide/appfile/learn-appfile"}},p=[{value:"Building Developer Experience with KubeVela",id:"building-developer-experience-with-kubevela",children:[]},{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"building-developer-experience-with-kubevela"},"Building Developer Experience with KubeVela"),Object(i.b)("p",null,"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool."),Object(i.b)("p",null,"As an proof-of-concept of building developer experience with KubeVela, we developed a client-side tool named ",Object(i.b)("inlineCode",{parentName:"p"},"Appfile")," as well. This tool enables developers to deploy any application with a single file and a single command: ",Object(i.b)("inlineCode",{parentName:"p"},"vela up"),"."),Object(i.b)("p",null,"Now let's walk through its experience."),Object(i.b)("h2",{id:"step-1-install"},"Step 1: Install"),Object(i.b)("p",null,"Make sure you have finished and verified the installation following ",Object(i.b)("a",{parentName:"p",href:"../../getting-started/install"},"this guide"),"."),Object(i.b)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela.yaml\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward first-vela-app\n             SSH: vela exec first-vela-app\n         Logging: vela logs first-vela-app\n      App status: vela status first-vela-app\n  Service status: vela status first-vela-app --svc testsvc\n")),Object(i.b)("p",null,"Check the status until we see ",Object(i.b)("inlineCode",{parentName:"p"},"Routes")," are ready:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status first-vela-app\nAbout:\n\n  Name:       first-vela-app\n  Namespace:  default\n  Created at: ...\n  Updated at: ...\n\nServices:\n\n  - Name: testsvc\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: ...\n      Updated at: ...\n    Traits:\n      - \u2705 ingress: Visiting URL: testsvc.example.com, IP: <your IP address>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In ",Object(i.b)("a",{parentName:"strong",href:"../../getting-started/install#kind"},"kind cluster setup")),", you can visit the service via localhost. In other setups, replace localhost with ingress address accordingly."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://localhost/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Voila!")," You are all set to go."),Object(i.b)("h2",{id:"whats-next"},"What's Next"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn details about ",Object(i.b)("a",{parentName:"li",href:"./learn-appfile"},Object(i.b)("inlineCode",{parentName:"a"},"Appfile"))," and know how it works.")))}c.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);