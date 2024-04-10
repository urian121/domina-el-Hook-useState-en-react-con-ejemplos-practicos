import { useState } from "react";

function ActivoInactivo() {
  // Usamos useState para establecer el estado inicial a "activo"
  const [estado, setEstado] = useState(true);

  // Función para cambiar el estado entre "activo" e "inactivo"
  const alternarEstado = () => {
    setEstado(!estado); // Cambiado para alternar entre true y false
  };

  return (
    <div>
      <p>El estado actual es: {estado ? "activo" : "inactivo"}</p>{" "}
      {/* Se muestra activo o inactivo dependiendo del estado */}
      <button onClick={alternarEstado}>Alternar Estado</button>
    </div>
  );
}

export default ActivoInactivo;
