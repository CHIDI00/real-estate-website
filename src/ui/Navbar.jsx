import React, { useRef, useState } from "react";
import { HiArrowRight, HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { device } from "../ui/devices";

import styled from "styled-components";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const NavBarStyle = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const MobileNav = styled.div`
	position: absolute;
	flex-direction: column;
	background-color: var(--color-brand-90);
	box-shadow: -10px 0px 10px rgba(17, 16, 16, 0.5);
	border-radius: 5px;
	padding: 2rem;
	top: 100%;
	right: 0%;
	width: 100%;
	margin-top: 4rem;

	-webkit-animation: swing-in-top-fwd 0.5s
		cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
	animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

	@-webkit-keyframes swing-in-top-fwd {
		0% {
			-webkit-transform: rotateX(-100deg);
			transform: rotateX(-100deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateX(0deg);
			transform: rotateX(0deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 1;
		}
	}
	@keyframes swing-in-top-fwd {
		0% {
			-webkit-transform: rotateX(-100deg);
			transform: rotateX(-100deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateX(0deg);
			transform: rotateX(0deg);
			-webkit-transform-origin: top;
			transform-origin: top;
			opacity: 1;
		}
	}
`;

const NavStyle = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	backdrop-filter: blur(10px);
	background-color: #ffffff1a;

	@media screen and (${device.tablet}) {
		display: none;
	}
`;

const MobileNavStyle = styled.nav`
	/* backdrop-filter: blur(10px); */
`;

const UlStyle = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	gap: 3.5rem;
	color: var(--color-grey-50);
`;

const MobileUlStyle = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	gap: 3.5rem;
	color: var(--color-grey-50);
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1rem;

		color: var(--color-grey-100);
		font-size: 1.5rem;
		font-weight: 500;
		transition: all 0.3s;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover {
		color: var(--color-primary-200);
	}
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-primary-400);
		/* border-bottom: 2px solid var(--color-primary-400); */
	}

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: var(--color-primary-400);
	}
`;

const ContactButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.6rem 1.5rem;
	background-color: var(--color-primary-400);
	border-radius: 50px;
	gap: 0.7rem;

	@media screen and (${device.tablet}) {
		display: none;
	}
`;
const MobileContactButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.6rem 1.5rem;
	background-color: var(--color-primary-400);
	border-radius: 50px;
	gap: 0.7rem;
`;

const MenuIcon = styled.div`
	display: none;
	font-size: 2.5rem;
	cursor: pointer;

	@media screen and (${device.tablet}) {
		display: flex;
	}
`;

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);

	function toggleMenu() {
		setShowMenu((showMenu) => !showMenu);
	}


	return (
		<NavBarStyle>
			<Logo />
			<NavStyle>
				<UlStyle>
					<li>
						<StyledNavLink to="/home">Home</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/about">About</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/properties">Properties</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/shortlet">Shortlet</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to="/contact">Contact</StyledNavLink>
					</li>
				</UlStyle>
			</NavStyle>
			<ContactButton>
				<a href="">Contact us</a>
				<HiArrowRight />
			</ContactButton>

			<MenuIcon onClick={toggleMenu}>
				{showMenu ? <HiXMark /> : <HiMenu />}
			</MenuIcon>

			{showMenu && (
				<MobileNav>
					<MobileNavStyle>
						<MobileUlStyle>
							<li>
								<StyledNavLink to="/home">Home</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/about">About</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/properties">Properties</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/shortlet">Shortlet</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/contact">Contact</StyledNavLink>
							</li>
						</MobileUlStyle>
					</MobileNavStyle>
					<MobileContactButton>
						<a href="">Contact us</a>
						<HiArrowRight />
					</MobileContactButton>
				</MobileNav>
			)}
		</NavBarStyle>
	);
};

export default Navbar;
