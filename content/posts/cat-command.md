---
title: "Cat Command"
date: 2018-12-16
author: Linux-Bytes
tags: 
  - cat
  - simple
  - data
  - files
---

The cat is known for reading files sequentially and display its output. it
maybe be a simple command line tool, but it has many uses. cat is know a known
tool throght the unix history and has been port over into GNU coreutils. One
important factor about cat is that since because it does not require the files to 
consist of lines of text, but works with any sort of data. 

here are of the option that this tool can do beside display information.

- `-b` (GNU: --number-nonblank), number non-blank output lines
- `-e` implies -v but also display end-of-line characters as $ (GNU only: -E the same, but without implying -v)
- `-n` (GNU: --number), number all output lines
- `-s` (GNU: --squeeze-blank), squeeze multiple adjacent blank lines
- `-t` implies -v, but also display tabs as ^I (GNU: -T the same, but without implying -v)
- `-u` use unbuffered I/O for stdout. POSIX does not specify the behavior without this option.
- `-v` (GNU: --show-nonprinting), displays nonprinting characters, except for tabs and the end of line character

so let look at a few options

for example using the `cat -n` will show the number line of a file

```
root@0868755f0791:/# cat -n etc/login.defs | head
     1	#
     2	# /etc/login.defs - Configuration control definitions for the login package.
     3	#
     4	# Three items must be defined:  MAIL_DIR, ENV_SUPATH, and ENV_PATH.
     5	# If unspecified, some arbitrary (and possibly incorrect) value will
     6	# be assumed.  All other items are optional - if not specified then
     7	# the described action or option will be inhibited.
     8	#
     9	# Comment lines (lines beginning with "#") and blank lines are ignored.
    10	#

```

now let check the end of line character with the `cat -e`

```
root@0868755f0791:/# cat -e etc/login.defs | head
#$
# /etc/login.defs - Configuration control definitions for the login package.$
#$
# Three items must be defined:  MAIL_DIR, ENV_SUPATH, and ENV_PATH.$
# If unspecified, some arbitrary (and possibly incorrect) value will$
# be assumed.  All other items are optional - if not specified then$
# the described action or option will be inhibited.$
#$
# Comment lines (lines beginning with "#") and blank lines are ignored.$
#$

```

with the `cat -T` command flag we can see all the tab characters

```
root@0868755f0791:/# cat -T etc/bash.bashrc | tail
                   return $?
                elif [ -x /usr/share/command-not-found/command-not-found ]; then
^I^I   /usr/share/command-not-found/command-not-found -- "$1"
                   return $?
^I^Ielse
^I^I   printf "%s: command not found\n" "$1" >&2
^I^I   return 127
^I^Ifi
^I}
fi
```

now putting it all together

```
root@0868755f0791:/# cat -Ten etc/bash.bashrc | tail
    62	                   return $?$
    63	                elif [ -x /usr/share/command-not-found/command-not-found ]; then$
    64	^I^I   /usr/share/command-not-found/command-not-found -- "$1"$
    65	                   return $?$
    66	^I^Ielse$
    67	^I^I   printf "%s: command not found\n" "$1" >&2$
    68	^I^I   return 127$
    69	^I^Ifi$
    70	^I}$
    71	fi$
```
