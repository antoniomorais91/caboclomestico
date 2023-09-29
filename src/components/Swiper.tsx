import React, { CSSProperties } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Image from 'next/image'
import slider1 from '../../public/slider/01.jpg'
import slider2 from '../../public/slider/02.jpg'
import slider3 from '../../public/slider/03.jpg'
import slider4 from '../../public/slider/04.jpg'
import slider5 from '../../public/slider/05.jpg'
import slider6 from '../../public/slider/06.jpg'
import slider7 from '../../public/slider/07.jpg'
import slider8 from '../../public/slider/08.jpg'
import slider9 from '../../public/slider/09.jpg'
import slider10 from '../../public/slider/10.jpg'
import slider11 from '../../public/slider/11.jpg'
import slider12 from '../../public/slider/12.jpg'
import slider13 from '../../public/slider/13.jpg'
import slider14 from '../../public/slider/14.jpg'
import slider15 from '../../public/slider/15.jpg'
import slider16 from '../../public/slider/16.jpg'


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
                        alt="Jogador de Paintball de frente, equipado de roupa e máscara, empunhando um marcador."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider2}
                        alt="Jogador de Paintball mirando, posicionado com marcador em mãos."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider3}
                        alt="Vários jogadores invadindo e cobrindo uma área."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider4}
                        alt="Jogador profissional posicionado atrás do bunker."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider5}
                        alt="Jogador empunhando marcador avançando de frente."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider6}
                        alt="Jogador atirando atrás de obstaculo de pneus."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider7}
                        alt="Jogador mirando atrás de uma árvore."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider8}
                        alt="Grupo de jogadores reunidos para foto dos times juntos."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider9}
                        alt="Jogadora empunhando na mão direita um marcador réplica, vestida de macacão com capuz e colete."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider10}
                        alt="Jogador mirando atrás de coluna, com macacão, capuz e colete."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider11}
                        alt="Jogadora deitada no chão observando, equipada com macacão, máscara e marcador."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider12}
                        alt="Jogador do meio do campo andando sorrateiro, próximo a um carretel de fios enorme."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider13}
                        alt="Jogador do meio do campo andando sorrateiro, próximo a um carretel de fios enorme."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider14}
                        alt="Jogador do meio do campo andando sorrateiro, próximo a um carretel de fios enorme."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider15}
                        alt="Jogador do meio do campo andando sorrateiro, próximo a um carretel de fios enorme."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={slider16}
                        alt="Jogador do meio do campo andando sorrateiro, próximo a um carretel de fios enorme."
                        className='w-full h-full block object-cover'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}