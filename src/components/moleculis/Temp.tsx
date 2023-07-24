import React, { useState } from 'react';

const Temp = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(event.target.value);
  };

  const handleConvertClick = () => {
    const convertedFahrenheit = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(convertedFahrenheit.toFixed(2));
  };

  return (
    <div>
      <h2>Mi conversor de grados Celsius a Fahrenheit</h2>
      <h1>Introduzca la temperatura en grados Celsius</h1>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Temperatura en grados Celsius"
      />
      <button onClick={handleConvertClick}>Convertir</button>
      {fahrenheit && (
        <div>
          <h1>Temperatura en grados Fahrenheit</h1>
          <h2>{fahrenheit}</h2>
        </div>
      )}
    </div>
  );
};

export default Temp;