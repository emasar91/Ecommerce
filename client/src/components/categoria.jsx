import React, { useState, useEffect } from 'react';
import './css/Categoria.css'
import { Link } from 'react-router-dom';


export default function Categoria() {

const [input , setInput] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3080/categories')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setInput(response)
            })
            console.log("Categorias Cargadas")
    },[])

    return (
             
      <div className="Categoria">
          {input.map(cat =>
          <Link key={cat.id} to ={'/categories/'+cat.nombre}>
            <li className = "btn btn btn-primary ListaCategoria"  key={cat.id} onClick="location.reload()" > {cat.nombre} </li>
          </Link> 
          )}
             </div>
    );
  }