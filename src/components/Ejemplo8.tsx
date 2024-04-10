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
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name="nombre" onChange={manejarCambioInput} />
      <br />
      <label htmlFor="profesion">Profesión:</label>
      <input type="text" name="profesion" onChange={manejarCambioInput} />
      <h2>Se ingresó el nombre: {datos.nombre} </h2>
      <h2>Se ingresó la profesión: {datos.profesion} </h2>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MostrarEjemploTexto;
