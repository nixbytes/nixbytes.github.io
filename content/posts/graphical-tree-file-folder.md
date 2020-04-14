---
title: "Graphical Tree File Folder"
date: 2018-12-26
author: Linux-Bytes
tags: 
  - grep
  - ls
  - sed
---


##  Graphical tree of sub-directories

This oneliner command is for a graphical tree of sub-directories, this is an excellent oneliner when you're in need to view the directories in a graphical format. The tree is a recursive directory listing command or program that produces a depth indented listing of files which not generally found on all Linux or Unix systems. The first Tree Unix utility was developed by Steve Baker which includes a verbose of feature and flag option. This one-liner is a quick fix for an alternative tree version for portable and easy use.

let break down how this oneliner is build by go deep with the command that is
being used.

### using `ls`

using `ls -R` does recursively list subdirectories encountered. this will give
every thing in directory by level of current one


```sh

root@19472dcaa9be:/var/log# ls -R
.:
alternatives.log  apt  bootstrap.log  btmp  dpkg.log  faillog  lastlog  tallylog  wtmp

./apt:
eipp.log.xz  history.log
```
### using `grep`

Now with the grep command, we grep all line that end with `:`. using the `$`we
grabbing all line with `:`. 


```sh

root@19472dcaa9be:/var/log# ls -R | grep ':$'
.:
./apt:
```

### using `sed`

using the `sed` command on the final pipe `|` we will filter out the needed
directories and add |- and additional - for each level of the directories it
sitting in. with `sed` the flag `-e` will append the editing commands specified 
by the command argument to the list of commands.

First let remove the `:` from the list directories.

```
root@80edb8b49c29:/var#  ls -R | grep ":$" | sed -e 's/:$//'
.
./backups
./cache
./cache/apt
./cache/apt/archives
./cache/apt/archives/partial
./cache/debconf
./cache/ldconfig
./lib
./lib/apt
./lib/apt/lists
./lib/apt/mirrors
./lib/apt/mirrors/partial
./lib/apt/periodic
./lib/dpkg
./lib/dpkg/alternatives
./lib/dpkg/info
./lib/dpkg/parts
./lib/dpkg/triggers
./lib/dpkg/updates
./lib/misc
./lib/pam
./lib/systemd
./lib/systemd/deb-systemd-helper-enabled
./lib/systemd/deb-systemd-helper-enabled/timers.target.wants
./local
./log
./log/apt
./mail
./opt
./spool
./tmp
```

now let with the regex `s/[^-][^\/]*\//--/g` from sed, replace all `.` and `/`
and stop with last `/` with a `--` when in case with add additionalm base on
how many dirctory each lines has.

```sh
root@80edb8b49c29:/var# ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g'
.
--backups
--cache
----apt
------archives
--------partial
----debconf
----ldconfig
--lib
----apt
------lists
------mirrors
--------partial
------periodic
----dpkg
------alternatives
------info
------parts
------triggers
------updates
----misc
----pam
----systemd
------deb-systemd-helper-enabled
--------timers.target.wants
--local
--log
----apt
--mail
--opt
--spool
--tmp

```

finally we use this two sed regex `-e 's/^/ /' -e 's/-/|/'` and add spacing and
`|` to the begining of the list. thier you go we have a quick tree of the
directories with `--` as levels. 

```sh

root@19472dcaa9be:/var# ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/ /' -e 's/-/|/'
 .
 |-backups
 |-cache
 |---apt
 |-----archives
 |-------partial
 |---debconf
 |---ldconfig
 |-lib
 |---apt
 |-----lists
 |-----mirrors
 |-------partial
 |-----periodic
 |---dpkg
 |-----alternatives
 |-----info
 |-----parts
 |-----triggers
 |-----updates
 |---misc
 |---pam
 |---systemd
 |-----deb-systemd-helper-enabled
 |-------timers.target.wants
 |-local
 |-log
 |---apt
 |-mail
 |-opt
 |-spool
 |-tmp

```

credit: unixmonkey842 [source](https://www.commandlinefu.com/commands/view/710/graphical-tree-of-sub-directories)

