import React, { useState } from 'react';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

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
				<button
					style={{ backgroundColor: '#7950f2', color: '#fff' }}
					onClick={handlePrevClick}
				>
					Previous
				</button>
				<button
					style={{ backgroundColor: '#7950f2', color: '#fff' }}
					onClick={handleNextClick}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Steps;
