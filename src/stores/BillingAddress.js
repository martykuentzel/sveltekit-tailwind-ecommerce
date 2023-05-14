import { writable } from 'svelte/store';

export const BillingAddress = writable({
	firstName: '',
	familyName: '',
	country: 'Deutschland',
	company: '',
	streetAndNumber: '',
	additionalAddress: '',
	postalCode: null,
	city: ''
});

export const IsBillingIdenticalWithShipping = writable(true);

export const IsBillingAddressValid = writable(true);
