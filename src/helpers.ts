import { ProductType } from './shared.types'

export const fetchData = async (url: string) => {
	const response = await fetch(url)
	return await response.json()
}

export const getAllProductsByCategory = (category: string, data: ProductType[]) => {
	return data?.filter((product: ProductType) => product.category.name === category)
}
