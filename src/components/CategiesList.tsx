import React from 'react'
import { CategoryItem } from './CategyItem'
import { useGetCategories } from '@/hooks/use-get-categories'

export const CategoriesList: React.FC = () => {
    const { data } = useGetCategories()

    return (
        <div>
            {data?.map((el) => {
                return <CategoryItem key={el.id} category={el} />
            })}
        </div>
    )
}
