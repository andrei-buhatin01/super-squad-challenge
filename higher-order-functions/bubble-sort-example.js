function test() {
    console.log('test');
}
const users = [{ id: 1, age: 25 }, { id: 2, age: 30 }, { id: 3, age: 18 }, { id: 4, age: 22 }, { id: 5, age: 19 }];
function sortByKey(arr, key) {
    // create a new array from a copy of passed in array with spread syntax
    let sortedArr = [...arr];
    let n = sortedArr.length;
    let temp;
    let isSwapped;
    // Ensure every item of the array is sorted
    for (let i = 0; i < n - 1; i++) {
        // console.log(sortedArr[i]);
        // move the next largest number to end through swaps
        // there have been no swaps yet on this loop
        isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // check if first item's age is greater than second item's age
            if (sortedArr[j][key] > sortedArr[j + 1][key]) {
                // users [{id: 1, age: 25}, {id: 2, age: 20}]
                // sortedArr = [{id: 1, age: 25}, {id: 2, age: 20}]
                // temp = {id:1, age: 25}
                // let temp = sortedArr[j];
                // // make the first object equal to the second object
                // sortedArr[j] = sortedArr[j + 1];
                // // make the second indexed object equal to the value of the first indexed object, that was saved in temp
                // sortedArr[j + 1] = temp;
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return sortedArr;
}

module.exports = { test, users, sortByKey }