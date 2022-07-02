import { writable } from 'svelte/store';

export const Cart = writable([]);

export const IsCartOpen = writable(false);
