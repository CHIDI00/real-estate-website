import { HiArrowCircleRight, HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import styled from "styled-components";
import { IoBedSharp } from "react-icons/io5";
import { FaBath, FaToilet } from "react-icons/fa";

const ShortletStyle = styled.div`
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

const ShortletStyleTitle = styled.div`
	font-size: 5rem;
	text-align: center;
	color: var(--color-grey-0);
`;

const ShortletContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 100%;
	gap: 2rem;
`;

const ShortletCard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40rem;
	height: 35rem;

	gap: 0.7rem;
	background-color: var(--color-grey-200);
	color: #000;
	border-radius: 2rem;
	padding: 1.1rem;

	opacity: 0;
	transform: translateY(100px);
`;

const ShortletImageContainer = styled.div`
	width: 100%;
	position: relative;
	height: 65%;
	/* object-fit: cover; */

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
`;

const ShortletDetails = styled.div`
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

const ShortLetContent = () => {
	const navigate = useNavigate();

	useGSAP(() => {
		gsap.to(`${ShortletCard}`, {
			opacity: 1,
			y: 0,
			duration: 2,
			stagger: 0.2,
			ease: "power4.inOut",
		});
	}, []);

	const shortletData = [
		{
			id: 1,
			name: "Property Name",
			price: 40000,
			location: "Lekki, Lagos.",
			shortletImage: "/holtonhouse.jpg",
			NoOfBedroom: 3,
			NoOfToilet: 4,
			NoOfBathroom: 4,
			description: "Premium 7 bedroom flat",
		},
		{
			id: 2,
			name: "Property Name",
			price: 40000,
			location: "Lekki, Lagos.",
			shortletImage: "/property-2.png",
			NoOfBedroom: 7,
			NoOfToilet: 7,
			NoOfBathroom: 7,
			description: "Premium 7 bedroom flat",
		},
	];

	return (
		<ShortletStyle>
			<ShortletStyleTitle>Shortlets</ShortletStyleTitle>
			<ShortletContainer>
				{shortletData.map((shortlet) => (
					<ShortletCard key={shortlet.id}>
						<ShortletImageContainer>
							<img src={shortlet.shortletImage} alt="" />
						</ShortletImageContainer>
						<ShortletDetails>
							<div>
								<h3>{shortlet.description}</h3>
							</div>
							<div>
								<p>{shortlet.location}</p>
								<p>${shortlet.price}</p>
							</div>
							<div>
								<p>
									<IoBedSharp />
									{shortlet.NoOfBedroom} Bedroom
								</p>
								<p>
									<FaBath /> {shortlet.NoOfBathroom} Bathroom
								</p>
								<p>
									<FaToilet /> {shortlet.NoOfToilet} Toilet
								</p>
							</div>
							<CardButton>
								<a onClick={() => navigate("/shortlet/1")}>
									See all features &rarr;
								</a>
								<button onClick={() => navigate("/shortlet/inspect-form/1")}>
									<HiEye />
								</button>
							</CardButton>
						</ShortletDetails>
					</ShortletCard>
				))}
			</ShortletContainer>
		</ShortletStyle>
	);
};

export default ShortLetContent;
