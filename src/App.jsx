import '../src/variable.css'
import Navbar from './Componentes/Navbar';
import Beneficios from './Componentes/Beneficios'
import Presentacion from './Componentes/Presentacion'
import Footer from './Componentes/footer'
import Planes from './Componentes/Planes';


function App() {
 
  return (
    <>
      <div >
        <Navbar></Navbar>
        <Presentacion></Presentacion>
        <Beneficios></Beneficios>
        <Planes></Planes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
