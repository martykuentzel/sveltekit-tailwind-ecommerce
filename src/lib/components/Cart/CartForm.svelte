<script>
	import { createEventDispatcher } from 'svelte';
	import { createForm } from 'svelte-forms-lib';
	import Input from '$lib/ui/Input.svelte';
	import { t } from '$lib/i18n/i18n.js';

	export let FormStore;
	export let onSubmit;
	export let formSchema;
	export let isShipping = true;
	let dispatch = createEventDispatcher();
	const handleBack = () => dispatch('back');

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: $FormStore,
		validationSchema: formSchema,
		onSubmit: (values) => onSubmit(values)
	});
</script>

<form class="pt-12">
	<div class="grid grid-cols-1 gap-y-10 gap-x-16 md:grid-cols-2 lg:gap-y-12 lg:text-xl">
		<Input
			name="firstName"
			description={$t('form.input.first_name')}
			value={$form.firstName}
			error={$errors.firstName}
			{handleChange}
		/>
		<Input
			name="familyName"
			description={$t('form.input.family_name')}
			value={$form.familyName}
			error={$errors.familyName}
			{handleChange}
		/>
		{#if isShipping}
			<Input
				name="email"
				description={$t('form.input.email')}
				value={$form.email}
				error={$errors.email}
				{handleChange}
			/>
			<Input
				name="telephone"
				description={$t('form.input.telephone')}
				value={$form.telephone}
				error={$errors.telephone}
				{handleChange}
			/>
		{/if}
		<div>
			<label class="" for="country">{$t('form.input.country')}</label>
			<div class="relative">
				<select
					class="input cursor-pointer border-black"
					id="country"
					type="text"
					on:change={handleChange}
					bind:value={$form.country}
				>
					<option>Deutschland</option>
					<option>France</option>
					<option>United Kingdom</option>
				</select>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 flex py-0 md:py-3 px-2 text-gray-700"
				>
					<svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
						><path
							d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
						/></svg
					>
				</div>
			</div>
		</div>
		<Input
			name="company"
			description={$t('form.input.company')}
			value={$form.company}
			error={$errors.company}
			{handleChange}
		/>
		<Input
			name="streetAndNumber"
			description={$t('form.input.street_and_number')}
			value={$form.streetAndNumber}
			error={$errors.streetAndNumber}
			{handleChange}
		/>
		<Input
			name="additionalAddress"
			description={$t('form.input.additional_address')}
			value={$form.additionalAddress}
			error={$errors.additionalAddress}
			{handleChange}
		/>
		<Input
			name="postalCode"
			description={$t('form.input.postal_code')}
			value={$form.postalCode}
			error={$errors.postalCode}
			{handleChange}
		/>
		<Input
			name="city"
			description={$t('form.input.city')}
			value={$form.city}
			error={$errors.city}
			{handleChange}
		/>
	</div>
</form>
<div class="pt-6 mb-24 md:mt-8">
	<button class="secondary-button" on:click={handleBack}> {$t('button.back')} </button>
	<button class="float-right button mt-2 md:mt-0" on:click={handleSubmit}>
		{$t('button.continue')}
	</button>
</div>
