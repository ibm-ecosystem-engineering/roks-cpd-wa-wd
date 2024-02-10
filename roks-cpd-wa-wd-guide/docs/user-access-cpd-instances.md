---
sidebar_position: 8
---


# User Access Part 2 - Adding CPD users from OpenShift

A general overview of user management is included in the [Cloud Pak for Data Documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=a-managing-users-1). For the most simple case of using the OpenShift platform as the identity provider and setting up access to cluster instances the procedure to grant users access to service instances is as follows:

## Creating a user group that will be granted access permissions to the service instance

   1. As the `cpadmin` (or another Administrator role user) select **Access control** in the left menu under the **Administration** group.
   1. Select the **User groups** tab and then select **New user group**
   1. Assign a meaningful name for the group, for example "WAWD_Users" and provide a description if desired. Keep the membership type as the default of **Assigned** and click on **Next**
   1. Click on **Next** to skip assigning users at this time to the group.
   1. Select the **User** role checkbox and click on **Next**
   1. Click on **Create** to create the user group.

The following two steps can be repeated multiple times as new users are needed to be added to the service instances.

## Add OpenShift users to the newly created group

   1. Select the newly created user group by clicking on the name of the group.
   1. Click on **Add users**
   1. Click on the **Identity provider users** tab
   1. In the search field, start typing the name of the user from OpenShift (for IBM Cloud and ROKS, this is the user's email address)
   1. Select the users that are shown. If the user is not shown, ensure they have completed the OpenShift console access step from part 1.
   1. Search for additional users if necessary. When done click on the **Add user(s)** button

## Provide access to the watsonx Assistant and/or Watson Discovery instances to members in the group

   1. From the left navigation pull-down menu, select **Instances**
   1. For watsonx Assistant select the right-hand three dot menu of the assistant instance and choose **Manage access**
   1. Click on **Add users**
   1. To simplify the list that is displayed, choose to filter by **All user groups**
   1. Select the checkbox next to the group that was added in the first step
   1. Select a role of either **User** or **Admin** the capabilities of each role are [described in the documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=a-giving-users-access). In most cases **User** will be sufficient for group members and is the default.
   1. Click on the **Add user(s)** button
   1. These same steps may be repeated for Watson Discovery. The different capabilities for **User** and **Admin** role are [described in the documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=administering-giving-users-access)

Once the users have been added - provide them the CPD URL and at Log in page, advise for them to select **OpenShift authentication** as the login method. They may be asked to authenticate to IBM Cloud in this step if their login has expired. This is expected. Once authenticated by OpenShift, the user will be asked to Authorize access to `user:info` for the CPD callback. They should select **Allow selected permissions**, this will complete their login to Cloud Pak for Data with access to watsonx Assistant and Watson Discovery instances.
