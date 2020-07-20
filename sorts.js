const comparisonFunction = (a, b) => {
  return a - b;
};

const quickSort = (arr, leftPos, rightPos, arrLength) => {
  let initialLeftPos = leftPos;
  let initialRightPos = rightPos;
  let direction = true;
  let pivot = rightPos;
  while (leftPos - rightPos < 0) {
    if (direction) {
      if (arr[pivot] < arr[leftPos]) {
        quickSort.swap(arr, pivot, leftPos);
        pivot = leftPos;
        rightPos--;
        direction = !direction;
      } else leftPos++;
    } else {
      if (arr[pivot] <= arr[rightPos]) {
        rightPos--;
      } else {
        quickSort.swap(arr, pivot, rightPos);
        leftPos++;
        pivot = rightPos;
        direction = !direction;
      }
    }
  }
  if (pivot - 1 > initialLeftPos) {
    quickSort(arr, initialLeftPos, pivot - 1, arrLength);
  }
  if (pivot + 1 < initialRightPos) {
    quickSort(arr, pivot + 1, initialRightPos, arrLength);
  }
};
quickSort.swap = (arr, el1, el2) => {
  let swapedElem = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = swapedElem;
};

var i, arr1, arr2, length;

length = 1000000;

arr1 = [];
arr2 = [];
for (i = 0; i < length; i++) {
  arr1.push(Math.random());
  arr2.push(Math.random());
}

console.time("nativeSort");
arr1.sort(comparisonFunction);
console.timeEnd("nativeSort");

console.time("quickSort");
quickSort(arr2, 0, length - 1, length);
console.timeEnd("quickSort");
