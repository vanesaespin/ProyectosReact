import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [consejo, setConsejo] = useState("");

  useEffect(() => {
     //Llamamos a fetchData
    fetchData2();
  }, []);

  //Forma 1: promesa pura --> te dice que lo conviertas a async
  // const fetchData1 = () => {
  //   return fetch("https://api.adviceslip.com/advice")
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));
  // }

  //Forma 2: con promesa dentro de async
  const fetchData2 = async () => { //Función asíncrona que espera a que se resuelva la promesa
    try {
      const url = "https://api.adviceslip.com/advice"; //URL de la API que da consejos
        const response = await fetch(url); //Llamamos a la API y esperamos la respuesta de pasar a la siguiente linea
        const json = await response.json(); //Transformamos la respuesta a json
        setConsejo(json.slip.advice); //La pintamos por consola
        
    } catch (error) {
        console.log("error", error);
    }
};
 
  return (
    <div>
      <h1>Consejo: {consejo}</h1>
       
    </div>
  );
}

export default App;
