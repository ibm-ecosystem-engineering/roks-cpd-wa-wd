---
sidebar_position: 7
---


# User Access Part 1 - IBM Cloud IAM and ROKS

Adding users beyond the `cpadmin` user to Cloud Pak for Data requires configuration of the users in an external Identity Provider. Many Identity Providers are supported, but for a quick start, you can set up additional OpenShift users using IBM Cloud IAM access and then use the initially configured CPD => OpenShift oauth provider to add users to Cloud Pak for Data.

If you are using a different Identity Provider and just want to see how to add those users to a group and watsonx Assistant or Watson Discovery instances, skip ahead to [**User Access Part 2 - Adding CPD users from OpenShift**](./user-access-cpd-instances.md).

## Create an IBM Cloud Access Group allowing access to the OpenShift Cluster

This group will only be needed for IBM Cloud users in the account that do not already have access to the OpenShift Cluster as a developer or administrator

   1. From the IBM Cloud console top menu, select **Manage** -> **Access(IAM)**
   1. Click on **Create Access Group**
   1. Give the group a descriptive name like "CPD-VIEWER-OPENSHIFT", optionally, provide more details in the description
   1. Select the **Access** tab and then click on **Assign access**
   1. For the Service name, type in **Kubernetes Service** and click on **Next**
   1. Under Resources, select **Specific resources**, then the **Cluster** attribute type and select your cluster name as the value. Then click on **Add a condition** and select the **Namespace** attribute and type in **default** as the value. Finally, click on **Next**
   1. Under Roles and actions, for Service access, select **Reader**, and for Platform access, select **Viewer**, then click on **Add**
   1. On the right side click on **Assign** to grant the policy to the Access Group.

## Add users to the Access Group

   1. If the users are already in the IBM Cloud account, from the Access Group page, select **Users** and then use **Add Users** to add more account users to the access group
   1. Invite new users to the account by selecting the **Users** item from the left menu and then **Invite users**, provide a list of e-mail addresses of users to invite. Select the Access Group that was added and click on **Add** to include access to the group to the invited users. Then click on **Invite**

New users that are added to the IBM Cloud platform will receive an email, they must click on the account invitation link and join the account before attempting to access the OpenShift cluster. Whether the user was a previous user in the account or was just invited, all users must do an initial sign-in to the OpenShift console in order for their identity to be added to OpenShift. Each user needs to perform this step:

## User accesses the OpenShift cluster from the IBM Cloud Console to create their identity in the OpenShift user registry

   1. From the IBM Cloud Console, open [OpenShift Resources](https://cloud.ibm.com/kubernetes/clusters?platformType=openshift)
   1. Select the OpenShift cluster (if more than one is shown, select the cluster with Cloud Pak for Data/watsonx Assistant installed)
   1. From the cluster control panel click on the **OpenShift web console** button to access the OpenShift dashboard.
   1. Once the dashboard opens, the user can close the tab.

At this point, an OpenShift adminstrator will see the user identity using the Administrator dashboard under **User Management** -> **Users** . Users will be listed like `IAM#userid@example.com`. Once the users are shown, proceed to the next step.
