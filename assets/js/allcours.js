//  Recupération des boutons des cours
let btnCours1 = document.getElementById("cours1");
let btnCours2 = document.getElementById("cours2");
let btnCours3 = document.getElementById("cours3");
let btnCours4 = document.getElementById("cours4");
let btnCours5 = document.getElementById("cours5");
let btnCours6 = document.getElementById("cours6");
let btnCours7 = document.getElementById("cours7");
let btnCours8 = document.getElementById("cours8");
let btnCours9 = document.getElementById("cours9");

// Récuperation des divLinks des cours
let html = document.getElementById("htmlLink");
let css = document.getElementById("cssLink");
let js = document.getElementById("jsLink");
let php = document.getElementById("phpLink");
let python = document.getElementById("pythonLink");
let java = document.getElementById("javaLink");
let angular = document.getElementById("angularLink");
let laravel = document.getElementById("laravelLink");
let reactjs = document.getElementById("reactjsLink");

btnCours1.addEventListener('click', () => {
    if(html.style.display === 'block'){
        css.style.display = 'none'
        js.style.display = 'none'
        php.style.display = 'none'
        python.style.display = 'none'
        java.style.display = 'none'
        angular.style.display = 'none'
        laravel.style.display = 'none'
        reactjs.style.display = 'none'
        console.log("oui");
        
    }else{
        html.style.display === 'block'
        css.style.display = 'block'
        js.style.display = 'block'
        php.style.display = 'block'
        python.style.display = 'block'
        java.style.display = 'block'
        angular.style.display = 'block'
        reactjs.style.display = 'block'
        laravel.style.display = 'block'
        console.log("non");
        
    }
});

