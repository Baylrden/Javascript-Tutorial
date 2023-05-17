// Promise = object that encapsulates the result of asynchronous operation
//   let asynchronous methods return values like synchronous methods
//   "I promise to return something in the future"

//   the STATE is 'pending' then : 'fulfilled' or 'rejected'
//   the RESULT is what can be returned
//   2 parts: producing & consuming



const promise = new Promise((resolve,reject) => {
 
    let fileloaded  = false;

    if(fileloaded){
        resolve("File loaded");
    }

    else{
        reject("File not loaded");
    }




});

promise.then((value) => console.log(value))
.catch(error => console.log(error));







/*
const wait = new Promise(resolve => {
    
    //"wait" is our promise.

    setTimeout(resolve,5000);


});

promise.wait(()=>console.log("thanks for waiting!"));*/