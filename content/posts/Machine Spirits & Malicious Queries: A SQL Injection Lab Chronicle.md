---
title: "Machine Spirits & Malicious Queries: A SQL Injection Lab Chronicle"
date: 2026-03-18
author: NixBytes
tags:
  - Exploits
  - Injection
  - SQL
  - Queries
  - UNION
---
##  Machine Spirits & Malicious Queries: A SQL Injection Lab Chronicle

In the grim darkness of the modern internet, there is only… vulnerable input fields.

Recently, I completed a hands-on cybersecurity lab from portswigger focused on identifying the number of columns returned by a database query using a UNION-based SQL Injection technique. While performing the exercise, I couldn’t help but imagine the process through the lens of the techno-mystic engineers of the Adeptus Mechanicus from the universe of Warhammer 40,000.

To them, machines possess spirits. To a security tester, applications behave in similarly mysterious ways—responding to carefully crafted inputs like ancient systems awaiting the correct command rites.


## The Lab Objective: Decoding the Machine

The application in the lab contained a **SQL injection vulnerability in a product category filter**. Because the query results were reflected in the application response, it allowed the use of a UNION-based attack to retrieve data from other tables.

But before extracting any hidden knowledge from the database, the first ritual must be performed:

Determine the number of columns returned by the original query.

Without this knowledge, a UNION attack will fail—much like a Tech-Priest attempting to interface with a sacred machine without first understanding its ports and conduits.


## The Ritual of Incremental UNION Queries

The method used involves submitting a sequence of payloads that gradually increase the number of `NULL` values:

```
' UNION SELECT NULL--
' UNION SELECT NULL,NULL--
' UNION SELECT NULL,NULL,NULL--
```

Each attempt is a probe into the machine’s inner structure.

If the number of columns in the injected query **does not match** the original query, the database responds with an error such as:

> “All queries combined using a UNION, INTERSECT or EXCEPT operator must have an equal number of expressions in their target lists.”

In other words: the rite was performed incorrectly.


## Why NULL is the Sacred Offering

In this technique, `NULL` values are used because of their flexibility.

Databases require that the data types in both queries be compatible. Since `NULL` can be converted into most data types, it becomes the perfect placeholder when trying to match the column structure of the original query.

Think of it as offering a **universal key** to the machine spirit—one that fits almost any lock.


## Observing the Machine’s Response

Once the correct number of `NULL` values matches the column count, the database accepts the UNION query.

At this moment, something interesting happens.

The database returns **an additional row containing NULL values** across all columns.

Depending on how the application processes the response, this may appear as:

* An extra row in a table
* A new error caused by null values
* Subtle changes in the HTTP response
* Or sometimes no obvious difference at all

Interpreting these signals is part science and part intuition—very much like diagnosing the temperament of a stubborn machine spirit.


## The Outcome

By iterating through these UNION SELECT payloads, I was able to successfully determine the number of columns returned by the query.

This step is foundational for more advanced exploitation techniques, such as:

* Identifying columns that accept text
* Extracting database information
* Retrieving sensitive data from other tables

Once the structure of the query is known, the path to deeper enumeration opens.


## Lessons from the Forge

This lab reinforced several key penetration testing principles:

 **Understand the structure before exploitation**
 **Observe subtle application responses carefully**
 **Use safe placeholder values like NULL when probing queries**
 **Iterative testing reveals hidden system behavior**

In many ways, penetration testing feels similar to the work of the Adeptus Mechanicus: studying ancient systems, experimenting carefully, and deciphering how hidden mechanisms respond to precise commands.

The difference is that instead of incense and sacred oils, we wield payloads and HTTP requests.

**The machine spirit has spoken—and the query structure has been revealed.**


*The Omnissiah approves of well-structured queries… and properly tested applications.* 🔧
