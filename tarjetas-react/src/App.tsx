import './App.css'
import TarjetaComponent from './Componentes/TarjetaComponent';
import { Persona } from './Modelos/Persona';





function App() {


  const detallePersona :Persona={
    nombre: 'Aracely',
    ocupacion:'Doctora',
    pais:'Nicaragua'
  };


  let listaPersonas : Persona[] =[];

  listaPersonas.push(detallePersona);

  listaPersonas.push({
    nombre: 'Carlos',
    ocupacion:'Veterinario',
    pais:'España'

  },
  {
    nombre: 'Karla',
    ocupacion:'Cajera',
    pais:'Honduras'
  })


  return (
    <>
      
    
      {
        listaPersonas.map((item,index) =>(

          <TarjetaComponent  key={index} nombre={item.nombre}  ocupacion={item.ocupacion} pais={item.pais} ></TarjetaComponent>
        ))
      
      
      }
      

    </>
  )
}

export default App