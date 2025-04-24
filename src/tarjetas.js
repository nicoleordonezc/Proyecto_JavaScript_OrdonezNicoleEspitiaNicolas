
function card(){
    const contenedor = document.getElementById("contenedor")
    let tarjetas = JSON.parse(localStorage.getItem("form")) || [];
    if (tarjetas.length === 0) { []
      return;
    }
    tarjetas.forEach((tarjeta) => {
        const div = document.createElement("div");
        div.classList.add("character-card")
    
        const nombre = document.createElement("h1");
        nombre.textContent = tarjeta.name;
        nombre.classList.add ("character-header")

        const imagen = document.createElement("img");
        imagen.src = tarjeta.imagen;
        imagen.classList.add("character-image")
    
        const raza = document.createElement("span");
        raza.textContent = "Race " +tarjeta.raza;
        raza.classList.add("character-description")
        
        const clase = document.createElement("span");
        clase.textContent = "Class "+tarjeta.clase;
        clase.classList.add("character-description")
        
        const boton = document.createElement("a");
        boton.href = "details.html"
        boton.textContent = "See more"
        boton.classList.add("details-button")
        
        // Evento para ver más
        boton.addEventListener("click", () => {
          localStorage.setItem("tarjetaSeleccionada", JSON.stringify(tarjeta));
        });
        

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Delete";
        eliminarBtn.classList.add("details-button")

        eliminarBtn.addEventListener("click", () => {
            tarjetas = tarjetas.filter(t => t.name !== tarjeta.name);
      
            localStorage.setItem("form", JSON.stringify(tarjetas));
      
            div.remove();
    
          });

        div.append(nombre, imagen, raza, clase, boton, eliminarBtn)
        contenedor.appendChild(div);
    });
      }

document.addEventListener('DOMContentLoaded',()=>{
    card();
})