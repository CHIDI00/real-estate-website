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
			background-color: transparent;
			border: 1px solid var(--color-primary-400);
			border-radius: var(--border-radius-md);
		`}

	${(props) =>
		props.type === "modal" &&
		css`
			width: 80rem;
		`}
    
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	font-size: 1.4rem;
	width: 70rem;
	gap: 2rem;
	color: var(--color-grey-400);
`;

const FormRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

const Label = styled.label`
	font-weight: 500;
	font-size: 1.2rem;
`;

const Input = styled.input`
	width: 100%;
	height: 4rem;
	background-color: transparent;
	padding: 1rem 1.7rem;
	border: 1px solid var(--color-primary-400);
	border-radius: var(--border-radius-md);
`;

const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	p {
		margin-bottom: 1rem;
	}
`;

const DateContainer = styled.div`
	display: flex;
	width: 100%;

	p {
		margin-bottom: 1rem;
	}
`;

const Address = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
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
				<FormRow>
					<Label htmlFor="">Inspector's Name</Label>
					<Input type="text" placeholder="Full name" />
				</FormRow>

				<AddressContainer>
					<p>We would love to know where you're coming from.</p>
					{/* <p>Address</p> */}
					<Address>
						<FormRow>
							<Label htmlFor="">Street Address</Label>
							<Input type="text" placeholder="Enter street address" />
						</FormRow>
						<FormRow>
							<Label htmlFor="">Town / City</Label>
							<Input type="text" placeholder="Town" />
						</FormRow>
						<FormRow>
							<Label htmlFor="">State</Label>
							<Input type="text" placeholder="e.g Lagos." />
						</FormRow>
					</Address>
				</AddressContainer>
				<DateContainer>
					<p>When are you visiting?</p>
					<FormRow>
						<Label htmlFor="">Date</Label>
						<Input type="date" placeholder="Choose a date" />
					</FormRow>
					<FormRow>
						<Label htmlFor="">Time</Label>
						<Input type="time" placeholder="Select Time" />
					</FormRow>
				</DateContainer>

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
