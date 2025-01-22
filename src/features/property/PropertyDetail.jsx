import React from "react";
import styled from "styled-components";

const PropertyDetailStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 75px;
	gap: 2rem;
	background-color: transparent;
`;

const PropertyImage = styled.div`
	width: 70%;
	height: 50rem;

	img {
		width: 100%;
		height: 100%;
	}
`;
const PropertyDetail = () => {
	return (
		<PropertyDetailStyle>
			<PropertyImage>
				<img src="/property-5.png" alt="" />
			</PropertyImage>
		</PropertyDetailStyle>
	);
};

export default PropertyDetail;
