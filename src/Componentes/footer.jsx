const Footer = () => {
  return (
    <footer className="footer" id="contact" data-aos="fade-up">
      <p>
        © {new Date().getFullYear()} Hooksy - Todos los derechos reservados.
      </p>
      <a
        href="https://wa.me/5491234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        📱 Contactanos por WhatsApp
      </a>
    </footer>
  )
}

export default Footer
