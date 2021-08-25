import { useState, useEffect } from 'react';

const useForm = (ValidateInfo, callback, product) => {
    const [values, setValues] = useState({
        name: '',
        enterprise: '',
        rfc: '',
        reason: '',
        email: '',
        cfdi: '',
        file: [],
        price: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValues({ ...values, price: `$${product.pricePlusIVA}`});
        setErrors(ValidateInfo(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors, callback, isSubmitting, values]);
    return { handleChange, values, errors, handleSubmit, setValues };
}

export default useForm;