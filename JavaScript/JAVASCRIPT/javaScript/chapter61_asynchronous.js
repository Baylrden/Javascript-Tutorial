// synchronous code = In an ordered sequence.
//           Step-by-step linear instructions
//           (start now,finish now)

// asynchronous code = Out of sequence.
//              Ex. Access a database
//              fetch a file
//              Tasks that take time
//             (start now,finish sometime later)


//SYNCHRONOUS
// console.log("start");
// console.log("this is synch.");
// console.log("end");


//ASYNCHRONOUS
console.log("start");
setTimeout(() => console.log("this is asynch."),3000);
 console.log("end");
