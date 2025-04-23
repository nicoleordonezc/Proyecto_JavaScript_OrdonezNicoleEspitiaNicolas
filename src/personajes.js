export const raza = async()=> {
    const nuevo = new URL("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "races"
    const race =  await fetch(nuevo.toString(), {method: "get"})
    return await race.json();
    
}

export const clase = async()=>{
    const nuevo = new URL("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "classes"
    const clases = await fetch(nuevo.toString(), {method: "get"})
    return await clases.json();
    
}

export const arma = async()=>{
    const nuevo = new URL("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "equipment-categories/weapon"
    const armas = await fetch(nuevo.toString(), {method: "get"})
    return await armas.json();
    
}

export const armadura = async()=>{
    const nuevo = new URL ("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "equipment-categories/armor"
    const armadura = await fetch(nuevo.toString(), {method: "get"})
    return await armadura.json()
}


export const habilidades = async()=>{
    const nuevo = new URL("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "skills"
    const hEspeciales = await fetch(nuevo.toString(), {method: "get"})
    return await hEspeciales.json();
    
}

export const accesorios = async()=>{
    const nuevo = new URL ("https://www.dnd5eapi.co/api/2014/");
    nuevo.pathname += "equipment-categories/adventuring-gear"
    const acces = await fetch(nuevo.toString(), {method:"get"})
    return await acces.json()
}


const imagenRaza = {
    dragonborn: "../assets/img/dragonborn.png",
    dwarf: "../assets/img/dwarft.png",
    elf: "../assets/img/elf.png",
    gnome: "../assets/img/gnome.png",
    "half-elf": "../assets/img/halfElf.png",
    "half-orc": "../assets/img/half-orc.png",
    halfling: "../assets/img/halfling.png",
    human: "../assets/img/human.png",
    tiefling: "../assets/img/tiefling.png",
};

export function actualizarImagenRaza() {
    const select = document.getElementById("raza");
    const imagen = document.getElementById("image-upload");
  
    const razaSeleccionada = select.value;
    const ruta = imagenRaza[razaSeleccionada];
  
    if (ruta) {
      imagen.src = ruta;
      imagen.alt = razaSeleccionada; 
    } else {
      imagen.src = "../assets/img/best-background-for-every-class-main_1.jpg";
      imagen.alt = "Sin imagen";
    }
  }
  