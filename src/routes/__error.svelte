<script context="module">
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script>
export let message
</script>
<div class="error">
    <h2>Ooops.. Error</h2>
    <p>{message}</p>
    <a href="/products">View all Products..</a>
</div>

<style>
    .error{
        text-align: center;
        margin-bottom: 60px;
    }
</style>