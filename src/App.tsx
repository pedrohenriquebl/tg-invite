import Countdown from "./components/Countdown";

export default function App() {
  return (
    <div className="bg-black text-white">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-[55vh] md:min-h-[65vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/background.png"
            alt="Coursekeeper background"
            className="w-full h-full object-cover md:scale-105 opacity-90 blur-[4px]"
          />
        </div>

        <div className="relative z-10 mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
            Coursekeeper
          </h1>
        </div>
      </section>

      {/* ===== INFORMAÇÕES ===== */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 md:py-16 bg-gradient-to-b from-black to-[#111] text-center">
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Gostaríamos de convidá-los para nossa{" "}
            <span className="font-semibold text-gray-100">
              apresentação do nosso Trabalho de Graduação
            </span>
          </p>

          <p className="text-lg md:text-2xl mb-6 text-gray-200">
            Apresentação —{" "}
            <span className="font-semibold text-gray-100">
              25 de novembro às 21:25
            </span>
          </p>

          <div className="inline-block bg-neutral-900/50 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.05)] mb-8">
            <Countdown />
          </div>

          <p className="text-sm uppercase tracking-widest text-gray-500">
            Contagem regressiva para o grande momento
          </p>
        </div>
      </section>

      {/* ===== INTEGRANTES ===== */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-gray-950 to-black text-center overflow-hidden">
        <h2 className="text-3xl font-semibold mb-16 text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          Integrantes
        </h2>

        <div className="relative w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {/* PH */}
          <div className="relative transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
              <img
                src="/ph.jpeg"
                alt="Pedro Henrique"
                className="w-64 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="mt-3 text-gray-300 font-medium">Pedro Henrique</p>
          </div>

          {/* Júlio */}
          <div className="relative transform translate-y-6 rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
              <img
                src="/julio.jpeg"
                alt="Júlio Cesar"
                className="w-64 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="mt-3 text-gray-300 font-medium">Júlio Cesar</p>
          </div>

          {/* Antonio */}
          <div className="relative transform -translate-y-4 rotate-[2deg] hover:rotate-0 transition-transform duration-500">
            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
              <img
                src="/junior.jpeg"
                alt="Antonio Lima"
                className="w-64 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="mt-3 text-gray-300 font-medium">Antonio Lima</p>
          </div>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section className="flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-black via-gray-900 to-black text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
            Sobre o projeto
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            O <strong>Coursekeeper</strong> é um sistema que tem como objetivo facilitar o acesso
            do usuário à suas informações de estudo, de forma rápida e prática, para que ele tenha o controle de
            seus estudos
          </p>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section className="relative flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-black to-[#0a0a0a] text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]">
          Localização
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Rua Dr. João Vieira de Camargo, 104 — Itapetininga/SP — Brasil
        </p>

        <div className="w-full max-w-4xl h-80 border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.05)]">
          <iframe
            title="Localização Coursekeeper"
            src="https://www.google.com/maps?q=Rua%20Dr.%20Jo%C3%A3o%20Vieira%20de%20Camargo%2C%20104%20-%20Itapetininga%2FSP%2C%20Brasil&output=embed"
            className="w-full h-full grayscale-[30%]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-gray-600 bg-black border-t border-gray-800 text-sm">
        © 2025 Coursekeeper — Projeto TG desenvolvido por Pedro Henrique, Júlio
        Cesar e Antonio Lima.
      </footer>
    </div>
  );
}
