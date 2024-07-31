import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  legal_id: string;

  @IsString()
  @IsNotEmpty()
  nationality: string;
}