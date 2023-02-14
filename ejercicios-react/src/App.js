import './App.css';
import Ej1 from './ejercicios/Ej1';
import Ej2 from './ejercicios/Ej2';



function App() {
  

  return (
    <div className="App">
        {/*Ej1: boton para cambiar fondo: versión componente autocontenido */}
        <Ej1></Ej1> 
        {/*Ej2: imagen con opacidad */}
        <Ej2></Ej2>
     
    </div>
  );
}

export default App;
