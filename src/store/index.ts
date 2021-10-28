import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import europeanProductsReducer from './europeanProducts/reducer';
import brazilianProductsReducer from './brazilianProducts/reducer';
import productNamesReducer from './productNames/reducer';
import openModalReducer from './openModal/reducer'

const reducers = combineReducers({
    europeanProducts: europeanProductsReducer,
    brazilianProducts: brazilianProductsReducer,
    productNames: productNamesReducer,
    modal: openModalReducer
});

const middlewares = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, compose);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;