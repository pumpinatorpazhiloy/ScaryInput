import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { TypeAnimation } from 'react-type-animation';

import '../../style/Input.scss';

//TYPING ANIMATION 
const TypingAnimation = () => {
	return (
	  <TypeAnimation
		 sequence={[
			'WAITING...',
			4000
		 ]}
		 wrapper="span"
		 speed={1}
		 style={{ fontSize: '2.5em' }}
		 repeat={0}
	  />
	);
};

const FormMain = ({value, setValue, scare}) => {

	const fade = useSpring({from: {opacity: 0}, opacity: 1, config: { duration: 3000 }})

	return (
		<animated.div style={fade} className="form__row">
			<TypingAnimation/>
			<form className="form">
				<input 
					className="input__main" 
					type="text"
					placeholder="TYPE HERE"
					value={value}
					onChange={e => setValue(e.target.value)}/>
				<button onClick={(e) => scare(true)(e)} className="clickMe">
					<span className="btn_enter">ENTER</span>
				</button>
			</form>
		</animated.div>
	);
}

const Input = ({activeChange}) => {
	const [ value, setValue ] = useState('');

	const scare = (value) => e => {
		e.preventDefault();
		if(value === 'Russia') {
			setTimeout(() => activeChange(true), 1000)
			console.log(1)
		}
	}
	
	return (
		<>
			<FormMain value={value} setValue={setValue} scare={scare}/>
		</>
	)
}

export default Input;