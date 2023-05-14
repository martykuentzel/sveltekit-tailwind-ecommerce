export async function load({ fetch, params }) {
	const res = await fetch(`/api/v1/products`);
	const { products } = await res.json();
	const product = products.find((g) => g.handle === params.handle);
	if (product != null) {
		return {
			props: {
				product
			}
		};
	}
	return {
		status: 301,
		redirect: '/products'
	};
}
