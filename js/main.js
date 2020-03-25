const alfabeto = "abcdefghijklmnñopqrstuvwxyz";
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const tamano = alfabeto.length -1;

var boton = document.getElementById("descifrar");
boton.addEventListener("click", () => {
    salida.innerHTML = descifrar(entrada.value);
    entrada.value = '';
});

function descifrar(entrada) {
    let texto = entrada.toLowerCase();
    let salidaTexto = '';

    for(let i = 0; i < texto.length; i++){
    salidaTexto += (texto[i] != ' ') ? alfabeto[tamano - alfabeto.indexOf(texto[i])] : ' ';
    }
    return salidaTexto;
}
