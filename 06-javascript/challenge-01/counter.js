let btns = document.querySelectorAll(".btn");
let steps = document.querySelectorAll(".increment");
let result = document.querySelector("#result");

let count = 0;
let step = 1;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let id = e.currentTarget.id;
    if (id === "increase") {
      count = count + step;
    }

    if (id === "decrease") {
      if (count - step >= 0) {
        count = count - step;
      }
    }

    if (id === "reset") {
      count = 0;
    }

    result.textContent = count;
    if(count>0){
        result.style.color="green";
    }
    else if(count<0){
        result.style.color="red";
    }
    else{
        result.style.color="black";
    }
  });
});

steps.forEach((btn) => {
  btn.addEventListener("click", function () {
    step = Number(this.textContent);
   
  });
});

















// let btns = document.querySelectorAll('.btn');
// let result = document.querySelector('p');
// let step = document.querySelectorAll(".increment");

// let count=0;

// btns.forEach((btn) => {
    
//     btn.addEventListener('click',function(e){
//         let elementId = e.currentTarget.id;

//         if(elementId === "decrease"){
//             count--;
//         }
//         else if(elementId === "reset"){
//             count = 0;
//         }
//          else if(elementId === "increase"){
//             count++;
//         }
//         result.textContent = count;
//     });
// });



// btns.forEach((btn) => {
    
//     btn.addEventListener('click',function(e)
//     {
//         let elementId = e.currentTarget.id;

//         if(elementId === "one" && step.onclick("#one",function(){
//             result += 1;
//             console.log("one");
//         }));

//         if(elementId === "five" && step.onclick(this.id,function(){
//             result += 5;
//         }));
//         if(elementId === "ten" && step.onclick("#ten",function(){
//             result += 10;
//         }));
       
        
//     });
// });
























// let btns = document.querySelectorAll('.btn');
// let result = document.querySelector('p');
// let step = document.querySelectorAll(".increment");

// let count=0;

// btns.forEach((btn) => {
    
//     btn.addEventListener('click',function(e){
//         let elementId = e.currentTarget.id;

//         if(elementId === "decrease"){
//             count--;
//         }
//         else if(elementId === "reset"){
//             count = 0;
//         }
//          else if(elementId === "increase"){
//             count++;
//         }
//         result.textContent = count;
//     });
// });
