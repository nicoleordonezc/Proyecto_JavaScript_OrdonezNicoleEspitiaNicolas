document.addEventListener("DOMContentLoaded", () => {
    const tarjetaGuardada = JSON.parse(localStorage.getItem("tarjetaSeleccionada"));
  
    if (!tarjetaGuardada) {
      document.body.innerHTML = "<p>No character found.</p>";
      return;
    }
  
    const contenedor = document.getElementById("detalle");


            // Agrega nombre
            const nombre = document.createElement("h1");
            nombre.textContent = tarjetaGuardada.name;
            nombre.classList.add("input-field");
            contenedor.appendChild(nombre);
            
            // primera fila
            const lineaUno = document.createElement("div");
            lineaUno.classList.add("linea");

            const caja1 = document.createElement("p");
            caja1.textContent = "Race"

            const caja2 = document.createElement("p");
            caja2.textContent = "Class"

            const caja3 = document.createElement("p");
            caja3.textContent = "Gender"

            lineaUno.appendChild(caja1);
            lineaUno.appendChild(caja2);
            lineaUno.appendChild(caja3);

            contenedor.appendChild(lineaUno);

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
            
            
            firstDiv.appendChild(raza);
            firstDiv.appendChild(clase);
            firstDiv.appendChild(genero);
            
    
            contenedor.appendChild(firstDiv);
            
            // Agrega imagen
            const imagenContainer = document.createElement("div");
            imagenContainer.classList.add("character-image");
            
            const imagen = document.createElement("img");
            imagen.src = tarjetaGuardada.imagen;
            imagen.alt = tarjetaGuardada.name;
            
            imagenContainer.appendChild(imagen);
            contenedor.appendChild(imagenContainer);
            
            // Segunda fila
            const lineaTres = document.createElement("div");
            lineaTres.classList.add("linea");

            const caja4 = document.createElement("p");
            caja4.textContent = "Weapon"

            const caja5 = document.createElement("p");
            caja5.textContent = "Armor"

            lineaTres.appendChild(caja4);
            lineaTres.appendChild(caja5);

            contenedor.appendChild(lineaTres);

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
            
            // Tercera fila
            
            const lineaDos = document.createElement("div");
            lineaDos.classList.add("linea");

            const caja6 = document.createElement("p");
            caja6.textContent = "Strength"

            const caja7 = document.createElement("p");
            caja7.textContent = "Skill"

            const caja8 = document.createElement("p");
            caja8.textContent = "Intelligence"

            lineaDos.appendChild(caja6);
            lineaDos.appendChild(caja7);
            lineaDos.appendChild(caja8);

            contenedor.appendChild(lineaDos);


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
            
            // Cuarta fila
            const lineaCuatro = document.createElement("div");
            lineaCuatro.classList.add("linea");

            const caja9 = document.createElement("p");
            caja9.textContent = "Special hability"

            const caja10 = document.createElement("p");
            caja10.textContent = "Accessories"

            lineaCuatro.appendChild(caja9);
            lineaCuatro.appendChild(caja10);

            contenedor.appendChild(lineaCuatro);

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
