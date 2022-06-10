import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddLearning, startAddPrevKnowledge, startAddTargetStudent, startAddUpdateInformation, startDeleteLearning, startDeletePrevKnowledge, startDeleteTargetStudent, startUpdateLearning, startUpdatePrevKnowledge, startUpdateTargetStudent } from '../../../../../actions/courseInstructorAction';


import { InputField } from './InputField'


export const CourseInformationForm = () => {

    const dispatch = useDispatch();
    const { targetStudents, learning, prevKnowledge }  = useSelector(state => ( state.coursesI.activeCourse !== null ) ? state.coursesI.activeCourse : {})

    const [targetStValue, setTargeStValues] = useState( (targetStudents?.length > 0) ? targetStudents.map( data => { return data }) : [{ targetStudent: '' }])
    const [learnValue, setLearnValue] = useState( (learning?.length > 0) ? learning.map( data => { return data }) : [{ learning: '' }] )
    const [prevKnowValue, setPrevKnowValue] = useState( (prevKnowledge?.length > 0) ? prevKnowledge.map( data => { return data }) : [{ prevKnowledge: '' }] )

    const [disableCursor, setDisableCursor] = useState(true)
    const [isValid, setIsValid] = useState(false)
    const [vacio, setVacio] = useState(false)
    
    useEffect(() => {

        if(targetStudents?.length > 0 ) {
            setTargeStValues( targetStudents.map( data => { return data }) )
        }

        if(learning?.length > 0 ) {
            setLearnValue( learning.map( data => { return data }) )
        }

        if(prevKnowledge?.length > 0 ) { 
            setPrevKnowValue( prevKnowledge.map( data => { return data }) )
        }

    }, [targetStudents, learning, prevKnowledge])



    const handleOnAdd = ( field ) => {

        let newfield 

        if( field === 'targetStudent' ) {
            newfield = { targetStudent: '' }
            setTargeStValues([...targetStValue, newfield])
        }
        if( field === 'learning' ) {
            newfield = { learning: '' }
            setLearnValue([...learnValue, newfield])
        }
        if( field === 'prevKnow' ) {
            newfield = { prevKnowledge: '' }
            setPrevKnowValue([...prevKnowValue, newfield])
        }

    };

    //Reutilizar los mismo handle
    const handleOnChange = ( idParent, indexParent, editingField, event ) => {

        let informationMap
        let id
        let data 

        if( editingField === 'targetStudent' ) {
            data = [...targetStValue]
            informationMap = targetStudents

        }else if( editingField === 'learning' ){
            data = [...learnValue]
            informationMap = learning

        }else{
            data = [...prevKnowValue]
            informationMap = prevKnowledge
        }
        
        if( idParent === undefined ){
            
            id = indexParent 
            data[id][event.target.name] = event.target.value;

            if( editingField === 'targetStudent') { setTargeStValues(data); }
            if( editingField === 'learning' ){ setLearnValue(data); }
            if( editingField === 'prevKnowledge' ){ setPrevKnowValue(data); }

        }else { 

            id = idParent 

            let data = informationMap.map( est => {
    
                if (String(est._id) === String( id )) {
                    est[event.target.name] = event.target.value;
                }
                return est
            });

            if( editingField === 'targetStudent'){ setTargeStValues([...data]); }
            if( editingField === 'learning' ){ setLearnValue([...data]); }
            if( editingField === 'prevKnowledge' ){ setPrevKnowValue([...data]); }

        }

        setDisableCursor(false)

    };

    const handleOnRemove = ( idToDelete, indexToDelete, fielToDelete ) => {

        let data = []

        if( fielToDelete === 'targetStudent') {

            data = [...targetStValue]

            if( idToDelete === undefined ){ 
                data.splice(indexToDelete, 1)
                setTargeStValues(data)
            }else{
                const filtro = targetStudents.filter(eo => eo._id === idToDelete)
                dispatch( startDeleteTargetStudent([ ...filtro ]) );
            }
            
        }else if( fielToDelete === 'learning' ){
            
            data = [...learnValue]
            
            if( idToDelete === undefined ){ 
                data.splice(indexToDelete, 1)
                setLearnValue(data)
            }else{
                const filtro = learning.filter(eo => eo._id === idToDelete)
                dispatch( startDeleteLearning([ ...filtro ]) );
            }
            
        }else{
        
            data = [...prevKnowValue]

            if( idToDelete === undefined ){ 
                data.splice(indexToDelete, 1)
                setPrevKnowValue(data)

            }else{
                const filtro = prevKnowledge.filter(cnp => cnp._id === idToDelete)
                dispatch(startDeletePrevKnowledge([...filtro]));
            }

        }
    };

    const validateField = async () =>{

        let mensaje 

        // if( targetStValue.length === 0 ){
        if(targetStValue?.length === 0 || learnValue?.length === 0 || prevKnowValue?.length === 0){

            setDisableCursor(true)
            setIsValid(false)
            setVacio(true)
            return 'Agregar campos'
        }
      

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();


        let mensaje = ''

        mensaje = await validateField()

        if( vacio === true ){
            setVacio(false)
            return alert(mensaje)
        }else{
            mensaje = ''
        }




        dispatch( startAddUpdateInformation([ targetStValue, learnValue, prevKnowValue ]) )
    }

  return (
    <div style={{background: '#212429', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px'}}
        className=" bg-white rounded p-6 shadow-lg h-full ">

        <h3 className="text-3xl w-full text-center ">Información del curso</h3>

        <form onSubmit={handleSubmit}>

            <div className="">
                <p>¿Quién debería tomar este curso?</p>
                <div className="mb-4 mt-3 text-sm font-medium">

                {
                    targetStValue?.map( ( ts, index ) => (
                        <div 
                            key={ ts._id || index }
                            className="grid grid-cols-4 grid-flow-row gap-2 space-y-1"
                        >
                    
                            <InputField
                                // {...row}
                                type="text"
                                indexParent={index}
                                idParent={ts._id}
                                editingField='targetStudent'
                                name="targetStudent"
                                value={ts.targetStudent}
                                onChange={handleOnChange}
                                placeholder="Ejemplo: Principiantes de Javascript"
                                className="col-start-1 col-span-3 focus:outline-none text-gray-500 rounded-md p-1 pl-2 mt-1"
                            />

                            <button
                            type="button" 
                            className="flex w-8 h-8 items-center justify-center rounded-md text-gray-400 border border-gray-300" 
                            onClick={() => handleOnRemove(ts._id, index, 'targetStudent')}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>

                        </div>
                                // {/* <span class="relative items-center font-medium text-red-500 text-xs">
                                //     Invalid username field !
                                // </span> */}
                        // </div>    


                    ))
                } 
                    <div className="grid grid-cols-4 grid-flow-row gap-2">

                        <div className="col-start-1 col-span-1 mt-3">
                            <button
                            type="button"
                            onClick={ () => handleOnAdd( 'targetStudent' ) }
                            // onClick={ () => handleOnAdd() }
                            className="flex text-cyan-700 focus:outline-none" >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Añadir información 
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="">
                <p>¿Qué aprenderán las personas con este curso?</p>
                <div className="mb-4 mt-3 text-sm font-medium">
                    {

                    learnValue?.map(( apre, index ) => (

                        <div 
                        key={ apre._id || index }

                        className="grid grid-cols-4 grid-flow-row gap-2 space-y-1">

                            <InputField
                                // {...row}
                                type="text"
                                indexParent={index}
                                idParent={apre._id}
                                editingField='learning'
                                name="learning"
                                value={apre.learning}
                                onChange={handleOnChange}
                                placeholder="Ejemplo: Redux, manejar el estado globlal de la aplicación"
                                className="col-start-1 col-span-3 focus:outline-none text-gray-500 rounded-md p-1 pl-2 mt-1"
                            />

                            <button 
                            type="button" 
                            className="flex w-8 h-8 items-center justify-center rounded-md text-gray-400 border border-gray-300" 
                            onClick={() => handleOnRemove(apre._id, index, 'learning')}
                            // onClick={() => handleOnRemoveAprendizaje(apre._id)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                    ))} 
                    <div className="grid grid-cols-4 grid-flow-row gap-2">

                        <div className="col-start-1 col-span-1 mt-3">
                            <button 
                            type="button" 
                            onClick={ () => handleOnAdd( 'learning' ) }
                            // onClick={ () => handleOnAddAprendizaje() }
                            className="flex text-cyan-700 focus:outline-none" >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Añadir información 
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="">
                <p>¿Qué conocimientos recomiendas tener para avanzar con este curso?</p>
                <div className="mb-4 mt-3 text-sm font-medium">
                    {
                    prevKnowValue?.map(( pk, index) => (

                        <div 
                        key={ pk._id || index }
                        className="grid grid-cols-4 grid-flow-row gap-2 space-y-1">

                            <InputField
                                // {...row}
                                type="text"
                                indexParent={index}
                                idParent={pk._id}
                                editingField='prevKnowledge'
                                name="prevKnowledge"
                                value={pk.prevKnowledge}
                                onChange={handleOnChange}
                                placeholder="Ejemplo: Javascript, HTML, CSS"
                                className='col-start-1 col-span-3 focus:outline-none text-gray-500 rounded-md p-1 pl-2 mt-1'
                            />

                            <button 
                            type="button" 
                            className="flex w-8 h-8 items-center justify-center rounded-md text-gray-400 border border-gray-300" 
                            onClick={() => handleOnRemove(pk._id, index, 'prevKnowledge')}
                            >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                            </button>
                        </div>

                    ))}
                    <div className="grid grid-cols-4 grid-flow-row gap-2">

                        <div className="col-start-1 col-span-1 mt-3">
                            <button 
                            type="button" 
                            onClick={ () => handleOnAdd( 'prevKnow' ) }
                            className="flex text-cyan-700 focus:outline-none" >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Añadir información 
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button type="submit" 
                className='justify-self-end px-3 py-3 text-base font-medium rounded-md text-white 
                bg-blue-600 hover:bg-blue-700 focus:outline-none'
                style={disableCursor ? {opacity: "0.4", cursor:'not-allowed'} : {}}
                disabled={ disableCursor }
                >
                    Guardar información
                </button>
            </div> 

        </form>
    </div>
  )
}
