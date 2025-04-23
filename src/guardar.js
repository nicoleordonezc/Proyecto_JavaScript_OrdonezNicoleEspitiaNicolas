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
  
      let save = JSON.parse(localStorage.getItem("form")) || [];
  
      save.push(personaje); 
      alert("Your character was successfully saved")
  
      localStorage.setItem("form", JSON.stringify(save));
    });
  };
  