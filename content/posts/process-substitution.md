---
title: "Process Substitution"
date: 2019-04-24
author: Linux-Bytes
tags: 
  - process
  - substitution
  - multi
---


In the world of shell piping, there's a powerful technique that involves piping the standard output (stdout) of one command into the standard input (stdin) of another. However, what happens when you need to pipe the output of multiple commands? This is where process substitution comes in handy.

Process substitution is a shell technique that allows you to use the output of a command as a file argument to another command, without the need to create temporary files or named pipes. Instead, process substitution provides a more streamlined and efficient approach to managing shell pipelines.

Let's take a look at an example to illustrate the benefits of process substitution. Suppose you have two unsorted files that you want to compare and find the unique lines in each file. Traditionally, you would need to create temporary files to store the sorted and unique lines, and then use the 'comm' command to compare the files. However, with process substitution, you can do all of this in one line without the need for temporary files.

Here's an example:

```bash

  <(list)
or
  >(list)

comm -3 <(sort file1 | uniq) <(sort file2 | uniq)
```

In this example, we're using process substitution to sort and find the unique lines in each file and then compare them using the 'comm' command. As you can see, the output is the same as the traditional method, but with a more efficient and streamlined approach.

One of the main benefits of process substitution is that it enables reading directly from another process, which can often be faster than having to write a temporary file and then read it back in. This not only saves time but also avoids the need for disk space. Additionally, the substituted process can run concurrently, which means that shell scripts can take advantage of multiprocessing to reduce the total time for computation.

It's worth noting that process substitution has been available as a compile-time option for the Korn shell (ksh88) since 1988. The Bash shell also provided process substitution no later than version 1.14, released in 1994. This means that process substitution has been available for quite some time and is a well-established technique in the shell scripting world.

In conclusion, process substitution is a powerful and efficient technique that provides a streamlined approach to managing shell pipelines. By avoiding the need for temporary files and enabling direct reading from another process, process substitution can save time and reduce the complexity of shell scripts.
