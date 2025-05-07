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


    async deleteAll(): Promise<{ count: number }> {
        await this.prisma.$executeRawUnsafe(`DELETE FROM Student`);
        await this.prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='Student'`);
        return { count: 0 };
      }
      


    /*
    async deleteAll(): Promise<{ count: number }> {
        const deleted = await this.prisma.student.deleteMany();
      
        
        await this.prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='student'`);
      
        
        await this.prisma.$executeRawUnsafe(`VACUUM`);
      
        return deleted;
      }
      

    //------------------------------------------


    async deleteAll(): Promise<{ count: number }> {
        const deleted = await this.prisma.student.deleteMany();
        await this.prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='student'`);
        return deleted;
        //return this.prisma.student.deleteMany();
      }
*/
      

      

}
