import styled, { css } from "styled-components";
import ImageSlider from "../../ui/ImageSlider";
import Map from "../../ui/Map";
import {
	HiBookOpen,
	HiCurrencyDollar,
	HiDocumentText,
	HiLocationMarker,
} from "react-icons/hi";
import { device } from "../../ui/devices";

const PropertyDetailStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 75px;
	gap: 3rem;
	background-color: transparent;
	/* border: 1px solid red; */
`;

const PropertyImage = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.9rem;
	width: 85%;
	height: 50rem;
	border-radius: 8px;

	@media screen and (${device.tablet}) {
		width: 100%;
	}

	@media screen and (${device.mobileL}) {
		flex-direction: column;
	}
`;

const PropertyDetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 10rem;
	width: 70%;

	@media screen and (${device.tablet}) {
		width: 100%;
	}
	@media screen and (${device.mobileL}) {
		width: 100%;
		gap: 1rem;
	}
`;

const PropertyContentLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 4rem;
`;

const PropertyContentRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 3rem;
`;
const PropertyContent = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10rem;

	p {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	@media screen and (${device.mobileL}) {
		p {
			font-size: 1.3rem;
		}
	}
`;

const MapDiv = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
	width: 100%;
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
		<>
			<PropertyDetailStyle>
				<PropertyImage>
					<ImageSlider imageUrls={imageUrls} />
				</PropertyImage>

				<PropertyDetailContainer>
					<PropertyContentLeft>
						<PropertyContent>
							<p>
								<HiCurrencyDollar /> Price
							</p>
						</PropertyContent>
						<PropertyContent>
							<p>
								<HiLocationMarker /> Address
							</p>
						</PropertyContent>
						<PropertyContent>
							<p>
								<HiDocumentText /> Description
							</p>
						</PropertyContent>
					</PropertyContentLeft>

					<PropertyContentRight>
						<PropertyContent>
							<p>N200,000,000 ($15,000)</p>
						</PropertyContent>
						<PropertyContent>
							<p>
								〒497-0051 Aichi Prefecture Haiji County, Kanie-machi Kitakyoda
								1-60 CBC Housing 13 parcels in the park where Crab River live
							</p>
						</PropertyContent>
						<PropertyContent>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos
								repellendus maiores officia omnis laboriosam nam suscipit
								asperiores iusto, quae distinctio esse dolorum molestiae aliquid
								tempora nemo nesciunt dolorem explicabo fugiat illo, soluta sit?
								Saepe quod molestias cupiditate. Alias voluptas praesentium,
								incidunt repellat reiciendis mollitia, aut eligendi maiores
								minima corrupti fugiat tenetur adipisci natus doloribus animi
								rem sed dicta, qui totam. Facilis odit quasi numquam quaerat
								quia nulla autem animi?
							</p>
						</PropertyContent>
					</PropertyContentRight>
				</PropertyDetailContainer>
			</PropertyDetailStyle>
			<MapDiv>
				<Map />
			</MapDiv>
		</>
	);
};

export default PropertyDetail;
