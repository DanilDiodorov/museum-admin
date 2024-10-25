import { ArticleForm } from '@/components/ArticleForm'
import { useGetArticle } from '@/hooks/use-get-article'
import React from 'react'
import { useParams } from 'react-router-dom'

export const ArtcilePage: React.FC = () => {
    const { id } = useParams()
    const { data } = useGetArticle(id || '')
    return (
        <div className="container">
            {data && <ArticleForm article={data} />}
        </div>
    )
}
