# Insertion Sort

Wikipedia Article: [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)

## Inputs, process and outputs

### Simple Algo

```
Input: [7, 6, 5, 4, 3, 2, 1]

Swap 1: [6, 7, 5, 4, 3, 2, 1]
Swap 2: [6, 5, 7, 4, 3, 2, 1]
Swap 3: [5, 6, 7, 4, 3, 2, 1]
Swap 4: [5, 6, 4, 7, 3, 2, 1]
Swap 5: [5, 4, 6, 7, 3, 2, 1]
Swap 6: [4, 5, 6, 7, 3, 2, 1]
Swap 7: [4, 5, 6, 3, 7, 2, 1]
Swap 8: [4, 5, 3, 6, 7, 2, 1]
Swap 9: [4, 3, 5, 6, 7, 2, 1]
Swap 10: [3, 4, 5, 6, 7, 2, 1]
Swap 11: [3, 4, 5, 6, 2, 7, 1]
Swap 12: [3, 4, 5, 2, 6, 7, 1]
Swap 13: [3, 4, 2, 5, 6, 7, 1]
Swap 14: [3, 2, 4, 5, 6, 7, 1]
Swap 15: [2, 3, 4, 5, 6, 7, 1]
Swap 16: [2, 3, 4, 5, 6, 1, 7]
Swap 17: [2, 3, 4, 5, 1, 6, 7]
Swap 18: [2, 3, 4, 1, 5, 6, 7]
Swap 19: [2, 3, 1, 4, 5, 6, 7]
Swap 20: [2, 1, 3, 4, 5, 6, 7]
Swap 21: [1, 2, 3, 4, 5, 6, 7]

Output: [1, 2, 3, 4, 5, 6, 7]
```

### Optimized Swap Algo

```
Input: [7, 6, 5, 4, 3, 2, 1]

Swap 1: [7, 7, 5, 4, 3, 2, 1]
Swap 2: [6, 7, 7, 4, 3, 2, 1]
Swap 3: [6, 6, 7, 4, 3, 2, 1]
Swap 4: [5, 6, 7, 7, 3, 2, 1]
Swap 5: [5, 6, 6, 7, 3, 2, 1]
Swap 6: [5, 5, 6, 7, 3, 2, 1]
Swap 7: [4, 5, 6, 7, 7, 2, 1]
Swap 8: [4, 5, 6, 6, 7, 2, 1]
Swap 9: [4, 5, 5, 6, 7, 2, 1]
Swap 10: [4, 4, 5, 6, 7, 2, 1]
Swap 11: [3, 4, 5, 6, 7, 7, 1]
Swap 12: [3, 4, 5, 6, 6, 7, 1]
Swap 13: [3, 4, 5, 5, 6, 7, 1]
Swap 14: [3, 4, 4, 5, 6, 7, 1]
Swap 15: [3, 3, 4, 5, 6, 7, 1]
Swap 16: [2, 3, 4, 5, 6, 7, 7]
Swap 17: [2, 3, 4, 5, 6, 6, 7]
Swap 18: [2, 3, 4, 5, 5, 6, 7]
Swap 19: [2, 3, 4, 4, 5, 6, 7]
Swap 20: [2, 3, 3, 4, 5, 6, 7]
Swap 21: [2, 2, 3, 4, 5, 6, 7]

Output: [1, 2, 3, 4, 5, 6, 7]
```

### Swap count (Time complexity)

For an array with N values:

swaps  = 1 + 2 + 3 + ... + N-1 =  (N-1)(N-1+1)/2 = approximately N^2/2 
