document.addEventListener("DOMContentLoaded", () => {
    const tarjetaGuardada = JSON.parse(localStorage.getItem("tarjetaSeleccionada"));
  
    if (!tarjetaGuardada) {
      document.body.innerHTML = "<p>No character found.</p>";
      return;
    }
  
    const contenedor = document.getElementById("detalle");


            // Create and add the name
            const nombre = document.createElement("h1");
            nombre.textContent = tarjetaGuardada.name;
            nombre.classList.add("input-field");
            contenedor.appendChild(nombre);
            
            // Create first row (race, class, gender)
            const firstDiv = document.createElement("div");
            firstDiv.classList.add("row-3");

            const raza = document.createElement("p");
            raza.textContent = tarjetaGuardada.raza;
            raza.classList.add("input-field", "col-3");
            
            const clase = document.createElement("p");
            clase.textContent = tarjetaGuardada.clase;
            clase.classList.add("input-field", "col-3");

            const genero = document.createElement("p");
            genero.textContent = tarjetaGuardada.genero;
            genero.classList.add("input-field", "col-3");
            
            // Add elements to the first row
            firstDiv.appendChild(raza);
            firstDiv.appendChild(clase);
            firstDiv.appendChild(genero);
            
            // Add first row to container
            contenedor.appendChild(firstDiv);
            
            // Create and add the image container
            const imagenContainer = document.createElement("div");
            imagenContainer.classList.add("character-image");
            
            const imagen = document.createElement("img");
            imagen.src = tarjetaGuardada.imagen;
            imagen.alt = tarjetaGuardada.name;
            
            imagenContainer.appendChild(imagen);
            contenedor.appendChild(imagenContainer);
            
            // Create second row (weapon, armor)
            const secondDiv = document.createElement("div");
            secondDiv.classList.add("row-2");
            
            const weapon = document.createElement("p");
            weapon.textContent = tarjetaGuardada.armas;
            weapon.classList.add("input-field", "col-2");
            
            const armor = document.createElement("p");
            armor.textContent = tarjetaGuardada.armadura;
            armor.classList.add("input-field", "col-2");
            
            secondDiv.appendChild(weapon);
            secondDiv.appendChild(armor);
            contenedor.appendChild(secondDiv);
            
            // Create third row (strength, skill, intelligence)
            const thirdDiv = document.createElement("div");
            thirdDiv.classList.add("row-3");
            
            const strength = document.createElement("p");
            strength.textContent = tarjetaGuardada.fuerza;
            strength.classList.add("input-field", "col-3");
            
            const skill = document.createElement("p");
            skill.textContent = tarjetaGuardada.destreza;
            skill.classList.add("input-field", "col-3");
            
            const intelligence = document.createElement("p");
            intelligence.textContent = tarjetaGuardada.inteligencia;
            intelligence.classList.add("input-field", "col-3");
            
            thirdDiv.appendChild(strength);
            thirdDiv.appendChild(skill);
            thirdDiv.appendChild(intelligence);
            contenedor.appendChild(thirdDiv);
            
            // Create fourth row (SH, accessories)
            const fourthDiv = document.createElement("div");
            fourthDiv.classList.add("row-2");
            
            const special = document.createElement("p");
            special.textContent = tarjetaGuardada.habilidades;
            special.classList.add("input-field", "col-2");
            
            const accessories = document.createElement("p");
            accessories.textContent = tarjetaGuardada.accesorios;
            accessories.classList.add("input-field", "col-2");
            
            fourthDiv.appendChild(special);
            fourthDiv.appendChild(accessories);
            contenedor.appendChild(fourthDiv);
    });
