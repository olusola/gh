export type CategoryType = {
	name: string
	order: number
}

export type ProductType = {
	id: number
	name: string
	price: number
	category: CategoryType
	image: string
	description: string
}

export type CartItemsType = {
	product: ProductType
	quantity: number
}

export type CartContextType = {
	cart: CartItemsType[]
	addToCart: (product: ProductType) => void
	clearCart: () => void
}
