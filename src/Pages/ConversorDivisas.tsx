// Importamos las funciones React y useState desde el paquete 'react'
import React, { useState } from 'react';

// Importamos el componente Button desde './components/atoms/Button/Boton.component'
import Button from './components/atoms/Button/Boton.component';

// Importamos el componente Input desde './components/atoms/Input/Input.component'
import Input from './components/atoms/Input/Input.component';

// Definimos el componente funcional App
const ConversorDivisas = () => {
  // Definimos el estado 'euros' y la función para actualizarlo mediante useState
  const [euros, setEuros] = useState('');

  // Definimos el estado 'exchangeRate' y la función para actualizarlo mediante useState
  const [exchangeRate, setExchangeRate] = useState(1.12); // Cambio actual: 1 euro = 1.12 dólares

  // Definimos el estado 'dollars' y la función para actualizarlo mediante useState
  const [dollars, setDollars] = useState('');

  // Definimos la función handleEurosChange para manejar los cambios en el campo de entrada de euros
  const handleEurosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEuros(event.target.value);
  };

  // Definimos la función handleConvertClick para realizar la conversión de euros a dólares
  const handleConvertClick = () => {
    const convertedDollars = parseFloat(euros) * exchangeRate;
    setDollars(convertedDollars.toFixed(2));
  };

  // Retornamos el JSX que representa el componente App
  return (
    <div>
      <h2>Mi conversor de euros a dólares</h2>
      <h1>Introduzca la cantidad en rupias</h1>
      <input
        type="number"
        value={euros}
        onChange={handleEurosChange}
        placeholder="Cantidad en euros"
      />
      <button onClick={handleConvertClick}>Convertir</button>
      {dollars && (
        <div>
          <h1>Cantidad en dólares</h1>
          <h2>{dollars}</h2>
        </div>
      )}
    </div>
  );
};

// Exportamos el componente App por defecto
export default ConversorDivisas;
