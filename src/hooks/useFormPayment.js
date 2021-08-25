import { useState, useEffect } from 'react';

const useFormPayment = (values, setValues, callback, ValidateInfo, cardElement) => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleForm = async () => {
        setErrors(ValidateInfo(values));
        setIsSubmitting(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values, cardElement);
            setIsSubmitting(false);
        }
    }, [errors, callback, isSubmitting, values, cardElement]);
    return { handleChange, values, handleForm, errors, setErrors };
}

export default useFormPayment;