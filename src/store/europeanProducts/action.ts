import { getEuropeanProductsAllService } from "../../services/europeanProductsServices"
import { AppDispatch, AppThunk } from "../index"

export const getEuropeanProducts = (): AppThunk => {

    return async (dispatch: AppDispatch) => {

        const products = await getEuropeanProductsAllService()

        dispatch({type: 'GET_PRODUCTS_EUROPEAN', data: products.data})
    }
}