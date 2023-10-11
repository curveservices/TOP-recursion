//mergeSort an array
const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
        //Base case
    }
    //Split array in half
    const middle = Math.round(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    //Rcursively sort 2 halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}

const merge = (left, right) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //Compare elements and push smaller into output array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex]);
            leftIndex++;
        } else {
            output.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Concatenate any remaining elements from the left and right arrays
    return output.concat(left.slice(leftIndex), right.slice(rightIndex));
}
const unsortedArray = [4, 2, 8, 345, 123, 43, 32, 5643, 1]
const sortedArray = mergeSort(unsortedArray)
document.querySelector('.unsorted-array').textContent = `Unsorted Array  ${unsortedArray}`;
document.querySelector('.sorted-array').textContent = `Sorted Array  ${mergeSort(sortedArray)}`;
console.log('Unsorted array', unsortedArray)
console.log('Sorted array', mergeSort(sortedArray))
//Merge ES6
// const merge = (left, right) => {
//     let result = [];
//     while (left.length && right.length) {
//       result.push(left[0] < right[0] ? left.shift() : right.shift());
//     }
//     return [...result, ...left, ...right];
//   };

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }