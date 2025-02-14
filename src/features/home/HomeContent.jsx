import styled from "styled-components";
import Button from "../../ui/Button";
import { device } from "../../ui/devices";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { HiArrowCircleRight, HiEye, HiHeart } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(useGSAP);

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 70px;
	gap: 2rem;
	background-color: transparent;

	@media screen and (${device.tablet}) {
		justify-content: flex-start;
		align-items: center;
		padding-top: 20px;
		gap: 0;
	}
	@media screen and (${device.mobileL}) {
		padding-top: 60px;
		gap: 2rem;
	}
`;

const UpperContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 20%;

	clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
	opacity: 0;
	transform: translateY(100px);

	@media screen and (${device.tablet}) {
		height: 30%;
	}

	@media screen and (${device.mobileL}) {
		flex-direction: column;
		height: auto;
		gap: 1rem;
	}
`;

const UpperleftContent = styled.div`
	width: 70%;
	font-weight: 900;

	h1 {
		font-size: 5.5rem;
		line-height: 1;
	}

	h1 span {
		background: linear-gradient(
			0.25turn,
			var(--color-grey-0),
			var(--color-primary-100),
			var(--color-primary-200),
			var(--color-primary-300),
			var(--color-primary-400)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media screen and (${device.tablet}) {
		flex-direction: column;
		height: auto;
		width: 60%;

		h1 {
			font-size: 4.5rem;
		}
	}
	@media screen and (${device.mobileL}) {
		flex-direction: column;
		height: auto;
		width: 100%;
	}
`;

const UpperRightContent = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;

	p {
		text-align: right;
		font-size: 1.5rem;
	}

	@media screen and (${device.tablet}) {
		width: 45%;
	}

	@media screen and (${device.mobileL}) {
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin-top: 1rem;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 55rem;
	justify-content: center;
	align-items: center;
	background-image: url("/building-1.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 50px;
	margin-bottom: 10rem;

	opacity: 0;
	transform: translateY(200px);

	@media screen and (${device.tablet}) {
		height: 50rem;
	}
	@media screen and (${device.mobileL}) {
		height: 40rem;
	}
`;

const ImageContainerContent = styled.div`
	position: absolute;
	bottom: -30px;
	left: 15%;

	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-grey-50);
	padding: 1.2rem 2rem;
	border-radius: 20px;
	width: 70%;
	z-index: 11;

	p {
		font-size: 2rem;
		color: var(--color-grey-900);
		text-align: center;
	}

	@media screen and (${device.mobileL}) {
		bottom: -20px;
		left: 15%;
		background-color: var(--color-brand-90);
		p {
			font-size: 1.5rem;
			color: var(--color-grey-50);
		}
	}
`;

///////
const PropertyCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	width: 100%;
	gap: 2rem;

	@media screen and (${device.tablet}) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (${device.mobileL}) {
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
`;

const PropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 35rem;

	gap: 0.7rem;
	background-color: var(--color-grey-200);
	color: #000;
	border-radius: 2.5rem;
	padding: 1rem;

	opacity: 0;
	transform: translateY(100px);

	@media screen and (${device.mobileL}) {
		max-width: 40rem;

		gap: 0.5rem;
		border-radius: 1.6rem;
		padding: 0.5rem;
	}
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

	@media screen and (${device.mobileL}) {
		gap: 0.7rem;

		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			font-size: 1rem;

			p {
				font-size: 1rem;
			}
		}

		p {
			font-size: 1.1rem;
		}
	}
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

	@media screen and (${device.mobileL}) {
		button {
			padding: 0.5rem 1rem;
			border-radius: 1.5rem;
			font-size: 1.5rem;
		}

		a {
			font-size: 1.2rem;
		}
	}
`;

/////
const PeakOnProperty = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const PeakOnPropertyContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 10rem;
	margin-bottom: 2rem;

	h1 {
		font-size: 5rem;
		width: 50%;
		line-height: 1;
	}
	h1 span {
		color: var(--color-primary-400);
	}
	p {
		width: 50%;
	}
`;

const HomeImageContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 45rem;
	gap: 1rem;
`;

const LeftImageContainer = styled.div`
	position: relative;
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("/property-3.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
`;

const LeftImageContainerContent = styled.div`
	position: absolute;
	left: 15%;
	bottom: 20px;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	background-color: #ecf5fcbd;
	backdrop-filter: blur(10px);
	border-radius: 5px;
	padding: 1rem;
`;

const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 3rem;
	color: var(--color-primary-300);

	p {
		font-size: 3rem;
		font-weight: 900;
		color: var(--color-primary-300);
	}
`;

const LocationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	color: #000;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	text-transform: capitalize;

	div {
		width: 40%;
	}

	div:last-child {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 60%;
		gap: 1rem;

		p {
			text-align: center;
		}
	}
`;

const RightImageContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
`;

const TopContainerImage = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50%;
	gap: 1rem;

	div {
		position: relative;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		background-image: url("/property-4.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 10px;
	}

	div:last-child {
		background-image: url("/property-1.png");
	}
`;

const BottomContainerImage = styled.div`
	position: relative;
	width: 100%;
	height: 50%;
	justify-content: center;
	align-items: center;
	background-image: url("/property-2.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
`;

const HomeContent = () => {
	useEffect(() => {
		gsap.to(`${UpperContent}`, {
			clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
			opacity: 1,
			y: 0,
			duration: 3,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	useEffect(() => {
		gsap.to(`${ImageContainer}`, {
			opacity: 1,
			y: 0,
			duration: 2,
			ease: "power4.inOut",
		});
	}, []);

	const propertyData = [
		{
			id: 1,
			name: "Property Name",
			price: "Property price",
			propertyImage: "/property-1.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse ",
		},
		{
			id: 2,
			name: "Property Name",
			price: "Property price",
			propertyImage: "/property-2.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse ",
		},
		{
			id: 2,
			name: "Property Name",
			price: "Property price",
			propertyImage: "/property-2.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse ",
		},
		{
			id: 2,
			name: "Property Name",
			price: "Property price",
			propertyImage: "/property-2.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse ",
		},
		{
			id: 2,
			name: "Property Name",
			price: "Property price",
			propertyImage: "/property-2.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse ",
		},
	];

	useGSAP(() => {
		gsap.to(`${PropertyCard}`, {
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<HomeStyle>
			<UpperContent>
				<UpperleftContent>
					<h1>Helping you</h1>
					<h1>
						to find the <span>perfect home</span>
					</h1>
				</UpperleftContent>

				<UpperRightContent>
					<p>
						Explore a curated selection of urban properties tailored to your
						lifestyle. Begin your search today and embark on the journey to
						urban living at its finest.
					</p>
					<ButtonContainer>
						<Button size="medium" variation="primary">
							Explore More
						</Button>
						<Button size="medium" variation="transparent">
							Watch Demo
						</Button>
					</ButtonContainer>
				</UpperRightContent>
			</UpperContent>

			<ImageContainer>
				<ImageContainerContent className="box">
					<p>Invest in your future property</p>
				</ImageContainerContent>
			</ImageContainer>

			<PeakOnProperty>
				<PeakOnPropertyContent>
					<h1>
						Discover your perfect <span>property match</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at
						dolorum laboriosam voluptates dolorem eveniet fugit unde ipsa
						asperiores perspiciatis quasi culpa, rerum ab iste sapiente nulla
						voluptatum repellendus harum.
					</p>
				</PeakOnPropertyContent>

				<HomeImageContainer>
					<LeftImageContainer>
						<LeftImageContainerContent>
							<PriceContainer>
								<p>$200,000</p>
								<HiArrowCircleRight />
							</PriceContainer>
							<LocationContainer>
								<div>20, phase 2, Lekki, Lagos State.</div>
								<div>
									<p>3 Bedroom</p>
									<p>4 Bathroom</p>
									<p>4 Toilet</p>
								</div>
							</LocationContainer>
						</LeftImageContainerContent>
					</LeftImageContainer>
					<RightImageContainer>
						<TopContainerImage>
							<div>
								<HiHeart
									style={{
										position: "absolute",
										top: "10px",
										right: "10px",
										color: "#ccc",
										fontSize: "25px",
										padding: "4px",
										borderRadius: "50%",
										backgroundColor: "#fffcfc76",
									}}
								/>
							</div>
							<div>
								<HiHeart
									style={{
										position: "absolute",
										top: "10px",
										right: "10px",
										color: "#ccc",
										fontSize: "25px",
										padding: "4px",
										borderRadius: "50%",
										backgroundColor: "#fffcfc76",
									}}
								/>
							</div>
						</TopContainerImage>
						<BottomContainerImage>
							<HiHeart
								style={{
									position: "absolute",
									top: "10px",
									right: "10px",
									color: "#ccc",
									fontSize: "25px",
									padding: "4px",
									borderRadius: "50%",
									backgroundColor: "#fffcfc76",
								}}
							/>
						</BottomContainerImage>
					</RightImageContainer>
				</HomeImageContainer>
			</PeakOnProperty>
		</HomeStyle>
	);
};

export default HomeContent;
