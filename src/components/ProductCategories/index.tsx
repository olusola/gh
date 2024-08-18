import useCategoriesQuery from '~/hooks/useCategoriesQuery'
import { CategoryType } from '~/shared.types'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'

type ProductCategoriesProps = {
	handleSelectedCategory: (category: string) => void
}

const ProductCategories = ({ handleSelectedCategory }: ProductCategoriesProps) => {
	const { data: categories } = useCategoriesQuery()
	return (
		<>
			<Select onValueChange={handleSelectedCategory}>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Filter by category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Categories</SelectLabel>
						{categories?.map((category: CategoryType) => {
							return (
								<SelectItem key={category.name} value={category.name} className="cursor-pointer">
									{category.name}
								</SelectItem>
							)
						})}
						<Separator />
						<SelectItem value="clear" className="cursor-pointer">
							Show All Products
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	)
}

export default ProductCategories
