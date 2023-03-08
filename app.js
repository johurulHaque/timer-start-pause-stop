let pTag = document.getElementById('demo');
let count  = 0;

// start timer
document.getElementById('start').addEventListener('click',function(){
    var intervalId = setInterval(()=>{
        count++;
        pTag.innerText = count;
    },1000);
});


