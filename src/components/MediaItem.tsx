import Link from "next/link"
import { ReactNode } from "react"

interface PropsMediaItem {
    url: string
    title: string
    icon: ReactNode
}

export default function MediaItem(props: PropsMediaItem) {
    function renderLink() {
        return (
            <a
                target="_blank"
                title={props.title}
                className={`
                p-1 m-1 mx-4 duration-300 
                hover:scale-125 hover:text-[#04C4D9]
            `}>
                {props.icon}
            </a>
        )
    }

    return (
        <Link
            legacyBehavior href={props.url}
        >
            {renderLink()}
        </Link>
    )
}