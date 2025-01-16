import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3rem 0;
	margin-top: 4rem;
	border-top: 1px solid #9a9898;
`;

const FirstContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-bottom: 6rem;
	/* border-bottom: 1px solid #fff; */
`;
const Footer = () => {
	return (
		<FooterContainer>
			<FirstContent>
				<div>
					<Logo />
					<p>Your vision our blueprint</p>
				</div>
				<div>
					<p>+234 9074673898</p>
					<p>holtonreality@gmail.com</p>
				</div>
			</FirstContent>

			<div>
				<p>© Copyright Holton Reality Properties. All Rights Reserved</p>
			</div>
		</FooterContainer>
	);
};

export default Footer;
