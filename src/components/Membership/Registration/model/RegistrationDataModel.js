
// create a react js material ui form for RegistrationData

export const RegistrationData = (
	username = "",
	password = "",
	firstname = "",
	lastname = "",
	middlename = "",
	dob =  "",
	address1 = "",
	address2 = "",
	address3 = "",
	city = "",
	county = "",
	state = "",
	country = "",
	mobilephone = "",
	landline = "",
	family = [],
	gotra = [],
	tncAccepted = false,
) => {
	return {
		username: username,
		password: password,
		firstname: firstname,
		lastname: lastname,
		middlename: middlename,
		dob: dob,
		address1: address1,
		address2: address2,
		address3: address3,
		city: city,
		county: county,
		state: state,
		country: country,
		tncAccepted: tncAccepted,
		family: family,
		gotra: gotra,
		mobilephone: mobilephone
	}
}
