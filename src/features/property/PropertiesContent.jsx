import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import styled from "styled-components";

const PropertyStyle = styled.div`
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

const PropertyStyleTitle = styled.div`
	font-size: 5rem;
	text-align: center;
	color: var(--color-grey-0);
`;

const PropertyCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 100%;
	gap: 2rem;
`;

const PropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40rem;
	gap: 0.7rem;
	background-color: var(--color-grey-200);
	color: #000;
	border-radius: 2rem;
	padding: 1.1rem;
`;

const PropertyCardImageContainer = styled.div`
	width: 100%;
	position: relative;

	img {
		width: 100%;
	}
`;

const PropertyCardDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2rem;

	h3 {
		grid-area: 1 / 1 / 2 / 2;
		font-size: 1.3rem;
	}
	p {
		grid-area: 1 / 2 / 2 / 3;
		font-size: 1.3rem;
	}
	p:last-child {
		grid-area: 2 / 1 / 3 / 3;
	}
`;

const SpanArrow = styled.span`
	position: absolute;
	top: 50%;
	left: 20%;
`;

const CardButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	grid-area: 3 / 1 / 4 / 3;
`;
const PropertiesContent = () => {
	return (
		<PropertyStyle>
			<PropertyStyleTitle>Featured Properties</PropertyStyleTitle>
			<PropertyCardContainer>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<h3>Property Name</h3>
						<p>Property price</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<button>View more</button>
							<button>Inspect</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
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
