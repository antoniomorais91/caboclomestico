export default function Clipping() {
    return (
        <div
            className={`
                lg:grid grid-cols-2 gap-10 px-2 py-2           
                justify-center items-center text-center text-[#f3f3f3] 
            `}
        >
            <div
                className={`
                    py-4 px-10 items-center justify-center duration-300
                    md:py-8 sm:py-8
                    hover:scale-110 hover:text-[#04C4D9]
                `}
            >
                <h1
                    className={`
                        lg:text-3xl md:text-3xl sm:text-2xl xsm:text-xl    
                    `}
                >
                    <a
                        href="https://drive.google.com/drive/folders/176bL7ZLtJw7tb-tTOL2quPf3OBEDNv1W"
                    >
                        CLIPPING
                    </a>
                </h1>
            </div>
            <div
                className={`
                    py-4 px-10 items-center justify-center duration-300
                    md:py-8 sm:py-8
                    hover:scale-110 hover:text-[#04C4D9]
                `}
            >
                <h1
                    className={`
                        lg:text-3xl md:text-3xl sm:text-2xl xsm:text-xl    
                    `}
                >
                    <a
                        href="mailto:caboclomestico@gmail.com "
                    >
                        CONTATO
                    </a>
                </h1>
            </div>
        </div>
    )
}