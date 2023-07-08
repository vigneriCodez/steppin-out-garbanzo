import React from 'react';

function Message({ children, step }) {
	return (
		<div className='message'>
			<h3>Step {step + 1}</h3>
			{children}
		</div>
	);
}
export default Message;
