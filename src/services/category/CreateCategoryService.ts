import { CategoryRepository } from '../../repositories'
import { CategoryParams } from '../../types'
import { badRequest, forbidden } from '../../errors'
import { Category } from '../../entities/Category'
import { getUser } from '../../utils'

export class CreateCategoryService {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async execute ({
    name,
    userId
  }: CategoryParams): Promise<Category | Error> {
    if ((await this.categoryRepository.findOne({ name })) != null) {
      return badRequest('Category already exists')
    }

    const user = await getUser(userId)

    if (user === undefined || !user.admin || !user.active) {
      return forbidden('User cannot create a category')
    }

    const category = this.categoryRepository.create({
      name,
      userId
    })

    await this.categoryRepository.save(category)

    return category
  }
}
