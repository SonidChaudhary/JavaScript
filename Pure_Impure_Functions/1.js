//! Pure Function: The fuction whoes output remains same for the same inputs if we call it multiple times is known as Pure function
//! Impure function: The function whoes output changes everytimes we all the function even with the same inputs is known as impure function


//! Pure Function Example

let add=(a,b)=>{
    return(a+b);
}
console.log(add(2,3));    // output 5
console.log(add(2,3));    // again output 5



//! Impure Function


let price=0;

let total=(newprice)=>{

    price +=newprice;
    
    return price;

}
console.log(total(2));
console.log(total(7));