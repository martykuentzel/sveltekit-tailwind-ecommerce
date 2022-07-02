<script>
	import { createEventDispatcher } from 'svelte';
	import CartForm from './CartForm.svelte';
	import { ShippingAddress, IsShippingAddressValid } from '../../../stores/ShippingAddress.js';
	import { shippingSchema } from '$lib/forms/validations';

	let dispatch = createEventDispatcher();
	const handleSubmit = (values) => {
		console.log('submitted');
		ShippingAddress.set(values);
		IsShippingAddressValid.set(true);
		dispatch('next');
	};
	const handleBack = () => dispatch('back');
</script>

<CartForm
	FormStore={ShippingAddress}
	onSubmit={handleSubmit}
	formSchema={shippingSchema}
	on:back={handleBack}
/>
