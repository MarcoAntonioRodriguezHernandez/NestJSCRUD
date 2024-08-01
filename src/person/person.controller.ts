import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { PersonService } from "./person.service";
import { Person } from "./person.entity";
import { CreatePersonDto, UpdatePersonDto } from "../dto/person.dto";

@Controller("person")
export class PersonController {

  constructor(private personService: PersonService) {
  }

  @Get()
  getAllPeople() {
    return this.personService.findAllPeople();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Person> {
      return await this.personService.findOnePerson(id);
  }

  @Post()
  create(@Body() person: CreatePersonDto): Promise<Person> {
    return this.personService.createPerson(person);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.personService.removePerson(id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() person: UpdatePersonDto): Promise<Person> {  // Usar el DTO
    return this.personService.updatePerson(id, person);
  }

}
