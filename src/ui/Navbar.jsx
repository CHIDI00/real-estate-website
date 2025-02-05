import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { device } from "../ui/devices";

import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

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
	box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
	border-radius: 5px;
	padding: 2rem;
	top: 100%;
	right: 0%;
	width: 50%;
`;

const NavStyle = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	backdrop-filter: blur(10px);
	background-color: #ffffff1a;

	@media screen and (${device.mobileL}) {
		display: none;
	}
`;

const MobileNavStyle = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	backdrop-filter: blur(10px);
	/* background-color: #ffffff1a; */
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

const ContactButon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.6rem 1.5rem;
	background-color: var(--color-primary-400);
	border-radius: 50px;
	gap: 0.7rem;

	@media screen and (${device.mobileL}) {
		display: none;
	}
`;

const Navbar = () => {
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
			<ContactButon>
				<a href="">Contact us</a>
				<HiArrowRight />
			</ContactButon>

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
				<ContactButon>
					<a href="">Contact us</a>
					<HiArrowRight />
				</ContactButon>
			</MobileNav>
		</NavBarStyle>
	);
};

export default Navbar;
