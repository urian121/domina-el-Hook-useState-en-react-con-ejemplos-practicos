import { useState } from "react";

const MostrarMensaje = () => {
  const [mostrar, setMostrar] = useState(false);

  const alternarMostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
      <button onClick={alternarMostrar}>Mostrar/Ocultar mensaje</button>
      {mostrar && <p>¡Este es un mensaje secreto!</p>}
    </div>
  );
};
export default MostrarMensaje;
