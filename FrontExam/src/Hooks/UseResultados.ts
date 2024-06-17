import { useState } from 'react'
import { dineroRecolectadoEntreFechas, numeroDeViajerosEntreFechas, obtenerDineroRecolectado, obtenerNumeroDeViajeros } from '../Services/ApiResultados';

const UseResultados = () => {
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
  return {
handleDineroRecolectadoEntreFechas,
handleNumeroDeViajerosEntreFechas,
handleObtenerDineroRecolectado,
handleObtenerNumeroDeViajeros,
fechaFin,
fechaInicio,
setFechaFin,
setFechaInicio,
error,
setSalidaId,
setDestinoId,
salidaId, 
destinoId,
resultados
  }
}

export default UseResultados