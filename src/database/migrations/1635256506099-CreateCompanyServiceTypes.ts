import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanyServiceTypes1635256506099 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companyServiceType',
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
            name: 'serviceTypeId',
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
          name: 'FKCompanyCompanyServiceType',
          referencedTableName: 'company',
          referencedColumnNames: ['id'],
          columnNames: ['companyId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKUserCompanyServiceType',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['userId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }, {
          name: 'FKServiceTypeCompanyServiceType',
          referencedTableName: 'serviceType',
          referencedColumnNames: ['id'],
          columnNames: ['serviceTypeId'],
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companyServiceType')
  }
}
