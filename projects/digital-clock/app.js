const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
show(new Date().toLocaleTimeString('en-US',{timeZone:'UTC'}));
});
