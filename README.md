# Analyze Merge Sort
A Javascript Merge Sort algorithm and analyze its performance using Big O Notation.

## How the algorithm works

1. `arrCreatorBack` recive two arguments:
	* `arr` -> An array with numbers
		* Each number will be transform in an array with descending ordered numbers, and with the length of the initial value.
		* Example: [3, 7] -> [3, 2, 1] and [7, 6, 5, 4, 3, 2, 1]
	* `func` -> A function
		* `mergeSort` or `bubbleSort`

2. `mergeSort` will divide the array in smallest arrays with only one item
3. When `sortedLeft` and `sortedRight` hava a value conquer will run
4. `conquer` will return a sorted array that is the result of the concatination of `sortedLeft` and `sortedRight`
5. This way, conquer will sort each time biggest arrays until we have only one
