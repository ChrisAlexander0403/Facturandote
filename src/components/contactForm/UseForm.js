import { useState, useEffect } from 'react';

const useForm = (callback, ValidateInfo) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        Comment: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(ValidateInfo(values));
        setIsSubmitting(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors, callback, isSubmitting, values]);
    return { handleChange, values, handleSubmit, errors };
}

export default useForm;