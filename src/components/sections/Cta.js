import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";


// React Hook form
import { useForm } from "react-hook-form"

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool,
};

const defaultProps = {
	...SectionProps.defaults,
	split: false,
};

const Cta = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	split,
	...props
}) => {

	const outerClasses = classNames(
		"cta section center-content-mobile reveal-from-bottom",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"cta-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
		split && "cta-split"
	);

	let [isSubscibed, changeSubscibeStatus] = useState(false);
	const { handleSubmit, register, errors } = useForm()

	const Subscribe = values => {
		changeSubscibeStatus(true);
		alert("Ваши данные отправлены!");
		console.log(values);
	};

	return (
		<section {...props} className={outerClasses}>
		<div className="container">
			<div className={innerClasses}>
			{!isSubscibed ? (
				<>
				<div className="cta-slogan">
					<h3 className="m-0">Записаться на пробный урок</h3>
				</div>
				<div className="cta-action">
					<form onSubmit={handleSubmit(Subscribe)}>
						<div className="has-icon-left">
							<input 
								className="form-input" 
								name="email" 
								placeholder="email"
								ref={register({
									required: "Required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address"
									}
								})}	
							/>
							<svg
								width="16"
								height="12"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
									fill="#376DF9"
								/>
							</svg>
						</div>
						{errors.email && errors.email.message}

						<Input
							id="newsletter"
							type="text"
							label=""
							labelHidden
							hasIcon="left"
							placeholder="ФИО"
						>
						<svg
							width="16"
							height="12"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
								fill="#376DF9"
							/>
						</svg>
						</Input>

						<Input
							id="newsletter"
							type="text"
							label=""
							labelHidden
							hasIcon="left"
							placeholder="Класс"
						>
						<svg
							width="16"
							height="12"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
								fill="#376DF9"
							/>
						</svg>
						</Input>

						{/* <Button
							variant="contained"
							size="small"
							color="primary"
							className={classes.button}
							disabled={false}
							onClick={Subscribe}
							type="submit"
						>
							Записаться
						</Button> */}
						<input type="submit"/>
					</form>
				</div>
				</>
			) : (
				<div className="cta-slogan">
					<h3 className="m-0">Вы успешно записались на пробный урок !</h3>
				</div>
			)}
			</div>
		</div>
	</section>
	);
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
