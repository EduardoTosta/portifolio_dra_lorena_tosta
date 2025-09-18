function Procedures() {
  const procedures = [
    {
      title: "Harmonização Facial",
      description: "Toxina botulínica, preenchimento e bioestimuladores.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/harmonizacao.png?updatedAt=1758024274158",
    },
    {
      title: "Restaurações Estéticas",
      description:
        "Tratamentos estéticos e provisórios para recuperar o sorriso.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/restauracoes_esteticas.png?updatedAt=1758024329241",
    },
    {
      title: "Clareamento Dental",
      description: "Deixe seu sorriso mais branco e saudável com clareamento.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/clareamento_dental.png?updatedAt=1758024376968",
    },
    {
      title: "Tratamento Periodontal",
      description: "Cuidados com a saúde da gengiva e prevenção de doenças.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/tratamento_periodontal.png?updatedAt=1758024424679",
    },
    {
      title: "Odontopediatria",
      description: "Atendimento especializado e cuidadoso para crianças.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/odonto_pediatria.png?updatedAt=1758024474492",
    },
    {
      title: "Endodontia",
      description: "Abertura endodôntica e curativos com precisão e segurança.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/endodontia.png?updatedAt=1758024525312",
    },
    {
      title: "Extrações Simples",
      description: "Procedimentos de extração com conforto e segurança.",
      img: "https://ik.imagekit.io/eduardotosta/port_lorena/assets/extracoes.png?updatedAt=1758024614580",
    },
  ];

  return (
    <section
      id="procedures"
      className="bg-[#87705B] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-12 text-center">
          Procedimentos
        </h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {procedures.map((item, index) => (
            <div
              key={index}
              className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Imagem */}
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Texto */}
                <div className="grow px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-[#4A3B2A] group-hover:text-[#705841]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#consulta"
            className="inline-block bg-[#BBA770] text-[#543B18] font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-[#F2E9C7] transition transform duration-300"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}

export default Procedures;
