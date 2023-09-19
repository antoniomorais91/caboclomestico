import Image from "next/image";
import album from '../../public/sistemasonoro.png'

export default function Album() {
    return (
        <div
            className={`
                flex items-center justify-center p-2
                lg:w-fit md:w-[620px] sm:w-[460px] xsm:w-[280px] xsm:p-1
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