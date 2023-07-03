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
    screen.value = count
    localStorage.removeItem('dikr');
    localStorage.setItem('dikr',count)
});
