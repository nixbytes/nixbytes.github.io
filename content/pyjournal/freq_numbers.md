---
title: 'Freq Digits'
date: 2020-07-07
draft: true
---

Given an integer number, find the most frequent digit in it.

- how to count things efficiently?

- keep calm and code in Python!

Let use the statistics that comes with python stand library

## Statistic Module

This module provides functions for calculating mathematical statistics of numeric (Real-valued) data.


```python
import statistics 
from statistics import mode 
```

This module statistics offers a Single mode (most common value) of discrete or nominal data.
The values or method to find this is to convert the vaules into a string and then back again once the frequent digit is
found


```python
def freq_digit(num: int) -> int:
    numbers = list(str(num))
    return int(mode(numbers))
```

## Trying out a value

Next we want to test a value


```python
num_list = 12345
```

## Finally 

we can run the function with some additional values and input


```python
freq_digit(num_list)
```




    1




```python
freq_digit(12334433)
```




    3




```python
freq_digit(773283277)
```




    7




```python
freq_digit(1121)
```




    1


