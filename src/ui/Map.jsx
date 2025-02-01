import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import styled from "styled-components";

const MapContainer1 = styled.div`
	flex: 1;
	width: 85%;
	height: 35rem;
	margin: 20px auto;

	.map {
		height: 100%;
	}
`;
const Map = () => {
	const [mapPosition, setMapPosition] = useState([6.4294211, 3.515982]);
	const position = [6.4294211, 3.515982];

	return (
		<MapContainer1>
			<MapContainer
				center={mapPosition}
				zoom={16}
				scrollWheelZoom={false}
				className="map"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={mapPosition}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</MapContainer1>
	);
};

export default Map;
