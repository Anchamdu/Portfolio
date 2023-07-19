import { useState, useEffect } from 'react';
import { Table } from './components/moleculis/Table/Table.component';

const url = 'https://api.weatherapi.com/v1/current.json?key=785e1a1b7a7b4497a5775633231307&q=Cáceres&aqi=no'

interface RowI {
  col1: string;
  col2: JSX.Element;
  col3: string;
  col4: string;
  col5: string;
}

const App = () => {
  const [apiData, setApiData] = useState<RowI[]>([]);
  const [name, setName] = useState<string>("");

  const renderAvatar = (url: string) => {
    return (
      <img
        src={url}
        alt="Avatar"
        style={{
          border: "2px solid #000",
          borderRadius: "100%",
          marginTop: "4px",
          width: "50px",
          height: "auto"
        }}
      />
    );
  };

  const normalize = (data: any[]) => {
    const apiRowData: RowI[] = data.map((item) => ({
      col1: item.id as string,
      col2: renderAvatar(item.avatar),
      col3: item.first_name + " " + item.last_name,
      col4: item.subscription.plan,
      col5: item.subscription.status
    }));
    setApiData(apiRowData);
  };

  const handlerClick = () => {
    setName("");
  };

  const columns = [
    { id: "col1", name: "ID" },
    { id: "col2", name: "Avatar" },
    { id: "col3", name: "Nombre Completo" },
    { id: "col4", name: "Subcripción" },
    { id: "col5", name: "Estado" }
  ];

  const fetchApi = async () => {
    const resp = await fetch("https://random-data-api.com/api/v2/users?size=10");
    const data = await resp.json();
    if(!!data){
      normalize(data);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchApi();
    })();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "16px",
          justifyContent: "center"
        }}
      >
        <select
          name="Nombre Completo"
          value={name}
          style={{
            minWidth: "200px"
          }}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="">Seleccione un nombre</option>
          {apiData.map((item) => (
            <option value={item.col3}>{item.col3}</option>
          ))}
        </select>
        <button onClick={() => handlerClick()}>Limpiar</button>
      </div>
      <Table
        columns={columns}
        rows={apiData.filter((item) => (!!name ? item.col3 === name : item))}
      />
    </>
  );
}

export default App