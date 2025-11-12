export default function Hero() {
    return (
        <section className="relative flex flex-col justify-center items-center text-center min-h-[55vh] md:min-h-[65vh] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/background.png"
                    alt="Coursekeeper background"
                    className="w-full h-full object-cover md:scale-105 opacity-90 blur-xs"
                />
            </div>

            <div className="relative z-10 mb-16 md:mb-24">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                    Coursekeeper
                </h1>
            </div>
        </section>
    );
}
