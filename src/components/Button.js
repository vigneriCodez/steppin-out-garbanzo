import React from 'react';

function Button({ textColor, bgColor, onClick, text }) {
	return (
		<button
			style={{ backgroundColor: bgColor, color: textColor }}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
export default Button;
