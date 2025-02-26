// /* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const sizes = {
	small: css`
		font-size: 1.1rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.2rem;
		padding: 1.1rem 1.9rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.4rem;
		padding: 1.2rem 2.2rem;
		font-weight: 500;
	`,
	transparent: css`
		font-size: 1.8rem;
		padding: 0.6rem;
		font-weight: 500;
		border: none;
	`,
};

const variations = {
	primary: css`
		color: var(--color-grey-50);
		background-color: var(--color-primary-400);

		&:hover {
			background-color: var(--color-primary-300);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,
	transparent: css`
		color: var(--color-grey-0);
		border: 2px solid var(--color-primary-400);
		background-color: transparent;
	`,
};

const Button = styled.button`
	border: none;
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-sm);

	${(props) => sizes[props.size]}
	${(props) => variations[props.variation]}
`;

Button.defaultProps = {
	variation: "primary",
	size: "medium",
};

export default Button;
