<script>
	import { page } from '$app/stores';
</script>

<div class="text-rose-600 italic m-52 text-xl text-center">
	<h2>Ooops.. Error</h2>
	<p>{$page.error.message}</p>
	<a href="/products" class="underline">View all Products..</a>
</div>
