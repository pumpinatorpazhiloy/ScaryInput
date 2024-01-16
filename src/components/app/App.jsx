import { useState } from 'react';
import Input from '../input/Input.jsx';
import ScaryModal from '../modals/Modal.jsx';

import '../../style/App.scss';

function App() {
	const [ active, setActive ] = useState(false);

	return (
	<>
		<div className="input">
			<div className="container">
				{active ? <ScaryModal/> : <Input activeChange={setActive}/>}
			</div>
		</div>
	</>
	);
}

export default App;
