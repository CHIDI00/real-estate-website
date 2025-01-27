import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import styled from "styled-components";

gsap.registerPlugin(useGSAP);

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	opacity: 0;
	transform: translateX(-100);

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 8px;
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
const ImageSlider = ({ imageUrls }) => {
	const [currentIndex, setCurrentIndex] = useState(1);

	const next = () => {
		setCurrentIndex((state) => (state += 1));
		if (currentIndex === imageUrls.length - 1) setCurrentIndex(0);
	};

	const prev = () => {
		setCurrentIndex((state) => (state -= 1));
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
		<ImageContainer>
			<img src={imageUrls[currentIndex].propertyImage} alt="" />
			{currentIndex > 0 && (
				<LeftArrow onClick={next}>
					<HiArrowLeft />
				</LeftArrow>
			)}

			<LeftRight onClick={prev}>
				<HiArrowRight />
			</LeftRight>
		</ImageContainer>
	);
};

export default ImageSlider;
