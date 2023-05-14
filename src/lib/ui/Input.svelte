<script>
	import Error from './Error.svelte';
	export let error;
	export let description;
	export let name;
	export let value;
	export let handleChange;
</script>

<div>
	<label for={name}>{description}</label>
	<input
		class="input {error ? 'border-rose-600' : 'border-black'}"
		aria-label={name}
		id={name}
		type="text"
		on:change={handleChange}
		bind:value
	/>
	<Error {error} />
</div>
