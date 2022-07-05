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
	import { t } from '$lib/i18n/i18n.js';
	export let products;
	const besteller = products.filter((product) => product.tags.includes('bestseller'));
</script>

<div class="text-center">
	<div class="p-12 text-4xl w-screen text-white font-snack tracking-wider bg-black">
		Quality Stainless Steel made in Berlin
	</div>
	<div class="pt-8">
		<div class="text-2xl">{$t('home.bestseller_title')}</div>
		<ProductList products={besteller} />
	</div>
</div>
