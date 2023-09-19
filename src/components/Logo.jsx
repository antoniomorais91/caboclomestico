import Image from "next/image";
import Link from "next/link";

import logo from "../../public/caboclo.png"

export default function Logo() {
    return (
        <div
            className={`
                flex items-center justify-center p-2
                lg:w-fit md:w-fit sm:w-fit xsm:w-px xsm:p-0
            `}
        >
            <Link href='/'>
                <Image
                    src={logo}
                    alt="Logo Comando 081"
                    width={190}
                    height={59}
                    style={{minWidth: "150px"}}
                />
            </Link>
        </div>
    )
}