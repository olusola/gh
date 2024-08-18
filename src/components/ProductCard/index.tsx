import { ProductType } from '~/shared.types'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import useCartContext from '~/context/useCartContext'

type ProductCardProps = {
	productData: ProductType
}

const ProductCard = ({ productData }: ProductCardProps) => {
	const { addToCart } = useCartContext()

	const { name, price, category, image } = productData

	return (
		<>
			<Card>
				<CardContent className="space-y-2 py-3">
					<img width={'100%'} height={300} src={image} alt={name} />
					<CardTitle>{name}</CardTitle>
					<CardDescription>{category.name}</CardDescription>
				</CardContent>
				<Separator />
				<CardFooter className="py-2 flex flex-row justify-between align-middle">
					<span className="text-lg font-medium">£{price}</span>
					<Button variant={'secondary'} onClick={() => addToCart(productData)}>
						Add to cart
					</Button>
				</CardFooter>
			</Card>
		</>
	)
}

export default ProductCard
