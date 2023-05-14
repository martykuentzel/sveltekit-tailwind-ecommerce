<script>
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	export let counter = 1;
	export let min = 0;
	let previousN = counter;

	const increment = () => {
		counter++;
		dispatch('update', counter);
	};
	const decrement = () => {
		if (counter > min) {
			counter--;
			dispatch('update', counter);
		}
	};
	const handleChange = () => {
		counter = counter < min ? previousN : parseInt(counter);
		dispatch('update', counter);
	};

	const validator = (node, value) => {
		return {
			update(value) {
				counter = value === null || counter < node.min ? previousN : parseInt(value);
				previousN = counter;
			}
		};
	};
</script>

<div class="number">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="inline-block h-10 w-10 cursor-pointer duration-100 hover:scale-125"
		viewBox="0 0 20 20"
		fill="currentColor"
		on:click={decrement}
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
			clip-rule="evenodd"
		/>
	</svg>

	<input
		type="number"
		use:validator={counter}
		bind:value={counter}
		on:change={handleChange}
		class="align-middle inline-block text-center border-2 border-lightGray w-10 h-8 text-sm xl:w-20 xl:text-xl"
		{min}
	/>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="inline-block h-10 w-10 cursor-pointer duration-100 hover:scale-125"
		viewBox="0 0 20 20"
		fill="currentColor"
		on:click={increment}
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
			clip-rule="evenodd"
		/>
	</svg>
</div>

<style>
	.number {
		font-size: 0;
		/* disable text selection */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
	}

	/* Hide Arrows From Input Number */
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
