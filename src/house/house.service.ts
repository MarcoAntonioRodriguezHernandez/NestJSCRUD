import { Injectable, NotFoundException } from "@nestjs/common";
import { House } from "./house.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class HouseService {

  constructor(
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>
  ) {
  }

  findAllHouses(): Promise<House[]> {
    return this.houseRepository.find();  // Retorna todas las entidades House
  }

  findOneHouse(id: number): Promise<House> {
    const house = this.houseRepository.findOneBy({id})
    if (!house) throw new NotFoundException(`House with id ${id} not found`, {cause: new Error(), description: `House with id ${id} not found`});
    else
    return this.houseRepository.findOneBy({ id });
  }

  createHouse(house: House): Promise<House> {
    return this.houseRepository.save(house);  // Crea una nueva entidad House
  }

  async removeHouse(id: number): Promise<void> {
    const house = await this.findOneHouse(id);
    if (!house) throw new NotFoundException(`House with id ${id} not found`, {cause: new Error(), description: `House with id ${id} not found`});
    else
    await this.houseRepository.delete(id);  // Elimina una entidad House por id
  }

  async updateHouse(id: number, updatedFields: any): Promise<House> {
    const house = await this.houseRepository.findOneBy({ id });
    if (!house) throw new NotFoundException(`House with id ${id} not found`, {cause: new Error(), description: `House with id ${id} not found`});
    const newHouse = Object.assign(house, updatedFields);
    return this.houseRepository.save(newHouse);
  }

}
