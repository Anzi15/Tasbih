const title = document.getElementById('mTitle');
const text = document.getElementById('txt');
const link = document.getElementById('skip');
const btn = document.getElementById('btn');


function getStarted(){
    title.innerText = `Customize ?`;
    text.innerText = `Personalize your journey with our customizable features. Tailor the settings to your preferences and make the most out of our platform.`;
    link.innerText = `skip for now`
    btn.setAttribute(onclick, "customize()");
    btn.innerHTML = `<a href="../customize/customize.html" class="btnLink"> Customize </a>`
    localStorage.setItem('newUser','false')
}