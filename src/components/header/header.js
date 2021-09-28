import React from "react";

export default function Header({titulo,descripcion}){
    return (
        <div className="jumbotron text-center" style={{"marginBottom":0}}>
            <h1>{titulo}</h1>
            <p>{descripcion}</p> 
        </div>
    );
}