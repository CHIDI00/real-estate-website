import React from "react";
import { HiArrowCircleRight, HiArrowRight } from "react-icons/hi";
import styled from "styled-components";

const NavBarStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const NavStyle = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	backdrop-filter: blur(10px);
	background-color: #ffffff1a;
`;

const UlStyle = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	gap: 3.5rem;
	color: var(--color-grey-50);
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const ContactButon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.6rem 1.5rem;
	background-color: var(--color-primary-400);
	border-radius: 50px;
	gap: 0.7rem;
`;

const Navbar = () => {
	return (
		<NavBarStyle>
			<Logo>
				<img src="/realestatefakelogo.png" alt="Logo" />
				<h3>Holton Reality</h3>
			</Logo>
			<NavStyle>
				<UlStyle>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/properties">Properties</a>
					</li>
					<li>
						<a href="/services">Services</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</UlStyle>
			</NavStyle>
			<ContactButon>
				<a href="">Contact us</a>
				<HiArrowRight />
			</ContactButon>
		</NavBarStyle>
	);
};

export default Navbar;
