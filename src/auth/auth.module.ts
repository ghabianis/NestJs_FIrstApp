import {Module} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthContoller } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers : [AuthContoller],
    providers : [AuthService,PrismaService],
})

export class AuthModule{

}