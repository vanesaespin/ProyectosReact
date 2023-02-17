import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import SelectorPelicula from "./components/SelectorPelicula";
import TarjetaPelicula from "./components/TarjetaPelicula";


function App() {
 
  const [idSeleccionado, setIdSeleccionado] = useState(false);

  return (
    <div className="App">
      <h1>Datos Api:</h1>
      <h2>Peliculas</h2>
      <hr />
      <Container>
        <Row>
          <Col xs={4}>
            {/* <UsandoUseEffect /> */}
            {<SelectorPelicula setIdSeleccionado={setIdSeleccionado} />}
          </Col>
          <Col md="auto">
            {/* <DatosApi Peli/> */}
            { <TarjetaPelicula peliSeleccionada={idSeleccionado}/> }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
