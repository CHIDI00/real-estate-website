import React from "react";
import styled from "styled-components";
import ImageSlider from "../../ui/ImageSlider";
import ShortLetImageSlider from "./ShortLetImageSlider";

const ShortletDetailStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 75px;
	gap: 3rem;
	background-color: transparent;
`;

const ShortletImage = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.9rem;
	width: 85%;
	height: 50rem;
	border-radius: 8px;
`;

const ShortLetDetails = () => {
	const imageUrls = [
		{
			id: 1,
			propertyImage: "/property-1.png",
		},
		{
			id: 2,
			propertyImage: "/property-2.png",
		},
		{
			id: 3,
			propertyImage: "/property-3.png",
		},
		{
			id: 4,
			propertyImage: "/property-4.png",
		},
		{
			id: 5,
			propertyImage: "/property-5.png",
		},
	];
	return (
		<ShortletDetailStyle>
			<ShortletImage>
				<ShortLetImageSlider imageUrls={imageUrls} />
			</ShortletImage>
		</ShortletDetailStyle>
	);
};

export default ShortLetDetails;
