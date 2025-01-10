import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 98vh;
	/* gap: 2rem; */
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Navbar />
			<Main>
				<Outlet />
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
