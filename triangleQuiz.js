let form=document.querySelector(".quiz-form")
let output=document.querySelector("#output");
let button=document.querySelector("#submit-ans-btn")

let ansArr=["equilateral","rightangle"];


let calcScore=()=>{
    let sum=0;
    let index=0;
    const formData=new FormData(form);
    for(let ans of formData.values()){
        if(ansArr[index]===ans){
            sum+=1;
            
        }
        index++;
    }
    output.innerHTML=`your score is ${sum}`;
}
button.addEventListener("click",calcScore)