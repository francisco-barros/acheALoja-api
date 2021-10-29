import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAlias1635253579297 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alias',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'userId',
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
          name: 'FKUserAlias',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKCategoryAlias',
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
    await queryRunner.dropTable('alias')
  }
}
