




export const obtenerPrecio = async (LugarSalida : number, LugarDestino : number) => {
    const response = await fetch(`https://localhost:7153/api/Tiquete/ObtenerPrecio?salida=1&destino=1`);
    const data = await response.json();
    return data;
  };


export const ingresarTiquete = async (Tiquete: any) => {
    const response = await fetch('https://localhost:7153/api/Tiquete/ReservarTiquete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Tiquete),
    });
    const data = await response.json();
    return data;
  };