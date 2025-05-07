//prelevo paragrafi
const paragrafi = document.querySelectorAll(".paragrafo");

// prelevo bottoni per espandere paragrafi
const bottoniEspanditori = document.querySelectorAll(".bottoneEspandi");
//associo ascoltatore
for(let i = 0; i < bottoniEspanditori.length; i++){
    //associo al singolo bottone la funzione, passando come parametro l'indice alla funzione callback
    bottoniEspanditori[i].addEventListener("click", () => gestisciParagrafo(i));
}

//prelevo bottone per cambiare stile
const bottoneStile = document.getElementById("bottoneStile");
bottoneStile.addEventListener("click", () => cambiaStile());

//funzione che cambia stile
function cambiaStile() {
    const corpo = document.body;

    if (corpo.style.backgroundColor === "black") {
        corpo.style.backgroundColor = "white";
        corpo.style.color = "black";
    } else {
        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
    }
}

//funzione che stabilisce se espandere o comprimere il paragrafo
function gestisciParagrafo(i){
    //esamino testo del bottone per capire se espandere o comprimere paragrafo
    if(bottoniEspanditori[i].innerHTML == "Espandi"){
        mostraParagrafo(i);
    }else{
        comprimiParagrafo(i);
    }
}

//funzione che mostra i paragrafi
function mostraParagrafo(i){
    //prelevo relativo paragrafo (escludo il primo, mostrato)
    const paragrafo = paragrafi[i + 1];
    //rendo visibile paragrafo
    paragrafo.style.display = "flex";

    //cambio testo bottone
    bottoniEspanditori[i].innerText = "Comprimi";
}

// funzione che comprime i paragrafi
function comprimiParagrafo(i){
    //prelevo relativo paragrafo (escludo il primo, mostrato)
    const paragrafo = paragrafi[i + 1];
    //nascondo paragrafo
    paragrafo.style.display = "none";

    //cambio testo bottone
    bottoniEspanditori[i].innerText = "Espandi";
}