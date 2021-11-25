
let departamentos = {
    "Buenos Aires":["Seleccionar Establecimiento","Belgrano","Ramos Mejia"],
    "Misiones":["Seleccionar Establecimiento","Apostoles","Candelaria"],
    "San Juan":["Seleccionar Establecimiento","Agustino","La Molina"],
    "Salta":["Seleccionar Establecimiento","Metro","Sona Trujillo"],
}

let fichaEstablecimiento = {
    "Belgrano":{
        direccion:"Av. de Mayo 567",
        localidad:"CABA",
        provincia:"Buenos Aires",
        email:"establecimientoBelgrano@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs",  "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Ingles", "Portugues"],
        precio: ["$7000", "$3200"]
    },

    "Ramos Mejia":{
        direccion:"Av. de Mayo 567",
        localidad:"La Matanza",
        provincia:"Buenos Aires",
        email:"establecimientoRamosMejia@gmail.com",
        horario: [ "Lunes a Viernes de 8 a 17hs", "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Portugues"],
        precio: ["$8000"]
    },

    "Apostoles":{
        direccion:"Av. Misiones 681",
        localidad:"Campo Grande",
        provincia:"Misiones",
        email:"establecimientoApostoles@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs","Martes y Miercoles de 8 a 17hs"],
        idioma: ["Aleman", "Portugues"],
        precio: ["$9000", "$3500"]
    },
    
    "Candelaria":{
        direccion:"Calle Falsa 123",
        localidad:"Posadas",
        provincia:"Misiones",
        email:"establecimientoCandelaria@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs", "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Aleman", "Frances", "Portugues"],
        precio: ["$100000", "$5000", "3000"]
    },

    "Agustino":{
        direccion:"Angaco 972",
        localidad:"Caucete",
        provincia:"San Juan",
        email:"establecimientoAgustino@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs", "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Portugues"],
        precio: ["$5000"]
    },

    "La Molina":{
        direccion:"Sarmiento 1325",
        localidad:"Villa Aberastain",
        provincia:"San Juan",
        email:"establecimientoLaMolina@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs","Martes y Miercoles de 8 a 17hs"],
        idioma: ["Ingles", "Portugues"],
        precio: ["$3000","$4000"]
    },

    "Metro":{
        direccion:"Rosada 1592",
        localidad:"Cafayate",
        provincia:"Salta",
        email:"establecimientoMetro@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs", "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Ingles", "Portugues"],
        precio: ["$7500","$3000"]
    },

    "Sona Trujillo":{
        direccion:"Gral. Peron 8749",
        localidad:"General Guemes",
        provincia:"Salta",
        email:"establecimientoSonaTrujillo@gmail.com",
        horario: ["Lunes a Viernes de 8 a 17hs",  "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Ingles", "Portugues"],
        precio: ["$2000","$3000"]
    },
}



let combobox1 = document.getElementById("combobox1");
let combobox2 = document.getElementById("combobox2");
let combobox3 = document.getElementById("combobox3");
let combobox4 = document.getElementById("combobox4");
let combobox5 = document.getElementById("combobox5");


      function Recorrer(combobox, valores) {
        combobox2.innerHTML = "";
        for (let index of valores) {
          combobox.innerHTML += `
                <option>${index}</option>
                `;
        }
      }

      function llenarDepar() {
        let prop = Object.keys(departamentos);
        Recorrer(combobox1, prop);
      }

      llenarDepar();

      combobox1.addEventListener("change", (e) => {
        let establecimiento = e.target.value;
        let prop = departamentos[establecimiento];
        Recorrer(combobox2, prop);
      });

    combobox2.addEventListener("change", (e) =>{
        let establecimiento = e.target.value;
        let prop = fichaEstablecimiento[establecimiento];

        document.getElementById("fEstablecimiento").innerHTML = "Establecimiento: "+establecimiento;
        document.getElementById("fDireccion").innerHTML = "Direccion: "+prop["direccion"];
        document.getElementById("fLocalidad").innerHTML = "Localidad: "+prop["localidad"];
        document.getElementById("fProvincia").innerHTML = "Provincia: "+prop["provincia"];
        document.getElementById("fEmail").innerHTML = "Email: "+prop["email"];

        Recorrer(combobox3, prop["idioma"]);
        Recorrer(combobox4, prop["horario"]);
        document.getElementById("combobox5").innerHTML = "El precio es: "+prop["precio"];
    })


// Caro

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
   




    