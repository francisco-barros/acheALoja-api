import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCategories1635254226291 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
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
          name: 'FKUserCategory',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('category')
  }
}
