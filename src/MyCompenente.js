import react, { Component, useState } from 'react';

//desde Clase
export default class MyCompenente extends Component{
    render(){
        return(
            <>
                <h1> Componente desde Clase </h1>  
                <h2> Componente desde Clase 2 </h2>
            </>
               
        )
    }
}

//desde funcion
export function SegundoComponente(props){
    let { persona, saludo } = props;
    console.log(saludo)
    return(
        <>
            <h2> El nombre es: {persona.nombre} mi profesion es: {persona.profesion}  </h2>
            <button onClick={()=>saludo(persona.nombre)}> Saludar </button>
        </>
    )
}
/*
const [stateSalirEntrar, setStateSalirEntrar] = useState(false);

const SalirEntrar = ()=>{
    setStateSalirEntrar(!stateSalirEntrar);
};

//desde funcion
export const TercerComponente = ()=>{
    return(
        <>
            <h2> Voy a: {stateSalirEntrar? "Entrar":"Salir"}</h2>
            <button onClick={SalirEntrar}> Salir/Entrar</button>
        </>
    )
}*/