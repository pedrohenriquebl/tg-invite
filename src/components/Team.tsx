export default function Team() {
    return (
        <section className="relative flex flex-col items-center justify-center px-6 py-24 bg-linear-to-b from-gray-950 to-black text-center overflow-hidden">
            <h2 className="text-3xl font-semibold mb-16 text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                Integrantes
            </h2>

            <div className="relative w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                {/* PH */}
                <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
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
                <div className="relative transform -translate-y-4 rotate-2 hover:rotate-0 transition-transform duration-500">
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
    );
}
