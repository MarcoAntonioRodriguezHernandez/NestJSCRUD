import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Person } from "../person/person.entity";

@Entity()
export class House{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  area: number;

  @OneToMany(() => Person, (person) => person.house)
  residents: Person[];
}