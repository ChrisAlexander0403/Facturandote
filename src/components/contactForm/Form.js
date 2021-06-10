import React from 'react';
import {DivForm, ContactForm, Subtitle, Text, AreaText, 
    Label, Input, TextArea, SendInput, Error} from './ContactElements';
import useForm from './UseForm';
import ValidateInfo from './ValidateInfo';

export default function Form({submitForm}){

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,ValidateInfo);

    function formatInput(e){
        // Prevent characters that are not numbers ("e", ".", "+" & "-") 
        let checkIfNum;
        if (e.key !== undefined) {
          // Check if it's a "e", ".", "+" or "-"
          checkIfNum = e.key === "e" || e.key === "." || e.key === "+" || e.key === "-" ;
        }
        else if (e.keyCode !== undefined) {
          // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
          checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
        }
        return checkIfNum && e.preventDefault();
      }

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
                        value={values.name} 
                        onChange={handleChange}
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
                        values={values.phone} 
                        onChange={handleChange}
                        onKeyDown={formatInput}
                        />
                        {errors.phone && <Error>{errors.phone}</Error>}   
                    </Text>
                    <AreaText>
                        <Label>Comentario o Sugerencia</Label>
                        <TextArea id={'Comment'}
                        placeholder={'Escribe algo...'} 
                        name={'Comment'}
                        values={values.Comment}
                        onChange={handleChange}
                        />
                        {errors.Comment && <Error>{errors.Comment}</Error>}
                    </AreaText>
                    <SendInput/>
                </ContactForm>
            </form>
        </DivForm>
    );
}