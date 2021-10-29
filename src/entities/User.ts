import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('user')
export class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  cpf!: string

  @Column()
  phone!: string

  @Column()
  cellphone!: string

  @Column()
  admin!: boolean

  @Column()
  active!: boolean

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  constructor () {
    this.id = uuid()
  }
}
