import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsString()
    @IsNotEmpty()
    surname: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    age: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    address: string;
}