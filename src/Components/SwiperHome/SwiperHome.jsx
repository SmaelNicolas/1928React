import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "./swiperHome.css";

export const SwiperHome = () => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className='mySwiper'
		>
			<SwiperSlide>
				<img
					src='https://www.anahuac.mx/mexico/sites/default/files/noticias/Los-colores-que-utilizamos-en-la-ropa-dicen-como-somos.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://www.anahuac.mx/mexico/sites/default/files/noticias/Los-colores-que-utilizamos-en-la-ropa-dicen-como-somos.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg'
					alt=''
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='https://www.anahuac.mx/mexico/sites/default/files/noticias/Los-colores-que-utilizamos-en-la-ropa-dicen-como-somos.jpg'
					alt=''
				/>
			</SwiperSlide>
		</Swiper>
	);
};
