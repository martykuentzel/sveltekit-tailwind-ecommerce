<script>
	import ProductDetails from '$lib/components/ProductDetails/ProductDetails.svelte';

	export let data;
	const product = data.props.product;
</script>

<ProductDetails {product} />
