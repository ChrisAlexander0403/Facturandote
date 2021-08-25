export default function ValidateInfo(values) {
    let errors = {}
    if (!values.name) {
        errors.name = "El nombre es requerido"
    } else if (values.name.length < 5) {
        errors.name = "El nombre no puede ser tan corto"
    } else if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/.test(values.name)) {
        errors.name = "No puedes ingresar números"
    }
    if (!values.enterprise) {
        errors.enterprise = "El nombre de la empresa es requerido"
    } else if (values.enterprise.length < 3) {
        errors.enterprise = "El nombre de la empresa no puede ser tan corto"
    }
    if (!values.reason) {
        errors.reason = "La razón social es requerida"
    } else if (values.reason.length < 3) {
        errors.reason = "La razón social no puede ser tan corta"
    } else if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/.test(values.reason)) {
        errors.reason = "No puedes ingresar números"
    }
    if (!values.rfc) {
        errors.rfc = "El rfc no puede estar vacío"
    } else if (!/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/.test(values.rfc)) {
        errors.rfc = "El rfc es incorrecto"
    }
    if (!values.email) {
        errors.email = "El correo es requerido"
    } else if (!/^[A-Z0-9._%+—]+@[A-Z0-9.—]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "La dirección de correo no es válida"
    }
    if (!values.cfdi){
        errors.cfdi = "Seleccione su CFDI"
    }
    if (values.file.length === 0) {
        errors.file = "Por favor, adjunte el comprobante de pago"
    }
    return errors;
}