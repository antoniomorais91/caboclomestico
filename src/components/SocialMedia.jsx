import { IconFace, IconInsta, IconYou, IconSpot, IconSound, IconDeezer, IconTik, IconPint } from "@/icons/Index"
import MediaItem from '@/components/MediaItem'

export default function SocialMedia() {
    return (
        <div
            className={`
                grid grid-cols-8 gap-2 py-4 h-16
                justify-items-center text-[#f3f3f3]
                lg:grid-cols-8 lg:h-16
                md:grid-cols-8 md:h-20 md:py-2
                sm:grid-cols-4 sm:grid-rows-2 sm:h-48 sm:px-6
                xsm:grid-cols-4 xsm:grid-rows-2 xsm:h-48 xsm:px-6 
            `}
        >
            <MediaItem icon={IconYou} title="Clique aqui e acesse o nosso Canal do Youtube!" url="https://www.youtube.com/@CabocloMestico"/>
            <MediaItem icon={IconSpot} title="Clique aqui e acesse o nosso Spotify!" url="https://open.spotify.com/artist/2e277o12ne8oPXMUE4JxG4"/>
            <MediaItem icon={IconDeezer} title="Clique aqui e acesse o nosso Deezer!" url="https://deezer.page.link/bQE5ujyQYfycFdoX8"/>
            <MediaItem icon={IconSound} title="Clique aqui e acesse o nosso SoundCloud!" url="https://soundcloud.com/caboclomestico"/>
            <MediaItem icon={IconInsta} title="Clique aqui e acesse o nosso Instagram!" url="https://www.instagram.com/caboclo.mestico"/>
            <MediaItem icon={IconTik} title="Clique aqui e acesse o nosso TikTok!" url="https://tiktok.com/@caboclo_mestico"/>
            <MediaItem icon={IconFace} title="Clique aqui e acesse o nosso Facebook Oficial!" url="https://www.facebook.com/caboclomesticooficial"/>
            <MediaItem icon={IconPint} title="Clique aqui e acesse o nosso Pinterest!" url="https://br.pinterest.com/caboclomestico/"/>
        </div>
    )
}