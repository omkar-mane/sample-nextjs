#!/bin/bash

# Usage: ./deploy.sh <environmentId> <branch> <CLIENT_ID> <CLIENT_SECRET>

set -e

# Assign parameters from command line arguments
environmentId="$1"
branch="$2"
CLIENT_ID="$3"
CLIENT_SECRET="$4"

# Check for missing parameters
if [[ -z "$environmentId" || -z "$branch" || -z "$CLIENT_ID" || -z "$CLIENT_SECRET" ]]; then
  echo "Usage: $0 <environmentId> <branch> <CLIENT_ID> <CLIENT_SECRET>"
  exit 1
fi

AUTH_SERVER_URL="https://accountsstg.network.acquia-sites.com/api/auth/oauth/token"
CODE_DEPLOYMENT_URL="https://n3stg.network.acquia-sites.com/api/environments/${environmentId}/code/actions/switch"

# Obtain access token
response=$(curl --silent -L --request POST \
  --url "${AUTH_SERVER_URL}" \
  --header "content-type: application/x-www-form-urlencoded" \
  --data grant_type=client_credentials \
  --data client_id="${CLIENT_ID}" \
  --data-urlencode client_secret="${CLIENT_SECRET}")

# Check if there was an error in the response
if [[ "$response" == *"error"* ]]; then
  echo "Error in obtaining token:"
  echo "$response"
  exit 1
fi

# Extract the access token from the JSON response
access_token=$(echo "$response" | jq -r .access_token)

echo "Access token obtained."

echo "Deployment URL: $CODE_DEPLOYMENT_URL"

# Trigger code deployment
response=$(curl --silent -X POST "${CODE_DEPLOYMENT_URL}" \
  -H "Authorization: Bearer $access_token" \
  -H "Content-Type: application/json" \
  -H "Accept: application/hal+json" \
  -d "{
    \"branch\": \"$branch\",
    \"cloud-actions\": []
  }")

echo "Deployment response:"
echo "$response"
