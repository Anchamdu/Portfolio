const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 className="text-4xl text-purple-800 mb-8 text-center">LOGIN</h1>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Nombre de usuario"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="apellidos">
        Last name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="apellidos"
        type="text"
        placeholder="Apellidos"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Contraseña"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
        Confirm password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="confirm-password"
        type="password"
        placeholder="Confirmar contraseña"
      />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">
        Acceder
      </button>
    </div>
  </form>
</div>
  );
};

export default Login;