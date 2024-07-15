//! Splice 
// use to delete and add elements in the exsiting array
// it modifies the original array
// takes 3 argument staring index , no.of ele to be deleted from the staring element, element to be added or inserted 
// syntax:
//! splice(startindex,no.of element to be deleted,element to be inserted)
//! splice(index, no.of ele to be deleted, newele1, newele2,......)

// last two arugents are optional in splice 


//! splice method with only one argument 
let arr1=[1,2,3,4,5,6,7,8,9];
arr1.splice(1) // it will delete all the element starting from index 1 to last
console.log(arr1); // output : [1] because one is at index 0


//! splice method with 2 arguments
let arr2=[1,2,3,4,5,6,7,8,9];
arr2.splice(1,2) //it will not add anything it will just delete the no.of element mentioned starting from the index mentioned and returns all the other elements in the original array
console.log(arr2);  //output [ 1,4,5,6,7,8,9]


//!splice method with 3 arguments
let arr3=[1,2,3,4,5,6,7,8,9]
arr3.splice(1,2,"sonid"); // it will delete 2 items from the staring index mentioned and insert new ele after that 
console.log(arr3); //output [1,'sonid,4,5,6,7,8,9]

//! if we dont want to delete any ele but want to insert new ele at that index then make 2nd argument as 0
let arr4=[1,2,3,4,5,6,7,8,9]
arr4.splice(1,0,"sonid"); // 'sonid will get inserted at index 1 without deleting the ele at index 1
console.log(arr4); //output: [ 1, 'sonid', 2, 3, 4, 5, 6, 7, 8, 9 ]


//!splice with neagtive values as arguments 

let arr5=[1,2,3,4,5,6,7,8,9]
// arrayindex 
arr5.splice(-1,1) 
console.log(arr5);



// let arr =[1,2,3,4,5,6,7,8]
// // arr.splice(1,2,"sonid");
// // console.log(arr);

// // arr.splice(-2,2,"two_items_deleted")
// // console.log(arr);

// arr.splice(1)
// console.log(arr);