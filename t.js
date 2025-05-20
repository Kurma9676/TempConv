const text=document.getElementById("t");
const toof=document.getElementById("F");
const tooc=document.getElementById("C");
const result=document.getElementById("result");
let temp;
function convert(){
if(toof.checked){
    temp=Number(text.value);
    temp=temp*9/5+32;
    result.textContent=temp.toFixed(1)+"°F"
}
else if(tooc.checked){
    temp=Number(text.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"°C"
}
else{
    result.textContent="select a unit";
}
}
