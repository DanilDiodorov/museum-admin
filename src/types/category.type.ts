import { ArticleType } from './article.type'

export type CategoryType = {
    id: string
    title: string
    article: ArticleType[]
}
