import { axiosClassic } from '@/lib/api-instance'

class CategoryService {
    private BASE_URL = '/category'

    get = async () => {
        return (await axiosClassic.get(`${this.BASE_URL}`)).data
    }
}

export const categoryService = new CategoryService()
