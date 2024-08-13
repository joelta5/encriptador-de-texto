javascript
// script.js

function encriptarTexto() {
    const texto = document.getElementById('textInput').value;
    const clave = document.getElementById('keyInput').value;
    const resultado = encriptar(texto, clave);
    document.getElementById('result').value = resultado;
}

function desencriptarTexto() {
    const textoEncriptado = document.getElementById('textInput').value;
    const clave = document.getElementById('keyInput').value;
    const resultado = desencriptar(textoEncriptado, clave);
    document.getElementById('result').value = resultado;
}

function encriptar(texto, clave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        let claveCode = clave.charCodeAt(i % clave.length);
        let encriptadoCode = charCode + claveCode;
        resultado += String.fromCharCode(encriptadoCode);
    }
    return resultado;
}

function desencriptar(textoEncriptado, clave) {
    let resultado = '';
    for (let i = 0; i < textoEncriptado.length; i++) {
        let encriptadoCode = textoEncriptado.charCodeAt(i);
        let claveCode = clave.charCodeAt(i % clave.length);
        let charCode = encriptadoCode - claveCode;
        resultado += String.fromCharCode(charCode);
    }
    return resultado;
}
