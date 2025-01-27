import styled from "styled-components";
import ImageSlider from "../../ui/ImageSlider";

const PropertyDetailStyle = styled.div`
	/* position: relative; */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 75px;
	gap: 2rem;
	background-color: transparent;
`;

const PropertyImage = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	width: 70%;
	height: 50rem;
	border-radius: 8px;
`;

const PropertyDetail = () => {
	const imageUrls = [
		{
			id: 1,
			propertyImage: "/property-1.png",
		},
		{
			id: 2,
			propertyImage: "/property-2.png",
		},
		{
			id: 3,
			propertyImage: "/property-3.png",
		},
		{
			id: 4,
			propertyImage: "/property-4.png",
		},
		{
			id: 5,
			propertyImage: "/property-5.png",
		},
	];
	return (
		<PropertyDetailStyle>
			<PropertyImage>
				<ImageSlider imageUrls={imageUrls} />
			</PropertyImage>

			<div>
				<div>
					<p>Price</p>
					<p>N200,000,000 ($15,000)</p>
				</div>
				<div>
					<p>Address</p>
					<p>
						〒497-0051 Aichi Prefecture Haiji County, Kanie-machi Kitakyoda 1-60
						CBC Housing 13 parcels in the park where Crab River live
					</p>
				</div>
			</div>
		</PropertyDetailStyle>
	);
};

export default PropertyDetail;
