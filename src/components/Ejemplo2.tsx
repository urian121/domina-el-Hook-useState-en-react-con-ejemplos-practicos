import { useState } from "react";

const InputTexto = () => {
  const [texto, setTexto] = useState("");

  // Función para manejar el cambio en el campo de texto
  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      {/* Campo de texto controlado */}
      <input
        type="text"
        className="form-control"
        value={texto}
        onChange={handleChange}
      />
      {/* Mostrar el texto ingresado */}
      <p>Texto ingresado: {texto}</p>
    </div>
  );
};

export default InputTexto;
