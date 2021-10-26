import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyCategories1635257352598 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companyCategory',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'userId',
            type: 'uuid'
          },
          {
            name: 'companyId',
            type: 'uuid'
          },
          {
            name: 'categoryId',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [{
          name: 'FKCompanyCompanyCategory',
          referencedTableName: 'company',
          referencedColumnNames: ['id'],
          columnNames: ['companyId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKUserCompanyCategory',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKCategoryCompanyCategory',
          referencedTableName: 'category',
          referencedColumnNames: ['id'],
          columnNames: ['categoryId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companyCategory')
  }
}
