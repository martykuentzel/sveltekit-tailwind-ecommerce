<script>
	import { Cart } from '../../../stores/Cart.js';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import CartItemDetails from './CartItemDetails.svelte';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/i18n/i18n.js';

	let dispatch = createEventDispatcher();

	export let shippingCost = 5;

	const handleNext = () => {
		dispatch('next');
	};
</script>

<div>
	{#each $Cart as item (item.id)}
		<div class="border-t-2 border-lightGray my-8" out:scale|local animate:flip={{ duration: 500 }}>
			<CartItemDetails {item} />
		</div>
	{/each}
	<div class="border-b-2 border-lightGray" />

	<div class="flex my-8 grid grid-cols-5 text-xl">
		<div class="col-span-5 md:col-span-3">
			<span>{$t('cartdetails.shipping')}</span>
			<span class="pl-11 md:invisible">{shippingCost}€</span>
		</div>
		<div class="invisible text-center md:visible">{shippingCost}€</div>
	</div>
	<div class="border-b-2 border-lightGray" />
	<div>
		<button class="button block my-8 mr-0 mx-auto" on:click={handleNext}>
			{$t('button.checkout')}
		</button>
	</div>
</div>
