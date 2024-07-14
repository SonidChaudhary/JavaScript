//! Pure Function

let add=(a,b)=>{
    return a+b;
}
console.log(add(2,3));
console.log(add(2,3));


//! Impure Function 

let value = 0;
let total=(newval)=>{
    value +=newval
    return value;
}
console.log(total(5));
console.log(total(5));