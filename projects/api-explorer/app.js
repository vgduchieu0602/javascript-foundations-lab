const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const id=Number(input.value);if(!Number.isInteger(id)||id<1||id>100){show('Enter post ID 1–100');return;}show('Loading…');try{const r=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);if(!r.ok)throw Error(`HTTP ${r.status}`);const data=await r.json();show(`${data.title}

${data.body}`);}catch(e){show(`Request failed: ${e.message}`);}
});
