import { useState } from 'react';
import { 
    obtenerNumeroDeViajeros, 
    obtenerDineroRecolectado, 
    numeroDeViajerosEntreFechas, 
    dineroRecolectadoEntreFechas 
} from '../Services/ApiResultados';

const MostrarResultados = () => {
    const [salidaId, setSalidaId] = useState<string>('');
    const [destinoId, setDestinoId] = useState<string>('');
    const [fechaInicio, setFechaInicio] = useState<string>('');
    const [fechaFin, setFechaFin] = useState<string>('');
    const [resultados, setResultados] = useState<any>({});
    const [error, setError] = useState<string>('');

    const handleObtenerNumeroDeViajeros = async () => {
        try {
            const data = await obtenerNumeroDeViajeros(salidaId, destinoId);
            setResultados({ ...resultados, numeroDeViajeros: data });
        } catch (error: any) {
          setError(error.message as string);
        }
    };

    const handleObtenerDineroRecolectado = async () => {
        try {
            const data = await obtenerDineroRecolectado(salidaId, destinoId);
            setResultados({ ...resultados, dineroRecolectado: data });
        } catch (error: any) {
          setError(error.message as string);
        }
    };

    const handleNumeroDeViajerosEntreFechas = async () => {
        try {
            const data = await numeroDeViajerosEntreFechas(fechaInicio, fechaFin);
            setResultados({ ...resultados, viajerosEntreFechas: data });
        } catch (error: any) {
          setError(error.message as string);
        }
    };

    const handleDineroRecolectadoEntreFechas = async () => {
        try {
            const data = await dineroRecolectadoEntreFechas(fechaInicio, fechaFin);
            setResultados({ ...resultados, dineroEntreFechas: data });
        } catch (error: any) {
          setError(error.message as string);
        }
    };

    const renderResultado = (label: string, data: any, colorClass: string) => (
        <div className={`bg-${colorClass}-100 p-4 rounded mb-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform`}>
            <h3 className={`text-${colorClass}-800 font-bold mb-2`}>{label}</h3>
            <p className="text-gray-700">{JSON.stringify(data, null, 2)}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-8">Mostrar Resultados</h1>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Parámetros de Viaje</h2>
                    <input
                        type="text"
                        placeholder="Salida ID"
                        value={salidaId}
                        onChange={(e) => setSalidaId(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Destino ID"
                        value={destinoId}
                        onChange={(e) => setDestinoId(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button 
                        onClick={handleObtenerNumeroDeViajeros} 
                        className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600"
                    >
                        Obtener Número de Viajeros
                    </button>
                    <button 
                        onClick={handleObtenerDineroRecolectado} 
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    >
                        Obtener Dinero Recolectado
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Parámetros de Fechas</h2>
                    <input
                        type="date"
                        placeholder="Fecha Inicio"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="date"
                        placeholder="Fecha Fin"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button 
                        onClick={handleNumeroDeViajerosEntreFechas} 
                        className="w-full bg-purple-500 text-white p-2 rounded mb-2 hover:bg-purple-600"
                    >
                        Número de Viajeros entre Fechas
                    </button>
                    <button 
                        onClick={handleDineroRecolectadoEntreFechas} 
                        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                        Dinero Recolectado entre Fechas
                    </button>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Resultados</h2>
                {error && <p className="text-red-500 mb-4">Error: {error}</p>}
                {resultados.numeroDeViajeros && renderResultado('Número de Viajeros', resultados.numeroDeViajeros, 'blue')}
                {resultados.dineroRecolectado && renderResultado('Dinero Recolectado', resultados.dineroRecolectado, 'green')}
                {resultados.viajerosEntreFechas && renderResultado('Viajeros entre Fechas', resultados.viajerosEntreFechas, 'purple')}
                {resultados.dineroEntreFechas && renderResultado('Dinero entre Fechas', resultados.dineroEntreFechas, 'red')}
            </div>
        </div>
    );
};

export default MostrarResultados;









// import { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';
// import { 
//     obtenerNumeroDeViajeros, 
//     obtenerDineroRecolectado, 
//     numeroDeViajerosEntreFechas, 
//     dineroRecolectadoEntreFechas 
// } from '../Services/ApiResultados';

// function Resultados() {
//     const [salidaId, setSalidaId] = useState(0);
//     const [destinoId, setDestinoId] = useState(0);
//     const [fechaInicio, setFechaInicio] = useState('');
//     const [fechaFin, setFechaFin] = useState('');
//     const [resultados, setResultados] = useState({});
//     const [error, setError] = useState('');

//     const handleObtenerNumeroDeViajeros = async () => {
//         try {
//             const data = await obtenerNumeroDeViajeros(salidaId, destinoId);
//             setResultados({ ...resultados, numeroDeViajeros: data });
//         } catch (error) {
//             setError('Error al obtener el número de viajeros: ' + error);
//         }
//     };

//     const handleObtenerDineroRecolectado = async () => {
//         try {
//             const data = await obtenerDineroRecolectado(salidaId, destinoId);
//             setResultados({ ...resultados, dineroRecolectado: data });
//             setError('');
//         } catch (error) {
//             setError('Error al obtener el dinero recolectado: ' + error);
//         }
//     };

//     const handleNumeroDeViajerosEntreFechas = async () => {
//         try {
//             const data = await numeroDeViajerosEntreFechas(fechaInicio, fechaFin);
//             setResultados({ ...resultados, viajerosEntreFechas: data });
//             setError('');
//         } catch (error) {
//             setError('Error al obtener el número de viajeros entre fechas: ' + error);
//         }
//     };

//     const handleDineroRecolectadoEntreFechas = async () => {
//         try {
//             const data = await dineroRecolectadoEntreFechas(fechaInicio, fechaFin);
//             setResultados({ ...resultados, dineroEntreFechas: data });
//             setError('');
//         } catch (error) {
//             setError('Error al obtener el dinero recolectado entre fechas: ' + error);
//         }
//     };

//     const renderResultado = (label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, data: any, colorClass: string) => (
//         <div className={`bg-${colorClass}-100 p-4 rounded mb-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform`}>
//             <h3 className={`text-${colorClass}-800 font-bold mb-2`}>{label}</h3>
//             <pre className="text-gray-700">{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//             <h1 className="text-3xl font-bold mb-8">Mostrar Resultados</h1>
//             <div className="flex flex-wrap justify-center gap-6 mb-6">
//                 <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//                     <h2 className="text-xl font-semibold mb-4">Parámetros de Viaje</h2>
//                     <input
//                         type="number"
//                         placeholder="Salida ID"
//                         value={salidaId}
//                         onChange={(e) => setSalidaId(e.target.value)}
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                     />
//                     <input
//                         type="number"
//                         placeholder="Destino ID"
//                         value={destinoId}
//                         onChange={(e) => setDestinoId(e.target.value)}
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                     />
//                     <button 
//                         onClick={handleObtenerNumeroDeViajeros} 
//                         className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600"
//                     >
//                         Obtener Número de Viajeros
//                     </button>
//                     <button 
//                         onClick={handleObtenerDineroRecolectado} 
//                         className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//                     >
//                         Obtener Dinero Recolectado
//                     </button>
//                 </div>
//                 <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//                     <h2 className="text-xl font-semibold mb-4">Parámetros de Fechas</h2>
//                     <input
//                         type="date"
//                         value={fechaInicio}
//                         onChange={(e) => setFechaInicio(e.target.value)}
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                     />
//                     <input
//                         type="date"
//                         value={fechaFin}
//                         onChange={(e) => setFechaFin(e.target.value)}
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                     />
//                     <button 
//                         onClick={handleNumeroDeViajerosEntreFechas} 
//                         className="w-full bg-purple-500 text-white p-2 rounded mb-2 hover:bg-purple-600"
//                     >
//                         Número de Viajeros entre Fechas
//                     </button>
//                     <button 
//                         onClick={handleDineroRecolectadoEntreFechas} 
//                         className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
//                     >
//                         Dinero Recolectado entre Fechas
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//                 <h2 className="text-xl font-semibold mb-4">Resultados</h2>
//                 {error && <p className="text-red-500 mb-4">Error: {error}</p>}
//                 {resultados.numeroDeViajeros && renderResultado('Número de Viajeros', resultados.numeroDeViajeros, 'blue')}
//                 {resultados.dineroRecolectado && renderResultado('Dinero Recolectado', resultados.dineroRecolectado, 'green')}
//                 {resultados.viajerosEntreFechas && renderResultado('Viajeros entre Fechas', resultados.viajerosEntreFechas, 'purple')}
//                 {resultados.dineroEntreFechas && renderResultado('Dinero entre Fechas', resultados.dineroEntreFechas, 'red')}
//             </div>
//         </div>
//     )
// }

// export default Resultados;