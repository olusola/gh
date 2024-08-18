import useCartContext from '~/context/useCartContext'
import { Button } from '../ui/button'

const Cart = () => {
	const { cart } = useCartContext()
	console.log({ cart })

	return (
		<div>
			<Button variant="secondary">Cart({cart.length})</Button>
		</div>
	)
}

export default Cart
