import { useState } from 'react';
import ScaryModal from '../modals/Modal.jsx';

import '../../style/Input.scss';

const Input = ({activeChange}) => {
	const [ value, setValue ] = useState('');
	const [ active, setActive ] = useState(false);

	const scare = (value) => e => {
		e.preventDefault();
		if(value === 'Russia') {
			activeChange(true)
		}
	}
	
	return (
		<>
			<form className="form">
				<input 
					className="input__main" 
					type="text"
					placeholder="TYPE HERE"
					value={value}
					onChange={e => setValue(e.target.value)}/>
					<button onClick={(e) => scare(true)(e)} className="clickMe">ENTER!</button>
			</form>
		</>
	)
}

export default Input;