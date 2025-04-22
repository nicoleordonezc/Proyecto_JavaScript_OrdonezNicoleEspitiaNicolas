export const guardar = function () {
    const form = document.querySelector("#form");
    const boton = document.querySelector("#button");
  
    boton.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que se recargue la página
  
      const formData = new FormData(form);
      const personaje = {};
  
      // Convertimos los pares clave-valor en un objeto
      formData.forEach((valor, clave) => {
        personaje[clave] = valor;
      });
  
      // Obtenemos lo que ya hay en localStorage o un array vacío
      let cola = JSON.parse(localStorage.getItem("form")) || [];
  
      cola.push(personaje); // Agregamos el nuevo personaje
  
      localStorage.setItem("form", JSON.stringify(cola)); // Guardamos nuevamente
    });
  };
  