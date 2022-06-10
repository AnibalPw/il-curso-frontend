import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchWithoutToken( 'auth/signin', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name,
                apellido: body.apellido,
                roles: body.roles
            }) )

 
            
        } else {
      
            console.log('Error' , body.msg)
        }
        

    }
}

export const startRegister = ( email, password, name, lastName ) => {
    return async( dispatch ) => {


        const resp = await fetchWithoutToken( 'auth/signup', { name, lastName, email, password }, 'POST' );
        // const resp = await fetchWithToken( 'auth/signup', { name, lastName, email, password }, 'POST' );
        const body = await resp.json();

        // console.log('resp', resp)
        if( body.ok ) {
            localStorage.setItem('tokenActivacion', body.tokenActivacion );
            localStorage.setItem('message', body.msg);



        } else {
            console.log('Error' , body.msg)
        }
    }
}


const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


//Revalidar token
export const startChecking = () => {
    return async(dispatch) => {

        try {
            const resp = await fetchWithToken( 'auth/renew' );
            const body = await resp.json();
            // console.log('body', body)

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }) )
                
            } else {
                dispatch( checkingFinish() );
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        
        
        dispatch( logout() );
       
    }
}

const logout = () => ({ type: types.authLogout })
