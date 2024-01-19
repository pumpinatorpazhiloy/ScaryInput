import { useState } from 'react';
import useProcess from '../hooks/Hooks.jsx';
import { TypeAnimation } from 'react-type-animation';
import setContent from '../stateMachine/StateMachine.jsx'

import '../../style/Input.scss';

const TypingAnimation = () => {
	return (
	  <TypeAnimation
		 sequence={['WAITING...', 2000, 'WAITING', 500]}
		 wrapper="span"
		 speed={1}
		 style={{ fontSize: '2.5em' }}
		 repeat={Infinity}
	  />
	);
};

const renderContent = () => {
	return(
		<>
			{setContent(process)}
		</>
	);
};

const Input = () => {
	const [ value, setValue ] = useState('');

	return (
		///ДОДЕЛАТЬ ЛОГИКУ
		<>
			{renderContent}
			<div className="form__row">
				<TypingAnimation/>
				<form className="form">
					<input 
						className="input__main" 
						type="text"
						placeholder="TYPE HERE"
						value={value}
						onChange={e => setValue(e.target.value)}/>
					<button onClick={() => setContent(value)} 
							  className="clickMe">
							<span className="btn_enter">ENTER</span>
					</button>
				</form>
			</div>
		</>
	)
}

export default Input;