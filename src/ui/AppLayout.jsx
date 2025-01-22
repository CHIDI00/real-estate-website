import React from "react";
import { Outlet } from "react-router-dom";
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
	/* width: 100%; */
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
