const nav = document.getElementById('hadithNav');
const referenceArea = document.getElementById('refrence');
const hadithArea = document.getElementById('hadith');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
function show(){
  nav.style.display = "block";
}
function hide(){
  nav.style.display = "none";
}

const hadiths = [
  {
      text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: I am near to the thought of My servant as he thinks about Me, and I am with him as he remembers Me. And if he remembers Me in his heart, I also remember him in My Heart, and if he remembers Me in assembly I remember him in assembly, better than his (remembrance), and if he draws near Me by the span of a palm, I draw near him by the cubit, and if he draws near Me by the cubit I draw near him by the space (covered by) two hands. And if he walks towards Me, I rush towards him.",
      reference: "Sahih Muslim, Book 35, Hadith 6590"
    },
    {
      text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: When My servant draws close to Me by the span of a palm, I draw close to him by the cubit and when he draws close to Me by the cubit, I draw close to him by the space (covered) by two armspans, and when he comes to me walking, I go in a hurry towards him.",
      reference: "Sahih Muslim, Book 35, Hadith 6588"
    },
    {
      text: "Abu Malik reported on the authority of his father that he heard Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying to the person who had come to him and asked him how he should beg his Lord: 'Utter, There is no god but Allah, the One, having no partner with Him. Allah is the Greatest of the great and all praise is due to Him. Hallowed be Allah, the Lord of the worlds, there is no Might and Power but that of Allah, the All-Powerful and the Wise.'",
      reference: "Sahih Muslim, Book 35, Hadith 6595"
    },
    {
      text: "A desert Arab came to Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) and said to him: 'Teach me the words which I should (often) utter.' He said: 'Utter, There is no god but Allah, the One, having no partner with Him. Allah is the Greatest of the great and all praise is due to Him. Hallowed be Allah, the Lord of the worlds, there is no Might and Power but that of Allah, the All-Powerful and the Wise.' The Arab said: 'These all (glorify) my Lord. But what about me?' Thereupon he (the Holy Prophet) said: 'You should say: O Allah, grant me pardon, have mercy upon me, direct me to righteousness and provide me sustenance. Grant me safety.'",
      reference: "Sahih Muslim, Book 35, Hadith 6596"
    },
    {
        text: "Qatada asked Anas which supplication Allah's Apostle (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) frequently made. He said: 'The supplication that he (the Prophet) frequently made was: O Allah, grant us the good in this world and the good in the Hereafter and save us from the torment of the Fire.'",
        reference: "Sahih Muslim, Book 35, Hadith 6598"
    },
    {
        text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: 'The supplication of every one of you will be granted if he does not get impatient and say: I supplicated but it was not granted.'",
        reference: "Sahih Muslim, Book 35, Hadith 6599"
    },
    {
        text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: 'Nothing is more deserving of being freed from the Fire than the supplication of one who has been wronged, for Allah does not tolerate the one who wrongs others and raises his hands in supplication to Him.'",
        reference: "Sunan Ibn Majah, Vol. 5, Book 36, Hadith 3846"
    },
    {
        text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: 'Whoever does not ask Allah, He becomes angry with him.'",
        reference: "Sunan Ibn Majah, Vol. 5, Book 36, Hadith 3847"
    },
    {
        text: "Abu Huraira reported Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) as saying: 'Call upon Allah while being certain of being answered, and know that Allah does not answer a supplication that comes from a negligent and inattentive heart.'",
        reference: "Sunan Ibn Majah, Vol. 5, Book 36, Hadith 3848"
    },
    {
      text: "Ibn 'Abbas reported that Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) used to say: O Allah, it is unto Thee that I surrender myself. I affirm my faith in Thee and repose my trust in Thee and turn to Thee in repentance and with Thy help fought my adversaries. O Allah, I seek refuge in Thee with Thine Power; there is no god but Thou, lest Thou leadest me astray. Thou art ever-living that dieth not, while the Jinn and mankind die.",
      reference: "Sunan Abi Dawood, Book 16, Hadith 1420"
    },
    {
      text: "Farwa' b. Naufal Ashja'i reported: I asked: 'A'isha, in what words did Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) supplicate Allah? She said that he used to utter: I seek refuge in Thee from the evil of what I did and from the evil of what I did not.",
      reference: "Sahih Muslim, Book 35, Hadith 6565"
    },
    {
      text: "Abu Huraira reported that Fatima (the daughter of the Holy Prophet) came to Allah's Apostle (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) and asked for a servant. He said to her: Say: O Allah, the Lord of the seven heavens; the rest of the hadith is the same.",
      reference: "Sahih Muslim, Book 35, Hadith 6567"
    },
    {
      text: "Abu Huraira reported that Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) used to command us that as we go to our bed, we should utter the words (as mentioned above) and he also said (these words): From the evil of every animal, Thou hast hold upon its forelock (Thou hast full control over it).",
      reference: "Sahih Muslim, Book 35, Hadith 6582"
    },
    {
      text: "Abu Huraira reported that Allah's Messenger (‌صلی ‌اللہ ‌علیہ ‌وسلم ‌) used to command us that as we go to our bed, we should utter the words (as mentioned above) and he also said (these words): From the evil of every animal, Thou hast hold upon its forelock (Thou hast full control over it).",
      reference: "Sahih Muslim, Book 35, Hadith 6583"
    }
    ];


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
  id.style.color = '#00EA86';
}

btn1.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[0].text;
  referenceArea.textContent = hadiths[0].reference;
})
btn2.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[1].text;
  referenceArea.textContent = hadiths[1].reference;
})
btn3.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[2].text;
  referenceArea.textContent = hadiths[2].reference;
})
btn4.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[3].text;
  referenceArea.textContent = hadiths[3].reference;
})
btn5.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[4].text;
  referenceArea.textContent = hadiths[4].reference;
})
btn6.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[5].text;
  referenceArea.textContent = hadiths[5].reference;
})
btn7.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[6].text;
  referenceArea.textContent = hadiths[6].reference;
})
btn8.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[7].text;
  referenceArea.textContent = hadiths[7].reference;
})
btn9.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[8].text;
  referenceArea.textContent = hadiths[8].reference;
})
btn10.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[9].text;
  referenceArea.textContent = hadiths[9].reference;
})
btn11.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[10].text;
  referenceArea.textContent = hadiths[10].reference;
})
btn12.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[11].text;
  referenceArea.textContent = hadiths[11].reference;
})
btn13.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[12].text;
  referenceArea.textContent = hadiths[12].reference;
})
btn14.addEventListener('click',()=>{
  hadithArea.textContent = hadiths[13].text;
  referenceArea.textContent = hadiths[13].reference;
})


if(hadithArea.textContent==''||referenceArea.textContent==''){
  hadithArea.textContent = hadiths[0].text;
  referenceArea.textContent = hadiths[0].reference;
  btn1.style.color="#00EA86"
}