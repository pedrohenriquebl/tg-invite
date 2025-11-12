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

        {/* Conteúdo do topo */}
        <div className="relative z-10 mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-accent tracking-tight drop-shadow-[0_0_12px_rgba(0,194,255,0.4)] animate-pulseGlow">
            Coursekeeper
          </h1>
        </div>
      </section>

      {/* ===== INFORMAÇÕES ===== */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 md:py-10 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="max-w-3xl">
          <p className="text-lg md:text-2xl mb-6 text-gray-100">
            Apresentação de TCC —{" "}
            <span className="text-accent font-semibold">
              25 de novembro às 21:25
            </span>
          </p>

          <div className="inline-block bg-black/30 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/10 mb-8 shadow-[0_0_20px_rgba(0,194,255,0.1)]">
            <Countdown />
          </div>

          <p className="text-md text-gray-300">
            Pedro Henrique • Júlio Cesar • Antonio Lima
          </p>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-accent drop-shadow-[0_0_6px_rgba(0,194,255,0.4)]">
            Sobre o projeto
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            O <strong>Coursekeeper</strong> é uma plataforma desenvolvida para
            ajudar estudantes a organizarem, acompanharem e concluírem seus
            cursos online de maneira eficiente. Nosso objetivo é unir tecnologia
            e produtividade em uma experiência simples e intuitiva.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-gray-500 bg-black border-t border-gray-800 text-sm">
        © 2025 Coursekeeper — Projeto TCC desenvolvido por Pedro Henrique, Júlio
        Cesar e Antonio Lima.
      </footer>
    </div>
  );
}
