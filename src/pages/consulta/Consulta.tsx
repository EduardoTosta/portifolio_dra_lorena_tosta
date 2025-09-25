function Consulta() {
  return (
    <section
      id="consulta"
      style={{
        background:
          "linear-gradient(to right, #BBA770 0%, #543B18 30%, #BBA770 60%, #F2E9C7 80%, #BBA770 100%)",
      }}
      className="relative min-h-screen px-4 sm:px-6 py-12 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        {/* Texto */}
        <div className="md:w-1/2 space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-white via-[#F2E9C7] to-[#BBA770] 
             bg-clip-text text-transparent leading-snug md:leading-normal 
             drop-shadow-lg"
          >
            Sorria com confiança, agende sua consulta!
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            Cada detalhe importa no seu sorriso. Oferecemos um atendimento
            humanizado, com técnicas modernas e resultados que valorizam a sua
            beleza natural.
          </p>

          {/* Botões de contato */}
          <div className="flex gap-6 justify-center md:justify-start mt-6 flex-wrap">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5519991004780"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#BBA770] rounded-full shadow-lg hover:scale-110 transform transition duration-300"
            >
              <img
                src="https://ik.imagekit.io/eduardotosta/port_lorena/assets/whatsapp.png?updatedAt=1758031904912"
                alt="WhatsApp"
                className="w-7 h-7 sm:w-8 sm:h-8"
                style={{ filter: "invert(0)" }}
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dra.lorenatosta?utm_source=ig_web_button_share_sheet&igsh=MWh1dWQwM3htbHpoZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#BBA770] rounded-full shadow-lg hover:scale-110 transform transition duration-300"
            >
              <img
                src="https://ik.imagekit.io/eduardotosta/port_lorena/assets/instagram.png?updatedAt=1758031965517"
                alt="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8"
                style={{ filter: "invert(0)" }}
              />
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://ik.imagekit.io/eduardotosta/port_lorena/perfil/1052d4f2-3cb6-4e7b-ba18-c6417df7c0db.jpg?updatedAt=1757956461686"
            alt="Consulta Odontológica"
            className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Consulta;
