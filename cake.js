const candle=document.getElementById("candle");

const flame=document.getElementById("flame");

const box=document.getElementById("countdownBox");

const count=document.getElementById("count");

const blow=document.getElementById("blowBtn");

let timer;

candle.onclick=function(){

flame.style.display="block";

box.style.display="block";

let sec=30;

count.innerHTML=sec;

timer=setInterval(()=>{

sec--;

count.innerHTML=sec;

if(sec==0){

clearInterval(timer);

}

},1000);

}

blow.onclick=function(){

clearInterval(timer);

flame.style.display="none";

alert("🎉 Happy Birthday ❤️");

}