export default function ValidateInfo(values){
    let errors = {}
    if(!values.name.trim()){
        errors.name = "El nombre es requerido"
    }else if(values.name.length < 3){
        errors.name = "El nombre no puede ser tan corto"
    }else if(!/^[a-zA-Z ]+$/i.test(values.name)){
        errors.name = "No puedes ingresar números"
    }
    if(!values.email){
        errors.email= "El correo es requerido"
    }else if(!/^[A-Z0-9._%+—]+@[A-Z0-9.—]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "La dirección de correo no es válida"
    }
    if(!values.phone){
        errors.phone = "El número teléfono es requerido"
    }else if(values.phone.length !== 10){
        errors.phone = "El número debe tener 10 carácteres"
    }
    if(!values.Comment){
        errors.Comment = "El asunto no puede estar vacío"
    }else if(values.Comment.length < 10){
        errors.Comment = "El asunto debe contener al menos 20 carácteres"
    }
    return errors;
}