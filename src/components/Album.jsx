import Image from "next/image";
import album from '../../public/sistemasonoro.png'

export default function Album() {
    return (
        <div
            className={`
                flex items-center justify-center shadow-2xl shadow-black
                lg:w-fit md:mx-6 sm:mx-6 xsm:mx-8
                transition-transform duration-300
                hover:cursor-pointer hover:scale-105
            `}
        >
            <Image 
                src={album}
                alt="Sistema Sonoro"
                width={700}
                height={700}
                style={{minWidth: "160px"}}
            />
        </div>
    )
}