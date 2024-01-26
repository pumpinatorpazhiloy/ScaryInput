import ScaryModal from '../modals/Modal'
import { DanGlek } from '../pazles/pazles';
import { SupportUkraine } from '../pazles/pazles';
// import { Zaza } from '../pazles/pazles.jsx';

const setContent = (process: string) => {
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