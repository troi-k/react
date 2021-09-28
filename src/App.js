import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Sidebar from './components/sidebar/sidebar';
import Contenedor from './components/contenedor/contenedor';
import Pie from './components/pie/pie';

function App() {

  //objecto publicidad header
  let obj = {
    titulo:"My First Bootstrap 4 Page desde app.js",
    descripcion:"Resize this responsive page to see the effect! desde App.js"
  }

  //varible fecha
  var d = new Date(),
    fecha = d.getFullYear();
    console.log(fecha);

  return (
    <>
      <Header 
        titulo={obj.titulo} 
        descripcion={obj.descripcion} 
      />
      <Nav/>
      <div className="container" style={{"marginTop":"30px"}}>
        <div className="row"> 
            <Sidebar/>
            <Contenedor/>
        </div>
      </div>
      <Pie fecha={fecha}/>
    </>
  );
}

export default App;
