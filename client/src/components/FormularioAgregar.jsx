import React from 'react';

export default function FormularioAgregar(){
    
   return (
    <div>
        <h1>Agregar nuevo producto: </h1>
        <form action="endpoint" method="post">

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre"/>
            <br/>
            <label htmlFor="precio">Precio</label>
            <input type="text" name="precio" id="precio" />
            <br/>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="text" name="cantidad" id="cantidad" />
            <br/>
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" name="descripcion" id="descripcion" />
            <br/>
            <label htmlFor="imagen">imagen</label>
            <input type="file" name="imagen" id="imagen"/>
            <br/>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
   )


}