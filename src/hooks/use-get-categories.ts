import { categoryService } from '@/services/category.service'
import { CategoryType } from '@/types/category.type'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () => {
    return useQuery<CategoryType[]>({
        queryKey: ['categories'],
        queryFn: categoryService.get,
    })
}
