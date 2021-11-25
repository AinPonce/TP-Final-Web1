
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
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Ingles", "Portugues"]
    },

    "Ramos Mejia":{
        direccion:"Av. de Mayo 567",
        localidad:"La Matanza",
        provincia:"Buenos Aires",
        email:"establecimientoRamosMejia@gmail.com",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Portugues"]
    },

    "Apostoles":{
        direccion:"Av. Misiones 681",
        localidad:"Campo Grande",
        provincia:"Misiones",
        email:"establecimientoApostoles@gmail.com",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Aleman", "Portugues"]
    },
    
    "Candelaria":{
        direccion:"Calle Falsa 123",
        localidad:"Posadas",
        provincia:"Misiones",
        email:"establecimientoCandelaria@gmail.com",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Aleman", "Frances", "Portugues"]
    },

    "Agustino":{
        direccion:"Angaco 972",
        localidad:"Caucete",
        provincia:"San Juan",
        email:"establecimientoAgustino@gmail.com",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Portugues"]
    },

    "La Molina":{
        direccion:"Sarmiento 1325",
        localidad:"Villa Aberastain",
        provincia:"San Juan",
        email:"establecimientoLaMolina@gmail.com",
        idioma: "Ingles",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Ingles", "Portugues"]
    },

    "Metro":{
        direccion:"Rosada 1592",
        localidad:"Cafayate",
        provincia:"Salta",
        email:"establecimientoMetro@gmail.com",
        idioma: "Aleman",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Ingles", "Portugues"]
    },

    "Sona Trujillo":{
        direccion:"Gral. Peron 8749",
        localidad:"General Guemes",
        provincia:"Salta",
        email:"establecimientoSonaTrujillo@gmail.com",
        idioma: "Frances",
        horario: ["Seleccionar un horario", "Lunes a Viernes de 8 a 17hs", , "Martes y Miercoles de 8 a 17hs"],
        idioma: ["Seleccionar Idioma", "Ingles", "Portugues"] 
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

        Recorrer(combobox3, prop["idiomas"]);
        Recorrer(combobox4, prop["horarios"]);
    })



    