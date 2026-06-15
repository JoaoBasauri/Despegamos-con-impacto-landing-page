"use client"
import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { FaPen, FaFile } from "react-icons/fa"


export default function participantes() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
        <div className="bg-[#F4F2F9] text-left flex flex-col mb-5" >
            <h2 className="text-5xl font-bold mb-6 text-[#1B0088] mx-auto text-left">¿Quiénes pueden postular?</h2>
            <div className="flex items-center justify-center">
                <p className="text-xl text-gray-900 max-w-5xl">
                    El programa Despegamos con Impacto está dirigido exclusivamente a organizaciones sin
                    fines de lucro con operaciones en el Perú, que busquen fortalecer sus capacidades
                    institucionales y llevar su impacto al siguiente nivel. Las postulaciones podrán hacerse en
                    una de las siguientes dos categorías:
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto rounded-xl shadow-md border-[#233e8b] border-2 bg-white my-5">
                {/* Header del dropdown */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-[#233e8b] rounded-xl hover:bg-gray-100"
                >
                    <div>
                        <span>Categoría 1: Primer Vuelo</span>
                        <p className="text-gray-600 text-sm opacity-80 mt-1">Para ONGs en etapa de consolidación (2+ años)</p>
                    </div>
                    {isOpen ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </button>

                {/* Contenido colapsable */}
                <div
                    className={`grid gap-5 text-gray-700 overflow-hidden transition-all duration-300 ${isOpen ? "md:max-h-100 p-4 max-h-max" : "max-h-0 p-0"
                        }`}
                >
                    <p >
                        Dirigida a ONGs en etapa de consolidación que necesitan fortalecer sus capacidades
                        internas para operar con mayor transparencia, eficacia y sostenibilidad.
                    </p>
                    <h3 className="font-semibold uppercase">requisitos</h3>
                    <div className="ml-4">
                        <li>Ser una organización debidamente registrada en el Perú o en el extranjero con
                            operaciones en Perú.</li>
                        <li>Tener al menos <a className="font-semibold">2 años de operaciones continuas.</a></li>
                        <li>Haber ejecutado al menos <a className="font-semibold">1 proyecto social activo en el último año</a>, entendido
                            como una intervención en comunidad de forma continua. </li>
                        <li>Haber ejecutado al menos <a className="font-bold">1 proyecto financiado por terceros</a>, ya sea a través de
                            cooperación internacional, empresa privada o fondos estatales. </li>
                        <li>Contar con un equipo activo de al menos <a className="font-semibold">3 personas</a> en roles de gestión o dirección
                            (pueden ser voluntarios o no remunerados). </li>
                        <li><a className="font-semibold">No contar aún con procesos formales o consolidados</a> en contabilidad y/o
                            medición de impacto. </li>
                        <li>Completar el formulario de postulación y adjuntar los documentos requeridos.</li>
                        <li>Comprometerse a participar en el proceso de mentoría y acompañamiento</li>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto rounded-xl shadow-md border-[#233e8b] border-2 bg-white my-5">
                {/* Header del dropdown */}
                <button
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-[#233e8b] rounded-xl hover:bg-gray-100"
                >
                    <div>
                        <span>Categoría 2: Vuelo en curso</span>
                        <p className="text-gray-600 text-sm opacity-80 mt-1">Para ONGs consolidadas que buscan escalar (5+ años)</p>
                    </div>
                    {isOpen2 ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </button>

                {/* Contenido colapsable */}
                <div
                    className={`grid gap-5 text-gray-700 overflow-hidden transition-all duration-300 ${isOpen2 ? "md:max-h-100 p-4 max-h-max" : "max-h-0 p-0"
                        }`}
                >
                    <p >
                        Dirigida a ONGs con un mayor grado de consolidación que buscan profesionalizar o escalar
                        su impacto mediante la mejora de procesos internos.
                    </p>
                    <h3 className="font-semibold uppercase">requisitos</h3>
                    <div className="ml-4">
                        <li>Ser una organización debidamente registrada en el Perú o en el extranjero con
                            operaciones en Perú.</li>
                        <li>Tener al menos <a className="font-semibold">5 años de operaciones continuas.</a></li>
                        <li>Haber implementado al menos <a className="font-semibold">3 proyectos sociales activos en los últimos 12
                            meses</a>, con intervención comunitaria continua.</li>
                        <li>Contar con un equipo activo con al menos <a className="font-semibold">1 persona a tiempo completo</a> en roles
                            de gestión o dirección.</li>
                        <li>Contar con procesos <a className="font-bold">contables activos y algún mecanismo de medición de
                            impacto en uso</a> (aunque sean básicos).</li>
                        <li>Mostrar interés en <a className="font-semibold">escalar, innovar o diversificar sus fuentes de financiamiento.</a></li>
                        <li>Completar el formulario de postulación y adjuntar los documentos requeridos.</li>
                        <li>Comprometerse a participar en el proceso de mentoría y acompañamiento</li>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto rounded-xl shadow-md border-[#233e8b] border-2 bg-white my-5">
                {/* Header del dropdown */}
                <button
                    onClick={() => setIsOpen3(!isOpen3)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold text-[#233e8b] rounded-xl hover:bg-gray-100"
                >
                    <div>
                        <span>Categoría 3: Conexión Territorial</span>
                        <p className="text-gray-600 text-sm opacity-80 mt-1">Para ONGs con intervenciones en dos o más regiones del país (5+ años).</p>
                    </div>
                    {isOpen3 ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </button>

                {/* Contenido colapsable */}
                <div
                    className={`grid gap-5 text-gray-700 overflow-hidden transition-all duration-300 ${isOpen3 ? "md:max-h-200 p-4 max-h-max" : "max-h-0 p-0"
                        }`}
                >
                    <p >
                        Dirigida a organizaciones sociales con presencia e impacto en distintas regiones del país, que vienen impulsando soluciones sostenibles
                        desde sus territorios y contribuyendo activamente a la descentralización del desarrollo social.
                    </p>
                    <h3 className="font-semibold uppercase">requisitos</h3>
                    <div className="ml-4">
                        <li>Ser una organización debidamente registrada en el Perú o en el extranjero con
                            operaciones en Perú.</li>
                        <li>Tener operaciones y/o intervenciones en <a className="font-semibold">2 o más</a> regiones del país.</li>
                        <li>Tener al menos <a className="font-semibold">5 años de operaciones continuas.</a></li>
                        <li>Haber ejecutado al menos <a className="font-semibold">1 proyecto social activo en el último año</a> vinculado a desarrollo comunitario, educación,
                            salud, bienestar, medio ambiente, empoderamiento o desarrollo territorial.</li>
                        <li>Contar con <a className="font-semibold">evidencia de trabajo sostenido</a> y articulación con comunidades locales, organizaciones de base, gobiernos locales, líderes comunitarios
                            u otros actores territoriales.</li>
                        <li>Demostrar <a className="font-semibold">impacto directo </a> en poblaciones en situación de vulnerabilidad o con  limitado a oportunidades de desarrollo y fortalecimiento.</li>
                        <li>Contar con un equipo activo de trabajo, pudiendo estar conformado por personal remunerado, líderes comunitarios y/o voluntariado.</li>
                        <li>Mostrar compromiso con el crecimiento organizacional, la sostenibilidad y la generación de alianzas para ampliar su impacto.</li>
                        <li>Estar dispuestos a participar activamente en espacios de mentoría, fortalecimiento de capacidades y visibilización impulsados por el programa.</li>
                        <li>Comprometerse a participar en el proceso de mentoría y acompañamiento:
                            <ul className="ml-4 mt-2 list-disc">
                                <li>El impacto generado en su territorio.</li>
                                <li>La problemática que buscan atender.</li>
                                <li>El vínculo con la comunidad.</li>
                                <li>Los desafíos que enfrentan para seguir creciendo.</li>
                                <li>Cómo el programa puede contribuir al fortalecimiento de su organización.</li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}