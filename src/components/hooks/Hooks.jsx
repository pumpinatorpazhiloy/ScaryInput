import { useState } from "react";

const useProcess = () => {
	const [process, setProcess] = useState('loading');

	return {process, setProcess};
}

export default useProcess;