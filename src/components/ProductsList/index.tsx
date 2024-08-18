import { ProductType } from '~/shared.types'
import ProductCard from '../ProductCard'

type ProductListProps = {
	productList: ProductType[] | []
}

const ProductList = ({ productList }: ProductListProps) => {
	return (
		<>
			<ul className="list-none grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
				{productList?.map((product: ProductType) => {
					return (
						<li key={product.id}>
							<ProductCard productData={product} />
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ProductList
