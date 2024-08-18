import { useQuery } from '@tanstack/react-query'
import { baseApi } from '~/constants'
import { fetchData } from '~/helpers'

const useCategoriesQuery = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => fetchData(`${baseApi}/categories?norandom`),
	})
}

export default useCategoriesQuery
