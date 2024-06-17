import { useState, useEffect } from 'react';
import { PrecioError, ingresarTiquete, obtenerPrecio } from '../Services/ApiTickets';


interface UseCompraTiqueteProps {
  precio: number;
  error: string;
  success: string;
  fecha: string;
  lugarSalidaId: string;
  lugarDestinoId: string;
  setFecha: React.Dispatch<React.SetStateAction<string>>;
  setSalida: React.Dispatch<React.SetStateAction<string>>;
  setDestino: React.Dispatch<React.SetStateAction<string>>;
  obtenerPrecio: (lugarSalidaId: number, lugarDestinoId: number) => Promise<number>;
  ingresarTiquete: (tiquete: { lugarSalidaId: number; lugarDestinoId: number; fecha: string; }) => Promise<{ error?: string }>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const UseCompraTiquete = (): UseCompraTiqueteProps => {
  const [fecha, setFecha] = useState('');
  const [lugarSalidaId, setSalida] = useState('');
  const [lugarDestinoId, setDestino] = useState('');
  const [precio, setPrecio] = useState<number>(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const actualizarPrecio = async () => {
      if (lugarSalidaId && lugarDestinoId) {
        try {
          const precioData = await obtenerPrecio(Number(lugarSalidaId), Number(lugarDestinoId));
          setPrecio(precioData);
        } catch (err) {
          if (err instanceof PrecioError) {
            setError('Error al obtener el precio: ' + err.message);
          } else {
            setError('Error al obtener el precio');
          }
        }
      }
    };

    actualizarPrecio();
  }, [lugarSalidaId, lugarDestinoId]);

  const handleSubmit: UseCompraTiqueteProps['handleSubmit'] = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setSuccess('');
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
    } catch {
      setError('Error al procesar la solicitud');
    }
  };

  return {
    precio,
    error,
    success,
    fecha,
    lugarSalidaId,
    lugarDestinoId,
    setFecha,
    setSalida,
    setDestino,
    obtenerPrecio,
    ingresarTiquete,
    handleSubmit,
  };
};

export default UseCompraTiquete;
