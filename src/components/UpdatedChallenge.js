import React, { useState } from 'react';

function UpdatedChallenge() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();

	const handleCountSub = (decVal) => setCount((s) => s - decVal);
	const handleCountAdd = (incVal) => setCount((s) => s + incVal);

	const handleRangeChange = (value) => setStep(value);

	const handleResetPress = () => {
		setStep(1);
		setCount(0);
	};

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
				{(count !== 0 || step !== 1) && (
					<div>
						<button className='buttons' onClick={handleResetPress}>
							Reset
						</button>
					</div>
				)}
			</>
		);
	};

	return (
		<div className='steps'>
			<div>
				<input
					type='range'
					min='0'
					max='10'
					value={step}
					onChange={(e) => handleRangeChange(Number(e.target.value))}
				/>
				<p>Step: {step}</p>
			</div>
			<div>
				<button onClick={() => handleCountSub(step)}>-</button>
				<input
					type='text'
					placeholder='0'
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<button onClick={() => handleCountAdd(step)}>+</button>
			</div>
			<div>{renderDate(date, count)}</div>
		</div>
	);
}
export default UpdatedChallenge;
