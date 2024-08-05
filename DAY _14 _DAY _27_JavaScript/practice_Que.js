//-----------------------------------------------day 16---------------------------------------

// -----------------------que1.----------- 
    // let msg=prompt("enter your string with spaces");
    // console.log("before :",msg);
    // console.log("trim and UpperCase:",msg.trim().toUpperCase());
    // console.log("after:",msg);

// ----------------que2--------
    // let str="ApnaCollege";
    // console.log("slice string :",str.slice(4,9));
    // console.log("replace string :",str.replace("Apna","Our"));
    // console.log("actual string :",str);
    // console.log("index of argument string :",str.indexOf("na"));

    // ------------que3 seprate college form above input replace "l" with "t" in it.------
   
    // let newstr=str.slice(4).replace("l","t");
    // console.log("seprate college form ApnaCollege input replace 'l' by 't' ",newstr);




    // ---------------------------------java script part 3--------------------------------------------------------------
                         // ------------------Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n=3 Print, [7, 9, 0]

// let arr =[1,5,8,9,6,4,5,6,4,6];
// let  n=prompt("enter your number<10");
// // console.log(arr.splice(0,n));
// console.log(arr.slice(0,n));
// console.log("arr : ",arr);

                //--------------------qs2:


// let arr =[1,5,8,9,6,4,5,6,4,6];
// let n=prompt("enter your number<10");
// // console.log(arr.splice(0,n));
// console.log(arr.slice(-n));
// console.log("arr : ",arr);

                        // ------------------que3. Write a JavaScript program to check whether a string is blank or not
// let str=prompt("Enter your string");                    
// if(str.length==false){
//     console.log("string is blank");
// }
// else{
//     console.log("string is not blank");
// }
                        //---------que4.---Write a JavaScript program to test whether the character at the given (character) index is lower case


// let str1=prompt("enter your string");
// let indx=prompt("enter your index");
// if(str1[indx]==str1[indx].toLowerCase()){
//     console.log("present charecter at index is LowerCase");
// }

// else{
//     console.log("present charecter at index is UpperCase");
// }

// ------------------------------que5.Write a JavaScript program to strip leading and trailing spaces from a string.-------
// let str3=prompt("Enter string ,this string may be start with space and end with space");
// if(str3[0]==" " || str3[str3.length -1]==" " ){

//     console.log(`original string- ${str3} `,":","trim string-",str3.trim());
// }
// else{
//     console.log(str3);
// }


// --------------------------- que6. Write a JavaScript program to check if an element exists in an array or not.--------
// let input=prompt("Enter your input");
// let check=prompt("Enter checking element");
// console.log(input.indexOf(`${check}`));
// if(input.indexOf(`${check}`)>-1){
//     console.log(`${check}`+" is present");
// }
// else{
//     console.log(`${check}`+" is not present");
// }


//***********************>>>>>>---day 16---->>>>>>>>>>>******************

//--------------------start---------Day17-------------------------------------------------------------------------------------------------

// let i=1;
// for(i;i<=5;i++){
//     console.log(i);
// }
// console.log("after loop: ",i);


// let n=prompt("0-n ke beech odd number:n= ");
// for(let i=0;i<=n;i++){
//     if(i%2!=0)
//         console.log(i);
// }

// let n=prompt("0-n ke beech even number:n= ");
// for(let i=0;i<=n;i++){
//     if(i%2==0)
//         console.log(i);
// }

// let n=prompt("table of given number by user: ");
// for(let i=1;i<=10;i++){
//     console.log(i*`${n}`);
// }


// let fevMovie="ironman";
// let guess=prompt("geuss fevMovie of user without space or for STOP GUESS: Enter quit");
// while(fevMovie!=guess.toLowerCase()&& guess!="quit"){
//     alert("Wrong geuss");
//     guess=prompt("geuss fevMovie of user without space or for STOP GUESS: Enter quit");
// }
// console.log("fevMovie: ",fevMovie);


// let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]]
// for(let i=0;i<heroes.length;i++){
//     console.log(`i=${i}`,heroes[i],heroes[i].length);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// -----------------{for of } loop-----------


// let fruits=[["apple","banana","orange","pineapple","lichhi"]];
// for(fruit of fruits){
//     console.log(fruit);
// }


// let collections=[["apple","banana","orange","pineapple","lichhi"],["ironman","spiderman","thor"],["superman","wonder women","flash"]];
// for(collection of collections) {
//     for(coll of collection){
//         console.log(coll);
//     }
// }

// for(char of "vishalvermaa"){
//     console.log(char);
// }


//---------------------------todo app------------------------


// let todo=[];
// while(true){
//     let req=prompt("Please enter your request.Requesrt may be add ,delete,quit and list");
//     if(req.toLowerCase()=="quit"){
//         console.log("Quitting app");
//         break;
//     }
//     else if(req.toLowerCase()=="list"){
//         if(todo.length==0)
//             console.log("No element in todo");
//         else{
//             for(task of todo){
//                 console.log(todo.indexOf(task)," ",task);
//             }
            
//         }
//     }
//     else if(req.toLowerCase()=="add"){
//         let task=prompt("Please enter element");
//         todo.push(task);
//         console.log("added task");
//     }
//     else if(req.toLowerCase()=="delete"){
//         let inx=prompt("Please enter index");
//         console.log("deleted element: ",todo.splice(inx,1));
        
//     }
//     else{
//         console.log("wrong request");
//     }
    
// }



// const array = [1, 2, 3,9,5.3];

// // Array.prototype.someMethod = true;

// for (const i in array) {
//   console.log(i);
// }


//*************************---end day 17-------***********


//-----------------------------------------------------day 18-----------------------
//=====random value 1to 100

// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));

//           //=====random value 1to 5

// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);
// console.log(Math.ceil(Math.random()*5)+20);

//-----Qs1. Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].

// console.log(Math.floor(Math.random()*6)+1);

//----------Qs2. Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name

// const car={name:"bmw",model:"xDRIVE50",color:["blue","dark","silver"]};
// console.log(car.name);
// console.log(car["name"]);


//----------Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States----------------------------------------

// const person ={name:"vishal verma",age:21,city:"delhi"};
// console.log(person.city);
// person.city="New York";

// person.country="United States";



//************---------------------------day 19 prctice question-----------------------*****************
//-----------que1-------

// let num=prompt("enter your number");
// let arr=[13,74,2,4,6,7,9,12,34,56];
// function greaterNum(num,arr){
//     for(let i=0;i<arr.length;i++){
//         if(num<arr[i]){
//             return arr[i];
//         }
        
//     }
//     console.log("Not persent any element");
// }

// console.log(greaterNum(num,arr));


// ------------que2----------
// ---1st Method

// let str="abcdabcdefgggh";
// let str1="";
// // console.log(!str1.includes(str[0]));
// for(let i=0;i<str.length;i++){
//     // let ch=str[i];
//     if(!str1.includes(str[i])){
//         str1+=str[i];
//     }
// }
// console.log(str1);

//---- 2nd Method
// let str="abcdabcdefgggh";
// console.log(str[0]);
// let str1="";

// for(let i=0;i<str.length;i++){
//     if(str1.indexOf(str[i])==-1){
//         str1+=str[i];
//     }
// }
// console.log(str1);

//-----------que3--------


// function longestName(country){
//     let indxLongName=0;
//     for(let i=0;i<country.length;i++){ 
//         let anslen=country[indxLongName].length
//         let currLen=country[i].length;
//         if(currLen > anslen){
//             indxLongName=i;
//             console.log(i);
//         }
//     }
//     return country[indxLongName];
// }
// let country=["Australia", "Germany", "United States of America"];
// console.log(longestName(country));

//--que4---------------

// function NoOfVowls(st1){
//     let vowel=["a","e","i","o","u"];
//     let count=0;
//     for(let i=0;i<st1.length;i++){
//         if(st1[i]=="a" || st1[i]=="e"|| st1[i]=="i"|| st1[i]=="o"|| st1[i]=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// let str1=prompt("Enter your string");
// console.log(str1);
// console.log(NoOfVowls(str1));

//--------que5
