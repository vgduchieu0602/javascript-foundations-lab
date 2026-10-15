const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const n=Number(input.value);const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$';if(!Number.isInteger(n)||n<4||n>64){show('Length must be 4–64');}else{const values=new Uint32Array(n);crypto.getRandomValues(values);show([...values].map(x=>chars[x%chars.length]).join(''));}
});
