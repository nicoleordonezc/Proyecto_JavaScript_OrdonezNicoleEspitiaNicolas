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