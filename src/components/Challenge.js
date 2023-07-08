import React, { useState } from 'react';

function Challenge() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();

	const handleCountSub = (decVal) => setCount((s) => s - decVal);
	const handleCountAdd = (incVal) => setCount((s) => s + incVal);

	const renderDate = (date, countVal) => {
		const newDate = new Date(
			date.setDate(date.getDate() + countVal)
		).toDateString();

		return (
			<>
				{count === 0 && <h2>Today is {newDate}</h2>}
				{count > 0 && (
					<h2>
						{count} days from today is {newDate}
					</h2>
				)}
				{count < 0 && (
					<h2>
						{count} days ago was {newDate}
					</h2>
				)}
			</>
		);
	};

	return (
		<div className='steps'>
			<div>
				<button onClick={() => setStep((s) => s - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep((s) => s + 1)}>+</button>
			</div>
			<div>
				<button onClick={() => handleCountSub(step)}>-</button>
				<span>Count: {count}</span>
				<button onClick={() => handleCountAdd(step)}>+</button>
			</div>
			{renderDate(date, count)}
		</div>
	);
}
export default Challenge;
