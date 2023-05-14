<script>
	import { fade } from 'svelte/transition';
	import {
		BillingAddress,
		IsBillingIdenticalWithShipping,
		IsBillingAddressValid
	} from '../../../stores/BillingAddress.js';
	import { createEventDispatcher } from 'svelte';
	import CartForm from './CartForm.svelte';
	import { billingSchema } from '$lib/forms/validations';
	import { t } from '$lib/i18n/i18n.js';

	const toggle = () => {
		IsBillingIdenticalWithShipping.set(!$IsBillingIdenticalWithShipping);
		IsBillingAddressValid.set(false);
		if ($IsBillingIdenticalWithShipping || billingSchema.isValidSync($BillingAddress)) {
			IsBillingAddressValid.set(true);
		}
	};

	let dispatch = createEventDispatcher();
	const handleSubmit = (values) => {
		console.log(JSON.stringify(values));
		BillingAddress.set(values);
		console.log('submitted');
		IsBillingAddressValid.set(true);
		handleNext();
	};
	const handleNext = () => {
		dispatch('next');
	};
	const handleBack = () => dispatch('back');
</script>

<div class="pt-8">
	{#if $IsBillingIdenticalWithShipping}
		<div class="flex items-center">
			<input
				class="h-10 w-10 border-2 border-lightGray rounded transition duration-200 mr-2 cursor-pointer accent-black focus:outline-none"
				on:click={toggle}
				type="checkbox"
				id="flexCheckDefault"
				checked
			/>
			<label for="flexCheckDefault" in:fade={{ duration: 200 }}>
				{$t('cartdetails.billing_address.identical_message')}
			</label>
		</div>
		<div class="pt-6 mb-24 md:mt-8">
			<button class="secondary-button" on:click={handleBack}> {$t('button.back')} </button>
			<button class="float-right button mt-2 md:mt-0" on:click={handleNext}>
				{$t('button.continue')}
			</button>
		</div>
	{:else}
		<div class="flex items-center">
			<input
				class="appearance-none h-10 w-10 border-2 border-lightGray rounded transition duration-200 mr-2 cursor-pointer checked:bg-black checked:border-black focus:outline-none"
				on:click={toggle}
				type="checkbox"
				id="flexCheckDefault"
			/>
			<label for="flexCheckDefault" in:fade={{ duration: 200 }}>
				{$t('cartdetails.billing_address.different_message')}
			</label>
		</div>
	{/if}
	{#if !$IsBillingIdenticalWithShipping}
		<div in:fade={{ duration: 200 }}>
			<CartForm
				FormStore={BillingAddress}
				formSchema={billingSchema}
				isShipping={false}
				onSubmit={handleSubmit}
				on:back={handleBack}
			/>
		</div>
	{/if}
</div>
