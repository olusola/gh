import { createContext, ReactNode, useState } from 'react'
import { CartContextType, CartItemsType, ProductType } from '~/shared.types'

const CartContext = createContext<CartContextType>({
	cart: [],
	addToCart: () => {},
	clearCart: () => {},
	removeProductFromCart: () => {},
})

const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItemsType[]>([])

	const addToCart = (product: ProductType) => {
		const isProductInCart = cart.some((item) => item.product.id === product.id)
		if (isProductInCart) {
			setCart(
				cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
			)
		} else {
			setCart([...cart, { product, quantity: 1 }])
		}
	}

	const removeProductFromCart = (id: ProductType['id']) => {
		const isProductInCart = cart.some((item) => item.product.id === id)
		if (isProductInCart) {
			setCart(cart.filter((item) => item.product.id !== id))
		}
	}

	const clearCart = () => {
		setCart([])
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart, removeProductFromCart }}>
			{children}
		</CartContext.Provider>
	)
}
export { CartProvider, CartContext }
