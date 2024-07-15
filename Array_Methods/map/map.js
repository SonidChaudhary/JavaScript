//! Map method
// It returns all the elements in one new array
// original array is not modify because it returns all the elements in new array 

let array=[1,2,3,4,5]
let res= array.map((ele,index,array)=>{
    return (array)
})
console.log(res);

// whenever you return array it will return a nested array in which each elements will be in one array 
// [[arr1],[arr2],[arr3],[arr4],[arr5]] and the no of element in this array will be same as the no. of element in the previous array