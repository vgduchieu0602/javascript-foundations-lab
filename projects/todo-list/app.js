const input=document.querySelector('#input');
const output=document.querySelector('#output');
const list=document.querySelector('#list');
const show=(message)=>{output.textContent=message;};
let counter=0;
const secret=7; // Fixed for reproducible learning exercise
document.querySelector('#run').addEventListener('click',async()=>{
const task=input.value.trim();if(task){const li=document.createElement('li');li.textContent=task;li.addEventListener('click',()=>li.remove());list.append(li);input.value='';show('Click a task to remove it');}else show('Enter a task');
});
