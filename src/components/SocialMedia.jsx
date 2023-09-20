import { IconFace, IconInsta, IconWpp, IconYou, IconSpot, IconSound, IconDeezer, IconTik, IconPint, IconTwitter } from "@/icons/Index"
import MediaItem from '@/components/MediaItem'

export default function SocialMedia() {
    return (
        <div
            className={`
                grid grid-cols-11 gap-2 py-4 h-16
                justify-items-center text-[#f3f3f3]
                lg:grid-cols-11 lg:h-16
                md:grid-cols-6 md:grid-rows-2 md:h-28 md:py-2
                sm:grid-cols-6 sm:grid-rows-2 sm:h-32 sm:py-0
                xsm:grid-cols-3 xsm:grid-rows-3 xsm:h-48 
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
            <MediaItem icon={IconTwitter} title="Clique aqui e acesse o nosso Twitter" url="https://twitter.com/CMestico"/>
            <MediaItem icon={IconFace} title="Clique aqui e acesse o nosso Facebook!" url="https://www.facebook.com/caboclo.mestico.9"/>
            <MediaItem icon={IconWpp} title="Clique aqui e nos mande uma mensagem no Whatsapp!" url="https://api.whatsapp.com/send?phone=5581998969399&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20do%20Caboclo%20Mesti%C3%A7o..."/>
        </div>
    )
}