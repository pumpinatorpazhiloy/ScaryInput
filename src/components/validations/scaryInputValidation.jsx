import * as yup from 'yup';

export const schema = yup.object().shape({
	scaryInput: yup.string().min(2).required()
});