import { http } from '../config/http'

const path = '/europeanProducts'

export const getEuropeanProductsAllService = async () => (
    await http.get(path)
)

export const getEuropeanProductByIdService = async (id: number) => (
    await http.get(`${path}/${id}`)
)