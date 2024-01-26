import { useState } from 'react';
import useProcess from '../hooks/Hooks';
import { TypeAnimation } from 'react-type-animation';
import setContent from '../stateMachine/StateMachine';
import { schema } from '../validations/scaryInputValidation';
import { NotValid } from '../pazles/pazles';

import '../../style/Input.scss';

//ДОДЕЛАТЬ
// const ComponentAnimation = ({text, secondText, time, secondTime}) => {
// 	return (
// 		<TypeAnimation
// 		  sequence={[text, time, secondText, secondTime]}
// 		  wrapper="span"
// 		  speed={1}
// 		  style={{ fontSize: '2.5em', color: '#fff' }}
// 		  repeat={Infinity}
// 		/>
// 	 );
// }

const WaitingAnimation = () => {
	return (
	  <TypeAnimation
		 sequence={['WAITING...', 2000, 'WAITING', 500]}
		 wrapper="span"
		 speed={1}
		 style={{ fontSize: '2.5em', color: '#fff' }}
		 repeat={Infinity}
	  />
	);
};

const LoadingAnimation = () => {
	return (
	  <TypeAnimation
		 sequence={['LOADING...', 2000, 'LOADING', 500]}
		 wrapper="span"
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
	const [ disabled, setDisabled ] = useState(false);
	const [ clicked, setClicked ] = useState(false);

	const submit = async e => {
		setClicked(true);
		setDisabled(true);
		e.preventDefault();
		

		let formData = {
			scaryInput: value
		};

		const isValid = await schema.isValid(formData);
		isValid ? setValid(false) : setValid(true);
		console.log(clicked);
		setTimeout(() => setClicked(false), 1500);
		setTimeout(() => setDisabled(false), 1500);
		setTimeout(() => setProcess(value), 1500);
		// setProcess(value);
		// setClicked(false);
		// setDisabled(false);
	}

	return (
		<>
			{setContent(process)}
			<div className="form__row">{}
				{clicked ? <LoadingAnimation/> : <WaitingAnimation/>}
				<form className="form" onSubmit={submit}>
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
						type="submit"
						disabled={disabled}>
							<span className="btn_enter">ENTER</span>
					</button>
				</form>
				{valid ? <NotValid/> : null}
			</div>
		</>
	);
}

export default Input;