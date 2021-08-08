let inputs=document.querySelectorAll(".input-sides");
let button=document.querySelector("#calcH-btn");
let output=document.querySelector(".output")



let sumOfSides=(a,b)=>{
    let sum=0;
    sum=a*a+b*b;
    return sum;

}

let calcH=()=>{
    let sum=sumOfSides(Number(inputs[0].value),Number(inputs[1].value));
   
   
    let lengthOfH=Math.sqrt(sum);
    output.innerHTML=`The Hypotenuese  Length is ${lengthOfH}`



}

button.addEventListener("click",calcH)