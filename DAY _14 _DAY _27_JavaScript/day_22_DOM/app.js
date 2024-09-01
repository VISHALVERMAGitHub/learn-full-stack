// let small=document.getElementsByClassName("imgMain")[0];
// // small.src="https://thehillstimes.in/wp-content/uploads/2022/08/4.jpg"

// console.log(small.src);
// console.log("vishal");

//#######################------07-------
// let tag_name=document.getElementsByTagName('p')
// console.log(tag_name[0].innerHTML)


//#############-------08--------

// let para=document.querySelector('p')
// console.log(para.innerHTML)

// let imgOfapj=document.querySelector('.imgMain')
// console.log(imgOfapj.src);

// let allAnchorTags=document.querySelectorAll('h2 a')
// console.log(allAnchorTags[0])


//#############------09 setting content in objects----------


// let para=document.querySelector('#honors')
// console.dir(para);
// console.log(para.innerText); //
// console.log(para.textContent);
// console.log(para.innerHTML);

// console.log(para.outerText);
// console.log(para.outerHTML); 

// para.innerText="hi i am <b>APJ abdul kalam</b>!";

// console.log(para.innerText); //
// console.log(para.textContent);
// console.log(para.innerHTML);

// para.innerHTML="hi i am <b>APJ abdul kalam</b>!"; // show one time Comment bana kar and one times without comment.

// let heading=document.querySelector('h1');

// heading.innerHTML=`<u>${heading.innerText}</u>` ; //manupulate  data with some styles



//####################-----10 Manupulating attributes---------#

// let img =document.querySelector("img")
// console.dir(img)
// console.log(img.getAttribute('class')); // get attribute(id,class,style,src,href) as class att-value  is 'imgMain'
// img.setAttribute('class','abdulimg');
// console.log(img.getAttribute('class'));

//####################-----11 Manupulating attributes with style att.  ---------#

// let heading =document.querySelector('h1')
// console.dir(heading);
// heading.style.color="green"
// heading.style.backgroundColor="yellow"

// let links=document.querySelectorAll('h2 a');
// console.log(links);

// for(let i=0;i<links.length;i++){
//     links[i].style.color='red';
// }

//####################-----11 Manupulating style with 'classlist' properties  ---------#

// let heading =document.querySelector('h1');

// heading.classList.add("green")
// heading.classList.add("abcd")

// heading.classList.remove("abcd");
// console.log(heading.classList.contains("head"));
// console.log(heading.classList.toggle("xyz"));//false:true
// console.log(heading.classList.toggle("head")) ;//true => false

// console.log(heading.classList)


//#################-----------V-13 navigation ------------

// let divtag=document.querySelector('.links');
// console.log(divtag.children);

// let h2Tag=document.querySelector('h2');
// console.dir(h2Tag.nextElementSibling);

// divtag.previousElementSibling.style.color="green";

//#############----------------v14 adding Element------------------

// let divtag=document.querySelector('.links');
// let newp=document.createElement('p')
// newp.append("this is new paragraph");
// divtag.appendChild(newp)



// let btn =document.createElement("button");
// btn.append("click me !");

// divtag.appendChild(btn);

// newp.append(btn);
// newp.append("this text is for button because btn is in newp element")
// newp.prepend("hi,")

// // divtag.insertAdjacentElement('beforebegin',newp)
// // divtag.insertAdjacentElement('afterbegin',newp)
// // divtag.insertAdjacentElement('beforeend',newp)
// // divtag.insertAdjacentElement('afterend',newp)


//############--------v15--------






















