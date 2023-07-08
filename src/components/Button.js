import React from 'react';

function Button({ textColor, backgroundColor, onClick, text }) {
	<button
		style={{ backgroundColor: { backgroundColor }, color: { textColor } }}
		onClick={onClick}
	>
		{text}
	</button>;
}
export default Button;
