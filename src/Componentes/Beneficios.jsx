import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

const Beneficios = () => {

   useEffect(()=> {
    AOS.init({duration:1000})
    }, [])
  return (
    <section className="beneficios"id="Beneficios" data-aos="fade-down">
      <h2>¿Por qué elegir Hooksy?</h2>
      <div className="cards">
        <div className="card">
          <h3>🎯 Tiendas listas para vender</h3>
          <p>
            Entregamos tu tienda funcionando, lista para recibir pedidos desde
            el primer día.
          </p>
        </div>
        <div className="card">
          <h3>⚡ Rápidas y personalizadas</h3>
          <p>
            Diseños modernos, adaptados a tu marca y optimizados para todos los
            dispositivos.
          </p>
        </div>
        <div className="card">
          <h3>🤝 Soporte real</h3>
          <p>
            Te acompañamos antes, durante y después del lanzamiento de tu
            tienda.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Beneficios
