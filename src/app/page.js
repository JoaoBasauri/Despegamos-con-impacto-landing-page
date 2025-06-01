import Image from "next/image";
import { FaArrowAltCircleDown, FaPen, FaFile } from "react-icons/fa"

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-[#F4F2F9]">

      {/* Hero Section */}
      <section className="bg-[#F4F2F9] pt-30 pb-15 text-gray-900">
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
        <div className="flex justify-center items-center gap-5 mb-5">
          <a href="#proposito" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition">
            Propósito
          </a>
          <a href="#categoria" className="inline-block bg-[#FFB001] text-[#233E8B] font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition">
            Categorias
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

          <div className="grid md:grid-cols-3 md:grid-rows-[200_100] justify-center justify-items-center items-start text-wrap">
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
        <h2 className="text-3xl font-bold mb-6 text-[#1B0088] ml-0 md:ml-110">Conoce nuestras Categorias</h2>
        
        <div className="grid md:grid-cols-2 md:grid-rows-[200_100] justify-center justify-items-center items-start text-wrap">
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
            <p className="text-lg text-gray-900 max-w-xs text-wrap mb-2 col-auto">Mejorar su transparencia financiera</p>
            <p className="text-lg text-gray-900 max-w-xs text-wrap mb-2 col-auto">Fortalecer su capacidad de evaluar el impacto de sus acciones</p>
          </div>

        
      </section >

      {/* Testimonios Section */}
      < section id="testimonios" className="py-16 px-6 md:px-20 bg-white" >
        <h2 className="text-3xl font-bold mb-6 text-[#1B0088]">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#35A1F4] text-white p-4 rounded shadow">
            <p>“Gracias a Impulsar Salud, nuestro proyecto llegó a cientos de pacientes.”</p>
            <p className="mt-2 font-semibold">— Ana M., participante 2023</p>
          </div>
          <div className="bg-[#233E8B] text-white p-4 rounded shadow">
            <p>“La mentoría y el apoyo fueron clave para profesionalizar nuestra idea.”</p>
            <p className="mt-2 font-semibold">— Luis R., participante 2022</p>
          </div>
          <div className="bg-[#3AB85C] text-white p-4 rounded shadow">
            <p>“Una experiencia transformadora tanto personal como profesionalmente.”</p>
            <p className="mt-2 font-semibold">— Clara F., ganadora 2021</p>
          </div>
        </div>
      </section >

      {/* Formulario de contacto */}
      < section id="contacto" className="py-16 px-6 md:px-20 bg-[#F4F2F9]" >
        <h2 className="text-3xl font-bold mb-6 text-[#1B0088]">Contáctanos</h2>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border border-gray-300 p-3 rounded" required />
          <input type="email" placeholder="Correo electrónico" className="w-full border border-gray-300 p-3 rounded" required />
          <textarea placeholder="Mensaje" rows="5" className="w-full border border-gray-300 p-3 rounded" required></textarea>
          <button type="submit" className="bg-[#1B0088] text-white px-6 py-3 rounded-full hover:bg-[#233E8B] transition">
            Enviar
          </button>
        </form>
      </section >

      {/* Footer */}
      < footer className="bg-white py-6 text-center text-sm text-gray-600" >
        & copy; {new Date().getFullYear()} Roche.Todos los derechos reservados.
      </footer >
    </div >
  );
}
