export default function Info() {
    return (
        <div
            className={`
                lg:grid grid-cols-2 gap-10 px-2 py-2             
                justify-center items-center text-center text-[#f3f3f3]  
            `}
        >
            <div
                className={`
                    py-4 px-10 items-center justify-center
                    md:py-8 sm:py-8
                `}
            >
                <h1
                    className={`
                        lg:text-3xl md:text-3xl sm:text-2xl xsm:text-xl
                        duration-300 hover:scale-110    
                    `}
                >
                    <a
                        href=""
                        className="uppercase hover:text-[#04C4D9]"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#Letras"
                        aria-controls="Menu das Letras"
                    >
                        Letras
                    </a>
                </h1>
            </div>
            <div
                className={`
                    py-4 px-10 items-center justify-center
                    md:py-8 sm:py-8
                `}
            >
                <h1
                    className={`
                        lg:text-3xl md:text-3xl sm:text-2xl xsm:text-xl
                        duration-300 hover:scale-110    
                    `}
                >
                    <a
                        href=""
                        target="_blank"
                        className="uppercase hover:text-[#04C4D9]"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#FichaTecnica"
                        aria-controls="Ficha Técnica"
                    >
                        Ficha Técnica
                    </a>
                </h1>
            </div>
        </div>
    )
}