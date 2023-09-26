import { Questrial } from "next/font/google";
import Logo from "../components/Logo";
import Album from "@/components/Album";
import Download from "@/components/Download";
import Letras from "@/components/Letras";
import FichaTecnica from '@/components/FichaTecnica'
import Info from "@/components/Info";
import SocialMedia from "@/components/SocialMedia";
import Clipping from "@/components/Clipping";
import Footer from "@/components/Footer";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={`${questrial.className}`}>
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
        <Clipping />
        <Footer />
      </div>
    </main>
  );
}
