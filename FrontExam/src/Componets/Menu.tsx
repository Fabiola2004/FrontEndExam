import { Link } from 'react-router-dom';
import useRutas from '../Hooks/UseRutas';

const RutasComponent = () => {
  const { rutas, loading, error } = useRutas();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-6">
        Bienvenido al Sistema de Tiquetes
      </h1>
      <ul className="space-y-4"> 
        {rutas.map((ruta: any) => (
          <li key={ruta.menuId}>
            <Link to={ruta.direccion}>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                {ruta.titulo}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RutasComponent;
