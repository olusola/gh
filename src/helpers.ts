import { ProductType } from './shared.types'
import axios from 'axios'

export const fetchData = async (url: string) => {
	const response = await fetch(url)
	return await response.json()
}

export const postData = async (url: string, payload: any) => {
	const response = await axios.post(url, payload)
	return response.data
}

export const getAllProductsByCategory = (category: string, data: ProductType[]) => {
	return data?.filter((product: ProductType) => product.category.name === category)
}
