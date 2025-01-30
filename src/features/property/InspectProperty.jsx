import React from "react";
// import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled, { css } from "styled-components";

const PropertyStyle = styled.div`
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

const Form = styled.form`
	${(props) =>
		props.type !== "modal" &&
		css`
			padding: 2.4rem 4rem;

			/* Box */
			background-color: green;
			/* border: 1px solid var(--color-grey-100); */
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 80rem;
		`}
    
  /* overflow: hidden; */
	font-size: 1.4rem;
	width: 70rem;
`;
const InspectProperty = () => {
	const { formState } = useForm();
	return (
		<PropertyStyle>
			<h3>
				Want to take a <span>look</span> at this property before buying?
			</h3>
			<p>Fill the form below to book a date for that</p>

			<Form>
				<div>
					<label htmlFor="">Inspector's Name</label>
					<input type="text" placeholder="Full name" />
				</div>

				<div>
					<p>We would love to know where you're coming from.</p>
					<p>Address</p>
					<div>
						<label htmlFor="">Street Address</label>
						<input type="text" placeholder="Enter street address" />
					</div>
					<div>
						<label htmlFor="">Town / City</label>
						<input type="text" placeholder="Town" />
					</div>
					<div>
						<label htmlFor="">State</label>
						<input type="text" placeholder="e.g Lagos." />
					</div>
				</div>
				<div>
					<div>
						<p>When are you visiting?</p>
						<label htmlFor="">Date</label>
						<input type="date" placeholder="Choose a date" />
					</div>
					<div>
						<label htmlFor="">Time</label>
						<input type="time" placeholder="Select Time" />
					</div>
				</div>

				<div>
					<p>Contact</p>
					<div>
						<label htmlFor="">Phone number</label>
						<input type="date" placeholder="Line 1" />
					</div>
					<div>
						<label htmlFor="">Phone number</label>
						<input type="date" placeholder="Line 2 (Optional)" />
					</div>
					<div>
						<label htmlFor="">Email</label>
						<input type="time" placeholder="Enter email address" />
					</div>
				</div>
				<button>SUBMIT</button>
			</Form>
		</PropertyStyle>
	);
};

export default InspectProperty;
