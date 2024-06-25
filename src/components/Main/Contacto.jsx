const Contacto = () => {
  return (
    <>
      <section class="contacto" id="contacto">
        <h2>Contacto</h2>
        <form action="https://formsubmit.co/diegoponzo@gmail.com" method="POST">
          <div>
            <label for="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              required
            />
          </div>
          <div>
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              placeholder="Ingrese su mensaje"
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section class="contacto-email-telefono">
        <h5>Contacto</h5>
        <i class="bx bx-envelope"></i>
        <a href="mailto:diegoponzo@gmail.com">diegoponzo@gmail.com</a>
        <br />
        <i class="bx bxl-whatsapp"></i>
        <a href="https://api.whatsapp.com/send?phone=5491137868383&text=Quisiera%20informaci%C3%B3n%20sobre%20los%20torneos%20de%20golf!">
          +5491133128902
        </a>
      </section>
    </>
  );
};

export default Contacto;
