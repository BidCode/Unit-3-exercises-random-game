// // unit 3 exercises

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------


// // Timers Exercise 

// function countDown (num1) {
//     setInterval(function () {
//         if (num1 <= 0) {
//             console.log('DONE!')
//             clearInterval(1);
//         } else {
//             console.log(num1--)
//         }
//     },1000)
  
// }

// countDown(3);

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------


// // Random Game Exercise 

// function randomGame () {
   
//     let counter = 0;
//     let randNum;

   
//   let timer =  setInterval(function () {
//         randNum = Math.random();
//        console.log(randNum);
//        counter++;
//        if(randNum > .8) {
//            clearInterval(1)
//            console.log('our game is done');
//            console.log('counter is ',counter);
         
//        }
       
//     }, 100);

  
// }

// randomGame();


// // -----------------------------------------------------------------
// // -----------------------------------------------------------------

// // Random Game Exercise WITH ONE FLAW
// but the counter wont go up because I didnt assign a variable
// to my set interval function 
// why does assigning a variable to this annoymous function 
// make the counter go up (as in update the variable counter?)

// function randomGame () {
   
//     let counter = 0;
//     let randNum;

   
//     setInterval(function () {
//         randNum = Math.random();
//        console.log(randNum);
//        counter++;
//        if(randNum > .8) {
//            clearInterval(1)
//            console.log('our game is done');
//            console.log('counter is ',counter);
         
//        }
       
//     }, 100);

  
// }

// randomGame();