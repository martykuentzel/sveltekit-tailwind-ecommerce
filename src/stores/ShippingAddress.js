import { writable } from 'svelte/store';

export const ShippingAddress = writable({
	firstName: '',
	familyName: '',
	email: '',
	telephone: '',
	country: 'Deutschland',
	company: '',
	streetAndNumber: '',
	additionalAddress: '',
	postalCode: null,
	city: ''
});

export const IsShippingAddressValid = writable(false);
