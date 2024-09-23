// QUESTIONS => Find the missing number in a given integer array of 1 to 13

// PROBLEM => I CAN FIND ALL NUMBER BETWEEN IN THIS ARRAY

let arr = [1, 2, 3, 6, 5, 7, 8, 10, 11, 12, 13]; // Array with missing numbers

const findAllMissingNums = (arr, rangeStart, rangeEnd) => {
    // Create a full range of numbers
    const fullRange = Array.from({length: rangeEnd - rangeStart + 1}, (_, i) => i + rangeStart);
    console.log('fullRange', fullRange,rangeEnd,rangeStart)
    
    // Create a Set from the original array to speed up lookups
    const arrSet = new Set(arr);
    console.log('arrSet', arrSet)
    
    // Filter out numbers from the full range that are not in the original array
    const missingNums = fullRange.filter(num => !arrSet.has(num));
    console.log('missingNums', missingNums)
    
    return missingNums;
};

console.log(findAllMissingNums(arr, 0, 13));  // Looking for missing numbers between 0 and 13
