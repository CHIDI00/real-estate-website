import styled from "styled-components";
import Button from "../../ui/Button";
import { device } from "../../ui/devices";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 75rem;
	padding-top: 70px;
	gap: 2rem;
	background-color: transparent;

	@media screen and (${device.tablet}) {
		justify-content: flex-start;
		align-items: center;
		height: 100vh;
		padding-top: 20px;
		gap: 0;
	}
	@media screen and (${device.mobileL}) {
		height: 100vh;
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
	height: 70%;
	justify-content: center;
	align-items: center;
	background-image: url("/building-1.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 50px;

	opacity: 0;
	transform: translateY(200px);

	@media screen and (${device.tablet}) {
		height: 50%;
	}
	@media screen and (${device.mobileL}) {
		height: 40%;
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
		</HomeStyle>
	);
};

export default HomeContent;
