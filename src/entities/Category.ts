import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('category')
export class Category {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name!: string

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
