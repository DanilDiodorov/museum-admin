import React, { useState } from 'react'
import { Input } from './ui/Input'
import { ArticleType } from '@/types/article.type'
import { TextEditor } from './TextEditor'
import { Button } from './ui/Button'
import { useUpdateArticle } from '@/hooks/use-update-article'
import { useAddArticle } from '@/hooks/use-add-article'

interface Props {
    article?: ArticleType
    categoryId?: string | null
}

export const ArticleForm: React.FC<Props> = ({ article, categoryId }) => {
    const [title, setTitle] = useState<string>(article?.title || '')
    const [text, setText] = useState<string>(article?.text || '')
    const { mutate: updateMutate, isPending: updateIsPending } =
        useUpdateArticle(article?.id)
    const { mutate: addMutate, isPending: addIsPending } = useAddArticle()

    const handleClick = () => {
        if (title && text && article) {
            updateMutate({
                id: article.id,
                data: {
                    id: article.id,
                    title,
                    text,
                    categoryId: article.categoryId,
                },
            })
        } else if (title && text && categoryId) {
            addMutate({
                title,
                text,
                categoryId,
            })
        }
    }

    return (
        <>
            <div className="w-[600px] m-auto">
                <div className="flex flex-col gap-3">
                    <Input
                        placeholder="Название"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextEditor value={text} onChange={(e) => setText(e)} />
                    <Button
                        onClick={handleClick}
                        className="w-[300px]"
                        disabled={updateIsPending || addIsPending}
                    >
                        {article ? 'Сохранить' : 'Создать'}
                    </Button>
                </div>
            </div>
        </>
    )
}
