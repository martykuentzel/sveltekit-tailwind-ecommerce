import products from '$lib/utils/dummyData';

export async function get() {
	return {
		status: 200,
		body: { products }
	};
}