import { types } from "../types/types";
import { fetchWithToken } from "../helpers/fetch";
import { prepareData } from "../helpers/prepareData";

//Load all courses created by an instructor
export const cursoStartLoading = () => {
    return async( dispatch ) => {

        try {

            const resp = await fetchWithToken( 'course/instructor' );
            const body = await resp.json(); //retorna el arreglo de todas las notas

            if(body.ok){
                
                const courseInstructor = prepareData( body.cursosInstructor );
                // const seccionesxcursos = prepareData( body.seccionesxcursos );
                
                dispatch( courseLoaded( courseInstructor ) );
                // dispatch( seccionesXcursoLoaded( seccionesxcursos ) );
            }else{
                console.log('body.msg', body.msg) //Mostrar el mensaje y redireccionar en caso de que entre
            }

   
        } catch ( error ) {
            console.log( error )
        }

    }
}

const courseLoaded = ( courseInstructor ) => ({
    type: types.courseLoaded,
    payload: courseInstructor
})

// const seccionesXcursoLoaded = (seccionesxcursos) =>({
//     type: types.seccionesXcursoLoaded,
//     payload: seccionesxcursos
// })


//Add course
export const courseStartAddNew = ( course ) => {
    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {
            const resp = await fetchWithToken('course/instructor/new-course', course, 'POST');
            const body = await resp.json();

            if ( body.ok ) {

                console.log('body', body)
                course._id = body.course._id;
                course.courseTitle = body.course.courseTitle
                course.description = body.course.description
                course.thumbnail = body.course.thumbnail
                course.author = {
                    _id: uid,
                    name: name
                }
                course.targetStudents = body.course.targetStudents
                course.learning = body.course.learning
                course.prevKnowledge = body.course.prevKnowledge
                course.isPrivate = body.course.isPrivate //isPrivate
                course.category = body.course.category

                course.qualification = body.course.qualification
                course.language = body.course.language
                course.courseLevel = body.course.courseLevel
                course.numberPublications = body.course.numberPublications
                course.totalReviews = body.course.totalReviews
                
            
                dispatch( courseAddNew( course ) ); 
                dispatch( courseSetActive( course ) );       


            }else if( body.errores ){

            }
           


        } catch (error) {
            console.log(error);
        }

    }
}

const courseAddNew = ( course ) => ({
    type: types.courseAddNew,
    payload: course
});

export const courseSetActive = ( course ) => ({
    type: types.courseSetActive,
    payload: {...course}
});


/**
 * Target Student
*/

export const startAddTargetStudent = () =>{
    return async( dispatch, getState ) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {

            const resp = await fetchWithToken(`course/instructor/add-target-student`, { _id }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {

                dispatch( courseSetActive( body.course ) )

            } else {
              
            }


        } catch (error) {
            console.log(error)
        }
    }
}

export const startUpdateTargetStudent = ( targetStudent ) => {
    return async(dispatch, getState) => {

        const { _id } = getState().coursesI.activeCourse;

        try {

            const resp = await fetchWithToken(`course/instructor/edit-target-student/${ _id }`, targetStudent, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                
                dispatch( courseSetActive( body.course ) )
            } else {

            }


        } catch (error) {
            console.log(error)
        }

    }
}

export const startDeleteTargetStudent = ( targetStudent ) => {
    return async ( dispatch, getState ) => {

        const { _id } = getState().coursesI.activeCourse; //id
        
        try {
            const resp = await fetchWithToken(`course/instructor/delete-target-student/${ _id }`, targetStudent, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
      
                dispatch( courseSetActive( body.course ) )

            } else {

            }


        } catch (error) {
            console.log(error)
        }

    }
}


/**
 *  Learning 
 */ 

export const startAddLearning = () =>{
    return async( dispatch, getState ) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {

            const resp = await fetchWithToken(`course/instructor/add-learning`, { _id }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {

                dispatch( courseSetActive( body.course ) )

            } else {
         
            }


        } catch (error) {
            console.log(error)
        }
    }
}

export const startUpdateLearning = ( learning ) => {
    return async(dispatch, getState) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {

            const resp = await fetchWithToken(`course/instructor/edit-learning/${_id}`, { learning }, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( courseSetActive( body.course ) )
                
            } else {
      
            }


        } catch (error) {
            console.log(error)
        }

    }
}

export const startDeleteLearning = ( learning ) => {
    return async ( dispatch, getState ) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {
            const resp = await fetchWithToken(`course/instructor/delete-learning/${ _id }`, learning, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {

                dispatch( courseSetActive( body.course ) )

            } else {
   
            }


        } catch (error) {
            console.log(error)
        }

    }
}

/**
* Prev Knowledge
*/

export const startAddPrevKnowledge = () =>{
    return async( dispatch, getState ) => {
        const { _id } = getState().coursesI.activeCourse;
        
        try {

            const resp = await fetchWithToken(`course/instructor/add-prev-knowledge`, { _id }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {
                
                dispatch( courseSetActive( body.course ) )

            } else {
              
            }


        } catch (error) {
            console.log(error)
        }
    }
}

export const startUpdatePrevKnowledge = ( prevKnowledge ) => {
    return async(dispatch, getState) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {

 
            const resp = await fetchWithToken(`course/instructor/edit-prev-knowledge/${_id}`, { prevKnowledge }, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( courseSetActive( body.course ) )

            } else {
               
            }


        } catch (error) {
            console.log(error)
        }

    }
}

export const startDeletePrevKnowledge = ( prevKnowledge ) => {
    return async ( dispatch, getState ) => {

        const { _id } = getState().coursesI.activeCourse;
        
        try {
            const resp = await fetchWithToken(`course/instructor/delete-prev-knowledge/${ _id }`, prevKnowledge, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
               dispatch( courseSetActive( body.course ) )

            } else {
             
            }


        } catch (error) {
            console.log(error)
        }

    }
}


/**
 * Add/update information
 */

 export const startAddUpdateInformation = ( information ) => {
    return async(dispatch, getState) => {

        const { _id } = getState().coursesI.activeCourse;
        console.log('information', information)
        
        try {

            // const resp = await fetchWithToken(`cursos/${ activeCurso.id }`, estudiantesObjetivo, 'PUT' );
            const resp = await fetchWithToken(`course/instructor/manage-information/${_id}`, { information }, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                console.log('body', body)
                dispatch( courseSetActive( body.course ) )

            } else {
                // Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}
