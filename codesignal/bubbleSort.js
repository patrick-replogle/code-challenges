/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Given an array of integers, sort it.

Example

For items = [2, 4, 1, 5], the output should be
bubbleSort(items) = [1, 2, 4, 5].
*/

// first pass solution
function bubbleSort(items) {
  const swap = (firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

  const len = items.length;
  for (let i = 0; i < len; i++) {
    const stop = len - i;
    for (let j = 0; j < stop - 1; j++) {
      if (items[j] > items[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return items;
}
