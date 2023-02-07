---
title: "Hello Assembly"
date: 2023-02-05
---

The symbols and incantations that make up the assembly-like code. Interestingly, this language for the CPU is closer to the machine code that a computer can understand, providing greater control over the hardware. Reading and writing are more challenging than high-level programming languages like Javascript or Python. The main is using a basic concept of hello world and memory stack. With Today's AI, Cloud, and other buzz words technology stack, it's nice to come back to the roots sometimes and see how things work on a simple level


```asm
# x86 Assembly Basics

.global _start
.intel_syntax
.section .text

# Basic string to be push on teh stacks and write it out to stdout


_start:
        push 0x00434241
        mov %eax, 4 # write = 4
        mov %ebx, 1 # stdout = 1
        mov %ecx, %esp
        mov %edx, 3
        int 0x80
        # Exit syscall
        mov %eax, 1
        mov %ebx, 65
        int 0x80

# basic print sting out to stdout

.section .data
        message:

```
