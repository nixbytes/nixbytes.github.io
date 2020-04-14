---
title: "Docker Update Images"
date: 2019-11-27
author: Linux-Bytes
tags:
    - docker
    - command line
    - one-liners
    - shell
    - grep
---


A great way to update docker images is to use this one-liner. Since, docker does not have a command; this command will update images that you have already pulled. The only way is to pull all images again using docker pull <image> command. This simple one-liner can help you update all images at once.

```
docker images |grep -v REPOSITORY|awk '{print $1}'|xargs -L1 docker pull
```
