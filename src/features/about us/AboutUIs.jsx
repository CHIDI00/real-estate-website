import styled from "styled-components";

export const AboutStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 70px;
	background-color: transparent;
`;

export const Heading = styled.h2`
	font-size: 5rem;
	text-align: center;
	color: var(--color-grey-0);

	opacity: 0;
	transform: translateY(100px);

	span {
		color: var(--color-primary-300);
	}
`;

export const ReasonToChooseContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4rem 0;
`;

export const ImageContainer = styled.div`
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

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50%;
	gap: 2rem;
`;

export const InnerContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	opacity: 0;
	transform: translateY(100px);
`;

export const TextContent = styled.div`
	p {
		font-size: 3rem;
	}

	p:nth-child(2) {
		font-size: 2.5rem;
		color: var(--color-grey-400);
	}
`;

export const TimelineContainer = styled.div`
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

export const Step = styled.div`
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

export const Circle = styled.div`
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

export const Content = styled.div`
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

export const Spans = styled.span`
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
