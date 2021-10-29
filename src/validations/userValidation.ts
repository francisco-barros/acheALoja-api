import { celebrate, Joi, Segments } from 'celebrate'

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    cpf: Joi.string().required(),
    phone: Joi.string().optional(),
    cellphone: Joi.string().optional(),
    admin: Joi.boolean().optional(),
    active: Joi.boolean().optional()
  })
})
