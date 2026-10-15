const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const parts=input.value.split(',').map(Number);const [weight,height]=parts;show(parts.length===2&&weight>0&&height>0 ? `BMI: ${(weight/(height*height)).toFixed(1)}`:'Enter weight,height (kg,m)');
});
