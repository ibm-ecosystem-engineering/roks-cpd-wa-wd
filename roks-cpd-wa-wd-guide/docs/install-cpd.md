---
sidebar_position: 3
---
# Installing CPD 4.8.0

We'll use Cloud Pak Deployer to automate this install. The documentation can be found at: https://ibm.github.io/cloud-pak-deployer/

1. On your Linux VM, pull the code for cloud-pak-deployer
   ```
   git clone --depth=1 https://github.com/IBM/cloud-pak-deployer.git
   ```

2. Change into the cloud-pak-deployer directory and build the image (takes ~5-10 minutes)
   ```
   cd cloud-pak-deployer
   ./cp-deploy.sh build
   ```

3. Once the image is done building, make directories for our cpd configuration files and cpd status files
   ```
   mkdir PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-config

   mkdir PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-status
   ```

4. Change directories into cpd-config and copy the following yaml config file, insert your information such as cluster and domain name:
   ```
   cd cpd-config
   mkdir config
   cd config
   vi ocp-existing-ocs.yaml
   ```
    OCP-Exisitng-OCS.yaml:
    ```
    ---
    global_config:
      environment_name: <CLUSTER_NAME>
      cloud_platform: existing-ocp
      env_id: wd-wa
      confirm_destroy: False

    openshift:
      - name: <CLUSTER_NAME>
        ocp_version: 4.12
        cluster_name: <CLUSTER_NAME>
        domain_name: <DOMAIN_NAME_FROM_OC_WEB_CLIENT>
        mcg:
          install: True
          storage_type: storage-class
          storage_class: ocs-storagecluster-ceph-rbd
        openshift_storage:
          - storage_name: ocs-storage
            storage_type: ocs
    # Optional parameters if you want to override the storage class used
    # ocp_storage_class_file: nfs-client
    # ocp_storage_class_block: nfs-client
    ```

5. Copy the second config file into the same directory:
   ```
   vi cp4d-480.yaml
   ```
    CP4D-480.yaml:

    ```
    ---
    cp4d:
      - project: cpd
        openshift_cluster_name: <CLUSTER_NAME>
        cp4d_version: 4.8.0
        cp4d_entitlement: cpd-enterprise
        cp4d_production_license: True
        accept_licenses: False
        sequential_install: False
        db2u_limited_privileges: False
        use_fs_iam: True
        operators_project: cpd-operators
        cartridges:
          - name: cp-foundation
            license_service:
              state: disabled
              threads_per_core: 2

          - name: cpd_platform

          - name: scheduler
            state: removed

          #
          # All tested cartridges. To install, change the "state" property to "installed". To uninstall, change the state
          # to "removed" or comment out the entire cartridge. Make sure that the "-" and properties are aligned with the lite
          # cartridge; the "-" is at position 3 and the property starts at position 5.
          #
          # If a cartridge has dependencies and you want to install it, you must ensure that the dependent cartridge is also
          # installed.
          #

          - name: analyticsengine
            description: Analytics Engine Powered by Apache Spark
            size: small
            state: removed

          - name: bigsql
            description: Db2 Big SQL
            state: removed

          - name: ca
            description: Cognos Analytics
            size: small
            instances:
              - name: ca-instance
                metastore_ref: ca-metastore
            state: removed

          - name: dashboard
            description: Cognos Dashboards
            state: removed

          - name: datagate
            description: Db2 Data Gate
            state: removed

          - name: datastage-ent
            description: DataStage Enterprise
            state: removed

          - name: datastage-ent-plus
            description: DataStage Enterprise Plus
            state: removed
            # instances:
            #   - name: ds-instance
            #     # Optional settings
            #     description: "datastage ds-instance"
            #     size: medium
            #     storage_class: efs-nfs-client
            #     storage_size_gb: 60
            #     # Custom Scale options
            #     scale_px_runtime:
            #       replicas: 2
            #       cpu_request: 500m
            #       cpu_limit: 2
            #       memory_request: 2Gi
            #       memory_limit: 4Gi
            #     scale_px_compute:
            #       replicas: 2
            #       cpu_request: 1
            #       cpu_limit: 3
            #       memory_request: 4Gi
            #       memory_limit: 12Gi

          - name: db2
            description: Db2 OLTP
            size: small
            instances:
              - name: ca-metastore
                metadata_size_gb: 20
                data_size_gb: 20
                backup_size_gb: 20
                transactionlog_size_gb: 20
            state: removed

          - name: db2wh
            description: Db2 Warehouse
            state: removed

          - name: dmc
            description: Db2 Data Management Console
            state: removed

          - name: dods
            description: Decision Optimization
            size: small
            state: removed

          - name: dp
            description: Data Privacy
            size: small
            state: removed

          - name: dpra
            description: Data Privacy Risk Assessment
            state: removed

          - name: dv
            description: Data Virtualization
            size: small
            instances:
              - name: data-virtualization
            state: removed

          # Please note that for EDB Postgress, a secret edb-postgres-license-key must be created in the vault
          # before deploying
          - name: edb_cp4d
            description: EDB Postgres
            state: removed
            instances:
              - name: instance1
                version: "15.4"
                #type: Standard
                #members: 1
                #size_gb: 50
                #resource_request_cpu: 1
                #resource_request_memory: 4Gi
                #resource_limit_cpu: 1
                #resource_limit_memory: 4Gi

          - name: factsheet
            description: AI Factsheets
            size: small
            state: removed

          - name: hadoop
            description: Execution Engine for Apache Hadoop
            size: small
            state: removed

          - name: mantaflow
            description: MANTA Automated Lineage
            size: small
            state: removed

          - name: match360
            description: IBM Match 360
            size: small
            wkc_enabled: true
            state: removed

          - name: openpages
            description: OpenPages
            state: removed

          # For Planning Analytics, the case version is needed due to defect in olm utils
          - name: planning-analytics
            description: Planning Analytics
            state: removed

          - name: replication
            description: Data Replication
            license: IDRC
            size: small
            state: removed

          - name: rstudio
            description: RStudio Server with R 3.6
            size: small
            state: removed

          - name: spss
            description: SPSS Modeler
            state: removed

          - name: voice-gateway
            description: Voice Gateway
            replicas: 1
            state: removed

          - name: watson-assistant
            description: Watson Assistant
            size: small
            # noobaa_account_secret: noobaa-admin
            # noobaa_cert_secret: noobaa-s3-serving-cert
            state: removed

          - name: watson-discovery
            description: Watson Discovery
            # noobaa_account_secret: noobaa-admin
            # noobaa_cert_secret: noobaa-s3-serving-cert
            state: removed

          - name: watson-ks
            description: Watson Knowledge Studio
            size: small
            # noobaa_account_secret: noobaa-admin
            # noobaa_cert_secret: noobaa-s3-serving-cert
            state: removed

          - name: watson-openscale
            description: Watson OpenScale
            size: small
            state: removed

          - name: watson-speech
            description: Watson Speech (STT and TTS)
            stt_size: xsmall
            tts_size: xsmall
            # noobaa_account_secret: noobaa-admin
            # noobaa_cert_secret: noobaa-s3-serving-cert
            state: removed

          - name: watsonx_ai
            description: watsonx.ai
            state: removed
            models:
              - model_id: google-flan-t5-xxl
                state: removed
              - model_id: google-flan-ul2
                state: removed
              - model_id: eleutherai-gpt-neox-20b
                state: removed
              - model_id: ibm-granite-13b-chat-v1
                state: removed
              - model_id: ibm-granite-13b-instruct-v1
                state: removed
              - model_id: meta-llama-llama-2-70b-chat
                state: removed
              - model_id: ibm-mpt-7b-instruct2
                state: removed
              - model_id: bigscience-mt0-xxl
                state: removed
              - model_id: bigcode-starcoder
                state: removed

          - name: watsonx_data
            description: watsonx.data
            state: removed

          - name: wkc
            description: Watson Knowledge Catalog
            size: small
            state: removed
            installation_options:
              install_wkc_core_only: False
              enableKnowledgeGraph: False
              enableDataQuality: False
              enableFactSheet: False

          - name: wml
            description: Watson Machine Learning
            size: small
            state: removed

          - name: wml-accelerator
            description: Watson Machine Learning Accelerator
            replicas: 1
            size: small
            state: removed

          - name: ws
            description: Watson Studio
            state: removed

          - name: ws-pipelines
            description: Watson Studio Pipelines
            state: removed

          - name: ws-runtimes
            description: Watson Studio Runtimes
            runtimes:
              - ibm-cpd-ws-runtime-py39
              - ibm-cpd-ws-runtime-222-py
              - ibm-cpd-ws-runtime-py39gpu
              - ibm-cpd-ws-runtime-222-pygpu
              - ibm-cpd-ws-runtime-231-pygpu
              - ibm-cpd-ws-runtime-r36
              - ibm-cpd-ws-runtime-222-r
              - ibm-cpd-ws-runtime-231-r
            state: removed

          #
          # Cartridges where extra work is needed (will not install automatically)
          #
          # Product Master requires set up of the Db2 instance secret before install
          - name: productmaster
            description: Product Master
            size: small
            state: removed

    ```

6. Set the environment variables for your newly created directories, IBM Entitlement Key, and cluster login (ensure the login is in double quotes)
   ```
   export CONFIG_DIR=PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-config
   export STATUS_DIR=PATH_TO_CLOUD_PAK_DEPLOYER/cloud-pak-deployer/cpd-status
   export CP_ENTITLEMENT_KEY=<IBM_ENTITLEMENT_KEY>
   export CPD_OC_LOGIN="<YOUR_CLUSTER_LOGIN_COMMAND> --insecure-skip-tls-verify"
   ```
7. Run cloud-pak-deployer (this will take between 1 to 2 hours)
   ```
   ./cp-deploy.sh env apply --accept-all-licenses
   ```
   **Note:** If your deployer gets hung up on the "ODF CSV" step, we will have to delete the older operator group within openshift-storage
   ```
   oc project openshift-storage
   oc delete og openshift-storage-operatorgroup
   ```
   You can run `oc get og` to check that only the newly created operator group exists
