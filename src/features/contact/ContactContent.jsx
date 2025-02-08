import React from "react";
import { HiChat } from "react-icons/hi";
import styled from "styled-components";
import { device } from "../../ui/devices";
import Button from "../../ui/Button";

const ContactStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 70px;
	background-color: transparent;
	gap: 2rem;

	/* @media screen and (${device.mobileL}) {
		height: 90;
	} */
`;

const ContactContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;
`;

const ContactLeftContent = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	p {
		font-size: 1.4rem;
	}
`;

const MessageForm = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;
`;

const Input = styled.input`
	width: 100%;
	height: 4rem;
	background-color: transparent;
	padding: 1rem 1.7rem;
	border: 1px solid var(--color-primary-400);
	border-radius: var(--border-radius-md);
`;
const TextArea = styled.textarea`
	width: 100%;
	height: 10rem;
	background-color: transparent;
	padding: 1rem 1.7rem;
	border: 1px solid var(--color-primary-400);
	border-radius: var(--border-radius-md);
`;

const ContactContent = () => {
	return (
		<ContactStyle>
			<h1>Contact us</h1>

			<ContactContentContainer>
				<ContactLeftContent>
					<p>
						We commit to making sure all your real estate needs are promptly
						met. Reach us via any of our various mediums, we are always
						available to provide all necessary help and answer all your
						questions.
					</p>
					<p>
						Lagos: 13, Otunba Adedoyin Ogungbe Crescent, Lekki Phase 1, Lagos,
						Nigeria
					</p>
					<Button variation="primary" size="medium">
						<HiChat /> WhatsApp
					</Button>
				</ContactLeftContent>

				<MessageForm>
					<p>Drop a message</p>
					<Form>
						<label htmlFor="fullName">Full Name</label>
						<Input type="text" placeholder="Full Name" />
						<label htmlFor="email">Email</label>
						<Input type="email" placeholder="Email Address" />
						<label htmlFor="">Phone Number</label>
						<Input type="text" placeholder="Phone Number" />
						<label htmlFor="">Message</label>
						<TextArea placeholder="Message"></TextArea>
						<Button variation="primary" size="medium">
							Send Message
						</Button>
					</Form>
				</MessageForm>
			</ContactContentContainer>
		</ContactStyle>
	);
};

export default ContactContent;
