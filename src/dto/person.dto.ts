import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  age: number;
  @IsOptional()
  @IsNumber()
  houseId: number;
}

export class UpdatePersonDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  firstName: string;
  @IsOptional()
  @IsString()
  @MinLength(3)
  lastName: string;
  @IsOptional()
  @IsNumber()
  @Min(1)
  age: number;
  @IsOptional()
  @IsNumber()
  houseId: number;
}