import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Child } from "./child.entity";
import { CreateChildDto } from "../dto/child.dto";

@Injectable()
export class ChildService {

  constructor(
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>
  ) {
  }

  findAllChildren(): Promise<Child[]> {
    return this.childRepository.find();  // Retorna todas las entidades Child
  }

  async findOneChild(id: number): Promise<Child> {
    const child = await this.childRepository.findOneBy({id})
    if (!child) throw new NotFoundException(`Child with id ${id} not found`, {cause: new Error(), description: `Child with id ${id} not found`});
    else    return this.childRepository.findOneBy({ id });  // Retorna una entidad Child por id
  }

  createChild(createChildDto: CreateChildDto): Promise<Child> {
    const child = this.childRepository.create(createChildDto);
    return this.childRepository.save(child);
  }

  async removeChild(id: number): Promise<void> {
    const child = await this.findOneChild(id);
    if (!child) throw new NotFoundException(`Child with id ${id} not found`, {cause: new Error(), description: `Child with id ${id} not found`});
    else await this.childRepository.delete(id);  // Elimina una entidad Child por id
  }

  async updateChild(id: number, child: Partial<Child>): Promise<Child> {
    const childToUpdate = await this.findOneChild(id);
    if (!childToUpdate) throw new NotFoundException(`Child with id ${id} not found`, {cause: new Error(), description: `Child with id ${id} not found`});
    else
    await this.childRepository.update(id, child);  // Actualiza una entidad Child por id
    return this.findOneChild(id);  // Retorna la entidad Child actualizada
  }

}
