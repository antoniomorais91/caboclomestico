import { Questrial } from "next/font/google";
import Logo from "@/components/Logo";
import Album from "@/components/Album";
import Download from "@/components/Download";
import Letras from "@/components/Letras";
import FichaTecnica from "@/components/FichaTecnica";
import Info from "@/components/Info";
import SocialMedia from "@/components/SocialMedia";
import SwiperOff from '@/components/SwiperOff'
import Clipping from "@/components/Clipping";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Head from "next/head";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${questrial.className}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Caboclo Mestiço - Sistema Sonoro" />
        <meta property="og:title" content="Caboclo Mestiço" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caboclomestico.netlify.app/" />
        <meta
          property="og:image"
          content="https://caboclomestico.netlify.app/sistema_sonoro_thumbnail.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://caboclomestico.netlify.app/sistema_sonoro_thumbnail.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <meta
          property="og:image:alt"
          content="Miniatura Caboclo Mestiço."
        />
        <meta property="og:site_name" content="Caboclo Mestiço" />
        <meta property="og:description" content="Sistema Sonoro" />
        <meta property="fb:admins" content="100061529107543" />
        <meta name="author" content="Vini Morais" />
        <title>Caboclo Mestiço - Sistema Sonoro</title>
      </Head>
      <main>
        <div
          className={`
                    flex flex-col items-center justify-center
                  `}
        >
          <div className="p-2 pt-4">
            <Logo />
          </div>
          <div className="p-2 pt-6">
            <Album />
          </div>
          <Letras />
          <FichaTecnica />
          <Download />
          <Info />
          <SocialMedia />
          <SwiperOff />
          <Clipping />
          <Contato />
          <Footer />
        </div>
      </main>
    </div>
  );
}
