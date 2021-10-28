import { celebrate, Joi, Segments } from 'celebrate'
import Validate from 'validate-cpf-joi'

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    cpf: Validate.document().cpf().required(),
    phone: Joi.string().optional(),
    cellphone: Joi.string().optional(),
    admin: Joi.boolean().optional(),
    active: Joi.boolean().optional()
  })
})
