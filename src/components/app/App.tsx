import Input from '../input/Input';
import { Tooltip } from 'react-tooltip'
import { useSpring, animated } from '@react-spring/web'

import '../../style/App.scss';

function App() {;

	const fade = useSpring({from: {opacity: 0}, opacity: 1, config: { duration: 3000 }})

	return (
	<animated.div className="main__block" style={fade}>
		<div className='tooltip'>
			<div className='container'>
				<a 
					data-tooltip-id="my-tooltip"
					className="tooltip__a"
					data-tooltip-content="Hello world!">
					i
				</a>
			</div>
		</div>
		<Tooltip id="my-tooltip"/>
		<div className="input">
			<div className="container">
				<Input/>
			</div>
		</div>
	</animated.div>
	);
}

export default App;
