
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
    
        const raza = document.createElement("span");
        raza.textContent = "Race " +tarjeta.raza;
        
        const clase = document.createElement("span");
        clase.textContent = "Class "+tarjeta.clase;
        
        const boton = document.createElement("a");
        boton.href = "../index.html"
        boton.textContent = "See more"
        boton.classList.add("details-button")
        boton.classList.add("details-button:hover")

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Delete";

        eliminarBtn.addEventListener("click", () => {
            tarjetas = tarjetas.filter(t => t.name !== tarjeta.name);
      
            localStorage.setItem("form", JSON.stringify(tarjetas));
      
            div.remove();
    
          });

        div.append(nombre, raza, clase, boton, eliminarBtn)
        contenedor.appendChild(div);
    });
      }

document.addEventListener('DOMContentLoaded',()=>{
    card();
})