import { ArticleForm } from '@/components/ArticleForm'
import { useSearchParams } from 'react-router-dom'

export const AddArticlePage = () => {
    const [searchParams] = useSearchParams()

    return <ArticleForm categoryId={searchParams.get('categoryId')} />
}
