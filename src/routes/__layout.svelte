<script>
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/global.css';
	import { Cart } from '../stores/Cart.js';
	import { onMount } from 'svelte';
	import { init } from 'svelte-i18n';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	let cart;

	onMount(() => {
		// get cart details from localStorage
		console.log('get cart details from localStorage');
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			Cart.set(cart);
			console.log('cartItems');
			console.log(cart);
		}
	});

	// init language
	init({
		fallbackLocale: 'de',
		initialLocale: 'de'
	});
</script>

<SvelteToast options={{ reversed: true, intro: { x: -192 } }} />

<header class="bg-black">
	<AppBar />
</header>
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>

<style>
	:root {
		--toastBackground: #000;
		--toastBarBackground: #b9b9b9;
		--toastContainerRight: auto;
	}
</style>
