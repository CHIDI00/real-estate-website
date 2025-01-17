import React from "react";
import styled from "styled-components";

const PropertyStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75rem;
	padding-top: 75px;
	gap: 2rem;
	background-color: transparent;
`;

const PropertyStyleTitle = styled.div`
	font-size: 5rem;
	text-align: center;
	color: var(--color-grey-0);
`;

const PropertyCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	gap: 3rem;
	border: 1px solid #fff;
`;

const PropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40rem;
	gap: 1rem;
	background-color: var(--color-grey-0);
	color: #000;
	border-radius: 2rem;
	padding: 2rem;
	border: 1px solid #fff;
`;

const PropertyCardImageContainer = styled.div`
	width: 100%;

	img {
		width: 100%;
	}
`;

const PropertyCardDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	/* gap: 1rem; */

	h3 {
		grid-area: 1 / 1 / 2 / 2;
	}
	p {
		grid-area: 1 / 2 / 2 / 3;
	}
	p:last-child {
		grid-area: 2 / 1 / 3 / 3;
	}
`;
const PropertiesContent = () => {
	return (
		<PropertyStyle>
			<PropertyStyleTitle>Featured Properties</PropertyStyleTitle>
			<PropertyCardContainer>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<h3>Property Name</h3>
						<p>Property price</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti repellendus possimus cum dicta aperiam,
							consequuntur voluptatem voluptate!
						</p>
					</PropertyCardDetails>
				</PropertyCard>
			</PropertyCardContainer>
		</PropertyStyle>
	);
};

export default PropertiesContent;
