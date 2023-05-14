const products = [
	{
		id: 1,
		handle: 'serviette-holder',
		title: {
			en: 'Serviette Holder',
			de: 'Servietten Halter'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_1.jpg'],
		price: 14.0,
		currency: '€',
		tags: ['bestseller']
	},
	{
		id: 2,
		handle: 'candle-holder',
		title: {
			en: 'Candle Holder',
			de: 'Kerzen Halter'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_2.jpg'],
		price: 24.0,
		currency: '€',
		tags: ['bestseller']
	},
	{
		id: 3,
		handle: 'fire-coal-lighter',
		title: {
			en: 'Fire Coal Lighter',
			de: 'Grill Anzünder'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_4.jpg'],
		price: 50.0,
		currency: '€',
		tags: []
	},
	{
		id: 4,
		handle: 'shoehorn',
		title: {
			en: 'Shoehorn',
			de: 'Schuhanzieher'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_5_1.jpg', '/products/product_5_2.jpg', '/products/product_5_3.jpg'],
		price: 20.0,
		currency: '€',
		tags: []
	},
	{
		id: 5,
		handle: 'shoehorn-2',
		title: {
			en: 'Shoehorn #2',
			de: 'Schuhanzieher #2'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_5_1.jpg', '/products/product_5_2.jpg', '/products/product_5_3.jpg'],
		price: 20.0,
		currency: '€',
		tags: []
	},
	{
		id: 6,
		handle: 'fire-coal-lighter-2',
		title: {
			en: 'Fire Coal Lighter #2',
			de: 'Grill Anzünder #2'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_4.jpg'],
		price: 50.0,
		currency: '€',
		tags: []
	},
	{
		id: 7,
		handle: 'serviette-holder-2',
		title: {
			en: 'Serviette Holder #2',
			de: 'Servietten Halter #2'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_1.jpg'],
		price: 14.0,
		currency: '€',
		tags: []
	},
	{
		id: 8,
		handle: 'candle-holder-2',
		title: {
			en: 'Candle Holder #2',
			de: 'Kerzen Halter #2'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_2.jpg'],
		price: 24.0,
		currency: '€',
		tags: []
	},
	{
		id: 9,
		handle: 'serviette-holder-3',
		title: {
			en: 'Serviette Holder #3',
			de: 'Servietten Halter #3'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_1.jpg'],
		price: 14.0,
		currency: '€',
		tags: []
	},
	{
		id: 10,
		handle: 'candle-holder-3',
		title: {
			en: 'Candle Holder #3',
			de: 'Kerzen Halter #3'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_2.jpg'],
		price: 24.0,
		currency: '€',
		tags: []
	},
	{
		id: 11,
		handle: 'fire-coal-lighter-3',
		title: {
			en: 'Fire Coal Lighter #3',
			de: 'Grill Anzünder #3'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_4.jpg'],
		price: 50.0,
		currency: '€',
		tags: []
	},
	{
		id: 12,
		handle: 'shoehorn-3',
		title: {
			en: 'Shoehorn #3',
			de: 'Schuhanzieher #3'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_5_1.jpg', '/products/product_5_2.jpg', '/products/product_5_3.jpg'],
		price: 20.0,
		currency: '€',
		tags: []
	},
	{
		id: 13,
		handle: 'shoehorn-4',
		title: {
			en: 'Shoehorn #4',
			de: 'Schuhanzieher #4'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_5_1.jpg', '/products/product_5_2.jpg', '/products/product_5_3.jpg'],
		price: 20.0,
		currency: '€',
		tags: []
	},
	{
		id: 14,
		handle: 'fire-coal-lighter-4',
		title: {
			en: 'Fire Coal Lighter #4',
			de: 'Grill Anzünder #4'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_4.jpg'],
		price: 50.0,
		currency: '€',
		tags: []
	},
	{
		id: 15,
		handle: 'serviette-holder-4',
		title: {
			en: 'Serviette Holder #4',
			de: 'Servietten Halter #4'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_1.jpg'],
		price: 14.0,
		currency: '€',
		tags: []
	},
	{
		id: 16,
		handle: 'candle-holder-4',
		title: {
			en: 'Candle Holder #4',
			de: 'Kerzen Halter #4'
		},
		description: {
			en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.',
			de: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maiores officiis dolores suscipit, eveniet esse architecto minima nam! Exercitationem distinctio tenetur reprehenderit vel cupiditate possimus officia ab odio ipsam necessitatibus.'
		},
		images: ['/products/product_2.jpg'],
		price: 24.0,
		currency: '€',
		tags: []
	}
];

export default products;
