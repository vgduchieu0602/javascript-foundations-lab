const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const bill=Number(input.value);show(input.value.trim()!=='' && Number.isFinite(bill)&&bill>=0 ? `15% tip: $${(bill*.15).toFixed(2)}` : 'Enter a valid bill');
});
