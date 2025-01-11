import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 98vh;
	gap: 2rem;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: scroll;
	scrollbar-width: none;
	max-width: 120rem;
`;
const NavContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120rem;
	height: 5rem;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<NavContainer>
				<Navbar />
			</NavContainer>
			<Main>
				<Outlet />
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
