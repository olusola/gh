import { Separator } from '@radix-ui/react-select'
import useCartContext from '~/context/useCartContext'
import { Button } from '../ui/button'
import { postData } from '~/helpers'
import { baseApi } from '~/constants'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { RocketIcon } from 'lucide-react'

const CartItems = () => {
	const { cart, removeProductFromCart, clearCart } = useCartContext()
	const [orderId, setOrderId] = useState<string | null>(null)
	const [paymentStatus, setPaymenStatus] = useState<boolean>(false)

	const allOrders = cart?.map((item) => {
		const {
			product: { id },
			quantity,
		} = item
		return {
			id,
			quantity,
		}
	})

	const orderPayload = {
		products: allOrders,
	}

	const createNewOrder = () => {
		postData(`${baseApi}/orders`, orderPayload)
			.then((data) => {
				if (data?.id) return setOrderId(data?.id)
			})
			.catch((error) => {
				console.error('Error creating order:', error)
			})
	}

	const makePayment = () => {
		postData(`${baseApi}/orders/${orderId}/buy`, {})
			.then(() => {
				setPaymenStatus(true)
				// clearCart()
			})
			.catch((error) => {
				console.error('Error making payment:', error)
			})
	}

	return (
		<>
			{cart?.map((item) => {
				const {
					product: { id, name, price },
					quantity,
				} = item
				return (
					<div key={id} className="flex justify-between items-center p-2 border-b">
						<div>
							<h2 className="text-lg font-semibold">{name}</h2>
							<p className="text-sm">Price: {price}</p>
							<p className="text-sm">Quantity: {quantity}</p>
						</div>

						{!paymentStatus && (
							<Button variant={'destructive'} onClick={() => removeProductFromCart(id)}>
								Remove
							</Button>
						)}

						<Separator className="my-2" />
					</div>
				)
			})}
			{!orderId && cart?.length > 0 && (
				<Button onClick={createNewOrder} className="my-3">
					Create New Order
				</Button>
			)}

			{orderId && !paymentStatus && (
				<Alert className="bg-green-200 my-5">
					<RocketIcon className="h-4 w-4 text-blue-500" />
					<AlertTitle> Order created successfully</AlertTitle>
					<AlertDescription>Order Id: {orderId}</AlertDescription>
					<Button onClick={makePayment} className="my-3">
						Make Payment
					</Button>
				</Alert>
			)}

			{paymentStatus && (
				<Alert className="bg-yellow-300 my-5">
					<RocketIcon className="h-4 w-4" />
					<AlertTitle> Payment successful</AlertTitle>
					<AlertDescription>
						Order Id: {orderId} {paymentStatus}
					</AlertDescription>
				</Alert>
			)}
		</>
	)
}

export default CartItems
