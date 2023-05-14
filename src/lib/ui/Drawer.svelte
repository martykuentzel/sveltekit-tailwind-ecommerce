<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	let mounted = false;
	export let isOpen = false;
	// by default Drawer opens from right. Make left-0 for left opening
	export let placement = 'right-0';
	// max size of content section
	export let maxScreenSize = 'max-w-7xl';

	const handleClickAway = () => {
		dispatch('clickAway');
		isOpen = !isOpen;
	};

	// scrolllock for content underneath drawer
	function scrollLock(isOpen) {
		if (mounted) {
			const body = document.querySelector('body');
			body.style.overflow = isOpen ? 'hidden' : 'auto';
		}
	}
	$: scrollLock(isOpen);

	onMount(() => {
		mounted = true;
		scrollLock(isOpen);
	});
</script>

<aside>
	<div class="fixed inset-0 w-full h-full z-50 overflow-hidden {isOpen ? 'visible' : 'invisible'}">
		<div
			class="w-screen h-full bg-black cursor-pointer duration-500 transition-opacity overflow-hidden {isOpen
				? 'opacity-70'
				: 'opacity-0'}"
			on:click={handleClickAway}
		/>
		<div
			class="absolute {placement} top-0 shadow-xl overflow-y-auto bg-white transition-all duration-300 h-full {maxScreenSize} {isOpen
				? 'w-screen'
				: 'w-0'}"
		>
			{#if isOpen}
				<div in:fade={{ duration: 800 }} out:fade={{ duration: 100 }}>
					<slot />
				</div>
			{/if}
		</div>
	</div>
</aside>
