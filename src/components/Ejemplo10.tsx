import { useState } from "react";

const ComponenteUpdate = () => {
  // Estado para el array
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addItem = () => {
    // Obtener el último elemento del array
    const lastItem = array.length > 0 ? array[array.length - 1] : 0;
    // Verificar si el último elemento es un número antes de sumarle 1
    const nextItem = typeof lastItem === "number" ? lastItem + 1 : 1;
    // Agregar al array el siguiente número consecutivo
    setArray([...array, nextItem]);
  };

  const removeItem = () => {
    setArray(array.slice(0, array.length - 1));
  };

  return (
    <div>
      <h2>Agregar/Eliminar elementos en Array:</h2>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Agregar Elemento</button>
      <button onClick={removeItem}>Eliminar Elemento</button>
    </div>
  );
};

export default ComponenteUpdate;
