import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Person } from "../person/person.entity";

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  personId: number;

  @ManyToOne(() => Person, (person) => person.children)
  person: Person;
}