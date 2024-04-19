#!/bin/bash
#v.1.0
set -e

createDockerIgnoreFile() {
  echo ".git"                       > .dockerignore
  echo "tests"                     >> .dockerignore
}

createDockerIgnoreFile
image=apm-nextjs-app-1:latest
docker build -f Dockerfile -t $image .