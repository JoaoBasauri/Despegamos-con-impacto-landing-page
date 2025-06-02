import Image from "next/image";
import Participantes from './participantes'
import { FaArrowAltCircleDown, FaPen, FaFile } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Landing() {
    return (
        <div className="font-sans text-gray-900 bg-[#F4F2F9]">

            {/* Hero Section */}
            <section id="inicio" className="bg-[#F4F2F9] pt-15 pb-10 text-gray-900">
                <div className="flex flex-col md:flex-row md:justify-center items-center -mb-5   md:mb-10 gap-1 md:gap-8">
                    <h1 className="font-bold text-2xl md:text-4xl">Postulaciones</h1>
                    <a
                        href="/despegamos-con-impacto/pdf/Bases del concurso - Despegamos con Impacto.pdf"
                        target="_blank"
                        className="flex items-center gap-1 md:gap-2 uppercase bg-[#ffaf0100] border-2 hover:text-white font-semibold px-5 py-3 md:px-8 md:py-5 rounded-full hover:bg-gray-900 transition"
                    >
                        <FaArrowAltCircleDown className="text-lg md:text-2xl" />
                        <span className="text-sm md:text-base">Descarga las bases</span>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:py-0">
                    <Image
                        src="/despegamos-con-impacto/logo.png"
                        width={500}
                        height={500}
                        alt="Despegamos con impacto"
                        className="-mb-10 md:mb-0"
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
                    <a href="#postulacion" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Postulación
                    </a>
                    <a href="#mentor" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Mentor
                    </a>
                    <a href="#cronograma" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        Cronograma
                    </a>
                    <a href="#faq" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-[#233E8B] hover:text-[#ffffff] transition">
                        FAQ
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
                    <div className="text-lg text-white max-w-110 mb-2 row-start-5 md:row-auto">
                        <p className="-indent-4"><a className="font-semibold"> - Capital semilla de S/ 25,000</a> para el fortalecimiento institucional o ejecución de un
                            proyecto de mejora organizacional.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Acompañamiento técnico especializado por 3 meses</a> (noviembre 2025 - enero
                            2026) en temas de finanzas e impacto.</p>
                        <p className="-indent-4"><a className="font-semibold"> - Reconocimiento público</a> en evento de cierre y <a className="font-semibold"> certificado oficial.</a></p>
                    </div>
                </div>
            </section >
            {/* Participantes Section*/}
            < section id="participante" className="py-16 px-6 md:px-20 bg-[#F4F2F9]">
                <Participantes />
            </section >

            {/* Postulacion Section*/}
            <section id="postulacion" className="py-16 px-6 md:-mt-16 md:px-20 bg-[#1B0088] text-justify">
                <h2 className="text-3xl font-bold mb-6 text-[#ff3e78]">Conoce nuestro proceso de postulación</h2>
                <div className="md:grid grid-flow-col grid-rows-3 text-white gap-2 gap-x-15 mx-5">
                    <div>
                        <h3 className="font-bold text-2xl mt-5">Paso 1: Identifica un reto interno. </h3>
                        <p className="text-lg">Reflexiona junto a tu equipo sobre los principales desafíos institucionales que enfrentan
                            actualmente y que quisieran fortalecer a través de esta beca. </p>
                    </div>
                    <div className="md:-mt-10">
                        <h3 className="font-bold text-2xl mt-5">Paso 2: Completa el formulario de postulación.</h3>
                        <p className="text-lg">Cuéntanos sobre tu organización, sus proyectos y el reto institucional identificado. </p>
                        <div className="flex flex-col mx-auto md:ml-5">
                            <h4 className="text-xl font-semibold mt-5">Importante:</h4>
                            <p className="text-lg">Te recomendamos descargar previamente la Guía de Preguntas del
                                Formulario, ya que el sistema no guarda el avance.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl mt-5">Paso 3: Revisa tu correo. </h3>
                        <p className="text-lg">Una vez completado el formulario, recibirás un correo de confirmación</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl mt-5">Nota: </h3>
                        <p className="text-lg">Todas las organizaciones postulantes pasarán automáticamente a formar parte de la Red
                            OLI, sin necesidad de realizar el proceso de postulación adicional.
                            La postulación al programa Despegamos con Impacto es completamente virtual y gratuita. </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl mt-5 md:-mt-5">Criterios de evaluación</h3>
                        <div className="-indent-7 ml-5 md:ml-15 text-xl text-left">
                            <li>Criterio 1: Capacidad de gestión y sostenibilidad </li>
                            <li>Criterio 2: Claridad de misión y objetivos de la ONG </li>
                            <li>Criterio 3: Potencial de impacto social </li>
                            <li>Criterio 4: Necesidad y justificación del fortalecimiento </li>
                            <li>Criterio 5: Compromiso y apertura al fortalecimiento</li>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:-mt-5 mx-auto flex flex-col md:flex-row items-center justify-center gap-2 bg-[#FFB001] md:rounded-full rounded-4xl object-center max-w-150">
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
            </section>

            {/*Mentor Section*/}
            <section id="mentor" className="py-16 px-6 md:px-20 bg-[#F4F2F9] text-justify">
                <h2 className="text-3xl font-bold mb-6 text-[#1B0088] ml-0 md:ml-110 text-left">¿Deseas ser Mentor?</h2>
                <div className="flex justify-center items-center">
                    <p className="justify-center text-lg text-gray-900 max-w-3xl mb-5">Los mentores son los responsables de acompañar de manera estratégica a una
                        organización finalista en la identificación, diseño y puesta en marcha de un proyecto de
                        fortalecimiento institucional, brindando guía técnica, perspectiva externa y soporte en la
                        toma de decisiones clave durante el proceso de acompañamiento.</p>
                </div>
                <div className="md:grid grid-cols-2 grid-rows-[50_auto] justify-center items-start md:mx-25">
                    <div className="row-start-1 text-[#FF3E78] font-semibold text-3xl  mb-10 md:mr-10">
                        <h3>¿A quiénes buscamos?</h3>
                    </div>
                    <div className="flex flex-col gap-3 row-start-2 md:mr-10 text-gray-900">
                        <li>Profesionales con formación relacionada a alguna de estas áreas: administración,
                            gestión de organizaciones sociales, economía, políticas públicas, psicología
                            organizacional, o carreras afines</li>
                        <li>Profesionales con posgrado o especialización en gestión de proyectos sociales,
                            fortalecimiento institucional, innovación social, desarrollo organizacional u otros
                            campos afines.  </li>
                        <li>Profesionales con mínimo 5 años de experiencia profesional en organizaciones
                            sociales, cooperación internacional, consultoría a ONGs o empresas con enfoque
                            social. </li>
                        <li>Personas con al menos 2 años de experiencia directa acompañando procesos de
                            fortalecimiento organizacional, planificación estratégica o desarrollo institucional</li>
                        <li>Se valorará experiencia previa en mentoría o facilitación de procesos
                            participativos (no excluyente). </li>
                        <p className="my-5">Nuestros mentores de impacto acompañarán a nuestros finalistas en la preparación del
                            proyecto de fortalecimiento institucional que presentarán en la Evaluación Final. Además,
                            ayudarán a nuestros finalistas a definir una hoja de ruta básica para la implementación de
                            dicho proyecto e identificar sus desafíos internos y posibles caminos de mejora.  </p>
                    </div>
                    <div className="row-start-1 text-[#FF3E78] font-semibold text-3xl  mb-10 md:mr-10">
                        <h3>¿Qué te llevas al ser mentor? </h3>
                    </div>
                    <div className="row-start-2 flex flex-col gap-3 md:mr-10 text-gray-900">
                        <p>Nuestros mentores de impacto acompañarán a nuestros finalistas en la preparación del
                            proyecto de fortalecimiento institucional que presentarán en la Evaluación Final. Además,
                            ayudarán a nuestros finalistas a definir una hoja de ruta básica para la implementación de
                            dicho proyecto e identificar sus desafíos internos y posibles caminos de mejora.  </p>
                        <li>Profesionales con formación relacionada a alguna de estas áreas: administración,
                            gestión de organizaciones sociales, economía, políticas públicas, psicología
                            organizacional, o carreras afines</li>
                        <li>Profesionales con posgrado o especialización en gestión de proyectos sociales,
                            fortalecimiento institucional, innovación social, desarrollo organizacional u otros
                            campos afines.  </li>
                        <li>Profesionales con mínimo 5 años de experiencia profesional en organizaciones
                            sociales, cooperación internacional, consultoría a ONGs o empresas con enfoque
                            social. </li>
                        <li>Personas con al menos 2 años de experiencia directa acompañando procesos de
                            fortalecimiento organizacional, planificación estratégica o desarrollo institucional</li>
                        <li>Se valorará experiencia previa en mentoría o facilitación de procesos
                            participativos (no excluyente). </li>
                        <li>Profesionales con mínimo 5 años de experiencia profesional en organizaciones
                            sociales, cooperación internacional, consultoría a ONGs o empresas con enfoque
                            social. </li>
                        <li>Personas con al menos 2 años de experiencia directa acompañando procesos de
                            fortalecimiento organizacional, planificación estratégica o desarrollo institucional</li>
                        <li>Se valorará experiencia previa en mentoría o facilitación de procesos
                            participativos (no excluyente). </li>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center items-center -mb-5 my-5 md:mb-10 gap-1 md:gap-8">
                    <h1 className="font-bold text-1xl md:text-3xl">POSTULA COMO MENTOR/A AQUÍ:</h1>
                    <a href="https://forms.gle/kmoM871LEHV1pmBq9"
                        target="_blank"
                        className="flex items-center gap-1 md:gap-2 uppercase bg-[#ffaf0100] border-2 hover:text-white font-semibold px-5 py-3 md:px-8 md:py-5 rounded-full hover:bg-gray-900 transition">
                        <FaPen size={13} />
                        Inscribete Aquí
                    </a>
                </div>
            </section>

            {/*Cronograma section */}
            <section id="cronograma" className="py-16 px-6 md:px-20 bg-[#1B0088] text-justify">
                <h2 className="text-3xl font-bold mb-6 text-[#FF3E78] ml-0 md:ml-110 text-left">Etapas del concurso</h2>
                <div className="overflow-x-auto p-4">
                    <div className="inline-block min-w-full align-middle rounded-xl border-2 border-white overflow-hidden">
                        <table className="min-w-full text-sm md:text-base bg-[#F4F2F9] text-left">
                            <thead className="bg-[#FF3E78] text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Actividad</th>
                                    <th className="py-3 px-4 text-left">Fecha inicio</th>
                                    <th className="py-3 px-4 text-left">Fecha término</th>
                                    <th className="py-3 px-4 text-left">Modalidad</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#1B0088]">

                                {/* Proceso de convocatoria */}
                                <tr className="bg-[#3E0078] text-white">
                                    <td colSpan="4" className="py-2 px-4 font-semibold italic">Proceso de convocatoria</td>
                                </tr>
                                {[
                                    ['Lanzamiento del concurso', '8 de junio', '-', 'Presencial'],
                                    ['Postulaciones de organizaciones', '8 de junio', '19 de julio', 'Virtual'],
                                    ['Postulación de mentores', '8 de junio', '19 de julio', 'Virtual'],
                                    ['Evaluación de postulaciones', '20 de julio', '10 de agosto', 'Virtual'],
                                    ['Publicación de finalistas y mentores', '13 de agosto', '13 de agosto', 'Virtual'],
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
                                    ['Kick off mentores', '18 de agosto', '24 de agosto', 'Virtual'],
                                    ['Bienvenida finalistas', '18 de agosto', '24 de agosto', 'Virtual'],
                                    ['Sesión Módulo 1', '25 de agosto', '31 de agosto', 'Virtual'],
                                    ['Semana de mentorías 1', '1 de septiembre', '7 de septiembre', 'Virtual'],
                                    ['Sesión Módulo 2', '8 de septiembre', '14 de septiembre', 'Virtual'],
                                    ['Semana de mentorías 2', '15 de septiembre', '21 de septiembre', 'Virtual'],
                                    ['Sesión Módulo 3', '22 de septiembre', '28 de septiembre', 'Virtual'],
                                    ['Semana de mentoría 3', '29 de septiembre', '5 de octubre', 'Virtual'],
                                    ['Semana de mentoría 4', '6 de octubre', '12 de octubre', 'Virtual'],
                                    ['Semana de mentoría 5', '13 de octubre', '17 de octubre', 'Virtual'],
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
                                    ['Presentación de proyectos', '18 de octubre', '-', 'Presencial'],
                                    ['Ceremonia de premiación', '29 de octubre', '-', 'Presencial'],
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
            <section id="faq" className="py-16 px-6 md:px-20 bg-[#F4F2F9] text-justify">
                <h2 className="text-3xl font-bold mb-6 text-[#1B0088] ml-0 md:ml-110 text-left">FAQ</h2>
                <div className="flex flex-col md:flex-row md:justify-center items-center -mb-5 md:mb-10 gap-1 md:gap-8 text-left">
                    <h1 className="font-bold text-2xl md:text-2xl">Encuentra nuestras Preguntas Frecuentes (FAQs) aquí: </h1>
                    <a
                        href="/despegamos-con-impacto/pdf/faq.pdf"
                        target="_blank"
                        className="flex items-center gap-1 mt-5 md:mt-0 md:gap-2 uppercase bg-[#ffaf0100] border-2 hover:text-white font-semibold px-5 py-3 md:px-8 md:py-5 rounded-full hover:bg-gray-900 transition"
                    >
                        <FaArrowAltCircleDown className="text-lg md:text-2xl" />
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
            < footer className="bg-[#F4F2F9] flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-600" >
                <div className="md:ml-5 font-extrabold text-xl">
                    <h2 className="ml-5 mb-2">REDES SOCIALES</h2>
                    <div className="flex flex-row gap-5 mb-5 ml-5">
                        <a
                            href="https://www.facebook.com/FundacionOLI"
                            className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                        > <FaFacebookF size={24} style={{ color: "#F4F2F9" }} /></a>
                        <a
                            href="https://www.instagram.com/fundacionoli/"
                            className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                        > <FaInstagram size={24} style={{ color: "#F4F2F9" }} /></a>
                        <a
                            href="https://www.linkedin.com/company/fundación-oli/"
                            className="bg-[#818085] p-3 rounded-full shadow-lg hover:bg-[#1B0088] transition"
                        > <FaLinkedinIn size={24} style={{ color: "#F4F2F9" }} /></a>
                    </div>
                </div>
                <div>
                    <p className="md:text-normal">© Todos los derechos reservados 2025. Fundación Oli</p>
                </div>
                <div className="mt-2 mr-2 md:mr-5">
                    <p className="">Desarrollado por Joao Basauri</p>
                </div>
            </footer >
        </div >
    );
}