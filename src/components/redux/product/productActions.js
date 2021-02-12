import {FETCH_PRODUCTS} from './productTypes'

export const  fetchActions=()=> async (dispatch)=>{
        const res=await fetch("/api/products");
        const data=await res.json();
        dispatch({
            type:FETCH_PRODUCTS,
            payload:data,
        });

        };
    
