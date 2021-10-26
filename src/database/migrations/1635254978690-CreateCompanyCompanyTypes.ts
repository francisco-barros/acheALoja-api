import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyCompanyTypes1635254978690 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companyCompanyType',
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
            name: 'companyTypeId',
            type: 'uuid'
          },
          {
            name: 'companyId',
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
          name: 'FKUserCompanyCompanyType',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKCompanyCompanyType',
          referencedTableName: 'company',
          referencedColumnNames: ['id'],
          columnNames: ['companyId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKCompCompanyType',
          referencedTableName: 'companyType',
          referencedColumnNames: ['id'],
          columnNames: ['companyTypeId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companyCompanyType')
  }
}
