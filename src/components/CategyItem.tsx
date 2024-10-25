import React from 'react'
import { ArticleItem } from './ArticleItem'
import { CategoryType } from '@/types/category.type'
import { Link } from 'react-router-dom'

interface Props {
    category: CategoryType
}

export const CategoryItem: React.FC<Props> = ({ category }) => {
    return (
        <div>
            <div className="text-2xl font-bold">{category.title}</div>
            <div
                className="grid gap-3 mt-3"
                style={{
                    gridTemplateColumns: '1fr 1fr 1fr',
                }}
            >
                {category.article.map((el) => (
                    <ArticleItem key={el.id} article={el} />
                ))}
                <Link
                    to={`/article/add?categoryId=${category.id}`}
                    className="h-full"
                >
                    <div className="bg-gray-100 rounded-md text-5xl flex items-center justify-center hover:cursor-pointer">
                        +
                    </div>
                </Link>
            </div>
        </div>
    )
}
