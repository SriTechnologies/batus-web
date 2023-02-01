import * as Yup from 'yup';

export const step2validations = Yup.object().shape({
    firstname: Yup.string().required('Fullname is required'),
    middlename: Yup.string().optional('Enter N/A, if not applicable'),
	lastname:  Yup.string().required('Lastname is required'),
	dob: Yup.string().required('Date of Birth is required'),
  });