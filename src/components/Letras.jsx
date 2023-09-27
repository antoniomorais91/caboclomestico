import LetrasModals from "@/components/LetrasModals";

export default function Letras() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start bg-[#13136b]"
        // @ts-ignore
        tabIndex="-1"
        id="Letras"
        aria-labelledby="offcanvasDarkLabel"
      >
        <div className="offcanvas-header">
          <h1 className="uppercase text-[#04C4D9]" id="offcanvasDarkLabel">
            Sistema Sonoro
          </h1>
          <a
            href="#"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar"
            className="uppercase text-[#04C4D9] hover:text-[#f29f05]"
          >
            <small>Fechar</small>
          </a>
        </div>
        <div className="offcanvas-body">
          <div className="container-sm pb-4 w-50">
            <picture>
              <img
                className="img-fluid mx-auto d-block shadow-2xl shadow-black"
                src="/sistemasonoro.png"
                alt="Capa do Álbum Sistema Sonoro"
              />
            </picture>
          </div>
          <div className="grid-cols-1 pt-3 text-center">
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-01">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                01 - Chão do Mar
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-02">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                02 - Aquarela Cigana
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-03">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                03 - Santa Maria
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-04">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                04 - Águia do Sertão
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-05">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                05 - Tupiniquim
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-06">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                06 - Caboclo Mestiço
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-07">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                07 - Rua do Amanhecer
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-08">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                08 - Encruzilhada
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-09">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                09 - Alagamar
              </h1>
            </a>
            <a href="#" data-bs-toggle="modal" data-bs-target="#letras-10">
              <h1 className="p-3 text-lg uppercase text-[#04C4D9] hover:text-[#f29f05]">
                10 - Noite Sem Fim
              </h1>
            </a>
          </div>
        </div>
      </div>
      <LetrasModals />
    </div>
  );
}
