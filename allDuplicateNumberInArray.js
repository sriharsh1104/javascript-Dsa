//  Find a duplicate number in an array of integers.
// ABLE TO FIND THE REPEATED NUMBER IN ARRAY 

//FOR LOOP

const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 6, 10];

const findDupes = (arr) => {
  const observed = {};
  const duplicates = [];
  console.log('observed', observed)
  console.log('duplicates', duplicates)


  for (let i = 0; i < arr.length; i++) {
    if (observed[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      observed[arr[i]] = true;
    }
  }
  
  return duplicates.length > 0 ? duplicates : false;
};

console.log(findDupes(arr)); 



// For While loop
const array = [1, 2, 3, 4, 5,5, 6, 6, 7, 7, 8, 6,7, 10];

const findDuplicate = (array) => {
  const observed = {};
  const duplicates = [];
  let i = 0; 

  console.log('observed', observed);
  console.log('duplicates', duplicates);

  while (i < array.length) {
    if (observed[array[i]]) {
      if (!duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    } else {
      observed[array[i]] = true;
    }
    i++; // Increment index
  }
  
  return duplicates.length > 0 ? duplicates : false;
};

console.log(findDuplicate(array)); 
