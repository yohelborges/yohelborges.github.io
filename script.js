const textarea = document.querySelector(".textarea"); /* almacena lo q el usuario almacena en el texarea*/
const mensaje = document.querySelector(".mensaje");


function validarTexto(){
    let textoEscrito = document.querySelector(".textarea").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function botonencriptar(){
    if(!validarTexto()) {
        const textoencriptado = encriptar(textarea.value)
        mensaje.value = textoencriptado
        textarea.value = ""
        mensaje.style.backgroundImage = "none"
    }
}

function encriptar(stringEncriptado){
    let matrices = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrices.length; i++){
        if(stringEncriptado.includes(matrices[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrices[i][0], matrices[i][1])
       
        }

    }
    return stringEncriptado
}

function botondesencriptar(){
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "" ;
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrices = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrices.length; i++){
        if(stringDesencriptado.includes(matrices[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrices[i][1], matrices[i][0])
       
        }

    }
    return stringDesencriptado
}


document.querySelector('.copiars').addEventListener("click",function(){ 
let copytext = document.querySelector(".mensaje").value;
 navigator.clipboard.writeText(copytext).then(()=>{
    alert("copiado");
    mensaje.value = "";
});})

    
document.querySelector('.btnpaste').addEventListener('click',function(){ 
      navigator.clipboard.readText().then(copyText=>{
       document.querySelector('textarea').value = copyText ;
            
     }); })