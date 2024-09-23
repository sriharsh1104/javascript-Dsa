let arr = [1,2,3,4,5,7,8,10,11,12,13];
const findMissingNum = (arr) => {
    // Calculate the expected sum of the first n numbers
    const n = arr.length + 1;  // Add 1 since one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
  }
  
  console.log(findMissingNum(arr));