// @ts-nocheck
import Image from "next/image";
import logo from "../../public/caboclo.webp"

export default function Contato() {
  return (
    <div
      className="modal fade"
      id="contato"
      tabIndex="-1"
      aria-labelledby="Contato"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-backdrop-opacity">
        <div className="modal-content bg-gray-950/[0.9]">
          <div className="modal-header bg-[#3c0c64] border-none flex justify-center">
            <a
              href="#"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="uppercase text-[#04C4D9] hover:text-[#f29f05]"
            >
              <small>fechar</small>
            </a>
          </div>
          <div
            className={`
            modal-body flex flex-col items-center gap-7 justify-center
            text-center text-[#04C4D9]   
            `}
          >
            <Image
                    src={logo}
                    alt="Logo Caboclo Mestiço"
                    width={120}
                    height={120}
                    style={{minWidth: "110px"}}
                />
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="uppercase text-lg text-[#f29f05]">E-mail</h1>
              <a
                href="mailto:caboclomestico@gmail.com"
                className="hover:text-[#7922f2] duration-300 hover:scale-110"
                title="Clique aqui e nos envie um e-mail, entraremos em contato o mais breve possível!"
              >
                <p className="text-base">caboclomestico@gmail.com</p>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="uppercase text-lg text-[#f29f05]">
                Fone / Whatsapp
              </h1>
              <a
                href="https://api.whatsapp.com/send?phone=5581998969399&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20do%20Caboclo%20Mesti%C3%A7o..."
                title="Clique aqui e nos mande uma mensagem no Whatsapp!"
                className="hover:text-[#7922f2] duration-300 hover:scale-110"
              >
                <p className="text-base">Alê Maia (81) 998969399</p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5581995058857&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20do%20Caboclo%20Mesti%C3%A7o..."
                title="Clique aqui e nos mande uma mensagem no Whatsapp!"
                className="hover:text-[#7922f2] duration-300 hover:scale-110"
              >
                <p className="text-base">Hamilton Tenório (81) 995058857</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
