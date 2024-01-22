import zaza from '../../assets/zaza.gif'

export const DanGlek = () => {
	return (
		<p style={{fontSize: '12rem', color: '#fff'}}>
			DAN BAYADERA<br/>PIDORS
		</p>
	);
}

export const SupportUkraine = () => {
	return(
		<>
			<a href="https://savelife.in.ua/" 
				target="_blank" 
				style={{fontSize: '12rem', color: '#fff'}}>
				<span>SUPPORT UKRAINE</span>
			</a>
		</>
	);
}

export const Zaza = () => {
	return(
		<>
			<img href={zaza}></img>
		</>
	);
}

export const DefaultCase = () => {
	return(
		<>
			<h1>HELLO</h1>
		</>
	);
}

export const NotValid = () => {

	return(
		<>
			<p 
			className='error-message'
				style={{fontSize: '1.5rem', color: 'red', marginTop: '1rem'}}>
				ENTER VALID DATA
			</p>
		</>
	);
}