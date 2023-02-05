import * as Yup from 'yup';

export const step6vaidations = Yup.object().shape({
	acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
});