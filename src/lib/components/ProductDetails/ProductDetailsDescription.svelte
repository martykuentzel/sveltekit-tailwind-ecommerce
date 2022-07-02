<script>
	import PlusMinusCounter from '../../ui/PlusMinusCounter.svelte';
	import addToCart from '$lib/utils/addToCart.js';
	import { t, locale } from '$lib/i18n/i18n.js';

	export let product;
	let qty = 1;
	const handleUpdate = (e) => {
		qty = e.detail;
	};
</script>

<div>
	<div class="text-2xl font-bold xl:text-4xl">{product.title[$locale]}</div>
	<div class="pt-2 xl:pt-4">
		<span class="text-xl xl:text-3xl">{parseInt(product.price)}€</span>
		<span class="pl-2 text-sm xl:text-xl">{$t('productdetails.description.tax')}</span>
	</div>
	<div class="xl:pt-2">{$t('productdetails.description.delivery_time')}</div>
	<div class="pt-2 border-b-2 border-lightGray" />
	<div class="pt-4">{$t('productdetails.description.quantity')}</div>
	<PlusMinusCounter on:update={handleUpdate} min="1" />
	<div class="pt-4">
		{product.description[$locale]}
	</div>
	<div class="py-8">
		<button class="w-full button" on:click={addToCart(product, qty)}>
			{$t('button.add_to_cart')}
		</button>
	</div>
</div>
