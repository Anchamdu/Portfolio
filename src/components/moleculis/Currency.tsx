import React, { useState } from 'react';

const Currency = () => {
  const [euros, setEuros] = useState('');
  const [dollars, setDollars] = useState('');

  const handleEurosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEuros(event.target.value);
  };

  const handleConvertClick = () => {
    const convertedDollars = parseFloat(euros) * 1.12;
    setDollars(convertedDollars.toFixed(2));
  };

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

export default Currency;