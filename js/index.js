let regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
let regexNumeros = /^[0-9]{4}\-[0-9]{4}$/;
let regexLetras = /^[a-zA-Z]+$/;

$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);
    });

    $("#formContacto").submit(function(e){
      validarContacto(e);
     });

    contarLetras();

     $("#filtro").click(function(){
      filtrar();
  });

     openModal();
});

$(document).ready(function(){
     $("#queIdioma").append(localStorage.getItem("idioma"));
     $("#queEstablecimiento").append(localStorage.getItem("establecimiento"));
     $("#queHorario").append(localStorage.getItem("horario"));
     $("#quePrecio").append(localStorage.getItem("precio"));
})

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
    }s
    if($("#provincia").val()==""){
      error=true;
      $("#mensaje").append("<p>La provincia es un campo obligatorio</p>")
    }
    if($("#ciudad").val()==""){
      error=true;
      $("#mensaje").append("<p>La ciudad es un campo obligatorio</p>")
    }
    if(error){//si error es verdadero que el envio se detenga
        e.preventDefault();
    }
}

function validarContacto(e){
  let error = false;
  $("#mensaje").empty();

    if($("#nombre").val()=="" || !$("#nombre").val().match(regexLetras)){
      error=true;
      $("#mensaje").append("<p>El nombre es obligatorio</p>")
    }
    if($("#email").val()==""){
      error=true;
      $("#mensaje").append("<p>El email es obligatorio</p>")
    } else {
      if(!$("#email").val().match(regexEmail)){
        error=true;
      $("#mensaje").append("<p>Ingrese un email válido</p>")
      }
    }
  if(error){
    e.preventDefault();
  }
}

function contarLetras(){
  let longuitudMax = 1000;
  let caracteres = $("#textArea").val().length;

  $("#contador").html(longuitudMax + " caracteres restantes");
  $("#textArea").keyup(function(){
     let caracteresNuevos = longuitudMax - $("#textArea").val().length;
     $("#contador").html(caracteresNuevos + " caracteres restantes");
     if(caracteresNuevos <= 10 && caracteresNuevos > 0){
       $("#contador").css("color","#F00");
     } else {
      $("#contador").css("color","#000");
     }

     if(caracteresNuevos <=0){
       $("#textArea").keypress(function(){
         let texto = $("#textArea").val().substr(0,24);
         $("#textArea").val(texto);
       })
     }
    });
}

function openModal(){
  $("#botoncito").click(function(){
    $("#ex1").modal();
  })
}

function filtrar(){
  const provincia=$("#opcionesProv").val();
  const idioma=$("#opcionesIdioma").val();
  $("#cursos article").hide();
  $(`#cursos  .${provincia}.${idioma}`).show();
}

$(document).ready(function() {
  $("#establecimiento").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $("#contenedorClases .innerEstablecimiento").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
