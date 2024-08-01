import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Child } from "./child.entity";
import { ChildService } from "./child.service";
import { CreateChildDto } from "../dto/child.dto";  // Importar el DTO


@Controller("child")
export class ChildController {
  constructor(private childService: ChildService) {

  }

  @Get()
  getAllPeople() {
    return this.childService.findAllChildren();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Child> {
    return await this.childService.findOneChild(id);
  }

  @Post()
  create(@Body() createChildDto: CreateChildDto): Promise<Child> {  // Usar el DTO
    return this.childService.createChild(createChildDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.childService.removeChild(id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() child: Partial<Child>): Promise<Child> {
    return this.childService.updateChild(id, child);
  }

}
