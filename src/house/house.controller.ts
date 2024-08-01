import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { HouseService } from "./house.service";
import { House } from "./house.entity";

@Controller('house')
export class HouseController {

  constructor(private houseService: HouseService) {
  }

  @Get()
  getAllHouses() {
    return this.houseService.findAllHouses();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<House> {
    return this.houseService.findOneHouse(id);
  }

  @Post()
  create(@Body() house: House): Promise<House> {
    return this.houseService.createHouse(house);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.houseService.removeHouse(id);
  }

  @Patch(":id")
  update(@Param('id') id: number, @Body() updatedFields: any) {
    return this.houseService.updateHouse(id, updatedFields);
  }

}
