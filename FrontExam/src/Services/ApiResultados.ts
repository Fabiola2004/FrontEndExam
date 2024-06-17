



export const NumViajeros = async (LugarSalidaId : number, LUgarDestinoId : number) => {
    const response = await fetch('https://localhost:7153/api/Estadistica/ObtenerNumeroDeViajeros');
    const data = await response.json();
    return data;
  };
  

export const DineroFechas = async (LugarSalidaId: number, LUgarDestinoId : number) => {
    const response = await fetch('https://localhost:7153/api/Estadistica/ObtenerDineroRecolectado');
    const data = await response.json();
    return data;
  };
  

export const NumeroDeViajerosEntreFechas = async ( Fecha : Date) => {
    const response = await fetch('https://localhost:7153/api/Estadistica/NumeroDeViajerosEntreFechas');
    const data = await response.json();
    return data;
  };
  
  
export const DineroRecolectadoEntreFechas = async (Fecha : Date) => {
    const response = await fetch('https://localhost:7153/api/Estadistica/DineroRecolectadoEntreFechas');
    const data = await response.json();
    return data;
  };
  