import React from "react";

export default function Pie( { fecha } ){
    return(
        <div className="jumbotron text-center" style={{"marginBottom": "0px" }}>
            <p>Todos los Derechos Reservados © {fecha} </p>
        </div>
    );
}