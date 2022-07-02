import products from '$lib/utils/dummyData';

export async function get({ params }) {
	const product = products.find((g) => g.handle === params.handle);
	if (product) {
		return {
			status: 200,
			body: { product }
		};
	}
	return {
		status: 404
	};
}
