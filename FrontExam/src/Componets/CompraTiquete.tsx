import UseCompraTiquete from '../Hooks/UseCompraTiquete';

function CompraTiquete() {
  
const {handleSubmit, precio, fecha, setFecha, lugarDestinoId, lugarSalidaId, error, success, setDestino, setSalida } = UseCompraTiquete();

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