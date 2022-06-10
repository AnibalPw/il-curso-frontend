export const prepareData = ( data = [] ) => {

    return data.map(
        (dt) => ({
            ...dt,
        })
    );

}