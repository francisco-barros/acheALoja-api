import { CategoryRepository } from '../../repositories'

export class CountCategoryService {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async execute (): Promise<number> {
    return await this.categoryRepository.count()
  }
}
