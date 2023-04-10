document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviar").addEventListener('click', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    console.log("prueba");
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito nada en el nombre');
        return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length < 6) {
        alert('El correo no es válido');
        return;
    }
    var texto = document.getElementById("comentario").value;
    if (texto.length == 0) {
        alert('No has escrito nada en el comentario');
        return;
    }
    
}


$(document).ready(function () {
    $('#estadisticas').DataTable({
        
    });
});