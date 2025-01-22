import React from "react";
import { HiArrowCircleRight, HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

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

	opacity: 0;
	transform: translateY(100px);
`;

const PropertyCardImageContainer = styled.div`
	width: 100%;
	position: relative;

	img {
		width: 100%;
	}
`;

const PropertyCardDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: 1.1rem;

		p {
			font-size: 1.1rem;
		}
	}

	p {
		font-size: 1.4rem;
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

	grid-area: 1 / 1 / 2 / 3;

	button {
		background-color: var(--color-primary-300);
		color: var(--color-grey-0);
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		border: none;
		cursor: pointer;
	}

	a {
		cursor: pointer;
	}
`;

gsap.registerPlugin(useGSAP);

const PropertiesContent = () => {
	const navigate = useNavigate();

	useGSAP(() => {
		gsap.to(`${PropertyCard}`, {
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

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
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a onClick={() => navigate("/properties/1")}>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
				<PropertyCard>
					<PropertyCardImageContainer>
						<img src="/property-1.png" alt="" />
						<SpanArrow>
							<HiArrowCircleRight />
						</SpanArrow>
					</PropertyCardImageContainer>
					<PropertyCardDetails>
						<div>
							<h3>Property Name</h3>
							<p>Property price</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
							esse nemo corrupti.
						</p>
						<CardButton>
							<a>View more &rarr;</a>
							<button>
								<HiEye />
							</button>
						</CardButton>
					</PropertyCardDetails>
				</PropertyCard>
			</PropertyCardContainer>
		</PropertyStyle>
	);
};

export default PropertiesContent;
