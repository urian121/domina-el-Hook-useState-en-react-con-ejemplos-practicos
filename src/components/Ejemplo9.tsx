import { useState } from "react";

const ComponenteUpdate = () => {
  // Estado para el objeto
  const [state, setState] = useState({ name: "John", age: 30 });

  const updateName = () => {
    //tomando una copia de el state actual (...state)
    setState({ ...state, name: "Jane" });
  };

  const updateAge = () => {
    setState((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  };

  return (
    <div>
      <h2>Actualizar Objeto:</h2>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <button onClick={updateName}>Actualizar Nombre</button>
      <button onClick={updateAge}>Actualizar Edad</button>
    </div>
  );
};

export default ComponenteUpdate;
