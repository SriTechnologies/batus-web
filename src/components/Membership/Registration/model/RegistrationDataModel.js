
// create a react js material ui form for RegistrationData

export const RegistrationData = (
	username = "",
	password = "",
	mem_email = "",
	mem_firstname = "",
	mem_lastname = "",
	mem_middlename = "",
	mem_dob =  "",
	mem_gotra = "",
	mem_rishis = [],
	spouse_firstname =  "",
	spouse_lastname =  "",
	spouse_maiden_name =  "",
	spouse_middlename =  "",
	spouse_dob =  "",
	spouse_maiden_gotra = "",
	children = [],
	address1 = "",
	address2 = "",
	city = "",
	county = "",
	state = "",
	country = "",
	mobilephone = "",
	landline = "",
	tncAccepted = false,
) => {
	return {
		username: username,
		password: password,
		mem_email: mem_email,
		mem_firstname: mem_firstname,
		mem_lastname: mem_lastname,
		mem_middlename: mem_middlename,
		mem_dob: mem_dob,
		mem_gotra: mem_gotra,
		mem_rishis: mem_rishis,
		spouse_firstname: spouse_firstname,
		spouse_lastname: spouse_lastname,
		spouse_maiden_name: spouse_maiden_name,
		spouse_middlename: spouse_middlename,
		spouse_dob: spouse_dob,
		spouse_maiden_gotra: spouse_maiden_gotra,
		address1: address1,
		address2: address2,
		city: city,
		county: county,
		state: state,
		country: country,
		tncAccepted: tncAccepted,
		children: children,
		mobilephone: mobilephone,
		landline: landline,
	}
}
