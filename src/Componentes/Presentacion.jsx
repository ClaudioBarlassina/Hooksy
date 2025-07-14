import { useEffect } from 'react'
import { Link } from 'react-scroll'
import AOS from "aos";
import "aos/dist/aos.css"



const Hero = () => {
  useEffect(()=> {
  AOS.init({duration:1000})
  }, [])
  return (
    <section className="hero" data-aos="fade-up" >
      <div className="hero-content">
        <h1>
          ¿Querés vender en línea sin{' '}
          <span className="highlight">complicaciones?</span>
        </h1>
        <p className="sub">
          Desarrollamos tiendas online personalizadas que te ayudan a vender más
          y a gestionar tu negocio fácilmente.
        </p>
        <p className="info">
          En <strong>HOOKSY</strong> creamos tiendas listas para vender,
          rápidas, personalizadas y con soporte real.
        </p>
        <Link to='planes' smooth={true} duration={10000} className='btn'>
          
            Ingresar
         
        </Link>
      </div>
    </section>
  )
}

export default Hero
