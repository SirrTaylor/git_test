// //create new element
// let divElement = document.createElement("div");
// //add a class to the div
// divElement.classList.add('sub-container');
// //you can also add style here
// //divElement.style.marginTop = '20px';

// // //create its child element made of text
// // let textNode = document.createTextNode('This is my newly added text');

// // //add the child element
// // divElement.append(textNode);

// //adding an element that isnt text:
// let divElement2 = '<div id="box1">Hi Pretty girl</div>';
// divElement.innerHTML =divElement2;

// //how to add new childs to a parent without replacing existing ones:
// divElement.insertAdjacentElement()

// //add to webpage
// //first access the area it should go into
// let containerDiv = document.querySelector('.container');
// //append  it
// containerDiv.appendChild(divElement);

//practice adding text into red box
let containerDiv = document.querySelector('.container');

let textNode = document.createTextNode("New Text Here...");

containerDiv.appendChild(textNode);

//listen to the button click
let subMit = document.getElementById('subBtn');
subMit.addEventListener('click',addElement);

//add the whole form 
function addElement(){
    let formElement =`   <form id="newForm">
        <label for="name" id="nameLbl">Name:</label><br>
        <input type="text"name="userName" id="uName"><br>
        <label for="age" id="ageLbl">Age:</label><br>
        <input type="text" name="userAge" id="uAge"><br><br>
         <input type="button" value="Continue" id="calcBtn">
    </form><br>`;

    containerDiv.insertAdjacentHTML("beforebegin",formElement);
}




//doing same for button in form
let ageClcx = document.getElementById('calcBtn');
ageClcx.addEventListener('click',ageCalculator);

function ageCalculator(){
   let userAge= document.getElementById('uAge');
   let userName = document.getElementById('uName');
   if(userAge >= 18){
    alert('Hi'+ userName +'Youre an adult');
   }else{
    
      alert('Hi'+ userName +'You are a child');
   }
}