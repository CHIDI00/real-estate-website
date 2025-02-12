import React from "react";
// import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled, { css } from "styled-components";
import Button from "../../ui/Button";

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

	button {
		width: 100%;
		margin-top: 2rem;
		padding: 1.5rem 2rem;
		background-color: var(--color-primary-400);
		border: none;
		color: var(--color-grey-50);
		border-radius: 6px;
	}
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
	gap: 1rem;

	
	p {
		margin-bottom: 1rem;
		font-weight: 900;
	}
`;

const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	p {
		margin-bottom: 1rem;
		font-weight: 900;
	}

	div {
		display: flex;
		width: 100%;
		gap: 1rem;
	}
`;

const Address = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;


`;

const InspectProperty = () => {
	const { register, handleSubmit, formState } = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<PropertyStyle>
			<h3>
				Want to take a <span>look</span> at this property before buying?
			</h3>
			<p>Fill the form below to book a date for that</p>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormRow>
					<Label htmlFor="Full name">Inspector's Name</Label>
					<Input
						type="text"
						placeholder="Full name"
						id="fullName"
						{...register("fullName", { required: "This field is required" })}
					/>
				</FormRow>

				<AddressContainer>
					<p>We would love to know where you're coming from.</p>
					{/* <p>Address</p> */}
					<Address>
						<FormRow>
							<Label htmlFor="">Street Address</Label>
							<Input
								type="text"
								id="streetAddress"
								placeholder="Enter street address"
								{...register("streetAddress", {
									required: "This field is required",
								})}
							/>
						</FormRow>
						<FormRow>
							<Label htmlFor="">Town / City</Label>
							<Input
								type="text"
								id="city"
								placeholder="City"
								{...register("city", {
									required: "This field is required",
								})}
							/>
						</FormRow>
						<FormRow>
							<Label htmlFor="">State</Label>
							<Input
								type="text"
								id="state"
								placeholder="e.g Lagos."
								{...register("state", {
									required: "This field is required",
								})}
							/>
						</FormRow>
					</Address>
				</AddressContainer>
				<DateContainer>
					<p>When are you visiting?</p>
					<div>
						<FormRow>
							<Label htmlFor="">Date</Label>
							<Input
								type="date"
								id="date"
								placeholder="Choose a date"
								{...register("date", {
									required: "This field is required",
								})}
							/>
						</FormRow>
						<FormRow>
							<Label htmlFor="">Time</Label>
							<Input
								type="time"
								id="time"
								placeholder="Select Time"
								{...register("time", {
									required: "This field is required",
								})}
							/>
						</FormRow>
					</div>
				</DateContainer>

				<AddressContainer>
					<p>Contact</p>
					<FormRow>
						<Label htmlFor="">Phone number</Label>
						<Input
							type="text"
							id="phoneNo"
							placeholder="Line 1"
							{...register("phoneNo", { required: "This field is required" })}
						/>
					</FormRow>
					<FormRow>
						<Label htmlFor="">Phone number</Label>
						<Input
							type="text"
							id="phoneNo2"
							placeholder="Line 2 (Optional)"
							{...register("phoneNo2", { required: "This field is required" })}
						/>
					</FormRow>
					<FormRow>
						<Label htmlFor="">Email</Label>
						<Input
							type="email"
							id="email"
							placeholder="Enter email address"
							{...register("email", { required: "This field is required" })}
						/>
					</FormRow>
				</AddressContainer>
				<button>SUBMIT</button>
			</Form>
		</PropertyStyle>
	);
};

export default InspectProperty;
