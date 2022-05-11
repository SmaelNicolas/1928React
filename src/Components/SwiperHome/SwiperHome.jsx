import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "./swiperHome.css";
import getProductsSlider from "../../Firebase/getDataSlider";
import { Loader } from "../Loader/Loader";

export const SwiperHome = () => {
	const [data, setData] = useState();
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		getProductsSlider(setData, setLoader);
	}, [loader]);

	return loader ? (
		<Loader />
	) : (
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
			{data.map((photo) => (
				<SwiperSlide key={photo.id}>
					<img
						src={photo.img}
						alt='slider product'
						title='Slider Image'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
