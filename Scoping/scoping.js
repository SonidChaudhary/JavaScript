//! Scoping: In JavaScript, objects and functions are also variables. 
//!Scope determines the accessibility of variables, objects, and functions from different parts of the code.

//Types of Scope in JavaScript
//! 1 Variable scope 
//! 2 Block scope
//! 3 Function scope
//! 4 Local scope
//! 5 Global scope

// Variable Scoping 

//  Var variable 
//! var has function scope 
//! var declared inside function cant be accessed outside the function 
//! var decleared inside the block can be accessed outside of the block also 
//! var can be hoisted 

if (true){
    var x=10;

}  //var declared inside the block still var is accessed outside of the block
console.log(x);  //output: 10;

{
    var don="king"
} //var declared inside the block still var is accesses outside of the block
console.log(don);  //output: king;

// function ram(){
//     var money=9999;
// }                     //since var is written inside function we cant access it outside of the function so it has function scope 
// console.log(money);   // output: error


//! let variable
//! let has block level scoping 
//! let has be hoisted 

{
    let k=2;
    console.log(k," ", " value of K") // here we cab access k has k is inside block . 
}
// console.log(k," " ,"k value");  //reference error because let k have only block level scope and we cant access it outside of the block

//! we can't access let outside the block so it has block scope 

// function kam1(){
//     {    
//         var u=20;
//         let f=10;

//     }
//     console.log(u);  // var  has function  scope so it var can be accessed out of the block also if it is inside function but it can't be accessed outside of the function 
//     console.log(f); // let gives the reference error as let has block scope although it is inside function it can't be accessed outside of its block

// }
// kam1()  


//! Const variable 
// same block scope as the let have all examples are same 
//  It is used to declare constants and has block scope. Unlike let, a const variable cannot be reassigned.
//! hositing cant be hoisted because it cant be reassigned 




