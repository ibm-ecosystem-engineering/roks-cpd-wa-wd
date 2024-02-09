---
sidebar_position: 6
---


# Login to CPD

1. CPD URL: Your CPD URL can be found by:
   1. Opening you cluster's web console (found in the cluster overview page in IBM Cloud)
   2. Navigating to Networking -> Routes -> CPD
   3. Clicking on the URL will open the CPD login page
   4. Your username is `cpadmin`
2. To obtain your CPD password you can run the following commands while logged into your cluster:

   ```shell
   oc project cpd
   oc get secret ibm-iam-bindinfo-platform-auth-idp-credentials -o 'jsonpath={.data.admin_password}' | base64 --decode
   ```

3. Enter the information to login to CPD

## Creating watsonx Assistant and Watson Discovery instances

1. Once logged in to CPD, you can create instances by selecting the hamburger menu on the top left, selecting Services -> Instances, clicking the tile of the service you want, and clicking create
