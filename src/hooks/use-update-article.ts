import { articleService } from '@/services/article.service'
import { ArticleType } from '@/types/article.type'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useUpdateArticle = (id?: string) => {
    const navigate = useNavigate()
    return useMutation({
        mutationKey: ['updateArticle'],
        mutationFn: articleService.update,
        onSuccess: (data: ArticleType) => {
            if (id !== data.id) {
                navigate(`/article/${data.id}`, { replace: true })
            }
        },
    })
}
