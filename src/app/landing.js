import Image from "next/image";
import Participantes from './participantes'
import { FaArrowAltCircleDown, FaPen, FaFile } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter, FaYoutube } from "react-icons/fa6"

export default function Landing() {
    return (
        <div className="font-[Open_sans] text-gray-900 bg-[#F4F2F9] min-w-full">

            {/* Hero Section */}
            <section id="inicio" className="bg-[#F4F2F9] pt-15 pb-10 text-gray-900 overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-around items-center -mb-5   md:mb-10 gap-5 md:gap-1">
                    <div className="flex flex-col order-2 md:flex-row md:justify-center items-center gap-1 md:gap-8">
                        <h1 className="font-bold text-2xl md:text-4xl">Concurso</h1>
                        <a
                            href="/despegamos-con-impacto/pdf/Bases del concurso - Despegamos con Impacto.pdf"
                            target="_blank"
                            className="flex items-center gap-1 md:gap-2 uppercase bg-[#ffaf0100] border-2 hover:text-white font-semibold px-5 py-3 md:px-8 md:py-5 rounded-full hover:bg-gray-900 transition"
                        >
                            <FaArrowAltCircleDown className="text-lg md:text-2xl" />
                            <span className="text-sm md:text-base">Descarga las bases</span>
                        </a>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap order-1 md:order-2 items-center md:gap-2">
                        <a
                            href="https://www.latamairlines.com/pe/es"
                            target="_blank"
                        >
                            <Image
                                src="/despegamos-con-impacto/Latam-logo.svg"
                                width={200}
                                height={200}
                                alt="Despegamos con impacto"
                                className="mb-6 md:mb-0"
                            />
                        </a>
                        <a
                            href="https://olifoundation.org/"
                            target="_blank"
                        >
                            <Image
                                src="/despegamos-con-impacto/LOGO_Oli.png"
                                width={200}
                                height={200}
                                alt="Despegamos con impacto"
                                className="mb-6 md:mb-0"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:py-0">
                    <Image
                        src="/despegamos-con-impacto/logo.png"
                        width={500}
                        height={500}
                        alt="Despegamos con impacto"
                        className="-mb-10 md:mb-0"
                    />
                    <div className="flex-row items-center justify-center text-left">
                        <p className="text-m md:text-m max-w-2xl mx-auto">
                            LATAM Airlines Perú y Fundación OLI lanzan Despegamos con Impacto, una convocatoria
                            nacional que reconoce y fortalece el trabajo de organizaciones sociales en el Perú.
                            Buscamos impulsar su crecimiento sostenible con herramientas, conocimiento y
                            acompañamiento para que su impacto llegue más lejos.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-around md:mx-auto m-5 md:mb-5 items-center text-center gap-5 md:gap-10 max-w-200">
                    <a href="#categoria" className="bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Categorías
                    </a>
                    <a href="#participante" className="bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Participantes
                    </a>
                    <a href="#premio" className="bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Premios
                    </a>
                    <a href="#mentor" className="bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Mentores
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-around md:mx-auto m-5 md:mb-5 items-center text-center gap-5 md:gap-10 max-w-148">
                    <a href="#postulacion" className="inline-block bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Postulación
                    </a>
                    <a href="#cronograma" className="bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Cronograma
                    </a>
                    <a href="#faq" className="col-span-2 md:col-span-1 mx-25 md:mx-0 bg-[#290087] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        FAQs
                    </a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-80 gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:rounded-full rounded-4xl">
                        <a href="https://forms.gle/AUoQS5aRp8C4Dt656"
                            target="_blank"
                            className="flex items-center justify-center min-w-60 gap-2 md:my-2 md:ml-5 bg-[#FFB001] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaPen size={13} />
                            Postula Aquí
                        </a>
                        <a href="/despegamos-con-impacto/pdf/Guía de preguntas.pdf"
                            target="_blank"
                            className="flex items-center justify-center min-w-60 gap-2 md:my-2 md:mr-5 bg-[#FFB001] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaFile size={13} />
                            Guía de preguntas
                        </a>
                    </div>
                </div>
            </section>

            {/* Proposito Section */}
            <section id="proposito" className="py-16 px-6 md:px-20 bg-[#290087] text-left">
                <div className="flex flex-col justify-center items-center mb-5">
                    <h2 className="text-5xl justify-start md:min-w-6xl font-bold mb-6 text-[#ff3e78]">Nuestro Propósito</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <p className="text-xl text-white leading-relaxed max-w-6xl">
                        Sabemos que liderar una organización social no es sencillo: demanda coraje, pasión y también
                        estructura. Por eso, Despegamos con Impacto  busca acompañarte a ti y a tu equipo con las
                        herramientas, el conocimiento y el impulso necesario para que tu impacto no solo crezca, sino que sea
                        sostenible y transformador a largo plazo.
                    </p>
                    <p className="text-xl text-white leading-relaxed max-w-6xl">
                        Despegamos con Impacto nace para fortalecer ONGs peruanas para que puedan despegar su impacto
                        social, a través del fortalecimiento institucional, brindándoles herramientas clave para:
                    </p>

                    <div className="bg-[#1B0088] grid md:grid-cols-3 md:grid-rows-[200_100] justify-center justify-items-center items-start ">
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
                </div>
            </section >

            {/* Categoria Section */}
            < section id="categoria" className="flex flex-col justify-center py-16 px-6 md:px-20 bg-[#F4F2F9]" >
                <h2 className="text-5xl font-bold mb-6 text-[#290087] text-center">Conoce nuestras Categorías</h2>

                <div className="grid md:grid-cols-[500_500] md:grid-rows-[50_250_275] justify-center justify-items-center items-start">
                    <h3 className="text-2xl font-semibold mb-6 text-[#290087] ">Categoría 1: Despegue inicial</h3>
                    <h3 className="text-2xl font-semibold mb-6 text-[#290087] row-start-4 md:row-auto">Categoría 2: Vuelo en curso</h3>
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
                    <div className="text-center">
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
                    <div className="text-center">
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
            < section id="premio" className="py-16 px-6 md:px-20 bg-[#290087] text-left" >
                <h2 className="text-5xl font-semibold mb-6 text-[#ff3e78]">¡Serán 10 los finalistas y 2 ganadores!</h2>
                <p className="text-2xl text-white max-w-full mb-8  ">
                    Cinco organizaciones por categoría serán seleccionadas para acceder a un proceso
                    exclusivo de fortalecimiento que incluye:
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-left my-12 text-xl">
                    <div className="flex flex-col bg-[#35A1F4] text-white p-4 rounded shadow justify-items-center">
                        <p className="font-semibold mt-auto">Capacitación especializada</p>
                        <li className="mt-2 ">Transparencia financiera y contable.</li >
                        <li className="mt-2 ">Evaluación de impacto de proyectos sociales.</li >
                        <li className="mt-2 mb-auto">Comunicación efectiva para la movilización de recursos </li >
                    </div>
                    <div className="flex flex-col bg-[#FFFFFF] text-[#290087] p-4 rounded shadow justify-items-center">
                        <p className="font-semibold mt-auto">Mentoría personalizada</p>
                        <p className="mt-2 mb-auto">Durante dos meses con profesionales expertos</p>
                    </div>
                    <div className="flex flex-col bg-[#3AB85C] text-white p-4 rounded shadow justify-items-center">
                        <p className="font-semibold mt-auto">Visibilización de su trabajo e impacto</p>
                        <p className="mt-2 mb-auto">A través de los canales de comunicación de
                            Fundación OLI y LATAM Airlines. </p>
                    </div>
                </div>

                <p className="text-2xl text-white max-w-full mb-8">
                    Además, cada finalista tendrá la oportunidad de presentar su proyecto de fortalecimiento
                    frente a nuestro Comité de Expertos y ser acreedor del premio de su categoría.
                </p>

                <div className="grid md:grid-cols-2 md:grid-rows-[50_300]  justify-items-center justify-center items-center">
                    <h3 className="text-2xl font-semibold my-6 text-white ">Categoría 1: Despegue inicial</h3>
                    <h3 className="text-2xl font-semibold my-6 text-white row-start-4 md:row-auto">Categoría 2: Vuelo en curso</h3>
                    <ul className="text-xl text-white max-w-150 mb-2 list-disc">
                        <li><a className="font-semibold">Capital semilla de S/ 15,000</a> para el fortalecimiento institucional o ejecución de un
                            proyecto de mejora organizacional.</li>
                        <li><a className="font-semibold">Acompañamiento técnico especializado por 3 meses</a> (noviembre 2025 - enero
                            2026) en temas de finanzas e impacto.</li>
                        <li><a className="font-semibold">Reconocimiento público</a> en evento de cierre y <a className="font-semibold"> certificado oficial.</a></li>
                    </ul>
                    <ul className="text-xl text-white max-w-150 mb-2 row-start-5 md:row-auto list-disc">
                        <li><a className="font-semibold">Capital semilla de S/ 25,000</a> para el fortalecimiento institucional o ejecución de un
                            proyecto de mejora organizacional.</li>
                        <li><a className="font-semibold">Acompañamiento técnico especializado por 3 meses</a> (noviembre 2025 - enero
                            2026) en temas de finanzas e impacto.</li>
                        <li><a className="font-semibold">Reconocimiento público</a> en evento de cierre y <a className="font-semibold"> certificado oficial.</a></li>
                    </ul>
                </div>
            </section >
            {/* Participantes Section*/}
            < section id="participante" className="py-16 px-6 md:px-20 bg-[#F4F2F9]">
                <Participantes />
            </section >

            {/* Postulacion Section*/}
            <section id="postulacion" className="py-16 px-6 md:-mt-16 md:px-20 bg-[#290087] text-left">
                <h2 className="text-5xl font-bold mb-8 text-[#ff3e78] text-left md:text-left">Conoce nuestro proceso de postulación</h2>
                <div className="md:grid grid-cols-2 grid-rows-[200_200_200] text-white gap-5 gap-x-15 mx-5">
                    <div>
                        <h3 className="font-bold text-2xl mt-5 bg-[#35A1F4] rounded-2xl px-8 -mx-8">Paso 1</h3>
                        <p className="text-xl">Reflexiona junto a tu equipo sobre los principales desafíos institucionales que enfrentan
                            actualmente y que quisieran fortalecer a través de esta beca. </p>
                    </div>
                    <div className="md:-mt-10 row-start-2">
                        <h3 className="font-bold text-2xl mt-5 bg-[#FFFFFF] rounded-2xl px-8 -mx-8 text-[#290087]">Paso 2</h3>
                        <p className="text-xl">Cuéntanos sobre tu organización, sus proyectos y el reto institucional identificado. </p>
                        <div className="flex flex-col mx-auto md:ml-5">
                            <h4 className="text-xl font-semibold mt-5">Importante:</h4>
                            <p className="text-lg">Te recomendamos descargar previamente la Guía de Preguntas del
                                Formulario, ya que el sistema no guarda el avance.</p>
                        </div>
                    </div>
                    <div className="row-start-3">
                        <h3 className="font-bold text-2xl mt-5 bg-[#3AB85C] rounded-2xl px-8 -mx-8">Paso 3</h3>
                        <p className="text-xl">Una vez completado el formulario, recibirás un correo de confirmación en un plazo de 24 horas</p>
                        <div className="flex flex-col mx-auto md:ml-5">
                            <h4 className="font-bold text-xl mt-5">Nota: </h4>
                            <p className="text-lg">Todas las organizaciones postulantes pasarán automáticamente a formar parte de la Red
                                OLI, sin necesidad de realizar el proceso de postulación adicional.</p>
                        </div>
                    </div>
                    <div className="flex flex-col 2xl:flex-row justify-center items-center gap-2 mt-5">
                        <a href="https://forms.gle/AUoQS5aRp8C4Dt656"
                            target="_blank"
                            className="flex justify-center items-center gap-2 lg:min-w-80 min-w-60 md:my-2 bg-[#FFB001] text-[#FFFFFF] font-semibold px-18 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaPen size={13} />
                            Postula Aquí
                        </a>
                        <a href="/despegamos-con-impacto/pdf/Guía de preguntas.pdf"
                            target="_blank"
                            className="flex justify-center items-center gap-2 lg:min-w-80 min-w-60 md:my-2 bg-[#FFB001] text-[#FFFFFF] font-semibold px-18 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                            <FaFile size={13} />
                            Guía de preguntas
                        </a>
                    </div>
                    <div className="flex flex-col mx-auto gap-2">
                        <h3 className="font-bold text-3xl mt-5 md:-mt-5">Criterios de evaluación</h3>
                        <div className="-indent-7 ml-5 md:ml-15 text-2xl text-left">
                            <li>Criterio 1: Capacidad de gestión y sostenibilidad </li>
                            <li>Criterio 2: Claridad de misión y objetivos de la ONG </li>
                            <li>Criterio 3: Potencial de impacto social </li>
                            <li>Criterio 4: Necesidad y justificación del fortalecimiento </li>
                            <li>Criterio 5: Compromiso y apertura al fortalecimiento</li>
                        </div>
                    </div>
                </div>

            </section>

            {/*Mentor Section*/}
            <section id="mentor" className="py-16 px-6 md:px-20 bg-[#F4F2F9] text-left">
                <div className="flex flex-col justify-center items-center mb-5">
                    <h2 className="text-5xl md:min-w-5xl font-bold mb-6 text-[#290087] text-left">¿Deseas ser Mentor?</h2>
                </div>
                <div className="flex flex-col justify-center items-center mb-5">
                    <p className="justify-center text-xl text-gray-900 max-w-5xl mb-5">Los mentores son los responsables de acompañar de manera estratégica a una
                        organización finalista en la identificación, diseño y puesta en marcha de un proyecto de
                        fortalecimiento institucional, brindando guía técnica, perspectiva externa y soporte en la
                        toma de decisiones clave durante el proceso de acompañamiento.</p>
                    <p className="justify-center text-xl text-gray-900 max-w-5xl mb-5">Nuestros mentores de impacto acompañarán a nuestros finalistas en la preparación del proyecto de
                        fortalecimiento institucional que presentarán en la Evaluación Final. Además, ayudarán a nuestros finalistas a
                        definir una hoja de ruta básica para la implementación de dicho proyecto e identificar sus desafíos internos y
                        posibles caminos de mejora.</p>
                </div>
                <div className="md:grid grid-cols-2 grid-rows-[50_auto] justify-center items-start md:mx-50">
                    <div className="row-start-1 text-[#FF3E78] font-semibold text-4xl mb-10 md:mr-10">
                        <h3 className="text-center">¿A quiénes buscamos?</h3>
                    </div>
                    <div className="flex flex-col gap-3 row-start-2 mb-5 md:mr-10 text-gray-900 text-xl">
                        <li>Formación en administración, gestión social, economía, políticas públicas, psicología
                            organizacional u afines</li>
                        <li>Posgrado o especialización en gestión de proyectos sociales, innovación o fortalecimiento
                            institucional.</li>
                        <li> Al menos 2 años acompañando procesos de fortalecimiento organizacional o planificación
                            estratégica.</li>
                        <li> Se valora experiencia en mentoría o facilitación participativa (no excluyente).</li>
                    </div>
                    <div className="row-start-1 text-[#FF3E78] font-semibold text-4xl  mb-10 md:mr-10">
                        <h3 className="text-center">Beneficios</h3>
                    </div>
                    <div className="row-start-2 flex flex-col gap-3 md:mr-10 text-gray-900 text-xl">
                        <li> Acompañamiento directo al fortalecimiento de
                            una organización sociales.</li>
                        <li> Diseño de soluciones estratégicas para el
                            desarrollo del tercer sector.</li>
                        <li>Acceso a la Comunidad OLI y conexión con
                            líderes, mentores y aliados</li>
                        <li> Certificado oficial y reconocimiento público del
                            programa.</li>
                        <li>Visibilización profesional en canales de
                            Fundación OLI y LATAM.</li>
                        <li> Participación en una iniciativa respaldada por
                            marcas con compromiso social.</li>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center items-center -mb-5 my-10 md:mb-10 gap-1 md:gap-8">
                    <h1 className="font-bold text-[#290087] text-1xl md:text-4xl"> Postula a nuestro grupo de mentores:</h1>
                    <a href="https://forms.gle/kmoM871LEHV1pmBq9"
                        target="_blank"
                        className="flex items-center text-2xl gap-2 md:my-2 md:ml-5 bg-[#FFB001] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition">
                        <FaPen size={24} />
                        Postula Aquí
                    </a>
                </div>
            </section>

            {/*Cronograma section */}
            <section id="cronograma" className="py-16 px-6 md:px-20 bg-[#290087] text-left">
                <div className="flex flex-col justify-center items-center mb-5">
                    <h2 className="text-5xl justify-start md:min-w-5xl font-bold text-[#ff3e78]">Etapas del concurso</h2>
                </div>
                <div className="flex overflow-x-auto p-4">
                    <div className="inline-block min-w-5xl align-middle rounded-xl border-2 border-white overflow-hidden mx-auto">
                        <table className="min-w-full text-sm md:text-base bg-[#F4F2F9] text-left">
                            <thead className="bg-[#FF3E78] text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Actividad</th>
                                    <th className="py-3 px-4 text-left">Fecha inicio</th>
                                    <th className="py-3 px-4 text-left">Fecha término</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#1B0088]">

                                {/* Proceso de convocatoria */}
                                <tr className="bg-[#3E0078] text-white">
                                    <td colSpan="4" className="py-2 px-4 font-semibold italic">Proceso de convocatoria</td>
                                </tr>
                                {[
                                    ['Lanzamiento del concurso', '8 de junio', '-'],
                                    ['Postulaciones de organizaciones', '8 de junio', '19 de julio'],
                                    ['Postulación de mentores', '8 de junio', '19 de julio'],
                                    ['Evaluación de postulaciones', '20 de julio', '10 de agosto'],
                                    ['Publicación de finalistas y mentores', '13 de agosto', '13 de agosto'],
                                ].map((row, i) => (
                                    <tr key={`convocatoria-${i}`} className="border-t border-black">
                                        {row.map((cell, j) => (
                                            <td key={j} className="py-2 px-4">{cell}</td>
                                        ))}
                                    </tr>
                                ))}

                                {/* Capacitación y acompañamiento */}
                                <tr className="bg-[#3E0078] text-white">
                                    <td colSpan="4" className="py-2 px-4 font-semibold italic">
                                        Capacitación y acompañamiento (mentores + finalistas)
                                    </td>
                                </tr>
                                {[
                                    ['Kick off mentores', '18 de agosto', '24 de agosto'],
                                    ['Bienvenida finalistas', '18 de agosto', '24 de agosto'],
                                    ['Sesión Módulo 1', '25 de agosto', '31 de agosto'],
                                    ['Semana de mentorías 1', '1 de septiembre', '7 de septiembre'],
                                    ['Sesión Módulo 2', '8 de septiembre', '14 de septiembre'],
                                    ['Semana de mentorías 2', '15 de septiembre', '21 de septiembre'],
                                    ['Sesión Módulo 3', '22 de septiembre', '28 de septiembre'],
                                    ['Semana de mentoría 3', '29 de septiembre', '5 de octubre'],
                                    ['Semana de mentoría 4', '6 de octubre', '12 de octubre'],
                                    ['Semana de mentoría 5', '13 de octubre', '17 de octubre'],
                                ].map((row, i) => (
                                    <tr key={`capacitacion-${i}`} className="border-t border-black">
                                        {row.map((cell, j) => (
                                            <td key={j} className="py-2 px-4">{cell}</td>
                                        ))}
                                    </tr>
                                ))}

                                {/* Selección de ganadores */}
                                <tr className="bg-[#3E0078] text-white">
                                    <td colSpan="4" className="py-2 px-4 font-semibold italic">Selección de ganadores</td>
                                </tr>
                                {[
                                    ['Presentación de proyectos', 'Tercera semana de Octubre', '-'],
                                    ['Ceremonia de premiación', 'Última semana de octubre', '-'],
                                ].map((row, i) => (
                                    <tr key={`ganadores-${i}`} className="border-t border-black">
                                        {row.map((cell, j) => (
                                            <td key={j} className="py-2 px-4">{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            {/*FAQ section */}
            <section id="faq" className="py-8 px-6 md:px-20 bg-[#F4F2F9] text-left">
                <div className="flex flex-col md:flex-row md:justify-center items-center -mb-5 gap-5 md:gap-8 text-left">
                    <h1 className="text-3xl font-bold text-[#290087] ml-0  text-left">Encuentra nuestras Preguntas Frecuentes (FAQs) aquí: </h1>
                    <a
                        href="/despegamos-con-impacto/pdf/faq.pdf"
                        target="_blank"
                        className="flex justify-center items-center gap-2 min-w-80 md:my-2 md:mr-5 bg-[#FFB001] text-[#FFFFFF] font-semibold px-18 py-3 rounded-full hover:bg-[#233E8B] hover:text-white transition "
                    >
                        <span className="text-sm md:text-base">FAQ</span>
                    </a>
                </div>
            </section>

            <a
                href="#inicio"
                className="fixed bottom-10 right-5 md:right-10 z-50 bg-[#FFB001] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                aria-label="Ir al inicio"
            > <FaChevronUp></FaChevronUp> </a>

            {/* Footer */}
            < footer className="bg-[#F4F2F9] flex flex-col mt-5 md:justify-between items-center text-sm text-gray-600 gap-5" >
                <div className="flex flex-col md:flex-row justify-center font-extrabold text-xl gap-5 md:gap-110">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-stretch order-2">
                            <div className="flex flex-col justify-center items-center gap-2 min-w-80 ">
                                <h3 className="text-2xl font-semibold text-black"> Fundacion OLI</h3>
                                <div className="flex flex-row gap-5 mb-5">
                                    <a
                                        href="https://www.facebook.com/FundacionOLI"
                                        target="_blank"
                                        className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                    > <FaFacebookF size={24} style={{ color: "#F4F2F9" }} /></a>
                                    <a
                                        href="https://www.instagram.com/fundacionoli/"
                                        target="_blank"
                                        className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                    > <FaInstagram size={24} style={{ color: "#F4F2F9" }} /></a>
                                    <a
                                        href="https://www.linkedin.com/company/fundación-oli/"
                                        target="_blank"
                                        className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                    > <FaLinkedinIn size={24} style={{ color: "#F4F2F9" }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 min-w-80 order-1">
                            <h3 className="text-2xl font-semibold text-black"> LATAM Airlines</h3>
                            <div className="flex flex-row gap-5 mb-5">
                                <a
                                    href="https://www.facebook.com/LATAMPeru/"
                                    target="_blank"
                                    className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                > <FaFacebookF size={24} style={{ color: "#F4F2F9" }} /></a>
                                <a
                                    href="https://x.com/LATAM_PER"
                                    target="_blank"
                                    className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                > <FaXTwitter size={24} style={{ color: "#F4F2F9" }} /></a>
                                <a
                                    href="https://www.youtube.com/user/lanairlines"
                                    target="_blank"
                                    className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                > <FaYoutube size={24} style={{ color: "#F4F2F9" }} /></a>
                                <a
                                    href="https://www.instagram.com/latamairlines/"
                                    target="_blank"
                                    className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                > <FaInstagram size={24} style={{ color: "#F4F2F9" }} /></a>
                                <a
                                    href="https://www.linkedin.com/company/latam_airlines/"
                                    target="_blank"
                                    className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                                > <FaLinkedinIn size={24} style={{ color: "#F4F2F9" }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center md:gap-2">
                        <a
                            href="https://www.latamairlines.com/pe/es"
                            target="_blank"

                        >
                            <Image
                                src="/despegamos-con-impacto/Latam-logo.svg"
                                width={200}
                                height={200}
                                alt="Despegamos con impacto"
                                className="mb-6 md:mb-0"
                            />
                        </a>
                        <a
                            href="https://olifoundation.org/"
                            target="_blank"
                        >
                            <Image
                                src="/despegamos-con-impacto/LOGO_Oli.png"
                                width={200}
                                height={200}
                                alt="Despegamos con impacto"
                                className="mb-6 md:mb-0"
                            /></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-2 md:gap-10 min-w-full">
                    <div>
                        <p className="md:text-normal">© Todos los derechos reservados 2025. Fundación Oli</p>
                        <p className="md:text-normal">© 2025 LATAM Airlines Perú S.A. RUC: 20341841357</p>
                    </div>
                    <div>
                        <p className="">Desarrollado por Joao Basauri</p>
                    </div>
                </div>
            </footer >
        </div >
    );
}