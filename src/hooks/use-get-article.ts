import { articleService } from '@/services/article.service'
import { useQuery } from '@tanstack/react-query'

export const useGetArticle = (id: string) => {
    return useQuery({
        queryKey: ['article', id],
        queryFn: () => articleService.getById(id),
    })
}
