export type ArticleType = {
    id: string
    title: string
    text: string
    categoryId: string
}

export type UpdateArticleType = Partial<ArticleType>
