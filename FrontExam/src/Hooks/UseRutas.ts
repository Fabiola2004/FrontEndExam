import { useState, useEffect } from 'react';
import { GetRuta } from '../Services/ApiRuta';

const useRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRutas = async () => {
      try {
        setLoading(true);
        const data = await GetRuta();
        if (data && data.$values) {
          setRutas(data.$values);
        } else {
          setRutas([]);
        }
        setLoading(false);
      } catch (err) {
        setError('Error al obtener las rutas');
        setLoading(false);
      }
    };

    fetchRutas();
  }, []);

  return { rutas, loading, error };
};

export default useRutas;
