const Table = () => {
  return (
    <div>
      <h1 className="bg-blue-500 text-white rounded-md px-4 py-2">Proyecto React</h1>

      <table className="bg-blue-500 text-white rounded-md px-4 py-2">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white rounded-md px-4 py-2">Encabezado 1</th>
            <th className="bg-blue-500 text-white rounded-md px-4 py-2">Encabezado 2</th>
            <th className="bg-blue-500 text-white rounded-md px-4 py-2">Encabezado 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 1, Celda 1</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 1, Celda 2</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 1, Celda 3</td>
          </tr>
          <tr>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 2, Celda 1</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 2, Celda 2</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 2, Celda 3</td>
          </tr>
          <tr>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 3, Celda 1</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 3, Celda 2</td>
            <td className="bg-blue-500 text-white rounded-md px-4 py-2">Fila 3, Celda 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;