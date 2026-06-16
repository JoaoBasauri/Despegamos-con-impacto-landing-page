"use client"
import { useState } from "react"
import Image from "next/image"


// ─── DATOS ───────────────────────────────────────────────────────────────────

const galeria = {
    categoria1: {
        label: "Categoría 1: Primer Vuelo",
        fotos: Array.from({ length: 10 }, (_, i) => `/galeria/categoria1/foto${i + 1}.jpg`)
    },
    categoria2: {
        label: "Categoría 2: Vuelo en curso",
        fotos: Array.from({ length: 10 }, (_, i) => `/galeria/categoria2/foto${i + 1}.jpg`)
    }
}

const videos = [
    { youtubeId: "JKw2ACcj6Z0", titulo: "Testimonios de finalistas" },
    { youtubeId: "bEGi0auboi8", titulo: "Ceremonia de premiación" },
    { youtubeId: "9RbMyrf96bk", titulo: "Testimonios de los ganadores" },
]

// ─── FALLBACK ────────────────────────────────────────────────────────────────

function FotoFallback({ numero }) {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#290087] via-[#4a00c4] to-[#FF3E78] flex flex-col items-center justify-center gap-3">
            <div className="bg-[#ffffff15] rounded-2xl p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <span className="text-white/40 text-sm font-medium">Foto {numero}</span>
        </div>
    )
}

function FotoConFallback({ src, alt, numero, fill, className, onClick }) {
    const [error, setError] = useState(false)

    if (error) {
        return (
            <div className="absolute inset-0" onClick={onClick}>
                <FotoFallback numero={numero} />
            </div>
        )
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            className={className}
            onError={() => setError(true)}
            onClick={onClick}
        />
    )
}

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────────────────────

export default function Galeria() {
    const [tabPrincipal, setTabPrincipal] = useState("fotos")
    const [categoriaActiva, setCategoriaActiva] = useState("categoria1")
    const [fotoActual, setFotoActual] = useState(0)
    const [lightbox, setLightbox] = useState(null)
    const [lightboxVideo, setLightboxVideo] = useState(null)

    const fotos = galeria[categoriaActiva].fotos

    const cambiarCategoria = (cat) => {
        setCategoriaActiva(cat)
        setFotoActual(0)
    }

    const prev = () => setFotoActual((f) => (f - 1 + fotos.length) % fotos.length)
    const next = () => setFotoActual((f) => (f + 1) % fotos.length)
    const prevLightbox = (e) => { e.stopPropagation(); setLightbox((l) => (l - 1 + fotos.length) % fotos.length) }
    const nextLightbox = (e) => { e.stopPropagation(); setLightbox((l) => (l + 1) % fotos.length) }

    return (
        <section id="galeria" className="py-16 px-6 md:px-20 bg-[#F4F2F9]">

            {/* Título */}
            <h2 className="text-5xl font-bold mb-2 text-[#290087] text-center">Despegamos con Impacto 2025</h2>
            <p className="text-center text-gray-500 text-lg mb-10">Revive los mejores momentos de nuestra primera edición</p>

            {/* Tab nivel 1: Fotos / Videos */}
            <div className="flex justify-center gap-4 mb-8">
                {[
                    { key: "fotos", label: "Fotos" },
                    { key: "videos", label: "Videos" }
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setTabPrincipal(key)}
                        className={`px-8 py-3 rounded-full font-semibold transition ${tabPrincipal === key
                            ? "bg-[#290087] text-white"
                            : "border-2 border-[#290087] text-[#290087] hover:bg-[#290087] hover:text-white"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* ── PANEL FOTOS ── */}
            {tabPrincipal === "fotos" && (
                <div>
                    {/* Tab nivel 2: Categoría */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {Object.entries(galeria).map(([key, val]) => (
                            <button
                                key={key}
                                onClick={() => cambiarCategoria(key)}
                                className={`px-6 py-2 rounded-full font-semibold text-sm transition ${categoriaActiva === key
                                    ? "bg-[#FF3E78] text-white"
                                    : "border-2 border-[#FF3E78] text-[#FF3E78] hover:bg-[#FF3E78] hover:text-white"
                                    }`}
                            >
                                {val.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto">

                        {/* Foto principal */}
                        <div className="relative rounded-2xl overflow-hidden h-64 md:h-[480px] mb-4 group cursor-pointer"
                            onClick={() => setLightbox(fotoActual)}>
                            <FotoConFallback
                                key={fotos[fotoActual]}
                                src={fotos[fotoActual]}
                                alt={`Foto ${fotoActual + 1}`}
                                numero={fotoActual + 1}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <button
                                onClick={(e) => { e.stopPropagation(); prev() }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
                            >‹</button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next() }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
                            >›</button>
                            <span className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                                {fotoActual + 1} / {fotos.length}
                            </span>
                            <span className="absolute bottom-3 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                                🔍 Click para ampliar
                            </span>
                        </div>

                        {/* Miniaturas */}
                        <div className="hidden md:grid grid-cols-5 md:grid-cols-10 gap-2">
                            {fotos.map((foto, i) => (
                                <div
                                    key={i}
                                    onClick={() => setFotoActual(i)}
                                    className={`relative rounded-lg overflow-hidden aspect-square cursor-pointer transition-all ${i === fotoActual
                                        ? "ring-2 ring-[#290087] ring-offset-1 scale-105"
                                        : "opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <FotoConFallback
                                        src={foto}
                                        alt={`Miniatura ${i + 1}`}
                                        numero={i + 1}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── PANEL VIDEOS ── */}
            {tabPrincipal === "videos" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {videos.map((video, i) => (
                        <div
                            key={i}
                            className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer group"
                            onClick={() => setLightboxVideo(i)}
                        >
                            {/* Thumbnail de YouTube */}
                            <div className="relative h-48 bg-black overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                    alt={video.titulo}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay play */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-[#FF3E78] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center font-semibold text-[#290087] py-4 px-4">{video.titulo}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* ── LIGHTBOX FOTOS ── */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FotoConFallback
                            key={fotos[lightbox]}
                            src={fotos[lightbox]}
                            alt={`Foto ${lightbox + 1}`}
                            numero={lightbox + 1}
                            fill
                            className="object-contain"
                        />
                        <button onClick={prevLightbox}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition">
                            ‹
                        </button>
                        <button onClick={nextLightbox}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition">
                            ›
                        </button>
                        <button onClick={() => setLightbox(null)}
                            className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition">
                            ✕
                        </button>
                        <span className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                            {lightbox + 1} / {fotos.length}
                        </span>
                    </div>
                </div>
            )}

            {/* ── LIGHTBOX VIDEO ── */}
            {lightboxVideo !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[lightboxVideo].youtubeId}?autoplay=1`}
                            title={videos[lightboxVideo].titulo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-2xl"
                        />
                        <button
                            onClick={() => setLightboxVideo(null)}
                            className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
                        >
                            ✕
                        </button>
                        <p className="absolute -bottom-10 left-0 text-white/70 text-sm">
                            {videos[lightboxVideo].titulo}
                        </p>
                    </div>
                </div>
            )}

        </section>
    )
}