import { useState, useEffect } from 'react';
import { ingresarTiquete, obtenerPrecio } from '../Services/ApiTickets';

const UseCompraTiquete = () => {
  const [fecha, setFecha] = useState('');
  const [lugarSalidaId, setSalida] = useState('');
  const [lugarDestinoId, setDestino] = useState('');
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const actualizarPrecio = async () => {
      if (lugarSalidaId && lugarDestinoId) {
        try {
          const precioData = await obtenerPrecio(Number(lugarSalidaId), Number(lugarDestinoId));
          setPrecio(precioData);
        } catch (err) {
          setError('Error al obtener el precio');
        }
      }
    };

    actualizarPrecio();
  }, [lugarSalidaId, lugarDestinoId]);

  const handleSubmit = async (e : any) => {
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
    } catch (err) {
      setError('Error al procesar la solicitud');
    }
  };

  return {
    precio, obtenerPrecio, ingresarTiquete, error, success, handleSubmit, fecha, setFecha,
    lugarSalidaId, lugarDestinoId, setSalida, setDestino
  };
};

export default UseCompraTiquete;
