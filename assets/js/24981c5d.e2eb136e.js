"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:3},o="Installing CPD 4.8.0",i={unversionedId:"install-cpd",id:"install-cpd",title:"Installing CPD 4.8.0",description:"We'll use Cloud Pak Deployer to automate this install. The documentation can be found at:",source:"@site/docs/install-cpd.md",sourceDirName:".",slug:"/install-cpd",permalink:"/roks-cpd-wa-wd/install-cpd",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Provisioning an OpenShift Cluster",permalink:"/roks-cpd-wa-wd/provision-an-openshift-cluster"},next:{title:"Installing watsonx Assistant",permalink:"/roks-cpd-wa-wd/install-watsonx-Assistant"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-cpd-480"},"Installing CPD 4.8.0"),(0,r.kt)("p",null,"We'll use Cloud Pak Deployer to automate this install. The documentation can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://ibm.github.io/cloud-pak-deployer/"},"https://ibm.github.io/cloud-pak-deployer/")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your Linux VM, pull the code for cloud-pak-deployer"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/IBM/cloud-pak-deployer.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change into the cloud-pak-deployer directory and build the image (takes ~5-10 minutes)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd cloud-pak-deployer\n./cp-deploy.sh build\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the image is done building, make directories for our cpd configuration files and cpd status files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-config\n\nmkdir PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-status\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change directories into cpd-config and copy the following yaml config file, insert your information such as cluster and domain name:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd cpd-config\nmkdir config\ncd config\nvi ocp-existing-ocs.yaml\n")),(0,r.kt)("p",{parentName:"li"}," OCP-Exisitng-OCS.yaml:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nglobal_config:\n  environment_name: <CLUSTER_NAME>\n  cloud_platform: existing-ocp\n  env_id: wd-wa\n  confirm_destroy: False\n\nopenshift:\n  - name: <CLUSTER_NAME>\n    ocp_version: 4.12\n    cluster_name: <CLUSTER_NAME>\n    domain_name: <DOMAIN_NAME_FROM_OC_WEB_CLIENT>\n    mcg:\n      install: True\n      storage_type: storage-class\n      storage_class: ocs-storagecluster-ceph-rbd\n    openshift_storage:\n      - storage_name: ocs-storage\n        storage_type: ocs\n# Optional parameters if you want to override the storage class used\n# ocp_storage_class_file: nfs-client\n# ocp_storage_class_block: nfs-client\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the second config file into the same directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi cp4d-480.yaml\n")),(0,r.kt)("p",{parentName:"li"}," CP4D-480.yaml:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ncp4d:\n  - project: cpd\n    openshift_cluster_name: <CLUSTER_NAME>\n    cp4d_version: 4.8.0\n    cp4d_entitlement: cpd-enterprise\n    cp4d_production_license: True\n    accept_licenses: False\n    sequential_install: False\n    db2u_limited_privileges: False\n    use_fs_iam: True\n    operators_project: cpd-operators\n    cartridges:\n      - name: cp-foundation\n        license_service:\n          state: disabled\n          threads_per_core: 2\n\n      - name: cpd_platform\n\n      - name: scheduler\n        state: removed\n\n      #\n      # All tested cartridges. To install, change the "state" property to "installed". To uninstall, change the state\n      # to "removed" or comment out the entire cartridge. Make sure that the "-" and properties are aligned with the lite\n      # cartridge; the "-" is at position 3 and the property starts at position 5.\n      #\n      # If a cartridge has dependencies and you want to install it, you must ensure that the dependent cartridge is also\n      # installed.\n      #\n\n      - name: analyticsengine\n        description: Analytics Engine Powered by Apache Spark\n        size: small\n        state: removed\n\n      - name: bigsql\n        description: Db2 Big SQL\n        state: removed\n\n      - name: ca\n        description: Cognos Analytics\n        size: small\n        instances:\n          - name: ca-instance\n            metastore_ref: ca-metastore\n        state: removed\n\n      - name: dashboard\n        description: Cognos Dashboards\n        state: removed\n\n      - name: datagate\n        description: Db2 Data Gate\n        state: removed\n\n      - name: datastage-ent\n        description: DataStage Enterprise\n        state: removed\n\n      - name: datastage-ent-plus\n        description: DataStage Enterprise Plus\n        state: removed\n        # instances:\n        #   - name: ds-instance\n        #     # Optional settings\n        #     description: "datastage ds-instance"\n        #     size: medium\n        #     storage_class: efs-nfs-client\n        #     storage_size_gb: 60\n        #     # Custom Scale options\n        #     scale_px_runtime:\n        #       replicas: 2\n        #       cpu_request: 500m\n        #       cpu_limit: 2\n        #       memory_request: 2Gi\n        #       memory_limit: 4Gi\n        #     scale_px_compute:\n        #       replicas: 2\n        #       cpu_request: 1\n        #       cpu_limit: 3\n        #       memory_request: 4Gi\n        #       memory_limit: 12Gi\n\n      - name: db2\n        description: Db2 OLTP\n        size: small\n        instances:\n          - name: ca-metastore\n            metadata_size_gb: 20\n            data_size_gb: 20\n            backup_size_gb: 20\n            transactionlog_size_gb: 20\n        state: removed\n\n      - name: db2wh\n        description: Db2 Warehouse\n        state: removed\n\n      - name: dmc\n        description: Db2 Data Management Console\n        state: removed\n\n      - name: dods\n        description: Decision Optimization\n        size: small\n        state: removed\n\n      - name: dp\n        description: Data Privacy\n        size: small\n        state: removed\n\n      - name: dpra\n        description: Data Privacy Risk Assessment\n        state: removed\n\n      - name: dv\n        description: Data Virtualization\n        size: small\n        instances:\n          - name: data-virtualization\n        state: removed\n\n      # Please note that for EDB Postgress, a secret edb-postgres-license-key must be created in the vault\n      # before deploying\n      - name: edb_cp4d\n        description: EDB Postgres\n        state: removed\n        instances:\n          - name: instance1\n            version: "15.4"\n            #type: Standard\n            #members: 1\n            #size_gb: 50\n            #resource_request_cpu: 1\n            #resource_request_memory: 4Gi\n            #resource_limit_cpu: 1\n            #resource_limit_memory: 4Gi\n\n      - name: factsheet\n        description: AI Factsheets\n        size: small\n        state: removed\n\n      - name: hadoop\n        description: Execution Engine for Apache Hadoop\n        size: small\n        state: removed\n\n      - name: mantaflow\n        description: MANTA Automated Lineage\n        size: small\n        state: removed\n\n      - name: match360\n        description: IBM Match 360\n        size: small\n        wkc_enabled: true\n        state: removed\n\n      - name: openpages\n        description: OpenPages\n        state: removed\n\n      # For Planning Analytics, the case version is needed due to defect in olm utils\n      - name: planning-analytics\n        description: Planning Analytics\n        state: removed\n\n      - name: replication\n        description: Data Replication\n        license: IDRC\n        size: small\n        state: removed\n\n      - name: rstudio\n        description: RStudio Server with R 3.6\n        size: small\n        state: removed\n\n      - name: spss\n        description: SPSS Modeler\n        state: removed\n\n      - name: voice-gateway\n        description: Voice Gateway\n        replicas: 1\n        state: removed\n\n      - name: watson-assistant\n        description: Watson Assistant\n        size: small\n        # noobaa_account_secret: noobaa-admin\n        # noobaa_cert_secret: noobaa-s3-serving-cert\n        state: removed\n\n      - name: watson-discovery\n        description: Watson Discovery\n        # noobaa_account_secret: noobaa-admin\n        # noobaa_cert_secret: noobaa-s3-serving-cert\n        state: removed\n\n      - name: watson-ks\n        description: Watson Knowledge Studio\n        size: small\n        # noobaa_account_secret: noobaa-admin\n        # noobaa_cert_secret: noobaa-s3-serving-cert\n        state: removed\n\n      - name: watson-openscale\n        description: Watson OpenScale\n        size: small\n        state: removed\n\n      - name: watson-speech\n        description: Watson Speech (STT and TTS)\n        stt_size: xsmall\n        tts_size: xsmall\n        # noobaa_account_secret: noobaa-admin\n        # noobaa_cert_secret: noobaa-s3-serving-cert\n        state: removed\n\n      - name: watsonx_ai\n        description: watsonx.ai\n        state: removed\n        models:\n          - model_id: google-flan-t5-xxl\n            state: removed\n          - model_id: google-flan-ul2\n            state: removed\n          - model_id: eleutherai-gpt-neox-20b\n            state: removed\n          - model_id: ibm-granite-13b-chat-v1\n            state: removed\n          - model_id: ibm-granite-13b-instruct-v1\n            state: removed\n          - model_id: meta-llama-llama-2-70b-chat\n            state: removed\n          - model_id: ibm-mpt-7b-instruct2\n            state: removed\n          - model_id: bigscience-mt0-xxl\n            state: removed\n          - model_id: bigcode-starcoder\n            state: removed\n\n      - name: watsonx_data\n        description: watsonx.data\n        state: removed\n\n      - name: wkc\n        description: Watson Knowledge Catalog\n        size: small\n        state: removed\n        installation_options:\n          install_wkc_core_only: False\n          enableKnowledgeGraph: False\n          enableDataQuality: False\n          enableFactSheet: False\n\n      - name: wml\n        description: Watson Machine Learning\n        size: small\n        state: removed\n\n      - name: wml-accelerator\n        description: Watson Machine Learning Accelerator\n        replicas: 1\n        size: small\n        state: removed\n\n      - name: ws\n        description: Watson Studio\n        state: removed\n\n      - name: ws-pipelines\n        description: Watson Studio Pipelines\n        state: removed\n\n      - name: ws-runtimes\n        description: Watson Studio Runtimes\n        runtimes:\n          - ibm-cpd-ws-runtime-py39\n          - ibm-cpd-ws-runtime-222-py\n          - ibm-cpd-ws-runtime-py39gpu\n          - ibm-cpd-ws-runtime-222-pygpu\n          - ibm-cpd-ws-runtime-231-pygpu\n          - ibm-cpd-ws-runtime-r36\n          - ibm-cpd-ws-runtime-222-r\n          - ibm-cpd-ws-runtime-231-r\n        state: removed\n\n      #\n      # Cartridges where extra work is needed (will not install automatically)\n      #\n      # Product Master requires set up of the Db2 instance secret before install\n      - name: productmaster\n        description: Product Master\n        size: small\n        state: removed\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the environment variables for your newly created directories, IBM Entitlement Key, and cluster login (ensure the login is in double quotes)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export CONFIG_DIR=PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-config\nexport STATUS_DIR=PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-status\nexport CP_ENTITLEMENT_KEY=<IBM_ENTITLEMENT_KEY>\nexport CPD_OC_LOGIN="<YOUR_CLUSTER_LOGIN_COMMAND> --insecure-skip-tls-verify"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run cloud-pak-deployer (this will take between 1 to 2 hours)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./cp-deploy.sh env apply --accept-all-licenses\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:"),' If your deployer gets hung up on the "ODF CSV" step, we will have to delete the older operator group within openshift-storage'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"oc project openshift-storage\noc delete og openshift-storage-operatorgroup\n")),(0,r.kt)("p",{parentName:"li"},"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"oc get og")," to check that only the newly created operator group exists"))))}m.isMDXComponent=!0}}]);