import styled from "styled-components";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HiCheckCircle } from "react-icons/hi";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);

const AboutStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Heading = styled.h2`
	font-size: 5rem;
	color: var(--color-grey-0);

	opacity: 0;
	transform: translateY(100px);

	span {
		color: var(--color-primary-300);
	}
`;

const ReasonToChooseContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4rem 0;
`;

const ImageContainer = styled.div`
	width: 40%;
	height: 40rem;
	background-image: url("/insidespace-1.png");
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 20px;

	clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
	opacity: 0;
	transform: translateY(100px);
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50%;
	gap: 2rem;
`;

const InnerContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	opacity: 0;
	transform: translateY(100px);
`;

const TextContent = styled.div`
	p {
		font-size: 3rem;
	}

	p:nth-child(2) {
		font-size: 2.5rem;
		color: var(--color-grey-400);
	}
`;

const TimelineContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 100px auto;

	&::after {
		content: "";
		position: absolute;
		width: 5px;
		height: 100%;
		background: var(--color-grey-0);
		top: 0;
		left: 50%;
		margin-left: -3px;
		z-index: -1;
	}
`;

const Step = styled.div`
	position: relative;
	padding: 10px 50px;
	width: 50%;

	opacity: 0;
	transform: translateY(100px);

	&.left-container {
		left: 0;
	}
	&.right-container {
		left: 50%;
	}
`;

const Circle = styled.div`
	background-color: var(--color-primary-300);
	color: #fff;
	font-weight: bold;
	font-size: 1.5rem;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	top: 32px;
	right: -20px;
	z-index: 10;
	position: absolute;

	&.right-container {
		left: -20px;
	}
`;

const Content = styled.div`
	padding: 20px 30px;
	background: transparent;
	position: relative;
	border-radius: 8px;
	font-size: 15px;
	color: #ffffff;
	border: 2px solid var(--color-primary-300);

	&.left-container {
		text-align: right;
	}
	&.right-container {
		text-align: left;
	}

	h2 {
		margin: 0;
		font-size: 2.5rem;
	}

	p {
		margin: 10px 0 0;
		font-size: 1.5rem;
		line-height: 1.5;
	}
`;

const Span = styled.span`
	&.left-container-arrow {
		height: 0;
		width: 0;
		position: absolute;
		top: 28px;
		z-index: 1;
		border-top: 15px solid transparent;
		border-bottom: 15px solid transparent;
		border-left: 15px solid var(--color-primary-300);
		right: -15px;
	}
	&.right-container-arrow {
		height: 0;
		width: 0;
		position: absolute;
		top: 28px;
		z-index: 1;
		border-top: 15px solid transparent;
		border-bottom: 15px solid transparent;
		border-right: 15px solid var(--color-primary-300);
		left: -15px;
	}
`;
const AboutUsContent = () => {
	const steps = [
		{
			number: 1,
			title: "Discover A Property",
			description:
				"Explore our curated selection of properties on our user-friendly website or mobile app. Utilize advanced search filters to narrow down options based on location, price range, amenities, and more.",
		},
		{
			number: 2,
			title: "Schedule A Visit",
			description:
				"Once you’ve found a property that interests you, contact our dedicated team of real estate experts to schedule a visit. Receive instant confirmation of your scheduled visit, ensuring a hassle-free experience.",
		},
		{
			number: 3,
			title: "Physical / Virtual Tour",
			description:
				"Embark on a personalized tour of your potential new home, either in person or virtually. Our knowledgeable agents will guide you through each property, providing insights and answering any questions you may have along the way.",
		},
		{
			number: 4,
			title: "Finalize The Deal",
			description:
				"Once you’ve found the perfect home, our team will assist you in finalizing the deal. From negotiating the best terms and conditions to ensuring a smooth and secure transaction process, we’ll be there to support you every step of the way.",
		},
	];

	useEffect(() => {
		gsap.to(`${ImageContainer}`, {
			clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
			opacity: 1,
			y: 0,
			duration: 3,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	useEffect(() => {
		gsap.to(`${InnerContentContainer}, ${Heading}, ${Step}`, {
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	return (
		<AboutStyle>
			<Heading>
				Why{" "}
				<span>
					<em>Choose</em>
				</span>{" "}
				Us?
			</Heading>

			<ReasonToChooseContainer>
				<ImageContainer></ImageContainer>
				<ContentContainer>
					<InnerContentContainer>
						<HiCheckCircle style={{ color: "#07d553", fontSize: "8rem" }} />
						<TextContent>
							<p>Best Price</p>
							<p>
								We pride ourselves on offering the best prices for premium
								properties in the market.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle style={{ color: "#07d553", fontSize: "8rem" }} />
						<TextContent>
							<p>High-Quality Standards</p>
							<p>
								Property featured on our platform undergoes rigorous quality
								checks to meet the standards.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle style={{ color: "#07d553", fontSize: "8rem" }} />
						<TextContent>
							<p>Local market Insights</p>
							<p>
								Using our expertise and knowledge, we guide our clients through
								the property search process.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle style={{ color: "#07d553", fontSize: "8rem" }} />
						<TextContent>
							<p>Trusted Reputation</p>
							<p>
								We have built a solid reputation for integrity, professionalism,
								and customer satisfaction.
							</p>
						</TextContent>
					</InnerContentContainer>
				</ContentContainer>
			</ReasonToChooseContainer>

			<TimelineContainer>
				{steps.map((step, index) => (
					<Step
						key={index}
						className={index % 2 === 0 ? "left-container" : "right-container"}
					>
						{/* <Line isLast={index === steps.length - 1} /> */}
						<Circle
							className={index % 2 === 0 ? "left-container" : "right-container"}
						>
							{step.number}
						</Circle>
						<Content
							className={index % 2 === 0 ? "left-container" : "right-container"}
						>
							<h2>{step.title}</h2>
							<p>{step.description}</p>
							<Span
								className={
									index % 2 === 0
										? "left-container-arrow"
										: "right-container-arrow"
								}
							></Span>
						</Content>
					</Step>
				))}
			</TimelineContainer>
		</AboutStyle>
	);
};

export default AboutUsContent;
