export default function Footer() {
    return (
        <div
            className={`
                flex items-start justify-center py-10 pb-6 text-sm
                lg:flex-row md:flex-row sm:flex-row
                xsm:flex-col xsm:items-center xsm:justify-center    
            `}
        >
            <div
                className={`
                    flex items-center px-1 text-center text-[#04C4D9]
                    xms:py-10    
                `}
            >
                <p>&copy; 2023 - Caboclo Mestiço - Todos os direitos reservados.</p>
            </div>
                <div className="flex px-1 text-[#04C4D9] xms:py-10">
                    Desenvolvido por
                    <div
                        className={`
                            inline-block transform
                            hover:scale-110 hover:rotate-6 transition duration-300
                        `}
                    >
                        <a
                            className="hover:bg-[#7922f2] rounded-md px-1 py-1 hover:text-gray-50"
                            target="_blank"
                            href="https://api.whatsapp.com/send?phone=5581996395721&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20do%20Caboclo%20Mesti%C3%A7o..."
                        >
                            Vini Morais
                        </a>
                    </div>
                </div>
        </div>
    )
}