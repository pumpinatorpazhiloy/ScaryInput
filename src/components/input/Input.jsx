import { useState } from 'react';
import useProcess from '../hooks/Hooks.jsx';
import { TypeAnimation } from 'react-type-animation';
import setContent from '../stateMachine/StateMachine.jsx';
import { schema } from '../validations/scaryInputValidation.jsx';
import { NotValid } from '../pazles/pazles.jsx';

import '../../style/Input.scss';

const TypingAnimation = () => {
	return (
	  <TypeAnimation
		 sequence={['WAITING...', 2000, 'WAITING', 500]}
		 wrapper="label"
		 speed={1}
		 style={{ fontSize: '2.5em', color: '#fff' }}
		 repeat={Infinity}
	  />
	);
};

export const Input = () => {
	const [ value, setValue ] = useState('');
	const { process, setProcess } = useProcess();
	const [ valid, setValid ] = useState(false);

	const createUser = async e => {
		e.preventDefault();
		let formData = {
			scaryInput: value
		};

		const isValid = await schema.isValid(formData);
		isValid ? setValid(false) : setValid(true);
		setProcess(value)
		console.log(process);
	}

	return (
		<>
			{setContent(process)}
			<div className="form__row">
				<TypingAnimation/>
				<form className="form" onSubmit={createUser}>
					<input 
						className="input__main" 
						type="text"
						placeholder="TYPE HERE"
						value={value}
						name="scaryInput"
						required
						onChange={e => setValue(e.target.value)}/>
					<button
						className="clickMe"
						type="submit">
							<span className="btn_enter">ENTER</span>
					</button>
				</form>
				{valid ? <NotValid/> : null}
			</div>
		</>
	);
}

export default Input;