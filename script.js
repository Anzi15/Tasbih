const btn = document.getElementById('up'); // getting elements from doc
const screen = document.getElementById('screen');

let count = 0;
if(localStorage.getItem('dikr')==null){
    localStorage.setItem('dikr',0)
}
screen.value = localStorage.getItem('dikr');

btn.addEventListener('click', ()=>{
    setTimeout(() => {
        btn.style.backgroundColor='#007543';
        btn.style.borderColor='#00EA86';
    }, 200);
    setTimeout(() => {
        btn.style.backgroundColor='#01301C';
        btn.style.borderColor=' #111111';
        btn.style.transition='border ease-in 100ms';
        btn.style.transition='background ease-in 100ms';
    }, 400);
    count = localStorage.getItem('dikr');
    count++ 
    screen.value = count
    localStorage.removeItem('dikr');
    localStorage.setItem('dikr',count)
});

//reseting value 
function alertReset(){
    document.querySelector('body').style.zIndex = "0";
    document.querySelector('#alertOverlay').style.display = "block";
    document.querySelector('#alertCard').style.display = "block";
}
function reset(){
    localStorage.removeItem('dikr');
    location.reload()
    document.querySelector('#alertOverlay').style.display = "none";
    document.querySelector('#alertCard').style.display = "none";
}
function cancel(){
    document.querySelector('#alertOverlay').style.display = "none";
    document.querySelector('#alertCard').style.display = "none";
}

if(localStorage.getItem('oldUser')== null){
    location.replace('features/wellcome/wellcome.html')
}
