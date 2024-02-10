---
sidebar_position: 4
---


# Installing watsonx Assistant

You will need to do 2 pre-install steps: setting up multicloud gateway and installing serverless knative eventing. Then you can install watsonx Assistant using our cpd-cli

**Note:** When running cpd-cli commands, you'll have to be in the extracted directory where the cpd-cli package exists. We extracted this in a previous step.

1. Set up mcg:

   ```shell
    ./cpd-cli manage setup-mcg \
    --components=watson_assistant \
    --cpd_instance_ns=cpd \
    --noobaa_account_secret=noobaa-admin \
    --noobaa_cert_secret=noobaa-s3-serving-cert
   ```

2. Install serverless knative eventing:

   ```shell
   ./cpd-cli manage deploy-knative-eventing --release=4.8.0 --block_storage_class=ocs-storagecluster-ceph-rbd
   ```

3. Apply OLM

   ```shell
   ./cpd-cli manage apply-olm \
    --release=4.8.0 \
    --cpd_operator_ns=cpd-operators \
    --components=watson_assistant
   ```

4. Apply custom resource

   ```shell
   ./cpd-cli manage apply-cr \
    --components=watson_assistant \
    --release=4.8.0 \
    --cpd_instance_ns=cpd \
    --block_storage_class=ocs-storagecluster-ceph-rbd \
    --file_storage_class=ocs-storagecluster-cephfs \
    --license_acceptance=true
   ```
