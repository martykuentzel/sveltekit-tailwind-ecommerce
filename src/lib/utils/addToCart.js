import { Cart, IsCartOpen } from '../../stores/Cart.js';

const addToCart = (product, qty) => {
	Cart.update((currentCart) => {
		let cardItems = [...currentCart];

		if (cardItems.filter((item) => item.productId === product.id).length > 0) {
			const updatedCardItems = cardItems.map((item) =>
				item.productId === product.id ? { ...item, qty: item.qty + qty } : item
			);
			localStorage.setItem('cart', JSON.stringify([...updatedCardItems]));
			IsCartOpen.set(true);
			return [...updatedCardItems];
		}
		const newItem = {
			id: cardItems.slice(-1)[0] ? cardItems.slice(-1)[0].id + 1 : 0,
			productId: product.id,
			qty: qty,
			title: product.title,
			price: product.price,
			currency: product.currency,
			image: product.images[0]
		};
		localStorage.setItem('cart', JSON.stringify([...cardItems, newItem]));
		IsCartOpen.set(true);
		return [...cardItems, newItem];
	});
};

export default addToCart;
