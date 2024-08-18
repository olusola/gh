import useCartContext from '~/context/useCartContext'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import CartItems from '../CartItems'
import { Button } from '../ui/button'

const Cart = () => {
	const { cart, clearCart } = useCartContext()

	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="secondary">Cart({cart.length})</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle className="">
							<h3>Cart({cart.length})</h3>
							{cart?.length > 0 && (
								<Button variant={'ghost'} className="pl-0" onClick={clearCart}>
									Clear basket
								</Button>
							)}
						</SheetTitle>
						<SheetDescription>{cart?.length === 0 && <p>Cart is empty</p>}</SheetDescription>
					</SheetHeader>
					<CartItems />
				</SheetContent>
			</Sheet>
		</>
	)
}

export default Cart
