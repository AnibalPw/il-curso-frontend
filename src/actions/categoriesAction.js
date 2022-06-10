import { types } from "../types/types";
import { fetchWithToken } from "../helpers/fetch";
import { prepareData } from "../helpers/prepareData";

//Cargar todas la categorias
export const categoriesStartLoading = () => {
    return async(dispatch, getState) => {

        try {

            const resp = await fetchWithToken( 'categories' );
            const body = await resp.json(); //retorna el arreglo de todas las categorias

            console.log('body', body)
            const categories = prepareData( body.categories );
            dispatch( categoryLoaded( categories ) );

        } catch (error) {
            console.log(error)
        }

    }
}

const categoryLoaded = (categories) => ({
    type:  types.categoryLoaded,
    payload: categories
})