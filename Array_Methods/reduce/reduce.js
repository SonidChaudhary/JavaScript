//! Filter method
// it takes 2 argument that is reducer function and initial value . 
// initial value is optional if you don't mention initial value it will take first element of array as the initial value
//reduce(reducerfunction, initial_value)  
// reducer function takes 4 parameters
// (toltal/accumulator, current_value, current_index,arr) total/accumulator and current value is mandatory

//! total/accumulator specifies the initial value or previously returned value 
//! current value : Specify the value of current element


// syntax

let arr=[1,2,3,4,5]

let add= arr.reduce((total,current_val)=> {  // here we arent providing the initial value 
                                             // so the initial value will first element value 
                                             // and also the initial value of accumulator will be first element value 
                                             // and that iteration will be skipped 
    return total+current_val
         } )
console.log(add)
