// A simple javascript code that represents API
let c=document.getElementById("but");

c.addEventListener('click',async()=>{
    let name=document.getElementById("in").value;
    let q= await fetch("http://goweather.xyz/weather/"+name);
    let d= await q.json();
    let p=document.getElementsByClassName("temp")[0];
    p.innerHTML=`<h2>Temperature :${d.temperature}</h2>`;
    let k=document.getElementsByClassName("win")[0];
    k.innerHTML=`<h2>Wind Speed :${d.wind}</h2>`;
    let des=document.getElementsByClassName("desp")[0];
    des.innerHTML=`<h2>${d.description}</h2>`;
}); 
