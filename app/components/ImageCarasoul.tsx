'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import demo1 from '@/app/assets/about.jpg'

export default function ImageCarousel() {
    const images = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
    ];

    return (
        <div className="w-full mx-auto relative h-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={200} // Negative space to overlap partially
                slidesPerView={2.2} // 2.5 means center full + halves on sides
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-90 h-120 overflow-hidden relative filter brightness-50">
                            <img
                                src={demo1.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover absolute top-0 left-0"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
