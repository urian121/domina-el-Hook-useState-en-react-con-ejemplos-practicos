import Ejemplo1 from "./components/Ejemplo1";
import Ejemplo2 from "./components/Ejemplo2";
import Ejemplo3 from "./components/Ejemplo3";
import Ejemplo4 from "./components/Ejemplo4";
import Ejemplo5 from "./components/Ejemplo5";
import Ejemplo6 from "./components/Ejemplo6";
import Ejemplo7 from "./components/Ejemplo7";
import Ejemplo8 from "./components/Ejemplo8";
import Ejemplo9 from "./components/Ejemplo9";
import Ejemplo10 from "./components/Ejemplo10";
import Ejemplo11 from "./components/Ejemplo11";

function App() {
  return (
    <div className="container">
      <h1>Domina el Hook useState con Ejemplos Prácticos</h1>
      <div className="row">
        <div className="col-md-6">
          <Ejemplo1 />
        </div>
        <div className="col-md-6">
          <Ejemplo2 />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <Ejemplo3 />
        </div>
        <div className="col-md-6">
          <Ejemplo4 />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <Ejemplo5 />
        </div>
        <div className="col-md-6">
          <Ejemplo6 />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <Ejemplo7 />
        </div>
        <div className="col-md-6">
          <Ejemplo8 />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 border">
          <Ejemplo9 />
        </div>
        <div className="col-md-4">
          <Ejemplo10 />
        </div>
        <div className="col-md-4">
          <Ejemplo11 />
        </div>
      </div>
    </div>
  );
}

export default App;
