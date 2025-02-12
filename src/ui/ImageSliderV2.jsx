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

const StyledSwiperContainer = styled.div`
	display: flex;

	width: 100%;
	/* max-width: 800px; */
	height: 100%;
	margin: auto;
	gap: 1rem;

	/* Style the main Swiper */
	.mySwiper2 {
		height: 100%;
		width: 80%;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	}

	/* Style the thumbnails */
	.mySwiper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;
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
		border-radius: 5px;
	}

	/* Navigation Buttons */
	.swiper-button-next,
	.swiper-button-prev {
		color: white;
		background: rgb(255, 0, 0);
		padding: 10px;
		border-radius: 50%;
		transition: 0.3s;

		&:hover {
			background: black;
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

	.custom-next {
		right: 5px; /* Adjust position */
	}

	.custom-prev {
		left: 5px; /* Adjust position */
	}

	/* Pagination (if used) */
	.swiper-pagination-bullet {
		background: white;
	}
`;

export default function ImageSlider({ imageUrls }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const swiperRef = useRef(null);

	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};

	return (
		<StyledSwiperContainer>
			<Swiper
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
					width: "100%",
					height: "100%",
				}}
				spaceBetween={10}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2"
			>
				<SwiperSlide>
					<img src={imageUrls[currentIndex].propertyImage} alt="" />
				</SwiperSlide>
				<div className="custom-next" onClick={handleNext}>
					➡️
				</div>
				<div className="custom-prev" onClick={handlePrev}>
					⬅️
				</div>
			</Swiper>

			<Swiper
				direction="vertical"
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
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
