---
sidebar_position: 1
slug: /
---

# Intro

## Getting started

The goal of this tutorial is to provide the steps of installing watsonx Assistant and Watson Discovery on a ROKS cluster on IBM Cloud. This includes installing IBM Cloud Pak for Data (CPD).

## Prerequisites

1. This tutorial uses a ROKS cluster on IBM Cloud. For the details of the cluster, see the "Provisioning an Openshift Cluster" step on the left-hand navigation bar of this page
2. An IBM Entitlement Key: <https://myibm.ibm.com/products-services/containerlibrary>
   1. this is necessary for access to CPD and its cartridges (watsonx Assistant and Watson Discovery)
3. A linux VM with the following:
   1. podman: <https://podman.io/docs/installation>
   2. git: `sudo yum install git`
   3. OpenShift CLI: <https://docs.openshift.com/container-platform/4.11/cli_reference/openshift_cli/getting-started-cli.html>
