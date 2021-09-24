let inputs=document.querySelectorAll(".input-sides");
let button=document.querySelector("#calcH-btn");
let output=document.querySelector(".output")



let sumOfSides=(a,b)=>{
    
    

   
    let sum=0;
    sum=a*a+b*b;
    return sum;
}



let calcH=()=>{
    let a=Number(inputs[0].value)
    let b=Number(inputs[1].value)
    console.log(` a is ${a} and b is ${b}`)
    if(a<0 || b<0){
        output.innerHTML="please enter positive values"
       }else{
    
    let sum=sumOfSides(a,b);
       
   
    let lengthOfH=Math.sqrt(sum);
    output.innerHTML=`The Hypotenuese  Length is ${lengthOfH}`
       }


}

button.addEventListener("click",calcH)