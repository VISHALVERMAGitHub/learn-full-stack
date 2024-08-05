function greaterNum(num,arr){
    for(let i=0;i<arr.length;i++){
        if(num<arr[i]){
            return arr[i];
        }
        
    }
    console.log("Not persent any element");
}
let num=prompt("enter your number");
let arr=[13,74,2,4,6,7,9,12,34,56];
greaterNum(num,arr)