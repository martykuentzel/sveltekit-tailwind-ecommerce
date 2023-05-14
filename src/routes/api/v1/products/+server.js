import products from '$lib/utils/dummyData';

// This is some dummy API
// In reality you would replace this with calls to another backend or database
/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(JSON.stringify({ products }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
