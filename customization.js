// selecting elements
const upBtn = document.getElementById('up');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

const themeBtn0 = document.getElementById('themeBtn0');
const themeBtn1 = document.getElementById('themeBtn1');
const themeBtn2 = document.getElementById('themeBtn2');
const themeBtn3 = document.getElementById('themeBtn3');
const themeBtn4 = document.getElementById('themeBtn4');
const themeBtn5 = document.getElementById('themeBtn5');
const themeBtn6 = document.getElementById('themeBtn6');
const themeBtn7 = document.getElementById('themeBtn7');
const themeBtn8 = document.getElementById('themeBtn8');
const themeBtn9 = document.getElementById('themeBtn9');
const themeBtn10 = document.getElementById('themeBtn10');
const themeBtn11 = document.getElementById('themeBtn11');


const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');
const select5 = document.getElementById('select5');
const select6 = document.getElementById('select6');
const select7 = document.getElementById('select7');
const select8 = document.getElementById('select8');
const select9 = document.getElementById('select9');
const select10 = document.getElementById('select10');
const select11 = document.getElementById('select11');


const doneBtn = document.getElementById('Done');
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
    theme = defaultColors;
    if(document.title == 'Customize'){
      select1.style.display='block';
      select1.style.background=theme.priBg;
      themeBtn0.style.opacity=0.4;
    }
  }
  if(theme == 'pureSouls'){
    theme = pureSouls;
    if(document.title == 'Customize'){
      select2.style.display='block'
      select2.style.background=theme.priBg;
      themeBtn1.style.opacity=0.4;
    }
  }
  if(theme == 'blueOcean'){
    theme = blueOcean;
    if(document.title == 'Customize'){
      select3.style.display='block'
      select3.style.background=theme.priBg;
      themeBtn2.style.opacity=0.4;
    }
  }
  if(theme == 'sunsetSerenade'){
    theme = sunsetSerenade;
    if(document.title == 'Customize'){
      select4.style.display='block'
      select4.style.background=theme.priBg;
      themeBtn3.style.opacity=0.4;
    }
  }
  if(theme == 'earthyTones'){
    theme = earthyTones;
    if(document.title == 'Customize'){
      select5.style.display='block'
      select5.style.background=theme.priBg;
      themeBtn4.style.opacity=0.4;
    }
  }
  if(theme == 'midnightDreams'){
    theme = midnightDreams;
    if(document.title == 'Customize'){
      select6.style.display='block'
      select6.style.background=theme.priBg;
      themeBtn5.style.opacity=0.4;
    }
  }
  if(theme == 'goldenSands'){
    theme = goldenSands;
    if(document.title == 'Customize'){
      select7.style.display='block'
      select7.style.background=theme.priBg;
      themeBtn6.style.opacity=0.4;
    }
  }
  if(theme == 'roseGarden'){
    theme = roseGarden;
    if(document.title == 'Customize'){
      select8.style.display='block'
      select8.style.background=theme.priBg;
      themeBtn7.style.opacity=0.4;
    }
  }
  if(theme == 'monochromeMinimalism'){
    theme = monochromeMinimalism;
    if(document.title == 'Customize'){
      select9.style.display='block'
      select9.style.background=theme.priBg;
      themeBtn8.style.opacity=0.4;
    }
  }
  if(theme == 'autumnHarvest'){
    theme = autumnHarvest;
    if(document.title == 'Customize'){
      select10.style.display='block';
      select10.style.background=theme.priBg;
      themeBtn9.style.opacity=0.4;
    }
  }
  if(theme == 'forgotenMemories'){
    theme = forgotenMemories;
    if(document.title == 'Customize'){
      select11.style.display='block'
      select11.style.background=theme.priBg;
      themeBtn10.style.opacity=0.4;
    }
  }

  // setting colors simply
  if(document.title == 'Tasbeeh Counter'){
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
  function deColor(c){
    c.style.color='white';
  }
  

if(document.title == 'Hadiths'){
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
}

if(document.title == 'Customize'){
  doneBtn.style.borderColor= theme.priBg;
  doneBtn.style.color= theme.color;
}
  
function linksTheme(c){
 c.style.color = theme.color
}

