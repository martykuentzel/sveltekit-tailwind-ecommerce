<script>
	import { page } from '$app/stores';
	import { Cart, IsCartOpen } from '../../stores/Cart.js';
	import CartDetails from '$lib/components/Cart/CartDetails.svelte';
	import { scale } from 'svelte/transition';
	import { expoIn } from 'svelte/easing';
	import { t, locale, locales } from '$lib/i18n/i18n.js';

	const handleToggle = () => {
		IsCartOpen.set(!$IsCartOpen);
	};
	let y = 0;
	$: cartNumber = $Cart.reduce((count, item) => count + item.qty, 0);
</script>

<CartDetails on:toggle={handleToggle} />
<!-- Navbar -->
<svelte:window bind:scrollY={y} />
<nav class="bg-black text-white container mx-auto p-4">
	<!-- Language Button -->
	<div class="absolute top-0 right-1 py-2 pr-2">
		<select
			class="cursor-pointer text-lightGray text-sm border-black bg-black"
			bind:value={$locale}
		>
			{#each locales as l}
				<option value={l}>{l}</option>
			{/each}
		</select>
	</div>
	<div class="flex items-center md:pl-14">
		<!-- Logo -->
		<div class="w-32 h-22 inline-flex">
			<a sveltekit:prefetch href="/">
				<img src="/logo.png" alt="" />
			</a>
		</div>
		<!-- Menu Items -->
		<div class="text-2xl font-bold space-x-6 pl-6 md:pl-20">
			<a
				class="hover:text-lightGray {$page.url.pathname == `/` && !$IsCartOpen ? 'border-b-2' : ''}"
				sveltekit:prefetch
				href="/">{$t('navbar.home')}</a
			>
			<a
				sveltekit:prefetch
				class="hover:text-lightGray {$page.url.pathname == `/products` && !$IsCartOpen
					? 'border-b-2'
					: ''}"
				href="/products">{$t('navbar.products')}</a
			>
		</div>
		<!-- Cart Button -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="group cursor-pointer fixed top-12 right-12 z-50 ml-auto py-2 p-1 pr-2 items-center md:flex hover:visible"
			class:active={$IsCartOpen}
			on:click={handleToggle}
		>
			{#if !$IsCartOpen}
				<!-- Cart Banner -->
				<span
					class="hidden w-0 right-0 bg-lightGray absolute ease-out duration-100 transition-all rounded-full -z-50 md:flex group-hover:w-full group-hover:h-full"
				/>
				<div
					class="hidden invisible text-2xl px-2 {y < 90
						? 'text-white'
						: 'text-black'} md:flex group-hover:visible"
				>
					{$t('navbar.shopping_cart')}
				</div>
				<!-- Cart Icon -->
				<svg
					in:scale|local={{ duration: 200, start: 1.5, opacity: 1, easing: expoIn }}
					class="block h-12 w-12 {y < 90 ? 'bg-white' : 'bg-black'} rounded-full p-2 ml-auto"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke={y < 90 ? 'black' : 'white'}
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/></svg
				>
				<!-- Cart Items count -->
				{#key cartNumber}
					<div
						class="flex rounded-full text-2sm fixed {y < 90
							? 'bg-white text-black'
							: 'bg-black'} items-center top-12 right-10 px-2"
						in:scale={{ duration: 200, start: 1.5, opacity: 1, easing: expoIn }}
					>
						{cartNumber}
					</div>
				{/key}
			{/if}
		</div>
	</div>
</nav>
