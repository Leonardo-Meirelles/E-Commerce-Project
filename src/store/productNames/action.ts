import { getAllProductsNamesService } from "../../services/getAllProductsNamesService";
import { AppDispatch, AppThunk } from "../index";

export const saveProductNames = (): AppThunk => {

    return async (dispatch: AppDispatch, getState) => {

        const names = await getAllProductsNamesService();
        
        const allNames = [...names.data.namesBr, ...names.data.namesEu];

        dispatch({ type: 'SAVE_NAMES', data: allNames});
    };
};