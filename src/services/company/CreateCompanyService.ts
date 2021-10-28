import { CompanyRepository } from '../../repositories'
import { CompanyParams } from '../../types'
import { badRequest } from '../../errors'
import { Company } from '../../entities/Company'

export class CreateCompanyService {
  constructor (private readonly companyRepository: CompanyRepository) {}

  async execute ({
    name,
    phone = '',
    cep = '',
    address = '',
    number = '',
    complement = '',
    neighborhood = '',
    city = '',
    state = '',
    latitude = '',
    longitude = '',
    description = '',
    priority = false,
    facebook = '',
    instagram = '',
    active = true,
    cpfCnpj,
    userId
  }: CompanyParams): Promise<Company | Error> {
    if ((await this.companyRepository.findOne({ cpfCnpj })) != null) {
      return badRequest('Company already exists')
    }

    const company = this.companyRepository.create({
      name,
      phone,
      cep,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      latitude,
      longitude,
      description,
      priority,
      facebook,
      instagram,
      active,
      cpfCnpj,
      userId
    })

    await this.companyRepository.save(company)

    return company
  }
}
