<script>
	import { t } from '$lib/i18n/i18n.js';
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();
	const handleBuy = () => dispatch('sold');
</script>

<div class="pt-8 text-center">
	<div class="flex justify-center">
		<button class="button" on:click={handleBuy}>
			{$t('cartdetails.confirmation.buy_button')}</button
		>
	</div>
	<div class="pt-4">{$t('cartdetails.confirmation.disclaimer')}</div>
</div>
