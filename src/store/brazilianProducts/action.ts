import { getBrazilianProductsAllService } from "../../services/brazilianProductsServices"
import { AppDispatch, AppThunk } from "../index"

export const getBrazilianProducts = (): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const products = await getBrazilianProductsAllService()

        dispatch({type: 'GET_PRODUCTS_BRAZILIAN', data: products.data})
    }
}