const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const s=input.value.toLowerCase().replace(/[^a-z0-9]/g,'');show(s ? (s===[...s].reverse().join('')?'Palindrome':'Not a palindrome') : 'Enter text');
});
