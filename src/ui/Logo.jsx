import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
const Logo = () => {
	return (
		<LogoStyle>
			<img src="/realestatefakelogo.png" alt="Logo" />
			<h3>Holton Reality</h3>
		</LogoStyle>
	);
};

export default Logo;
