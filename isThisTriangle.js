let inputs=document.querySelectorAll(".angle-input");
let button=document.querySelector(".is-triangle-btn");
let output=document.querySelector("#output")


let sumOfAngles=(angle1,angle2,angle3)=>{
    console.log(angle1,angle2,angle3)
    if(angle1+angle2+angle3===180){
        return true;
    }else{
        return false;
    }

}


let checkTriangle=()=>{
let result=sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
if(result===true){
    output.innerText="Yes  it is  a Triangle"
}else{
    output.innerText="No it is not a Triangle"
}
}


button.addEventListener("click",checkTriangle)