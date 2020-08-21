import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";


// React Hook form
import { useForm } from "react-hook-form"

// axios
import axios from 'axios'
import FormData from 'form-data'

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


		const data = new FormData();
		data.append('name', values['name']);
		data.append('phone', values['phone']);
		data.append('note', values['note']);

		const config = {
		method: 'post',
		url: 'https://fenomen.s20.online/api/1/lead/create?token=c4ca4238a0b923820dcc509a6f75849b',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		data : data
		};

axios(config)

	};

	const gradeValidation = (grade) => grade >= 1 && grade <= 12;
	

	return (
		<section {...props} className={outerClasses}>
		<div className="container">
			<div className={innerClasses}>
			{!isSubscibed ? (
				<>
				<div className="cta-slogan">
					<h3 className="m-0">Тегін сабаққа жазылу</h3>
				</div>
				<div className="cta-action">
					<form onSubmit={handleSubmit(Subscribe)}>
						{
							errors.phone && <p className="error-message">{errors.phone.message}</p>
						}
						<div className="has-icon-left">
							<input 
								className="form-input" 
								name="phone" 
								placeholder="Телефон нөмірі"
								ref={register({
									required: "Телефон нөмірі керек",
									pattern: {
										value:/^[+7]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{5}$/im,
										message: "Қате телефон нөмірі"
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

						{
							errors.name && <p className="error-message">{errors.name.message}</p>
						}
						<div className="has-icon-left">
							<input 
								className="form-input" 
								name="name" 
								placeholder="Аты-жөні"
								ref={register({
									required: "Аты-жөніңізді енгізіңіз"
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

						{
							errors.note && <p className="error-message">{errors.note.message}</p> && <p className="error-message">Қате оқу сыныбы</p>
						}
						<div className="has-icon-left">
							<input 
								className="form-input" 
								name="note" 
								placeholder="Баланың сыныбы"
								ref={register({
									required: "Оқу сыныбыны жазіңіз",
									validate: gradeValidation
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
						<input className="submit-input-form" type="submit" value="Тіркелу"/>
					</form>
				</div>
				</>
			) : (
				<div className="cta-slogan">
					<h3 className="m-0">Сіз сынақ сабағына сәтті жазылдыңыз!</h3>
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
