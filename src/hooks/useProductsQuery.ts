import { useQuery } from '@tanstack/react-query'
import { baseApi } from '~/constants'
import { fetchData } from '~/helpers'
import { ProductType } from '~/shared.types'

const useProductsQuery = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: () => fetchData(`${baseApi}/products?norandom`),
		select: (data) => {
			const slicedList = data.slice(0, 10)

			const groupedProductsByCategory = slicedList?.reduce((acc: Record<string, any[]>, product: ProductType) => {
				const category = product.category.name
				if (!acc[category]) {
					acc[category] = []
				}
				acc[category].push(product)
				return acc
			}, {})

			const sortedProductsCategories = groupedProductsByCategory && Object.keys(groupedProductsByCategory).sort()

			const flatProductdata = sortedProductsCategories?.reduce(
				(arr: ProductType[], categoryKey: string) => [...arr, ...groupedProductsByCategory[categoryKey]],
				[],
			)

			return flatProductdata
		},
	})
}

export default useProductsQuery
