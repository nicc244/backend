import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
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
}
