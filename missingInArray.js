// QUESTIONS => Find the missing number in a given integer array of 1 to 100

// PROBLEM => I CAN ONLY FIND ONE NUMBER IN THIS ARRAY ... IF MORE NUMBER ARE MISSING WE CAN'T FIND IT IN IT

let arr = [1,2,3,4,6,5,7,8,10,11,12,13];
const findMissingNum = (arr) => {
    // Calculate the expected sum of the first n numbers
    const n = arr.length + 1; 
    console.log('n', n)

     // Add 1 since one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    console.log('expectedSum', expectedSum)
    
    // Calculate the actual sum of the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    console.log('arr.reduce', arr.reduce);
    
    console.log('actualSum', actualSum)

    
    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
  }
  
  console.log(findMissingNum(arr));