import { axiosClassic } from '@/lib/api-instance'
import { UpdateArticleType } from '@/types/article.type'

class ArticleService {
    private BASE_URL = '/article'

    get = async () => {
        return (await axiosClassic.get(`${this.BASE_URL}`)).data
    }

    getById = async (id: string) => {
        return (await axiosClassic.get(`${this.BASE_URL}/${id}`)).data
    }

    update = async ({ id, data }: { id: string; data: UpdateArticleType }) => {
        return (await axiosClassic.patch(`${this.BASE_URL}/${id}`, data)).data
    }

    create = async (data: UpdateArticleType) => {
        return (await axiosClassic.post(`${this.BASE_URL}`, data)).data
    }
}

export const articleService = new ArticleService()
