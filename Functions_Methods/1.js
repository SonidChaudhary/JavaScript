//! Call method


//Example of call method 

var obj1={
    name: "Sonid",
    age:20,
    detail: function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}


var obj2={
    name:"Rahul",
    age: 18,
   
}

obj1.detail.call(obj2);

// Which obj1 methods takes parameter 

var obj1={
    name: "Sonid",
    age:20,
    detail: function(car,balance){
        console.log(`My name is ${this.name} and my age is ${this.age} . I own ${car} & i have ${balance} bank balance` )
    }
}


var obj2={
    name:"Rahul",
    age: 18,
    
   
}

obj1.detail.call(obj1,"bmw",999999)   //Arguments are passed separately 

//! Apply methods 
//! In Apply method : Arguments are passed as an array . and instead of call we write apply 
// this is the only difference between apply and call methods 

//Example

var obj1={
    name: "Sonid",
    age:20,
    detail: function(car,balance){
        console.log(`My name is ${this.name} and my age is ${this.age} . I own ${car} & i have ${balance} bank balance` )
    }
}


var obj2={
    name:"Mihir",
    age: 90,
    
   
}

obj1.detail.apply(obj2,["bmw",99999])


//! Bind method 
// with this method we can bind an object to the common function so that function gives different results when needed 


// example 

var obj1={
    name: "sonid",
    age :22

}
var obj2={
    name:"rahul",
    age:18
}
function details(){
    console.log(` Bind - Method : My name is ${this.name} and my age is ${this.age}`)
}

//using bind method
// nameofcommonfunction.bind(object to be binded with common function)  , it creates a new function and we need to store 
// that function in a variable and we can call that function 

var sonid=details.bind(obj1);
sonid();

var rahul=details.bind(obj2);
rahul();

//! passing argument in common function in bind method 

function details(car){
    console.log(` Bind - Method : My name is ${this.name} and my age is ${this.age} and my car is ${car}`)

}

sonid("bmw");

