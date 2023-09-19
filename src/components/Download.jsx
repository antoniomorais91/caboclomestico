export default function Download() {
    return (
        <div
            className={`
                flex flex-col justify-center items-center px-2 pt-14 pb-4 text-[#f3f3f3]
            `}
        >
            <div
                className={`
                    duration-300
                    hover:scale-110 hover:text-[#f29f05]
                `}
            >
                <h1
                    className={`
                        lg:text-3xl md:text-3xl sm:text-2xl xsm:text-xl    
                    `}
                >
                    <a href="https://tr.ee/6y4sXcOFLn">
                        DOWNLOAD
                    </a>
                </h1>
            </div>
            <div
                className={`
                    flex items-center justify-center py-1 px-2
                `}
            >
                <h3
                    className={`
                        p-3 duration-300
                        lg:text-lg md:text-lg sm:text-base xsm:text-sm
                        hover:scale-110 hover:text-[#f29f05]
                    `}
                >
                    <a href="https://tr.ee/6y4sXcOFLn">
                        ÁLBUM
                    </a>
                </h3>
                |
                <h3
                    className={`
                    p-3 duration-300
                    lg:text-lg md:text-lg sm:text-base xsm:text-sm
                    hover:scale-110 hover:text-[#f29f05]
                    `}
                >
                    <a href="https://tr.ee/6y4sXcOFLn">
                        RELEASE
                    </a>
                </h3>
            </div>
        </div>
    )
}