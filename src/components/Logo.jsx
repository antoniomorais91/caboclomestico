import Image from "next/image";
import Link from "next/link";

import logo from "../../public/caboclo.png"

export default function Logo() {
    return (
        <div
            className={`
                flex items-center justify-center p-2
                lg:w-fit md:px-6 sm:px-6 xsm:px-8
            `}
        >
            <Link href='/'>
                <Image
                    src={logo}
                    alt="Logo Caboclo Mestiço"
                    width={190}
                    height={190}
                    style={{minWidth: "150px"}}
                />
            </Link>
        </div>
    )
}