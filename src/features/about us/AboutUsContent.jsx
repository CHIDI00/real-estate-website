import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HiCheckCircle } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
	AboutStyle,
	Heading,
	ReasonToChooseContainer,
	ImageContainer,
	ContentContainer,
	InnerContentContainer,
	TextContent,
	TimelineContainer,
	Step,
	Circle,
	Content,
	Spans,
} from "./AboutUIs";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

	const stepRef = useRef(null);
	const headingRef = useRef(null);
	const sectionRef = useRef(null);

	useGSAP(() => {
		gsap.to(`${ImageContainer}`, {
			clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
			opacity: 1,
			y: 0,
			duration: 3,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	useGSAP(() => {
		gsap.to(`${InnerContentContainer}, ${Heading}, ${Step} `, {
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	// useGSAP(() => {
	// 	if (!sectionRef.current || !headingRef.current || !stepRef.current) return;

	// 	gsap.fromTo(
	// 		[headingRef.current, stepRef.current], // Elements to animate
	// 		{ opacity: 0, y: 50 }, // Initial state
	// 		{
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: 1.5,
	// 			stagger: 0.3,
	// 			ease: "power4.out",

	// 			scrollTrigger: {
	// 				trigger: sectionRef.current, // Element that triggers animation
	// 				start: "top 80%", // When to start (adjust as needed)
	// 				end: "top 30%", // When to end (optional)
	// 				toggleActions: "play none none none", // Play only once
	// 			},
	// 		}
	// 	);
	// }, [sectionRef]);

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
						<HiCheckCircle
							style={{ color: "var(--color-primary-300)", fontSize: "8rem" }}
						/>
						<TextContent>
							<p>Best Price</p>
							<p>
								We pride ourselves on offering the best prices for premium
								properties in the market.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle
							style={{ color: "var(--color-primary-300)", fontSize: "8rem" }}
						/>
						<TextContent>
							<p>High-Quality Standards</p>
							<p>
								Property featured on our platform undergoes rigorous quality
								checks to meet the standards.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle
							style={{ color: "var(--color-primary-300)", fontSize: "8rem" }}
						/>
						<TextContent>
							<p>Local market Insights</p>
							<p>
								Using our expertise and knowledge, we guide our clients through
								the property search process.
							</p>
						</TextContent>
					</InnerContentContainer>
					<InnerContentContainer>
						<HiCheckCircle
							style={{ color: "var(--color-primary-300)", fontSize: "8rem" }}
						/>
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

			<Heading>
				Booking you home <br /> now made{" "}
				<span>
					<em>easy</em>
				</span>
				.
			</Heading>

			<TimelineContainer ref={sectionRef}>
				{steps.map((step, index) => (
					<Step
						ref={stepRef}
						key={index}
						className={index % 2 === 0 ? "left-container" : "right-container"}
					>
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
							<Spans
								className={
									index % 2 === 0
										? "left-container-arrow"
										: "right-container-arrow"
								}
							></Spans>
						</Content>
					</Step>
				))}
			</TimelineContainer>
		</AboutStyle>
	);
};

export default AboutUsContent;
