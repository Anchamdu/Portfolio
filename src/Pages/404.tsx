const Error404 = () => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-800">Error 404</h1>
        <p className="text-xl text-gray-600">La página que estás buscando no esta disponible.</p>
        <button class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Volver a Inicio</button>
      </div>
    </div>
  )
}


export default Error404;