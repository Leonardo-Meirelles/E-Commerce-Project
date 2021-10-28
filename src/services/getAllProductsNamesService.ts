import { http } from '../config/http'

const path = '/products/names'

export const getAllProductsNamesService = async () => (
    await http.get(path)
)