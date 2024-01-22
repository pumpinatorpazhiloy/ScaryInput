import ScaryModal from '../modals/Modal.jsx'
import { DanGlek } from '../pazles/pazles.jsx';
import { SupportUkraine } from '../pazles/pazles.jsx';
// import { Zaza } from '../pazles/pazles.jsx';

const setContent = (process) => {
	switch (process) {
		case 'idle':
			return
		case 'dan':
			return <DanGlek/>;
		case 'bavovna':
			return <SupportUkraine/>;
		case 'russia':
			return <ScaryModal/>;
		// case 'zaza':
		// 	return <ScaryModal/>;
		// 	//DODELAT
		// 	return <Zaza/>
		default:
			return;
  }
}

export default setContent;