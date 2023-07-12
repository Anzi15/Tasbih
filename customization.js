// selecting elements
const upBtn = document.getElementById('up');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

if(localStorage.getItem('theme')==null){
  localStorage.setItem('theme','default')
}

var theme = localStorage.getItem('theme');
console.log(theme);
const bgBlack = '#111111';
const defaultColors = {
    priBg: '#01301C',
    secBg: '#007543',
    color: '#00EA86',
    bgBlack: '#111111'
}
const pureSouls = {
    priBg: '#445666',
    secBg: '#617180',
    color: '#a2d2ff'
  };
  const blueOcean = {
    priBg: '#003E5F',
    secBg: '#0077A9',
    color: '#00B5E2'
  };
  const sunsetSerenade = {
    priBg: '#9c4302 ',
    secBg: '#cf6f29',
    color: '#ffd000'
  };
  const earthyTones = {
    priBg: '#3b2e27',
    secBg: '#C9AE9E',
    color: '#bd9177'
  };
  const midnightDreams = {
    priBg: '#182252',
    secBg: '#483D8B',
    color: '#9370DB'
  };
  const goldenSands = {
    priBg: '#805b10',
    secBg: '#b69121',
    color: '#f5cc00'
  };
  const roseGarden = {
    priBg: '#e05780',
    secBg: '#FF69B4',
    color: '#ffc2d1'
  };
  const monochromeMinimalism = {
    priBg: '#23363b',
    secBg: '#456d75',
    color: '#62b5c4'
  };
  const autumnHarvest = {
    priBg: '#432818',
    secBg: '#9c613e',
    color: '#ffe1a8'
  };
  const forgotenMemories = {
    priBg: '#282b28',
    secBg: '#484d48',
    color: '#92d4be'
  };
  if(theme == 'default'){
    theme = defaultColors
  }
  if(theme == 'pureSouls'){
    theme = pureSouls
  }
  if(theme == 'blueOcean'){
    theme = blueOcean;
  }
  if(theme == 'sunsetSerenade'){
    theme = sunsetSerenade
  }
  if(theme == 'earthyTones'){
    theme = earthyTones
    console.log(theme.priBg)
  }
  if(theme == 'midnightDreams'){
    theme = midnightDreams
  }
  if(theme == 'goldenSands'){
    theme = goldenSands
  }
  if(theme == 'roseGarden'){
    theme = roseGarden
  }
  if(theme == 'monochromeMinimalism'){
    theme = monochromeMinimalism
  }
  if(theme == 'autumnHarvest'){
    theme = autumnHarvest
  }
  if(theme == 'forgotenMemories'){
    theme = forgotenMemories
  }
  
  console.log(theme)
  
  // setting colors simply
  if(upBtn !== null){
    upBtn.style.transition = 'background-color 0.3s ease';
    upBtn.style.backgroundColor=theme.priBg;
    // setting color transition
    upBtn.addEventListener('click',()=>{
      setTimeout(() => {
        upBtn.style.backgroundColor=theme.secBg;
        upBtn.style.borderColor=theme.color;
      }, 200);
      setTimeout(() => {
        upBtn.style.backgroundColor=theme.priBg;
        upBtn.style.borderColor=bgBlack;
      }, 450);
    })
    
    const defaultSvg = `<div ><svg style="padding-bottom: 2rem !important;"color: ${defaultColors.color};" xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="${defaultColors.color}" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" fill="${defaultColors.color}"></path> </svg></div>`;
  
    // Function to generate customized SVG based on the theme
    function generateCustomSvg(theme) {
      const customSvg = defaultSvg.replace(new RegExp(`fill="${defaultColors.color}"`, 'g'), `fill="${theme.color}"`);
      return customSvg;
    }
  const themeSvg = upBtn.innerHTML=generateCustomSvg(theme);

    }


  function linksTheme(c){
    c.style.color= theme.color;
  }

  function deColor(c){
    c.style.color='white';
  }

  btn1.style.color=theme.color
  // coolors of hadith navs
  function active(id){
    btn1.style.color='white';
    btn2.style.color='white';
    btn3.style.color='white';
    btn4.style.color='white';
    btn5.style.color='white';
    btn6.style.color='white';
    btn7.style.color='white';
    btn8.style.color='white';
    btn9.style.color='white';
    btn10.style.color='white';
    btn11.style.color='white';
    btn12.style.color='white';
    btn13.style.color='white';
    btn14.style.color='white';
    document.querySelector('.btns').style.color='white';
    id.style.color = theme.color;
  }

  

