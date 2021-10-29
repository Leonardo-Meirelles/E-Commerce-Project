import { AppDispatch, AppThunk } from "../index";

export const toggleModal = (): AppThunk => {

    return async (dispatch: AppDispatch, getState) => {

        const { modal } = getState();

        dispatch({ type: 'TOGGLE_MODAL', data: !modal.open});
    };
};

export const assetsModal = (data: any): AppThunk => {

    return async (dispatch: AppDispatch) => {

        dispatch({ type: 'SET_ASSETS', data: data});
    };
};