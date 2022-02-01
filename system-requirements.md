---
description: This is dedicated to setting the software up
---

# System Requirements

## Prerequisites

You need to simply have Docker on your machine! Everything is dockerized, which means to build and run the project, you don't need to install any other software - Docker pulls that for you.

* If you're on Windows, check out "[Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)"
* If you're on Linux, check out "[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)" and "[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)"

## Installation

If you're on `Linux`, simply run `make build`. You can interrupt the containers anytime by pressing `Ctrl^C`. If you want to remove the containers, run `make remove`. If you want to start them again, just run `make up`. Check out the `Makefile` for more instructions.

If you're on `Windows`, simply visit the root of the project via the command line, and run `docker-compose -f docker-compose.dev.yaml up --build`, and it should start.

The team developed, built, and tested this project on Linux. If there a issue with the Window's equivalent of commands, let us know in the issues tab! :D
