import { ChevronDown } from "lucide-react"; // Ícone de seta

function Home() {
  return (
    <div>
      {/* Section da logo ocupando a tela toda */}
      <section
        id="home"
        className="bg-[#C5BA9F] min-h-screen flex flex-col items-center justify-center relative"
      >
        {/* Logo */}
        <img
          src="https://ik.imagekit.io/eduardotosta/port_lorena/logotype/4e636393-fa71-4a47-bed3-d0c3bbbe2bd8.jpg?updatedAt=1757956562425"
          alt="Logo Dra. Lorena Tosta"
          className="w-[400px] md:w-[600px] lg:w-[800px] object-contain"
        />

        {/* Seta para rolar até a próxima section */}
        <a
          href="#about"
          className="absolute bottom-6 text-[#5C4633] hover:text-[#87705B] transition duration-300"
        >
          <ChevronDown size={48} className="animate-bounce" />
        </a>
      </section>

      {/* Section de apresentação */}
      <section id="about" className="bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5C4633] mb-4">
              Dra. Lorena Tosta
            </h1>
            <p className="text-[#4B4B4B] text-lg mb-6">
              Sou Cirurgiã-Dentista (CRO/SP 161905), apaixonada por devolver
              sorrisos e autoestima através da odontologia e da harmonização
              facial. Minha missão é unir saúde, estética e bem-estar para
              oferecer aos pacientes tratamentos completos e personalizados
            </p>
            <a
              href="#procedures"
              className="bg-[#87705B] text-white px-6 py-3 rounded-lg hover:bg-[#705841] transition duration-300"
            >
              Saiba Mais
            </a>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://ik.imagekit.io/eduardotosta/port_lorena/perfil/23caa924-08ff-49c6-9749-9449629ef1bd.jpg?updatedAt=1757956461844"
              alt="Dra. Lorena Tosta"
              className="w-90 h-120 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
