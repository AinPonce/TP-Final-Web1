// Caro
//Inscripcion
let regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
let regexNumeros = /^[0-9]{4}\-[0-9]{4}$/;
let regexLetras = /^[a-zA-Z]+$/;

$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });
});

function validar(e){
    let error=false;
    $("#mensaje").empty();

    if($("#nombre").val()==""){
      error=true;
      $("#mensaje").append("<p>El nombre es obligatorio</p>")
    }
    if($("#apellido").val()==""){
      error=true;
      $("#mensaje").append("<p>El apellido es obligatorio</p>")
    }
    if(!$("#telefono").val().match(regexNumeros)){
      error=true;
      $("#mensaje").append("<p>Ingrese un telefono valido</p>")
    }
    if(!$("#email").val().match(regexEmail)){
       error=true;
       $("#mensaje").append("<p>Ingrese un email válido</p>")
    }
    if($("#provincia").val()==""){
      error=true;
      $("#mensaje").append("<p>La provincia es un campo obligatorio</p>")
    }
    if($("#ciudad").val()==""){
      error=true;
      $("#mensaje").append("<p>La ciudad es un campo obligatorio</p>")
    }
    if($("#mensajeContacto").length<1000){
      error=true;
      $("#mensaje").append("<p>Se ha excedido de caracteres</p>")
    }
    if(error){//si error es verdadero que el envio se detenga
        e.preventDefault();
    }
}

//localStorage: paso los datos de la home a inscripcion


$(document).ready(function(){
  $("#formHome").submit(function(){
    guardarDatos();
  });
});

function guardarDatos(){

  let idioma=$("#e").val();
  /*let establecimiento=$("#establecimientoPosta").val();
  let horario=$("#classHorario").val();
  let precio=$("#precio").val();*/
  
  localStorage.setItem("idioma", idioma);
  /*localStorage.setItem("establecimiento", establecimiento);
  localStorage.setItem("horario", horario);
  localStorage.setItem("precio", precio);*/
}

$(document).ready(function(){
  $("#queIdioma").text(localStorage.getItem("idioma"));
  /*$("#queEstablecimiento").text(localStorage.getItem("establecimiento"));
  $("#queHorario").text(localStorage.getItem("dato3"));
  $("#quePrecio").text(localStorage.getItem("dato4"));*/
  });