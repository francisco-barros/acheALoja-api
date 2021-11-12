import { CompanyRepository } from '../../repositories'

export class CountCompanyService {
  constructor (private readonly companyRepository: CompanyRepository) {}

  async execute (): Promise<number> {
    return await this.companyRepository.count()
  }
}
