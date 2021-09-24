let inputs=document.querySelectorAll(".input-details")
let button=document.querySelector("#area-btn");
let output=document.querySelector("#output");




let calArea=(a,b)=>{
    let area=0;
     area=1/2*a*b;
     return area;

}
let ShowArea=()=>{
    let a=Number(inputs[0].value)
    let b=Number(inputs[1].value)
    console.log(` a is ${a} and b is ${b}`)
    if(a<0 || b<0){
        output.innerHTML="please enter positive values"
       }else{
    let ans=calArea(a,b);
   
    output.innerText=`The Area Of Triangle is ${ans}`;

}
}

button.addEventListener("click",ShowArea)