let pTag = document.getElementById('demo');
let count  = 0;
let timer;

// start timer
document.getElementById('start').addEventListener('click',function(){
    let intervalId = setInterval(()=>{
        count++;
        pTag.innerText = count;
    },1000);
    timer = intervalId;
});

document.getElementById('pause').addEventListener('click',function(){
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click',function(){
    pTag.innerText = "";
    count  = 0;
});


