import { useEffect, useState } from 'react'
import Cart from '~/components/Cart'
import ProductCategories from '~/components/ProductCategories'
import ProductList from '~/components/ProductsList'
import { Separator } from '~/components/ui/separator'
import { getAllProductsByCategory } from '~/helpers'
import useProductsQuery from '~/hooks/useProductsQuery'
import { ProductType } from '~/shared.types'

export default function Home() {
	const { data, isLoading, error } = useProductsQuery()

	const [list, setList] = useState<ProductType[] | []>([])

	useEffect(() => {
		setList(data)
	}, [data])

	const getSelectedCategory = (category: string) => {
		if (category === 'clear') return setList(data)

		setList(getAllProductsByCategory(category, data))
	}

	return (
		<main className="p-10">
			<div className="flex flex-row justify-between align-middle">
				<ProductCategories handleSelectedCategory={getSelectedCategory} />
				<Cart />
			</div>
			<Separator className="my-8" />

			{isLoading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{!isLoading && !error && list?.length === 0 && <p>No products found</p>}
			{!isLoading && !error && <ProductList productList={list} />}
		</main>
	)
}
