let sec = 58;
let min = 57;
let hour = 0;
let intervalId; 
let secHtml = document.getElementById('second');
let minHtml = document.getElementById('minute');
let hourHtml = document.getElementById('hour');

document.getElementById('start').addEventListener('click',function(){
   let interval = setInterval(()=>{
      sec++;        
      if(sec == 59){
         min++;           
         sec = 0;
      }
      if(min == 59){
         hour++;
         sec = 0;
         min = 0;
      }
      secHtml.innerText = sec;
      minHtml.innerText = min;
      hourHtml.innerText = hour;
      
   },1000) ;
   intervalId = interval;   
});

document.getElementById('pause').addEventListener('click',function(){
   clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click',function(){
   secHtml.innerText = 0;
   minHtml.innerText = 0;
   hourHtml.innerText = 0;
});