<script context="module">
	// export const prerender = true;
	export async function load({ fetch, params }) {
		let handle = params.handle;
		const res = await fetch(`/products/${handle}.json`);
		const { product } = await res.json();

		if (product != null) {
			return {
				props: {
					product
				}
			};
		}
		return {
			status: 301,
			redirect: '/products'
		};
	}
</script>

<script>
	import ProductDetails from '$lib/components/ProductDetails/ProductDetails.svelte';
	export let product;
</script>

<ProductDetails {product} />

