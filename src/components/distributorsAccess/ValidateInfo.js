export default function ValidateInfo(values){
    let errors = {}
    if(!values.enterprise.trim()){
        errors.enterprise = "El nombre de la empresa es requerido"
    }else if(values.enterprise.length < 3){
        errors.enterprise = "El nombre no puede ser tan corto"
    }

    if(!values.address.trim()){
        errors.address = "La dirección es requerida"
    }else if(values.address.length < 3){
        errors.address = "La dirección no puede ser tan corta"
    }

    if(!values.city.trim()){
        errors.city = "La ciudad es requerida"
    }else if(values.city.length < 3){
        errors.city = "El nombre de la ciudad no puede ser tan corto"
    } else if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s'-]+/.test(values.name)) {
        errors.name = "Ingresa una ciudad válida"
    }

    if(!values.state.trim()){
        errors.state = "El Estado es requerido"
    }else if(values.state.length < 3){
        errors.state = "El Estado no puede ser tan corto"
    } else if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s'-]+/.test(values.name)) {
        errors.name = "Ingresa un estado válido"
    }

    if(!values.name.trim()){
        errors.name = "El nombre es requerido"
    }else if(values.name.length < 3){
        errors.name = "El nombre no puede ser tan corto"
    } else if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s'-]+/.test(values.name)) {
        errors.name = "Ingresa un nombre válido"
    }
    
    if(!values.phone){
        errors.phone = "El número teléfono es requerido"
    }else if(values.phone.length !== 10){
        errors.phone = "El número debe tener 10 carácteres"
    }

    if(!values.email){
        errors.email= "El correo es requerido"
    }else if(!/^[A-Z0-9._%+—]+@[A-Z0-9.—]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "La dirección de correo no es válida"
    }
    return errors;
}