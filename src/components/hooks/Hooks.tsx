import { useState } from "react";

const useProcess = () => {
	const [process, setProcess] = useState('idle');
	return {process, setProcess};
}

export default useProcess;