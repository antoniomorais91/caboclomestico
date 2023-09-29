export default function Clipping() {
    return (
        <div
            className={`
                lg:grid grid-cols-3 gap-10 px-2 py-2           
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
                        target="_blank"
                        className="uppercase hover:text-[#04C4D9] hover:cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#fotos"
                    >
                        Fotos
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
                        href="https://drive.google.com/drive/folders/176bL7ZLtJw7tb-tTOL2quPf3OBEDNv1W"
                        target="_blank"
                        className="uppercase hover:text-[#04C4D9]"
                    >
                        Clipping
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
                        className="uppercase hover:text-[#04C4D9] hover:cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#contato"
                    >
                        Contato
                    </a>
                </h1>
            </div>
        </div>
    )
}