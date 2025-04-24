

const imagenRaza = {
  dragonborn: "../assets/img/dragonborn.png",
  dwarf: "../assets/img/dwarft.png",
  elf: "../assets/img/elf.png",
  gnome: "../assets/img/gnome.png",
  "half-elf": "../assets/img/halfElf.png",
  "half-orc": "../assets/img/half-orc.png",
  halfling: "../assets/img/halfling.png",
  human: "../assets/img/human.png",
  tiefling: "../assets/img/tiefling.png",
};

export const guardar = function () {
    const form = document.querySelector("#form");
    const boton = document.querySelector("#button");
  
    boton.addEventListener("click", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const personaje = {};
      let valid = true;

      formData.forEach((valor, clave) => {
        if (valor.trim() === "") {
          valid = false;
        }
        personaje[clave] = valor;
      });
  
      if (!valid) {
        alert("Please fill in all fields before saving.");
        return; // Evita que continúe
      };


    // selecccionar la imagen segun la raza
    const razaSeleccionada = personaje.raza?.toLowerCase(); 
    const rutaImagen = imagenRaza[razaSeleccionada] || "";

    personaje.imagen = rutaImagen; //Se guarda la imagen en el personaje


      let save = JSON.parse(localStorage.getItem("form")) || [];
  
      save.push(personaje); 
      alert("Your character was successfully saved")
  
      localStorage.setItem("form", JSON.stringify(save));
    });
  };
  