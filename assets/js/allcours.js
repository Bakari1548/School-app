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

// Récuperation des div des cours
let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
let php = document.getElementById("php");
let python = document.getElementById("python");
let java = document.getElementById("java");
let angular = document.getElementById("angular");
let laravel = document.getElementById("laravel");
let reactjs = document.getElementById("reactjs");

// Affichage des cours
html.setAttribute("class", "display");
css.setAttribute("class", "display");
js.setAttribute("class", "display");
php.setAttribute("class", "display");
python.setAttribute("class", "display");
java.setAttribute("class", "display");
angular.setAttribute("class", "display");
laravel.setAttribute("class", "display");
reactjs.setAttribute("class", "display");

btnCours1.addEventListener('click', () => {
    btnCours1.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours2.addEventListener('click', () => {
    btnCours1.setAttribute("style", "background-color: transparent")
    btnCours2.setAttribute("style", "background-color: #FFD550")
    html.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    html.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    // css.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours3.addEventListener('click', () => {
    btnCours2.setAttribute("style", "background-color: transparent")
    btnCours3.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    html.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    html.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours4.addEventListener('click', () => {
    btnCours3.setAttribute("style", "background-color: transparent")
    btnCours4.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    html.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    html.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours5.addEventListener('click', () => {
    btnCours4.setAttribute("style", "background-color: transparent")
    btnCours5.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    html.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    html.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours6.addEventListener('click', () => {
    btnCours5.setAttribute("style", "background-color: transparent")
    btnCours6.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    html.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    html.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours7.addEventListener('click', () => {
    btnCours6.setAttribute("style", "background-color: transparent")
    btnCours7.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    html.classList.remove("display");
    laravel.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    html.classList.add("hidden");
    laravel.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours8.addEventListener('click', () => {
    btnCours7.setAttribute("style", "background-color: transparent")
    btnCours8.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    html.classList.remove("display");
    reactjs.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    html.classList.add("hidden");
    reactjs.classList.add("hidden");
    console.log("bonjour");
    
});
btnCours9.addEventListener('click', () => {
    btnCours8.setAttribute("style", "background-color: transparent")
    btnCours9.setAttribute("style", "background-color: #FFD550")
    css.classList.remove("display");
    js.classList.remove("display");
    php.classList.remove("display");
    python.classList.remove("display");
    java.classList.remove("display");
    angular.classList.remove("display");
    laravel.classList.remove("display");
    html.classList.remove("display");

    css.classList.add("hidden");
    js.classList.add("hidden");
    php.classList.add("hidden");
    python.classList.add("hidden");
    java.classList.add("hidden");
    angular.classList.add("hidden");
    laravel.classList.add("hidden");
    html.classList.add("hidden");
    console.log("bonjour");
    
});