import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('company')
export class Company {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name!: string

  @Column()
  phone!: string

  @Column()
  cep!: string

  @Column()
  address!: string

  @Column()
  number!: string

  @Column()
  complement!: string

  @Column()
  neighborhood!: string

  @Column()
  city!: string

  @Column()
  state!: string

  @Column()
  latitude!: string

  @Column()
  longitude!: string

  @Column()
  description!: string

  @Column()
  priority!: boolean

  @Column()
  site!: string

  @Column()
  facebook!: string

  @Column()
  instagram!: string

  @Column()
  active!: boolean

  @Column()
  cpfCnpj!: string

  @Column()
  userId!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  constructor () {
    this.id = uuid()
  }
}
