---
title: "CLI Golang"
date: 2022-03-18
---
# CLI and Golang

For some time, have wanted to dabble a little more on Golang. After working on an intro course at ACG (A Cloud Guru) and learning Golang, I got to say it is a straightforward language with some powerful features. Creating a CLI tool with Golang has been a good experience. The language has some unique character and made with some legendary programmers in our time:

- Robert Griesemer
- Rob Pike
- Ken Thompson 

# Basic Password CLI tool in Golang

The command will be able to export user names, IDs, home directories, and shells as either JSON or CSV. This command will not include information about system users (users with IDs under 1000). By default, the command will display the information as JSON to stdout, but the -format flag will allow a person to specify csv as the export type. Additionally, a file can be specified by using the -path flag. Here are the various ways the tools can be used:

```bash
$ hr -format=csv -path=path/to/users.csv
$ hr -path=path/to/users.json
$ hr
[
  {
    "name": "cloud_user",
    "id": 1002,
    "home": "/home/cloud_user",
    "shell": "/bin/bash"
  },
  {
    "name": "kevin",
    "id": 1003,
    "home": "/home/kevin",
    "shell": "/bin/zsh"
  },
]
$ hr -format=csv
name,id,home,shell
cloud_user,1002,/home/cloud_user,/bin/bash
kevin,1003,/home/kevin,/bin/zsh
```

The information we want can be found in the /etc/passwd file.

This code is from **Building a Go Command Line Tool** from [A Cloud Guru](https://acloudguru.com/)

[source code](https://github.com/nixbytes/acg-hr)
