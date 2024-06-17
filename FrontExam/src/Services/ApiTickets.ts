export const obtenerPrecio = async (salida: number, destino: number) => {
    // const response = await fetch(`http://localhost:3000/api/obtenerPrecio?salida=${salida}&destino=${destino}`);
    const response = await fetch(`https://localhost:7153/api/Tiquete/ObtenerPrecio?salida=${salida}&destino=${destino}`);
    const data = await response.json();
    return data;
  };
  
  export const ingresarTiquete = async (tiquete: object) => {
    const response = await fetch('https://localhost:7153/api/Tiquete/ReservarTiquete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tiquete),
    });
    const data = await response.json();
    return data;
  };
  