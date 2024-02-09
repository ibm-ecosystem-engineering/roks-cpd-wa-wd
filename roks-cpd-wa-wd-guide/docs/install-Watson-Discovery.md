---
sidebar_position: 5
---


# Installing Watson Discovery

Watson Discovery follows a similar process to watsonx Assistant. We'll need to additionally change our load balancer settings.

1. Set up mcg:

   ```shell
    ./cpd-cli manage setup-mcg \
    --components=watson_discovery \
    --cpd_instance_ns=cpd \
    --noobaa_account_secret=noobaa-admin \
    --noobaa_cert_secret=noobaa-s3-serving-cert
   ```

2. Change node load balancer settings

   ```shell
   oc annotate route cpd --overwrite haproxy.router.openshift.io/timeout=360s
   ```

3. Apply OLM

   ```shell
   ./cpd-cli manage apply-olm \
    --release=4.8.0 \
    --cpd_operator_ns=cpd-operators \
    --components=watson_discovery
   ```

4. Apply custom resource

   ```shell
   ./cpd-cli manage apply-cr \
    --components=watson_discovery \
    --release=4.8.0 \
    --cpd_instance_ns=cpd \
    --block_storage_class=ocs-storagecluster-ceph-rbd \
    --file_storage_class=ocs-storagecluster-cephfs \
    --license_acceptance=true
   ```
