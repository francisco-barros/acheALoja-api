import { CategoryRepository } from '../../repositories'
import { Category } from '../../entities/Category'

export class ListCategoryService {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async execute (
    page: number,
    limit: number
  ): Promise<Category[] | boolean> {
    const categories = await this.categoryRepository.find({
      take: limit,
      skip: (page - 1) * limit
    })
    return categories
  }
}
