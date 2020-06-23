import React from 'react';
import './App.css';
import BarraNavegacion from './components/BarraNavegacion.jsx'
import Catalogo from './components/Catalogo.jsx';
import { Route } from 'react-router-dom';


function App() {

  var catalogo = [
    {
      titulo:"manzana1",
      descripcion:"es una manzana",
      precio:20,
      cantidad: 1,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    },{
      titulo:"manzana2",
      descripcion:"es una manzana",
      precio:20,
      cantidad: 1,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    },{
      titulo:"manzana3",
      descripcion:"es una manzana",
      precio:20,
      cantidad: 1,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    },{
      titulo:"manzana4",
      descripcion:"es una manzana",
      precio:20,
      cantidad: 1,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png"
    }
  ]


  return (
    <div className="App">
      <Route
          path='/'
          render={() => <BarraNavegacion/>}
      />
      
      <Catalogo productos={catalogo}>

      </Catalogo>
     
    </div>
  );
}

export default App;
