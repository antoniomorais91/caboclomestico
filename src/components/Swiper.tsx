import React, { CSSProperties } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Image from 'next/image'
import slider1 from '../../public/slider/01.webp'
import slider2 from '../../public/slider/02.webp'
import slider3 from '../../public/slider/03.webp'
import slider4 from '../../public/slider/04.webp'
import slider5 from '../../public/slider/05.webp'
import slider6 from '../../public/slider/06.webp'
import slider7 from '../../public/slider/07.webp'
import slider8 from '../../public/slider/08.webp'
import slider9 from '../../public/slider/09.webp'
import slider10 from '../../public/slider/10.webp'
import slider11 from '../../public/slider/11.webp'
import slider12 from '../../public/slider/12.webp'
import slider13 from '../../public/slider/13.webp'
import slider14 from '../../public/slider/14.webp'
import slider15 from '../../public/slider/15.webp'
import slider16 from '../../public/slider/16.webp'


export default function SwiperComponent() {
    return (
        <div>
            <Swiper className={`
                relative flex justify-center items-center
                w-[86vw] h-[86vh]
                cursor-grab
            `}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                style={{
                    "--swiper-pagination-color": "#04C4D9",
                    "--swiper-theme-color": "#04C4D9",
                } as CSSProperties}
            >
                <SwiperSlide>
                    <Image
                        src={slider1}
                        alt="Alê Maia, Hamilton Tenório e Roberto Patrício em frente a Rural."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider2}
                        alt="Roberto Patrício, Alê Maia e Hamilton Tenório com os rostos cobertos respectivamente, por um trompete, um chápeu preto e um machine."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider3}
                        alt="Hamilton Tenório Alê Maia e Roberto Patrício de frente com uma arvóre como plano de fundo."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider4}
                        alt="Arnaldo do Monte, Alê Maia, Hamilton Tenório e Roberto Patrício no meio da rua."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider5}
                        alt="Hamilton Tenório, Arnaldo do Monte, Roberto Patrício e Alê Maia no meio da floresta."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider6}
                        alt="Alê Maia e Roberto Patrício de perfil com várias palmeiras de fundo."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider7}
                        alt="Hamilton Tenório, Alê Maia, Roberto Patrício, Arnaldo do Monte e o ilú, em frente a um lago."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider8}
                        alt="Hamilton Tenório, Arnaldo do Monte, Alê Maia e Roberto Patrício, na rua do Bom Jesus no Recife Antigo."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider9}
                        alt="Roberto Patrício, Arnaldo do Monte, Alê Maia e Hamilton Tenório com os instrumentos na frente e a floresta de fundo."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider10}
                        alt="Alê Maia, Hamilton Tenório, Arnaldo do Monte e Roberto Patrício e de fundo um gramado verde."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider11}
                        alt="Alê Maia cantando e Hamilton Tenório na guitarra com a banda de fundo no show do caboclo mestiço."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider12}
                        alt="Alê Maia cantando e Hamilton Tenório na guitarra com a banda de fundo no show do caboclo mestiço."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider13}
                        alt="Alê Maia cantando e Hamilton Tenório na guitarra com a banda de fundo no show do caboclo mestiço na sede do alafin oyo."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider14}
                        alt="Alê Maia cantando e Hamilton Tenório na guitarra com a banda de fundo no show do caboclo mestiço no Pernambuco Lo-Fi."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider15}
                        alt="Roberto Patrício, Alê Maia, Arnaldo do Monte e Hamilton Tenório tocando num barco na praia."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider16}
                        alt="Hamilton Tenório, Roberto Patrício, Alê Maia e Arnaldo do Monte tocando num barco no mar."
                        className='w-full h-full block object-cover'
                        loading="lazy"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}