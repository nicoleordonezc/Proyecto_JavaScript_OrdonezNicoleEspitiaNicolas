import { guardar } from "./guardar.js";
import { raza, clase, armadura, habilidades } from "./personajes.js"

guardar()


document.addEventListener('DOMContentLoaded', async () => {
    try {
      const razasData = await raza();
      const select = document.querySelector('.raza');
      razasData.results.forEach(r => {
        const option = document.createElement('option');
        option.textContent = r.name;
        select.appendChild(option);
      });
    } catch (error) {
      console.error("Error cargando razas:", error);
    }
  });

document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const claseData = await clase ();
        const select = document.querySelector('.clase');
        claseData.results.forEach(x => {
            const option = document.createElement('option');
            option.textContent = x.name;
            select.appendChild(option)
        });
    }catch (error){
        console.error("Error cargando clases:", error)
    }
});

document.addEventListener('DOMContentLoaded', async ()=>{
    try{
        const armaduraData = await armadura();
        const select = document.querySelector('.armadura');
        armaduraData.equipment.forEach(a=>{
        const option = document.createElement('option')
        option.textContent = a.name;
        select.appendChild(option)
        });
    }catch(error){
        console.error("Error cargando armadura:", error)
    }
});

document.addEventListener('DOMContentLoaded', async ()=> {
    try {
        const claseData = await habilidades ();
        const select = document.querySelector('.habilidades');
        claseData.results.forEach(x => {
            const option = document.createElement('option');
            option.textContent = x.name;
            select.appendChild(option)
        });
    }catch (error){
        console.error("Error cargando clases:", error)
    }
});

