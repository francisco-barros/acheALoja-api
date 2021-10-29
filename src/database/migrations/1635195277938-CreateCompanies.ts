import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompanies1635195277938 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
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
            name: 'phone',
            type: 'varchar'
          },
          {
            name: 'cep',
            type: 'varchar'
          },
          {
            name: 'address',
            type: 'varchar'
          },
          {
            name: 'number',
            type: 'varchar'
          },
          {
            name: 'complement',
            type: 'varchar'
          },
          {
            name: 'neighborhood',
            type: 'varchar'
          },
          {
            name: 'city',
            type: 'varchar'
          },
          {
            name: 'state',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'varchar'
          },
          {
            name: 'longitude',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'priority',
            type: 'boolean',
            default: false
          },
          {
            name: 'site',
            type: 'varchar'
          },
          {
            name: 'facebook',
            type: 'varchar'
          },
          {
            name: 'instagram',
            type: 'varchar'
          },
          {
            name: 'active',
            type: 'boolean',
            default: true
          },
          {
            name: 'cpfCnpj',
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
          name: 'FKUserCompany',
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
    await queryRunner.dropTable('company')
  }
}
