import { http } from '../config/http';

const path = '/products/brazilian';

export const getBrazilianProductsAllService = async () => (
    await http.get(path)
);

export const getBrazilianProductByIdService = async (id: number) => (
    await http.get(`${path}/${id}`)
);