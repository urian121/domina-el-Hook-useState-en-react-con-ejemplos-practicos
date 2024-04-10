import { useState } from "react";

export default function CambiarColor() {
  const [color, setColor] = useState("blue");

  const cambiarColor = () => {
    const nuevoColor = color === "blue" ? "red" : "blue";
    setColor(nuevoColor);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
}
