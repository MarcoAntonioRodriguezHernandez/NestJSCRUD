import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateChildDto {
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
  @IsOptional()
  personId: number;
}

export class UpdateChildDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  lastName: string;

  @IsNumber()
  @IsOptional()
  @IsOptional()
  personId: number;
}