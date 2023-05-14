<script>
	import PlusMinusCounter from '../../ui/PlusMinusCounter.svelte';
	import { Cart } from '../../../stores/Cart.js';
	import { locale } from '$lib/i18n/i18n.js';

	export let item = null;

	const handleUpdate = (e, item) => {
		const updatedQty = e.detail;
		const cartId = item.id;

		Cart.update((currentCart) => {
			let cardItems = [...currentCart];
			const foundIndex = cardItems.findIndex((item) => item.id == cartId);
			if (updatedQty < 1) {
				const newCardItems = cardItems.filter((item) => item.id != cartId);
				localStorage.setItem('cart', JSON.stringify([...newCardItems]));
				return [...newCardItems];
			}
			cardItems[foundIndex] = { ...item, qty: updatedQty };
			localStorage.setItem('cart', JSON.stringify([...cardItems]));
			return [...cardItems];
		});
	};

	const handleDelete = (item) => {
		const cartId = item.id;

		Cart.update((currentCart) => {
			let cardItems = [...currentCart];
			const foundIndex = cardItems.findIndex((item) => item.id == cartId);
			const newCardItems = cardItems.filter((item) => item.id != cartId);
			localStorage.setItem('cart', JSON.stringify([...newCardItems]));
			return [...newCardItems];
		});
	};
</script>

<div class="grid mt-8 grid-cols-5 items-center text-xl">
	<div class="flex col-span-4 items-center md:col-span-2">
		<img
			src={item.image}
			class="object-contain border-2 border-lightGray w-32 h-32"
			alt="logo"
			loading="lazy"
		/>
		<div class="pl-4">
			<div class="pb-1">{item.title[$locale]}</div>
			<div class="pb-3 md:hidden">
				{Math.round(item.qty * item.price * 100) / 100}{item.currency}
			</div>
			<div class="md:hidden">
				<PlusMinusCounter on:update={(e) => handleUpdate(e, item)} counter={item.qty} />
			</div>
		</div>
	</div>
	<div class="hidden md:block">
		<PlusMinusCounter on:update={(e) => handleUpdate(e, item)} counter={item.qty} />
	</div>
	<div class="hidden text-center md:block">
		{Math.round(item.qty * item.price * 100) / 100}{item.currency}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-10 w-10 bg-black rounded-full p-2 mr-2 cursor-pointer duration-100 ml-auto block hover:scale-125"
		fill="none"
		viewBox="0 0 24 24"
		stroke="white"
		stroke-width="2"
		on:click={handleDelete(item)}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
		/>
	</svg>
</div>
