import { CompanyRepository } from '../../repositories'
import { Company } from '../../entities/Company'

export class ListCompanyService {
  constructor (private readonly companyRepository: CompanyRepository) {}

  async execute (
    page: number,
    limit: number
  ): Promise<Company[] | boolean> {
    const companies = await this.companyRepository.find({
      take: limit,
      skip: (page - 1) * limit
    })
    return companies
  }
}
