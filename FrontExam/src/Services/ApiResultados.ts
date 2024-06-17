// servicios.ts

export const obtenerNumeroDeViajeros = async (salidaId: string, destinoId: string) => {
    const response = await fetch(`https://localhost:7153/api/Estadistica/ObtenerNumeroDeViajeros?salidaId=${salidaId}&destinoId=${destinoId}`);
    const data = await response.json();
    return data;
  };
  
  export const obtenerDineroRecolectado = async (salidaId: string, destinoId: string) => {
    const response = await fetch(`https://localhost:7153/api/Estadistica/ObtenerDineroRecolectado?salidaId=${salidaId}&destinoId=${destinoId}`);
    const data = await response.json();
    return data;
  };
  
  export const numeroDeViajerosEntreFechas = async (fechaInicio: string, fechaFin: string) => {
    const response = await fetch(`https://localhost:7153/api/Estadistica/NumeroDeViajerosEntreFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
    const data = await response.json();
    return data;
  };
  
  export const dineroRecolectadoEntreFechas = async (fechaInicio: string, fechaFin: string) => {
    const response = await fetch(`https://localhost:7153/api/Estadistica/DineroRecolectadoEntreFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
    const data = await response.json();
    return data;
  };
  








// export const obtenerNumeroDeViajeros = async (salidaId: Number, destinoId: Number) => {
//     const response = await fetch(`https://localhost:7153/api/Estadistica/ObtenerNumeroDeViajeros?salidaId=${salidaId}&destinoId=${destinoId}`);
//     const data = await response.json();
//     return data;
//   };
  
//   export const obtenerDineroRecolectado = async (salidaId: Number, destinoId: Number) => {
//     const response = await fetch(`https://localhost:7153/api/Estadistica/ObtenerDineroRecolectado?salidaId=${salidaId}&destinoId=${destinoId}`);
//     const data = await response.json();
//     return data;
//   };
  
//   export const numeroDeViajerosEntreFechas = async (fechaInicio: string, fechaFin: string) => {
//     const response = await fetch(`https://localhost:7153/api/Estadistica/NumeroDeViajerosEntreFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
//     const data = await response.json();
//     return data;
//   };
  
//   export const dineroRecolectadoEntreFechas = async (fechaInicio: string, fechaFin: string) => {
//     const response = await fetch(`https://localhost:7153/api/Estadistica/DineroRecolectadoEntreFechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
//     const data = await response.json();
//     return data;
//   };
  