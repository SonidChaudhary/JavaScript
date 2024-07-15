//! It returns the sliced array in new array
// syntax
// takes 2 parameter starting and ending 
// slice(startindex, endindex)

// If you dont provide any arguments it returns the original array as same
// if we dont provide the 2nd argument it returns the array from mentioned starting index to ending index
let arr=[0,1,2,3,4,5,6,7,8,9,10]
let exa= arr.slice()  //output [0,1,2,3,4,5,6,7,8,9,10]
console.log(exa);     

exa=arr.slice(0) //[0,1,2,3,4,5,6,7,8,9,10] returns the array from mentioned staring index to end index
console.log(exa);

exa=arr.slice(1,7); //[1,2,3,4,5,6] //! returns the array from starting index to ending index where ending index is non- inclusive
console.log(exa);

exa =arr.slice(15,20); // if the arguments dont matches the array indexes it will return empty array
console.log(exa);   // output []

exa =arr.slice(-3); //negative index returns  the elements from the last in new array 
console.log(exa);   // output [8,9,10]

exa = arr.slice(-100); //it returns all the elements upto -100 index since this array has elements only up to -11 index so it is returning whole elements of array
console.log(exa);

//! Note always the 2nd argument index will be non inclusive 

// for more practise and example visit  this website 
// https://www.executeprogram.com/courses/javascript-array/lessons/slice-with-negative-arguments#:~:text=Both%20start%20and%20end%20can,t%20included%20in%20the%20slice.

