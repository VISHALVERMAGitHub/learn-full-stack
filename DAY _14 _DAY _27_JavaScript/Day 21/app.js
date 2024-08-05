//----...array Method-------forEach---

let arr=[1,2,3,4,5];
// let print=function(el){
//     console.log(el);
// }
// arr.forEach(print);
let print=(el)=>{
    console.log(el);
}
arr.forEach(print);

let arr1=[{name:"vishal",marks:84},{name:"vikas",marks:97},{name:"amit",marks:90}]
arr1.forEach((student)=>{
    console.log(student.name + " " +student.marks);
    
});


//-------------map---------
/*
let doubleOf_arr=arr.map((el)=>{
    return el*2;
});
console.log(doubleOf_arr);
*/
//-----filter method----------
/*
let num=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let ans_even=num.filter( (el)=>{            // even number
    return (el%2==0);
});
let ans_odd=num.filter( (el)=>{            // even number
    return (el%2!=0);
});
console.log(ans_even);
console.log(ans_odd);
*/
//------every and some method-----------
/*
let arr=[1,2,3,4,5];
let f=arr.every((el)=>(el%2==0));
let even=[2,4];
let t=even.every((el)=>(el%2==0));

let num=[1,2,4];
let final_logical_OR=num.some((el)=>(el%2==0));
console.log(final_logical_OR);
*/
//---------reduce method---------
/*
let arr=[1,2,3,4];
// let finalvalue=arr.reduce((res,el)=>(res+el));
let finalvalue1=arr.reduce((res,el)=>{
    console.log(res);
    console.log("vishal");
    return res*el});
// console.log(finalvalue);
console.log(finalvalue1);

let arr1=[1,8,23,65,84,96,12,56,23,45,112,123];
let maxValue=arr1.reduce((max,el)=>{
    
    if(max<el){
        return el;
    }
    else
        return max
});
console.log(maxValue)
*/

//-------********* practice que -------**********
/*
//----------check if all numbers in array are multiple of 10 or not
let arr=[20,200,30,40,100,90,40,450];
let res=arr.every((el)=>el%10==0);
console.log(res);
//--------------create a function find min value from the array-----------
let arr1=[199,87,493,654,282,3,94];
function getMin(num){
    
    let minValue=arr1.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
    
});
// console.log(minValue);
return minValue;
}
*/


