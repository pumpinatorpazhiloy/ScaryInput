import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

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

const DanGlek = () => {
	return (
		<div style={{fontSize: '12rem'}}>
			DAN BAYADERA<br/>PIDORS
		</div>
	);
}

const Input = ({activeChange}) => {

	const [ value, setValue ] = useState('');
	const [ dan, setDan ] = useState(false)
	const [ defaultMessage, setDefaultMessage ] = useState(false);
	const [ supportUkraine, setSupportUkraine] = useState(false);
	// const [ disable, setDisable ] = useState(false);

	const DefaultCase = () => {
		return(
			<>
				<div>HELLO, MAN</div>
			</>
		);
	}

	const SupportUkraine = () => {
		return(
			<>
				<a href="https://send.monobank.ua/jar/dzBdJ3737">SUPPORT UKRAINE</a>
			</>
		);
	}

	const scare = (value) => e => {
		e.preventDefault();
		// setDisable(true)
		switch(value) {
			case 'Russia':
				setTimeout(() => activeChange(true), 1000);
				break;
			case 'Dan':
				setTimeout(() => setDan(true), 1000);
				break;
			case 'Бавовна':
				setTimeout(() => setSupportUkraine(true), 1000);
				break;
			default:
				setDefaultMessage(true);
				break;
		}
	}
	
	return (
		///ДОДЕЛАТЬ ЛОГИКУ
		<>
			{/* {defaultMessage ? <DefaultCase/> : null} */}
			{supportUkraine ? <SupportUkraine/> : null}
			{dan ? <DanGlek/> || <DefaultCase/> : null}
			<div className="form__row">
				<TypingAnimation/>

				<form className="form">
					<input 
						className="input__main" 
						type="text"
						placeholder="TYPE HERE"
						value={value}
						onChange={e => setValue(e.target.value)}/>
					<button onClick={(e) => scare(value)(e)} 
							  className="clickMe">
							<span className="btn_enter">ENTER</span>
					</button>
				</form>
			</div>
		</>
	)
}

export default Input;