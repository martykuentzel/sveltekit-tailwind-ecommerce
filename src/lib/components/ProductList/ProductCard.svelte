<script>
	import addToCart from '$lib/utils/addToCart.js';
	import { t, locale } from '$lib/i18n/i18n.js';
	export let product;
</script>

<div class="group card min-h-80 text-center hover:shadow-lg hover:visible">
	<a sveltekit:prefetch href={`/products/${product.handle}`}>
		<img
			src={product.images[0]}
			class="object-contain inline-flex w-full h-64"
			alt="product"
			loading="lazy"
		/>
	</a>
	<div>
		<span class="font-bold">{product.title[$locale]}</span>
		<span class="block text-gray-500 text-sm"> {parseInt(product.price)}€</span>
	</div>
	<div class="invisible group-hover:visible">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="group-2 cursor-pointer badge hover:visible" on:click={() => addToCart(product, 1)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline-block h-10 w-10 relative z-10"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
					clip-rule="evenodd"
				/>
			</svg>
			<span
				class="w-0 left-0 bg-lightGray absolute ease-out duration-100 transition-all rounded-full [.group-2:hover_&]:w-full [.group-2:hover_&]:h-full"
			/>
			<span class="invisible relative pr-2 z-10 [.group-2:hover_&]:visible"
				>{$t('button.add_to_cart')}</span
			>
		</div>
	</div>
</div>
