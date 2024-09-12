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
let divSection4 = document.getElementsByClassName('div_section4');

// Textes du div_section4
let text1DivSection4 = document.getElementById('text1DivSection4');
let text2DivSection4 = document.getElementById('text2DivSection4');
let text3DivSection4 = document.getElementById('text3DivSection4');

// Affichage et masquage des elements

if(text1DivSection4.style.display === 'none'){
    text1DivSection4.style.display = 'block'
    imageBtnHidden1.setAttribute("src", "/images/display.png")
}else{
    text1DivSection4.style.display = 'none'
    imageBtnHidden1.setAttribute("src", "/images/hidden.png")
};
btnHidden1.addEventListener('click', () => {
    // imageBtnHidden1.setAttribute("src", "/images/display.png");
    if(text1DivSection4.style.display === 'none'){
        text1DivSection4.style.display = 'block'
        imageBtnHidden1.setAttribute("src", "/images/display.png")
    }else{
        text1DivSection4.style.display = 'none'
        imageBtnHidden1.setAttribute("src", "/images/hidden.png")
    };
});

if(text2DivSection4.style.display === 'none'){
    text2DivSection4.style.display = 'block'
    imageBtnHidden2.setAttribute("src", "/images/display.png")
}else{
    text2DivSection4.style.display = 'none'
    imageBtnHidden2.setAttribute("src", "/images/hidden.png")
};
btnHidden2.addEventListener('click', () => {
    // imageBtnHidden1.setAttribute("src", "/images/display.png");
    if(text2DivSection4.style.display === 'none'){
        text2DivSection4.style.display = 'block'
        imageBtnHidden2.setAttribute("src", "/images/display.png")
    }else{
        text2DivSection4.style.display = 'none'
        imageBtnHidden2.setAttribute("src", "/images/hidden.png")
    };
});

if(text3DivSection4.style.display === 'none'){
    text3DivSection4.style.display = 'block'
    imageBtnHidden3.setAttribute("src", "/images/display.png")
}else{
    text3DivSection4.style.display = 'none'
    imageBtnHidden3.setAttribute("src", "/images/hidden.png")
};
btnHidden3.addEventListener('click', () => {
    // imageBtnHidden1.setAttribute("src", "/images/display.png");
    if(text3DivSection4.style.display === 'none'){
        text3DivSection4.style.display = 'block'
        imageBtnHidden3.setAttribute("src", "/images/display.png")
    }else{
        text3DivSection4.style.display = 'none'
        imageBtnHidden3.setAttribute("src", "/images/hidden.png")
    };
});

// Section 5



// let section5 = document.getElementById('section5');
// let divSection = document.getElementById('div_section5');

// let btn1DivSection5 = document.getElementById('btn1DivSection5');
// let btn2DivSection5 = document.getElementById('btn2DivSection5');
// let btn3DivSection5 = document.getElementById('btn3DivSection5');

// let text1DivSection5 = document.getElementById('texte3Div1Section5');
// let text2DivSection5 = document.getElementById('texte3Div2Section5');
// let text3DivSection5 = document.getElementById('texte3Div3Section5');

// text1DivSection5.setAttribute("class", "hidden");
// text2DivSection5.setAttribute("class", "hidden");
// text3DivSection5.setAttribute("class", "hidden");

// btn1DivSection5.addEventListener('click', () => {
        
// });
// btn2DivSection5.addEventListener('click', () => {
//     text2DivSection5.classList.remove("hidden");
//     text2DivSection5.classList.add("display");    
// })
// btn3DivSection5.addEventListener('click', () => {
//     text3DivSection5.classList.remove("hidden");
//     text3DivSection5.classList.add("display");    
// })

let divSection5 = document.querySelector(".div_section5")
let events = [
    {
    Titre: "Titre de l'évenement 2",
    Date: "07/02/2023",
    Description: "Le nom d'une propriété d'un objet peut être n'importe quelle chaîne JavaScript valide (ou n'importe quelle valeur qui puisse être convertie en une chaîne de caractères), y compris la chaîne vide. Cependant, n'importe quel nom de propriété qui n'est pas un identifiant valide (par exemple si le nom d'une propriété contient un tiret, un espace ou débute par un chiffre) devra être utilisé avec la notation à crochets."
    },
    {
    Titre: "Titre de l'évenement 3",
    Date: "08/02/2023",
    Description: "Le deuxième argument de Array.map()est un objet qui sera la thisvaleur de la fonction de rappel. Gardez à l'esprit que vous devez utiliser le mot-clé habituelfunction pour déclarer le rappel, car une fonction fléchée n'a pas sa propre liaison au thismot-clé"
    },
    {
    Titre: "Titre de l'évenement 4",
    Date: "02/02/2023",
    Description: "Je vous propose aujourd'hui de découvrir comment créer un carrousel en utilisant du JavaScript. On n'utilisera pas ici de librairies particulières mais on écrira notre code en utilisant la syntaxe ES6 afin de faciliter l'organisation du code (si vous souhaitez supporter des navigateurs qui ne comprennent pas cette syntaxe libre à vous d'utiliser un outil pour convertir le code)."
    }
    
]
let eventContent = document.getElementById("section5")

events.map((event, index) =>  {
    let carteEvent = document.createElement("div");
    carteEvent.classList.add(`div${index+1}_section5`)
    // let textEvent = document.createElement("div");
    // textEvent.classList.add("texte_div_section5")
    let btn = document.createElement("button")
    btn.setAttribute("id", "btnDivSection5")
    
    carteEvent.innerHTML = `
                            <p class="texte1_div_section5">${event.Titre}</p>
                            <p class="texte2_div_section5">${event.Date}</p>
                         <button id="btn${index+1}DivSection5">Voir plus</button>
                         <p id="texte3-${index+1}DivSection5">
                            ${event.Description}
                        </p>`
    eventContent.appendChild(carteEvent);
    // carteEvent.appendChild(textEvent);
    console.log();
             
})


 
let btn1DivSection5 = document.getElementById("btn1DivSection5");
let btn2DivSection5 = document.getElementById("btn2DivSection5");
let btn3DivSection5 = document.getElementById("btn3DivSection5");
// console.log(btn2DivSection5);

let text31DivSection5 = document.getElementById("texte3-1DivSection5")
let text32DivSection5 = document.getElementById("texte3-2DivSection5")
let text33DivSection5 = document.getElementById("texte3-3DivSection5")

if(text31DivSection5.style.display === 'none'){
    text31DivSection5.style.display = 'block'
}else{
    text31DivSection5.style.display = 'none'
}
btn1DivSection5.addEventListener('click', () => {
    if(text31DivSection5.style.display === 'none'){
        text31DivSection5.style.display = 'block'
    }else{
        text31DivSection5.style.display = 'none'
    }
})

if(text32DivSection5.style.display === 'none'){
    text32DivSection5.style.display = 'block'
}else{
    text32DivSection5.style.display = 'none'
}
btn2DivSection5.addEventListener('click', () => {
    if(text32DivSection5.style.display === 'none'){
        text32DivSection5.style.display = 'block'
    }else{
        text32DivSection5.style.display = 'none'
    }

})
if(text33DivSection5.style.display === 'none'){
    text33DivSection5.style.display = 'block'
}else{
    text33DivSection5.style.display = 'none'
}

btn3DivSection5.addEventListener('click', () => {
    if(text33DivSection5.style.display === 'none'){
        text33DivSection5.style.display = 'block'
    }else{
        text33DivSection5.style.display = 'none'
    }
})