import Countdown from "./Countdown";

export default function Info() {
    return (
        <section className="relative z-10 flex flex-col items-center justify-center px-6 md:py-16 bg-linear-to-b from-black to-[#111] text-center">
            <div className="max-w-3xl">
                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                    Gostaríamos de convidá-los para nossa{' '}
                    <span className="font-semibold text-gray-100">
                        apresentação do nosso Trabalho de Graduação
                    </span>
                </p>

                <p className="text-lg md:text-2xl mb-6 text-gray-200">
                    Apresentação —{' '}
                    <span className="font-semibold text-gray-100">25 de novembro às 21:25</span>
                </p>

                <div className="inline-block bg-neutral-900/50 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.05)] mb-8">
                    <Countdown />
                </div>

                <p className="text-sm uppercase tracking-widest text-gray-500">
                    Contagem regressiva para o grande momento
                </p>
            </div>
        </section>
    );
}
