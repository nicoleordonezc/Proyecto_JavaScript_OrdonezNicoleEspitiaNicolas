export const guardar = function () {
    const form = document.querySelector("#form");
    const boton = document.querySelector("#button");
  
    boton.addEventListener("click", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const personaje = {};

      formData.forEach((valor, clave) => {
        personaje[clave] = valor;
      });
  
      let save = JSON.parse(localStorage.getItem("form")) || [];
  
      save.push(personaje); 
  
      localStorage.setItem("form", JSON.stringify(save));
    });
  };
  