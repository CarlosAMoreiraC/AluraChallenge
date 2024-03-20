function encriptar() {

    var text = document.getElementById("input-entrada").value;
    hiddeImage(text);
    var textCifrado = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("input-salida").value = textCifrado;
}

function desencriptar() {
    var text = document.getElementById("input-entrada").value;
    hiddeImage(text);
    var textCifrado = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("input-salida").value = textCifrado;
}

function hiddeImage(text) {
    if (text !== "") {
        document.getElementById("input-salida").hidden = false;
        document.getElementById("munecoImg").hidden = true;
    } else {
        document.getElementById("input-salida").hidden = true;
        document.getElementById("munecoImg").hidden = false;
    }
}