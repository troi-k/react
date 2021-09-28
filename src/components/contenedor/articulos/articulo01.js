import React from "react";
import "./articulos.css";

export default function Articulo01({ fecha, titulo, des }){

    //const { fecha, titulo, des  } = articulo;

    return (
        <>
            <h2>{titulo}</h2>
            <h5>{fecha}</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>{des}</p>
        </>
    );
}