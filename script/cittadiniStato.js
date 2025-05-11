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
    const paragrafo = paragrafi[i];
    //rendo visibile paragrafo
    paragrafo.style.display = "flex";

    //cambio testo bottone
    bottoniEspanditori[i].innerText = "Comprimi";
}

// funzione che comprime i paragrafi
function comprimiParagrafo(i){
    //prelevo relativo paragrafo (escludo il primo, mostrato)
    const paragrafo = paragrafi[i];
    //nascondo paragrafo
    paragrafo.style.display = "none";

    //cambio testo bottone
    bottoniEspanditori[i].innerText = "Espandi";
}

// Script per i Grafici (con l'utilizzo di Chart.js)
// ------------------------------
// Grafico 1: Barre - Pressione Fiscale
// Dati: 42,5% (dato ufficiale) vs 47,4% (dato reale per i contribuenti onesti - Ufficio Studi CGIA)
const ctxOppBar = document.getElementById('chartOppBar').getContext('2d');
const chartOppBar = new Chart(ctxOppBar, {
  type: 'bar',
  data: {
    labels: ['Contribuenti Onesti', 'Evasori Stimati'],
    datasets: [{
      label: 'Pressione Fiscale (%)',
      data: [42.5, 47.4],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 60
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Pressione Fiscale: Confronto Dati'
      }
    }
  }
});

// ------------------------------
// Grafico 2: Linee - Evoluzione della Pressione Fiscale
// Dati ipotetici (e validate con dati ufficiali ottenuti da MEF/ISTAT)
const ctxOppLine = document.getElementById('chartOppLine').getContext('2d');
const chartOppLine = new Chart(ctxOppLine, {
  type: 'line',
  data: {
    labels: ['2018','2019','2020','2021','2022','2023'],
    datasets: [{
      label: 'Pressione Fiscale (%)',
      data: [41, 42, 43.5, 42.5, 44, 43],
      fill: false,
      borderColor: 'rgba(54, 162, 235, 1)',
      tension: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Evoluzione della Pressione Fiscale in Italia'
      }
    }
  }
});

// ------------------------------
// Grafico 3: Torta - Distribuzione della Ricchezza (Disuguaglianza Strutturale)
// Dati di esempio, basati su report ISTAT e Oxfam
const ctxIneqPie = document.getElementById('chartIneqPie').getContext('2d');
const chartIneqPie = new Chart(ctxIneqPie, {
  type: 'pie',
  data: {
    labels: ["Popolazione che detiene il 60% delle ricchezze", "Popolazione che detiene il 40% delle ricchezze"],
    datasets: [{
      label: 'Distribuzione della Ricchezza',
      data: [20, 80],
      backgroundColor: ['rgba(153, 102, 255, 0.6)','rgba(255, 205, 86, 0.6)'],
      borderColor: ['rgba(153, 102, 255, 1)','rgba(255, 205, 86, 1)'],
      borderWidth: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Distribuzione della Ricchezza in Italia'
      }
    }
  }
});

// ------------------------------
// Grafico 4: Barre Orizzontali - Gap di Genere sul Mercato del Lavoro
// Dati esemplificativi (fonte: report Internazionale/ISTAT)
const ctxGenderBar = document.getElementById('chartGenderBar').getContext('2d');
const chartGenderBar = new Chart(ctxGenderBar, {
  type: 'bar',
  data: {
    labels: ['Retribuzione Media', 'Percentuale Occupazione'],
    datasets: [
      {
        label: 'Donne',
        data: [75, 60],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 3
      },
      {
        label: 'Uomini',
        data: [100, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        max: 120
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Gap di Genere: Retribuzione e Occupazione'
      }
    }
  }
});
