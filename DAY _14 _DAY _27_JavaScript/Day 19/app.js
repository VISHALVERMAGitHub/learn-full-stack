// function RollDice(){
//     console.log(Math.ceil(Math.random()*6));
// }
// RollDice();


//-------avg of three number---
// function avg(num1,num2,num3){
//     let avg=(num1+num2+num3)/3;
//     console.log(avg);
// }
// avg(73,76,53);
// avg(85,53,85);
// avg(853,243,76);


// table of number 
// function table(num){
//     for (let i=num;i<=num*10;i=i+num){
//         console.log(i);
//     }
// }
// table(5);

// sum of 1 to n number

// function sum(num){
//     return (num*(num+1))/2
// }
// console.log(sum(5))  


// -----------higher order function--------

function multipleGreet(func,n){  // multipleGreet() function is higher order function.
    for (let i=1;i<=n;i++){
        console.log(func());
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,5);
multipleGreet(function(){ console.log("namaste")},4);

// 