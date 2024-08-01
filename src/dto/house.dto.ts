import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class createHouseDto{
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  address: string;
  @IsNumber()
  @IsNotEmpty()
  @MinLength(2)
  area: string;
  @IsNumber()
  @IsNotEmpty()
  person_id: number;
}