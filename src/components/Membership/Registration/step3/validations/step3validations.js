import * as Yup from 'yup';

export const step3validations = Yup.object().shape({
    gotram: Yup.string().required('Gotram is required'),
});