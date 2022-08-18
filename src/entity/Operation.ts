import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";

export enum OperationType {
  ENTRY = "ENTRY",
  OUTFLOW = "OUTFLOW",
}

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MaxLength(120)
  concept: string;

  @Column()
  @IsNotEmpty()
  amount: number;

  @Column({
    type: "enum",
    enum: OperationType,
  })
  type: OperationType;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}
