let departamentos = ["Buenos Aires","Misiones", "San Juan", "Salta"];

let distritos = ["Belgrano","Ramos Mejia", "San Justo","Casanova",
"Posadas","Apostoles","Candelaria","El Dorado","Jorge Chaves","Agustino",
"La Molina","Puente Piedra","Jesus De Maria","Metro","Sona Trujillo","Huanchaco"];

      let combobox1 = document.getElementById("combobox1");
      let combobox2 = document.getElementById("combobox2");

      function Recorrer(combobox, valores) {
        combobox2.innerHTML = "";
        for (let index of valores) {
          combobox.innerHTML += `
                <option>${index}</option>
                `;
        }
      }

      function llenarDepar() {
        Recorrer(combobox1, departamentos);
      }
      llenarDepar();

      combobox1.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Buenos Aires":
            Recorrer(combobox2, distritos.slice(0, 4));
            break;
          case "Misiones":
            Recorrer(combobox2, distritos.slice(5, 8));
            break;
          case "San Juan":
            Recorrer(combobox2, distritos.slice(9, 12));
            break;
            case "Salta":
                Recorrer(combobox2, distritos.slice(10, 16));
                break;  
          default:
            break;
        }
      });