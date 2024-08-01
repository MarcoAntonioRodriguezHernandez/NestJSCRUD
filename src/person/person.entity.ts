import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Child } from "../child/child.entity";
import { House } from "../house/house.entity";

@Entity()
export class Person{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  houseId: number;  // Añadir la columna houseID

  @OneToMany(() => Child, (child) => child.person)
  children: Child[];

  @ManyToOne(() => House, (house) => house.residents)
  house: House;
}