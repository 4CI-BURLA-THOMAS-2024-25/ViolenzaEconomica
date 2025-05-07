function mostraFonti() {
    var fontiBox = document.getElementById("fontiBox");

    if (fontiBox.style.display === "none" || fontiBox.style.display === "") {
        fontiBox.style.display = "block";
    } else {
        fontiBox.style.display = "none";
    }
}

function cambiaStile() {
    var corpo = document.body;

    if (corpo.style.backgroundColor === "black") {
        corpo.style.backgroundColor = "white";
        corpo.style.color = "black";
    } else {
        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
    }
}
