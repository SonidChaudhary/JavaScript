let pobj1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let rollno=[1,2,3,4,5]
        // resolve(rollno)
        reject("Roll no not Found")
    },9000)

});

pobj1.then((resolve)=>{
    console.log(resolve ,"Promise Fulfilled ")

},(reject)=>{
    console.log(reject)

})
