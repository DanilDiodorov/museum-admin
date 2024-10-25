import { ArticleType } from '@/types/article.type'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    article: ArticleType
}

export const ArticleItem: React.FC<Props> = ({ article }) => {
    return (
        <Link to={`/article/${article.id}`}>
            <div className="bg-gray-100 rounded-md overflow-hidden hover:shadow-md">
                <div>
                    <img
                        src="https://icdn.lenta.ru/images/2024/10/24/16/20241024161232243/owl_wide_1200_39bd605b52bfc5391882fdc43eef30b3.jpg"
                        alt={article.title}
                    />
                </div>
                <div className="p-3">
                    <p className="text-xl font-bold">{article.title}</p>
                    {/* <p>{article.text}</p> */}
                </div>
            </div>
        </Link>
    )
}
