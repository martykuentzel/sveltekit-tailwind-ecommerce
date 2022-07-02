<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch(`/products.json`);
		const { products } = await res.json();
		return { props: { products }, cache: 300 };
	}
</script>

<script>
	import ProductList from '$lib/components/ProductList/ProductList.svelte';
	export let products;
</script>

<ProductList {products} />
