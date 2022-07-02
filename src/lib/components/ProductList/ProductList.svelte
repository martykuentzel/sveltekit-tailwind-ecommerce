<script>
	import ProductCard from './ProductCard.svelte';
	export let products = [];
</script>

<div class="p-6 md:px-32 xl:px-72">
	<div class="my-8 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
		{#each products as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</div>
