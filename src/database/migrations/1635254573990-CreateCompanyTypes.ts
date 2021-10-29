import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyTypes1635254573990 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companyType',
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
          name: 'FKUserCompanyType',
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
    await queryRunner.dropTable('companyType')
  }
}
