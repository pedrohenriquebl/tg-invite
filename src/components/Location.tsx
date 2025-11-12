export default function Location() {
    return (
        <section className="relative flex flex-col items-center justify-center px-6 py-10 bg-linear-to-b from-black to-[#0a0a0a] text-center">
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
                    className="w-full h-full grayscale-30"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
