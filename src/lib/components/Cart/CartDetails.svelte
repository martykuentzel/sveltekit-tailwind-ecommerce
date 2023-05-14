<script>
	import Drawer from '../../ui/Drawer.svelte';
	import CartItemsList from './CartItemsList.svelte';
	import CartShipping from './CartShipping.svelte';
	import CartBilling from './CartBilling.svelte';
	import CartPayment from './CartPayment.svelte';
	import CartConfirmation from './CartConfirmation.svelte';
	import { fade, scale } from 'svelte/transition';
	import { expoIn } from 'svelte/easing';
	import { Cart, IsCartOpen } from '../../../stores/Cart.js';
	import { IsShippingAddressValid } from '../../../stores/ShippingAddress.js';
	import { IsBillingAddressValid } from '../../../stores/BillingAddress.js';
	import { t } from '$lib/i18n/i18n.js';

	export let activeTab = 'content';

	const handleToggle = () => {
		IsCartOpen.set(!$IsCartOpen);
		activeTab = 'content';
	};

	const shippingCost = 6;
	const handleTab = (step) => {
		if ($Cart.length > 0) {
			activeTab = step;
		}
	};

	const handleFinishCart = () => {
		IsCartOpen.set(!$IsCartOpen);
		activeTab = 'content';
		localStorage.removeItem('cart');
		Cart.set([]);
	};

	$: subtotal = Math.round($Cart.reduce((sum, item) => sum + item.qty * item.price, 0) * 100) / 100;
</script>

<Drawer isOpen={$IsCartOpen} on:clickAway={handleToggle}>
	<div class="relative text-black">
		<div class="flex items-center text-xl mt-14 cursor-pointer text-lightGray lg:pl-8 xl:text-2xl">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="pb-4 px-14 lg:px-8 hover:text-black {activeTab == 'content'
					? 'text-black lg:border-b-4 lg:border-black z-50'
					: 'hidden lg:flex'}"
				on:click={() => handleTab('content')}
			>
				{$t('cartdetails.tab.content')}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="pb-4 px-14 lg:px-8 hover:text-black {activeTab == 'shippingAddress'
					? 'text-black lg:border-b-4 lg:border-black z-50'
					: 'hidden lg:flex'}"
				on:click={() => handleTab('shippingAddress')}
			>
				{$t('cartdetails.tab.shipping_address')}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="pb-4 px-14 lg:px-8 cursor-pointer {activeTab == 'billingAddress'
					? 'text-black lg:border-b-4 lg:border-black z-50'
					: 'hidden lg:flex'}"
				class:italic={!$IsShippingAddressValid}
				class:hover:text-black={$IsShippingAddressValid}
				on:click={() => {
					if ($IsShippingAddressValid) {
						handleTab('billingAddress');
					}
				}}
			>
				{$t('cartdetails.tab.billing_address')}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="pb-4 px-14 lg:px-8 {activeTab == 'payment'
					? 'text-black lg:border-b-4 lg:border-black z-50'
					: 'hidden lg:flex'}"
				class:italic={!$IsBillingAddressValid || !$IsShippingAddressValid}
				class:hover:text-black={$IsBillingAddressValid && $IsShippingAddressValid}
				on:click={() => {
					if ($IsBillingAddressValid && $IsShippingAddressValid) {
						handleTab('payment');
					}
				}}
			>
				{$t('cartdetails.tab.payment')}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="pb-4 px-14 lg:px-8 {activeTab == 'confirmation'
					? 'text-black lg:border-b-4 lg:border-black z-50'
					: 'hidden lg:flex'}"
				class:italic={!$IsBillingAddressValid || !$IsShippingAddressValid}
				class:hover:text-black={$IsBillingAddressValid && $IsShippingAddressValid}
				on:click={() => {
					if ($IsBillingAddressValid && $IsShippingAddressValid) {
						handleTab('confirmation');
					}
				}}
			>
				{$t('cartdetails.tab.confirmation')}
			</div>
			<!-- close button-->
			<div class="ml-auto pb-1 pr-14 duration-100 z-50 hover:scale-110">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg
					in:scale|local={{ duration: 200, start: 1.5, opacity: 1, easing: expoIn }}
					class="h-12 w-12 bg-black rounded-full p-2"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="white"
					stroke-width="2"
					on:click={handleToggle}
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg
				>
			</div>
		</div>
		<div class="absolute w-full border-b-4 border-lightGray top-11 xl:top-12" />
		<div class="my-8" />

		{#if $Cart.length > 0}
			<div class="mx-14">
				<div class="text-xl xl:text-2xl">
					<span class="lg:font-bold"> {$t('cartdetails.total_sum')}: </span>
					<span>{subtotal + shippingCost}€</span>
				</div>
				{#if activeTab == 'content'}
					<div in:fade={{ duration: 200 }}>
						<CartItemsList {shippingCost} on:next={() => handleTab('shippingAddress')} />
					</div>
				{:else if activeTab == 'shippingAddress'}
					<div in:fade={{ duration: 200 }}>
						<CartShipping
							on:next={() => handleTab('billingAddress')}
							on:back={() => handleTab('content')}
						/>
					</div>
				{:else if activeTab == 'billingAddress'}
					<div in:fade={{ duration: 200 }}>
						<CartBilling
							on:next={() => handleTab('payment')}
							on:back={() => handleTab('shippingAddress')}
						/>
					</div>
				{:else if activeTab == 'payment'}
					<div in:fade={{ duration: 200 }}>
						<CartPayment
							on:next={() => handleTab('confirmation')}
							on:back={() => handleTab('billingAddress')}
						/>
					</div>
				{:else if activeTab == 'confirmation'}
					<div in:fade={{ duration: 200 }}>
						<CartConfirmation on:sold={handleFinishCart} />
					</div>
				{/if}
			</div>
		{:else}
			<div class="pl-14 text-xl xl:text-xl">{$t('cartdetails.empty_cart')}</div>
		{/if}
	</div>
</Drawer>
