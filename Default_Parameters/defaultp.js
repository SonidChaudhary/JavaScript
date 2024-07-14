//! Default parameter 
//! assiging initial value to the named paramater using the time of function declaraton so it can handle
//! even if we call that function with less argument than the parameter 
//! it prevent functions to return undefined and NaN


//! without default parameter 
let mul=(a,b)=>{
    return (a*b);

}
console.log(mul(2));  // since we are providing only one argument so it is returning NaN
                      // As it was expecting 2 arguments

//! with default parameter 

let add=(a, b=2)=>{  // Here we have initialized one parameter 
        return (a+b)   

}
console.log(add(2)) // this time even if we passing less argument than the expected one 
                    // It will give the output . 


