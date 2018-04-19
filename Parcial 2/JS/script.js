var chat = {};
var chat_box = document.getElementById("chat-box");
var entrada_texto = document.getElementById("entrada-texto");
var btn_enviar = document.getElementById("btn-enviar");
var bandera = true;
var nueva_pregunta = '';

chat['hola'] = 'como estas';

function aprender(pregunta,respuesta){
    if(!(pregunta in chat)) {
        chat[pregunta] = respuesta;
    }else{
       alert("Ya conosco la pregunta");
}

function chat2(){
    chat_box.appendChild("Hola, pregunta");
    while(bandera == true){
        if ( entrada_texto.value == 'adios'){
            chat_box.appendChild('Adios');
        }
        else if(pregunta in chat){
            chat_box.appendChild(respuesta);
        }
    }
    return "null";
};