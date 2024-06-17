import { useState } from 'react';
import { ingresarTiquete, obtenerPrecio } from '../Services/ApiTickets';

function CompraTiquete() {
  const [fecha, setFecha] = useState('');
  const [lugarSalidaId, setSalida] = useState('');
  const [lugarDestinoId, setDestino] = useState('');
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (lugarSalidaId === lugarDestinoId) {
      setError('El lugar de salida y destino no pueden ser el mismo');
      return;
    }

    try {
      setError('');
      setSuccess('');
      const precioData = await obtenerPrecio(Number(lugarSalidaId), Number(lugarDestinoId));
      setPrecio(precioData);
      const tiquete = { lugarSalidaId: Number(lugarSalidaId), lugarDestinoId: Number(lugarDestinoId), fecha };
      const resultado = await ingresarTiquete(tiquete);

      if (resultado.error) {
        setError(resultado.error);
      } else {
        setSuccess('Tiquete ingresado exitosamente');
        // Resetea el formulario
        setFecha('');
        setSalida('');
        setDestino('');
        setPrecio(0);
      }
    } catch (err) {
      setError('Error al procesar la solicitud');
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white shadow-lg rounded-lg px-8 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fecha" className="block text-base font-medium text-[#07074D] mb-1">
              Fecha
            </label>
            <input
              type="datetime-local"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lugarSalida" className="block text-base font-medium text-[#07074D] mb-1">
              Lugar de Salida
            </label>
            <input
              type="number"
              id="lugarSalida"
              value={lugarSalidaId}
              onChange={(e) => setSalida(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lugarDestino" className="block text-base font-medium text-[#07074D] mb-1">
              Lugar de Destino
            </label>
            <input
              type="number"
              id="lugarDestino"
              value={lugarDestinoId}
              onChange={(e) => setDestino(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-[#07074D] mb-1">Precio: {precio}</label>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md text-base font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CompraTiquete;



// import React, { useState } from 'react';
// import { ingresarTiquete, obtenerPrecio } from '../services/ApiTickets';
// import CompraTiquete from './CompraTiquete';

// const CompraTiquete = () => {
//   const [fecha, setFecha] = useState('');
//   const [lugarSalidaId, setSalida] = useState('');
//   const [lugarDestinoId, setDestino] = useState('');
//   const [precio, setPrecio] = useState(0);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (lugarSalidaId === lugarDestinoId) {
//       setError('El lugar de salida y destino no pueden ser el mismo');
//       return;
//     }
//     setError('');
//     const precioData = await obtenerPrecio(lugarSalidaId, lugarDestinoId);
//     setPrecio(precioData.precio);
//     const tiquete = { lugarSalidaId, lugarDestinoId, fecha };
//     const resultado = await ingresarTiquete(tiquete);

//     if (resultado.error) {
//       setError(resultado.error);
//     } else {
     
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white shadow-lg rounded-lg px-8 py-6">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="fecha" className="block text-base font-medium text-[#07074D] mb-1">
//               Fecha
//             </label>
//             <input
//               type="datetime-local"
//               id="fecha"
//               value={fecha}
//               onChange={(e) => setFecha(e.target.value)}
//               className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="lugarSalida" className="block text-base font-medium text-[#07074D] mb-1">
//               Lugar de Salida
//             </label>
//             <input
//               type="text"
//               id="lugarSalida"
//               value={lugarSalidaId}
//               onChange={(e) => setSalida(e.target.value)}
//               className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="lugarDestino" className="block text-base font-medium text-[#07074D] mb-1">
//               Lugar de Destino
//             </label>
//             <input
//               type="text"
//               id="lugarDestino"
//               value={lugarDestinoId}
//               onChange={(e) => setDestino(e.target.value)}
//               className="w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-base font-medium text-[#07074D] mb-1">Precio: {precio}</label>
//           </div>
//           {error && <div className="text-red-500">{error}</div>}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-3 px-6 rounded-md text-base font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Ingresar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CompraTiquete