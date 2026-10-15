function makeCounter(){let n=0;return ()=>++n;} const next=makeCounter();console.log(next(),next());
