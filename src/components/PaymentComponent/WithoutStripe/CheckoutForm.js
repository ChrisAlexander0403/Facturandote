import React, { useState, useEffect } from 'react';

import {
    Form, Button, Spinner, FormGroup, Label, Input, DropdownList,
    DropdownBtn, DropdownArrow, DropdownContent, DropdownItem, Error
} from '../PaymentElements';
import data from '../cfdi.json';
import useForm from './useForm';
import ValidateInfo from './ValidateInfo';
import productData from '../../productSlider/ProductSliderData.json';
import File from '../../components/inputFile/inputFile';

export default function CheckoutForm({ id, submitForm, loading }) {
    const [product, setProduct] = useState([]);
    const [selected, setSelected] = useState('CFDI');
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (id.charAt(0) === 'e') {
            setProduct(productData.emision.find(el => el.id === id));
        } else if (id.charAt(0) === 't') {
            setProduct(productData.timbrado.find(el => el.id === id))
        }
    }, [id]);
    const { handleChange, values, errors, handleSubmit, setValues } = useForm(ValidateInfo, submitForm, product);
    
    const updateUploadedFiles = (files) => setValues({ ...values, file: files});

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Nombre</Label>
                <Input
                    id={'name'}
                    placeholder={'Nombre'}
                    name={'name'}
                    value={values.name} 
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
                    value={values.enterprise} 
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
                    value={values.rfc} 
                    onChange={handleChange}
                    onKeyDown={e => e.target.value.toUpperCase()}
                    uppercase={'uppercase'}
                />
                {errors.rfc && <Error>{errors.rfc}</Error>}
            </FormGroup>
            <FormGroup>
                <Label>Razón Social</Label>
                <Input
                    id={'reason'}
                    placeholder={'Razón Social'}
                    name={'reason'}
                    value={values.reason} 
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
                    value={values.email} 
                    onChange={handleChange}
                />
                {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>
            <FormGroup>
                <DropdownList >
                    <DropdownBtn onClick={e => setIsActive(!isActive)}>{selected}<DropdownArrow /></DropdownBtn>
                    {isActive && (
                        <DropdownContent>
                            {data.cfdi.map((option, index) => (
                                <DropdownItem key={index} onClick={(e) => { setSelected(option.content); setIsActive(false); setValues({ ...values, cfdi: option.id }); }}>{option.id} - {option.content}</DropdownItem>
                            ))}
                        </DropdownContent>
                    )}
                </DropdownList>
                {errors.cfdi && <Error>{errors.cfdi}</Error>}
            </FormGroup>
            <FormGroup>
                <File 
                    accept={".pdf,.png,.jpeg,.jpg"} 
                    label={'Comprobante de pago'} 
                    updateFilesCb={updateUploadedFiles}
                />
                {errors.file && <Error>{errors.file}</Error>}
            </FormGroup>
            <Button>{loading ? <Spinner /> : "Comprar"}</Button>
        </Form>
    );
}