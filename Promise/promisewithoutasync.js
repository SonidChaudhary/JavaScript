//! Promise without Aync function with just then and catch

function getusers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data.forEach((data) => {
            console.log(data.username)
            
        });
    })
    .catch((error)=>{
        console.log("errror")
    })
}
