import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styled from "styled-components";
import { device } from "../ui/devices";

const StyledSwiperContainer = styled.div`
	display: flex;

	width: 100%;
	height: 100%;
	margin: auto;
	gap: 1rem;

	@media screen and (${device.mobileL}) {
		flex-direction: column;
	}

	/* Style the main Swiper */
	.mySwiper2 {
		height: 100%;
		width: 80%;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

		@media screen and (${device.mobileL}) {
			width: 100%;
		}
	}

	/* Style the thumbnails */
	.mySwiper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;

		@media screen and (${device.mobileL}) {
			width: 100%;
			flex-direction: row;
			height: 20%;
		}
	}

	.swiper-slide {
		border-radius: 5px;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;

		&:hover {
			transform: scale(1.1);
		}
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0;
	}

	/* Navigation Buttons */
	.swiper-button-next,
	.swiper-button-prev {
		color: white;
		padding: 4rem;
		border-radius: 50%;
		transition: 0.3s;

		&:hover {
			background: #0000004c;
		}
	}

	.custom-next,
	.custom-prev {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		font-size: 24px;
		color: white;
		background: rgba(0, 0, 0, 0.6);
		padding: 10px;
		border-radius: 50%;
		z-index: 10;
		transition: background 0.3s;

		&:hover {
			background: rgba(255, 255, 255, 0.8);
			color: black;
		}
	}

	/* Pagination (if used) */
	.swiper-pagination-bullet {
		background: white;
	}

	.swiper-slide-thumb-active {
		border: 5px solid var(--color-primary-400);
		transition: border 0.4s ease-in-out, transform 0.4s ease-in-out,
			opacity 0.3s ease-in-out;
		border-radius: 10px;
	}
`;
export default function App({ imageUrls }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<StyledSwiperContainer>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2 "
			>
				{imageUrls.map((images, index) => (
					<SwiperSlide>
						<img
							src={images.propertyImage}
							alt="property-images"
							key={images.id}
							active={index === images.currentIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={window.innerWidth <= 500 ? 3 : 4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				direction={window.innerWidth <= 500 ? "horizontal" : "vertical"}
				className="mySwiper right-container-arrow"
			>
				{imageUrls.map((images, index) => (
					<SwiperSlide>
						<img
							src={images.propertyImage}
							alt="property-images"
							key={images.id}
							active={index === images.currentIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</StyledSwiperContainer>
	);
}
