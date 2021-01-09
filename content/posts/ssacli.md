---
title: "ssacli on Linux"
date: 2019-07-29
---

# SSACLI TOOL

HP Tool for linux make it easier to manage smart array controllers in HP servers. With the shell it make simple to create, delete and repair the logical and physical drives on the smart array.

### Two ways to use the tools

hpacucli prompt

```bash

> ssacli
Smart Storage Administor CLI 3.47.1.0
Detecting Controllers...Done.
Type "help" for a list of supported commands.
Type "exit" to close the console.
=> rescan

```

or single command line

```bash
ssacli rescan
```

### HPE Short names for commands

all commands with the toll uses a short name syntax, which makes run and writing commands easier.

```
### Shortnames:

- chassisname = ch
- controller = ctrl 
- logicaldrive = ld
- physicaldrive = pd 
- drivewritecache = dwc
- licensekey = lk

### Specify drives:

- A range of drives (one to three): 1E:1:1-1E:1:3
- Drives that are unassigned: allunassigned

```



