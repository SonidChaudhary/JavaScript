//! Filter Method
// The filter method crates a new array filled with the elements that pass a test provided by a function .
// It is a powerful tool for selectively extracting data from arrays based on specified criteria 



let arr =[1,2,3,4,5]
let even=arr.filter((ele)=>{
    return ele%2==0;

})
console.log(even);

//! it also works for filtering in array of objects . means there will be objects inside that array as an array elements
let persons=[
    {
        name:"Sonid",
        age:22
    },
    {
        name:"Rahul",
        age:18
    },
    {
        name:"Raju",
        age:10
    }
]
let adult=persons.filter((p)=> p.age>=18
)

console.log(adult)
    