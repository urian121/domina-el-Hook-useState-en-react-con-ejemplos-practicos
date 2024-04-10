import { useState } from "react";

const ListaMensajesEntrada = () => {
  const [mensaje, setMensaje] = useState("");
  const [listaMensajes, setListaMensajes] = useState([]);

  const manejarCambioMensaje = (e) => {
    setMensaje(e.target.value);
  };

  const agregarMensaje = () => {
    if (mensaje.trim() !== "") {
      const nuevoMensaje = {
        id: listaMensajes.length + 1,
        mensaje: mensaje.trim(),
      };
      setListaMensajes([...listaMensajes, nuevoMensaje]);
      setMensaje("");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={mensaje}
        placeholder="Ingrese un mensaje"
        onChange={manejarCambioMensaje}
      />
      <button onClick={agregarMensaje}>Agregar Mensaje</button>
      <ol>
        {listaMensajes.map((m) => (
          <li key={m.id}>{m.mensaje}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListaMensajesEntrada;
