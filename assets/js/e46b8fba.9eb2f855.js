"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:4},o="Installing watsonx Assistant",i={unversionedId:"install-watsonx-Assistant",id:"install-watsonx-Assistant",title:"Installing watsonx Assistant",description:"We will need to do 2 pre-install steps: setting up multicloud gateway and installing serverless knative eventing. Then we can install watsonx Assistant using our cpd-cli",source:"@site/docs/install-watsonx-Assistant.md",sourceDirName:".",slug:"/install-watsonx-Assistant",permalink:"/roks-cpd-wa-wd/install-watsonx-Assistant",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installing CPD 4.8.0",permalink:"/roks-cpd-wa-wd/install-cpd"},next:{title:"Installing Watson Discovery",permalink:"/roks-cpd-wa-wd/install-Watson-Discovery"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-watsonx-assistant"},"Installing watsonx Assistant"),(0,r.kt)("p",null,"We will need to do 2 pre-install steps: setting up multicloud gateway and installing serverless knative eventing. Then we can install watsonx Assistant using our cpd-cli"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," When running cpd-cli commands, you'll have to be in the extracted directory where the cpd-cli package exists. We extracted this in a previous step."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up mcg:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," ./cpd-cli manage setup-mcg \\\n --components=watson_assistant \\\n --cpd_instance_ns=cpd \\\n --noobaa_account_secret=noobaa-admin \\\n --noobaa_cert_secret=noobaa-s3-serving-cert\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install serverless knative eventing:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./cpd-cli manage deploy-knative-eventing --release=4.8.0 --block_storage_class=ocs-storagecluster-ceph-rbd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply OLM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./cpd-cli manage apply-olm \\\n --release=4.8.0 \\\n --cpd_operator_ns=cpd-operators \\\n --components=watson_assistant\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply custom resource"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./cpd-cli manage apply-cr \\\n --components=watson_assistant \\\n --release=4.8.0 \\\n --cpd_instance_ns=cpd \\\n --block_storage_class=ocs-storagecluster-ceph-rbd \\\n --file_storage_class=ocs-storagecluster-cephfs \\\n --license_acceptance=true\n")))))}d.isMDXComponent=!0}}]);