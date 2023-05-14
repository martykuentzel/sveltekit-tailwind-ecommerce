import { object, string, number } from 'yup';

export const shippingSchema = object().shape({
	firstName: string().required('Enter a first name'),
	familyName: string().required('Enter a family name'),
	email: string().email('Enter a valid Email').required('Enter a valid Email'),
	telephone: number()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.typeError('Telephone number is not valid'),
	country: string().required(),
	company: string(),
	streetAndNumber: string().required('Enter street and house number'),
	additionalAddress: string(),
	postalCode: number().nullable().typeError('Enter postal code').required('Enter postal code'),
	city: string().required('Enter a city')
});

export const billingSchema = object().shape({
	firstName: string().required('Enter a first name'),
	familyName: string().required('Enter a family name'),
	country: string().required(),
	company: string(),
	streetAndNumber: string().required('Enter a valid Email'),
	additionalAddress: string(),
	postalCode: number().nullable().typeError('Enter postal code').required('Enter postal code'),
	city: string().required('Enter a city')
});
