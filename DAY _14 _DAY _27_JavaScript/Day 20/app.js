//------this keyword
// const student ={
//     name:"vishal",
//     age:23,
//     eng:95,
//     math:97,
//     phy:98,
//     getavg(){
//         console.log(this);
//         let avg=(this.eng + this.math + this.phy )/3;
//         console.log(`${this.name} got avg marks ${Math.ceil(avg)}`);
//     }
// }

// student.getavg();

// console.log(this)

//--------------try & catch---------
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("catch an error... a is not defined");
//     console.log(err);
// }
// let b="vishal";
// try{
//     console.log(b);
// }
// catch(err){
//     console.log("catch an error... a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");


//----------Miscellaneous topic--------
        //-----(a)----arrow function-----------
const sum=(a,b)=>{
    return a+b;
}
const cube= n=>{
    return n*n*n;
}
const pow=(a,b)=>{
    return a**b;
}



//------------------this with arrow function


