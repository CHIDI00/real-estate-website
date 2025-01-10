import React from "react";
import HomeContent from "../features/home/HomeContent";
import styled from "styled-components";

const Row = styled.div`
	width: 100%;
	height: 100%;
`;
const Home = () => {
	return (
		<Row>
			<HomeContent />
		</Row>
	);
};

export default Home;
