import React, { useState } from 'react';
import Input from './components/Input';
import Boton from './components/Boton';

const RegistroFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar los datos del formulario
    // Aquí puedes realizar validaciones y enviar los datos a un servidor, por ejemplo
    console.log('Datos enviados:', { nombre, apellido, contrasena });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <Input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <Input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <Input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
        <Input
          type="password"
          id="confirmarContrasena"
          value={confirmarContrasena}
          onChange={(event) => setConfirmarContrasena(event.target.value)}
        />
      </div>
      <Boton type="submit">Registrarse</Boton>
    </form>
  );
};

export default RegistroFormulario;