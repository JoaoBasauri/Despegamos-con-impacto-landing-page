import Image from "next/image";
import Participantes from './participantes'
import { FaArrowAltCircleDown, FaPen, FaFile } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"

export default function Landing() {
    return (
        <div className="font-sans text-gray-900 bg-[#F4F2F9]">

            {/* Hero Section */}
            <section id="inicio" className="bg-[#F4F2F9] pt-15 pb-15 text-gray-900">
                <div className="flex flex-col md:flex-row justify-center items-center pb-10 gap-8">
                    <h1 className="font-bold text-4xl">Postulaciones</h1>
                    <a href="/despegamos-con-impacto/pdf/Bases del concurso - Despegamos con Impacto.pdf" target="_blank"
                        className="flex items-center gap-2 uppercase bg-[#ffaf0100] border-solid border-2 hover:text-white font-semibold px-8 py-5 rounded-full hover:bg-gray-900 transition">
                        <FaArrowAltCircleDown size={24} />
                        Descarga las bases
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:py-0">
                    <Image
                        src="/despegamos-con-impacto/logo.png"
                        width={500}
                        height={500}
                        alt="Despegamos con impacto"
                        className="mb-6 md:mb-0"
                    />
                    <div className="flex-row items-center justify-center text-justify">
                        <p className="text-m md:text-m max-w-2xl mx-auto mb-8">
                            En un país lleno de organizaciones que transforman vidas todos los días, LATAM Airlines
                            Perú y Fundación OLI se unen para lanzar una iniciativa que reconoce, impulsa y fortalece
                            ese trabajo silencioso pero poderoso que cambia realidades desde lo local.
                        </p>
                        <p className="text-m md:text-m max-w-2xl mx-auto mb-8">
                            Porque creemos en el valor de construir desde el territorio, de sumar desde lo colectivo, y
                            de elevar a quienes hacen que el impacto social vuele alto, nace Despegamos con Impacto,
                            una convocatoria nacional para organizaciones sociales con operaciones en el Perú.
                        </p>
                        <p className="text-m md:text-m max-w-2xl mx-auto mb-8">
                            Sabemos que liderar una organización social no es sencillo: demanda coraje, pasión y
                            también estructura. Por eso, Despegamos con Impacto  busca acompañarte a ti y a tu
                            equipo con las herramientas, el conocimiento y el impulso necesario para que tu impacto no
                            solo crezca, sino que sea sostenible y transformador a largo plazo.
                        </p>
                    </div>
                </div>
                <div className="md:flex grid grid-cols-2 justify-center items-center gap-5 md:mb-5 m-5">
                    <a href="#proposito" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition-aññ">
                        Propósito
                    </a>
                    <a href="#categoria" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Categorias
                    </a>
                    <a href="#premio" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Premios
                    </a>
                    <a href="#participante" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Participantes
                    </a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-80 gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-2 bg-[#FFB001] md:rounded-full rounded-4xl">
                        <a href="https://forms.gle/AUoQS5aRp8C4Dt656"
                            target="_blank"
                            className="flex items-center gap-2 md:my-2 md:ml-5 bg-[#ffaf0100] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaPen size={13} />
                            Inscribete Aquí
                        </a>
                        <a href="/despegamos-con-impacto/pdf/Guía de preguntas.pdf"
                            target="_blank"
                            className="flex items-center gap-2 md:my-2 md:mr-5 bg-[#ffaf0100] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaFile size={13} />
                            Guia de preguntas
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-ce  nter gap-2">
                        <Image
                            src="/despegamos-con-impacto/Latam-logo.svg"
                            width={200}
                            height={200}
                            alt="Despegamos con impacto"
                            className="mb-6 md:mb-0"
                        />
                        <Image
                            src="/despegamos-con-impacto/LOGO_Oli.png"
                            width={200}
                            height={200}
                            alt="Despegamos con impacto"
                            className="mb-6 md:mb-0"
                        />
                    </div>
                </div>
            </section>

            {/* Proposito Section */}
            <section id="proposito" className="py-16 px-6 md:px-20 bg-[#1B0088]">
                <h2 className="text-3xl font-bold mb-6 text-[#ff3e78] ml-0 md:ml-110">Propósito del programa</h2>
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="text-lg text-white leading-relaxed max-w-3xl">
                        Despegamos con Impacto busca fortalecer a ONGs peruanas para que puedan despegar su
                        impacto social, a través del fortalecimiento institucional, brindándoles herramientas clave
                        para:
                    </p>

                    <div className="grid md:grid-cols-3 md:grid-rows-[200_100] justify-center justify-items-center items-start ">
                        <Image
                            src={"/despegamos-con-impacto/TF-icon.svg"}
                            width={400}
                            height={400}
                            alt="Transparencia Financiera"
                            className="mb-6 md:mb-0"
                        />
                        <Image
                            src={"/despegamos-con-impacto/EC-icon.svg"}
                            width={400}
                            height={400}
                            alt="Transparencia Financiera"
                            className="mb-6 md:mb-0 row-start-3 md:row-auto"
                        />
                        <Image
                            src={"/despegamos-con-impacto/ST-icon.svg"}
                            width={400}
                            height={400}
                            alt="Transparencia Financiera"
                            className="mb-6 md:mb-0 row-start-5 md:row-auto"
                        />
                        <p className="text-lg text-white max-w-xs text-wrap mb-2 col-auto">Mejorar su transparencia financiera</p>
                        <p className="text-lg text-white max-w-xs text-wrap mb-2 col-auto">Fortalecer su capacidad de evaluar el impacto de sus acciones</p>
                        <p className="text-lg text-white max-w-xs text-wrap mb-2 col-auto">Incrementar su sostenibilidad a largo plazo</p>
                    </div>

                    <p className="text-lg text-white leading-relaxed max-w-3xl">
                        En esta primera edición, Despegamos con Impacto otorgará un capital semilla, un proceso
                        de formación técnica y un acompañamiento personalizado a través de mentores expertos.
                    </p>
                </div>
            </section >

            {/* Categoria Section */}
            < section id="categoria" className="py-16 px-6 md:px-20 bg-[#F4F2F9]" >
                <h2 className="text-3xl font-bold mb-6 text-[#1B0088] ml-0 md:ml-110 text-left">Conoce nuestras Categorias</h2>

                <div className="grid md:grid-cols-[500_500] md:grid-rows-[50_250_275] justify-center justify-items-center items-start">
                    <h3 className="text-xl font-semibold mb-6 text-[#1B0088] ">Categoria 1: Despegue inicial</h3>
                    <h3 className="text-xl font-semibold mb-6 text-[#1B0088] row-start-4 md:row-auto">Categoria 2: Vuelo en curso</h3>
                    <Image
                        src={"/despegamos-con-impacto/despegue.svg"}
                        width={400}
                        height={400}
                        alt="Transparencia Financiera"
                        className="mb-6 md:mb-0"
                    />
                    <Image
                        src={"/despegamos-con-impacto/vuelo.svg"}
                        width={400}
                        height={400}
                        alt="Transparencia Financiera"
                        className="mb-6 md:mb-0 row-start-5 md:row-auto"
                    />
                    <div className="text-justify">
                        <p className="text-lg text-gray-900 max-w-110 mb-2 ">
                            Dirigida a ONGs en etapa de consolidación que necesitan fortalecer sus capacidades
                            internas para operar con mayor transparencia, eficacia y sostenibilidad.
                        </p>
                        <p className="text-lg text-gray-900 max-w-110 mb-2">
                            Esta categoría está pensada para organizaciones que ya se encuentran en marcha, pero
                            requieren orientación y herramientas para construir una base institucional sólida que les
                            permita sostenerse en el tiempo.
                        </p>
                    </div>
                    <div className="text-justify  ">
                        <p className="text-lg text-gray-900 max-w-110 mb-2 ">
                            Pensada para ONGs con un mayor grado de consolidación que buscan profesionalizar sus
                            procesos o escalar su impacto, especialmente en medición, comunicación y sostenibilidad
                            financiera.
                        </p>
                        <p className="text-lg text-gray-900 max-w-110 mb-2 ">
                            Esta categoría busca acompañar a organizaciones que ya tienen una estructura
                            consolidada, pero desean llevar su gestión y comunicación de impacto a un siguiente nivel.
                        </p>
                    </div>
                </div>


            </section >

            {/* Premio Section */}
            < section id="premio" className="py-16 px-6 md:px-20 bg-[#1B0088] text-justify" >
                <h2 className="text-3xl font-bold mb-6 text-[#ff3e78]">¿Qué puedes ganar? </h2>
                <h3 className="text-xl font-semibold mb-6 text-[#ff3e78]">¡Serán 10 los finalistas!</h3>
                <p className="text-lg text-white max-w-200 mb-8  ">
                    Cinco organizaciones por categoría serán seleccionadas para acceder a un proceso
                    exclusivo de fortalecimiento que incluye:
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-left my-12">
                    <div className="bg-[#35A1F4] text-white p-4 rounded shadow">
                        <p className="font-semibold">Capacitacion especializada</p>
                        <li className="mt-2 ">Transparencia financiera y contable.</li >
                        <li className="mt-2 ">Evaluación de impacto de proyectos sociales.</li >
                        <li className="mt-2 ">Comunicación efectiva para la movilización de recursos </li >
                    </div>
                    <div className="bg-[#233E8B] text-white p-4 rounded shadow">
                        <p className="font-semibold">Mentoria personalizada</p>
                        <p className="mt-2">durante dos meses con profesionales expertos</p>
                    </div>
                    <div className="bg-[#3AB85C] text-white p-4 rounded shadow">
                        <p className="font-semibold">Visibilizacíon de su trabajo e impacto</p>
                        <p className="mt-2">a través de los canales de comunicación de
                            Fundación OLI y LATAM Airlines. </p>
                    </div>
                </div>

                <p className="text-lg text-white max-w-200 mb-8">
                    Además, cada finalista tendrá la oportunidad de presentar su proyecto de fortalecimiento
                    frente a nuestro Comité de Expertos y ser acreedor del premio de su categoría.
                </p>

                <div className="grid md:grid-cols-[600_600] md:grid-rows-[50_300]  justify-items-center justify-center items-center">
                    <h3 className="text-xl font-semibold my-6 text-white ">Categoria 1: Despegue inicial</h3>
                    <h3 className="text-xl font-semibold my-6 text-white row-start-4 md:row-auto">Categoria 2: Vuelo en curso</h3>
                    <div className="text-lg text-white max-w-110 mb-2">
                        <p className="-indent-4"><a className="font-semibold"> - Capital semilla de S/ 15,000</a> para el fortalecimiento institucional o ejecución de un
                            proyecto de mejora organizacional.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Acompañamiento técnico especializado por 3 meses</a> (noviembre 2025 - enero
                            2026) en temas de finanzas e impacto.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Reconocimiento público</a> en evento de cierre y <a className="font-semibold"> certificado oficial.</a></p>
                    </div>
                    <div className="text-lg text-white max-w-110 mb-2">
                        <p className="-indent-4"><a className="font-semibold"> - Capital semilla de S/ 25,000</a> para el fortalecimiento institucional o ejecución de un
                            proyecto de mejora organizacional.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Acompañamiento técnico especializado por 3 meses</a> (noviembre 2025 - enero
                            2026) en temas de finanzas e impacto.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Reconocimiento público</a> en evento de cierre y <a className="font-semibold"> certificado oficial.</a></p>
                    </div>
                </div>
            </section >
            {/* Participantes */}
            < section id="participante" className="py-16 px-6 md:px-20 bg-[#F4F2F9]">
                <Participantes />
            </section >

            <a
                href="#inicio"
                className="fixed bottom-10 right-10 z-50 bg-[#FFB001] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                aria-label="Ir al inicio"
            > <FaChevronUp></FaChevronUp> </a>

            {/* Footer */}
            < footer className="bg-[#F4F2F9] py-6 text-center text-sm text-gray-600" >
                © Todos los derechos reservados 2025. Fundación Oli
            </footer >
        </div >
    );
}