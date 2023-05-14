<script>
	import { fade } from 'svelte/transition';
	export let error;
</script>

<div class="absolute">
	{#if error}
		<p class="error" in:fade={{ duration: 200 }}>{error}</p>
	{/if}
</div>
