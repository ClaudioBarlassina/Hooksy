

const Planes = () => {
  return (
    <section className="planes" id="planes" >
      <h2>Elegí el plan que mejor se adapta a tu negocio</h2>
      <div className="plan-cards" >
        <div className="plan"  data-aos="fade-up" data-aos-delay="0">
          <h3>🚀 Básico</h3>
          <p className="precio">$30.000 ARS</p>
          <ul>
            <li>✔ Tienda básica personalizada</li>
            <li>✔ Hasta 10 productos</li>
            <li>✔ Hosting incluido</li>
            <li>✔ Soporte por WhatsApp</li>
          </ul>
          <a href="https://wa.me/5491234567890" className="btn">Elegir este</a>
        </div>

        <div className="plan destacado" data-aos="fade-up" data-aos-delay="250">
          <h3>🔥 Pro</h3>
          <p className="precio">$50.000 ARS</p>
          <ul>
            <li>✔ Todo el plan Básico</li>
            <li>✔ Productos ilimitados</li>
            <li>✔ Integración con Instagram</li>
            <li>✔ Chat con clientes</li>
          </ul>
          <a href="https://wa.me/5491234567890" className="btn">Elegir este</a>
        </div>

        <div className="plan" data-aos="fade-up" data-aos-delay="400">
          <h3>💼 Full</h3>
          <p className="precio">$75.000 ARS</p>
          <ul>
            <li>✔ Todo el plan Pro</li>
            <li>✔ Panel de administración</li>
            <li>✔ Análisis de ventas</li>
            <li>✔ Soporte prioritario</li>
          </ul>
          <a href="https://wa.me/5491234567890" className="btn">Elegir este</a>
        </div>
      </div>
    </section>
  );
};

export default Planes;
