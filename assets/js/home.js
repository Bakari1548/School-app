// Section 4

// Les buttons de la section 4
let btnHidden1 = document.getElementById('btnHidden1');
let btnHidden2 = document.getElementById('btnHidden2');
let btnHidden3 = document.getElementById('btnHidden3');
// Icones des button de la section 4
let imageBtnHidden1 = document.getElementById('imageBtnHidden1');
let imageBtnHidden2 = document.getElementById('imageBtnHidden2');
let imageBtnHidden3 = document.getElementById('imageBtnHidden3');

let section4 = document.getElementById('section4');
let divSection4 = document.getElementById('div_section4');

// Textes du div_section4
let text1DivSection4 = document.getElementById('text1DivSection4');
let text2DivSection4 = document.getElementById('text2DivSection4');
let text3DivSection4 = document.getElementById('text3DivSection4');

text1DivSection4.setAttribute("class", "hidden");
text2DivSection4.setAttribute("class", "hidden");
text3DivSection4.setAttribute("class", "hidden");

btnHidden1.addEventListener('click', () => {
    imageBtnHidden1.setAttribute("src", "/images/display.png");
    text1DivSection4.classList.remove("hidden");
    text1DivSection4.classList.add("display");
});

btnHidden2.addEventListener('click', () => {
    imageBtnHidden2.setAttribute("src", "/images/display.png");
    text2DivSection4.classList.remove("hidden");
    text2DivSection4.classList.add("display");
});

btnHidden3.addEventListener('click', () => {
    imageBtnHidden3.setAttribute("src", "/images/display.png");
    text3DivSection4.classList.remove("hidden");
    text3DivSection4.classList.add("display");
});

// Section 5
let section5 = document.getElementById('section5');
let divSection = document.getElementById('div_section5');

let btn1DivSection5 = document.getElementById('btn1DivSection5');
let btn2DivSection5 = document.getElementById('btn2DivSection5');
let btn3DivSection5 = document.getElementById('btn3DivSection5');

let text1DivSection5 = document.getElementById('texte3Div1Section5');
let text2DivSection5 = document.getElementById('texte3Div2Section5');
let text3DivSection5 = document.getElementById('texte3Div3Section5');

text1DivSection5.setAttribute("class", "hidden");
text2DivSection5.setAttribute("class", "hidden");
text3DivSection5.setAttribute("class", "hidden");

btn1DivSection5.addEventListener('click', () => {
    text1DivSection5.classList.remove("hidden");
    text1DivSection5.classList.add("display");    
})
btn2DivSection5.addEventListener('click', () => {
    text2DivSection5.classList.remove("hidden");
    text2DivSection5.classList.add("display");    
})
btn3DivSection5.addEventListener('click', () => {
    text3DivSection5.classList.remove("hidden");
    text3DivSection5.classList.add("display");    
})