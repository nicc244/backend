import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UserModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
