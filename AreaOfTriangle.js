let inputs=document.querySelectorAll(".input-details")
let button=document.querySelector("#area-btn");
let output=document.querySelector("#output");




let calArea=(a,b)=>{
    let area=0;
     area=1/2*a*b;
     return area;

}
let ShowArea=()=>{
    let ans=calArea(Number(inputs[0].value),Number(inputs[1].value));
   
    output.innerText=`The Area Of Triangle is ${ans}`;

}

button.addEventListener("click",ShowArea)