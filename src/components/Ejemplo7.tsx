import { useState } from "react";

const SelectorDePais = () => {
  // Definimos un estado para almacenar el país seleccionado
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  // Lista de países de América
  const countries = [
    "Selecciona un país",
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "México",
    "Perú",
    "Estados Unidos",
    "Canadá",
    "Venezuela",
  ];

  // Manejador de eventos para actualizar el país seleccionado
  const handleCountryChange = (event) => {
    setPaisSeleccionado(event.target.value);
  };

  return (
    <div>
      <h2>Selecciona un país de América:</h2>
      <select
        className="form-select"
        value={paisSeleccionado}
        onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      {paisSeleccionado && (
        <div>
          <h3>
            País seleccionado: <strong>{paisSeleccionado}</strong>
          </h3>
        </div>
      )}
    </div>
  );
};

export default SelectorDePais;
