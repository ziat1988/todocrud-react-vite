import React, {useEffect, useRef, useState} from 'react'

const useForm = (initValues,callback) => {

    const [values, setValues] = useState(()=>initValues)
    const [error,setError] = useState({})
    const refArray = useRef(new Set());

    const validate= (entity)=>{

        if(!entity.title || entity.title.trim().length === 0){
            setError(prevError=> ({...prevError, title:true}))
            refArray.current.title.focus()
            return false
        }
        setError(prevError=> ({...prevError, title:false}))
        if(!entity.description || entity.description.trim().length === 0){
            setError(prevError=> ({...prevError, description:true}))
            refArray.current.description.focus()
            return false
        }
        setError(prevError=> ({...prevError, description:false}))
        return true;
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        // TODO: validate form
        if(!validate(values)){
            return;
        }
        values.id= Math.random()
        callback(values)
        setValues(initValues) // reset form
        console.log('button is submitted', values)
    }

    const handleEditSubmit = (event)=>{
        event.preventDefault()
        console.log(values)
        if(!validate(values)){
            return;
        }
        callback(values)
    }
    const handleChange = (event) => {

        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    return {
        handleChange,
        handleSubmit,
        handleEditSubmit,
        values,
        setValues,
        error,
        refArray
    }

}

export default useForm