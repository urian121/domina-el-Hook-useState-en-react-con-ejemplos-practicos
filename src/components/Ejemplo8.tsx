import { useState } from "react";

const MostrarEjemploTexto = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    profesion: "",
  });

  const manejarCambioInput = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvioFormulario = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    console.log("Datos del formulario:", datos);
  };

  return (
    <form onSubmit={manejarEnvioFormulario} method="POST">
      <label htmlFor="nombre" className="float-start">
        Nombre:
      </label>
      <input
        type="text"
        className="form-control"
        name="nombre"
        onChange={manejarCambioInput}
      />
      <br />
      <label htmlFor="profesion" className="float-start">
        Profesión:
      </label>
      <input
        type="text"
        className="form-control mb-2"
        name="profesion"
        onChange={manejarCambioInput}
      />
      <code>
        <h5>{datos && JSON.stringify(datos)}</h5>
      </code>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MostrarEjemploTexto;
