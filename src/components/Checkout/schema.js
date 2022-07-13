import * as Yup from 'yup'

export const schema = Yup.object().shape({
        nombre: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(3,"El nombre es demasiado corto")
                    .max(30, "Máximo 30 caracteres"),
        email: Yup.string()
                    .required("Este campo es obligatorio")
                    .email("Email inválido"),
        direccion: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(3,"La dirección es demasiado corta")
                    .max(30, "Máximo 30 caracteres"),                
    })