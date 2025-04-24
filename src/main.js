import { guardar } from "./guardar.js";
import { raza, clase, arma, armadura, habilidades, accesorios, actualizarImagenRaza } from "./personajes.js"


/**Guardar nuevo pj */
document.addEventListener("DOMContentLoaded",guardar())
/** Cambiar img por raza seleccionada*/
document.getElementById("raza").addEventListener("change", actualizarImagenRaza);  


/**Funciones para poner en opciones la info de la api */
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const razasData = await raza();
        const select = document.getElementById('raza');
        razasData.results.forEach(r => {
            const option = document.createElement('option');
            option.textContent = r.name;
            option.value = r.name.toLowerCase();
            select.appendChild(option);
   

      });
    } catch (error) {
      console.error("Loading...", error);
    }
  });

document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const claseData = await clase ();
        const select = document.getElementById('clase');
        claseData.results.forEach(x => {
            const option = document.createElement('option');
            option.textContent = x.name;
            select.appendChild(option)
        });
    }catch (error){
        console.error("Loading...", error)
    }
});

document.addEventListener('DOMContentLoaded', async ()=>{
    try{
        const armaData = await arma();
        const select = document.getElementById('armas');
        armaData.equipment.forEach(w=>{
        const option = document.createElement('option')
        option.textContent = w.name;
        select.appendChild(option)
        });
    }catch(error){
        console.error("Loading...", error)
    }
});

document.addEventListener('DOMContentLoaded', async()=>{
    try{
        const armaduraData = await armadura();
        const select = document.getElementById('armadura');
        armaduraData.equipment.forEach(a => {
        const option = document.createElement('option')
        option.textContent = a.name
        select.appendChild(option) 
        })
    }catch(error){
        console.error("Loading...",error)
    }
});

document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const claseData = await habilidades ();
        const select = document.getElementById('habilidades');
        claseData.results.forEach(x => {
            const option = document.createElement('option');
            option.textContent = x.name;
            select.appendChild(option)
        });
    }catch (error){
        console.error("Loading...", error)
    }
});

document.addEventListener('DOMContentLoaded', async()=>{
    try{
        const accesorioData = await accesorios();
        const select = document.getElementById('accesorios');
        accesorioData.equipment.forEach(a => {
        const option = document.createElement('option');
        option.textContent = a.name;
        select.appendChild(option)
        });
    }catch (error){
        console.error("Loading...", error)
    }
})