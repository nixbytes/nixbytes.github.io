---
title: "Regex Use Cases"
date: 2019-01-06
author: Linux-Bytes
tags:
    - regex
    - emails
    - search
    - IP
---

Regex's some hate some love, but in the end, we all need something productive in our life. Some people hate because the mini-language can be arcane. Others love it because it adds superpowers for text processing. Learning the arcane secrets of regex can be a rough experience, but it doesn't have to.

so let do some exercises on regex like emails and IP for your everyday technical needs

### Finding Mailing data

extract email adresses from some file


```regex
([[:alnum:]_.-]+@[[:alnum:]_.-]+?\.[[:alpha:].]{2,6})
```
1. `[:alnum:]`: Alphanumeric characters: `[:alpha:]` and `[:digit:]`; in the `C` locale and ASCII character encoding, this is the same as `[0-9A-Za-z]`.

2. `[ _.+]`: One of the characters in the brackets. in which looks for one of
   these characters `_.+` 

3. `?`: Makes quantifiers "lazy"

4. `\.`: Escapes a special character for the `.`

### Check for IP address

Look for IPv4 address in files


```
([0-9]{1,3}\.){3}[0-9]{1,3}
```

1. `[0-9]`: One of the characters in the range from 0 to 9

2. `{1,3}`: One to three times, "greedy"

3. `\.`: Escapes a special character for the `.`

Like any programming language, it just requires a bit of understanding to get the hang of it. Regex is very powerful can be used for varies of a task that is needed. so keep in mind sprinkle of regex can improve on any project you are working on the shell

- [By: rubenmoran](https://www.commandlinefu.com/commands/view/5668/extract-ipv4-addressess-from-file)
- [By: wires](https://www.commandlinefu.com/commands/view/2431/extract-email-adresses-from-some-file-or-any-other-pattern)
- [GNU Grep](https://www.gnu.org/software/grep/manual/html_node/Character-Classes-and-Bracket-Expressions.html)
