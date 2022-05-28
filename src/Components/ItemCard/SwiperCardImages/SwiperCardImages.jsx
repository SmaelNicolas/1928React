import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "../../Divider/Divider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiperCardImages.css";

// import required modules
import { Navigation } from "swiper";
import imgBack from "../../../Assets/logoBck.jpg";

export const SwiperCardImages = ({ item }) => {
	const [openModal, setOpenModal] = useState(false);
	const [imgsArray] = useState(item.img.split(" "));

	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);
	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className='swiperCardImage'
			>
				{imgsArray.map((img) => (
					<SwiperSlide className='swiperCardImageSlide' key={img}>
						<img
							className='cardImg'
							src={item.img === "logo" ? imgBack : img}
							alt={item.title}
							title={item.title.toUpperCase()}
							loading='lazy'
							onClick={handleOpen}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openModal}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openModal}>
					<Box className='boxModal'>
						<CloseIcon
							className='iconCloseModal'
							onClick={handleClose}
						/>
						<Swiper
							navigation={true}
							modules={[Navigation]}
							className='swiperCardModal'
						>
							{imgsArray.map((img) => (
								<SwiperSlide
									className='swiperCardImageSlideModal'
									key={img}
								>
									<img
										className='cardImgOnModal'
										src={
											item.img === "logo" ? imgBack : img
										}
										alt={item.title}
										title={item.title.toUpperCase()}
										loading='lazy'
										onClick={handleOpen}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<Divider />
						<div>{item.info}</div>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};
