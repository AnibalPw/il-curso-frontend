import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    // useEffect(() => {
    //     console.log('initialState', initialState)
    // }, [initialState])

    return [ values, handleInputChange, reset ];

}