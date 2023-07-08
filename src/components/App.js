import React, { useState } from 'react';

import Steps from './Steps';
import Challenge from './Challenge';
import UpdatedChallenge from './UpdatedChallenge';

function App() {
	const [isOpen, setIsOpen] = useState(true);

	const handleViewToggle = () => setIsOpen((s) => !s);

	return (
		<>
			<button className='close' onClick={handleViewToggle}>
				X
			</button>
			{isOpen && <Steps />}
			<Challenge />
			<UpdatedChallenge />
		</>
	);
}

export default App;
