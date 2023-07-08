import React, { useState } from 'react';

import Button from './Button';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

const buttonTextColor = '#fff';
const buttonBgColor = '#7950f2';

function Steps() {
	const [step, setStep] = useState(0);

	const handlePrevClick = () => (step >= 1 ? setStep((s) => s - 1) : null);
	const handleNextClick = () => (step <= 1 ? setStep((s) => s + 1) : null);

	const renderMessage = (stepVal) => (
		<span>
			Step {stepVal + 1}: {messages[stepVal]}
		</span>
	);

	return (
		<div className='steps'>
			<div className='numbers'>
				<div className={step >= 0 ? 'active' : ''}>1</div>
				<div className={step >= 1 ? 'active' : ''}>2</div>
				<div className={step >= 2 ? 'active' : ''}>3</div>
			</div>
			<p className='message'>{renderMessage(step)}</p>
			<div className='buttons'>
				<Button
					textColor={buttonTextColor}
					bgColor={buttonBgColor}
					onClick={handlePrevClick}
				>
					<span>👈</span> Previous
				</Button>
				<Button
					textColor={buttonTextColor}
					bgColor={buttonBgColor}
					onClick={handleNextClick}
				>
					Next <span>👉</span>
				</Button>
			</div>
		</div>
	);
}

export default Steps;
