function card(){
    const contenedor = document.getElementById("contenedor")
    let tarjetas = JSON.parse(localStorage.getItem("form")) || [];
    console.log(tarjetas);
    
    if (tarjetas.length === 0) { []
      return;
    }
    tarjetas.forEach((tarjeta) => {
        const div = document.createElement("div");
        div.classList.add("caja")
    
        const nombre = document.createElement("h1");
        nombre.textContent = tarjeta.name;
    
        const raza = document.createElement("span");
        raza.textContent = tarjeta.raza;
        
        const clase = document.createElement("span");
        clase.textContent = tarjeta.clase;
        
        const boton = document.createElement("a");
        boton.href = "../index.html"
        boton.textContent = "See more"

        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Delete";

        eliminarBtn.addEventListener("click", () => {
            tarjetas = tarjetas.filter(t => t.name !== tarjeta.name);
      
            localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
      
            div.remove();
    
          });

        div.append(nombre, raza, clase, boton, eliminarBtn)
        contenedor.appendChild(div);
    });
      }

document.addEventListener('DOMContentLoaded',()=>{
    card();
})