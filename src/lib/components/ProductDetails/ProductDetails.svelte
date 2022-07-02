<script>
	import ProductDetailsDescription from './ProductDetailsDescription.svelte';
	import ProductDetailsPictures from './ProductDetailsPictures.svelte';
	export let product;
</script>

<div class="grid grid-cols-5 text-sm px-6 min-h-[42rem] py-8 md:px-12 xl:px-64 xl:text-xl">
	<div class="col-span-5 lg:col-span-3">
		<ProductDetailsPictures {product} />
	</div>
	<div class="col-span-5 lg:col-span-2 lg:pr-0">
		<ProductDetailsDescription {product} />
	</div>
</div>
