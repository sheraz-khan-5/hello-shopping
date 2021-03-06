    import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
    import thunk from 'redux-thunk';
    import { cartReducer } from './components/redux/product/cartReducer';
import { orderReducer } from './components/redux/product/orderReducer';
    import {productReducer} from './components/redux/product/productReducer';
    
    const initialState={};
    const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
    const store= createStore(
        combineReducers({
            products:productReducer,
            cart:cartReducer,
            order:orderReducer
        }),
        initialState,
        composeEnhancer(applyMiddleware(thunk))
    );
  
    export default store;