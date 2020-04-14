---
title: "Process Substitution"
date: 2019-04-24
author: Linux-Bytes
tags: 
  - process
  - substitution
  - multi
---


In the shell piping, the stdout of a command into the stdin is a powerful technique in the terminal. But, what happens if you need to pipe the stdout of multiple commands, for example comparing and sort text data? Let use an example of where process substitution can be used.


example:

```bash

  <(list)
or
  >(list)

```

Now let try view the lines unique to each of these two unsorted files with using process substitution.

```bash

> sort file1 | uniq >ex1
> sort file2 | uniq >ex2
> comm -3 tmp1 tmp2
        c
        d
        f
> rm ex1 ex2

```

as you can see both files needed to be created in order to compare, with process substitution we can do all this with one line

```bash

> comm -3 <(sort a | uniq) <(sort b | uniq)

         c
         d
         f

```
Let's point what makes process substitution a great shell technique. First, there is no need to save temporary files or create named pipes first. Secondary Reading directly from another process is often faster than having to write a temporary file to this k, then read it back in. Which make this not tie to the IO and won't require disk space. The substituted process can be running concurrently, which can make shell scripts to taking advantage of multiprocessing to reduce the total time for the computation.

#### Wiki History

Process substitution was available as a compile-time option for ksh88, the 1988 version of the Korn shell from Bell Labs.[1] The Bash shell provided process substitution no later than version 1.14, released in 1994



![wiki source](https://en.wikipedia.org/wiki/Process_substitution)

