import PropertiesContent from "../features/property/PropertiesContent";

import styled from "styled-components";

const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Property = () => {
	return (
		<Row>
			<PropertiesContent />
		</Row>
	);
};

export default Property;
