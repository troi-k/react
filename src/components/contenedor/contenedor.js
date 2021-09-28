import React, {useState} from "react";
import Articulo01 from "./articulos/articulo01";

export default function Contenedor(){
    //primero se pasa la variable y despues la funcion que va a 
    //modificar el estado de la varible
const [ articulos, setArticulos ] = useState([
        {id:1, fecha: "Title description, Dec 7, 2017" , titulo:"TITLE HEADING 1", des:"Sunt in culpa qui officia deserunt mollit anim id est "},
        {id:2, fecha: "Title description, Dec 7, 2017" , titulo:"TITLE HEADING 2", des:"Sunt in culpa qui officia deserunt mollit anim id est "},
        {id:3, fecha: "Title description, Dec 7, 2017" , titulo:"TITLE HEADING 3", des:"Sunt in culpa qui officia deserunt mollit anim id est "}    
]);

    return (
        <div className="col-sm-8">
            {
                articulos.map( articulo =>{
                   return <> <Articulo01
                                key={articulo.id}
                                fecha={articulo.fecha}
                                titulo={articulo.titulo}
                                des={articulo.des}
                            />
                    </>
                })
            }
        </div>
    );
}