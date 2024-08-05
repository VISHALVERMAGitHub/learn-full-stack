//------------------create post--------

// const post={
//     username:"@vishalverma",
//     content:"This is myfirstpost",
//     likes:150,
//     reposts:5,
//     tags:["@powerpoint","@wordpad"]
//   };

// //---------get value------
// //-------------------access value different method
// console.log(post["username"]); 
// console.log(post["content"]);
// console.log(post.content);

// let prop="likes";
// console.log(post[prop]);

//----------------add,update,delete

// const student={
//   name:"vishal",
//   age:21,
//   marks:94.4,
//   city:"delhi"
// };
// console.log("before: ",student)
// student.city="mumbai";//update
// student.gender="male";//add
// student.marks="A";// kuch bhi add kar sakte hai like: string || char||array||boolean 
// student.contact="mob N0";
// console.log("After: ",student);

// delete student.contact;
// console.log("After delete contact : ",student);

//---------object of object-----------

// const classinfo={
//   vishal:{grade:"a+",city:"Delhi"},
//   vikas:{grade:"a++",city:"banglore"},
//   amit:{grade:"a+",city:"lucknow"}
// };
// console.log(classinfo);
// console.log(classinfo.vishal);
// console.log(classinfo.vishal.city);
// classinfo.vishal.city="Ghaziabad";
// console.log(classinfo.vishal);


//--------array of object-----

// let arr=[{name:"vishal",grade:"a+",city:"Delhi"},
// {name:"vikas",grade:"a++",city:"banglore"},
// {name:"amit",grade:"a+",city:"lucknow"}];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].name);
// console.log(arr[1]);
// arr[0].gender="male";
// console.log(arr[0].gender);


//-----Math object--------

// console.log(Math.abs(5.6214));
// console.log(Math.abs(-5.6214));
// console.log(Math.floor(5.99999));
// console.log(Math.floor(5.1637));
// console.log(Math.ceil(5.9999));
// console.log(Math.ceil(5.12112));
// console.log(Math.random());
// console.log(Math.random());


// -----------guessing game-----

// let num=prompt("enter number");
// let randomNum=Math.ceil(Math.random()*num);
// // console.log(randomNum);
// let guess=prompt(`enter guess number 1 to ${num} OR enter quit for quit game` );
// while(true){
  
//   if(guess.toLowerCase()==="quit"){
//     console.log("quit game");
//     break;
//   }
//   if(guess==randomNum){
//     console.log("Your guess is correct.");
//     break;
//   }
//   else if(guess<randomNum){
//     guess=prompt(`Hint:your number was too small, please try again  enter 1 to ${num} OR enter quit for quit game`)
//   }
//   else{
//     guess=prompt(`Hint: Your number was too large,please try again enter 1 to ${num} OR enter quit for quit game`)
//     // guess=prompt(`Your guess was wrong,please try again 1 to ${num} OR enter quit for quit game` );
//   }
  
// }




