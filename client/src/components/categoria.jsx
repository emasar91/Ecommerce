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
          <Link to ={'/categories/'+cat.nombre}>
            <li key={cat.id}> {cat.nombre} </li>
          </Link> 
          )}
             </div>
    );
  }
