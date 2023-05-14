export async function load({ fetch }) {
	const res = await fetch(`/api/v1/products`);
	const { products } = await res.json();
	return { props: { products }, cache: 300 };
}
