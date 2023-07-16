const btn = document.getElementById('up'); // getting elements from doc
const screen = document.getElementById('screen');


let count = 0;
if(localStorage.getItem('dikr')==null){
    localStorage.setItem('dikr',0)
}
screen.value = localStorage.getItem('dikr');

btn.addEventListener('click', ()=>{
    count = localStorage.getItem('dikr');
    count++ 
    setTimeout(() => {
        screen.value = count;
        
    }, 600); 
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

if(localStorage.getItem('newUser')== null){
    location.replace('features/wellcome/wellcome.html')
}
