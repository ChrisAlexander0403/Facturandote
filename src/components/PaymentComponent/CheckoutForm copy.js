import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {
    StyledCardElement, Form, Button, Spinner, FormGroup, Label, Input, DropdownList,
    DropdownBtn, DropdownArrow, DropdownContent, DropdownItem, Error
} from './PaymentElements';
import axios from 'axios';
import data from './cfdi.json';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setloading] = useState(false);
    const [selected, setSelected] = useState('CFDI');
    const [isActive, setIsActive] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        enterprise: '',
        rfc: '',
        reason: '',
        cfdi: '',
        email: '',
    });
    const [values, setValues] = useState({
        name: '',
        enterprise: '',
        rfc: '',
        reason: '',
        cfdi: '',
        email: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handlePay = async (e) => {
        e.preventDefault();
        setloading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (!error) {
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post('http://localhost:8000/api/buys', {
                    id,
                    amount: 10000,
                    name: values.name,
                    enterprise: values.enterprise,
                    rfc: values.rfc,
                    email: values.email,
                    reason: values.reason,
                    cfdi: values.cfdi
                });
                setErrors(errors.rfc = data.message.find(e => e.path === 'rfc').errors,
                    errors.name = data.message.find(e => e.path === 'name').errors,
                    errors.enterprise = data.message.find(e => e.path === 'enterprise').errors,
                    errors.reason = data.message.find(e => e.path === 'reason').errors,
                    errors.email = data.message.find(e => e.path === 'email').errors);
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setloading(false);
        } else {
            setloading(false);
        }
    };

    return (
        <Form onSubmit={handlePay}>
            <FormGroup>
                <Label>Nombre</Label>
                <Input
                    id={'name'}
                    placeholder={'Nombre'}
                    name={'name'}
                    onChange={handleChange}
                />
                {errors.name && <Error>{errors.name}</Error>}
            </FormGroup>
            <FormGroup>
                <Label>Empresa</Label>
                <Input
                    id={'enterprise'}
                    placeholder={'Empresa'}
                    name={'enterprise'}
                    onChange={handleChange}
                />
                {errors.enterprise && <Error>{errors.enterprise}</Error>}
            </FormGroup>
            <FormGroup>
                <Label>RFC</Label>
                <Input
                    id={'rfc'}
                    placeholder={'RFC'}
                    name={'rfc'}
                    onChange={handleChange}
                />
                {errors.rfc && <Error>{errors.rfc}</Error>}
            </FormGroup>
            <FormGroup>
                <Label>Razón Social</Label>
                <Input
                    id={'reason'}
                    placeholder={'Razón Social'}
                    name={'reason'}
                    onChange={handleChange}
                />
                {errors.reason && <Error>{errors.reason}</Error>}
            </FormGroup>
            <FormGroup>
                <Label>Correo</Label>
                <Input
                    id={'email'}
                    placeholder={'correo@dominio.com'}
                    name={'email'}
                    onChange={handleChange}
                />
                {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>
            <FormGroup>
                <DropdownList>
                    <DropdownBtn onClick={e => setIsActive(!isActive)}>{selected}<DropdownArrow /></DropdownBtn>
                    {isActive && (
                        <DropdownContent>
                            {data.cfdi.map((option, index) => (
                                <DropdownItem key={index} onClick={(e) => { setSelected(option.content); setIsActive(false); setValues({ cfdi: option.id }) }}>{option.id} - {option.content}</DropdownItem>
                            ))}
                        </DropdownContent>
                    )}
                </DropdownList>
            </FormGroup>
            {/* <StyledCardElement /> */}
            <Button disabled={!stripe || loading ? true : false}>{loading ? <Spinner /> : "Comprar"}</Button>
        </Form>
    );
}