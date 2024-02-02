"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9881:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},a="Intro",l={unversionedId:"intro",id:"intro",title:"Intro",description:"Getting started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/roks-cpd-wa-wd/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Provisioning an OpenShift Cluster",permalink:"/roks-cpd-wa-wd/provision-an-openshift-cluster"}},s={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"The goal of this tutorial is to provide the steps of installing watsonx Assistant and Watson Discovery on a OpenShift cluster on IBM Cloud. This includes installing IBM Cloud Pak for Data. The IBM Cloud Pak for Data version number used in this tutorial will be 4.8.0."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),' This tutorial refers to IBM Cloud Pak for Data as "CPD" in the future sections.'),(0,o.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'This tutorial uses a ROKS cluster on IBM Cloud. For the details of the cluster, see the "Provisioning an Openshift Cluster" step'),(0,o.kt)("li",{parentName:"ol"},"An IBM Entitlement Key: ",(0,o.kt)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"this is necessary for access to CPD and its cartridges (watsonx Assistant and Watson Discovery)"))),(0,o.kt)("li",{parentName:"ol"},"A linux VM with the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"podman: ",(0,o.kt)("a",{parentName:"li",href:"https://podman.io/docs/installation"},"https://podman.io/docs/installation")),(0,o.kt)("li",{parentName:"ol"},"git: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo yum install git")),(0,o.kt)("li",{parentName:"ol"},"OpenShift CLI: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.11/cli_reference/openshift_cli/getting-started-cli.html"},"https://docs.openshift.com/container-platform/4.11/cli_reference/openshift_cli/getting-started-cli.html"))))))}d.isMDXComponent=!0}}]);