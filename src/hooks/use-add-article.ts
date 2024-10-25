import { articleService } from '@/services/article.service'
import { ArticleType } from '@/types/article.type'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useAddArticle = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationKey: ['addArticle'],
        mutationFn: articleService.create,
        onSuccess: (data: ArticleType) => {
            navigate(`/article/${data.id}`, { replace: true })
        },
    })
}
