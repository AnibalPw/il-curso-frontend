
const fetchWithoutToken = ( endpoint, data, method = 'GET' ) =>{

    // const url = `${baseUrl}/${endpoint}`; //localhost:4000:/api
    const url = `http://localhost:4000/api/${endpoint}`; //localhost:4000:/api

    console.log(url)
    if ( method === 'GET' ){
        return fetch( url );
        
    }else{

        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}


const fetchWithToken = ( endpoint, data, method = 'GET' ) =>{

    const url = `http://localhost:4000/api/${endpoint}`; //localhost:4000:/api

    const token = localStorage.getItem( 'token' ) || ''; //Porque puede enviar null por aquello

    if ( method === 'GET' ){
        return fetch( url, {
            method,
            headers:{
                'x-token': token
            }
        } );
        
    }else{

        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchWithoutToken,
    fetchWithToken,
    
}
