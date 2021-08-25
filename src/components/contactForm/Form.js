import React, { useEffect, useState } from 'react';
import { allowEmailCharacters, allowLettersOnly, formatInput, limitPhone } from '../../validations';
import {DivForm, ContactForm, Subtitle, Text, AreaText, 
    Label, Input, TextArea, SendInput, Error} from './ContactElements';
import useForm from '../../hooks/UseForm';
import ValidateInfo from './ValidateInfo';

export default function Form({ submitForm, subject }){
    const [text, setText] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        Comment: ''
    });

    const {handleChange, handleSubmit, errors} = useForm(values, setValues, submitForm,ValidateInfo);

    useEffect(() => {
        console.log(subject);
        if(subject === 'Training'){
            setText('Me gustaría recibir capacitación.');
        }else if(subject === 'Free'){
            setText('Quiero recibir mis folios gratis.')
        }else{
            setText('');
        }
    }, [subject]);


    return(
        <DivForm>
            <Subtitle>Contáctanos</Subtitle>
            <form onSubmit={handleSubmit}>
                <ContactForm>
                    <Text>
                        <Label>Nombre</Label>
                        <Input 
                        id={'name'}
                        type={'text'} 
                        placeholder={'Nombre'} 
                        name={'name'} 
                        value={values.name.replace(/\s+/g, ' ')} 
                        onChange={handleChange}
                        onKeyPress={allowLettersOnly}
                        />
                        {errors.name && <Error>{errors.name}</Error>}
                    </Text>
                    <Text>
                        <Label>Correo</Label>
                        <Input 
                        id={'email'} 
                        type={'text'} 
                        placeholder={'Correo'} 
                        name={'email'} 
                        value={values.email}
                        onKeyPress={allowEmailCharacters} 
                        onChange={handleChange}
                        />
                        {errors.email && <Error>{errors.email}</Error>}   
                    </Text>
                    <Text>
                        <Label>Celular</Label>
                        <Input 
                        id={'phone'}
                        type={'number'} 
                        placeholder={'Teléfono'} 
                        name={'phone'}
                        onInput={limitPhone}
                        values={values.phone} 
                        onChange={handleChange}
                        onKeyDown={formatInput}
                        />
                        {errors.phone && <Error>{errors.phone}</Error>}   
                    </Text>
                    <AreaText>
                        <Label>Comentario o Sugerencia</Label>
                        <TextArea 
                        id={'Comment'}
                        placeholder={'Escribe algo...'} 
                        name={'Comment'}
                        values={values.Comment.replace(/\s+/g, ' ')}
                        onChange={handleChange}
                        defaultValue={text}
                        />
                        {errors.Comment && <Error>{errors.Comment}</Error>}
                    </AreaText>
                    <SendInput/>
                </ContactForm>
            </form>
        </DivForm>
    );
}