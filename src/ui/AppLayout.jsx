import React from "react";
import { Outlet } from "react-router-dom";
import { device } from "../ui/devices";

import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	max-width: 120rem;
	margin: auto;
	gap: 2rem;
`;

const Main = styled.main`
	overflow: scroll;
	scrollbar-width: none;
	width: 100%;
	height: 100vh;
`;

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const NavContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120rem;
	height: 5rem;
	z-index: 11;

	@media screen and (${device.tablet}) {
		padding: 2rem;
		width: 100%;
	}

	@media screen and (${device.mobileL}) {
		width: 100%;
	}
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<NavContainer>
				<Navbar />
			</NavContainer>
			<Main>
				<Container>
					<Outlet />
					<Footer />
				</Container>
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
