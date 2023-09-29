// @ts-nocheck
import Swiper from "../components/Swiper";

export default function SwiperOff() {
  return (
    <div
      className="modal fade"
      id="fotos"
      tabIndex="-1"
      aria-labelledby="Fotos"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-backdrop-opacity">
        <div className="modal-content bg-gray-950/[.07]">
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
          <div className="modal-body flex items-center justify-center">
            <Swiper></Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
