//  Find a duplicate number in an array of integers.
// ABLE TO FIND THE REPEATED NUMBER IN ARRAY BUT PROBLEM IS THAT ONLY ABLE TO FIND 1 NUMBER WHICH IS REPEATED NOT ALL

const arr = [1,2,3,4,5,6,6,7,7,8,6,10];
console.log('arr', arr,arr.length)
const findDupes = (arr) => {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }
  
  return false;
}
console.log(findDupes(arr)); // Returns 7
