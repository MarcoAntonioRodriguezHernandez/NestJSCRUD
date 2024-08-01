import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Person } from "./person.entity";
import { CreatePersonDto, UpdatePersonDto } from "../dto/person.dto";

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) {
  }

  findAllPeople(): Promise<Person[]> {
    return this.personRepository.find();  // Retorna todas las entidades Person
  }

  // @ts-ignore
  async findOnePerson(id: number): Promise<Person> {
    const person = await this.personRepository.findOneBy({id});
    if (!person) throw new NotFoundException(`Person with id ${id} not found`, {cause: new Error(), description: `Person with id ${id} not found`});
    else return this.personRepository.findOneBy({ id });  // Retorna una entidad Person por id
  }

  createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = this.personRepository.create(createPersonDto);  // Crea una nueva entidad Person a partir del DTO
    return this.personRepository.save(person);  // Guarda la nueva entidad Person
  }

  async removePerson(id: number): Promise<void> {
    const person = await this.findOnePerson(id);
    if (!person) throw new NotFoundException(`Person with id ${id} not found`, {cause: new Error(), description: `Person with id ${id} not found`});
    await this.personRepository.delete(id);  // Elimina una entidad Person por id
  }

  async updatePerson(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {  // Usar el DTO
    const personToUpdate = await this.findOnePerson(id);
    if (!personToUpdate) throw new NotFoundException(`Person with id ${id} not found`, {cause: new Error(), description: `Person with id ${id} not found`});
    else
    await this.personRepository.update(id, updatePersonDto);  // Actualiza una entidad Person por id
    return this.findOnePerson(id);  // Retorna la entidad Person actualizada
  }
}
