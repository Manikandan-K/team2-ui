#!/usr/bin/env bash

set -e
tagName=$1

cfn-create-or-update \
  --stack-name just-cinemas-ui-${tagName} \
  --template-body file://buildAndDeploy/just-cinemas-ui.yml \
  --parameters ParameterKey=tagName,ParameterValue=${tagName} \
  --wait

aws s3 sync build s3://just-cinemas-ui-${tagName} --delete