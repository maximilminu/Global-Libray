import { IsNotEmpty, IsString } from "class-validator";

export class CreatePublisherDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    tax_number: string;
}

