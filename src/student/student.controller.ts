import { Body, Controller, Get, Param, Post, Put, Query, Delete, HttpCode, Header } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';



@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ){}

    @Get()
    getStudents() {
        return this.studentService.getStudents();
    }

    @Post()
    createStudent(@Body() data: CreateStudentDto) {
        return this.studentService.createStudent(data);
    }
    
    
    @Delete(':id')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    deleteStudent(@Param('id') id: string) {
      return this.studentService.deleteStudent(+id);
    }
      



    @Delete()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    deleteAllStudents() {
      return this.studentService.deleteAll();
    }

    


    /*
    @Delete()
    deleteAllStudents() {
        return this.studentService.deleteAll();
    }
    */

}
