import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import styled, { css } from "styled-components";

gsap.registerPlugin(useGSAP);

const ImageContainer = styled.div`
	width: 80%;
	height: 100%;
	/* border-radius: 8px; */
	opacity: 0;
	transform: translateX(-100);

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		/* border-radius: 8px; */
	}
`;

const LeftArrow = styled.span`
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	top: 45%;
	left: 10px;
	font-size: 3rem;
	background-color: #00000066;
	border-radius: 50%;
	padding: 1rem;

	cursor: pointer;
	z-index: 5;
`;

const LeftRight = styled.span`
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	top: 45%;
	right: 10px;
	font-size: 3rem;
	background-color: #00000066;
	border-radius: 50%;
	padding: 1rem;

	cursor: pointer;
	z-index: 5;
`;

const ImagePreview = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20%;
	height: 100%;
	gap: 0.3rem;
	overflow-y: hidden;

	img {
		width: 100%;
		height: 20%;
		object-fit: cover;

		${(props) =>
			props.active === true
				? css`
						border: 5px solid yellow;
				  `
				: css`
						border: none;
				  `}
	}
`;
const ImageSlider = ({ imageUrls }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex((state) => state + 1);
		if (currentIndex === imageUrls.length - 1) setCurrentIndex(0);
	};

	const prev = () => {
		setCurrentIndex((state) => state - 1);
		if (currentIndex === 0) setCurrentIndex(imageUrls.length - 1);
	};

	useGSAP(() => {
		gsap.to(`${ImageContainer}`, {
			opacity: 1,
			x: 0,
			duration: 2,
			ease: "power4.inOut",
		});
	}, []);

	return (
		<>
			<ImageContainer>
				<img src={imageUrls[currentIndex].propertyImage} alt="" />
				<LeftArrow onClick={next}>
					<HiArrowLeft />
				</LeftArrow>

				<LeftRight onClick={prev}>
					<HiArrowRight />
				</LeftRight>
			</ImageContainer>
			<ImagePreview>
				{imageUrls.map((images, index) => (
					<img
						src={images.propertyImage}
						alt=""
						key={images.id}
						active={index === images.currentIndex}
					/>
				))}
			</ImagePreview>
		</>
	);
};

export default ImageSlider;
