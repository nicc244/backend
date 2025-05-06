import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
    constructor(
        private readonly prisma: PrismaService,
    ){}

    async getStudents() {
        return this.prisma.student.findMany({})
    }

    async createStudent(data: CreateStudentDto){
        return this.prisma.student.create({
            data: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                age: data.age,
            }
        })
    }

}
