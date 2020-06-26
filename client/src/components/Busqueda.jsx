import React, { useState } from "react";
import './css/Busqueda.css'

export default function Busqueda ({buscar}){
    const [producto, setProducto] = useState("");

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            if (producto!== ""){
                buscar(producto)
            }

        }}>

            <input className='busqueda'
            type='text'
            placeholder = '¿Qué estás buscando?'
            onChange ={ e=> setProducto(e.target.value)}
            value={producto}
            >
            </input>

            <button className='boton' type="search" name="Buscar" value="Buscar"> &#128269;</button>

        </form>
    )

}