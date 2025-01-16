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
	width: 100%;
	gap: 2rem;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	/* height: 100%; */
	height: 98vh;
	overflow: scroll;
	scrollbar-width: none;
	max-width: 120rem;
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
				<Outlet />
				<Footer />
			</Main>
			{/* <Footer /> */}
		</StyledAppLayout>
	);
};

export default AppLayout;
